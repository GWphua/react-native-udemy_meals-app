import { FC } from "react";
import { MEALS } from "../../data/dummy-data";
import Meal from "../../models/meal";
import MealItem from "./MealItem";
import { FlatList, ListRenderItemInfo, StyleSheet, View } from "react-native";

interface IMealsList {
  items: Meal[];
}

const MealsList: FC<IMealsList> = ({ items }) => {
  const renderMealItem = (itemData: ListRenderItemInfo<Meal>) => {
    const item = itemData.item;
    const mealItemProps = {
      mealId: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };
    return <MealItem {...mealItemProps} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
