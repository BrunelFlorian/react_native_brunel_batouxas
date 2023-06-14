import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Card, Dialog, PaperProvider, Portal } from "react-native-paper";
import { Avatar, IconButton } from "react-native-paper";
import { Product } from "../models/Product";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../assets/redux/actions/actionDeleteProduct";

type TitleListItemProps = {
    idList: string;
    title: string;
    product: Product;
}

export default function ListProductItemComponents(props: TitleListItemProps) {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const onPressItem = (title: string, product:Product) => {
        navigation.navigate('DetailProduct', {"product": product} );
    }

    const handleDeleteProduct = (idList: string, product: Product) => {
        dispatch(deleteProduct(idList, product));
      };
    
    return (
        <View>
            <Card
            onPress={() => onPressItem(props.title, props.product)}
            >
                <Card.Title
                    title={props.title}
                    left={(props) => <Avatar.Icon {...props} icon="folder" />}
                    right={(prop) => <IconButton icon="delete" onPress={() => handleDeleteProduct(props.idList, props.product)} />}
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