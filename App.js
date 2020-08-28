

import React, {Component} from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AnaSayfa from './src/view/AnaSayfa'
import { Provider } from 'react-redux';
import store from './src/redux/store';



class App extends Component {
  
  

  render() {

  const Stack = createStackNavigator();

    return (
      <Provider store ={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Hesap Makinesi" component={AnaSayfa} />
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
    );
  };
}




export default App;