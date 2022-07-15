import { getGifts } from "../../src/helpers/getGifts";

describe("GetGifts helper", () => {
  test("should return a gift array", async () => {
    const gifts = await getGifts("One Punch");
    // console.log(gifts);
    expect(gifts.length).toBeGreaterThan(0);
    expect(gifts[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
