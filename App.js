import * as React from "react"

// import AppLoading from "expo-app-loading"

import { View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import Container from './container';

//test
// import Home from "./src/screens/home"

export default function App() {
  return (
    <TailwindProvider>
      <Container />
    </TailwindProvider>
  );
}
