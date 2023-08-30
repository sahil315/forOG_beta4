import React from "react";
import { View, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import { Banner } from "react-native-paper";
import CustomCard from "./../../components/CardsComponent.js";
import { useNavigation } from '@react-navigation/native';

// firebase
import { app } from "../../firebase/firebase";
import { getFirestore, addDoc, getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";

const cardData = [
  { title: "Card 1", content: "This is the content of Card 1." },
  { title: "Card 22", content: "This is the content of Card 22." },
  { title: "Card 3", content: "This is the content of Card 3." },
  { title: "Card 4", content: "This is the content of Card 4." },
  { title: "Card 5", content: "This is the content of Card 5." },
  // Add more card data as needed
];

const HomeBanner = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState([]);
  const db = getFirestore(app);

  useEffect(() => {
    const fetchAndLogCollection = async () => {
      // const db = firebaseApp.firestore();
      const collectionName = 'for-og'; // Replace with your collection name
    
      try {
        const querySnapshot = await getDocs(collection(db, collectionName));
        
        const cardData = querySnapshot.docs.map((doc) => {
          const { name, desc, src } = doc.data();
          return {
            title: name,
            desc: desc,
            src: src,
          };
        });

        setTitle(cardData)
      } catch (error) {
        console.error('Error fetching documents:', error);
      }
    };
    fetchAndLogCollection();
  },[])
  
  //  console.log(JSON.stringify(title) + " title")
  // Call the function to fetch and log documents
  const handleCardPress = () => {
     // Navigate to the BlogPostScreen

        navigation.navigate('BlogPost', { cardContent: content });
    };


  return (
    <ScrollView style={styles.container}>
      {/* Replace 'YOUR_IMAGE_URL' with the URL of your desired image */}
      <Image
        source={require("../../assets/new-york-city-empire-state-building-manhattan-nyc-wallpaper-preview.jpg")}
        style={styles.image}
      />

      
      <View
        contentContainerStyle={styles.cardContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.cardRow}>
          {title.map((card, index) => (
              <CustomCard key={index} title={card.title} src={card.src} desc={card.desc} content={card} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
//    justifyContent: 'center',
     alignContent: 'center'
  },
  image: {
    width: "90%",
    height: 200,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10,
  },
  cardContainer: {
    padding: 0,
    width: "95%",
  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
     marginBottom: 5,
    width: "100%",
    flex: 1,
    // backgroundColor: 'red',
  },
});

export default HomeBanner;
