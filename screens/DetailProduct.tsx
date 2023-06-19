import { View, StyleSheet } from "react-native";
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