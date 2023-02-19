import { useContext, useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import ProfileElement from "../components/profile/ProfileElement";
import { AuthContext } from "../store/auth-context";
import { getProfileData } from "../util/profile";
import LoadingOverlay from "../components/UI/LoadingOverlay";
function ProfileScreen() {
    const [profData, setProfData] = useState({});
    const [isLoading, setIsLoading] = useState();
    const authCtx = useContext(AuthContext);
    useEffect(() => {
        async function getProfData() {
            setIsLoading(true);
            const response = await getProfileData(authCtx.idToken);
            setProfData(response.data.data);
            setIsLoading(false);
        }
        getProfData();
    }, []);
    if (isLoading) {
        return <LoadingOverlay />;
    }
    return (
        <View style={styles.screen}>
            <ProfileElement title="Name:" info={profData.name} />
            <ProfileElement title="Phone:" info={profData.phone} />
            <ProfileElement title="Email:" info={profData.email} />
            <ProfileElement title="Credit:" info={`${profData.credit} $`} />
        </View>
    );
}

export default ProfileScreen;
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginHorizontal: 30,
        justifyContent: "center",
    },
});
