import {StyleSheet} from 'react-native';

 export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafaff',
    padding: 10,
    height: "100%"
  },
  titulo:{
    fontWeight: 'bold',
    fontSize: 21,
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
    fontSize: 17,
  },
  txt_botao:{
    fontSize: 14,
    color: '#555'
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


});