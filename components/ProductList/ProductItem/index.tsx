import * as React from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Icon, Layout } from '@ui-kitten/components';
import { FavoriteIcon, ReviewsIcon } from './components/ReviewsIcon';
import { colors } from '../../../styles';

export function ProductItem(props: any) {

    const  product = props.product.item

    const HeartIcon = (props: any) => (
        <Icon {...props} name='heart-outline'/>
      );

    return (
        <TouchableOpacity>
            <View>
                <Image 
                // ./../../../assets/images/productsImages/womanFashion/woman1.png
                    source={{uri: product.image}}
                    style={styles.image}
                />
                <View style={styles.containerButton}>
                    <ReviewsIcon />
                    <Button style={styles.favorite} appearance='ghost' status='basic' accessoryLeft={HeartIcon}/>
                </View>

                <Text style={styles.description}>
                    {product.description}
                </Text>

                <Text style={styles.price}>
                    {'$' + product.price}
                </Text>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    container: {
      //flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    image: {
        height: 150,
        width: 150,
        marginRight: 10,
    },
    favorite: {
        //alignSelf: 'baseline',
        //backgroundColor: colors.white,
        height: 15,
        width: 15,
        borderRadius: 100,
        marginRight: 10,
    },
    icon: {
        width: 10,
        height: 10,
    },
    description: {
        marginTop: -10,
        fontSize: 12,
    },
    price: {
        marginTop: 2,
        fontSize: 16,
        fontWeight: 'bold',
    },
  });