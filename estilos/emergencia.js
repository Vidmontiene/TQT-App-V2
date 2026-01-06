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
    marginBottom: 20,
    marginTop: -10
  },
  titulo2:{
    fontWeight: 'bold',
    fontSize: 23,
    marginTop: 20,
    
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
    marginVertical: 6,
  },
  bullet: {
    fontSize: 20,
    marginRight: 8,
  },
})