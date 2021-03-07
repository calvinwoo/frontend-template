import { css, SerializedStyles } from '@emotion/react';

export const getGlobalStyles = (): SerializedStyles => css`
  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
    font-family: inherit;
  }

  body {
    font-weight: 400;
    margin: 0;
  }
`;
