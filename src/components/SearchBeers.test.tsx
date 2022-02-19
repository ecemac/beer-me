import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { store } from "../App";
import { SearchBeers, VALID_CHARACTERS_REGEX } from "./SearchBeers";

describe("SearchBeers", () => {
  let wrapper = mount(
    <Provider store={store}>
      <SearchBeers />
    </Provider>
  );

  it("Displays search bar", () => {
    expect(wrapper.find({ "datatest-id": "search-beer-input" }).exists()).toBe(
      true
    );
  });

  it("Valid input", () => {
    const input = "abc123- ";
    expect(VALID_CHARACTERS_REGEX.test(input)).toBe(true);
  });

  it("Invalid input", () => {
    const input = "abc!123- ";
    expect(VALID_CHARACTERS_REGEX.test(input)).toBe(false);
  });

  it("Search by name and date radio buttons", () => {
    expect(wrapper.find({ "datatest-id": "search-by-name" }).exists()).toBe(
      true
    );

    expect(wrapper.find({ "datatest-id": "search-by-date" }).exists()).toBe(
      true
    );
  });
});
