import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import GiftExpertApp from "../src/GifExpertApp";

describe("GiftExpertApp Test", () => {
  test("should render GiftExpertApp component", () => {
    const { container } = render(<GiftExpertApp />);
    expect(container).toMatchSnapshot();
  });

  test("should render GiftExpertApp component", async () => {
    render(<GiftExpertApp />);
    const newCategory = "World of Warcraft";
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");
    fireEvent.input(input, {
      target: {
        value: newCategory,
      },
    });
    // fireEvent.submit(form);
    // console.log(screen.getAllByRole("heading", { level: 1 }));
    // await waitFor(
    //   expect(
    //     screen.getAllByRole("heading", { level: 1 }).length
    //   ).toBeGreaterThan(1)
    // );
    // expect(await screen.findByText(newCategory)).toBeDefined();
  });
});
