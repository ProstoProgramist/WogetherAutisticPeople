import {StyleSheet} from "react-native";


const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        width:"100%",
        justifyContent:"space-between",
        padding:10,
    },
    leftContainer:{
        flexDirection: "row",
    },
    avatar: {
        width: 60,
        height:50,
        borderRadius:50,
        marginRight:5,
    },
    userName:{
        fontWeight:"bold",
        fontSize:14,
    },
    lastMessage:{
        fontSize:14,
        color:"grey",
    },
    time:{
        fontSize:13,
        color:"grey",
        textAlign:"center",
    },
    midContainer:{
        justifyContent:"space-around",
    }

});

export default styles;