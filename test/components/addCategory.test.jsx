import { render, screen, fireEvent } from "@testing-library/react";

import AddCategory from "../../src/components/AddCategory";

describe("Add Category Test", () => {
  test("should receive a function as prop", () => {
    const { container } = render(<AddCategory addNewCategory={() => {}} />);
    expect(container).toMatchSnapshot();
  });

  test("should read input change", () => {
    render(<AddCategory addNewCategory={() => {}} />);
    const inputValue = "Lolito";
    const input = screen.getByRole("textbox");
    fireEvent.input(input, {
      target: {
        value: inputValue,
      },
    });

    expect(input.value).toBe(inputValue);
  });

  test("should call addNewCategory if input got a value", () => {
    const inputValue = "Lolito";
    const addNewCategory = jest.fn();
    render(<AddCategory addNewCategory={addNewCategory} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, {
      target: {
        value: inputValue,
      },
    });

    fireEvent.submit(form);

    expect(input.value).toBe("");
    expect(addNewCategory).toHaveBeenCalled();
    expect(addNewCategory).toHaveBeenCalledTimes(1);
    expect(addNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test("should not call addNewCategory if input got an empty value", () => {
    const inputValue = "";
    const addNewCategory = jest.fn();
    render(<AddCategory addNewCategory={addNewCategory} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, {
      target: {
        value: inputValue,
      },
    });

    fireEvent.submit(form);

    expect(input.value).toBe("");
    expect(addNewCategory).not.toHaveBeenCalled();
    expect(addNewCategory).toHaveBeenCalledTimes(0);
  });
});
