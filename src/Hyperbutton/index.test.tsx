import * as React from "react";
import renderer from "react-test-renderer";
import { Hyperbutton } from ".";

describe("Hyperbutton", (): void => {
  it("renders correctly", (): void => {
    const tree = renderer
      .create(<Hyperbutton href="/test">Test Link</Hyperbutton>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
