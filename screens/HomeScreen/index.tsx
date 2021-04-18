import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../../components/Themed';
import { BestSellingButton } from './BestSellingButton';
import { CatalogueMenu } from './CatalogueMenu';
import { Featured } from './Featured';
import { styles } from './styles'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <BestSellingButton />
      <CatalogueMenu />
      <Featured />
    </View>
  );
}

