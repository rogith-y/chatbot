
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from './components/HomePage'
import Login from './components/Login'
import ChatPage from './components/ChatPage'
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
// const Stack = createDrawerNavigator()
class App extends React.Component {
  
  render(){
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Chat" component={ChatPage} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
};
}
 
export default App;