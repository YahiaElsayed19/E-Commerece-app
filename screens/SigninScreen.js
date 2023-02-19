import { useState, useContext } from "react";
import { useDebounce } from "use-debounce";
import { ScrollView, View, StyleSheet, Text, Alert, ActivityIndicator } from "react-native";
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";
import TextButton from "../components/UI/TextButton";
import { Login } from "../util/auth";
import { AuthContext } from "../store/auth-context";


function SigninScreen({ navigation }) {
    const authCtx = useContext(AuthContext)

    const [email, setEmail] = useState("");
    const [deboucedEmail] = useDebounce(email, 500);

    const [password, setPassword] = useState("");
    const [deboucedPassword] = useDebounce(password, 500);

    const [isLoading, setIsLoading] = useState(false)
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
        setIsLoading(true)
        try {
            const response = await Login(deboucedEmail, deboucedPassword)
            // console.log(response);
            if (response.data.message === "Login done successfully") {
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
        <ScrollView style={styles.scroll} contentContainerStyle={{flexGrow:1,justifyContent:"center"}}>
            <View style={styles.screen}>
                <Text style={styles.signup}>Welcome back !</Text>
                <Input
                    label="Email"
                    placeholder="example@example.example"
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
            {isLoading && <ActivityIndicator size="large" color="black" />}
        </ScrollView>
    );
}

export default SigninScreen;
const styles = StyleSheet.create({
    scroll: {
        marginVertical: 30,
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
        marginBottom: 16,
    },
    textButton: {
        alignItems: "flex-end",
    },
    button: {
        alignItems: "center",
    },
})