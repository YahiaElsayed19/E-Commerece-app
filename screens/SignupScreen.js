import { View, StyleSheet, Text } from "react-native";
import Input from "../components/UI/Input";

function SignupScreen() {
    return (
        <View style={styles.screen}>
            <Input
                label="Email"
                placeholder="xxxxxxxx@xxxxx.xxx"
                inputMode="email"
                secureTextEntry={false}
            />
            <Input
                label="Password"
                placeholder="password"
                inputMode="text"
                secureTextEntry={true}
            />
        </View>
    );
}

export default SignupScreen;
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
    },
})