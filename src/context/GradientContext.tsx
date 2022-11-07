import React, { createContext, FC, useState } from 'react';

import { GradientContextPropsTypes, GradientContextProviderPropsTypes, ImageColorsTypes } from '../interfaces/context/GradientContext';

export const GradientContext = createContext({} as GradientContextPropsTypes);

export const GradientContextProvider: FC<GradientContextProviderPropsTypes> = ({ children }) => {
  const [prevColors, setPrevColors] = useState<ImageColorsTypes>({
    primary: 'transparent',
    secondary: 'transparent'
  });
  const [colors, setColors] = useState<ImageColorsTypes>({
    primary: 'transparent',
    secondary: 'transparent'
  });

  const handleSetPrevColors = (colors: ImageColorsTypes) => {
    setPrevColors(colors);
  };
  const handleSetColors = (colors: ImageColorsTypes) => {
    setColors(colors);
  };

  return (
    <GradientContext.Provider
      value={{
        prevColors,
        colors,
        handleSetPrevColors,
        handleSetColors
      }}
    >
      {children}
    </GradientContext.Provider>
  );
};
