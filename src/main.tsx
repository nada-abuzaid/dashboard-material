import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Box, ThemeProvider } from '@mui/material';
import router from './routers';
import THEME from './theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={THEME}>
      <Box sx={{
        backgroundColor: 'custom.background', width: '100%', height: '100vh', padding: '0', margin: '0',
      }}
      >
        <RouterProvider router={router} />
      </Box>
    </ThemeProvider>
  </React.StrictMode>,
);
