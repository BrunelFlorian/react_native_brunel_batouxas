import { StyleSheet, Text, View } from "react-native";

type TitleListItemProps = {
    title: string;
}

export default function TitleComponents(props: TitleListItemProps) {
    return (
        <View style={styles.centered}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    centered: {
        alignItems: "center"
    },
    title: {
        fontSize: 42,
        fontWeight: "bold",
        marginTop: 50,
        marginBottom: 20,
    }
});