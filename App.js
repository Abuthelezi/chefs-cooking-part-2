import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ChefsMenu from './ChefsMenu';
import AddDish from './AddDish';
import FilterMenu from './FilterMenu';

const Stack = createStackNavigator();

export default function App() {
  const [menu, setMenu] = useState([]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ChefsMenu">
        <Stack.Screen name="ChefsMenu" options={{ title: 'Menu', headerTitleAlign: 'center' }}>
          {(props) => <ChefsMenu {...props} menu={menu} setMenu={setMenu} />}
        </Stack.Screen>
        <Stack.Screen name="AddDish" options={{ title: 'Dish', headerTitleAlign: 'center' }}>
          {(props) => <AddDish {...props} setMenu={setMenu} />}
        </Stack.Screen>
        <Stack.Screen name="FilterMenu" component={FilterMenu} options={{ title: 'Filter', headerTitleAlign: 'center' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
