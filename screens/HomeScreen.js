import { useContext } from "react";
import { View, FlatList } from "react-native";
import { useQuery } from "react-query";
import Product from "../components/products/Product";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { AuthContext } from "../store/auth-context";
import { getProducts } from "../util/products";
function HomeScreen() {
  const authCtx = useContext(AuthContext)
  const { data, isLoading } = useQuery("GetProducts", () => getProducts(authCtx.idToken));
  // console.log(data.data.data.data[0]);
  const products = data?.data.data.data;
  // console.log(products);
  if (isLoading) {
    return <LoadingOverlay />
  }
  function renderProduct(itemData) {
    return <Product product={itemData.item} />
  }
  return (
    <View>
      <FlatList data={products} numColumns={2} keyExtractor={(item) => item.id} renderItem={renderProduct} />
    </View>
  );
}

export default HomeScreen;
