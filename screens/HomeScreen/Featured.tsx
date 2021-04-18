import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from '@ui-kitten/components';
import ProductList from '../../components/ProductList';

export function Featured() {
    return (
        <View style={styles.container}>
             <Text style={styles.title}>Fetured</Text>
            <ProductList />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      marginTop: 20,
      width: '95%',
    },
    button: {
      height: 70,
      borderRadius: 8,
    },
    title: {
        marginBottom: 10,
        fontSize: 16,
        fontWeight: 'bold',
      },
  });