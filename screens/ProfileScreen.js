import { useContext } from 'react'
import { View, Text, Button } from 'react-native'
import { AuthContext } from '../store/auth-context'
function ProfileScreen() {
    const authCtx = useContext(AuthContext)
    return <View><Text>Logged in</Text>
        <Button title='logout' onPress={authCtx.removeIdToken} />
    </View>
}

export default ProfileScreen