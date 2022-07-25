import React, { FC, useEffect} from "react";
import { View, Text, Button } from "react-native";
import { useAppSelector, useAppDispatch } from '../../store/hook'
import { fetchMarket} from './market_logic'

export const MarketScreen: FC<any> = props => {

  const loading = useAppSelector(state => state.market.loading)
  const result = useAppSelector(state => state.market.result)
  const dispatch = useAppDispatch()

  useEffect(() => {

     result === null && dispatch((fetchMarket()))
     console.log('loading', loading)
  }, [loading])

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{loading ? 'loading': 'MarketScreen'}</Text>
      </View>
    );
  }