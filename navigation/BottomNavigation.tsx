import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import ProductScreen from "../screens/ProductScreen";
import StackNavigation from "./StackNavigation";
import { Button } from "react-native-paper";
import StackNavigationProduct from "./StackNavigationProduct";

export default function BottomNavigation() {
    const BottomTabNavigator = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <BottomTabNavigator.Navigator>
                <BottomTabNavigator.Screen name="shoppinglists" component={StackNavigation}
                                           options={{
                                               title: 'Shopping lists',
                                               headerShown: false,
                                               tabBarIcon: () => (
                                                <Button icon="format-list-bulleted"></Button>
                                            ),
                                           }}/>
                <BottomTabNavigator.Screen name="addProduct" component={StackNavigationProduct}
                                           options={{
                                               title: 'Product list',
                                               headerShown: false,
                                               tabBarIcon: () => (
                                                <Button icon="plus"></Button>
                                            ),
                                           }}/>
            </BottomTabNavigator.Navigator>
        </NavigationContainer>
    )
}