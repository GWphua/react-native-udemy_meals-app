import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FC } from "react";
import { Image, Platform, Pressable, StyleSheet, Text, View } from "react-native";
import RootStackParamList from "../../models/rootStackParamList";
import MealDetails from "../MealDetail/MealDetails";

interface IMealItem {
  mealId: string;
  title: string;
  imageUrl: string;
  duration: number;
  complexity: string;
  affordability: string;
}

const MealItem: FC<IMealItem> = ({
  mealId,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const pressHandler = () =>
    navigation.navigate("MealDetails", {
      mealId: mealId,
    });

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={pressHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            duration={duration}
            affordability={affordability}
            complexity={complexity}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "ios" ? "visible" : "hidden",
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  buttonPressed: {
    opacity: 0.5,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
});
