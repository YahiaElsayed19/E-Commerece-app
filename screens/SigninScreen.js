import { useState, useContext } from "react";
import { useDebounce } from "use-debounce";
import { ScrollView, View, StyleSheet, Text } from "react-native";
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";
import TextButton from "../components/UI/TextButton";
import { Login } from "../util/auth";
import { AuthContext } from "../store/auth-context";


function SigninScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [deboucedEmail] = useDebounce(email, 1000);

    const [password, setPassword] = useState("");
    const [deboucedPassword] = useDebounce(password, 1000);
    const authCtx = useContext(AuthContext)

    function emailHandler(enteredEmail) {
        setEmail(enteredEmail)
    }
    function passwordHandler(enteredPassword) {
        setPassword(enteredPassword)
    }
    function switchSignupHandler() {
        navigation.replace("SignupScreen")
    }
    async function loginHandler() {
        // console.log(deboucedEmail, deboucedPassword);
        try {
            const response = await Login(deboucedEmail, deboucedPassword)
            // console.log(response);
            authCtx.authenticate(response.data.data.token)
            // console.log(authCtx.idToken);
            // console.log(response.data.message);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <ScrollView style={styles.scroll}>
            <View style={styles.screen}>
                <Text style={styles.signup}>Welcome back !</Text>
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
                <View style={styles.textButton}>
                    <TextButton title="Don't have an account?" onPress={switchSignupHandler} />
                </View>
                <View style={styles.button}>
                    <Button title="Sign in" onPress={loginHandler} />
                </View>
            </View>
        </ScrollView>
    );
}

export default SigninScreen;
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
})