import { useContext, useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { AuthContext } from "../../store/auth-context";
import { getProfileData } from "../../util/profile";
import Button from "../UI/Button";
import LoadingOverlay from "../UI/LoadingOverlay";
import Colors from "../../constants/Colors";
function PreviewProfile({onEditing}) {
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
    // console.log(profileData);
    function logoutHandler() {
        authCtx.removeIdToken()
    }
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
                    <Button title="Edit" onPress={onEditing}/>
                </View>
                <View style={styles.button}>
                    <Button title="Log out" onPress={logoutHandler} />
                </View>
            </View>
        </View>
    );
}

export default PreviewProfile;
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
