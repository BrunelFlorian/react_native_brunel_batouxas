import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import CreateProductScreen from "../screens/CreateProductScreen";
import StackNavigation from "./StackNavigation";

export default function BottomNavigation() {
    const BottomTabNavigator = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <BottomTabNavigator.Navigator>
                <BottomTabNavigator.Screen name="Home" component={StackNavigation}
                                           options={{
                                               title: 'Home',
                                               headerShown: false,
                                           }}/>
                <BottomTabNavigator.Screen name="Home2" component={CreateProductScreen}
                                           options={{
                                               title: 'Home2',
                                           }}/>
            </BottomTabNavigator.Navigator>
        </NavigationContainer>
    )
}