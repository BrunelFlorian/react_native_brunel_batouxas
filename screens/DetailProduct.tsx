import { View, StyleSheet, FlatList } from "react-native";
import TitleComponents from "../components/TitleComponents";
import InputComponents from "../components/InputComponents";
import CreateProductComponents from "../components/CreateProductComponents";
import DetailProductComponents from "../components/DetailProductComponents";

export default function DetailProduct({ route }) {
  const { product } = route.params;
  
    return (
      <View style={styles.container}>
        <DetailProductComponents product={product} />
      </View>
    )
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
  });