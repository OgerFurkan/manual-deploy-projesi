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
	const user = userEvent.setup();
	render(<NameForm />);

	const buttonElement = screen.getByRole("button", { name: /Gönder/i });
	const nameInput = screen.getByLabelText(/isim:/i);
	const surnameInput = screen.getByLabelText(/soyisim:/i);

	await user.type(nameInput, "Furkan");
	await user.type(surnameInput, "Öger");

	expect(buttonElement).toBeEnabled();

	await user.clear(nameInput);
	expect(buttonElement).toBeDisabled();
});
