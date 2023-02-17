import { useContext, useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { AuthContext } from "../store/auth-context";
import { getProfileData } from "../util/profile";
import Button from "../components/UI/Button";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
function ProfileScreen({ navigation }) {
    const authCtx = useContext(AuthContext);
    const [profileData, setProfileData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        async function getProfile() {
            try {
                setIsLoading(true);
                const response = await getProfileData(authCtx.idToken);
                // console.log(response);
                setProfileData(response.data.data);
            } catch (error) {
                console.log(error);
            }
            setIsLoading(false);
        }
        getProfile();
    }, []);
    function logoutHandler() {
        authCtx.removeIdToken();
    }
    navigation.setOptions({
        headerRight: ({ tintColor }) => (
            <Ionicons
                name="exit"
                color={tintColor}
                size={28}
                onPress={logoutHandler}
                style={{ marginRight: 16 }}
            />
        ),
    });
    // console.log(profileData);

    if (isLoading) {
        return <LoadingOverlay />;
    }
    return (
        <View style={styles.container}>
            <View>
                <Image source={{ uri: profileData?.image }} style={styles.image} />
            </View>
            <View style={styles.elementContainer}>
                <Text style={styles.head}>Hello,</Text>
                <Text style={styles.text}>{profileData?.name} ✌️</Text>
            </View>
            <View style={styles.elementContainer}>
                <Text style={styles.head}>Email: </Text>
                <Text style={styles.text}>{profileData?.email}</Text>
            </View>
            <View style={styles.elementContainer}>
                <Text style={styles.head}>Phone number: </Text>
                <Text style={styles.text}>{profileData?.phone}</Text>
            </View>
            <View style={styles.elementContainer}>
                <Text style={styles.head}>Credit: </Text>
                <Text style={styles.text}>{profileData?.credit} $</Text>
            </View>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button title="Edit" />
                </View>
            </View>
        </View>
    );
}

export default ProfileScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    image: {
        width: 150,
        height: 150,
        margin: 18,
        borderRadius: 75,
        borderWidth: 2,
        borderColor: Colors.primary100,
    },
    elementContainer: {
        width: "80%",
        padding: 24,
        margin: 12,
        backgroundColor: "white",
        borderRadius: 6,
        flexDirection: "row",
    },
    head: {
        color: Colors.primary100,
        fontSize: 18,
        fontWeight: "bold",
    },
    text: {
        fontSize: 18,
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        width: 125,
        marginHorizontal: 8,
    },
});
