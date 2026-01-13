import { Text, View, ScrollView } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { styles } from '@/estilos/emergencia';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles as styles2 } from '@/estilos/passos';

export default function Dr5() {

  return (
    <SafeAreaView style={[styles.container, {flex:1}]}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ flex: 1 }}
          nestedScrollEnabled
          contentContainerStyle={{
            paddingBottom: 160, 
          }}>

          <Text style={styles.titulo}>5. Se Não Conseguir Ventilar</Text>

          <Text style={[styles.txt, {marginVertical: 15}]}>Se com o Ambu não conseguir ventilar, esvazie o balão da cânula (caso tenha) e retire o traqueostoma. Realize a troca da cânula de traqueostomia.</Text>

          {/*Passo 1*/}
          <View style={[styles2.container_passo, {backgroundColor: 'white', alignItems:'center'}]}>
            <View style={[styles2.circulo, {backgroundColor: '#D0F0FB'}]}>
              <AntDesign name="check" size={24} color="#12B7EC" />
            </View>
            <View style={styles2.txt_passo_container}>
              <Text style={[styles2.descricao_passo, {fontWeight: '500'}]}>Ventile com o Ambu: conecte e aperte a bolsa a cada 3-5 segundos.</Text>
            </View>
          </View>
          
          {/*Passo 2*/}
          <View style={[styles2.container_passo, {backgroundColor: 'white', alignItems:'center'}]}>
            <View style={[styles2.circulo, {backgroundColor: '#D0F0FB'}]}>
              <AntDesign name="check" size={24} color="#12B7EC" />
            </View>
            <View style={styles2.txt_passo_container}>
              <Text style={[styles2.descricao_passo, {fontWeight: '500'}]}>Prepare o material: nova cânula, lubrificante e fixador.</Text>
            </View>
          </View>
          
          <View style={styles.container_emergencia}>

            {/*Título*/}
            <View style={[styles.container_botao, {marginVertical:10, gap: 10}]}>
              <MaterialIcons name="warning-amber" size={35} color='#CB8A01' />
              <Text style={styles.titulo_emergencia}>Atenção: Procure Urgência Se...</Text>
            </View>

            <View style={styles.topico}>
              <Text style={[styles.bullet, {color: '#8B5617'}]}>•</Text>
              <Text style={[styles.txt_topico, {color: '#8B5617'}]}>A pele ao redor do pescoço ou lábios ficar azulada (cianose).</Text>
            </View>

            <View style={styles.topico}>
              <Text style={[styles.bullet, {color: '#8B5617'}]}>•</Text>
              <Text style={[styles.txt_topico, {color: '#8B5617'}]}>A criança apresentar sonolência excessiva ou dificuldades para acordar.</Text>
            </View>

            <View style={styles.topico}>
              <Text style={[styles.bullet, {color: '#8B5617'}]}>•</Text>
              <Text style={[styles.txt_topico, {color: '#8B5617', marginBottom: 5}]}>A dificuldade para respirar não melhorar após a troca da cânula.</Text>
            </View>
          </View>
        </ScrollView>

    </SafeAreaView>
  );
}