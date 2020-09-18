import React, { StrictMode } from 'react';
import Helmet from 'react-helmet';
import { CssBaseline } from '@material-ui/core';
import { StylesProvider } from '@material-ui/core/styles';

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
          content="TODO: Add description"
        />
      </Helmet>

      <CssBaseline />
      <StylesProvider injectFirst>{children}</StylesProvider>
    </StrictMode>
  );
};

export default Base;
