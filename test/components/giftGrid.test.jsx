import GiftGrid from "../../src/components/GiftGrid";
import { render, screen } from "@testing-library/react";
import { useFetchGifts } from "../../src/hooks/gifts/useFetchGifts";

jest.mock("../../src/hooks/gifts/useFetchGifts");

describe("GiftGrid component test", () => {
  const category = "One Punch";
  xtest("should render empty greed", () => {
    render(<GiftGrid category={category} />);
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
  });

  test("should show loading at begining", () => {
    useFetchGifts.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GiftGrid category={category} />);
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
  });

  test("should show images when those are loaded", () => {
    const gifts = [
      {
        id: 1,
        title: "Saitama",
        url: "https://saitama.jpg",
      },
      {
        id: 2,
        title: "Saitama 2",
        url: "https://saitama2.jpg",
      },
    ];

    useFetchGifts.mockReturnValue({
      images: gifts,
      isLoading: false,
    });

    render(<GiftGrid category={category} />);
    expect(screen.getAllByRole("img").length).toBe(gifts.length);
  });
});
