import { useState } from "react"
import EditProfile from "../components/Profile/EditProfile"
import PreviewProfile from "../components/Profile/PreviewProfile"
function ProfileScreen({navigation}) {
    const [isEditing, setIsEditing] = useState(false)
    function editingHandler() {
        setIsEditing(true)
    }

    if (isEditing) {
        return <EditProfile/>
    }
    return <PreviewProfile onEditing={editingHandler} />
}

export default ProfileScreen