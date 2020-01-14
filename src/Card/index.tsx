import * as React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  --starstuff-card-default-background-color: 245, 245, 245;
  --starstuff-card-default-shadow-color: 10, 10, 10;

  @media screen and (prefers-color-scheme: dark) {
    --starstuff-card-default-background-color: 40, 40, 40;
    --starstuff-card-default-shadow-color: 20, 20, 20;
  }

  border-radius: 10px;
  margin: 1em;
  background-color: rgba(var(--starstuff-card-default-background-color), 0.5);
  box-shadow: 0.5em 0.5em 0.75em
    rgba(var(--starstuff-card-default-shadow-color), 0.3);
`;

interface Props {}

export const Card = ({
  children,
  ...props
}: React.PropsWithChildren<Props>) => (
  <Container {...props}>{children}</Container>
);
