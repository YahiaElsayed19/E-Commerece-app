import { useContext, useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { useQuery } from "react-query";
import Product from "../components/products/Product";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { AuthContext } from "../store/auth-context";
import { getProducts } from "../util/products";
import { useIsFocused } from "@react-navigation/native";
import Input from "../components/UI/Input";
import Categories from "../components/categories/Categories";
import { CatContext } from "../store/cat-context";
function HomeScreen({ navigation }) {
  const isFocused = useIsFocused();
  const authCtx = useContext(AuthContext);
  const catCtx = useContext(CatContext);
  const { data, isLoading, refetch, isRefetching, remove } = useQuery(
    "GetProducts",
    () => getProducts(authCtx.idToken, catCtx.category)
  );
  // console.log(data.data.data.data[0]);
  useEffect(() => {
    if (isFocused) {
      remove()
      refetch();
    }
  }, [isFocused, catCtx.category]);
  const products = data?.data.data.data;
  // console.log(products);
  function onFocusSearch() {
    navigation.navigate("SearchScreen");
  }
  function renderProduct(itemData) {
    return <Product product={itemData.item} />;
  }
  return (
    <>
      <Input
        style={styles.input}
        containerStyle={styles.inputContainer}
        placeholder="search"
        onFocus={onFocusSearch}
      />
      <Categories />
      {isLoading || isRefetching ? (
        <LoadingOverlay />
      ) : (
        <FlatList
          data={products}
          numColumns={2}
          keyExtractor={(item) => item.id}
          renderItem={renderProduct}
        />
      )}
    </>
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
    elevation: 2,
  },
});
