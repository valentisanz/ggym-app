import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Play from '../screens/Play';
import Historic from '../screens/Historic';
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons';
import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
    return (
        <Tab.Navigator
            initialRouteName='Home'>
            <Tab.Screen name='Home' component={HomeStack}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='home' color={color} size={size} />
                    )
                }} />
            <Tab.Screen name='Play' component={Play}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='play' color={color} size={size} />
                    )
                }} />
            <Tab.Screen name='Historic' component={Historic}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="clipboard-list"
                            size={size} color={color} />
                    )
                }} />
        </Tab.Navigator>
    )
}