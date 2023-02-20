import { StyleSheet, Animated, View, Dimensions } from 'react-native';
import React from 'react';
import Colors from "../../constants/Colors"
const { width } = Dimensions.get('screen');

const Pagination = ({ data, scrollX, index }) => {
    return (
        <View style={styles.container}>
            {data.map((_, idx) => {
                const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];

                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [12, 30, 12],
                    extrapolate: 'clamp',
                });

                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.2, 1, 0.1],
                    extrapolate: 'clamp',
                });

                const backgroundColor = scrollX.interpolate({
                    inputRange,
                    outputRange: ['#ccc', '#3669C9', '#ccc'],
                    extrapolate: 'clamp',
                });

                return (
                    <Animated.View
                        key={idx.toString()}
                        style={[
                            styles.dot,
                            { width: dotWidth, backgroundColor },
                            // idx === index && styles.dotActive,
                        ]}
                    />
                );
            })}
        </View>
    );
};

export default Pagination;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical:12,
    },
    dot: {
        width: 12,
        height: 12,
        borderRadius: 6,
        marginHorizontal: 3,
        backgroundColor: '#ccc',
    },
    dotActive: {
        backgroundColor:Colors.primary100,
    },
});