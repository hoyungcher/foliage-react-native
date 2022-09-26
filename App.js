import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';


import CreateAccountScreen from './src/screens/CreateAccountScreen';
import CreateReportScreen from './src/screens/CreateReportScreen';
import LocationScreen from './src/screens/LocationScreen';
import LocationsScreen from './src/screens/LocationsScreen';
import LoginScreen from './src/screens/LoginScreen';
import PhenomenaScreen from './src/screens/PhenomenaScreen';
import PhenomenonScreen from './src/screens/PhenomenonScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SavedScreen from './src/screens/SavedScreen';
import ExploreScreen from './src/screens/ExploreScreen';
import ReportScreen from './src/screens/ReportScreen';
import ReportsScreen from './src/screens/ReportsScreen';

let isLoggedIn = false;


const AuthStackNavigator = createStackNavigator();
const ExploreStackNavigator = createStackNavigator();
const ProfileStackNavigator = createStackNavigator();
const BottomTabNavigator = createBottomTabNavigator();


// Unauthenticated routes -- Limited Explore Screen to be added
export const AuthNavigator = () => {
  return (
    <AuthStackNavigator.Navigator>
      <AuthStackNavigator.Screen name="Log In" component={LoginScreen}></AuthStackNavigator.Screen>
      <AuthStackNavigator.Screen name="CreateAccount" component={CreateAccountScreen}></AuthStackNavigator.Screen>
    </AuthStackNavigator.Navigator>
  );
}

export const ExploreNavigator = () => {
  return (
    <ExploreStackNavigator.Navigator>
      <ExploreStackNavigator.Screen name="Explore" component={ExploreScreen}></ExploreStackNavigator.Screen>
      <ExploreStackNavigator.Screen name="Locations" component={LocationsScreen}></ExploreStackNavigator.Screen>
      <ExploreStackNavigator.Screen name="Phenomena" component={PhenomenaScreen}></ExploreStackNavigator.Screen>
      <ExploreStackNavigator.Screen name="Location" component={LocationScreen}></ExploreStackNavigator.Screen>
      <ExploreStackNavigator.Screen name="Phenomenon" component={PhenomenonScreen}></ExploreStackNavigator.Screen>
      <ExploreStackNavigator.Screen name="Report" component={ReportScreen}></ExploreStackNavigator.Screen>
    </ExploreStackNavigator.Navigator>
  );
}

export const ProfileNavigator = () => {
  return (
    <ProfileStackNavigator.Navigator>
      <ProfileStackNavigator.Screen name="Profile" component={ProfileScreen}></ProfileStackNavigator.Screen>
      <ProfileStackNavigator.Screen name="My Reports" component={ReportsScreen}></ProfileStackNavigator.Screen>
    </ProfileStackNavigator.Navigator>
    
  )
}


// Authenticated Routes
export const MainNavigator = () => {
  return (
    <BottomTabNavigator.Navigator>
      <BottomTabNavigator.Screen name="ExploreNavigator" component={ExploreNavigator}></BottomTabNavigator.Screen>
      <BottomTabNavigator.Screen name="Saved" component={SavedScreen}></BottomTabNavigator.Screen>
      <BottomTabNavigator.Screen name="CreateReport" component={CreateReportScreen}></BottomTabNavigator.Screen>
      <BottomTabNavigator.Screen name="ProfileNavigator" component={ProfileNavigator}></BottomTabNavigator.Screen>
    </BottomTabNavigator.Navigator>
  );
}



export default function App() {
  return (
    <NavigationContainer>
      {isLoggedIn ? <MainNavigator/> : <AuthNavigator/>}
    </NavigationContainer>
  );
}
