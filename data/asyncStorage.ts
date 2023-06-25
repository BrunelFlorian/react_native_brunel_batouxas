import AsyncStorage from '@react-native-async-storage/async-storage';

// Stocker les données de favoris
export const storeFavoriteData = async (product) => {
  try {
    const existingData = await getFavoriteData();
    let newData = [];
    if (existingData) {
      newData = [...existingData, product];
    } else {
      newData = [product];
    }
    const jsonData = JSON.stringify(newData);
    await AsyncStorage.setItem('favorite_data', jsonData);
  } catch (e) {
    console.log("Une erreur s'est produite", e);
  }
};


// Récupérer les données de favoris
export const getFavoriteData = async () => {
  try {
    const jsonData = await AsyncStorage.getItem('favorite_data');
    return jsonData != null ? JSON.parse(jsonData) : null;
  } catch (e) {
    console.log("Une erreur s'est produite", e);
    return null;
  }
};

// Supprimer les données de favoris
export const removeFavoriteData = async (product) => {
  try {
    const existingData = await getFavoriteData();
    if (existingData) {
      const newData = existingData.filter((item) => item.id !== product.id);
      const jsonData = JSON.stringify(newData);
      await AsyncStorage.setItem('favorite_data', jsonData);
    }
  } catch (e) {
    console.log("Une erreur s'est produite", e);
  }
};
