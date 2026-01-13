import { ScrollView, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '@/estilos/botoes';
import { getPerfil, setPerfil, iniciar } from '@/database/perfil';
import { useFocusEffect } from 'expo-router';
import DateTimePicker from "@react-native-community/datetimepicker";
import { useCallback, useState, useRef } from 'react';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Perfil() {

  // useStates
  const [nomeResponsavel, setNomeResponsavel] = useState("");
  const [nomeCrianca, setNomeCrianca] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [data, setData] = useState<Date | null>(null);
  const [patologia, setPatologia] = useState("");

  const [showData, setShowData] = useState(false);       // Abre/Fecha escolhedor de DateTimePicker
  const [msg, setMsg] = useState("");                    // Mostra mensagem de aviso

  const inputRef = useRef<TextInput>(null);              // Ref para input
  const [campoEditando, setCampoEditando] = useState<
    "nomeResponsavel" | "email" | "telefone" | "nomeCrianca" | "patologia" | null
  >(null);

  // Formata a data em DD/MM/AAAA
  const dateParaData = (date: Date | null) => { 
    if (!date) return ""; 
    const d = new Date(date);
    if (isNaN(d.getTime())) return "";
    return d.toLocaleDateString("pt-BR"); 
  }; 

  // Formata a data (DD/MM/AAAA) em Date
  const dataParaDate = (dataStr: string) => {
    if (!dataStr || dataStr === "") return null;
    const [dia, mes, ano] = dataStr.split("/").map(Number);
    return new Date(ano, mes - 1, dia);
  };

  // Retorna a idade
  const idade = (nasc: Date): number => {
    const hoje = new Date();

    let anos = hoje.getFullYear() - nasc.getFullYear();

    const mesHoje = hoje.getMonth();
    const diaHoje = hoje.getDate();
    const mesNasc = nasc.getMonth();
    const diaNasc = nasc.getDate();

    // Ainda não fez aniversário este ano
    if ( mesHoje < mesNasc || (mesHoje === mesNasc && diaHoje < diaNasc)) {
      anos--;
    }

    return anos; 
  }

  // Salva nova data
  const salvaData =  async (event: any, dataSelecionada: any) => {
    const dataAtual = dataSelecionada || data;
    const hoje = new Date();

    // Não permite datas que ainda não ocorreram 
    if (dataAtual <= hoje){
      await setPerfil("data", dateParaData(dataAtual));
      await carregarPerfil();
    }
    else{
      setMsg("Data inválida");           
      setTimeout(() => setMsg(""), 1500); // desaparece após 1.5s
    }
    setShowData(false);
  };


  // Carrega os valores do banco nos useStates
  const carregarPerfil = async () => {
    const rows = await getPerfil();
    if (Array.isArray(rows) && rows.length > 0) {
    const row = rows[0];
    setNomeResponsavel(row?.nome_responsavel != null ? String(row.nome_responsavel) : "");
    setNomeCrianca(row?.nome_crianca != null ? String(row.nome_crianca) : "");
    setTelefone(row?.telefone != null ? String(row.telefone) : "");
    setEmail(row?.email != null ? String(row.email) : "");
    setPatologia(row?.patologia != null ? String(row.patologia) : "");
    setData(row?.data ? dataParaDate(row.data) : null);
    }
  };

  // Carregar do banco sempre que a tela ganhar foco
  useFocusEffect(
    useCallback(() => {
        carregarPerfil();
    }, [])
  );

  // Lida com mudanças no numero 
  const mudancaTelefone = (num: string) => {
    num = num.replace(/[^0-9]/g, "")
    setTelefone(num.trim());
  };

  const salvar = async(campo: String, valor : any) => {
    const valornovo = valor.trim();
    await setPerfil(campo, valornovo);
    setCampoEditando(null);
  };

  return (
    <SafeAreaView style={styles.container} edges={[ 'left']}>
    {msg ? <Text style={styles.msg}>{msg}</Text> : null}
      <ScrollView showsVerticalScrollIndicator={false}>
        
        <Text style={[styles.txt_botao, {marginVertical: 15, textAlign: 'justify'}]}>
          Clique em qualquer informação para editá-la.
        </Text>

        <Text style={styles.titulo}>Informações do Responsável</Text>

        {/* Nome Responsável */}
        <TouchableOpacity
          style={styles.botao}
          onPress={() => {
            setCampoEditando("nomeResponsavel");
            setTimeout(() => inputRef.current?.focus(), 100);
          }}
        >
          <FontAwesome6 name="person" size={31} style={[styles.img_redondo, { paddingHorizontal: 25 }]} />

          <View style={styles.container_botao}>
            <Text style={styles.titulo_botao}>Nome</Text>

            {campoEditando === "nomeResponsavel" ? (
              <TextInput
                ref={inputRef}
                value={nomeResponsavel}
                onChangeText={setNomeResponsavel}
                style={styles.input_txt}
                maxLength={65}
                placeholder="Clique para adicionar."
                onBlur={() => salvar("nome_responsavel", nomeResponsavel)}
              />
              ) : (
              <Text style={styles.txt_botao}>
                {nomeResponsavel === "" ? "Clique para adicionar." : nomeResponsavel}
              </Text>
            )}
          </View>

          <MaterialIcons name="arrow-forward-ios" size={24} style={styles.seta} />
        </TouchableOpacity>

        {/*Email*/}
        <TouchableOpacity 
          style={styles.botao}
          onPress={() => {
            setCampoEditando('email');
            setTimeout(() => inputRef.current?.focus(), 100);
          }}
        >

          <MaterialCommunityIcons  name="email-outline" size={31} style={styles.img_redondo}/>

          <View style={styles.container_botao}>
            <Text style={styles.titulo_botao}>Email</Text>

            {campoEditando === "email" ? (
              <TextInput
                ref={inputRef}
                value={email}
                style={styles.input_txt}
                onChangeText={setEmail}
                maxLength={65}
                keyboardType='email-address'
                placeholder="Clique para adicionar."
                onBlur={() => salvar("email", email)}
              />
              ) : (
              <Text style={styles.txt_botao}>
                {email === "" ? "Clique para adicionar." : email}
              </Text>
            )}
          </View>

          <MaterialIcons name="arrow-forward-ios" size={24} style={styles.seta}/>
        </TouchableOpacity>

        {/*Telefone*/}
        <TouchableOpacity          
          style={styles.botao}
          onPress={() => {
            setCampoEditando("telefone");
            setTimeout(() => inputRef.current?.focus(), 100);
          }}
        >
          <Feather name="phone" size={31} style={styles.img_redondo}/>

          <View style={styles.container_botao}>
            <Text style={styles.titulo_botao}>Telefone</Text>

            {campoEditando === "telefone" ? (
              <TextInput
                ref={inputRef}
                value={telefone}
                style={styles.input_txt}
                onChangeText={mudancaTelefone}
                keyboardType="numeric"
                maxLength={13}
                placeholder="Clique para adicionar."
                onBlur={() => salvar("telefone", telefone)}
              />
              ) : (
              <Text style={styles.txt_botao}>
                {telefone === "" ? "Clique para adicionar." : telefone}
              </Text>
            )}
          </View>

          <MaterialIcons name="arrow-forward-ios" size={24} style={styles.seta}/>
        </TouchableOpacity>

        <Text style={styles.titulo}>Informações da Criança</Text>

        {/*Nome*/}
        <TouchableOpacity
          style={styles.botao}
          onPress={() => {
            setCampoEditando("nomeCrianca");
            setTimeout(() => inputRef.current?.focus(), 100);
          }}
        >
          <FontAwesome6 name="child-reaching" size={31} style={[styles.img_redondo, {paddingHorizontal: 25}]} />

          <View style={styles.container_botao}>
            <Text style={styles.titulo_botao}>Nome</Text>

            {campoEditando === "nomeCrianca" ? (
              <TextInput
                ref={inputRef}
                value={nomeCrianca}
                style={styles.input_txt}
                maxLength={65}
                onChangeText={setNomeCrianca}
                placeholder="Clique para adicionar."
                onBlur={() => salvar("nome_crianca", nomeCrianca)}
              />
              ) : (
              <Text style={styles.txt_botao}>{nomeCrianca === "" ? "Clique para adicionar." : nomeCrianca}</Text>
            )}
          </View>

          <MaterialIcons name="arrow-forward-ios" size={24} style={styles.seta}/>
        </TouchableOpacity>

        {/*Data de Nascimento/Idade*/}
        <TouchableOpacity style={styles.botao} onPress={() => setShowData(true)}>
          <Feather name="calendar" size={31} style={styles.img_redondo}/>
          <View style={styles.container_botao}>
            <Text style={styles.titulo_botao}>Data de Nascimento</Text>
            <Text style={styles.txt_botao}>{data === null ? "Clique para adicionar." : `${dateParaData(data)} - ${idade(data)} ${idade(data) === 1 ? "ano" : "anos"}`}</Text>
          </View>
          <MaterialIcons name="arrow-forward-ios" size={24} style={styles.seta}/>
        </TouchableOpacity>
        {showData && (
          <DateTimePicker
              value={data || new Date()}
              mode="date"
              display="default"
              onChange={salvaData}
        />)}

        {/*Patologias*/}
        <TouchableOpacity
          style={styles.botao}
          onPress={() => {
            setCampoEditando("patologia");
            setTimeout(() => inputRef.current?.focus(), 100);
          }}>

          <FontAwesome6 name="file-medical" size={31} style={[styles.img_redondo, {paddingHorizontal: 25}]}/>

          <View style={styles.container_botao}>
            <Text style={styles.titulo_botao}>Patologias</Text>

            {campoEditando === "patologia" ? (
              <TextInput
                ref={inputRef}
                value={patologia}
                maxLength={65}
                style={styles.input_txt}
                onChangeText={setPatologia}
                placeholder="Clique para adicionar."
                onBlur={() => salvar("patologia", patologia)}
              />
              ) : (
              <Text style={styles.txt_botao}>{patologia === "" ? "Clique para adicionar." : patologia}</Text>
            )}
          </View>

          <MaterialIcons name="arrow-forward-ios" size={24} style={styles.seta}/>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>

  );
}

