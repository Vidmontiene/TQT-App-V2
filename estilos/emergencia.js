import {StyleSheet, Dimensions} from 'react-native';

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container:{
    backgroundColor: 'white',
    paddingHorizontal: 10,
    height: "100%",
  },
  titulo:{
    fontWeight: 'bold',
    fontSize: 23,
    marginTop: 20,
    textAlign:'center'
  },
  txt:{
    fontSize: 17
  },
  subtitulo:{
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 10
  },
  foto:{
    width: '95%',
    height: height * 0.45,
    alignSelf: 'center',
    marginTop: 5,
  },
  topico:{
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 3,
  },
  bullet: {
    fontSize: 30,
    lineHeight: 20,
    marginRight: 8,
  },
  txt_topico:{
    fontSize: 16,
    lineHeight: 20,
  },
  botao:{
    alignSelf: 'center',
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    padding: 17,
    borderRadius: 10,
    width: '90%',
    marginVertical: 20
  },
  txt_botao:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  container_botao:{
    flexDirection: 'row',
    gap: 15
  },
  titulo_icon:{
    fontWeight: 'bold',
    fontSize: 23, 
  },
  subtitulo_icon:{
    fontWeight: '500',
    fontSize: 19,
  },
  container_emergencia:{
    backgroundColor: '#F6F3E0',
    borderRadius: 10,
    borderWidth: 0.5,
    gap: 3,
    borderColor: '#CB8A01',
    paddingHorizontal: 10,
    width: '97%',
    alignSelf: 'center'
  },
  titulo_emergencia:{
    fontWeight: 'bold',
    fontSize: 19,
    color: '#8B5617',
    maxWidth: '90%',
  }
})