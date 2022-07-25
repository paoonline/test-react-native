import React, { FC, useEffect} from "react";
import { View, Text, Button } from "react-native";
import { useAppSelector, useAppDispatch } from '../../store/hook'
import { decrement, increment, fetchCounter } from "./home_logic";

export const HomeScreen: FC<any> = props => {

  const count = useAppSelector(state => state.counter.value)
  const loading = useAppSelector(state => state.counter.loading)
  const dispatch = useAppDispatch()

  useEffect(() => {
  }, [loading])
 
    useEffect(() => {
      dispatch((fetchCounter()))
    
    }, [count])
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => props.navigation.navigate('Market')} title="test"/>
        <Button onPress={() => dispatch(decrement())} title="decrement"/>
        <Button onPress={() => dispatch(increment())} title="increment"/>
        <Button onPress={() =>  dispatch((fetchCounter()))} title="fetchUsers"/>
        <Text>Home Screen</Text>
      </View>
    );
  }