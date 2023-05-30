import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import DetailCategoryScreen from "../screens/DetailCategoryScreen";
import HomeScreen2 from "../screens/HomeScreen2";

export default function StackNavigation() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Home2" component={HomeScreen2}/>
            <Stack.Screen name="DetailCategory" component={DetailCategoryScreen}/>
        </Stack.Navigator>
    )
  }