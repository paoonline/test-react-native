import counterReducer, {
    CounterState,
    increment,
    decrement,
    incrementByAmount,
    fetchCounter
  } from './home_logic';
  import axios from 'axios';
import { configureStore } from '@reduxjs/toolkit';


jest.mock('axios');


  describe("fetchVersion", () => {
    describe("when API call is successful", () => {
      it("should return version list", async () => {
        const postSpy = jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: { "version": "3.9.0000000" } });
        const store = configureStore({
          reducer: function (state = '', action) {
            switch (action.type) {
              case 'counter/fetchCounter/fulfilled':
                return action.payload;
              default:
                return state;
            }
          },
        });
        await store.dispatch(fetchCounter());
        const state = store.getState();
        expect(postSpy).toBeCalledWith('https://www.bitkub.com/static/version.json');
        expect(state.version).toEqual('3.9.0000000')
      });
    });
  })

  describe('counter reducer', () => {
    const initialState: CounterState = {
      value: 3,
      loading: false,
      data:{
        version: '0',
      }
    };
    it('should handle initial state', () => {
        expect(counterReducer(initialState, { type: 'unknown' })).toEqual({
          value: 3,
          loading:false,
          data:{
            version: '0',
          }
        });
      });
    
    it('should handle increment', () => {
        const actual = counterReducer(initialState, increment());
        expect(actual.value).toEqual(4);
    });

    it('should handle decrement', () => {
        const actual = counterReducer(initialState, decrement());
        expect(actual.value).toEqual(2);
    });

    it('should handle incrementByAmount', () => {
        const actual = counterReducer(initialState, incrementByAmount(2));
        expect(actual.value).toEqual(5);
    });

  })