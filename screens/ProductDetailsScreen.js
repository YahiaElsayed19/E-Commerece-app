import { View, Text, ScrollView } from "react-native";
import Slider from "../components/productDetails/Slider";

function ProductDetailsScreen({ route }) {
    // console.log(route.params.product.name);
    const images = route.params.product.images;
    const name = route.params.product.name;
    const price = route.params.product.price;
    const description = route.params.product.description;
    return (
        <ScrollView>
            <Slider slides={images}/>
                <Text>{name}</Text>
                <Text>{description}</Text>
                <Text>{price}</Text>
        </ScrollView>
    );
}

export default ProductDetailsScreen;
