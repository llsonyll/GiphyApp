import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifts } from "../../../src/hooks/gifts/useFetchGifts";

describe("Custom hook FetchGifts test", () => {
  test("should return initial state", () => {
    const { result } = renderHook(() => useFetchGifts("One Punch"));
    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("should return an array with images and isLoading on false", async () => {
    const { result } = renderHook(() => useFetchGifts("One Punch"));
    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );

    const { images, isLoading } = result.current;
    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
