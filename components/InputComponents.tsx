import { useState} from "react";
import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-paper";
import DropDown from "react-native-paper-dropdown";
import { Category } from "../models/Category";

type InputListItemProps = {
    inputNameLabel: string;
    inputDescriptionLabel: string;
    selectCategoryLabel: string;
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
              style={styles.fields}
              label={props.inputNameLabel}
              value={inputNameValue}
              onChangeText={(e) => {
                  setNameValue(e);
                  props.onNameValueChange(e);
                }}
          />
          <TextInput
              style={styles.fields}
              label={props.inputDescriptionLabel}
              value={inputDescriptionValue}
              onChangeText={(e) => {
                  setDescriptionValue(e);
                  props.onDescriptionValueChange(e);
                }}
          />
            <DropDown
            label={props.selectCategoryLabel}
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
    fields: {
      margin: 10,
    }
});
