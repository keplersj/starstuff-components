import styled from "@emotion/styled";

export const Hyperlink = styled.a`
  color: var(--starstuff-hyperlink-default-color);
  text-decoration: none;

  box-shadow: inset 0 -1px 0 0 rgba(var(--starstuff-hyperlink-default-color), 0.5);

  :hover,
  :focus {
    box-shadow: inset 0 -2px 0 0 rgba(var(--starstuff-hyperlink-default-color), 0.7);
  }

  --starstuff-hyperlink-default-color: 0, 0, 0;

  @media screen and (prefers-color-scheme: dark) {
    --starstuff-hyperlink-default-color: 255, 255, 255;
  }
`;
