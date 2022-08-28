import React from "react"
import { Image, Text, View } from "react-native"

//flatlist
import { FlatList } from "react-native-gesture-handler"

//status bar
import { StatusBar } from "expo-status-bar"

export default function Home({navigation}) {
    const todos = [
        {
            title: 'Learn Golang',
            desc: "let's learn about Golang!"
        }
    ]

    return (
      <View className="flex-1 bg-white">
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
      </View>
    );
}