import { View, Text, Image, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { addToCart, addToFav } from "../../util/products";
import { useContext, useState } from "react";
import { AuthContext } from "../../store/auth-context";
function Product({ name, price, image, id }) {
    const [isFav, setIsFav] = useState(false);
    const [inCart, setInCart] = useState(false);
    const authCtx = useContext(AuthContext);
    async function addToFavoriteHandler() {
        const response = await addToFav(authCtx.idToken, id);
        console.log(response);
        setIsFav(true);
    }
    async function removeFavoriteHandler() {
        const response = await addToFav(authCtx.idToken, id);
        console.log(response);
        setIsFav(false);
    }
    async function addToCartHandler() {
        const response = await addToCart(authCtx.idToken, id);
        console.log(response);
        setInCart(true);
    }
    async function removeCartHandler() {
        const response = await addToCart(authCtx.idToken, id);
        console.log(response);
        setInCart(false);
    }
    return (
        <View style={styles.product}>
            <View>
                <Image source={{ uri: image }} style={styles.image} />
            </View>
            <View style={styles.info}>
                <View style={styles.elementContainer}>
                    <Text numberOfLines={1} style={styles.name}>
                        {name}
                    </Text>
                </View>
                <View style={styles.elementContainer}>
                    <Text style={styles.price}>{price} L.E.</Text>
                </View>
            </View>
            <View style={styles.buttons}>
                {inCart ? (
                    <MaterialCommunityIcons name="cart-check" size={36} onPress={removeCartHandler}/>
                ) : (
                    <MaterialCommunityIcons name="cart-arrow-down" size={36} onPress={addToCartHandler}/>
                )}
                {isFav ? (
                    <MaterialCommunityIcons
                        name="heart"
                        size={36}
                        color="red"
                        onPress={removeFavoriteHandler}
                    />
                ) : (
                    <MaterialCommunityIcons
                        name="heart-outline"
                        size={36}
                        color="red"
                        onPress={addToFavoriteHandler}
                    />
                )}
            </View>
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
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 12,
    },
});
