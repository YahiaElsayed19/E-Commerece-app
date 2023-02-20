import { View, Text } from "react-native"
import Slider from "../components/productDetails/Slider";

function ProductDetailsScreen({ route }) {
    // console.log(route.params.product.name);
    return <View>
        <Slider slides={route.params.product.images}/>
    </View>
}

export default ProductDetailsScreen