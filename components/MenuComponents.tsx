import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { IconButton, Menu, PaperProvider } from 'react-native-paper';

export default function MenuComponents() {
    const [visible, setVisible] = useState(false);

    const hideMenu = () => setVisible(false);
  
    const showMenu = () => {
        setVisible(true);
    };
    return (
        <View style={{ flex : 1 }}>
            <PaperProvider>
                <Menu
                    visible={visible}
                    anchor={<IconButton icon="dots-vertical" onPress={showMenu}/>}
                    onDismiss={hideMenu}
                >
                    <Menu.Item onPress={() => {}} title="Duplicate" />
                    <Menu.Item onPress={() => {}} title="Supprimer" />
                </Menu>
            </PaperProvider>
        </View>
    )
};

const styles = StyleSheet.create({
    centered: {
        alignItems: "center"
    },
    title: {
        fontSize: 42
    }
});