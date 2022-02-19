import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { store } from "../App";
import { RandomBeers } from "./RandomBeers";

describe("RandomBeers", () => {
  let wrapper = mount(
    <Provider store={store}>
      <RandomBeers />
    </Provider>
  );

  it("Display random beer card", () => {
    expect(wrapper.find({ "datatest-id": "random-beer-card" }).exists()).toBe(
      true
    );
  });

  it("Don't display content before data", () => {
    expect(wrapper.find({ "datatest-id": "random-beer-title" }).exists()).toBe(
      false
    );
  });

  it("On initial load, show the user a random beer", () => {
    setTimeout(() => {
      expect(
        wrapper.find({ "datatest-id": "random-beer-title" }).exists()
      ).toBe(true);

      expect(
        wrapper.find({ "datatest-id": "random-beer-description" }).exists()
      ).toBe(true);

      expect(
        wrapper.find({ "datatest-id": "random-beer-button" }).exists()
      ).toBe(true);

      expect(
        wrapper.find({ "datatest-id": "random-beer-na-button" }).exists()
      ).toBe(true);
    }, 2000);
  });
});
