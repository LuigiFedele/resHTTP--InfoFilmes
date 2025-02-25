import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';

import api from './src/services/api';
import Filmes from './src/Filmes';

export default function App(){
  const [filmes,setFilmes] = useState([]);
  const [loading,setLoading] = useState(true);
  
  useEffect(()=>{
    async function loadFilmes() {
      const response = await api.get('r-api/?api=filmes');
      //console.log(response.data);
      setFilmes(response.data)
      setLoading(false);
    }

    loadFilmes();
  },[]);

  if(loading){
    return(
      <View style={{alignItems:'center', justifyContent:'center', flex:1}}>
        <ActivityIndicator size={45} color="#121212"/>
      </View>
    )
  }else{
    return (
      <View style={styles.container}>
        <FlatList
        data={filmes}
        keyExtractor={ item => String(item.id)}
        renderItem={ ({item}) => <Filmes data={item}/>}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,

  },
})