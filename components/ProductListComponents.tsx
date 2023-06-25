import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Card } from "react-native-paper";
import { Avatar, IconButton } from "react-native-paper";
import { Product } from "../models/Product";
import { useDispatch} from "react-redux";
import { ListProduct } from "../models/ListProduct";
import { addProductToList } from "../assets/redux/actions/actionAddProductToList";
import { storeFavoriteData, getFavoriteData, removeFavoriteData } from "../data/asyncStorage";

type TitleListItemProps = {
  listProduct: ListProduct;
  product: Product;
}

export default function ProductListComponents(props: TitleListItemProps) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    checkFavoriteStatus();
  }, []);

  const checkFavoriteStatus = async () => {
    const favoriteData = await getFavoriteData();
    if (favoriteData && favoriteData.product && favoriteData.product.id === props.product.id) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  };

  const onPressItem = (product: Product, listProduct: ListProduct) => {
    dispatch(addProductToList(product, listProduct.id));
    navigation.navigate("Home");
  };

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavoriteData(props.product);
      setIsFavorite(false);
    } else {
      storeFavoriteData(props.product);
      setIsFavorite(true);
    }
  };
  

    return (
        <View>
        <Card onPress={() => onPressItem(props.product, props.listProduct)}>
            <Card.Title
            title={props.product.name}
            left={(titleProps) => <Avatar.Icon {...titleProps} icon="folder" />}
            right={(buttonProps) => (
                <View style={styles.buttonContainer}>
                    <IconButton icon="magnify" onPress={() => navigation.navigate("DetailProduct", { product: props.product })} />
                    <TouchableOpacity
                    style={[
                    styles.favoriteButton,
                    { backgroundColor: isFavorite ? "#f2522d" : "gray" },
                    ]}
                    onPress={toggleFavorite}
                >
                    <Avatar.Icon
                    icon="heart"
                    color="white"
                    size={25}
                    style={styles.heartIcon}
                    />
                </TouchableOpacity>

                </View>
            )}
            />
        </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    centered: {
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "black"
    },
    title: {
        fontSize: 35,
    },
    favoriteButton: {
        width: 30,
        height: 30,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
    },
    heartIcon: {
        backgroundColor: "transparent",
    },
    buttonContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
});
