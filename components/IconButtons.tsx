import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FC } from "react";
import { StyleSheet } from "react-native";

interface IIconButton {
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  onPress: () => void;
}

const IconButton: FC<IIconButton> = ({ icon, color, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
