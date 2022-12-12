import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext<any>(undefined);

export const AuthProvider = ({ children }: any) => {
    const [isLoading, setIsLoading] = useState(false);
    const [accessToken, setAccessToken] = useState<string | null>(null);

    const login = (email: string, password: string) => {
        setIsLoading(true);
        const token = 'token';
        setAccessToken(token);
        AsyncStorage.setItem('AccessToken', token);
        setIsLoading(false);
    }

    const logout = () => {
        setIsLoading(true);
        setAccessToken(null);
        AsyncStorage.removeItem('AccessToken');
        setIsLoading(false);
    }

    const isLoggedIn = async () => {
        console.log('isLoggedIn')
        try {
            setIsLoading(true);
            const accessToken = await AsyncStorage.getItem('AccessToken');
            setAccessToken(accessToken);
            setIsLoading(false);
        } catch (error) {
            console.log('error: ' + error)
        }
    }

    useEffect(() => {
        isLoggedIn();
    }, [])

    return (
        <AuthContext.Provider value={{ login, logout, accessToken, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}

