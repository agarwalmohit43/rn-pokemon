import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { routes } from "./appRoute";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {routes.map((route) => {
          return (
            <Stack.Screen
              key={route.name}
              name={route.name}
              component={route.component}
              options={route.options}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
