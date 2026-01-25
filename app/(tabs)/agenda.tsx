import { ScrollView, Text, TouchableOpacity, View, StyleSheet, Modal, TextInput , KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles as styles2 } from '@/estilos/botoes';
import { useFocusEffect } from "expo-router";
import { dateParaData, dataParaDate, horaParaDate, dateParaHora } from '@/scripts/datas';
import { novoRegistro, setAgenda, getAgenda, deletarRegistroDB} from "@/database/agenda";
import { useCallback, useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { agendarNotificacao, cancelarNotificacao } from '@/scripts/notificacoes';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Entypo from '@expo/vector-icons/Entypo';
import DateTimePicker from "@react-native-community/datetimepicker";

export default function Agenda() {

  const [modalNovo, setModalNovo] = useState(false);          // Abre/Fecha modal de novos registros
  const [modalEditar, setModalEditar] = useState(false);      // Abre/Fecha modal de editar/excluir
  const [modalConfirmar, setModalConfirmar] = useState(false) // Abre/Fecha modal de confirmar exclusão

  const [atividade, setAtividade] = useState("");         // Mostra a atividade na UI
  const [obs, setObs] = useState("");                     // Mostra o obs na UI
  const [data, setData] = useState<Date | null>(null);    // Mostra a data na UI
  const [hora, setHora] = useState<Date | null>(null);    // Mostra o horário na UI
  const [notificacaoID, setNotificacaoID] = useState("")  // ID da notificacao

  const [showData, setShowData] = useState(false);        // Abre/Fecha escolhedor de data
  const [showTime, setShowTime] = useState(false);        // Abre/Fecha escolhedor de hora

  const [registros, setRegistros] = useState<any[]>([]);  // Armazena todos os registros
  const [id, setId] = useState(0);                        // Armazena o id clicado

  const [msg, setMsg] = useState("");                    // Mostra mensagem de aviso

  // Dia de hoje
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);

  // Lida com mudança na data 
  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || data;
    setShowData(false);
    setData(currentDate);
  };

  // Zera os campos do modal
  const zerarUseStates = () => {
    setAtividade("");
    setObs("");
    setId(0);
    setData(null);
    setHora(null);
    setNotificacaoID("");
  }

  // Salva novo registro no DB
  const salvarRegistro = async () => {

    // não salva se todos forem vazios
    if (atividade.trim() === "" && obs.trim() === "" && data === null && hora === null){
      setModalNovo(false);
      return;
    }

    // Indica os campos obrigatórios
    if (atividade.trim() === "" || data === null || hora === null){
      setMsg("Atividade, data e hora são campos obrigatórios!");           
      setTimeout(() => setMsg(""), 2000); // desaparece após 2s
      return;
    }

    // Junta DATA + HORA
    const dataHora = new Date(data);
    dataHora.setHours(
      hora.getHours(),
      hora.getMinutes(),
      0,
      0
    );
 
    // Cria notificacao
    const notificacao = await agendarNotificacao(
      "Você tem uma atividade marcada em sua agenda: " + atividade.trim(), 
      dateParaData(data) + " - " + dateParaHora(hora), 
      dataHora
    );

    await novoRegistro(dateParaData(data), dateParaHora(hora), atividade.trim(), obs.trim(), notificacao);   
    setModalNovo(false);
    zerarUseStates();  
    carregarAgenda();
  }

  // Muda o registro no DB
  const mudarRegistro = async () => {

    // não salva se todos forem vazios
    if (atividade.trim() === "" && obs.trim() === "" && data === null && hora === null){
      setModalEditar(false);
      return;
    }

    // Indica os campos obrigatórios
    if (atividade.trim() === "" || data === null || hora === null){
      setMsg("Atividade, data e hora são campos obrigatórios!");           
      setTimeout(() => setMsg(""), 2000); // desaparece após 2s
      return;
    }

    // Junta DATA + HORA
    const dataHora = new Date(data);
    dataHora.setHours(
      hora.getHours(),
      hora.getMinutes(),
      0,
      0
    );

    // Cancela notificação antiga
    await cancelarNotificacao(notificacaoID);

    // Cria nova notificacao
    const notificacao = await agendarNotificacao(
      "Você tem uma atividade marcada em sua agenda: " + atividade.trim(), 
      dateParaData(data) + " - " + dateParaHora(hora), 
      dataHora
    );
  
    await setAgenda("atividade", atividade, id);
    await setAgenda("data", dateParaData(data), id);
    await setAgenda("hora", dateParaHora(hora), id);
    await setAgenda("obs", obs, id);
    await setAgenda("notificacao", notificacao, id);

    setModalEditar(false);
    zerarUseStates(); 
    carregarAgenda();
  }

  // Preenche os campos de input com base no registro clicado
  const editarRegistro = (registro: any) => {
    setId(registro.id);
    setAtividade(registro.atividade);
    setObs(registro.obs);
    setData(dataParaDate(registro.data));  // Tranforma a data String em Date
    setHora(horaParaDate(registro.hora));  // Tranforma a hora String em Date
    setNotificacaoID(registro.notificacao);
  };

  // Deleta o registro
  const deletarRegistro = async () => {
    await cancelarNotificacao(notificacaoID);
    await deletarRegistroDB(id);

    zerarUseStates(); 
    carregarAgenda();

    setModalEditar(false);
    setModalConfirmar(false);
  }

  // Pega os registros de hoje
  const registrosHoje = registros.filter(item => {
    const dataItem = dataParaDate(item.data);
    return (
      dataItem && dataItem.getDate() === hoje.getDate()
    );
  });

  // Pega os registros do futuro
  const registrosFuturo = registros.filter(item => {
    const dataItem = dataParaDate(item.data);
    return (
      dataItem && dataItem > hoje
    );
  });

  // Pega os registros do passado
  const registrosPassado = registros.filter(item => {
    const dataItem = dataParaDate(item.data);
    return (
      dataItem && dataItem < hoje
    );
  });

  // Carregar do banco sempre que a tela ganhar foco
  useFocusEffect(
      useCallback(() => {
          carregarAgenda();
      }, [])
  );

  // Carrega os valores do banco nos useStates
  const carregarAgenda = async () => {
    const rows = await getAgenda();
    if (Array.isArray(rows)) {
      setRegistros(rows);
    }
  };

  return (
    <SafeAreaView
    style={{flex: 1, backgroundColor: 'white'}}
    edges={[ 'right', 'bottom', 'left']}>

      <ScrollView style={{ paddingHorizontal: 10 }}
      contentContainerStyle={{ paddingBottom: 120 }}>

        {/*Registros de hoje*/}
        <Text style={[styles2.titulo, {fontSize: 24, marginTop: 13}]}>Hoje</Text>

        {registrosHoje.length === 0 ? 

          <Text style={styles.subtitulo_vazio}> Não existem registros para hoje.</Text>
          :
          registrosHoje.map((item) => (
          <View key={item.id} style={[styles2.botao, {alignItems: 'flex-start', paddingVertical: 10, height: 'auto'}]}>
            <FontAwesome5 name="bell" size={31} style={styles2.img_redondo}/>
            <View style={styles2.container_botao}>
              <Text style={styles2.titulo_botao}>{item.atividade}</Text>
              <Text style={[styles2.txt_botao, {fontSize: 15}]}>{item.hora}</Text>
              {item.obs === "" ? <></> : 
                <Text style={styles2.txt_botao}><Text style={styles.negrito}>Observação:</Text> {item.obs}</Text>
              }   
            </View>
            {/*Botão de editar e excluir*/}
            <TouchableOpacity onPress={() => {setModalEditar(true); editarRegistro(item)}} style={{alignSelf: 'center'}}>
              <Entypo name="dots-three-vertical" size={27} style={styles2.seta} />
            </TouchableOpacity>
          </View>
          ))}


        {/*Registros de próximos*/}
        <Text style={[styles2.titulo, {fontSize: 24, marginVertical: 15}]}>Próximos</Text>

        {registrosFuturo.length === 0 ? 

          <Text style={styles.subtitulo_vazio}> Não existem registros futuros.</Text>
          :
          registrosFuturo.map((item) => (
          <View key={item.id} style={[styles2.botao, {alignItems: 'flex-start', paddingVertical: 10, height: 'auto'}]}>
            <FontAwesome5 name="bell" size={31} style={styles2.img_redondo}/>
            <View style={styles2.container_botao}>
              <Text style={styles2.titulo_botao}>{item.atividade}</Text>
              <Text style={styles2.txt_botao}>{item.data} - {item.hora}</Text>
              {item.obs === "" ? <></> : 
                <Text style={styles2.txt_botao}><Text style={styles.negrito}>Observação:</Text> {item.obs}</Text>
              }   
            </View>
            {/*Botão de editar e excluir*/}
            <TouchableOpacity onPress={() => {setModalEditar(true); editarRegistro(item)}} style={{alignSelf: 'center'}}>
              <Entypo name="dots-three-vertical" size={27} style={styles2.seta} />
            </TouchableOpacity>
          </View>
        ))}

        {/*Registros passados*/}
        <Text style={[styles2.titulo, {fontSize: 24, marginVertical: 15}]}>Passados</Text>
        {registrosPassado.length === 0 ?

          <Text style={styles.subtitulo_vazio}> Não existem registros passados.</Text>
          :
          registrosPassado.reverse().map((item) => (

          <View key={item.id} style={[styles2.botao, {alignItems: 'flex-start', paddingVertical: 10, height: 'auto'}]}>
            <FontAwesome5 name="bell" size={31} style={styles2.img_redondo}/>
            <View style={styles2.container_botao}>
              <Text style={[styles2.titulo_botao, {textDecorationLine: 'line-through'}]}>{item.atividade}</Text>
              <Text style={styles2.txt_botao}>{item.data} - {item.hora}</Text>
              {item.obs === "" ? <></> :
                <Text style={styles2.txt_botao}><Text style={styles.negrito}>Observação:</Text> {item.obs}</Text>
              }
            </View>
            {/*Botão de editar e excluir*/}
            <TouchableOpacity onPress={() => {setModalEditar(true); editarRegistro(item)}} style={{alignSelf: 'center'}}>
              <Entypo name="dots-three-vertical" size={27} style={styles2.seta} />
            </TouchableOpacity>
          </View>
        ))}

      </ScrollView>

      {/*Pop up de novo registro*/}
      <Modal animationType="fade" transparent visible={modalNovo}
        onRequestClose={() => {setModalNovo(false), zerarUseStates()}}>

        {msg ? <Text style={styles2.msg}>{msg}</Text> : null}

        <BlurView intensity={40} tint="dark" style={styles.embacado}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.fundopopup}>

            <Text style={styles.titulo}>Preencha os dados</Text>

            {/*Atividade*/}
            <TextInput
              style={styles.input_txt_p}
              placeholderTextColor="gray"
              placeholder="Tipo de atividade"
              value={atividade || undefined}
              onChangeText={setAtividade}
            />

            {/*Data e Hora*/}
            <View style={styles.dataehora}>
              <TouchableOpacity onPress={() => {setShowData(true), Keyboard.dismiss()}} style={styles.botao_dataehora}>
                <Text style={[styles.txt_data, { color: data ? '#000' : 'gray' }]}>
                  {data ? data.toLocaleDateString("pt-BR") : "Selecione a data"}
                </Text>
              </TouchableOpacity>
                {showData && (
                  <DateTimePicker
                    value={data || new Date()}
                    mode="date"
                    display="default"
                    onChange={onChange}
                  />
                )}
              <TouchableOpacity onPress={() => {setShowTime(true), Keyboard.dismiss()}} style={styles.botao_dataehora}>
                <Text style={[styles.txt_data, { color: hora ? '#000' : 'gray' }]}>
                  {hora ? hora.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }) : "Selecione o horário"}
                </Text>
              </TouchableOpacity>
                {showTime && (
                  <DateTimePicker
                    value={hora || new Date()}
                    mode="time"
                    display="spinner"
                    onChange={(event, selectedTime) => {
                      setShowTime(false);
                      if (selectedTime) setHora(selectedTime);
                    }}
                  />
                )}
            </View>

            {/*Observação*/}
            <TextInput
              style={styles.input_txt_p}
              placeholder="Observação"
              placeholderTextColor="gray"
              multiline={true} 
              numberOfLines={5}
              textAlignVertical="top" 
              value={obs}
              onChangeText={setObs}
            />

            {/*Botão de salvar*/}
            <TouchableOpacity style={styles.botaopop} onPress={salvarRegistro}>
              <Text style={styles.txt_botao}>Salvar</Text>
            </TouchableOpacity>

          </View> 
          </TouchableWithoutFeedback>
        </BlurView>
      </Modal>

      {/*Pop up de editar/excluir registro*/}
      <Modal animationType="fade" transparent visible={modalEditar}
        onRequestClose={() => {setModalEditar(false), zerarUseStates()}}>
        
        {msg ? <Text style={styles2.msg}>{msg}</Text> : null}

        <BlurView intensity={40} tint="dark" style={styles.embacado}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.fundopopup}>

            <Text style={styles.titulo}>Edite os dados</Text>

            {/*Atividade*/}
            <TextInput
              style={styles.input_txt_p}
              placeholder="Tipo de atividade"
              value={atividade}
              placeholderTextColor="gray"
              onChangeText={setAtividade}
            />

            {/*Data e Hora*/}
            <View style={styles.dataehora}>
              <TouchableOpacity onPress={() => {setShowData(true), Keyboard.dismiss()}} style={styles.botao_dataehora}>
                <Text style={[styles.txt_data, { color: data ? '#000' : 'gray' }]}>
                  {data ? data.toLocaleDateString("pt-BR") : "Selecione a data"}
                </Text>
              </TouchableOpacity>
                {showData && (
                  <DateTimePicker
                    value={data || new Date()}
                    mode="date"
                    display="default"
                    onChange={onChange}
                  />
                )}
              <TouchableOpacity onPress={() => {setShowTime(true), Keyboard.dismiss()}} style={styles.botao_dataehora}>
                <Text style={[styles.txt_data, { color: hora ? '#000' : 'gray' }]}>
                  {hora ? hora.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }) : "Selecione o horário"}
                </Text>
              </TouchableOpacity>
              {showTime && (
                <DateTimePicker
                  value={hora || new Date()}
                  mode="time"
                  display="spinner"
                  onChange={(event, selectedTime) => {
                    setShowTime(false);
                    if (selectedTime) setHora(selectedTime);
                  }}
                />
              )}
            </View>

            {/*Observação*/}
            <TextInput
              style={styles.input_txt_p}
              placeholder="Observação"
              placeholderTextColor="gray"
              multiline={true} 
              numberOfLines={5}
              textAlignVertical="top" 
              value={obs}
              onChangeText={setObs}
            />

            {/*Botão de salvar/excluir*/}
            <View style={styles.dataehora}>
              <TouchableOpacity style={styles.botao_editar} onPress={mudarRegistro}>
                <Text style={styles.txt_botao}>Salvar</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.botao_editar, {backgroundColor:"#d63d3dff"}]} 
                onPress={()=>setModalConfirmar(true)}>
                <Text style={styles.txt_botao}>Deletar</Text>
              </TouchableOpacity>
            </View>
          </View> 
        </TouchableWithoutFeedback>
        </BlurView>
      </Modal>

      {/*Pop up de confirmação de exclusão de registro*/}
      <Modal animationType="fade" transparent visible={modalConfirmar}
        onRequestClose={() => {setModalConfirmar(false)}}>
        <BlurView  intensity={40} tint="dark" style={styles.embacado}>
            <View style={styles.fundo_popup_confirmar}>
              <Text style={styles.titulo}>Tem certeza que deseja excluir esse registro?</Text>
              <Text style={styles.subtitulo}>Não será possível reverter essa ação.</Text>

              <View style={styles.dataehora}>
                <TouchableOpacity style={styles.botao_editar} onPress={deletarRegistro}>
                  <Text style={styles.txt_botao}>Excluir registro</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.botao_editar, {backgroundColor:"#d63d3dff"}]} onPress={() => setModalConfirmar(false)}>
                  <Text style={styles.txt_botao}>Cancelar</Text>
                </TouchableOpacity>
              </View>
            </View>
        </BlurView>
      </Modal>
        
      {/*Botão de "+"*/}
      <TouchableOpacity style={styles.botao_mais} onPress={() => setModalNovo(true)}>
        <MaterialIcons name="add" size={40} color="white"/>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titulo: { 
    fontWeight: 'bold',
    marginTop: -10,
    marginBottom: 20,
    fontSize: 23,
    textAlign: 'center'
  },

  subtitulo:{ 
    marginTop: -10,
    marginBottom: 20,
    fontSize: 15,
    textAlign: 'center'
  },

  botao_mais:{
    backgroundColor: '#12B9ED',
    position: 'absolute',
    bottom: 45,
    right: 30,
    alignItems: 'center',
    justifyContent: "center",
    borderRadius: 40,
    width: 67,
    height: 67,
  },
  txt_botao:{ // Texto dos botões de salvar/deletar
    color: "white",
    fontWeight: "bold",
  },

  embacado:{  // Fundo embaçado do modal
    height: '100%'
  },

  fundopopup:{  // Fundo do modal
    backgroundColor: 'white',
    margin:'auto',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    alignSelf: 'center',
    gap: 30
  },

  fundo_popup_confirmar:{ // Fundo do modal de confirmar exclusão
    backgroundColor: 'white',
    margin:'auto',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50%',
    alignSelf: 'center',
    borderRadius: 15,
    gap: 20
  },

  botaopop:{  // Botão de salvar da parte de novo registro
    backgroundColor: '#12B9ED',
    alignItems: 'center',
    alignSelf:'center',
    justifyContent: "center",
    margin: 20,
    width: '75%',
    height: 55,
    padding: 10,
    borderRadius: 10,
  },

  botao_editar:{  // Botões de salvar/deletar da parte de editar registros
    width: "49%",
    backgroundColor: '#12B9ED',
    alignItems: 'center',
    paddingVertical: 20,
    borderRadius: 10
  },

  input_txt_p:{ // Texto dos inputs
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    width: "80%"
  },

  dataehora:{ // Div de data e hora
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%", 
  },

  txt_data:{  // Texto dos inputs de data e hora
    color: 'gray',
    textAlign: 'center'
  },

  botao_dataehora:{ // "Input" de data e hora
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    width: "49%",
    paddingVertical: 10,
  },

  item_registro:{ // Texto dos registros que aparecem na tela (Normal)
    color: 'white',
    fontSize: 15,
    fontWeight: "semibold",
    textAlign: "justify"
  },

  negrito:{
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: 'white',
    borderColor: "#f1f1f1ff",
    borderWidth: 0.7,
    borderRadius: 8,
    height: 115,
    marginBottom: 10,
    fontWeight: 'bold'
  },

  subtitulo_vazio:{
    fontSize: 17
  }
});
