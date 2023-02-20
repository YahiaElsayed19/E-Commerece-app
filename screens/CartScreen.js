import { useContext, useEffect } from "react";
import { View, FlatList } from "react-native";
import { useQuery } from "react-query";
import Product from "../components/products/Product";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { AuthContext } from "../store/auth-context";
import { getCart } from "../util/products";
import { useIsFocused } from "@react-navigation/native";

function CartScreen() {
    const isFocused = useIsFocused();
    const authCtx = useContext(AuthContext);
    const { data, isLoading, refetch, isRefetching } = useQuery(
        "GetCartProducts",
        () => getCart(authCtx.idToken)
    );
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

    console.log(products);  
    if (isLoading) {
        return <LoadingOverlay />;
    }
    if (isRefetching) {
        return <LoadingOverlay />;
    }
    function renderProduct(itemData) {
        return <Product product={itemData.item} />;
    }
    return (
        <View>
            <FlatList
                data={products}
                numColumns={2}
                keyExtractor={(item) => item.id}
                renderItem={renderProduct}
            />
        </View>
    );
}

export default CartScreen;
