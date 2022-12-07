import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './BottomTabs';
import AuthStack from './AuthStack';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { View, ActivityIndicator } from 'react-native';


export default function Navigation() {
    const { isLoading, accessToken } = useContext(AuthContext);

    if (isLoading) {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <ActivityIndicator size={'large'} />
            </View>
        )
    }

    return (
        <NavigationContainer>
            {accessToken ? <BottomTabs /> : <AuthStack />}
        </NavigationContainer>
    )
}