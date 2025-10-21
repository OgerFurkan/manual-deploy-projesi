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

test("Input Changes Enable Button", async () => {
	render(<App />);
	const inputNameElement = screen.getByPlaceholderText(/İsim/i);
	const inputSurnameElement = screen.getByPlaceholderText(/Soyisim/i);
	const buttonElement = screen.getByRole("button");
	await user.type(inputNameElement, "Furkan");
	await user.type(inputSurnameElement, "Öger");
	expect(buttonElement).toBeEnabled();
});
