import {StyleSheet, Dimensions, Platform } from 'react-native';

const { width } = Dimensions.get('window');

 export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafaff',
    paddingHorizontal: 10,
    height: "100%",
    flex: 1,
    paddingTop: 20,
  },

  titulo:{
    fontWeight: 'bold',
    fontSize: Platform.OS === "ios" ? 23 : 21,
    marginBottom: 20
  },

  botao:{
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: 'white',
    borderColor: "#f1f1f1ff",
    borderWidth: 0.7,
    borderRadius: 8,
    height: 115,
    marginBottom: 10,
  },

  titulo_botao:{
    fontWeight: 'bold',
    fontSize: Platform.OS === "ios" ? 18 : 17,
  },

  txt_botao:{
    fontSize: Platform.OS === "ios" ? 16 : 14,
    color: '#555',
    textAlign: 'justify'
  },

  img:{
    marginRight: 12,
    color: '#12B9ED',
    backgroundColor: "#D0F0FB",
    padding: 20,
    borderRadius: 12,
  
  },

  img_vermelha:{
    marginRight: 12,
    color: "#EF4444",
    backgroundColor: "#f8d9d8bd",
    padding: 20,
    borderRadius: 12,
  
  },

  img_redondo:{
    marginRight: 12,
    color: '#12B9ED',
    backgroundColor: "#D0F0FB",
    padding: 20,
    borderRadius: 50,
  },

  container_botao:{
    flex: 1,
    justifyContent: 'center',
    gap: 3
  },

  seta:{
    marginLeft: 4.5,
    color: '#555'
  },
  
  msg:{
    backgroundColor: '#D0F0FB',
    color: '#12B9ED',
    fontWeight: '600',
    marginBottom: 13,
    padding: 22,
    paddingTop: 30,
    fontSize: 17,
    textAlign: 'center',
    width: width,
    zIndex: 999,
    borderRadius: 4,
    position: 'absolute',
    marginTop: Platform.OS === "ios" ? 45 : 0
  },

  input_txt:{
    padding: 0
  },
});