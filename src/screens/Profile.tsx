import React, { useContext } from "react"
import { View, Text } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
    const { logout } = useContext(AuthContext);

    return (
        <View>
            <Text>Profile Screen</Text>
            <TouchableOpacity onPress={() => logout()}>
                <Text>LOGOUT</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Profile;