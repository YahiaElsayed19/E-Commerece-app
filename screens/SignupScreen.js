import { useContext, useState } from "react";
import { ScrollView, View, StyleSheet, Text, Alert, ActivityIndicator } from "react-native";
import { useDebounce } from 'use-debounce';

import { Register } from "../util/auth";
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";
import TextButton from "../components/UI/TextButton";
import { AuthContext } from "../store/auth-context";

function SignupScreen({ navigation }) {
    const authCtx = useContext(AuthContext)

    const [name, setName] = useState("");
    const [deboucedName] = useDebounce(name, 1000);

    const [email, setEmail] = useState("");
    const [deboucedEmail] = useDebounce(email, 1000);

    const [password, setPassword] = useState("");
    const [deboucedPassword] = useDebounce(password, 1000);

    const [phone, setPhone] = useState("");
    const [deboucedPhone] = useDebounce(phone, 1000);

    const [isLoading, setIsLoading] = useState(false)

    function nameHandler(enteredName) {
        setName(enteredName)
    }
    function emailHandler(enteredEmail) {
        setEmail(enteredEmail)
    }
    function passwordHandler(enteredPassword) {
        setPassword(enteredPassword)
    }
    function phoneHandler(enteredPhone) {
        setPhone(enteredPhone)
    }
    function switchLoginHandler() {
        navigation.replace("SigninScreen");
    }

    async function signupHandler() {
        // console.log(deboucedName, deboucedEmail, deboucedPassword, deboucedPhone);
        setIsLoading(true)
        try {
            const response = await Register(deboucedName, deboucedEmail, deboucedPassword, deboucedPhone)
            // console.log(response);
            if (response.data.message === "تم التسجيل بنجاح") {
                authCtx.authenticate(response.data.data.token)
            } else {
                Alert.alert("Authentication failed!", response.data.message)
                // console.log(response.data.message);
            }
            // console.log(authCtx.idToken);
            // console.log(response.data.message);
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false)
    }
    return (
        <ScrollView style={styles.scroll}>
            <View style={styles.screen}>
                <Text style={styles.signup}>Sign up</Text>
                <Input
                    label="Full name"
                    placeholder="enter your name"
                    inputMode="text"
                    secureTextEntry={false}
                    onChangeText={nameHandler}
                />
                <Input
                    label="Phone number"
                    placeholder=" 01XXXXXXXXX "
                    keyboardType="number-pad"
                    secureTextEntry={false}
                    onChangeText={phoneHandler}
                />
                <Input
                    label="Email"
                    placeholder="example@example.exa"
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
                <View style={styles.textButton}>
                    <TextButton
                        title="Already have an account?"
                        onPress={switchLoginHandler}
                    />
                </View>
                <View style={styles.button}>
                    <Button title="Sign up" onPress={signupHandler} />
                </View>
            </View>
            {isLoading && <ActivityIndicator size="large" color="black" />}
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
        marginVertical: 40,
    },
    signup: {
        fontWeight: "bold",
        fontSize: 32,
        textAlign: "center",
        marginBottom: 16,
    },
    textButton: {
        alignItems: "flex-end",
    },
    button: {
        alignItems: "center",
    },
});
