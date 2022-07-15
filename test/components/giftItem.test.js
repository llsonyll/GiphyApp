import { render, screen } from "@testing-library/react";
import GiftItem from "../../src/components/GiftItem/giftItem";

describe("Pruebas del GIFT-ITEM component", () => {
  const title = "Titulo";
  const url = "https://punch.com/saitama.jpg";

  test("should match snapshot", () => {
    const { container } = render(<GiftItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("should show img with url and alt assigned", () => {
    render(<GiftItem title={title} url={url} />);
    // expect(screen.getByRole("img").src).toBe(url);
    // expect(screen.getByRole("img").alt).toBe(title);
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("should render components title", () => {
    render(<GiftItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
