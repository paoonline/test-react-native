import axios from 'axios';
import  { useEffect, useState } from "react";
import {
    useColorScheme,
  } from 'react-native';

enum requestType {
    get = 'get',
    post = 'post'
  }

interface axiosProps  {
  url: 'string',
  payload?: any,
  type: requestType
}

interface axiosReturn {
  data: any,
  error: string,
  loaded: boolean
}

export const checkTheme = ():boolean => {
    const isDarkMode = useColorScheme() == 'dark';
    return isDarkMode
} 

 export const useAxios = (props:axiosProps): axiosReturn => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        let response
        if(props.type === 'get') {
          response = await axios.get(
            props.url,
          );
        } else {
          response = await axios.post(
            props.url,
            props.payload
          );
        }
        setData(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoaded(true);
      }
    })();
  }, []);
  return { data, error, loaded };
};
