import * as React from 'react';
import {Text,View,StyleSheet,Image,ScrollView } from 'react-native';

export default function App(){
  return(
    <ScrollView>
    <View style={estilo.container} >
      
        <Text style={estilo.titulo}>Profissões de TI</Text>
        <Text style={estilo.subtitulo}>** Programador de Mobile **</Text>
        <Image style={estilo.img} source={require("./assets/mobile.jpg")}/>
        <Text style={estilo.subtitulo}>** Programador de Backend **</Text>
        <Image style={estilo.img} source={require("./assets/backend.jpg")}/>
        <Text style={estilo.subtitulo}>** Programador de Frontend **</Text>
        <Image style={estilo.img} source={require("./assets/frontend.jpg")}/>
        <Text style={estilo.subtitulo}> ** Analista de DevOps **</Text>
        <Image style={estilo.img} source={require("./assets/devops.jpg")}/>
    
    </View>
    </ScrollView>
  );
}

const estilo = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#00BFFF"
  },
  titulo:{
    marginTop:30,
    fontSize:50,
    color: "#800000",
    marginBottom: 20
  },
  img:{
    width: 350,
    height: 250,
    marginBottom: 20,
    borderRadius:20
  },
  subtitulo:{
    fontSize:20
  }
})











