import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import { Text, View } from '../../components/Themed';
import { colors } from '../../styles';
import { CatalogueButton } from './components/CatalogueButton';

export default function CatalogueScreen() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CatalogueButton name={"Women's Fashion"} url={'https://image.freepik.com/fotos-gratis/jovem-excitada-segurando-sacolas-de-compras_74952-253.jpg'} />
        <CatalogueButton name={"Men's Fashion"} url={'https://i.pinimg.com/originals/8d/bb/1e/8dbb1e179e04e7ab8a66e419609599fa.jpg'} />
        <CatalogueButton name={"Phones"} url={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrrcW7JJcagSFiUnoibkK5bKPXhoas5fqfrQ&usqp=CAU'}/>
        <CatalogueButton name={"Computers"} url={'https://i.pcmag.com/imagery/roundups/03yEDeTzPo1WxOu5QGWq9Zq-16..1598476026.jpg'}/>
        <CatalogueButton name={"Smart Home"} url={'https://positivocasainteligente.vteximg.com.br/arquivos/smart-home-seguranca-imagem-2.jpg?v=637408741440300000'}/>
        <CatalogueButton name={"Home and Kitchen"} url={'https://houseandhome.com/wp-content/uploads/2018/01/Ultimate-Kitchens-DSC_9405-HH_SE17.jpg'}/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
