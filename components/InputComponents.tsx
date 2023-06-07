import { StyleSheet, View, TextInput } from "react-native";

type InputListItemProps = {
    placeholder: string;
}

export default function InputComponents(props: InputListItemProps) {
    return (
        <View style={styles.centered}>
            <TextInput
                style={styles.input}
                placeholder={props.placeholder}
                keyboardType="numeric"
            />
        </View>
    )
};

const styles = StyleSheet.create({
    centered: {
        alignItems: "center"
    },
    input: {
        height: 40,
        margin: 12,
        fontSize: 30,
        borderWidth: 2,
        borderColor: "grey",
        borderRadius: 10,
        padding: 20  ,
    }
});