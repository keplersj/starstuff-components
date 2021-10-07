import { fixture } from "atomico/test-dom";
import { Hyperbutton } from ".";

customElements.define("starstuff-hyperbutton", Hyperbutton);

describe("Hyperbutton", (): void => {
  it("renders correctly", async (): Promise<void> => {
    const element = fixture(
      <Hyperbutton data-testid="starstuff-hyperbutton-shadowdom" href="/test">
        Test Link
      </Hyperbutton>
    );

    await (element as any).updated;

    const queried = document.querySelector(
      "[data-testid=starstuff-hyperbutton-shadowdom]"
    );

    expect(queried).toMatchSnapshot();
    expect(queried?.shadowRoot?.innerHTML).toMatchSnapshot();
  });
});
