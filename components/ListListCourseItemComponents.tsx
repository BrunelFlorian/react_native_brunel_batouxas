import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Card, Dialog, PaperProvider, Portal } from "react-native-paper";
import { Avatar, IconButton } from "react-native-paper";
import { Product } from "../models/Product";
import { ListProduct } from "../models/ListProduct";

type ListListCourseItemProps = {
    title: string;
    listProduct: ListProduct;
}

export default function ListListCourseItemComponents(props: ListListCourseItemProps) {
    
    const navigation = useNavigation();

    const onPressItem = (title: string, products:Product[], idList: string) => {
        navigation.navigate('DetailListProduct', {"title": title, "products": products, "idList": idList} );
    }

        const [visibleDialogDelete, setVisibleDialogDelete] = React.useState(false);

        const showDialog = () => {
            console.log("Delete");
            
            setVisibleDialogDelete(true);
        };
      
        const hideDialog = () => setVisibleDialogDelete(false);
    return (
        <View>
            <Card
            onPress={() => onPressItem(props.title, props.listProduct.products, props.listProduct.id)}
            >
                <Card.Title
                    title={props.title}
                    left={(props) => <Avatar.Icon {...props} icon="folder" />}
                    right={(props) => <IconButton icon="delete" onPress={() => showDialog()} />}
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