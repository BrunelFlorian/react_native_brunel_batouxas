import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Card, Dialog, PaperProvider, Portal } from "react-native-paper";
import { Avatar, IconButton } from "react-native-paper";
import { Product } from "../models/Product";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../assets/redux/actions/actionDeleteProduct";
import { ListProduct } from "../models/ListProduct";
import { addProductToList } from "../assets/redux/actions/actionAddProductToList";

type TitleListItemProps = {
    listProduct: ListProduct;
    product: Product;
}

export default function ProductListComponents(props: TitleListItemProps) {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const onPressItem = (product:Product, listProduct: ListProduct) => {
        dispatch(addProductToList(product, listProduct.id));
        navigation.navigate("Home");
    }
    
    return (
        <View>
            <Card
            onPress={() => onPressItem(props.product, props.listProduct)}
            >
                <Card.Title
                    title={props.product.name}
                    left={(props) => <Avatar.Icon {...props} icon="folder" />}
                    // right={(prop) => <IconButton icon="delete" onPress={() => handleDeleteProduct(props.idList, props.product)} />}
                />
            </Card>
          </View>
    )
};

const styles = StyleSheet.create({
    centered: {
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "black"
    },
    title: {
        fontSize: 35,
    }
});