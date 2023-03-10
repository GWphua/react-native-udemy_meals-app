import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FC, useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import IconButton from "../components/IconButtons";
import List from "../components/MealDetail/List";
import MealDetails from "../components/MealDetail/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import { MEALS } from "../data/dummy-data";
import RootStackParamList from "../models/rootStackParamList";
import { RootState } from "../store";
import { addFavourite, removeFavourite } from "../store/favourites";
import { useAppDispatch, useAppSelector } from "../store/hooks";

interface IMealDetailsScreen {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    "MealDetails",
    string
  >;
  route: RouteProp<RootStackParamList, "MealDetails">;
}

const MealDetailScreen: FC<IMealDetailsScreen> = ({ navigation, route }) => {
  const favouriteMealsId =
    useAppSelector((state: RootState) => state.favouriteMeals.ids) ?? "";
  const dispatch = useAppDispatch();

  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId)!;

  const mealIsFavourite = favouriteMealsId.includes(mealId);

  const changeFavouriteStatusHandler = () => {
    if (mealIsFavourite) {
      dispatch(removeFavourite({ id: mealId }));
    } else {
      dispatch(addFavourite({ id: mealId }));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedMeal.title,
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavourite ? "star" : "star-outline"}
            color="white"
            onPress={changeFavouriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavouriteStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />

          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    maxWidth: "80%",
  },
});
