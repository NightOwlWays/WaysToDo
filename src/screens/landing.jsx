import { View, Text, TouchableOpacity, Image } from "react-native";

export default function Landing({navigation}) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <View className="mb-16">
          <Image
            source={{
              uri: "https://ik.imagekit.io/CoffeeLatteShop/WaysToDo.png",
            }}
            className="self-center m-5 w-72 h-60"
          />
          <Text className=" text-center text-5xl font-bold mb-3">
            Ways <Text className="text-red-500">To</Text>
            <Text className="text-red-400">DO</Text>
          </Text>
          <Text className="text-center text-lg">
            Write your activity and finish your activity{"\n"}Fast, Simple and
            Easy to Use.
          </Text>
        </View>
        <View className="flex justify-center items-center">
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            className="mb-5 flex justify-center items-center rounded w-80 h-12 bg-red-500"
          >
            <Text className="text-3xl text-white font-semibold">Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Register")}
            className="flex justify-center items-center rounded w-80 h-12 bg-slate-400"
          >
            <Text className="text-3xl text-white font-semibold">Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}