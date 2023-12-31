import React from 'react';
import { createTheme } from '@mui/material/styles';

interface ICustom {
  background: React.CSSProperties['color'];
  white: React.CSSProperties['color'];
  black: React.CSSProperties['color'];
  purple: React.CSSProperties['color'];
  divider: React.CSSProperties['color'];
  fontGray: React.CSSProperties['color'];
  editIcon: React.CSSProperties['color'];
  deleteIcon: React.CSSProperties['color'];
  darkFont: React.CSSProperties['color'];
}

declare module '@mui/material/styles' {
  interface PaletteOptions {
    custom: Partial<ICustom>;
  }
  interface Palette {
    custom: ICustom;
  }
}

const THEME = createTheme({
  palette: {
    primary: {
      main: '#FFDA3C',
    },
    secondary: {
      main: '#252628',
    },
    custom: {
      background: '#1E1F21',
      white: '#FFFFFF',
      black: '#000000',
      purple: '#A9AAC0',
      divider: '#343537',
      fontGray: '#B8B8B8',
      editIcon: '#3E7BFA',
      deleteIcon: '#FF3333',
      darkFont: '#455A64',
    },
  },
  typography: {
    fontFamily: 'Montserrat',
  },
});

export default THEME;
