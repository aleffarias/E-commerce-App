import * as React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';

import { Button, ButtonGroup, Layout,  } from '@ui-kitten/components';
import { colors } from '../../styles';



export function CatalogueMenu() {

    return (
        <Layout style={styles.container}>
            <Text style={styles.title}>Catalogue</Text>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                <View style={styles.buttonGroup}>
                    <Button style={styles.button} onPress={() => ('')}>Women's Fashion</Button>
                    <Button style={styles.button} onPress={() => ('')}>Women's Fashion</Button>
                    <Button style={styles.button} onPress={() => ('')}>Women's Fashion</Button>
                    <Button style={styles.button} onPress={() => ('')}>Women's Fashion</Button>
                    <Button style={styles.button} onPress={() => ('')}>Women's Fashion</Button>
                </View>
            </ScrollView>
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
      height: 100,
      width: 100,
      borderRadius: 8,
      marginRight: 10,
    },
    title: {
        marginBottom: 10,
        fontSize: 16,
        fontWeight: 'bold',
      },

      buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 10,
      },
  });