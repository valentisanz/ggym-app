import { View, Text } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/RootStackParamList";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
    const { login } = useContext(AuthContext);
    const navigation =
        useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <View>
            <Text>Login Screen</Text>
            <TouchableOpacity onPress={async () => await login('asd@gmail.com', '123123')}>
                <Text>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.replace("Register")}>
                <Text>Registerr</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login;