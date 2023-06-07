import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { IconButton, Menu } from 'react-native-paper';

export default function MenuComponents() {
    const [visible, setVisible] = useState(false);

    const hideMenu = () => setVisible(false);
  
    const showMenu = () => {
        setVisible(true);
    };
    return (
        <View style={{ height: '100%', alignItems: 'center', justifyContent: 'center' }}>
            <Menu
                visible={visible}
                anchor={<IconButton icon="dots-vertical" onPress={showMenu}/>}
                onRequestClose={hideMenu}
            >
                <Menu.Item>Supprimer</Menu.Item>
                <Menu.Item>Supprimer</Menu.Item>
            </Menu>
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