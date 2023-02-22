import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import DrawerNavigator from "./components/DrawerNavigation";
import RootStackParamList from "./models/rootStackParamList";
import MealDetailScreen from "./screens/MealDetailScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import store from "./store";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <>
      <StatusBar style="light" />

      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#351401" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#3f2f25" },
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
            />
            <Stack.Screen name="MealDetails" component={MealDetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}
