import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
import { useAppSelector } from "../store/hooks";
import { StyleSheet, View, Text } from "react-native";

const FavouriteScreen = () => {
  const favouriteMealIds = useAppSelector((state) => state.favouriteMeals.ids);

  const favouriteMeals = MEALS.filter((meal) =>
    favouriteMealIds.includes(meal.id)
  );

  if (favouriteMeals.length > 0) {
    return <MealsList items={favouriteMeals} />;
  } else {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You Have No Favourite Meals Yet!</Text>
      </View>
    );
  }
};

export default FavouriteScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
