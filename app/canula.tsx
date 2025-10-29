import { useFocusEffect } from 'expo-router';
import { useCallback, useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, ScrollView, StyleSheet, TextInput, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getCanula, iniciar, setCanula } from '@/database/canula';
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from '@react-native-picker/picker';

export default function Canula() {

    const [tipo, setTipo] = useState("");                 // Mostra o tipo na UI
    const [balao, setBalao] = useState("0");              // "1" = com balão, "2" = sem balão
    const [material, setMaterial] = useState("0");        // "1" = metálica, "2" = plástica/silicone
    const [tamanho, setTamanho] = useState("");           // Mostra o tamanho na UI
    const [marca, setMarca] = useState("");               // Mostra a Marca na UI
    const [data, setData] = useState<Date | null>(null);  // Mostra a data na UI

    const [showData, setShowData] = useState(false);       // Abre/Fecha escolhedor de DateTimePicker
    const [msg, setMsg] = useState("");                    // Mostra mensagem de salvamento 

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

    // Garantir tabela e registro único (id=1)
    useEffect(() => {
        (async () => {
        await iniciar();
        })();
    }, []);

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
    }

    // Lida com mudanças no tamanho (permite apenas n ou n.n ou "")
    const mudanca = (num: string) => {
        num = num.replace(',', '.');

        const partes = num.split('.');
        if (partes.length > 2) {
            num = partes[0] + '.' + partes[1];
        }

        if (!num.includes('.') && num.length >= 2) {
            num = num[0] + '.' + num.slice(1, 2);
        }

        const regex = /^(\d{0,1}(\.\d{0,1})?)$/;
        if (regex.test(num) || num === '') {
            setTamanho(num);
        }
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
        carregarCanula();
        setMsg("Informações salvas com sucesso!");
        setTimeout(() => setMsg(""), 1500); // desaparece após 1.5s
    };

    return (
        <SafeAreaView
            style={styles.container}
            edges={['top', 'right', 'bottom', 'left']}>

            {msg ? <Text style={styles.msg}>{msg}</Text> : null}

            {/*Tipo*/}
            <Text style={styles.texto}>Tipo de Cânula</Text>
            <TextInput
                style={styles.input_txt}
                value={tipo}
                onChangeText={setTipo}
            />

            {/*Balão*/}
            <Text style={styles.texto}>Tem Balão?</Text>
            <View style={styles.input_txt}>
                <Picker
                selectedValue={balao}
                onValueChange={(itemValue) => setBalao(itemValue)}
                >
                    <Picker.Item label="Sim" value="1" />
                    <Picker.Item label="Não" value="2" />
                </Picker>
            </View>


            {/*Tamanho*/}
            <Text style={styles.texto}>Tamanho da Cânula</Text>
            <TextInput
                style={styles.input_txt}
                value={tamanho}
                onChangeText={mudanca}
                keyboardType="numeric"
                maxLength={4}
            />

            {/*Material*/}
            <Text style={styles.texto}>Material</Text>
            <View style={styles.input_txt}>
                <Picker
                selectedValue={material}
                onValueChange={(itemValue) => setMaterial(itemValue)}>
                    <Picker.Item label="Metálica" value="1" />
                    <Picker.Item label="Plástica/Silicone" value="2" />
                </Picker>
            </View>

            {/*Marca*/}
            <Text style={styles.texto}>Marca</Text>
            <TextInput
                style={styles.input_txt}
                value={marca}
                onChangeText={setMarca}
            />

            {/*Data*/}
            <Text style={styles.texto}>Data da última Troca</Text>
            <TouchableOpacity style={styles.input_txt} onPress={() => setShowData(true)}>
                <Text style={styles.txt_data}>
                    {data ? data.toLocaleDateString("pt-BR") : ""}
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

            <TouchableOpacity style={styles.botao} onPress={mudarCanula}>
                <Text style={styles.txt_botao}>Salvar</Text>
            </TouchableOpacity>
        </SafeAreaView>

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
        height: 45,
        justifyContent: 'center',
        fontSize: 15,
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
        fontSize: 15,
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
    }
})