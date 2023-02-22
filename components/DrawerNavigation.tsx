import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { FC } from "react";
import RootDrawerParamList from "../models/rootDrawerParamList";
import CategoriesScreen from "../screens/CategoriesScreen";
import FavouriteScreen from "../screens/FavouritesScreen";

const Drawer = createDrawerNavigator<RootDrawerParamList>();

const DrawerNavigator: FC = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#3f2f25" },
        drawerContentStyle: { backgroundColor: "#351401" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: "#e4baa1",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favourites"
        component={FavouriteScreen}
        options={{
          title: "My Favourites",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
