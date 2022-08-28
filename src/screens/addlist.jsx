import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";

import CategoryDropdownForm from "../components/categorydropdownform";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export default function AddList({ navigation }) {
  const [form, setForm] = React.useState({
    title: "",
    category: "",
    date: "",
    desc: "",
    status: "",
  });

  const [isLoading, setIsLoading] = React.useState(false);

  const handleOnChange = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnPress = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (token === null) {
        navigation.navigate("Login");
      }

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      };

      const body = JSON.stringify(form);
      setIsLoading(true);
      const response = await axios.post(
        "https://api.kontenbase.com/query/api/v1/63e26113-c6ed-4d3b-a8de-18e21704b12c/ToDo",
        body,
        config
      );
      console.log(response);

      setIsLoading(false);
      alert("Category Added Successfully");
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
      setIsLoading(false);
    }
  };

  return (
    <View className="flex-1 bg-white">
      <StatusBar />
      <View className="mt-11 mx-9 flex flex-row">
        <Text className="text-[25px] font-bold">Add List</Text>
      </View>
      <View className="items-center justify-center mt-9">
        <TextInput
          className="rounded-md border-2 border-gray-400/100 w-80 h-10 mb-5 px-3 bg-gray-200"
          placeholder="Name"
          onChangeText={(value) => handleOnChange("title", value)}
          value={form.title}
        />
        <CategoryDropdownForm
          onChangeText={(value) => handleOnChange("category", value)}
          value={form.category}
        />
        <TextInput
          className="rounded-md border-2 border-gray-400/100 w-80 h-10 mb-5 px-3 bg-gray-200"
          placeholder="Choose Date"
        />
        <TextInput
          className="rounded-md border-2 border-gray-400/100 w-80 mb-5 px-3 bg-gray-200"
          placeholder="Description"
          multiline
          numberOfLines={4}
          onChangeText={(value) => handleOnChange("desc", value)}
          value={form.desc}
        />
        <TouchableOpacity
          className="mb-8 rounded-md bg-red-400 w-80 items-center py-2"
          onPress={handleOnPress}
        >
          {isLoading ? (
            <Text className="text-[20px] font-extrabold text-white">
              Adding...
            </Text>
          ) : (
            <Text className="text-[20px] font-extrabold text-white">
              Add List
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
