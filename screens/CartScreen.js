import { useContext, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useQuery } from "react-query";
import Product from "../components/products/Product";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { AuthContext } from "../store/auth-context";
import { getCart } from "../util/products";
import { useIsFocused } from "@react-navigation/native";
import Colors from "../constants/Colors";

function CartScreen() {
    const isFocused = useIsFocused();
    const authCtx = useContext(AuthContext);
    const { data, isLoading, refetch, isRefetching } = useQuery(
        "GetCartProducts",
        () => getCart(authCtx.idToken)
    );
    // console.log(data.data);
    // console.log(data.data.data["cart_items"]);
    // console.log(data?.data.data["cart_items"][0].product);
    useEffect(() => {
        if (isFocused) {
            refetch();
        }
    }, [isFocused]);
    let products = [];
    for (let i = 0; i < data?.data?.data["cart_items"]?.length; i++) {
        products.push(data.data.data["cart_items"][i].product);
    }

    // console.log(products);
    if (isLoading) {
        return <LoadingOverlay />;
    }
    if (isRefetching) {
        return <LoadingOverlay />;
    }
    if (products.length === 0) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text
                    style={{ color: Colors.primary100, fontWeight: "bold", fontSize: 18 }}
                >
                    There is nothing in your cart yet!
                </Text>
            </View>
        );
    }
    function renderProduct(itemData) {
        return <Product product={itemData.item} />;
    }
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.totalContainer}>
                <Text style={styles.title}>Total</Text>
                <Text style={styles.total}>{data.data.data.total} L.E.</Text>
            </View>
            <View style={{ flex: 10 }}>
                <FlatList
                    data={products}
                    numColumns={2}
                    keyExtractor={(item) => item.id}
                    renderItem={renderProduct}
                />
            </View>
        </View>
    );
}

export default CartScreen;
const styles = StyleSheet.create({
    totalContainer: {
        backgroundColor:"white",
        padding:12,
        margin:12,
        borderRadius:6,
        flexDirection:"row",
        justifyContent:"space-between",
    },
    title: {
        color:Colors.primary100,
        fontWeight:"bold",
        fontSize:18,
    },
    total: {
        fontSize:18,
    },
});
