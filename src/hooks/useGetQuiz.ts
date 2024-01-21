import 'react-native-get-random-values';

import { useFocusEffect } from 'expo-router';
import chunk from 'lodash.chunk';
import { nanoid } from 'nanoid';
import { useCallback, useEffect, useRef, useState } from 'react';

 export function useGetQuiz({perPage=30, page = 1}) {
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(true);
    const chunked_arr = chunk(result, perPage);
    const [paginated, loadNextPage] = useState([]);
    const chunkedArr = chunk(result, perPage);
    const hasNextPage = (chunkedArr.length - 1) >= page;
    const lastPage = chunkedArr.length - 1 ;
    useFocusEffect(
            useCallback(() => {
                fetch('https://api.publicapis.org/entries?category=Geocoding',{headers: { 'Content-Type': 'application/json' },}).then(res => res.json()).then((res) => {
                    const data =  res.entries;
                    const modifyData = data.map((item) => ({...item, Id: nanoid()}))
                    setResult(modifyData);
                }).finally(() => {setLoading(false)});
            },[perPage])
    );

    useEffect(() => {
        if (result.length > 0) {
            loadNextPage(chunkedArr[0]);
        }
    },[result]);
    
    useEffect(() => {

        if(chunked_arr?.length > 0) {
            if(hasNextPage && chunked_arr?.[page]){
 
                loadNextPage((prev) => [...prev, ...chunked_arr[page] ])
            }
            
        }
    },[page])


    return {data:paginated, loading,lastPage }
}
