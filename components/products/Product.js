import { View, Text, Image, StyleSheet } from "react-native";
import Colors from '../../constants/Colors'
function Product({ name, price, image }) {
    return (
        <View style={styles.product}>
            <View>
                <Image source={{ uri: image }} style={styles.image} />
            </View>
            <View style={styles.info}>
                <View style={styles.elementContainer}>
                    <Text numberOfLines={2} style={styles.name}>{name}</Text>
                </View>
                <View style={styles.elementContainer}>
                    <Text style={styles.price}>{price} L.E.</Text>
                </View>
            </View>
        </View>
    );
}

export default Product;
const styles = StyleSheet.create({
    product: {
        flex: 1,
        padding:8,
        margin: 12,
        backgroundColor: "white",
        overflow: "hidden",
        borderRadius: 12,
    },
    image: {
        width: "100%",
        height: 150,
    },
    info:{
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
});
