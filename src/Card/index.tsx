import { c, css } from "atomico";

// const OldCard = styled.div``;
function card(): HTMLElement {
  return (
    <host shadowDom>
      <slot></slot>
    </host>
  );
}

card.styles = css`
  :host {
    display: block;
    margin: 1em;

    background-color: rgba(var(--starstuff-card-default-background-color), 0.5);
    border-radius: 10px;
    box-shadow: 0.5em 0.5em 0.75em
      rgba(var(--starstuff-card-default-shadow-color), 0.3);

    --starstuff-card-default-background-color: 245, 245, 245;
    --starstuff-card-default-shadow-color: 10, 10, 10;
  }

  @media screen and (prefers-color-scheme: dark) {
    :host {
      --starstuff-card-default-background-color: 55, 55, 55;
    }
  }

  :host(:active),
  :host(:focus),
  :host(:focus-within),
  :host(:hover) {
    box-shadow: 0.8em 0.8em 1em
      rgba(var(--starstuff-card-default-shadow-color), 0.4);
  }

  @media (prefers-reduced-motion: no-preference) {
    :host {
      transition: box-shadow 1s;
    }
  }
`;

export const Card = c(card);
customElements.define("starstuff-card", Card);
