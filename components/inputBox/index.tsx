import React, {useEffect,useState} from "react";
import {View, Text, TextInput, TouchableNativeFeedback, TouchableOpacity} from "react-native";
import styles from "./style";
import{
    API,
    Auth,
    graphqlOperation
} from "aws-amplify";
import {createMessage, createUser} from "../../src/graphql/mutations";
import {FontAwesome5, MaterialCommunityIcons, MaterialIcons, Entypo, Fontisto} from "@expo/vector-icons";
const InputBox = (props) => {

    const { chatRoomID } = props;

    const [message,setMessage] = useState('');
    const [myUserId,setMyUserId] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const userInfo = await Auth.currentAuthenticatedUser();
            setMyUserId(userInfo.attributes.sub);
        }
        fetchUser();
    }, [])

    const onMicrophonePress = () => {
        console.warn('Microphone')
    }
    const onSendPress = async () => {

        try{
            await API.graphql(
                graphqlOperation(
                    createMessage,{
                        input:{
                            content:message,
                            userID:myUserId,
                            chatRoomID
                        }
                    }
                )
            )
        }catch (e){
            console.log(e)
        }

        setMessage('')
    }
    const onPress = () => {
        if (!message){
            onMicrophonePress();
        }else{
            onSendPress();
        }
    }
    return(
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <FontAwesome5 name = "laugh-beam" size = {24} color = {"grey"}/>
                <TextInput
                placeholder={"Type a message"}
                style={styles.textInput}
                multiline
                value={message}
                onChangeText={setMessage}
                />
                <Entypo name = "attachment" size = {24} color = {"grey"} style={styles.icon}/>
                {!message && <Fontisto name = "camera" size = {24} color = {"grey"} style={styles.icon}/>}
            </View>
            <TouchableOpacity onPress ={onPress}>
                <View style={styles.buttonContainer}>
                    {!message
                        ? <MaterialCommunityIcons name="microphone"size={28} color={"white"} />
                        :<MaterialIcons name="send" size={28} color={"white"}/>
                    }
                </View>
            </TouchableOpacity>

        </View>
    )
}

export default InputBox;