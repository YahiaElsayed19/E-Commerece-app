import { View, Text } from "react-native";
import { useQuery } from "react-query";
import { getProducts } from "../../util/products";
import LoadingOverlay from "../UI/LoadingOverlay"
function Category({ catId }) {
    const { data, isLoading } = useQuery("GetProducts", () => getProducts(catId));
    // console.log(data.data.data.data[0]);
    const products = data?.data.data.data;
    console.log(products);
    if (isLoading) {
        return <LoadingOverlay />
    }
    return (
        <View>
            <Text>Home Screen</Text>
        </View>
    );

}

export default Category