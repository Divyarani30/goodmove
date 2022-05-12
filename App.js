import React from 'react';

import Login from './screens/Login';
import Signup from './screens/Signup';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App({ loaded }) {
  if (!loaded) {
    console.log('coming');
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return null;
}

export default App;
