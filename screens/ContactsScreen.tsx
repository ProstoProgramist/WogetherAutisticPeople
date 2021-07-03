import * as React from 'react';
import { StyleSheet } from 'react-native';
import ContactsListItem from "../components/ContactsListItem";
import { View } from '../components/Themed';
import users from "../data/Users";
import {FlatList} from "react-native";
import NewMessageButton from "../components/NewMessageButton";

export default function ContactsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
          style={{width:'100%'}}
          data={users}
          renderItem = {({item}) => <ContactsListItem user={item} /> }
          keyExtractor={(item) => item.id}
      />
        <NewMessageButton/>
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
