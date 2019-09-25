import * as React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  :not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;

interface TitleProps {
  children: string;
  location?: string;
  customLinkComponent?: (title: string, location: string) => React.ReactElement;
}

const Title = (props: TitleProps) => {
  const titleText = props.children;

  if (props.location) {
    if (props.customLinkComponent) {
      return props.customLinkComponent(titleText, props.location);
    }

    return (
      <a href={props.location}>
        <h2>{titleText}</h2>
      </a>
    );
  }

  return <h2>{titleText}</h2>;
};

interface Props {
  title: string;
  location?: string;
  customLinkComponent?: (title: string, location: string) => React.ReactElement;
  supporting?: string | React.ReactElement;
}

export const Card = (props: Props) => (
  <Container>
    <Title
      location={props.location}
      customLinkComponent={props.customLinkComponent}
    >
      {props.title}
    </Title>
    {Boolean(props.supporting) && props.supporting}
  </Container>
);
