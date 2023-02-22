import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FC, useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import RootStackParamList from "../models/rootStackParamList";

interface IMealsOverviewScreen {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    "MealsOverview",
    string
  >;
  route: RouteProp<RootStackParamList, "MealsOverview">;
}

const MealsOverviewScreen: FC<IMealsOverviewScreen> = ({
  navigation,
  route,
}) => {
  const categoryId = route.params.categoryId;

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    )!.title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  const displayedMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(categoryId) >= 0
  );

  return <MealsList items={displayedMeals} />;
};

export default MealsOverviewScreen;
