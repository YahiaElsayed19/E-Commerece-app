import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Colors from "../../constants/Colors";
import Category from "./Category";

function categories({ onPress }) {
    return (
        <ScrollView style={styles.categoris} horizontal={true} showsHorizontalScrollIndicator={false}>
            <Category category="All" />
            <Category category="Electrionic" />
            <Category category="Corona" />
            <Category category="Sports" />
            <Category category="Lighting" />
            <Category category="Clothes" />
        </ScrollView>
    );
}

export default categories;
const styles = StyleSheet.create({
    categoris: {
        marginHorizontal: 15,
        marginBottom: 10,
    },
});