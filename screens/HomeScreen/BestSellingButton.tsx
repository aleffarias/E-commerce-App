import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Layout } from '@ui-kitten/components';
import { colors } from '../../styles';

export function BestSellingButton() {
    return (
        <Layout style={styles.container}>
            <Button style={styles.button} onPress={() => ('')}>
                Best Selling
            </Button>
        </Layout>
    )
}

const styles = StyleSheet.create({
    container: {
      marginTop: 20,
      width: '95%',
      backgroundColor: colors.background,
    },
    button: {
      height: 70,
      borderRadius: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
      },
  });