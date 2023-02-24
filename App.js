import { StatusBar } from "expo-status-bar";
import { useState, useContext, useEffect } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import SignupScreen from "./screens/SignupScreen";
import SigninScreen from "./screens/SigninScreen";
import AuthProvider from "./store/auth-context";
import { AuthContext } from "./store/auth-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppLoading from "expo-app-loading";
import ProfileScreen from "./screens/ProfileScreen";
import HomeScreen from "./screens/HomeScreen";
import FavoriteScreen from "./screens/FavoriteScreen";
import FavouriteScreen from "./screens/FavouriteScreen";
import CartScreen from "./screens/CartScreen";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import SearchScreen from "./screens/SearchScreen";
import Colors from "./constants/Colors";
import { QueryClient, QueryClientProvider } from "react-query";
const Stack = createNativeStackNavigator();
const Bottom = createBottomTabNavigator();
const queryClient = new QueryClient();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {
          backgroundColor: "white",
        },
        headerShown: false,
      }}
    >
      <Stack.Screen name="SigninScreen" component={SigninScreen} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
    </Stack.Navigator>
  );
}
function BottomNav() {
  const authCtx = useContext(AuthContext);
  return (
    <Bottom.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: Colors.primary100,
        tabBarInactiveTintColor: "black",
      }}
    >
      <Bottom.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="shopping" color={color} size={size} />
          ),
        }}
      />
      <Bottom.Screen
        name="FavouriteScreen"
        component={FavouriteScreen}
        options={{
          title: "Favorite",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="heart" color={color} size={size} />
          ),
        }}
      />
      <Bottom.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          title: "Cart",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cart" color={color} size={size} />
          ),
        }}
      />
      <Bottom.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
          headerRight: ({ color }) => (
            <Ionicons
              name="exit"
              color={color}
              size={28}
              style={{ marginRight: 10 }}
              onPress={authCtx.logout}
            />
          ),
        }}
      />
    </Bottom.Navigator>
  );
}
function AuthenticatedStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainAuthenticatedScreen" component={BottomNav} options={{
        headerShown: false,
      }} />
      <Stack.Screen name="ProductDetailsScreen" component={ProductDetailsScreen} options={{ title: "Product Details" }} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} options={{ title: "Search" }} />
    </Stack.Navigator>
  );
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
  const authCtx = useContext(AuthContext);
  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem("token");
      if (storedToken) {
        authCtx.authenticate(storedToken);
      }
      setIsTryingLogin(false);
    }
    fetchToken();
  }, []);
  if (isTryingLogin) {
    return <AppLoading />;
  }
  return <Navigation />;
}
export default function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <StatusBar style="dark" />
        <Root />
      </QueryClientProvider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
