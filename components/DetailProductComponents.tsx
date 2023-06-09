import { StyleSheet, Text, View } from "react-native";
import { Product } from "../models/Product";
import TitleComponents from "./TitleComponents";
import { Button, Card } from "react-native-paper";

type DetailProductComponents = {
    product: Product;
}

export default function DetailProductComponents(props: DetailProductComponents) {
    return (
            <Card>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Title title={props.product.name}/>
                <Card.Content>
                <Text variant="bodyMedium">{props.product.description}</Text>
                </Card.Content>
                
                <Card.Actions>
                <Button>Modifier</Button>
                </Card.Actions>
            </Card>
    )
};

const styles = StyleSheet.create({
});