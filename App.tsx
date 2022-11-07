import React, { ReactElement } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { StackNavigation } from './src/navigation';
import { GradientContextProvider } from './src/context/GradientContext';

const AppState = ({ children }: { children: ReactElement; }) => (
  <GradientContextProvider>
    {children}
  </GradientContextProvider>
)

const App = () => (
  <NavigationContainer>
    <AppState>
      <StackNavigation />
    </AppState>
  </NavigationContainer>
);

export default App;
