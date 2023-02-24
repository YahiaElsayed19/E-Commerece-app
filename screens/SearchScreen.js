import { useContext, useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useQuery } from "react-query";
import Input from "../components/UI/Input";
import { AuthContext } from "../store/auth-context";
import { getSearchData } from "../util/search";
import Product from "../components/products/Product";
import { useDebounce } from "use-debounce";
import LoadingOverlay from "../components/UI/LoadingOverlay";

function SearchScreen() {
    const [searchText, setSearchText] = useState("");
    const [deboucedSearchText] = useDebounce(searchText, 500);
    function changeSearchTextHandler(enteredText) {
        setSearchText(enteredText);
    }
    const authCtx = useContext(AuthContext);
    const { data, isLoading, refetch, isRefetching } = useQuery(
        "searchRequest",

        () => {
            if (deboucedSearchText.trim("").length !== 0) {
                return getSearchData(authCtx.idToken, deboucedSearchText)
            }
        }
    );
    useEffect(() => {
        refetch();
    }, [deboucedSearchText]);
    const searchResults = data?.data.data.data;
    function renderProduct(itemData) {
        return <Product product={itemData.item} />;
    }
    return (
        <>
            <Input
                autoFocus={true}
                style={styles.input}
                containerStyle={styles.inputContainer}
                placeholder="search"
                onChangeText={changeSearchTextHandler}
            />
            {isLoading || isRefetching ? (
                <LoadingOverlay />
            ) : (
                <FlatList
                    data={searchResults}
                    numColumns={2}
                    keyExtractor={(item) => item.id}
                    renderItem={renderProduct}
                />
            )}
        </>
    );
}

export default SearchScreen;
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
});
