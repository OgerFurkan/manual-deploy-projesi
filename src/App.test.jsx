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

test("Input Changes Enable Button", () => {
	render(<App />);
	const inputNameElement = screen.getByPlaceholderText(/İsim/i);
	const inputSurnameElement = screen.getByPlaceholderText(/Soyisim/i);
	const buttonElement = screen.getByRole("button");
	inputNameElement.value = "Furkan";
	inputSurnameElement.value = "Öger";
	expect(buttonElement).toBeEnabled();
});
