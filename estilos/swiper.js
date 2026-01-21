import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({

tracos_container: {
    position: "absolute",
    top: 20,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
    zIndex: 10,
    backgroundColor: 'white',
    paddingBottom: 6,
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
    bottom: 0,
    width: "100%",
    flexDirection: 'row',
    alignItems: "center",
    alignSelf: 'center',
    backgroundColor: 'white',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#eee",
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