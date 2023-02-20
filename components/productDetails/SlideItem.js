import {
    Image,
    StyleSheet,
    View,
    Dimensions,
} from 'react-native';
import React from 'react';

const { width } = Dimensions.get('screen');

const SlideItem = ({ item }) => {

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: item }}
                resizeMode="cover"
                style={[
                    styles.image
                ]}
            />
        </View>
    );
};

export default SlideItem;

const styles = StyleSheet.create({
    container: {
        width,
        height:300,
    },
    image: {
        height:300,
        width: '100%',
    },
});