import styled from "@emotion/styled";

export const Card = styled.div`
  margin: 1em;

  background-color: rgba(var(--starstuff-card-default-background-color), 0.5);
  border-radius: 10px;
  box-shadow: 0.5em 0.5em 0.75em
    rgba(var(--starstuff-card-default-shadow-color), 0.3);

  transition: box-shadow 1s;

  :active,
  :focus,
  :focus-within,
  :hover {
    box-shadow: 0.8em 0.8em 1em
      rgba(var(--starstuff-card-default-shadow-color), 0.4);
  }

  --starstuff-card-default-background-color: 245, 245, 245;
  --starstuff-card-default-shadow-color: 10, 10, 10;

  @media screen and (prefers-color-scheme: dark) {
    --starstuff-card-default-background-color: 55, 55, 55;
  }
`;
