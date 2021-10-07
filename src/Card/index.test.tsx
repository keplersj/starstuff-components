import { fixture } from "atomico/test-dom";
import { Card } from ".";

customElements.define("starstuff-card", Card);

describe("Card", () => {
  describe("basic usage", () => {
    it("renders correctly", async () => {
      const element = fixture(
        <Card data-testid="starstuff-card-shadowdom">
          <h1>Test Card</h1>
          <p>This is an an example of the Card component.</p>
        </Card>
      );

      await (element as any).updated;

      const queried = document.querySelector(
        "[data-testid=starstuff-card-shadowdom]"
      );

      expect(queried).toMatchSnapshot();
      expect(queried?.shadowRoot?.innerHTML).toMatchSnapshot();
    });
  });
});
