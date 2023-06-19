import { createStackNavigator } from "@react-navigation/stack";
import DetailProduct from "../screens/DetailProduct";
import ProductScreen from "../screens/ProductScreen";
import CreateProductScreen from "../screens/CreateProductScreen";

export default function StackNavigationProduct() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Product">
            <Stack.Screen name="Product list" component={ProductScreen}/>
            <Stack.Screen name="DetailProduct" component={DetailProduct} />
            <Stack.Screen name="CreateProduct" component={CreateProductScreen} options={{ title: 'Add new product' }}/>
        </Stack.Navigator>
    )
  }