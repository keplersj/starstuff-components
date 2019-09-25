import * as React from "react";
import renderer from "react-test-renderer";
import { Card } from ".";

describe("Card", () => {
  describe("basic usage", () => {
    it("renders correctly", () => {
      const tree = renderer.create(<Card title="Test" />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("with a location", () => {
    it("renders correctly", () => {
      const tree = renderer.create(<Card title="Test" location="#" />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("with supporting content (in string form)", () => {
    it("renders correctly", () => {
      const tree = renderer
        .create(<Card title="Test" supporting="Supporting Content" />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("with supporting content (in component form)", () => {
    it("renders correctly", () => {
      const tree = renderer
        .create(
          <Card
            title="Test"
            supporting={
              <div>
                <span>Hello</span> <span>world</span>!
              </div>
            }
          />
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("with a custom link", () => {
    it("renders correctly", () => {
      const customLink = jest.fn().mockImplementation((title, location) => (
        <span>
          [{title}]({location})
        </span>
      ));

      const tree = renderer
        .create(
          <Card title="Test" location="#" customLinkComponent={customLink} />
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
      expect(customLink).toHaveBeenCalledTimes(1);
    });
  });
});
