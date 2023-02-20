import { useContext } from "react";
import { View, FlatList } from "react-native";
import { useQuery } from "react-query";
import Product from "../components/products/Product";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { AuthContext } from "../store/auth-context";
import { getFav } from "../util/products";
function FavoriteScreen() {
  const authCtx = useContext(AuthContext)
  const { data, isLoading } = useQuery("GetFavProducts", () => getFav(authCtx.idToken));
  // console.log(data.data.data.data[0]);
  let products = []
  for (let i = 0; i < data?.data.data.data.length; i++) {
    products.push(data?.data.data.data[i].product)
  }
  // console.log(products);
  if (isLoading) {
    return <LoadingOverlay />
  }
  function renderProduct(itemData) {
    return <Product product={itemData.item} inFav={true}/>
  }
  return (
    <View>
      <FlatList data={products} numColumns={2} keyExtractor={(item) => item.id} renderItem={renderProduct} />
    </View>
  );
}


export default FavoriteScreen