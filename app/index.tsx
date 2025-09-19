import { useEffect, useState } from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { API_KEY } from '../assets/apiKey.js';
import ArticleCard from './Components/ArticleCard';
import styles from './styles';

export default function Index() {
  const [articles, setArticles] = useState<any[]>([])
  const[activeCategory, setActiveCategory] = useState("most-viewed");
  const apiKey = API_KEY

  useEffect(() => {
      activeCategory === "most-viewed" ? getMostViewed() : getMostShared()
  },[activeCategory])

  function getMostViewed(){
        (setActiveCategory("most-viewed"))
        
        return fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${apiKey}`)
          .then(response => response.json())
          .then(json => setArticles(json.results))
          .catch(error => {
            console.error(`Most Viewed Error: ${error.message}`)
            alert(`Error: ${error.message}`)
          })
    } 

  function getMostShared(){
        (setActiveCategory("most-shared"))
        
        return fetch(`https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=${apiKey}`)
          .then(response => response.json())
          .then(json => setArticles(json.results))
          .catch(error => {
            console.error(`Most Shared Error: ${error.message}`)
            alert(`Error: ${error.message}`)
          })
     }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>NYT Top Stories</Text>
      </View>
      <View style={styles.controls}>
        <Pressable style={styles.button} onPress={getMostViewed}><Text style={styles.buttonText}>Most Viewed</Text></Pressable>
        <Pressable style={styles.button} onPress={getMostShared}><Text style={styles.buttonText}>Most Shared</Text></Pressable>
      </View>
      {activeCategory === "most-viewed" ? <Text style={styles.heading}>Most Viewed</Text> : <Text style={styles.heading}>Most Shared</Text>}
    
      <FlatList 
        data={articles} 
        renderItem={({item}) => (
          <ArticleCard 
            title={item.title} 
            description={item.abstract}
            url={item.url}
            imageSrc={item.media && item.media[0] && item.media[0]["media-metadata"] ? item.media[0]["media-metadata"][0].url : "https://via.placeholder.com/150"}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      
      
    </SafeAreaView>
  );
}
