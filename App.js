import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './paginas/home'
import AddTask from './paginas/addTask'
import DetailsScreen from './paginas/Details'

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
            headerStyle: { backgroundColor: '#b39ddb' },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Form"
          component={AddTask}
          options={{
            title: '#b39ddb',
            headerStyle: { backgroundColor: '#007bff' },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            title: 'Visualidor da Tarefa',
            headerStyle: { backgroundColor: '#007bff' },
            headerTintColor: '#fff',
          }}
        />
        </Stack.Navigator>
        </NavigationContainer>
  );
}