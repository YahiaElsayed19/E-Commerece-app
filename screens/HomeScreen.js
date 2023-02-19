import { View, Text } from "react-native";
import { useQuery } from "react-query";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { getProducts } from "../util/products";
import Category from '../components/category/Category'
function HomeScreen() {
  return <Category catId={44}/>
}

export default HomeScreen;
