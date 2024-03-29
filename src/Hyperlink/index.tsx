import { c, css, Props } from "atomico";

function hyperlink(properties: Props<typeof hyperlink.props>): HTMLElement {
  return (
    <host shadowDom>
      <a href={properties.href}>
        <slot></slot>
      </a>
    </host>
  );
}

hyperlink.props = {
  href: String,
};

hyperlink.styles = css`
  :host,
  :host a {
    color: var(--starstuff-hyperlink-default-color);
    text-decoration: none;

    box-shadow: inset 0 -1px 0 0 rgba(var(--starstuff-hyperlink-default-color), 0.5);

    --starstuff-hyperlink-default-color: 0, 0, 0;
  }

  @media screen and (prefers-color-scheme: dark) {
    :host,
    :host a {
      --starstuff-hyperlink-default-color: 255, 255, 255;
    }
  }

  :host(:hover),
  :host(:focus) {
    box-shadow: inset 0 -2px 0 0 rgba(var(--starstuff-hyperlink-default-color), 0.7);
  }
`;

export const Hyperlink = c(hyperlink);
customElements.define("starstuff-hyperlink", Hyperlink);
