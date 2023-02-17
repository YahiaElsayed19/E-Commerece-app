import { useContext, useEffect, useState } from 'react'
import { View, Text, Button } from 'react-native'
import { AuthContext } from '../../store/auth-context'
import { getProfileData } from '../../util/profile'
function PreviewProfile() {
    const authCtx = useContext(AuthContext)
    const [profileData, setProfileData] = useState()
    useEffect(() => {
        async function getProfile() {
            try {
                const response = await getProfileData(authCtx.idToken)
                // console.log(response);
                setProfileData(response)
            } catch (error) {
                console.log(error);
            }
        }
        getProfile()
    }, [])
    console.log(profileData);
    return <View><Text>Logged in</Text>
        <Button title='logout' onPress={authCtx.removeIdToken} />
    </View>
}

export default PreviewProfile