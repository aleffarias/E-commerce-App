import * as React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';
import { Button, Layout } from '@ui-kitten/components';
import { colors } from '../../styles';

export function BestSellingButton() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
                <Image 
                    source={{uri: 'https://media.allure.com/photos/5a3c2d57dd0c5b5b96b21856/master/pass/sephora-best-sellers-2017.jpg'}}
                    style={styles.image}
                />
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        width: '95%',
        borderRadius: 8,
        marginTop: 20,
        
    },
    button: {
        height: 100,
        borderRadius: 8,
    },
    image: {
        borderRadius: 8,
        width: '100%',
        height: '100%',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
      },
  });