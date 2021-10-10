import { c, css, Props } from "atomico";
import { lighten, darken } from "polished";

function hyperbutton(props: Props<typeof hyperbutton.props>): HTMLElement {
  return (
    <host shadowDom>
      <a href={props.href}>
        <slot></slot>
      </a>
    </host>
  );
}

hyperbutton.props = {
  href: String,
};

hyperbutton.styles = css`
  :host,
  :host a {
    position: relative;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 2.25em;
    padding-top: calc(0.375em - 1px);
    padding-right: 0.75em;
    padding-bottom: calc(0.375em - 1px);
    padding-left: 0.75em;

    /* outline: none; */

    color: #000;
    font-size: 1.5rem;
    line-height: 1.5;
    white-space: nowrap;
    text-align: center;
    text-decoration: none;
    vertical-align: top;

    border: 1px solid transparent;
    border-color: transparent;
    border-width: 1px;
    border-radius: 4px;
    box-shadow: none;
    cursor: pointer;

    -moz-appearance: none;
    -webkit-appearance: none;
  }

  :host(:hover),
  :host(:focus) {
    background-color: ${darken(160 / 255, "#ffffff")};
  }

  :host(:active) {
    background-color: ${darken(200 / 255, "#ffffff")};
  }

  @media (prefers-color-scheme: dark) {
    :host,
    :host a {
      color: #fff;
    }

    :host(:hover),
    :host(:focus) {
      background-color: ${lighten(160 / 255, "#000000")};
    }

    :host(:active) {
      background-color: ${lighten(200 / 255, "#000000")};
    }
  }
`;

export const Hyperbutton = c(hyperbutton);
customElements.define("starstuff-hyperbutton", Hyperbutton);
