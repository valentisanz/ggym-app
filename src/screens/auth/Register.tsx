import { View, Text } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/RootStackParamList";

const Register = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <View>
            <Text>Register Screen</Text>
            <TouchableOpacity
                onPress={() => navigation.replace("Login")}>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Register;