import * as React from "react"

import { NavigationContainer } from "@react-navigation/native"

import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { Ionicons } from "@expo/vector-icons"

//auth screen
import Landing from "./src/screens/landing"
import Login from "./src/screens/auth/login"
import Register from "./src/screens/auth/register"

//home screen
import AddCategory from "./src/screens/addcategory"
import AddList from "./src/screens/addlist"
import DetailList from "./src/screens/detaillist"
import Home from "./src/screens/home"
import Todo from "./src/screens/Todo"

let Stack = createStackNavigator()
let Tab = createBottomTabNavigator()

function BottomTab() {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                headerShown: false,

                tabBarIcon: ({focused}) => {
                    let iconName
                    
                    if(route.name == "Todo"){
                        iconName = focused ? "journal" : "journal-outline"
                    } else if(route.name == "Add Category"){
                        iconName = focused ? "bookmarks" : "bookmarks-outline" 
                    } else if(route.name == "Add List"){
                        iconName = focused ? "list" : "list-outline"
                    }

                    return <Ionicons name={iconName} size={20} color="red" />
                },
                tabBarActiveTintColor: "red",
                tabBarInactiveTintColor: "grey"
            })}
        >
            <Tab.Screen name="Todo" component={Todo} />
            <Tab.Screen name="Add Category" component={AddCategory} />
            <Tab.Screen name="Add List" component={AddList} />
        </Tab.Navigator>
    )
}

export default function Container() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Landing"
                screenOptions={{
                    headerMode: 'screen',
                    headerTintColor: 'white',
                }}
            >
                {/* auth screen */}
                <Stack.Screen name="Landing" component={Landing} options={{title: 'Landing Home'}} />
                <Stack.Screen name="Login" component={Login} options={{title: 'Login'}} />
                <Stack.Screen name="Register" component={Register} options={{title: 'Register'}} />
                <Stack.Screen name="Detail List" component={DetailList} />

                {/* home screen */}
                <Stack.Screen name="Home" component={Home} options={{title: 'Home'}} />
                <Stack.Screen 
                    name="Todolist"
                    component={BottomTab}
                    options={{
                        headerShown: false,
                        headerTintColor: "white",
                        headerMode: 'screen'
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}