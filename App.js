

import React, {Component} from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AnaSayfa from './src/view/AnaSayfa'
import { Text,
} from 'react-native';


class App extends Component {
  
  

  render() {

  const Stack = createStackNavigator();

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Hesap Makinesi" component={AnaSayfa} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
}




export default App;