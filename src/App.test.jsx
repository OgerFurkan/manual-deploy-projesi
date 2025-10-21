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

	const nameInput = screen.getByPlaceholderText("İsim");
	const surnameInput = screen.getByPlaceholderText("Soyisim");
	nameInput.fireEvent.change({ target: { value: "Furkan" } });
	surnameInput.fireEvent.change({ target: { value: "Öger" } });
	expect(buttonElement).toBeEnabled();
});
