import PagerView from "react-native-pager-view";
import { useState, useRef } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import Feather from '@expo/vector-icons/Feather'; 
import { ligar } from "@/scripts/ligar";
import MaterialIcons from '@expo/vector-icons/MaterialIcons'; 

import Cs0 from "./canulasaiu0";
import Cs1 from "./canulasaiu1";
import Cs2 from "./canulasaiu2";
import Cs3 from "./canulasaiu3";
import Cs4 from "./canulasaiu4";


export default function EmergenciaSwipe() {
  const [pagina, setPagina] = useState(0);
  const pagerRef = useRef<PagerView>(null);
  const telas = [Cs0, Cs1, Cs2, Cs3, Cs4];

  // Passa para a próxima pág
  const proximo = () => {
    if (pagina < telas.length - 1) {
      pagerRef.current?.setPage(pagina + 1);
    }
  };

  // Passa para a pag anterior
  const anterior = () => {
    if (pagina > 0) {
      pagerRef.current?.setPage(pagina - 1);
    }
  };

  return (
    <View style={{ flex: 1}}>
      
      <PagerView
        ref={pagerRef}
        style={{ flex: 1 }}
        initialPage={0}
        onPageSelected={(e) => setPagina(e.nativeEvent.position)}>
          
        {telas.map((Tela, i) => (
            <Tela key={i} />
        ))}
      </PagerView>

      {/*Traços*/}
      <View style={styles.tracos_container}>
        {telas.map((_, i) => (
          <View
            key={i}
            style={[
              styles.traco,
              pagina === i && styles.traco_ativo,
            ]}/>
        ))}
      </View>

      {/*Botões*/}
      <View style={styles.container_botoes}>

        <TouchableOpacity style={styles.botao} onPress={anterior} disabled={pagina === 0}>
          <MaterialIcons name="arrow-back-ios" size={24} color="white" />
          <Text style={styles.txt_botao}>Anterior</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.botao, {backgroundColor: '#EE4544'}]} onPress={() => ligar(192)}>
          <Feather name="phone" size={24} color="white" />
          <Text style={styles.txt_botao}>Emergência</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={proximo} disabled={pagina === telas.length - 1}>
          <MaterialIcons name="arrow-forward-ios" size={24} color="white" />
          <Text style={styles.txt_botao}>Próximo</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tracos_container: {
    position: "absolute",
    top: 20,
    alignSelf: "center",
    flexDirection: "row",
    gap: 5,
    zIndex: 10,
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