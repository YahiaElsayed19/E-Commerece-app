import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import Colors from "../../constants/Colors";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { toggleCart, toggleFav } from "../../util/products";
import { useContext, useState } from "react";
import { AuthContext } from "../../store/auth-context";
import { useNavigation } from "@react-navigation/native";
import Button from "../UI/Button";
function Product({ product, inFav }) {
    const [isFav, setIsFav] = useState(inFav ? inFav : product["in_favorites"]);
    const [inCart, setInCart] = useState(product["in_cart"]);
    const authCtx = useContext(AuthContext);
    async function addToFavoriteHandler() {
        const response = await toggleFav(authCtx.idToken, product.id);
        setIsFav(true);
    }
    async function removeFavoriteHandler() {
        const response = await toggleFav(authCtx.idToken, product.id);
        setIsFav(false);
    }
    async function addToCartHandler() {
        const response = await toggleCart(authCtx.idToken, product.id);
        setInCart(true);
    }
    async function removeCartHandler() {
        const response = await toggleCart(authCtx.idToken, product.id);
        setInCart(false);
    }
    const navigation = useNavigation()
    function navigateToProductDetails() {
        navigation.navigate("ProductDetailsScreen", { product: product })
    }
    return (
        <View style={styles.product}>
            <Pressable style={({ pressed }) => pressed && styles.pressed} onPress={navigateToProductDetails}>
                <View>
                    <Image source={{ uri: product.image }} style={styles.image} />
                </View>
                <View style={styles.info}>
                    <View style={styles.elementContainer}>
                        <Text numberOfLines={1} style={styles.name}>
                            {product.name}
                        </Text>
                    </View>
                    <View style={styles.elementContainer}>
                        <Text style={styles.price}>{product.price} L.E.</Text>
                    </View>
                </View>
                <View style={styles.cartContainer}>
                    {inCart ? (
                        <MaterialCommunityIcons name="cart-check" size={32} onPress={removeCartHandler} />
                    ) : (
                        <MaterialCommunityIcons name="cart-arrow-down" size={32} onPress={addToCartHandler} />
                    )}
                </View>
                <View style={styles.favContainer}
                >
                    {isFav ? (
                        <MaterialCommunityIcons
                            name="heart"
                            size={32}
                            color="red"
                            onPress={removeFavoriteHandler}
                        />
                    ) : (
                        <MaterialCommunityIcons
                            name="heart-outline"
                            size={32}
                            color="black"
                            onPress={addToFavoriteHandler}
                        />
                    )}
                </View>
            </Pressable>
        </View>
    );
}

export default Product;
const styles = StyleSheet.create({
    product: {
        flex: 1,
        padding: 8,
        margin: 12,
        backgroundColor: "white",
        overflow: "hidden",
        borderRadius: 12,
        elevation: 2,
        position: "relative",
    },
    pressed: {
        opacity: 0.5,
    },
    image: {
        width: "100%",
        height: 150,
    },
    info: {
        justifyContent: "center",
        alignItems: "center",
    },
    elementContainer: {
        marginTop: 4,
    },
    name: {
        fontWeight: "bold",
    },
    price: {
        fontWeight: "bold",
        color: Colors.primary100,
        fontStyle: "italic",
    },
    favContainer: {
        position: "absolute",
        right: 0,
        top: 0,
        backgroundColor: "#d8d8d8",
        justifyContent: "center",
        alignItems: "center",
        opacity: 0.75,
        width: 36,
        height: 36,
        borderRadius: 18,
    },
    cartContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop:12,
    },
});
