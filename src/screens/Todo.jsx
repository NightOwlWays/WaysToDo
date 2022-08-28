import { StatusBar } from "expo-status-bar"
import React from "react"
import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native"
import { FlatlList } from "react-native-gesture-handler"

//dropdown import
import CategoryDropdown from "../components/categorydropdown"
import StatusDropdown from "../components/statusdropdown"

export default function Todo() {
    const todos = [
        {
            title: 'Learn Golang',
            desc: "let's learn about Golang!"
        },
        {
            title: 'Learn Javascript',
            desc: "let's learn about Javascript!"
        },
        {
            title: 'Learn Python',
            desc: "let's learn about Python!"
        },
    ]

    return (
        <View>
            <StatusBar />
            <View className="h-16 mt-11 mx-5 flex flex-row justify-between items-center">
                <View>
                    <Text className="text-3xl font-semibold">Hi, User!</Text>
                    <Text className="text-red-400">200 Lists</Text>
                </View>
                <View className="flex justify-center">
                    <View className="flex rounded-full border-2 border-red-400">
                    <Image
                        className="rounded-full w-12 h-12"
                        source={{
                        uri: "https://ik.imagekit.io/CoffeeLatteShop/Icon_icon_dXDeWrdnd.png",
                        }}
                    />
                    </View>
                </View>
            </View>
            <View className="flex items-center justify-center mt-10">
                <TextInput
                    className="w-80 h-10 mb-7 px-3 bg-slate-200 rounded-md border-2 border-slate-700"
                    placeholder="Search list..."
                />
                <View>
                    <View>
                        <CategoryDropdown />
                    </View>
                    <View>
                        <StatusDropdown />
                    </View>
                </View>
            </View>
        </View>
    )
}