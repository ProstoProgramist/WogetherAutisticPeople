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
        width: 50,
        height:50,
        borderRadius:360,
        marginRight:5,
    },
    userName:{
        fontWeight:"bold",
        fontSize:14,
    },

    midContainer:{
        justifyContent:"space-around",
    }

});

export default styles;