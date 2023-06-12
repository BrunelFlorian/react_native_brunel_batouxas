import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Card, Dialog, PaperProvider, Portal } from "react-native-paper";
import { Avatar, IconButton } from "react-native-paper";
import { Product } from "../models/Product";

type TitleListItemProps = {
    title: string;
    product: Product;
}

export default function ListProductItemComponents(props: TitleListItemProps) {
    const navigation = useNavigation();

    const onPressItem = (title: string, product:Product) => {
        navigation.navigate('DetailProduct', {"product": product} );
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
            onPress={() => onPressItem(props.title, props.product)}
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
    }
});