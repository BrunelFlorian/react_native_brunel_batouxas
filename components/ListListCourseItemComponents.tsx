import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Card, Dialog, PaperProvider, Portal } from "react-native-paper";
import { Avatar, IconButton } from "react-native-paper";
import { Product } from "../models/Product";
import { ListProduct } from "../models/ListProduct";
import { useDispatch } from "react-redux";
import { deleteListProduct } from "../assets/redux/actions/actionDeleteListProduct";

type ListListCourseItemProps = {
    title: string;
    listProduct: ListProduct;
}

export default function ListListCourseItemComponents(props: ListListCourseItemProps) {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const onPressItem = (listProduct: ListProduct) => {
        navigation.navigate('DetailListProduct', {"title": listProduct.name, "listProduct": listProduct} );
    }

    const handleDeleteProduct = (idList: string) => {
        dispatch(deleteListProduct(idList));
    };
    return (
        <View>
            <Card
            onPress={() => onPressItem(props.listProduct)}
            >
                <Card.Title
                    title={props.title}
                    left={(props) => <Avatar.Icon {...props} icon="folder" />}
                    right={(prop) => <IconButton icon="delete" onPress={() => handleDeleteProduct(props.listProduct.id)} />}
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
    },
    background: {
        backgroundColor: "#f5f5f5",
    }
});