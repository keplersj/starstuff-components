import { fixture } from "atomico/test-dom";
import { Hyperlink } from ".";

customElements.define("starstuff-hyperlink", Hyperlink);

describe("Hyperlink", (): void => {
  it("shadow DOM renders correctly", async (): Promise<void> => {
    const element = fixture(
      <Hyperlink data-testid="starstuff-hyperlink-shadowdom" href="/test">
        Test Link
      </Hyperlink>
    );

    await (element as any).updated;

    const queried = document.querySelector(
      "[data-testid=starstuff-hyperlink-shadowdom]"
    );

    expect(queried).toMatchSnapshot();
    expect(queried?.shadowRoot?.innerHTML).toMatchSnapshot();
  });
});
