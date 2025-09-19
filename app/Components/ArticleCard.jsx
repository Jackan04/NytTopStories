import { Image, Text, View, Linking } from 'react-native';
import styles from '../styles';

export default function ArticleCard(props){
    return(
        <View style={styles.card}>
            <Image style={styles.cardImage} source={{ uri: props.imageSrc }} />
            <View style={styles.cardTextContainer}>
           
                <Text style={styles.cardTitle} onPress={() => Linking.openURL(props.url)}>{props.title || "No title"}</Text>
                <Text style={styles.cardDescription}>{props.description || "No description"}</Text>
            </View>
        </View>
    )
}