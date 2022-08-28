import { StatusBar } from "expo-status-bar"
import React from "react"
import {
  View,
  Text,
  Image,
  TextInput,
  SafeAreaView,
  TouchableHighlight,
} from "react-native"

export default function DetailList() {
    return (
        <View>
            <StatusBar />
            <View>
                <Text className="bg-blue-500 rounded-md px-2 py-1 text-white font-semibold absolute top-3 right-4">Study</Text>
            </View>
        </View>
    )
}