import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail
              title="First"
              imageSource={require('../../assets/forest.jpg')}
            />
            <ImageDetail
              title="Second"
              imageSource={require('../../assets/beach.jpg')}
            />
            <ImageDetail
              title="Third"
              imageSource={require('../../assets/mountain.jpg')}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImageScreen;