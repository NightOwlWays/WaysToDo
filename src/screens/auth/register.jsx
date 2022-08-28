import React from "react"
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({navigation}) {
  const [form, setForm] = React.useState({
    firstName:'',
    email:'',
    password:''
  })

  const handleOnFill = (name, value) => {
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleOnSubmit = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify(form)

      // Post a response
      const response = await axios.post(
        "https://api.kontenbase.com/query/api/v1/63e26113-c6ed-4d3b-a8de-18e21704b12c/auth/register",
        body,
        config
      );
      console.log(response);

      if (response) {
        await AsyncStorage.setItem("token", response.data.token)
      }

      const value = await AsyncStorage.getItem("token")
      if (value !== null) {
        console.log(value)
        navigation.navigate("Login")
      }
    } catch (error) {
      console.log(error)
      alert(error.response.data.message)
    }
  }

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <View>
        <Image
          source={{
            uri: "https://ik.imagekit.io/CoffeeLatteShop/Login_Icon_yqQWwr2Wq.png",
          }}
          className="self-center m-5 w-72 h-60"
        />
        <Text className="text-slate-900 text-3xl text-left font-bold mb-10">
          Register
        </Text>
        <View className="mb-5">
          <TextInput
            className="rounded-md border-2 border-slate-700 w-80 h-10 mb-5 px-3 bg-white"
            placeholder="Your name"
            onChangeText={(value) => handleOnFill("firstName", value)}
            value={form.firstName}
          />
          <TextInput
            className="rounded-md border-2 border-slate-700 w-80 h-10 mb-5 px-3 bg-white"
            placeholder="example@mail.com"
            onChangeText={(value) => handleOnFill("email", value)}
            value={form.email}
          />
          <TextInput
            secureTextEntry={true}
            className="rounded-md border-2 border-slate-700 w-80 h-10 mb-5 px-3 bg-white"
            placeholder="password"
            onChangeText={(value) => handleOnFill("password", value)}
            value={form.password}
          />
        </View>
        <TouchableOpacity
          className="self-center mb-5 flex justify-center items-center rounded w-80 h-12 bg-red-500"
          onPress={handleOnSubmit}
        >
          <Text className="text-3xl text-white font-semibold">Register</Text>
        </TouchableOpacity>
        <Text className="text-center text-slate-900 text-xl font-medium" onPress={() => navigation.navigate("Login")}>Joined us before? <Text className="text-red-500 font-bold">Login</Text></Text>
      </View>
    </View>
  );
}
