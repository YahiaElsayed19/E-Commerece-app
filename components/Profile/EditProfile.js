import { View, ScrollView, StyleSheet, ActivityIndicator } from "react-native"
import Button from "../UI/Button";
import TextButton from "../UI/TextButton";
import Input from "../UI/Input";
function EditProfile({ onCancel }) {
    return <ScrollView style={styles.scroll}>
        <View style={styles.screen}>
            <Input
                label="Full name"
                placeholder="enter your name"
                inputMode="text"
                secureTextEntry={false}
                style={styles.input}
            />
            <Input
                label="Phone number"
                placeholder=" 01XXXXXXXXX "
                keyboardType="number-pad"
                secureTextEntry={false}
                style={styles.input}
            />
            <Input
                label="Email"
                placeholder="example@example.exa"
                inputMode="email"
                secureTextEntry={false}
                style={styles.input}
            />
            <Input
                label="Password"
                placeholder="password"
                inputMode="text"
                secureTextEntry={true}
                style={styles.input}
            />
            <View style={styles.button}>
                <Button title="Save" />
            </View>
            <TextButton title="Cancel" onPress={onCancel} style={styles.textButton} />
        </View>
    </ScrollView>
}

export default EditProfile;
const styles = StyleSheet.create({
    scroll: {
        marginVertical: 28,
    },
    screen: {
        flex: 1,
        justifyContent: "center",
        marginHorizontal: 30,
    },
    button: {
        marginHorizontal:90,
        alignItems:"center",
    },
    textButton: {
        fontSize: 20,
        textAlign: "center",
    },
    input: {
        backgroundColor: "white",
    },
});
