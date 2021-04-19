import * as React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';
import { colors } from '../../../styles';

export function CatalogueButton(props: any) {
    return (
        <TouchableOpacity style={styles.container} onPress={() => {}}>
            <View>
                <Text style={styles.title}>{props.name}</Text>
            </View>

            <Image 
                source={{uri: props.url}}
                style={styles.image}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.white,
        borderRadius: 8,
        marginBottom: 20,
        width: '95%',

    },
    title: {
        marginLeft: 20,
        fontSize: 16,
        fontWeight: 'bold',
    },
    image: {
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        width: 100,
        height: 100,
    },
  });