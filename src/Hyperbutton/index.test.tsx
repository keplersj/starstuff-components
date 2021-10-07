import { fixture } from "atomico/test-dom";
import { Hyperbutton } from ".";

customElements.define("starstuff-hyperbutton", Hyperbutton);

describe("Hyperbutton", (): void => {
  it("renders correctly", async (): Promise<void> => {
    const element = fixture(<Hyperbutton href="/test">Test Link</Hyperbutton>);

    await (element as any).updated;

    expect(element).toMatchSnapshot();
  });
});
