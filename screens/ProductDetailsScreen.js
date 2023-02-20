import { View, Text, ScrollView, StyleSheet } from "react-native";
import Slider from "../components/productDetails/Slider";
import Colors from "../constants/Colors";

function ProductDetailsScreen({ route }) {
    // console.log(route.params.product.name);
    const images = route.params.product.images;
    const name = route.params.product.name;
    const price = route.params.product.price;
    const description = route.params.product.description;
    return (
        <ScrollView style={{marginBottom:12}}>
            <Slider slides={images} />
            <View style={[styles.elementContainer, { marginBottom: 0 }]}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.price}>{price} L.E.</Text>
            </View>
            <View style={styles.elementContainer}>
                <Text style={styles.description}>{description}</Text>
            </View>
        </ScrollView>
    );
}

export default ProductDetailsScreen;
const styles = StyleSheet.create({
    elementContainer: {
        marginVertical: 16,
        marginHorizontal:15,
        backgroundColor:"white",
        borderRadius:6,
        padding:12,
        elevation:2,
    },
    name: {
        fontWeight: "bold",
        fontSize: 24,
    },
    price: {
        fontStyle: "italic",
        fontWeight: "bold",
        color: Colors.primary100,
    },
    description: {
        fontSize: 16,
        lineHeight: 30,
    },
})