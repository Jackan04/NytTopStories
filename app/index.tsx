import { useEffect, useState } from 'react';
import { ScrollView, Text, View, Pressable, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles'

export default function Index() {
  const [articles, setArticles] = useState([])
  const[activeCategory, setActiveCategory] = useState("most-viewed");

  useEffect(() => {
      // Which category is currently active?
      activeCategory === "most-viewed" ? getMostViewed() : getMostShared
  },[])

    const getMostViewed = () =>{

    }

    const getMostShared = () =>{

  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>NYT Top Stories</Text>
      </View>
      <View style={styles.controls}>
        <Pressable style={styles.button} onPress={() => getMostViewed}><Text style={styles.buttonText}>Most Viewed</Text></Pressable>
        <Pressable style={styles.button} onPress={() => getMostShared}><Text style={styles.buttonText}>Most Shared</Text></Pressable>
      </View>
      {activeCategory === "most-viewed" ? <Text style={styles.heading}>Most Viewed</Text> : <Text style={styles.heading}>Most Shared</Text>}

    
    </SafeAreaView>
  );
}
