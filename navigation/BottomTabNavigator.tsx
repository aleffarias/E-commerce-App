import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { header }  from '../styles';
import HomeScreen  from '../screens/HomeScreen';
import CatalogueScreen from '../screens/CatalogueScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { BottomTabParamList, HomeParamList, CatalogueParamList, ProfileParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Catalogue"
        component={CatalogueNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="apps-outline" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="person-outline" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator
      screenOptions={header}
    >
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options= {{ headerTitle: 'Shop App', headerTitleAlign: 'center'}}
      />
    </HomeStack.Navigator>
  );
}

const CatalogueStack = createStackNavigator<CatalogueParamList>();

function CatalogueNavigator() {
  return (
    <CatalogueStack.Navigator
      screenOptions={header}
    >
      <CatalogueStack.Screen
        name="CatalogueScreen"
        component={CatalogueScreen}
        options={{ headerTitle: 'Catalogue', headerTitleAlign: 'center'}}
      />
    </CatalogueStack.Navigator>
  );
}

const ProfileStack = createStackNavigator<ProfileParamList>();

function TabTwoNavigator() {
  return (
    <ProfileStack.Navigator
      screenOptions={header}
    >
      <ProfileStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerTitle: 'Profile', headerTitleAlign: 'center' }}
      />
    </ProfileStack.Navigator>
  );
}

