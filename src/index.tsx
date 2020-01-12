import * as React from "react";
import { render } from "react-dom";
import styled, { createGlobalStyle } from "styled-components";
import {
  color,
  space,
  ColorProps,
  SpaceProps,
  HeightProps,
  WidthProps
} from "styled-system";
import css from "@styled-system/css";

const Global = createGlobalStyle`
  body {
    margin: 0;
    font-size: 16px;
    font-family: "Heebo", sans-serif;
    font-weight: 300;
  }
`;

const Box = styled.div<ColorProps & SpaceProps>`
  ${color}
  ${space}
`;

const centerByFlex = ({
  height = "100vh",
  width = "100vw"
}: {
  height?: HeightProps["height"];
  width?: WidthProps["width"];
}) =>
  css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height,
    width
  });
const CenterByFlex = styled.div`
  ${centerByFlex({})}
`;
const stack = ({ child, mt = 0 }: { child: string; mt?: SpaceProps["mt"] }) =>
  css({
    display: "flex",
    flexDirection: "column",
    [`${child} + ${child}`]: {
      marginTop: mt
    }
  })();
const Stack = styled.div<{ mt?: SpaceProps["mt"] }>`
  ${({ mt }) =>
    stack({
      child: Box,
      mt
    })}
`;

function App() {
  return (
    <div>
      <Global />

      <CenterByFlex>
        <Box color="white" bg="blue" p="1rem">
          box
        </Box>
      </CenterByFlex>
      <Stack mt="1rem">
        <Box color="white" bg="grey" p="1rem">
          stack
        </Box>
        <Box color="white" bg="grey" p="1rem">
          stack
        </Box>
      </Stack>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
