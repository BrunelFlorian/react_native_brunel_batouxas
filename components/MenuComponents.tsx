import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { IconButton, Menu, PaperProvider } from 'react-native-paper';

export default function MenuComponents() {
    const [visible, setVisible] = useState(false);

    const hideMenu = () => setVisible(false);
  
    const showMenu = () => {
        setVisible(true);
    };
    return (
        <View style={{ height: '100%', alignItems: 'center', justifyContent: 'center' }}>
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