import { useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, TextInput, Dimensions, Keyboard, TouchableWithoutFeedback, Platform, Modal } from 'react-native';
import { dateParaData, dataParaDate } from '@/scripts/datas';
import { getCanula, setCanula } from '@/database/canula';
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from '@react-native-picker/picker';

export default function Canula() {

  const [tipo, setTipo] = useState("");                   // Define os tipos
  const [balao, setBalao] = useState("0");                // "1" = com balão, "2" = sem balão
  const [material, setMaterial] = useState("0");          // "1" = metálica, "2" = plástica/silicone
  const [tamanho, setTamanho] = useState("");             // Mostra o tamanho na UI
  const [marca, setMarca] = useState("");                 // Mostra a Marca na UI
  const [data, setData] = useState<Date | null>(null);    // Mostra a data na UI

  const [showData, setShowData] = useState(false);       // Abre/Fecha escolhedor de DateTimePicker
  const [msg, setMsg] = useState("");                    // Mostra mensagem de salvamento 

  const [modalBalao, setModalBalao] = useState(false);    // Picker do balão
  const [modalMaterial, setModalMaterial] = useState(false);   // Picker do material
  const [modalMarca, setModalMarca] = useState(false); // Picker da Marca

  // Define os radioButtons de balão
  const baloes = [
      { id: "1", label: "Com balão" },
      { id: "2", label: "Sem balão" },
  ];

  // Define os radioButtons de Material
  const materiais = [
      { id: "1", label: "Metálica" },
      { id: "2", label: "Plástica/Silicone" },
  ];

  // Carregar do banco sempre que a tela ganhar foco
  useFocusEffect(
      useCallback(() => {
          carregarCanula();
      }, [])
  );

  // Carrega os valores do banco nos useStates
  const carregarCanula = async () => {
      const rows = await getCanula();
      if (Array.isArray(rows) && rows.length > 0) {
      const row = rows[0];
      setTipo(row?.tipo != null ? String(row.tipo) : "");
      setBalao(row?.balao != null ? String(row.balao) : "0");
      setMaterial(row?.material != null ? String(row.material) : "0");
      setTamanho(row?.tamanho != null ? String(row.tamanho) : "");
      setMarca(row?.marca != null ? String(row.marca) : "");
      setData(row?.data ? dataParaDate(row.data) : null);
      }
  };

  // Lida com mudanças no tamanho (permite apenas n ou n.n ou 10.0 ou "")
  const mudanca = (num: string) => {
      num = num.replace(',', '.');

      if (num === '') {
          setTamanho('');
          return;
      }

      if (num === '.') return;

      const partes = num.split('.');
      if (partes.length > 2) {
          num = partes[0] + '.' + partes[1];
      }

      // Caso especial: "100" → "10.0"
      if (num === "1.00") {
          setTamanho("10.0");
          return;
      }

      if (!num.includes('.') && num.length === 1) {
      } 
      else if (!num.includes('.') && num.length === 2) {
          num = `${num[0]}.${num[1]}`;
      }

      const regex = /^\d{0,2}(\.\d{0,1})?$/;
      if (!regex.test(num)) return;

      const valor = parseFloat(num);
      if (!isNaN(valor) && valor > 10) return;
      setTamanho(num);
  };

  // Lida com mudança na data 
  const onChange = (event: any, dataSelecionada: any) => {
      const dataAtual = dataSelecionada || data;
      setShowData(false);
      setData(dataAtual);
  };

  // Salva novos atributos da cânula
  const mudarCanula = async () => {
      await setCanula("tamanho", tamanho);
      await setCanula("marca", marca);
      await setCanula("data", dateParaData(data));
      await setCanula("tipo", tipo);
      await setCanula("material", material);
      await setCanula("balao", balao);
      await carregarCanula();
      setMsg("Informações salvas com sucesso!");
      setTimeout(() => setMsg(""), 1500); // desaparece após 1.5s
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={styles.container}>

      {msg ? <Text style={styles.msg}>{msg}</Text> : null}
      
      {/*Tipo*/}
      <Text style={[styles.texto, {marginTop: 20}]}>Tipo de Cânula</Text>
      <TextInput
        style={styles.input_txt}
        value={tipo}
        onChangeText={setTipo}
      />

      {/*Balão*/}
      <Text style={styles.texto}>Tem Balão?</Text>
      {Platform.OS==='android' ? 
        <View style={styles.input_txt}>
          <Picker
          selectedValue={balao}
          onValueChange={(itemValue) => setBalao(itemValue)}
          >
            <Picker.Item label="Sim" value="1" />
            <Picker.Item label="Não" value="2" />
          </Picker>
        </View>
        :
        <TouchableOpacity style={styles.input_txt} onPress={() => setModalBalao(true)}>
          <Text style={styles.txt}>{balao === '1' ? 'Sim' : balao === '2' ? 'Não' : ''}</Text>
        </TouchableOpacity>
      }

      <Modal animationType="slide" transparent visible={modalBalao}>
        <View style={styles.centralizar_modal}>
        <View  style={styles.modal}>
        <Picker
          selectedValue={balao}
          onValueChange={(itemValue) => {setBalao(itemValue), setModalBalao(false)}}
          >
            <Picker.Item label="Sim" value="1" />
            <Picker.Item label="Não" value="2" />
        </Picker>
        </View>
        </View>
      </Modal>

      {/*Tamanho*/}
      <Text style={styles.texto}>Tamanho da Cânula</Text>
      <TextInput
        style={styles.input_txt}
        value={tamanho}
        onChangeText={mudanca}
        keyboardType="numeric"
        maxLength={5}
      />
      
      {/*Material*/}
      <Text style={styles.texto}>Material</Text>
      {Platform.OS==='android' ? 
        <View style={styles.input_txt}>
          <Picker
          selectedValue={material}
          onValueChange={(itemValue) => setMaterial(itemValue)}>
            <Picker.Item label="Metálica" value="1" />
            <Picker.Item label="Plástica/Silicone" value="2" />
          </Picker>
        </View>
        :
        <TouchableOpacity style={styles.input_txt} onPress={() => setModalMaterial(true)}>
          <Text style={styles.txt}>{material === '1' ? 'Metálica' : material === '2' ? "Plástica/Silicone" : ''}</Text>
        </TouchableOpacity>
      }

      <Modal animationType="slide" transparent visible={modalMaterial}>
        <View style={styles.centralizar_modal}>
        <View  style={styles.modal}>
        <Picker
          selectedValue={material}
          onValueChange={(itemValue) => {setMaterial(itemValue), setModalMaterial(false)}}
          >
            <Picker.Item label="Metálica" value="1" />
            <Picker.Item label="Plástica/Silicone" value="2" />
        </Picker>
        </View>
        </View>
      </Modal>

      {/*Marca*/}
      <Text style={styles.texto}>Marca</Text>
      {Platform.OS==='android' ? 
        <View style={styles.input_txt}>
          <Picker
          selectedValue={marca}
          onValueChange={(itemValue) => setMarca(itemValue)}>
            <Picker.Item label="BCI" value="BCI" />
            <Picker.Item label="Shiley" value="Shiley" />
            <Picker.Item label="Safer" value="Safer" />
            <Picker.Item label="Portex" value="Portex" />
            <Picker.Item label="Outro" value="Outro" />
          </Picker>
        </View>
        :
        <TouchableOpacity style={styles.input_txt} onPress={() => setModalMarca(true)}>
          <Text style={styles.txt}>{marca}</Text>
        </TouchableOpacity>
      }
      <Modal animationType="slide" transparent visible={modalMarca}>
        <View style={styles.centralizar_modal}>
        <View  style={styles.modal}>
        <Picker
          selectedValue={marca}
          onValueChange={(itemValue) => {setMarca(itemValue), setModalMarca(false)}}
          >
            <Picker.Item label="BCI" value="BCI" />
            <Picker.Item label="Shiley" value="Shiley" />
            <Picker.Item label="Safer" value="Safer" />
            <Picker.Item label="Portex" value="Portex" />
            <Picker.Item label="Outro" value="Outro" />
        </Picker>
        </View>
        </View>
      </Modal>

      {/*Data*/}
      <Text style={styles.texto}>Data da última Troca</Text>
      <TouchableOpacity style={styles.input_txt} onPress={() => {setShowData(true), Keyboard.dismiss()}}>
        <Text style={styles.txt_data}>
          {data ? data.toLocaleDateString("pt-BR") : ""}
        </Text>
      </TouchableOpacity>
      {showData && Platform.OS === 'android' && (
        <DateTimePicker
          value={data || new Date()}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
      <Modal animationType="slide" transparent visible={showData && Platform.OS === 'ios'}>
        <View style={styles.centralizar_modal}>
        <View  style={[styles.modal, {width: '90%'}]}>
          <DateTimePicker
            value={data || new Date()}
            mode="date"
            display="inline"
            onChange={onChange}
          />
        </View>
        </View>
      </Modal>

      {/*Botão de salvar*/}
      <TouchableOpacity style={styles.botao} onPress={mudarCanula}>
        <Text style={styles.txt_botao}>Salvar</Text>
      </TouchableOpacity>

  </View>
  </TouchableWithoutFeedback>
);

}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    height: "100%"
  },
  texto:{
    color: '#555',
    fontSize: 18,
    fontWeight: 'bold'
  },
  input_txt:{
    width: '99%',
    borderColor: '#D0F0FB',
    borderWidth: 1.5,
    borderRadius: 7,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 20,
    paddingHorizontal: 5,
    height: 45,
    justifyContent: 'center',
    fontSize: Platform.OS === "ios" ? 17 : 15,
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
  txt_data:{
    paddingLeft: 5,
    fontSize: Platform.OS === "ios" ? 17 : 15,
  },
  msg:{
    backgroundColor: '#D0F0FB',
    color: '#12B9ED',
    fontWeight: '600',
    marginBottom: 13,
    padding: 22,
    fontSize: Platform.OS === "ios" ? 19 : 17,
    textAlign: 'center',
    width: width,
      zIndex: 999,
    borderRadius: 4,
    position: 'absolute'
  },
  modal:{
    backgroundColor: 'white',
    width: '80%',
    borderRadius: 12,
    padding: 15,
  },
  centralizar_modal:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)'
  },
  txt:{
    fontSize: Platform.OS === "ios" ? 17 : 15,
  }
})