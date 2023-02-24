import { useContext } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import { CatContext } from "../../store/cat-context";
function Category({ category, style }) {
    const catCtx = useContext(CatContext)
    function onPressHandler() {
        catCtx.setCategory(category.id)
    }
    return (
        <Pressable onPress={onPressHandler} style={({ pressed }) => [styles.container, pressed && styles.pressed, style]}>
            <View>
                <Text style={[styles.Text]}>{category.name}</Text>
            </View>
        </Pressable>
    );
}

export default Category;
const styles = StyleSheet.create({
    pressed: {
        backgroundColor: Colors.primary100,
        color: "white",
    },
    container: {
        borderWidth: 1.5,
        borderColor: Colors.primary100,
        width: 100,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        padding: 4,
        margin: 4,
        height: 30,
        maxHeight: 30,
        marginBottom: 10,
    },
    Text: {
        fontWeight: "bold",
        color: "black",
        fontStyle: "italic",
    },
});
