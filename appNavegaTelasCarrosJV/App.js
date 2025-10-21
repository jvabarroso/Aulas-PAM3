import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Login from './src/telas/Login';
import Home from './src/telas/Home';
import Lamborghini from './src/telas/Lamborghini';
import Ferrari from './src/telas/Ferrari';
import McLaren from './src/telas/McLaren';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Componente das abas (só aparece após o login)
function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          color = '#d0d';
          size = 30;

          if (route.name === 'Lamborghini') {
            iconName = 'car-sport-outline';
          } else if (route.name === 'Ferrari') {
            iconName = 'speedometer-outline';
          } else if (route.name === 'McLaren') {
            iconName = 'rocket-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        labelStyle: { fontSize: 12 },
        activeTintColor: '#3f64c7',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Lamborghini" component={Lamborghini} />
      <Tab.Screen name="Ferrari" component={Ferrari} />
      <Tab.Screen name="McLaren" component={McLaren} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Tabs" 
          component={Tabs} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}