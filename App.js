import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import ExploreScreen from './src/screens/ExploreScreen';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Explore"
          component={ExploreScreen}
          // options={{ title: "Foliage" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
