import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FC } from "react";
import { Text } from "react-native";
import RootStackParamList from "../models/rootStackParamList";

interface IMealDetailsScreen {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    "MealDetails",
    string
  >;
  route: RouteProp<RootStackParamList, "MealDetails">;
}

const MealDetailScreen: FC<IMealDetailsScreen> = ({ navigation, route }) => {
  return <Text>{route.params.mealId}</Text>;
};

export default MealDetailScreen;
