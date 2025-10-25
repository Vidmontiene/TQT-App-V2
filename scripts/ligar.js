import {Linking} from "react-native";

export const ligar = (num) => {
    Linking.openURL(`tel:${num}`);
}