import { ReactElement } from 'react';

export interface GradientContextPropsTypes {
  prevColors: ImageColorsTypes;
  colors: ImageColorsTypes;
  handleSetPrevColors: (colors: ImageColorsTypes) => void;
  handleSetColors: (colors: ImageColorsTypes) => void;
};

export interface GradientContextProviderPropsTypes {
  children: ReactElement;
};

export interface ImageColorsTypes {
  primary: string;
  secondary: string;
};
