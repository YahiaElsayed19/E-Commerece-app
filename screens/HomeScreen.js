import { View, Text } from "react-native";
import { useQuery } from "react-query";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { getProducts } from "../util/products";
function HomeScreen() {
  const { data, isLoading } = useQuery("GetProducts", () => getProducts());
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

export default HomeScreen;
