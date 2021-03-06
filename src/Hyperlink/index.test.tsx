import * as React from "react";
import renderer from "react-test-renderer";
import { Hyperlink } from ".";

describe("Hyperlink", (): void => {
  it("renders correctly", (): void => {
    const tree = renderer
      .create(<Hyperlink href="/test">Test Link</Hyperlink>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
