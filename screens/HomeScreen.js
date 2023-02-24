import { useContext, useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { useQuery } from "react-query";
import Product from "../components/products/Product";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { AuthContext } from "../store/auth-context";
import { getProducts } from "../util/products";
import { useIsFocused } from "@react-navigation/native";
import Input from "../components/UI/Input";
function HomeScreen({ navigation }) {
  const isFocused = useIsFocused()
  const authCtx = useContext(AuthContext)
  const { data, isLoading, refetch, isRefetching } = useQuery("GetProducts", () => getProducts(authCtx.idToken));
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
  function onFocusSearch() {
    navigation.navigate("SearchScreen")
  }
  function renderProduct(itemData) {
    return <Product product={itemData.item} />
  }
  return (
    <View>
      <Input style={styles.input} containerStyle={styles.inputContainer} placeholder="search" onFocus={onFocusSearch}/>
      <FlatList data={products} numColumns={2} keyExtractor={(item) => item.id} renderItem={renderProduct} />
    </View>
  );
}

export default HomeScreen;
const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 0,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  input: {
    marginTop: 0,
    backgroundColor: "white",
  },
})