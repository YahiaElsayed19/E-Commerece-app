import { useContext, useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { AuthContext } from "../../store/auth-context";
import { getProfileData } from "../../util/profile";
import LoadingOverlay from "../UI/LoadingOverlay";
function PreviewProfile() {
    const authCtx = useContext(AuthContext);
    const [profileData, setProfileData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        async function getProfile() {
            try {
                setIsLoading(true)
                const response = await getProfileData(authCtx.idToken);
                // console.log(response);
                setProfileData(response.data.data);
            } catch (error) {
                console.log(error);
            }
            setIsLoading(false)
        }
        getProfile();
    }, []);
    console.log(profileData);
    if (isLoading) {
        return <LoadingOverlay />
    }
    return (
        <View>
            <View>
                <Image source={{ uri: profileData?.image }} style={{ width: 200, height: 200 }} />
            </View>
            <View>
                <Text></Text>
            </View>
            <View>
                <Text></Text>
            </View>
            <View>
                <Text></Text>
            </View>
            <View>
                <Text></Text>
            </View>
        </View>
    );
}

export default PreviewProfile;
