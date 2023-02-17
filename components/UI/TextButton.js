import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
function TextButton({ title, onPress, style }) {
    return <Pressable style={({ pressed }) => pressed && styles.pressed} onPress={onPress}>
        <Text style={[styles.title, style]}>{title}</Text>
    </Pressable>
}

export default TextButton;
const styles = StyleSheet.create({
    pressed: {
        opacity: 0.85,
    },
    title: {
        color: Colors.primary100,
        fontSize: 16,
        marginTop: 8,
    },
});
