import { useState } from "react";
import { ScrollView, View, StyleSheet, Text } from "react-native";
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";
import TextButton from "../components/UI/TextButton";

function SignupScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    function emailHandler(enteredEmail) {
        setEmail(enteredEmail)
        console.log(email);
    }
    function passwordHandler(enteredPassword) {
        setPassword(enteredPassword)
        console.log(password);
    }
    function confirmPasswordHandler(enteredPassword) {
        setConfirmPassword(enteredPassword)
        console.log(confirmPassword);
    }
    function switchLoginHandler() {
        navigation.replace("SigninScreen");
    }
    function signupHandler(email, password) {

    }
    return (
        <ScrollView style={styles.scroll}>
            <View style={styles.screen}>
                <Text style={styles.signup}>Sign up</Text>
                <Input
                    label="Email"
                    placeholder="xxxxxxxx@xxxxx.xxx"
                    inputMode="email"
                    secureTextEntry={false}
                    onChangeText={emailHandler}
                />
                <Input
                    label="Password"
                    placeholder="password"
                    inputMode="text"
                    secureTextEntry={true}
                    onChangeText={passwordHandler}
                />
                <Input
                    label=" Confirm password"
                    placeholder=" Confirm password "
                    inputMode="text"
                    secureTextEntry={true}
                    onChangeText={confirmPasswordHandler}
                />
                <View style={styles.textButton}>
                    <TextButton
                        title="Already have an account?"
                        onPress={switchLoginHandler}
                    />
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
        marginBottom: 30,
    },
    textButton: {
        alignItems: "flex-end",
    },
    button: {
        alignItems: "center",
    },
});
