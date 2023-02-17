import { useState } from "react"
import EditProfile from "../components/Profile/EditProfile"
import PreviewProfile from "../components/Profile/PreviewProfile"
function ProfileScreen() {
    const [isEditing, setIsEditing] = useState(false)
    function editingHandler() {
        setIsEditing(true)
    }
    function cancelHandler() {
        setIsEditing(false)
    }
    if (isEditing) {
        return <EditProfile onCancel={cancelHandler}/>
    }
    return <PreviewProfile onEditing={editingHandler} />
}

export default ProfileScreen