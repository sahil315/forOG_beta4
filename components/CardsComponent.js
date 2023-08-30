import React from 'react';
import {Card, Title, Paragraph} from 'react-native-paper';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import BlogPostScreen from '../screens/BlogPostScreen';


const truncateText = (text, limit) => {
    const words = text.split(' ');

    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    }
    return text;
  };

  
const CustomCard = ({ title, desc, content, src }) => {
    const navigation = useNavigation();
    const truncatedDesc = truncateText(desc, 10);

    
    const handleCardPress = () => {
     // Navigate to the BlogPostScreen
      console.log(navigation.navigate('BlogPost'))
        // navigation.navigate('BlogPost', { cardContent: content });
        navigation.navigate('BlogPostStack', { screen: 'BlogPost', params: { cardContent: content } });

    };

    return (
    <TouchableOpacity style={styles.cardStyles} onPress={() => handleCardPress()}>
    <Card >
        <Card.Cover source={{ uri: src }} />
        <Card.Content>
            <Title>{title}</Title>
            <Paragraph>{truncatedDesc}</Paragraph>
        </Card.Content>
    </Card>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardStyles: {
        width: '45%',
        marginRight: 5,
        marginLeft: 5,
        marginTop: 10,
        // minWidth: 150,
        // backgroundColor: 'blue',
        // marginTop: 15,
        // display: 'inline-block',
        // flex: 1,
      }
   
  });
export default CustomCard;