import * as React from 'react';
import { StyleSheet } from 'react-native';
import ChatListItem from "../components/ChatListItem";
import EditScreenInfo from '../components/EditScreenInfo';
import { View } from '../components/Themed';
import chatRooms from "../data/ChatRooms";
import {FlatList} from "react-native";

export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <FlatList
          style={{width:'100%'}}
          data={chatRooms}
          renderItem = {({item}) => <ChatListItem chatRoom={item} /> }
          keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});
