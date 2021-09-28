/**
 * @jest-environment jsdom
 */

import * as React from "react";
import * as renderer from "react-test-renderer";
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

  describe("with customized component", () => {
    it("renders correctly", () => {
      const CustomCard = Card.withComponent("article");

      const tree = renderer
        .create(
          <CustomCard>
            <h1>{"I'm an article!"}</h1>
            <p>*Ralphie Wiggum impersonation*</p>
          </CustomCard>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
