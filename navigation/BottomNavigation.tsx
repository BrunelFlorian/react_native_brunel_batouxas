import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import DetailScreen from "../screens/DetailScreen";
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
                <BottomTabNavigator.Screen name="Home2" component={DetailScreen}
                                           options={{
                                               title: 'Home2',
                                           }}/>
            </BottomTabNavigator.Navigator>
        </NavigationContainer>
    )
}