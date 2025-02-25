import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';

import Detalhes from '../Detalhes';

export default function Filmes({ data }) {
const [visibleModal, setVisibleModal] = useState(false);

 return (
  <View>
    <View style={styles.card}>
      <Text style={styles.titulo}>{data.nome}</Text>
      <Image
      source={{uri: data.foto}}
      style={styles.foto}
      />
      <View style={styles.areaBotao}>
        <TouchableOpacity style={styles.botao} onPress={ () => {setVisibleModal(true)} }>
          <Text style={styles.botaoTexto}>Leia mais</Text>
        </TouchableOpacity>
      </View>
    </View>

    <Modal
    animationType='slide'
    visible={visibleModal}
    transparent={true}
    >
      <Detalhes filme={data} voltar={()=> setVisibleModal(false)}/>
    </Modal>

  </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    margin:15,
    elevation:2
  },
  titulo: {
    padding:15,
    fontSize:18,
  },
  foto:{
    height:250,
    zIndex:2,
  },
  areaBotao: {
    alignItems: 'flex-end',
    marginTop: -45,
    zIndex: 9,
  },
  botao: {
    backgroundColor: '#09a6ff',
    width:100,
    opacity:1,
    padding:8,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  botaoTexto:{
    color:'#FFF',
    textAlign:'center',
    fontWeight: 'bold'
  }
});
