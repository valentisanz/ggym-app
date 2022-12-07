import React from "react"
import { View, Text } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootStackParamList";

const Home = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <View>
            <Text>Home Screen</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("Profile")}>
                <Text>Tap me</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home;