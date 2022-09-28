import { useContext } from "react";
import { Context as AuthContext } from "./src/context/authContext";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import CreateAccountScreen from "./src/screens/CreateAccountScreen";
import CreateReportScreen from "./src/screens/CreateReportScreen";
import LocationScreen from "./src/screens/LocationScreen";
import LocationsScreen from "./src/screens/LocationsScreen";
import LoginScreen from "./src/screens/LoginScreen";
import PhenomenaScreen from "./src/screens/PhenomenaScreen";
import PhenomenonScreen from "./src/screens/PhenomenonScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import FavouritesScreen from "./src/screens/FavouritesScreen";
import ExploreScreen from "./src/screens/ExploreScreen";
import ReportScreen from "./src/screens/ReportScreen";
import ReportsScreen from "./src/screens/ReportsScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";

const AuthStackNavigator = createStackNavigator();
const ExploreStackNavigator = createStackNavigator();
const ProfileStackNavigator = createStackNavigator();
const BottomTabNavigator = createBottomTabNavigator();

// Unauthenticated routes -- Limited Explore Screen to be added
export const AuthNavigator = () => {
  return (
    <AuthStackNavigator.Navigator screenOptions={{ headerShown: false }}>
		<AuthStackNavigator.Screen 
			name="Welcome" 
			component={WelcomeScreen} 
		/>
      	<AuthStackNavigator.Screen 
			name="Login" 
			component={LoginScreen} 
		/>
      	<AuthStackNavigator.Screen
        	name="CreateAccount"
        	component={CreateAccountScreen}
      	/>
    </AuthStackNavigator.Navigator>
  );
};

export const ExploreNavigator = () => {
  return (
    <ExploreStackNavigator.Navigator screenOptions={{ headerShown: false }}>
      	<ExploreStackNavigator.Screen name="Explore" component={ExploreScreen} />
      	<ExploreStackNavigator.Screen
        	name="Locations"
        	component={LocationsScreen}
      	/>
      	<ExploreStackNavigator.Screen
        	name="Phenomena"
        	component={PhenomenaScreen}
      	/>
      	<ExploreStackNavigator.Screen
        	name="Location"
        	component={LocationScreen}
      	/>
      	<ExploreStackNavigator.Screen
        	name="Phenomenon"
        	component={PhenomenonScreen}
      	/>
      	<ExploreStackNavigator.Screen 
			name="Report" 
			component={ReportScreen}
		/>
    </ExploreStackNavigator.Navigator>
  );
};

export const ProfileNavigator = () => {
  return (
    <ProfileStackNavigator.Navigator screenOptions={{ headerShown: false }}>
      	<ProfileStackNavigator.Screen name="Profile" component={ProfileScreen} />
      	<ProfileStackNavigator.Screen
        	name="My Reports"
        	component={ReportsScreen}
      	/>
    </ProfileStackNavigator.Navigator>
  );
};

// Authenticated Routes
export const MainNavigator = () => {
  return (
    <BottomTabNavigator.Navigator screenOptions={{ headerShown: false }}>
    	<BottomTabNavigator.Screen
			name="ExploreNavigator"
        	component={ExploreNavigator}
        	options={{ 
				tabBarLabel: "Explore",
				tabBarIcon: () => <Ionicons 
					name="search-sharp" 
					size={24} 
					color="black" />
			}}
      	/>
      	<BottomTabNavigator.Screen 
			name="Favourites" 
			component={FavouritesScreen}
			options={({ route }) => ({
				tabBarLabel: "Favourites",
				tabBarIcon: ({focused}) => <Ionicons 
					name={focused ? "heart" : "heart-outline"} 
					size={24} 
					color="black" />
			})} 
		/>
      	<BottomTabNavigator.Screen
        	name="CreateReport"
        	component={CreateReportScreen}
        	options={{ 
				tabBarLabel: "Create Report",
				tabBarIcon: () => <Ionicons 
					name="create-outline" 
					size={24} 
					color="black" />
			}}
      	/>
      	<BottomTabNavigator.Screen
        	name="ProfileNavigator"
        	component={ProfileNavigator}
        	options={{ 
				tabBarLabel: "Profile",
				tabBarIcon: ({focused}) => <MaterialCommunityIcons 
					name={focused ? "account-circle" : "account-circle-outline"} 
					size={24} 
					color="black" />
			}}
      	/>
    </BottomTabNavigator.Navigator>
  );
};

export default function Routes() {
  const { state } = useContext(AuthContext);
  return <>{state.token ? <MainNavigator /> : <AuthNavigator />}</>;
}
