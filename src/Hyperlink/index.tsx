import styled from "@emotion/styled";

export const Hyperlink = styled.a`
  text-decoration: none;
  box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.5);

  :hover {
    box-shadow: inset 0 -2px 0 0 rgba(0, 0, 0, 0.7);
  }

  @media (prefers-color-scheme: dark) {
    box-shadow: inset 0 -1px 0 0 rgba(255, 255, 255, 0.5);

    :hover {
      box-shadow: inset 0 -2px 0 0 rgba(255, 255, 255, 0.7);
    }
  }
`;
