import React, {useEffect, useState} from "react";
import {FlatList,Text,ImageBackground} from 'react-native';
import BG from '../assets/images/BG.jpg'
import { useRoute } from '@react-navigation/native';
import ChatMessage from "../components/ChatMessage/index";
import InputBox from "../components/inputBox";
import{
    API,graphqlOperation,Auth
} from "aws-amplify";
import {messagesByChatRoom} from "../src/graphql/queries";

const ChatRoomScreen = () => {

    const [messages,setMessages] = useState([]);
    const [myId,setMyID] = useState(null)

    useEffect( () => {
      const fetchMessages = async () => {
        const messagesData = await API.graphql(
                graphqlOperation(
                  messagesByChatRoom,{
                        chatRoomID:route.params.id,
                        sortDirection:"DESC",
                    }
                )
            )

            setMessages(messagesData.data.messagesByChatRoom.items);
        }
        fetchMessages()
    }, []);

     useEffect(() =>{
         const getMyId = async () => {
             const userInfo = await  Auth.currentAuthenticatedUser()
             setMyID(userInfo.attributes.sub);
         }
         getMyId();
     },[])
    const route = useRoute();
    console.log(route.params.id);
    return(
        <ImageBackground style = {{width: "100%" , height:"100%"}} source={BG}>
            <FlatList
                data ={messages}
                renderItem = {({ item }) => <ChatMessage myId = {myId} message={item} />}
                inverted
            />

            <InputBox chatRoomID = {route.params.id}/>
        </ImageBackground>
   );
}

export default ChatRoomScreen;