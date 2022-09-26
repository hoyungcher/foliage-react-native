import { NavigationContainer } from '@react-navigation/native';
import { useContext } from 'react';

import Routes from './Routes';
import { Provider as AuthProvider, Context as AuthContext } from './src/context/authContext';

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Routes/>
      </NavigationContainer>
    </AuthProvider>
  );
}
