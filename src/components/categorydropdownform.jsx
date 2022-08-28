import React, { useState } from "react"
import { Text, View } from "react-native"
import { Dropdown } from "react-native-element-dropdown"

import { AsyncStorage } from "@react-native-async-storage/async-storage"
import axios from "axios"

export default function CategoryDropdownForm({navigation}) {
    const [data, setData] = useState([])
    const [dataLoading, setDataLoading] = useState(false)

    const getData = async() => {
        try {
            const token = await AsyncStorage.getItem('token')
            
            //condition if token was null
            if (token === null) {
                navigation.navigate("Login")
            }

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + token
                }
            }

            // set data loading to true
            setDataLoading(true)

            const response = await axios.get('https://api.kontenbase.com/query/api/v1/63e26113-c6ed-4d3b-a8de-18e21704b12c/category?$lookup=*', config)
            setData(response.data)
            setDataLoading(false) //set data loading to false
        } catch (error) {
            console.log(error)
            setDataLoading(false)
        }
    }

    React.useEffect(() => {
        getData()
    },[])
    const datas = data.map((item) => {
        return {label: item.title, value: item.title}
    })

    const [value, setValue] = useState(null)
    const [isFocus, setIsFocus] = useState(false)

    const render = () => {
        if (value || isFocus) {}
        return null
    }

    return (
        <View>
            {render()}
            <Dropdown
                className="w-80 h-10 mb-7 px-3 bg-slate-200 rounded-md border-2 border-slate-700"
                data={data}
                labelField="label"
                maxHeight={200}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setValue(item.value)
                    setIsFocus(false)
                }}
                onFocus={() => setIsFocus(true)}
                placeholder={!isFocus ? 'Category' : '...'}
                search
                searchPlaceholder="Search..."
                value={value}
                valueField="value"
            />
        </View>
    )
}