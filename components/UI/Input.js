import { View, Text, TextInput, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
function Input({
    label,
    onChangeText,
    onFocus,
    placeholder,
    inputMode,
    secureTextEntry,
    keyboardType,
    value,
    style
}) {
    return (
        <View style={styles.inputContainer}>
            <View>
                <Text style={styles.label}>{label}</Text>
            </View>
            <TextInput
                style={[styles.textInput,style]}
                placeholder={placeholder}
                cursorColor={Colors.primary100}
                onChangeText={onChangeText}
                onFocus={onFocus}
                inputMode={inputMode}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                defaultValue={value}
            />
        </View>
    );
}

export default Input;
const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 24,
    },
    label: {
        fontWeight: "bold",
        color: Colors.primary100,
        marginHorizontal: 2,
    },
    textInput: {
        backgroundColor: Colors.white300,
        color: "black",
        fontSize: 16,
        borderRadius: 6,
        padding: 16,
        marginTop: 12,
    },
});
