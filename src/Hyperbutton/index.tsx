import { c, css } from "atomico";
import { lighten, darken } from "polished";

function hyperbutton(): HTMLElement {
  return (
    <host shadowDom>
      <slot>
        <a></a>
      </slot>
    </host>
  );
}

hyperbutton.styles = css`
  :host {
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

  :host:hover,
  :host:focus {
    background-color: ${darken(160 / 255, "#ffffff")};
  }

  :host:active {
    background-color: ${darken(200 / 255, "#ffffff")};
  }

  @media (prefers-color-scheme: dark) {
    :host {
      color: #fff;
    }

    :host:hover,
    :host:focus {
      background-color: ${lighten(160 / 255, "#000000")};
    }

    :host:active {
      background-color: ${lighten(200 / 255, "#000000")};
    }
  }
`;

export const Hyperbutton = c(hyperbutton);
customElements.define("starstuff-hyperbutton", Hyperbutton);
