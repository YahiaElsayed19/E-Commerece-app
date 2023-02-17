import { useContext } from 'react'
import { View, Text, Button } from 'react-native'
import { AuthContext } from '../store/auth-context'
import { getProfileData } from '../util/profile'
function ProfileScreen() {
    const authCtx = useContext(AuthContext)
    async function getProfile() {
        try {
            const response = await getProfileData(authCtx.idToken)
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }
    getProfile()
    return <View><Text>Logged in</Text>
        <Button title='logout' onPress={authCtx.removeIdToken} />
    </View>
}

export default ProfileScreen