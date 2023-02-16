import { ScrollView, View, StyleSheet, Text } from "react-native";
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";
import TextButton from "../components/UI/TextButton";

function SignupScreen() {
    return (
        <ScrollView style={styles.scroll}>
            <View style={styles.screen}>
                <Text style={styles.signup}>SIGN UP</Text>
                <Input
                    label="Email"
                    placeholder="xxxxxxxx@xxxxx.xxx"
                    inputMode="email"
                    secureTextEntry={false}
                />
                <Input
                    label="Confirm email"
                    placeholder="confirm email"
                    inputMode="email"
                    secureTextEntry={false}
                />
                <Input
                    label="Password"
                    placeholder="password"
                    inputMode="text"
                    secureTextEntry={true}
                />
                <Input
                    label=" Confirm password"
                    placeholder=" Confirm password "
                    inputMode="text"
                    secureTextEntry={true}
                />
                <View style={styles.textButton}>
                    <TextButton title="Already have an account?" />
                </View>
                <View style={styles.button}>
                    <Button title="Sign up" />
                </View>
            </View>
        </ScrollView>
    );
}

export default SignupScreen;
const styles = StyleSheet.create({
    scroll: {
        marginVertical: 28,
    }, 
    screen: {
        flex: 1,
        justifyContent: "center",
        marginHorizontal: 30,
        marginVertical: 60,
    },
    signup: {
        fontWeight: "bold",
        fontSize: 32,
        textAlign: "center",
    },
    textButton: {
        alignItems: "flex-end",
    },
    button: {
        alignItems: "center",
    },
})