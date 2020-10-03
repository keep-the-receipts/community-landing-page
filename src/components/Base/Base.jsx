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
        <meta name="title" content="Keep The Receipt" />

        <meta
          name="description"
          content="Keep the receipt is a volunteer-driven project to catalogue South African provincial and national government spending related to COVID-19."
        />

        <link rel="apple-touch-icon" sizes="180x180" href="assets/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="assets/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="assets/favicon-16x16.png" />
        <link rel="manifest" href="assets/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Keep The Receipt" />
        <meta property="og:description" content="Keep the receipt is a volunteer-driven project to catalogue South African provincial and national government spending related to COVID-19. The aim is to convert the existing documents in a machine-readable, searchable format. Codebridge is calling on the broader tech community to help with this task." />
        <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />


        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Keep The Receipt" />
        <meta property="twitter:description" content="Keep the receipt is a volunteer-driven project to catalogue South African provincial and national government spending related to COVID-19. The aim is to convert the existing documents in a machine-readable, searchable format. Codebridge is calling on the broader tech community to help with this task." />
        <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />

        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap" rel="stylesheet" />
      </Helmet>

      <CssBaseline />
      <Global />
      <StylesProvider>{children}</StylesProvider>
    </StrictMode>
  );
};

export default Base;
