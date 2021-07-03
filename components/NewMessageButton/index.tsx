import React from 'react';
import {TouchableNativeFeedback, View} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./styles";
import {useNavigation} from "@react-navigation/native";

const NewMessageButton = () => {

    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('Contacts');
    }

    return(
        <View style = {styles.container}>
            <TouchableNativeFeedback onPress={onPress}>
                <MaterialCommunityIcons name="message-reply-text" size={28} color = "white"/>
            </TouchableNativeFeedback>
        </View>
    )
}

export default NewMessageButton;