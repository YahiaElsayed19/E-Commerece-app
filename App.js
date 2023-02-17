import { StatusBar } from 'expo-status-bar';
import { useState, useContext, useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignupScreen from './screens/SignupScreen';
import SigninScreen from './screens/SigninScreen';
import AuthProvider from './store/auth-context';
import { AuthContext } from './store/auth-context';
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppLoading from 'expo-app-loading';
import ProfileScreen from './screens/ProfileScreen';
import HomeScreen from './screens/HomeScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import CartScreen from './screens/CartScreen';
import ItemDetailsScreen from './screens/ItemDetailsScreen';
const Stack = createNativeStackNavigator();
const Bottom = createBottomTabNavigator()
function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{
      contentStyle: {
        backgroundColor: "white"
      },
      headerShown: false,
    }}>
      <Stack.Screen name='SigninScreen' component={SigninScreen} />
      <Stack.Screen name='SignupScreen' component={SignupScreen} />
    </Stack.Navigator>
  )
}
function BottomNav() {
  return <Bottom.Navigator>
    <Bottom.Screen name='HomeScreen' component={HomeScreen} />
    <Bottom.Screen name='FavoriteScreen' component={FavoriteScreen} />
    <Bottom.Screen name='CartScreen' component={CartScreen} />
    <Bottom.Screen name='ProfileScreen' component={ProfileScreen} />
  </Bottom.Navigator>
}
function AuthenticatedStack() {
  return <Stack.Navigator>
    <Stack.Screen name='MainAuthenticatedScreen' component={BottomNav} />
    <Stack.Screen name='ItemDetailsScreen' component={ItemDetailsScreen} />
  </Stack.Navigator>
}
function Navigation() {
  const authCtx = useContext(AuthContext);
  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}
function Root() {
  const [isTryingLogin, setIsTryingLogin] = useState(true);
  const authCtx = useContext(AuthContext)
  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem("token")
      if (storedToken) {
        authCtx.authenticate(storedToken)
      }
      setIsTryingLogin(false)
    }
    fetchToken()
  }, [])
  if (isTryingLogin) {
    return <AppLoading />
  }
  return <Navigation />
}
export default function App() {
  return (
    <AuthProvider>
      <StatusBar style="dark" />
      <Root />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
