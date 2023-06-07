import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-paper";
import { Avatar, IconButton } from "react-native-paper";

type TitleListItemProps = {
    title: string;
}

export default function CategorieItemComponents(props: TitleListItemProps) {
    const navigation = useNavigation();

    const onPressItem = (item: string) => {
        console.log(item);
        navigation.navigate('DetailCategory', {options: {title: item}, title: item});
        // Faites quelque chose avec l'élément (item) cliqué
      
        }
    return (
        <Card
        onPress={() => onPressItem(props.title)}
        >
            <Card.Title
                title={props.title}
                left={(props) => <Avatar.Icon {...props} icon="folder" />}
                right={(props) => <IconButton icon="delete" onPress={() => console.log('Delete  ')} />}
            />
        </Card>
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