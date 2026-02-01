import { StyleSheet, View, TouchableOpacity, Text, ScrollView, Dimensions  } from 'react-native';
import { Platform } from 'react-native';
import { useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';
import { CheckBox } from 'react-native-elements';
import { getLista, setLista } from '@/database/lista'

export default function Materiais() {

  // 1 = verdadeiro, 0 = falso
  const [items, setItems] = useState({
      canula: false,
      fita: false,
      gaze: false,
      solucao: false,
      aspirador: false,
      oculos: false,
      luva: false,
      sonda: false,
      mascara: false  
  });

  // Função para inverter o valor da checkbox ao clicar
  const mudaValor = (key: keyof typeof items) => {
      setItems({ ...items, [key]: !items[key] });
      return !items[key];
  };

  // Carregar do banco sempre que a tela ganhar foco
  useFocusEffect(
      useCallback(() => {
          carregarLista();
      }, [])
  );

  // Carrega os valores do DB nos useStates
  const carregarLista = async () => {
      const rows = await getLista();
      if (Array.isArray(rows) && rows.length > 0) {
          const row = rows[0];
          setItems({
              canula: row.canula === 1,
              fita: row.fita === 1,
              aspirador: row.aspirador === 1,
              solucao: row.solucao === 1,
              gaze: row.gaze === 1,
              luva: row.luva === 1,
              sonda: row.sonda === 1,
              oculos: row.oculos === 1,
              mascara: row.mascara === 1,
          });
      }
  };

  // Muda o valor do checklist, tanto no DB quanto no react
  const mudaLista = async (campo: keyof typeof items) => {
      const valor = mudaValor(campo);
      await setLista(campo, valor ? 1 : 0); 
  };

  return (
    <ScrollView style={{backgroundColor: '#fafafaff'}}>
      <View style={styles.container}>
            
        <Text style={styles.titulo}>Kit de Cuidados</Text>

        {/*Canula*/}
        <TouchableOpacity style={styles.botao} onPress={() => mudaLista("canula")}>
          <View style={styles.conteudo_botao}>
            <Text style={styles.titulo_botao}>Cânula de traqueostomia (tamanho adequado)</Text>
              <CheckBox
                checked={items.canula}
                onPress={() => mudaLista("canula")}
                checkedColor= '#12B9ED'
                uncheckedColor="gray"
                size={30}
                containerStyle={{ padding: 0, margin: 0, backgroundColor: 'transparent' }}
              />
          </View>
        </TouchableOpacity>

        {/*Fita Adesiva*/}
        <TouchableOpacity style={styles.botao} onPress={() => mudaLista("fita")}>
          <View style={styles.conteudo_botao}>
            <Text style={styles.titulo_botao}>Fita adesiva para fixação da cânula</Text>
            <CheckBox
              checked={items.fita}
              onPress={() => mudaLista("fita")}
              checkedColor= '#12B9ED'
              uncheckedColor="gray"
              size={30}
              containerStyle={{ padding: 0, margin: 0, backgroundColor: 'transparent' }}
            />
          </View>
        </TouchableOpacity>

        {/*Gaze*/}
        <TouchableOpacity style={styles.botao} onPress={() => mudaLista("gaze")}>
          <View style={styles.conteudo_botao}>
            <Text style={styles.titulo_botao}>Gaze estéril</Text>
            <CheckBox
              checked={items.gaze}
              onPress={() => mudaLista("gaze")}
              checkedColor= '#12B9ED'
              uncheckedColor="gray"
              size={30}
              containerStyle={{ padding: 0, margin: 0, backgroundColor: 'transparent' }}
            />
          </View>
        </TouchableOpacity>
    
        {/*Solução*/}
        <TouchableOpacity style={styles.botao} onPress={() => mudaLista("solucao")}>
            <View style={styles.conteudo_botao}>
                <Text style={styles.titulo_botao}>Solução salina estéril</Text>
                <CheckBox
                    checked={items.solucao}
                    onPress={() => mudaLista("solucao")}
                    checkedColor= '#12B9ED'
                    uncheckedColor="gray"
                    size={30}
                    containerStyle={{ padding: 0, margin: 0, backgroundColor: 'transparent' }}
                />
            </View>
        </TouchableOpacity>

        {/*Luvas*/}
        <TouchableOpacity style={styles.botao} onPress={() => mudaLista("luva")}>
          <View style={styles.conteudo_botao}>
            <Text style={styles.titulo_botao}>Luvas estéreis</Text>
            <CheckBox
              checked={items.luva}
              onPress={() => mudaLista("luva")}
              checkedColor= '#12B9ED'
              uncheckedColor="gray"
              size={30}
              containerStyle={{ padding: 0, margin: 0, backgroundColor: 'transparent' }}
            />
          </View>
        </TouchableOpacity>

        <Text style={styles.titulo}>Materiais Adicionais</Text>

        {/*Aspirador*/}
        <TouchableOpacity style={styles.botao} onPress={() => mudaLista("aspirador")}>
          <View style={styles.conteudo_botao}>
            <Text style={styles.titulo_botao}>Aspirador de secreções</Text>
            <CheckBox
              checked={items.aspirador}
              onPress={() => mudaLista("aspirador")}
              checkedColor= '#12B9ED'
              uncheckedColor="gray"
              size={30}
              containerStyle={{ padding: 0, margin: 0, backgroundColor: 'transparent' }}
            />
          </View>
        </TouchableOpacity>

        {/*Sonda*/}
        <TouchableOpacity style={styles.botao} onPress={() => mudaLista("sonda")}>
          <View style={styles.conteudo_botao}>
            <Text style={styles.titulo_botao}>Sondas de aspiração (tamanhos variados)</Text>
            <CheckBox
              checked={items.sonda}
              onPress={() => mudaLista("sonda")}
              checkedColor= '#12B9ED'
              uncheckedColor="gray"
              size={30}
              containerStyle={{ padding: 0, margin: 0, backgroundColor: 'transparent' }}
            />
          </View>
        </TouchableOpacity>

        {/*Mascara*/}
        <TouchableOpacity style={styles.botao} onPress={() => mudaLista("mascara")}>
          <View style={styles.conteudo_botao}>
            <Text style={styles.titulo_botao}>Máscara de proteção facial</Text>
            <CheckBox
              checked={items.mascara}
              onPress={() => mudaLista("mascara")}
              checkedColor= '#12B9ED'
              uncheckedColor="gray"
              size={30}
              containerStyle={{ padding: 0, margin: 0, backgroundColor: 'transparent' }}
            />
          </View>
        </TouchableOpacity>

        {/*Óculos*/}
        <TouchableOpacity style={styles.botao} onPress={() => mudaLista("oculos")}>
          <View style={styles.conteudo_botao}>
            <Text style={styles.titulo_botao}>Óculos de proteção</Text>
            <CheckBox
              checked={items.oculos}
              onPress={() => mudaLista("oculos")}
              checkedColor= '#12B9ED'
              uncheckedColor="gray"
              size={30}
              containerStyle={{ padding: 0, margin: 0, backgroundColor: 'transparent' }}
            />
          </View>
        </TouchableOpacity>
            
      </View>
    </ScrollView>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fafafaff',
        padding: 10,
        height: "100%"
    },
    titulo:{
        fontWeight: 'bold',
        fontSize: 21,
        marginBottom: 20,
        marginTop: 3,
    },
    botao:{
        paddingHorizontal: 12,
        paddingVertical: 16,
        backgroundColor: 'white',
        borderColor: "#f1f1f1ff",
        borderWidth: 0.7,
        borderRadius: 8,
        marginBottom: 10,
    },
    titulo_botao:{
        fontSize: Platform.OS === "ios" ? 17 : 15,
        flexShrink: 1
    },
    conteudo_botao:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    botao_salvar:{
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
    msg:{
        backgroundColor: '#D0F0FB',
        color: '#12B9ED',
        fontWeight: '600',
        marginBottom: 13,
        padding: 22,
        fontSize: 17,
        textAlign: 'center',
        width: width,
        zIndex: 999,
        borderRadius: 4,
        position: 'absolute'
    },
})