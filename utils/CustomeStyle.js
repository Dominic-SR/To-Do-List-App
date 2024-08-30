import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
    droidSafeArea:{
        flex:1,
        paddingTop: Platform.os === 'android' ? 45 : 0
    }
})