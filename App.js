import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useContext } from 'react';

import Routes from './Routes';
import { Provider as AuthProvider, Context as AuthContext } from './src/context/authContext';

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <SafeAreaProvider>
          <Routes/>
        </SafeAreaProvider>
      </NavigationContainer>
    </AuthProvider>
  );
}
