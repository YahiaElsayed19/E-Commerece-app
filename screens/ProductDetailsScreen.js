import { View, Text } from "react-native"

function ProductDetailsScreen({route}) {
    console.log(route.params.product.name);
    return <View>
    <Text> Screen</Text>
</View>
}

export default ProductDetailsScreen