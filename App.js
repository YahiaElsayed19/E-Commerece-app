import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignupScreen from './screens/SignupScreen';
import SigninScreen from './screens/SigninScreen';
import AuthProvider from './store/auth-context';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          contentStyle: {
            backgroundColor: "white"
          },
          headerShown: false,
        }}>
          <Stack.Screen name='SignupScreen' component={SignupScreen} />
          <Stack.Screen name='SigninScreen' component={SigninScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
