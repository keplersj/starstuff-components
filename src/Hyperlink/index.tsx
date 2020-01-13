import styled from "@emotion/styled";

export const Hyperlink = styled.a`
  --starstuff-hyperlink-default-color: 0, 0, 0;

  @media screen and (prefers-color-scheme: dark) {
    --starstuff-hyperlink-default-color: 255, 255, 255;
  }

  text-decoration: none;
  color: var(--starstuff-hyperlink-default-color);
  box-shadow: inset 0 -1px 0 0 rgba(var(--starstuff-hyperlink-default-color), 0.5);

  :hover {
    box-shadow: inset 0 -2px 0 0 rgba(var(--starstuff-hyperlink-default-color), 0.7);
  }
`;
