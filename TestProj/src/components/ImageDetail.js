import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ({imageSource, title}) => {
    return (
        <View>
            <Image
                align="center"
                style={{width: 100, height: 100}}
                source={imageSource}
            />
            <Text>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImageDetail;