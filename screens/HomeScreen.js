import { useEffect } from "react"
import { View, Text } from "react-native"
import { getProducts } from "../util/products"

function HomeScreen() {
  useEffect(() => {
    async function getProductsByCat() {
      try {
        const response = await getProducts(44,2)
        console.log(response);
      } catch (error) {
        console.log("error");
      }
    }
    getProductsByCat()
  }, [])
  return <View>
    <Text>Home Screen</Text>
  </View>
}

export default HomeScreen