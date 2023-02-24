import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Colors from "../../constants/Colors";
import Category from "./Category";
const CATEGORIES = [
    {
        name: "All",
        id:"",
    },
    {
        name: "Electronic",
        id: 44
    },
    {
        name: "Corona",
        id: 43
    },
    {
        name: "Sports",
        id: 42
    },
    {
        name: "Lighting",
        id: 40
    },
    {
        name: "Clothes",
        id: 46
    },
];
function categories() {
    return (
        <ScrollView
            style={styles.categoris}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        >
            {CATEGORIES.map((category) => <Category key={category.id} category={category} />)}
        </ScrollView>
    );
}

export default categories;
const styles = StyleSheet.create({
    categoris: {
        marginHorizontal: 15,
        marginBottom: 10,
        maxHeight:45,
    },
});
