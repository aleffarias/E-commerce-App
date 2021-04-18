import * as React from 'react';
import { FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import { ProductItem } from './ProductItem';

const renderItem = (products: any) => {
    return (
        <ProductItem {...products} product={products} />
    )
}

function ProductList(props: any) {
    return (
        <FlatList 
            data={props.products}
            renderItem={renderItem}
            keyExtractor={(product) => product.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        />
    )
}

const mapStateToProps = (state: { products: any; }) => {
    return {products: state.products};
};

export default connect(mapStateToProps)(ProductList);