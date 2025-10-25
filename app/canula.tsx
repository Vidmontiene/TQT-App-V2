import { Feather, MaterialIcons, FontAwesome6 } from '@expo/vector-icons';
import { useFocusEffect } from 'expo-router';
import { useCallback, useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, ScrollView, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getCanula, iniciar, setCanula } from '@/database/canula';
import DateTimePicker from "@react-native-community/datetimepicker";

export default function Canula() {

    const [tipo, setTipo] = useState("");                 // Mostra o tipo na UI
    const [balao, setBalao] = useState("0");              // "1" = com balão, "2" = sem balão
    const [material, setMaterial] = useState("0");        // "1" = metálica, "2" = plástica/silicone
    const [tamanho, setTamanho] = useState("");           // Mostra o tamanho na UI
    const [marca, setMarca] = useState("");               // Mostra a Marca na UI
    const [data, setData] = useState<Date | null>(null);  // Mostra a data na UI

    const [showData, setShowData] = useState(false);        // Abre/Fecha escolhedor de DateTimePicker

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
        const regex = /^(\d{0,1}(\.\d{0,1})?)$/;
        if (regex.test(num) || num === "") {
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
    }


    return (
        <ScrollView>
            <SafeAreaView
                style={styles.container}
                edges={['top', 'right', 'bottom', 'left']}>

                {/*Tipo*/}
                <Text style={styles.texto}>Tipo de Cânula</Text>
                <TextInput
                    style={styles.input_txt}
                    value={tipo}
                    onChangeText={setTipo}
                />

                {/*Balão*/}
                <Text style={styles.texto}>Tem Balão?</Text>
                <TextInput
                    style={styles.input_txt}
                    placeholder=""
                    /* value={}
                    onChangeText={}*/
                />

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
                <TextInput
                    style={styles.input_txt}
                    placeholder=""
                    /* value={}
                    onChangeText={}*/
                />

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
                    <Text style={[styles.txt_data, { color: data ? '#000' : 'gray' }]}>
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
        </ScrollView>
    );
    }

    const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffffff',
        padding: 10,
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
        height: 50,
        justifyContent: 'center'
    },
    botao:{
        backgroundColor: '#12B9ED',
        height: 60,
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
        paddingLeft: 5
    }
})