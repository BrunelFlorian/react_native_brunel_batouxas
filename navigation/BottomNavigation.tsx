import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import CreateProductScreen from "../screens/CreateProductScreen";
import StackNavigation from "./StackNavigation";
import { Button } from "react-native-paper";

export default function BottomNavigation() {
    const BottomTabNavigator = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <BottomTabNavigator.Navigator>
                <BottomTabNavigator.Screen name="lists" component={StackNavigation}
                                           options={{
                                               title: 'Lists',
                                               headerShown: false,
                                               tabBarIcon: () => (
                                                <Button icon="format-list-bulleted"></Button>
                                            ),
                                           }}/>
                <BottomTabNavigator.Screen name="addProduct" component={CreateProductScreen}
                                           options={{
                                               title: 'Add product',
                                               tabBarIcon: () => (
                                                <Button icon="plus"></Button>
                                            ),
                                           }}/>
            </BottomTabNavigator.Navigator>
        </NavigationContainer>
    )
}