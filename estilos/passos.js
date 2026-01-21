import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container:{
    backgroundColor: 'white',
    paddingHorizontal: 10,
    height: "100%"
  },

  titulo:{
    fontWeight: 'bold',
    fontSize: 23,
    marginBottom: 20
  },

  check:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: 5
  },

  item:{
    fontSize: 16,
    flexShrink: 1,
    fontWeight: 'semibold'
  },

  container_passo:{
    backgroundColor: '#DFF1F6',
    width: '99%',
    borderRadius: 10,
    alignSelf: 'center',
    flexDirection: 'row', 
    alignItems: 'flex-start',
    padding: 15,
    gap: 5,
    marginBottom: 15
  },

  circulo:{
    backgroundColor: '#13B6EC',
    width: 55,
    height: 55,
    borderRadius: 55/2, 
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  txt_circulo:{
    fontSize: 24,
    display: 'flex',
    fontWeight: 'bold',
    color: 'white'
  },

  txt_passo_container:{
    flex: 1,
    flexGrow: 1,
    minWidth: 0,
  },

  titulo_passo:{
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 3,
    flexShrink: 1
  },

  descricao_passo:{
    fontSize: 15,
    opacity: 0.8,
    flexShrink: 1,
    flexWrap: 'wrap',
    width: '100%',
  },

  botao:{
    backgroundColor: '#12B9ED',
    height: 52,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },

  txt_botao:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17
  },

  container_aviso:{
    backgroundColor: '#DFF1F6',
    width: '99%',
    borderRadius: 10,
    alignSelf: 'center',
    padding: 10,
    gap: 8,  
    marginBottom: 15
  },

  titulo_aviso:{
    color: '#12B9ED',
    fontWeight: 'bold',
    fontSize: 20
  },

  icon_titulo:{
    flexDirection: 'row', 
  },
  
  video:{
    width: '97%', 
    aspectRatio: 16/9,
    alignSelf: 'center',
    marginBottom: 15,
    borderRadius: 15,
    overflow: 'hidden',
  }
});