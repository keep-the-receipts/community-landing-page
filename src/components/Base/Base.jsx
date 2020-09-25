import React, { StrictMode } from 'react';
import Helmet from 'react-helmet';
import { CssBaseline } from '@material-ui/core';
import { createGlobalStyle } from 'styled-components';
import { StylesProvider } from '@material-ui/core/styles';

const Global = createGlobalStyle`
  body {
    background: #c7c7c7;
  }
`

/**
 * @name Base
 *
 * @description TODO Add description
 */
export const Base = (props) => {
  const { children } = props;

  return (
    <StrictMode>
      <Helmet>
        <title>Keep The Receipt</title>

        <meta
          name="description"
          content="Keep the receipt is a volunteer-driven project to catalogue South African provincial and national government spending related to COVID-19."
        />

        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap" rel="stylesheet" />
      </Helmet>

      <CssBaseline />
      <Global />
      <StylesProvider>{children}</StylesProvider>
    </StrictMode>
  );
};

export default Base;
