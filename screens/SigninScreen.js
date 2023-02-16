import { ScrollView, View, StyleSheet, Text } from "react-native";
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";
import TextButton from "../components/UI/TextButton";

function SigninScreen({navigation}) {
    function switchSignupHandler() {
        navigation.replace("SignupScreen")
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
                />
                <Input
                    label="Password"
                    placeholder="password"
                    inputMode="text"
                    secureTextEntry={true}
                />
                <View style={styles.textButton}>
                    <TextButton title="Don't have an account?" onPress={switchSignupHandler}/>
                </View>
                <View style={styles.button}>
                    <Button title="Sign up" />
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
        marginBottom:30,
    },
    textButton: {
        alignItems: "flex-end",
    },
    button: {
        alignItems: "center",
    },
})