import "@testing-library/jest-dom/vitest";
import { afterEach, describe, expect, it } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import App from "../App.jsx";

afterEach(() => {
  cleanup();
});

describe("checa a pagina básica", () => {
  it("renderiza a aplicação sem erros e mostra conteúdos principais", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", {
        name: /site demonstrativo - react \+ aws/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /home/i })).toHaveAttribute(
      "class",
      expect.stringContaining("active")
    );
    expect(screen.getByText(/React AWS Deploy/i)).toBeInTheDocument();
  });

  it("checa a navegação entre sessões", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: /sobre/i }));
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Por que esse projeto importa?"
    );

    fireEvent.click(screen.getByRole("button", { name: /contato/i }));
    expect(
      screen.getByText(/linkedin\.com\/in\/exemplo\.perfil/i)
    ).toBeInTheDocument();
  });

  it("checa a estrutura da lista de destaques", () => {
    render(<App />);

    const items = screen.getAllByRole("listitem");
    expect(items.length).toBeGreaterThan(0);
    items.forEach((item) => {
      expect(item.querySelector("strong")).not.toBeNull();
      expect(item.querySelector("span")).not.toBeNull();
    });
  });
});
