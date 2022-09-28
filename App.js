import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useContext } from 'react';

import Routes from './Routes';
import { Provider as AuthProvider } from './src/context/authContext';
import { Provider as LocationProvider } from './src/context/locationContext';

export default function App() {
  return (
    <LocationProvider>
		<AuthProvider>
			<NavigationContainer>
			<SafeAreaProvider>
				<Routes/>
			</SafeAreaProvider>
			</NavigationContainer>
		</AuthProvider>
    </LocationProvider>
  );
}
