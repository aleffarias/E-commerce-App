import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { Text, View } from '../../components/Themed';
import { BestSellingButton } from './BestSellingButton';
import { CatalogueMenu } from './CatalogueMenu';
import { Featured } from './Featured';
import { colors } from '../../styles';

export default function HomeScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <BestSellingButton />
        <CatalogueMenu />
        <Featured />
      </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

