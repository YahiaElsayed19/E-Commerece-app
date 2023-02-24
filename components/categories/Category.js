import { useContext } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import { CatContext } from "../../store/cat-context";
function Category({ category }) {
    const catCtx = useContext(CatContext)
    function onPressHandler() {
        catCtx.setCategory(category.id)
    }
    const activeStyle = {
        backgroundColor: Colors.primary100,
    }
    const activeColor = {
        color: "white"
    }
    return (
        <Pressable onPress={onPressHandler} style={({ pressed }) => [styles.container, pressed && styles.pressed, catCtx.category === category.id && activeStyle]}>
            <View>
                <Text style={[styles.Text, catCtx.category === category.id && activeColor]}>{category.name}</Text>
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
        color: Colors.primary100,
        fontStyle: "italic",
    },

});
