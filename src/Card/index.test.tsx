import * as React from "react";
import renderer from "react-test-renderer";
import { Card } from ".";

describe("Card", () => {
  describe("basic usage", () => {
    it("renders correctly", () => {
      const tree = renderer
        .create(
          <Card>
            <h1>Test Card</h1>
            <p>This is an an example of the Card component.</p>
          </Card>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
