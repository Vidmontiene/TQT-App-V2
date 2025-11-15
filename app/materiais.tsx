import { StyleSheet, View, TouchableOpacity, Text, ScrollView, Dimensions  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from 'expo-router';
import { useCallback, useEffect, useState } from 'react';
import { CheckBox } from 'react-native-elements';
import { getLista, setLista, iniciar } from '@/database/lista'

export default function Materiais() {

    // false = 2, true = 1
    const [canula, setCanula] = useState(false);  
    const [fita, setFita] = useState(false);  
    const [gaze, setGaze] = useState(false);  
    const [solucao, setSolucao] = useState(false);  
    const [luva, setLuva] = useState(false); 
    const [aspirador, setAspirador] = useState(false); 
    const [sonda, setSonda] = useState(false); 
    const [mascara, setMascara] = useState(false); 
    const [oculos, setOculos] = useState(false); 

    const [msg, setMsg] = useState("");                 // Mostra mensagem de salvamento 

    // Garantir tabela e registro único (id=1)
    useEffect(() => {
        (async () => {
        await iniciar();
        })();
    }, []);

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
        setCanula((row?.canula == null || row?.canula == 2) ? false : true);
        setFita((row?.fita == null || row?.fita == 2) ? false : true);
        setGaze((row?.gaze == null || row?.gaze == 2) ? false : true);
        setSolucao((row?.solucao == null || row?.solucao == 2) ? false : true);
        setLuva((row?.luva == null || row?.luva == 2) ? false : true);
        setAspirador((row?.aspirador == null || row?.aspirador == 2) ? false : true);
        setSonda((row?.sonda == null || row?.sonda == 2) ? false : true);
        setMascara((row?.mascara == null || row?.mascara == 2) ? false : true);
        setOculos((row?.oculos == null || row?.oculos == 2) ? false : true);
        }
    };

    // Salva useStates no DB
    const salvar = async () => {
        await setLista("canula", (canula == null || canula == false) ? 2 : 1);
        await setLista("fita", (fita == null || fita == false) ? 2 : 1);
        await setLista("gaze", (gaze == null || gaze == false) ? 2 : 1);
        await setLista("solucao", (solucao == null || solucao == false) ? 2 : 1);
        await setLista("luva", (luva == null || luva == false) ? 2 : 1);
        await setLista("aspirador", (aspirador == null || aspirador == false) ? 2 : 1);
        await setLista("sonda", (sonda == null || sonda == false) ? 2 : 1);
        await setLista("mascara", (mascara == null || mascara == false) ? 2 : 1);
        await setLista("oculos", (oculos == null || oculos == false) ? 2 : 1);
        carregarLista();
        setMsg("Informações salvas com sucesso!");
        setTimeout(() => setMsg(""), 1500); // desaparece após 1.5s
    }
    
    return (
        <View style={styles.view_externa}>
            {msg ? <Text style={styles.msg}>{msg}</Text> : null}
            <ScrollView>
                <SafeAreaView style={styles.container} edges={['top', 'right', 'bottom', 'left']}>
                    
                    <Text style={styles.titulo}>Kit de Cuidados</Text>

                    {/*Canula*/}
                    <TouchableOpacity style={styles.botao} onPress={() => setCanula(!canula)}>
                        <View style={styles.conteudo_botao}>
                            <Text style={styles.titulo_botao}>Cânula de traqueostomia (tamanho adequado)</Text>
                            <CheckBox
                                checked={canula}
                                onPress={() => setCanula(!canula)}
                                checkedColor= '#12B9ED'
                                uncheckedColor="gray"
                                size={30}
                                containerStyle={{ padding: 0, margin: 0, backgroundColor: 'transparent' }}
                            />
                        </View>
                    </TouchableOpacity>

                    {/*Fita Adesiva*/}
                    <TouchableOpacity style={styles.botao} onPress={() => setFita(!fita)}>
                        <View style={styles.conteudo_botao}>
                            <Text style={styles.titulo_botao}>Fita adesiva para fixação da cânula</Text>
                            <CheckBox
                                checked={fita}
                                onPress={() => setFita(!fita)}
                                checkedColor= '#12B9ED'
                                uncheckedColor="gray"
                                size={30}
                                containerStyle={{ padding: 0, margin: 0, backgroundColor: 'transparent' }}
                            />
                        </View>
                    </TouchableOpacity>

                    {/*Gaze*/}
                    <TouchableOpacity style={styles.botao} onPress={() => setGaze(!gaze)}>
                        <View style={styles.conteudo_botao}>
                            <Text style={styles.titulo_botao}>Gaze estéril</Text>
                            <CheckBox
                                checked={gaze}
                                onPress={() => setGaze(!gaze)}
                                checkedColor= '#12B9ED'
                                uncheckedColor="gray"
                                size={30}
                                containerStyle={{ padding: 0, margin: 0, backgroundColor: 'transparent' }}
                            />
                        </View>
                    </TouchableOpacity>
                
                    {/*Solução*/}
                    <TouchableOpacity style={styles.botao} onPress={() => setSolucao(!solucao)}>
                        <View style={styles.conteudo_botao}>
                            <Text style={styles.titulo_botao}>Solução salina estéril</Text>
                            <CheckBox
                                checked={solucao}
                                onPress={() => setSolucao(!solucao)}
                                checkedColor= '#12B9ED'
                                uncheckedColor="gray"
                                size={30}
                                containerStyle={{ padding: 0, margin: 0, backgroundColor: 'transparent' }}
                            />
                        </View>
                    </TouchableOpacity>

                    {/*Luvas*/}
                    <TouchableOpacity style={styles.botao} onPress={() => setLuva(!luva)}>
                        <View style={styles.conteudo_botao}>
                            <Text style={styles.titulo_botao}>Luvas estéreis</Text>
                            <CheckBox
                                checked={luva}
                                onPress={() => setLuva(!luva)}
                                checkedColor= '#12B9ED'
                                uncheckedColor="gray"
                                size={30}
                                containerStyle={{ padding: 0, margin: 0, backgroundColor: 'transparent' }}
                            />
                        </View>
                    </TouchableOpacity>

                    <Text style={styles.titulo}>Materiais Adicionais</Text>

                    {/*Aspirador*/}
                    <TouchableOpacity style={styles.botao} onPress={() => setAspirador(!aspirador)}>
                        <View style={styles.conteudo_botao}>
                            <Text style={styles.titulo_botao}>Aspirador de secreções</Text>
                            <CheckBox
                                checked={aspirador}
                                onPress={() => setAspirador(!aspirador)}
                                checkedColor= '#12B9ED'
                                uncheckedColor="gray"
                                size={30}
                                containerStyle={{ padding: 0, margin: 0, backgroundColor: 'transparent' }}
                            />
                        </View>
                    </TouchableOpacity>

                    {/*Sonda*/}
                    <TouchableOpacity style={styles.botao} onPress={() => setSonda(!sonda)}>
                        <View style={styles.conteudo_botao}>
                            <Text style={styles.titulo_botao}>Sondas de aspiração (tamanhos variados)</Text>
                            <CheckBox
                                checked={sonda}
                                onPress={() => setSonda(!sonda)}
                                checkedColor= '#12B9ED'
                                uncheckedColor="gray"
                                size={30}
                                containerStyle={{ padding: 0, margin: 0, backgroundColor: 'transparent' }}
                            />
                        </View>
                    </TouchableOpacity>

                    {/*Mascara*/}
                    <TouchableOpacity style={styles.botao} onPress={() => setMascara(!mascara)}>
                        <View style={styles.conteudo_botao}>
                            <Text style={styles.titulo_botao}>Máscara de proteção facial</Text>
                            <CheckBox
                                checked={mascara}
                                onPress={() => setMascara(!mascara)}
                                checkedColor= '#12B9ED'
                                uncheckedColor="gray"
                                size={30}
                                containerStyle={{ padding: 0, margin: 0, backgroundColor: 'transparent' }}
                            />
                        </View>
                    </TouchableOpacity>

                    {/*Óculos*/}
                    <TouchableOpacity style={styles.botao} onPress={() => setOculos(!oculos)}>
                        <View style={styles.conteudo_botao}>
                            <Text style={styles.titulo_botao}>Óculos de proteção</Text>
                            <CheckBox
                                checked={oculos}
                                onPress={() => setOculos(!oculos)}
                                checkedColor= '#12B9ED'
                                uncheckedColor="gray"
                                size={30}
                                containerStyle={{ padding: 0, margin: 0, backgroundColor: 'transparent' }}
                            />
                        </View>
                    </TouchableOpacity>

                    {/*Botão de Salvar*/}
                    <TouchableOpacity style={styles.botao_salvar} onPress={salvar}>
                        <Text style={styles.txt_botao}>Salvar Lista</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </ScrollView>
        </View>
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
        fontSize: 15,
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
    view_externa:{
        margin: 0,
        padding: 0
    }
})