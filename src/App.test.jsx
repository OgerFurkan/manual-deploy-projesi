import { render, screen } from "@testing-library/react";
import App from "./App";

test("check header", () => {
	render(<App />);
	const headerElement = screen.getByText(/Manuel Deploy Projesi!/i);
	expect(headerElement).toBeInTheDocument();
});

test("Test Button Disabled State", () => {
	render(<App />);
	const buttonElement = screen.getByRole("button", { name: /Gönder/i });
	expect(buttonElement).toBeDisabled();
});

test("Inputlar doldurulduğunda buton aktif olmalı ve silindiğinde pasif olmalı", () => {
	render(<App />);
	const buttonElement = screen.getByRole("button", { name: /Gönder/i });
	const nameInput = screen.getByPlaceholderText(/İsim/i);
	const surnameInput = screen.getByPlaceholderText(/Soyisim/i);

	fireEvent.change(nameInput, { target: { value: "Furkan" } });
	fireEvent.change(surnameInput, { target: { value: "Öger" } });
	expect(buttonElement).toBeEnabled();

	fireEvent.change(nameInput, { target: { value: "" } });
	expect(buttonElement).toBeDisabled();
});
