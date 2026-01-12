import { styles } from '@/estilos/botoes';
import { Feather, MaterialIcons, FontAwesome6 } from '@expo/vector-icons';
import { Text, TouchableOpacity, View, ScrollView, Modal, StyleSheet, TextInput,  KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ligar } from '@/scripts/ligar';
import { BlurView } from 'expo-blur';
import { iniciar, setNumero, getNumero } from '@/database/numeros';
import React, { useCallback, useEffect, useState } from 'react';
import { router, useFocusEffect } from 'expo-router';

export default function Emergencia() {

  const [doutor, setDoutor] = useState("");
  const [numDoutor, setNumDoutor] = useState("");
  const [emergencia, setEmergencia] = useState("");
  const [numEmergencia, setNumEmergencia] = useState("");

  const [modal, setModal] = useState(false);

  // Garantir tabela e registro único (id=1)
  useEffect(() => {
    (async () => {
      await iniciar();
    })();
  }, []);

  // Carregar do banco sempre que a tela ganhar foco
  useFocusEffect(
      useCallback(() => {
          carregarNumeros();
      }, [])
  );

  // Carrega os valores do banco nos useStates
  const carregarNumeros = async () => {
    const rows = await getNumero();
    if (Array.isArray(rows) && rows.length > 0) {
    const row = rows[0];
    setDoutor(row?.doutor != null ? String(row.doutor) : "");
    setNumDoutor(row?.num_doutor != null ? String(row.num_doutor) : "");
    setEmergencia(row?.emergencia != null ? String(row.emergencia) : "");
    setNumEmergencia(row?.num_emergencia != null ? String(row.num_emergencia) : "");
    }
  };

  // Salva useStatates no DB
  const salvar = async () => {
    await setNumero(doutor.trim(), numDoutor, emergencia.trim(), numEmergencia);
    setModal(false);
    await carregarNumeros();
  };

  // Liga para o medico
  const ligarMedico = () => {
    if (numDoutor != ""){
      ligar(numDoutor);
    }
  };

  // Liga para a emergência
  const ligarEmergencia = () => {
    if (numEmergencia != ""){
      ligar(numEmergencia);
    }
  };

  // Volta usestates antigos 
  const voltar = () => {
    setModal(false);
    carregarNumeros();  
  };

  // Lida com mudanças no numero de emergencia
  const mudancaEmergencia = (num: string) => {
    num = num.replace(/[^0-9]/g, "")
    setNumEmergencia(num.trim());
  };

  // Lida com mudanças no numero do medico
  const mudancaDoutor = (num: string) => {
    num = num.replace(/[^0-9]/g, "")
    setNumDoutor(num.trim());
  };

  return (
    <ScrollView>
        <SafeAreaView
          style={styles.container}
          edges={['top', 'right', 'bottom', 'left']}>

          <Text style={styles.titulo}>Procedimentos de Emergência</Text>

          {/*A cânula saiu*/}
          <TouchableOpacity style={styles.botao} onPress={() => router.push('/telas_emergencia/grupo3')}>
            <MaterialIcons  name="warning-amber" size={33} style={styles.img}/>
            <View style={styles.container_botao}>
              <Text style={styles.titulo_botao}>A cânula saiu</Text>
              <Text style={styles.txt_botao}>Passos para lidar com a saída da cânula.</Text>
            </View>
          </TouchableOpacity>

          {/*Dificuldade para Respirar*/}
          <TouchableOpacity style={styles.botao}  onPress={() => router.push('/telas_emergencia/grupo2')}>
            <MaterialIcons  name="warning-amber" size={33} style={styles.img}/>
            <View style={styles.container_botao}>
              <Text style={styles.titulo_botao}>Dificuldade para Respirar</Text>
              <Text style={styles.txt_botao}>O que fazer em caso de dificuldade respiratória.</Text>
            </View>
          </TouchableOpacity>

          {/*Não Consigo Aspirar*/}
          <TouchableOpacity style={styles.botao} onPress={() => router.push('/telas_emergencia/grupo1')}>
            <MaterialIcons name="warning-amber" size={33} style={styles.img}/>
            <View style={styles.container_botao}>
              <Text style={styles.titulo_botao}>Não Consigo Aspirar</Text>
              <Text style={styles.txt_botao}>Instruções para quando a aspiração não for possível.</Text>
            </View>
          </TouchableOpacity>

          <Text style={styles.titulo}>Contatos de Emergência</Text>

          {/*SAMU*/}
          <TouchableOpacity style={styles.botao} onPress={() => ligar(192)}>
            <Feather name="phone" size={33} style={styles.img}/>
            <View style={styles.container_botao}>
              <Text style={styles.titulo_botao}>SAMU</Text>
              <Text style={styles.txt_botao}>Serviço de Atendimento Móvel de Urgência.</Text>
            </View>
          </TouchableOpacity>

          {/*Médico do seu Filho*/}
          <TouchableOpacity style={styles.botao} onPress={ligarMedico}>
            <FontAwesome6 name="user-doctor" size={33} style={styles.img}/>
            <View style={styles.container_botao}>
            <Text style={styles.titulo_botao}>{doutor === "" ? "Médico do seu Filho" : doutor}</Text>
              <Text style={styles.txt_botao}>{numDoutor === "" ? "Adicione o telefone." : numDoutor}</Text>
            </View>
          </TouchableOpacity>
        
          {/*Serviço de Emergência*/}
          <TouchableOpacity style={styles.botao} onPress={ligarEmergencia}>
            <MaterialIcons name="emergency" size={33} style={styles.img}/>
            <View style={styles.container_botao}>
              <Text style={styles.titulo_botao}>{emergencia === "" ? "Serviço de Emergência" : emergencia}</Text>
              <Text style={styles.txt_botao}>{numEmergencia === "" ? "Adicione o telefone." : numEmergencia}</Text>
            </View>
          </TouchableOpacity>

          {/*Adicionar e Editar Contatos*/}
          <TouchableOpacity style={styles.botao} onPress={() => setModal(true)}>
            <Feather name="plus" size={33} style={styles.img}/>
            <View style={styles.container_botao}>
              <Text style={styles.titulo_botao}>Adicionar e Editar Contatos</Text>
              <Text style={styles.txt_botao}>Informe os contatos de emergência de seu filho.</Text>
            </View>
          </TouchableOpacity>

          {/*Modal de informações*/}
          <Modal 
            animationType='fade' 
            transparent 
            visible={modal} 
            onRequestClose={voltar}
            statusBarTranslucent>
            <BlurView intensity={50} tint="dark" style={novos.embacado}>
              <View style={novos.fundo_modal} pointerEvents="box-none">
                <Text style={novos.titulo}>Médico de seu filho</Text>

                <View style={novos.container_input}>
                  <Text style={novos.txt_input}>Nome: </Text>
                  <TextInput 
                    style={novos.input}
                    value={doutor}
                    onChangeText={setDoutor}/>
                </View>

                <View style={novos.container_input}>
                  <Text style={novos.txt_input}>Telefone: </Text>
                  <TextInput 
                    style={novos.input}
                    keyboardType="numeric"
                    value={numDoutor}
                    onChangeText={mudancaDoutor}
                    maxLength={13}/>
                </View>

                <Text style={[novos.titulo, {marginTop: 20}]}>Serviço de Emergência</Text>

                <View style={novos.container_input}>
                  <Text style={novos.txt_input}>Nome: </Text>
                  <TextInput 
                    style={novos.input}
                    value={emergencia}
                    onChangeText={setEmergencia}/>
                </View>

                <View style={novos.container_input}>
                  <Text style={novos.txt_input}>Telefone: </Text>
                  <TextInput 
                    style={novos.input}
                    value={numEmergencia}
                    onChangeText={mudancaEmergencia}
                    keyboardType="numeric"
                    maxLength={13}/>
                </View>

                <TouchableOpacity style={novos.botao} onPress={salvar}>
                  <Text style={novos.txt_botao}>Salvar</Text>
                </TouchableOpacity>
              </View>
            </BlurView>
          </Modal>

        </SafeAreaView>
    </ScrollView>
  );
}

const novos = StyleSheet.create({
  fundo_modal:{
    backgroundColor: 'white',
    margin: 'auto',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '90%',
    alignSelf: 'center',
    borderRadius: 20,
    gap: 30,
    padding: 20,
    overflow: 'hidden',
    position: 'absolute'
  },

  embacado:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  input:{
    borderColor: '#12B9ED',
    borderWidth: 1,
    borderRadius: 5,
    flex: 1,
  },

  titulo:{
    fontWeight: 'bold',
    fontSize: 21
  },

  botao:{
    backgroundColor: '#12B9ED',
    borderRadius: 5,
    width: '80%',
    padding: 15,
    marginTop: 20
  },

  txt_botao:{
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18
  },

  container_input:{
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },

  txt_input:{
    fontSize: 15,
    width: 80,
  }
})
