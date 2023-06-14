import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import DetailListProductScreen from "../screens/DetailListProductScreen";
import DetailProduct from "../screens/DetailProduct";
import CreateListScreen from "../screens/CreateListScreen";

export default function StackNavigation() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="DetailProduct" component={DetailProduct} options={({ route }) => ({ title: route.params.product.name })}/>
            <Stack.Screen name="DetailListProduct" component={DetailListProductScreen}  options={({ route }) => ({ title: route.params.title})}/>
            <Stack.Screen name="CreateList" component={CreateListScreen} options={{ title: 'Add a List' }}/>
        </Stack.Navigator>
    )
  }