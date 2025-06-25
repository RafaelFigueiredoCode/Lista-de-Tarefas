import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './paginas/home'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Tela Principal',
            headerStyle: { backgroundColor: '#007bff' },
            headerTintColor: '#fff',
          }}
        />
        </Stack.Navigator>
        </NavigationContainer>
  );
}