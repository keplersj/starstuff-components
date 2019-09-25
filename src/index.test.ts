import * as Components from ".";

describe("Starstuff Components Library", () => {
  it("contains the correct list of exported components", () => {
    const componentList = Object.keys(Components);

    expect(componentList).toMatchSnapshot();
  });
});
