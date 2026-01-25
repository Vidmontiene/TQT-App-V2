import PagerView from "react-native-pager-view";
import { useState, useRef } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import Feather from '@expo/vector-icons/Feather'; 
import { IconSymbol } from '@/components/ui/icon-symbol';
import { ligar } from "@/scripts/ligar";
import { styles } from "@/estilos/swiper";
import MaterialIcons from '@expo/vector-icons/MaterialIcons'; 
import { router } from "expo-router";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Imports de telas DIFICULDADE DE RESPIRAR
import Dr0 from "./dificuldaderesp0";
import Dr1 from "./dificuldaderesp1";
import Dr2 from "./dificuldaderesp2";
import Dr3 from "./dificuldaderesp3";
import Dr4 from "./dificuldaderesp4";
import Dr5 from "./dificuldaderesp5";

export default function EmergenciaSwipe() {

  const insets = useSafeAreaInsets();

  const [pagina, setPagina] = useState(0);
  const pagerRef = useRef<PagerView>(null);
  const telas = [Dr0, Dr1, Dr2, Dr3, Dr4, Dr5];

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
      <View style={[styles.container_botoes, { bottom: insets.bottom }]}>

        {pagina === 0 ?
          <TouchableOpacity style={styles.botao} onPress={() => router.push('/')}>
            <IconSymbol  name="house.fill" size={24} color='white' />
            <Text style={styles.txt_botao}>Sair</Text>
          </TouchableOpacity> 
          :
          <TouchableOpacity style={styles.botao} onPress={anterior} disabled={pagina === 0}>
            <MaterialIcons name="arrow-back-ios" size={24} color="white" />
            <Text style={styles.txt_botao}>Anterior</Text>
          </TouchableOpacity>
        }

        <TouchableOpacity style={[styles.botao, {backgroundColor: '#EE4544'}]} onPress={() => ligar(192)}>
          <Feather name="phone" size={24} color="white" />
          <Text style={styles.txt_botao}>Emergência</Text>
        </TouchableOpacity>

        {pagina === telas.length - 1 ?         
        
          <TouchableOpacity style={styles.botao} onPress={() => router.push('/')}>
            <IconSymbol  name="house.fill" size={24} color='white' />
            <Text style={styles.txt_botao}>Sair</Text>
          </TouchableOpacity> 
          :
          <TouchableOpacity style={styles.botao} onPress={proximo}>
            <MaterialIcons name="arrow-forward-ios" size={24} color="white" />
            <Text style={styles.txt_botao}>Próximo</Text>
          </TouchableOpacity>

        }

      </View>

    </View>
  );
}

