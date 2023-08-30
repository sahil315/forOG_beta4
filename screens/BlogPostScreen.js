import React from 'react';
import { Text, View, Button, Image, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Appbar, Card, Title, Paragraph } from 'react-native-paper';

function BlogPostScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const cardContent = route.params?.cardContent || 'Default Content';
  console.log(cardContent.src)
  const handleBackPress = () => {
    navigation.navigate('Home');
  };

  return (
    <ScrollView>
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.BackAction onPress={handleBackPress} />
        <Appbar.Content title={cardContent.title} />
      </Appbar.Header>
      <Card style={styles.card}>
        <Card.Content>
          {/* <Title>{cardContent.title}</Title> */}
          <Image
            source={{uri: cardContent.src}}
            style={styles.image}
          />
          <Paragraph>{cardContent.desc}</Paragraph>
        </Card.Content>
      </Card>
    </View>
    </ScrollView>
  );
}

const styles = {
  card: {
    marginTop: 0,
    marginBottom: 16,
    elevation: 1,
    borderRadius: 8,
  },
  image: {
    width: 250,
    height: 200,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10,
    borderRadius: 20,
    resizeMode: 'cover',
  }
};

export default BlogPostScreen;
