import styled from "@emotion/styled";
import { lighten, darken } from "polished";

export const Hyperbutton = styled.a`
  -moz-appearance: none;
  -webkit-appearance: none;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 4px;
  box-shadow: none;
  display: inline-flex;
  height: 2.25em;
  line-height: 1.5;
  position: relative;
  vertical-align: top;
  text-decoration: none;
  border-width: 1px;
  cursor: pointer;
  justify-content: center;
  padding-bottom: calc(0.375em - 1px);
  padding-left: 0.75em;
  padding-right: 0.75em;
  padding-top: calc(0.375em - 1px);
  text-align: center;
  white-space: nowrap;
  border-color: transparent;
  font-size: 1.5rem;

  /* outline: none; */

  color: #000000;

  :hover,
  :focus {
    background-color: ${darken(160 / 255, "#ffffff")};
  }

  :active {
    background-color: ${darken(200 / 255, "#ffffff")};
  }

  @media (prefers-color-scheme: dark) {
    color: #ffffff;

    :hover,
    :focus {
      background-color: ${lighten(160 / 255, "#000000")};
    }

    :active {
      background-color: ${lighten(200 / 255, "#000000")};
    }
  }
`;
