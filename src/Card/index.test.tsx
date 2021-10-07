import { fixture } from "atomico/test-dom";
import { Card } from ".";

customElements.define("starstuff-card", Card);

describe("Card", () => {
  describe("basic usage", () => {
    it("renders correctly", async () => {
      const element = fixture(
        <Card>
          <h1>Test Card</h1>
          <p>This is an an example of the Card component.</p>
        </Card>
      );

      await (element as any).updated;

      expect(element).toMatchSnapshot();
    });
  });

  // describe("with customized component", () => {
  //   it("renders correctly", () => {
  //     const CustomCard = Card.withComponent("article");

  //     const tree = renderer
  //       .create(
  //         <CustomCard>
  //           <h1>{"I'm an article!"}</h1>
  //           <p>*Ralphie Wiggum impersonation*</p>
  //         </CustomCard>
  //       )
  //       .toJSON();
  //     expect(tree).toMatchSnapshot();
  //   });
  // });
});
