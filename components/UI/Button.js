import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
function Button({ title, onPress }) {
    return <Pressable style={({ pressed }) => [styles.buttonContainer, pressed && styles.pressed]} onPress={onPress}>
        <View style={styles.button}>
            <Text style={styles.title}>{title}</Text>
        </View>
    </Pressable>
}

export default Button;
const styles = StyleSheet.create({
    buttonContainer: {
        overflow: "hidden",
        width: "100%",
        marginTop: 24,
        elevation:4,
    },
    button: {
        backgroundColor: Colors.primary100,
        borderRadius: 32,
        padding: 16,
        alignItems: "center",
        justifyContent: "center",
    },
    pressed: {
        opacity: 0.85,
    },
    title: {
        fontSize: 16,
        color: "white",
    },
});
