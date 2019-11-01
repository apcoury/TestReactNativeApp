import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const greeting = <Text style={styles.subHeaderStyle}>Test Text</Text>;

    return (
        <View>
            <Text style={styles.textStyle}>This is the components screen</Text>
            {greeting}
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    subHeaderStyle: {
        fontSize: 15
    }
});

export default ComponentsScreen;