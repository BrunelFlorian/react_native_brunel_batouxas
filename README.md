# react_native_brunel_batouxas

Ceci est une application React Native permettant de gérer des produits, notamment des listes d'envies ou de courses, ainsi qu'un catalogue produit associé.

## Fonctionnalités

L'application propose les fonctionnalités suivantes :

- Affichage de la liste des produits : vous pouvez visualiser tous les produits disponibles dans votre catalogue, et vous pouvez ajouter un produit en favoris (stocké dans le local storage).
- Ajout d'un nouveau produit : vous pouvez ajouter de nouveaux produits à votre catalogue en spécifiant leur nom, leur description et leur catégorie.
- Modification d'un produit existant : vous pouvez mettre à jour les informations d'un produit existant, comme son nom, sa description ou sa catégorie.
- Suppression d'un produit : vous pouvez supprimer un produit de votre catalogue.
- Gestion des listes : vous pouvez créer et gérer des listes, telles que des listes d'envies ou de courses, en ajoutant ou supprimant des produits de ces listes.
- Affichage des listes : vous pouvez afficher les produits présents dans chaque liste et les mettre à jour si nécessaire.

L'application est conçue pour vous aider à organiser vos listes d'envies ou de courses en vous permettant de gérer facilement les produits que vous souhaitez ajouter, modifier ou supprimer. Vous pouvez également créer des listes personnalisées pour différents besoins ou occasions.

## Installation

1. Clonez ce dépôt :
```bash
git clone https://github.com/BrunelFlorian/react_native_brunel_batouxas
```

2. Accédez au répertoire du projet :
```bash
cd react_native_brunel_batouxas
```

3. Installez les dépendances :
```bash
npm install
```
ou
```bash
yarn install
```

## Utilisation

Si vous ne possédez pas Expo (https://expo.dev/) vous pouvez l'installer comme suit :

1. Installez Expo en utilisant npm (Node Package Manager) en exécutant la commande suivante :

```bash
npm install --global expo-cli
```

2. Lancez l'application :
```bash
npx expo start
```

3. Une fois l'application lancée, vous avez plusieurs possibilités pour la tester :

- Vous pouvez utiliser un émulateur (Android Studio)
- Vous pouvez utiliser votre téléphone en installant l'application Expo Go (Android ou iOS)
- Vous pouvez utiliser un navigateur web

### Utilisation d'un émulateur

#### Android Studio

1. Installez Android Studio (https://developer.android.com/studio)
2. Lancez Android Studio
3. Cliquez sur "Configure" puis "AVD Manager"
4. Cliquez sur "Create Virtual Device"
5. Choisissez un appareil et cliquez sur "Next"
6. Choisissez une version d'Android et cliquez sur "Next"
7. Cliquez sur "Finish"
8. Cliquez sur "Next"
9. Cliquez sur "Finish"
10. Cliquez sur "Run" pour lancer l'émulateur

### Utilisation d'un navigateur web

Une fois l'application lancée, vous pouvez la tester dans votre navigateur web en choisissant l'option "Run in web browser" (w).

### Utilisation d'un téléphone

Une fois l'application lancée, vous pouvez la tester sur votre téléphone en scannant le QR code affiché dans la console ou en utilisant un émulateur.

## Lancer les tests

Pour lancer les tests vous devez utiliser la commande suivante :
```bash
npm run test
```
ou
```bash
yarn test
```

## Auteurs

Brunel Florian : https://github.com/BrunelFlorian
Batouxas Léo : https://github.com/leobatouxas