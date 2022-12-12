import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "../screens/auth/Login";
import Register from "../screens/auth/Register";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login}
                options={{ headerShown: true }} />
            <Stack.Screen name="Register" component={Register}
                options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}