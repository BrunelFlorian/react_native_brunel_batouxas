import { useState} from "react";
import { StyleSheet, View, TextInput } from "react-native";
import DropDown from "react-native-paper-dropdown";
import { Category } from "../models/Category";

type InputListItemProps = {
    inputNamePlaceholder: string;
    inputDescriptionPlaceholder: string;
    inputCategoryPlaceholder: string;
    listCategory: Category[];
    onNameValueChange: (value: string) => void;
    onDescriptionValueChange: (value: string) => void;
    onSelectCategoryValueChange: (value: string) => void;
}

export default function InputComponents(props: InputListItemProps) {
    const [inputNameValue, setNameValue] = useState('');
    const [inputDescriptionValue, setDescriptionValue] = useState('');
    const [selectCategoryValue, setCategoryValue] = useState('');
    const [showDropDown, setShowDropDown] = useState(false);
    const newListCategory = props.listCategory.map(mapCategoryToDropdownItem);
    return (
        <View style={styles.centered}>
            <TextInput
                style={styles.input}
                placeholder={props.inputNamePlaceholder}
                value={inputNameValue}
                onChangeText={(e) => {
                    setNameValue(e);
                    props.onNameValueChange(e);
                  }}
            />
            <TextInput
                style={styles.input}
                placeholder={props.inputDescriptionPlaceholder}
                value={inputDescriptionValue}
                onChangeText={(e) => {
                    setDescriptionValue(e);
                    props.onDescriptionValueChange(e);
                  }}
            />
            <DropDown
              label={"Category"}
              mode={"outlined"}
              visible={showDropDown}
              showDropDown={() => setShowDropDown(true)}
              onDismiss={() => setShowDropDown(false)}
              value={selectCategoryValue}
              setValue={(value) => {
                setCategoryValue(value);
                props.onSelectCategoryValueChange(value);
              }}
              list={newListCategory}
            />
        </View>
    )
};

function mapCategoryToDropdownItem(category: Category): { label: string; value: string; } {
    return {
      label: category.name,
      value: category.name,
    };
  }

const styles = StyleSheet.create({
    centered: {
        alignItems: "center"
    },
    input: {
        height: 55,
        margin: 12,
        fontSize: 20,
        borderWidth: 2,
        borderColor: "grey",
        borderRadius: 10,
        padding: 5,
    }
});
