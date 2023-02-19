import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

function ProfileElement({ title, info }) {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.titleText}>{title}</Text>
            </View>
            <View>
                <Text style={styles.infoText}>{info}</Text>
            </View>
        </View>
    );
}

export default ProfileElement;
const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 24,
        marginVertical: 12,
        borderRadius: 6,
        flexDirection: "row",
    },
    titleText: {
        color: Colors.primary100,
        fontWeight: "bold",
        fontSize: 18,
    },
    infoText: {
        color: Colors.primary800,
        fontSize: 18,
        marginLeft:5,
    },
});
