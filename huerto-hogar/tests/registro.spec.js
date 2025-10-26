// tests/registro.spec.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Registro from "../src/pages/Registro.jsx";

describe("🧪 Pruebas del formulario Registro.jsx", () => {

  // 🔹 TEST 1: Renderizado del título
  it("1️⃣ Debería renderizar el título del formulario correctamente", () => {
    render(<Registro />);
    // Con Jasmine, verificamos que el elemento no sea nulo, lo que confirma que fue encontrado.
    expect(screen.getByText(/Registro de usuario/i)).not.toBeNull();
  });

  // 🔹 TEST 2: Validación de nombre vacío
  it("2️⃣ Debería mostrar error si el nombre está vacío", () => {
    render(<Registro />);
    const form = screen.getByRole("form", { name: /registro/i });
    fireEvent.submit(form);
    expect(screen.getByText(/El nombre completo es obligatorio/i)).not.toBeNull();
  });

  // 🔹 TEST 3: Validación de dominio de correo
  it("3️⃣ Debería mostrar error si el correo no tiene un dominio permitido", () => {
    render(<Registro />);
    const correoInput = screen.getByLabelText(/Correo/i);
    fireEvent.input(correoInput, { target: { value: "usuario@otrodominio.com" } });
    const form = screen.getByRole("form", { name: /registro/i });
    fireEvent.submit(form);
    expect(screen.getByText(/@duoc\.cl|@profesor\.duoc\.cl|@gmail\.com/i)).not.toBeNull();
  });

  // 🔹 TEST 4: Contraseñas no coinciden
  it("4️⃣ Debería mostrar error si las contraseñas no coinciden", () => {
    render(<Registro />);
    // Usamos el texto exacto de la etiqueta para evitar ambigüedad
    const passwordInput = screen.getByLabelText("Contraseña");
    const confirmInput = screen.getByLabelText("Confirmar contraseña");

    fireEvent.input(passwordInput, { target: { value: "abcd" } });
    fireEvent.input(confirmInput, { target: { value: "xyz" } });

    const form = screen.getByRole("form", { name: /registro/i });
    fireEvent.submit(form);

    expect(screen.getByText(/no coinciden/i)).not.toBeNull();
  });

  // 🔹 TEST 5: Registro exitoso y limpieza del formulario
  it("5️⃣ Debería limpiar el formulario tras un registro exitoso", () => {
    render(<Registro />);
    // Usamos spyOn, que es la función nativa de Jasmine para espiar métodos.
    spyOn(window, 'alert').and.stub();

    fireEvent.input(screen.getByLabelText(/Nombre completo/i), { target: { value: "Juan Pérez" } });
    fireEvent.input(screen.getByLabelText(/Correo/i), { target: { value: "juan@duoc.cl" } });
    fireEvent.input(screen.getByLabelText("Contraseña"), { target: { value: "1234" } });
    fireEvent.input(screen.getByLabelText("Confirmar contraseña"), { target: { value: "1234" } });
    fireEvent.input(screen.getByLabelText(/Teléfono/i), { target: { value: "987654321" } });
    fireEvent.change(screen.getByLabelText(/Región/i), { target: { value: "1" } });
    fireEvent.change(screen.getByLabelText(/Comuna/i), { target: { value: "1" } });

    const form = screen.getByRole("form", { name: /registro/i });
    fireEvent.submit(form);

    expect(window.alert).toHaveBeenCalledWith("✅ Registro exitoso!");

    // ✅ Verifica limpieza de campos (usando .toBe para comparar valores)
    expect(screen.getByLabelText(/Nombre completo/i).value).toBe("");
    expect(screen.getByLabelText(/Correo/i).value).toBe("");
    expect(screen.getByLabelText("Contraseña").value).toBe("");
    expect(screen.getByLabelText("Confirmar contraseña").value).toBe("");
    expect(screen.getByLabelText(/Región/i).value).toBe("-- Región --");
    expect(screen.getByLabelText(/Comuna/i).value).toBe("-- Comuna --");
  });

});