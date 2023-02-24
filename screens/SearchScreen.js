import { View, Text, StyleSheet } from "react-native"
import Input from "../components/UI/Input"
function SearchScreen() {
    return <View>
        <Input autoFocus={true} style={styles.input} containerStyle={styles.inputContainer} placeholder="search" />
    </View>
}

export default SearchScreen
const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 0,
        marginHorizontal: 15,
        marginBottom: 10,
    },
    input: {
        marginTop: 0,
        backgroundColor: "white",
    },
})