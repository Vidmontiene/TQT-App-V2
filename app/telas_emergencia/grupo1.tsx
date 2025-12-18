import PagerView from "react-native-pager-view";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

import Nca0 from "./nconsigoasp0";
import Nca1 from "./nconsigoasp1";

export default function EmergenciaSwipe() {
  const [pagina, setPagina] = useState(0);

  return (
    <View style={{ flex: 1 }}>
      
      <PagerView
        style={{ flex: 1 }}
        initialPage={0}
        onPageSelected={(e) => setPagina(e.nativeEvent.position)}
      >
        <Nca0 key="0" />
        <Nca1 key="1" />
      </PagerView>

      {/*Traços*/}
      <View style={styles.tracos_container}>
        {Array.from({ length: 2 }).map((_, i) => (
          <View
            key={i}
            style={[
              styles.traco,
              pagina === i && styles.traco_ativo,
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tracos_container: {
    position: "absolute",
    top: 20,
    alignSelf: "center",
    flexDirection: "row",
    gap: 5,
    zIndex: 10,
  },
  traco: {
    width: 80,
    height: 6,
    borderRadius: 5,
    backgroundColor: "#ccc",
    marginHorizontal: 6,
  },
  traco_ativo: {
    backgroundColor: '#12B9ED',
    height: 7,
    borderRadius: 7,
  },
});

