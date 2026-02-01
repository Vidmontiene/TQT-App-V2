import {StyleSheet} from 'react-native';
import { Platform } from 'react-native';

export const styles = StyleSheet.create({
  
tracos_container: {
    width: '100%',
    paddingTop: 20,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
    paddingBottom: 10
  },

  traco: {
    width: 40,
    height: 6,
    borderRadius: 5,
    backgroundColor: "#ccc",
    marginHorizontal: 6,
  },

  traco_ativo: {
    backgroundColor: '#12B9ED',
    height: 7,
    borderRadius: 7,
  },
  
  container_botoes:{
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
    paddingBottom: Platform.OS === 'android' ? 10 : 12,
  },

  safeBottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'white',
  },

  botao:{
    backgroundColor: '#12B9ED',
    marginHorizontal: 4,
    paddingVertical: 3,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    gap: 4,
    flex: 1
  },

  txt_botao:{
    fontSize: 12,
    marginTop: 2,
    color: 'white',
    fontWeight: 'bold',
  } 
});