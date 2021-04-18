import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon } from '@ui-kitten/components';
import { colors } from '../../../../styles';

export function ReviewsIcon() {
    return (
        <View style={styles.container}>
            <Icon 
                style={styles.icon}
                fill={colors.yellow}
                name='star'
            />
            <Icon 
                style={styles.icon}
                fill={colors.yellow}
                name='star'
            />
            <Icon 
                style={styles.icon}
                fill={colors.yellow}
                name='star'
            />
            <Icon 
                style={styles.icon}
                fill={colors.yellow}
                name='star'
            />
            <Icon 
                style={styles.icon}
                fill={colors.yellow}
                name='star'
            />
        </View>
    )
}

export function FavoriteIcon() {
    return (
        <View style={styles.container}>
            <Icon 
                style={styles.icon}
                fill={colors.yellow}
                name='heart-outline'
            />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      marginTop: 15,
    },
    icon: {
        width: 10,
        height: 10,
    },
    favoriteIcon:{
        width: 20,
        height: 20,
    }
  });