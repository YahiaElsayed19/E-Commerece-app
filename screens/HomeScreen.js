import { useContext ,useEffect} from "react";
import { View, FlatList } from "react-native";
import { useQuery } from "react-query";
import Product from "../components/products/Product";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { AuthContext } from "../store/auth-context";
import { getProducts } from "../util/products";
import { useIsFocused } from "@react-navigation/native";

function HomeScreen() {
  const isFocused = useIsFocused()
  const authCtx = useContext(AuthContext)
  const { data, isLoading,refetch,isRefetching } = useQuery("GetProducts", () => getProducts(authCtx.idToken));
  // console.log(data.data.data.data[0]);
  useEffect(() => {
    if (isFocused) {
      refetch()
    }
  }, [isFocused])
  const products = data?.data.data.data;
  // console.log(products);
  if (isLoading) {
    return <LoadingOverlay />
  }
  if (isRefetching) {
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
