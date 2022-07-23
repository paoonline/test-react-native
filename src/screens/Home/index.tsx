import React, { FC } from "react";
import { View, Text } from "react-native";


export const  HomeScreen: FC<any> = props => {
    console.log(props)
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }