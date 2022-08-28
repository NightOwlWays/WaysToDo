import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";

import { FlatList } from "react-native-gesture-handler";

import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export default function AddCategory({ navigation }) {
  const [data, setData] = React.useState([]);
  const [dataLoading, setDataLoading] = React.useState(false);

  const [form, setForm] = React.useState({
    title: "",
  });

  const [isLoading, setIsLoading] = React.useState(false);

  // handler fill
  const handleOnFill = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  // handler submit
  const handleOnSubmit = async () => {
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

      // set loading to true
      setIsLoading(true);

      // post category
      const response = await axios.post(
        "https://api.kontenbase.com/query/api/v1/63e26113-c6ed-4d3b-a8de-18e21704b12c/category",
        body,
        config
      );
      console.log(response);

      // set loading to false
      setIsLoading(false);

      // alert success
      alert("Category Added Successfully");

    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
      setIsLoading(false);
    }
  };

  const getData = async () => {
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

      setDataLoading(true);

      const res = await axios.get(
        "https://api.kontenbase.com/query/api/v1/7205b1b0-d903-47c9-9e8c-99d05599eb68/category?$lookup=*",
        config
      );
      setData(res.data);
      setDataLoading(false);
    } catch (error) {
      console.log(error);
      setDataLoading(false);
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  // const _categoryRender = ({ item })=>{
  //     return (

  //             <Text className="bg-red-400 rounded-md px-2 py-1 text-white font-bold">
  //             {item.title}</Text>

  //     );
  // };

  return (
    <View className="flex-1 bg-white">
      <StatusBar />
      <View className="mt-11 mx-9 flex flex-row">
        <Text className="text-[25px] font-bold">Add Category</Text>
      </View>
      <View className="items-center justify-center mt-9">
        <TextInput
          className="rounded-md border-2 border-gray-400/100 w-80 h-10 mb-9 px-3 bg-gray-200"
          placeholder="Name"
          onChangeText={(value) => handleOnFill("title", value)}
          value={form.title}
        />

        <TouchableOpacity
          className="mb-8 rounded-md bg-red-400 w-80 items-center py-2"
          onPress={handleOnSubmit}
        >
          {isLoading ? (
            <Text className="text-[20px] font-extrabold text-white">
              Adding...
            </Text>
          ) : (
            <Text className="text-[20px] font-extrabold text-white">
              Add Category
            </Text>
          )}
        </TouchableOpacity>
      </View>

      <View className="mt-11 mx-9">
        <Text className="text-[25px] font-bold">List Category</Text>
      </View>
      <View className="mt-4 mx-9 flex flex-row flex-wrap">
        <FlatList
          numColumns={3}
          data={data}
          key={(item) => item.index}
          renderItem={({ item }) => (
            <View className="basis-1/8 mx-1 mb-2">
              <Text className="bg-red-400 rounded-md px-2 py-1 text-white font-bold">
                {item.title}
              </Text>
            </View>
          )}
          refreshing={dataLoading}
          onRefresh={getData}
        />
      </View>
    </View>
  );
}
