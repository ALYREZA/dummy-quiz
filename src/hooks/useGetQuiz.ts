import { useFocusEffect } from 'expo-router';
import chunk from 'lodash.chunk';
import { useCallback, useEffect, useState } from 'react';

 export function useGetQuiz({perPage=30, page = 1}) {
    const [result, setResult] = useState()
    const [loading, setLoading] = useState(false);
    const [chunked, addChunk] = useState([])
    useFocusEffect(
            useCallback(() => {
                setLoading(true)
                fetch('https://api.publicapis.org/entries',{headers: { 'Content-Type': 'application/json' },}).then(res => res.json()).then((res) => {
                    const data =  res.entries;
                    const chunked_arr = chunk(data, perPage);
                    setResult(chunked_arr);
                    addChunk(chunked_arr[0])
                }).finally(() => {setLoading(false)});
            },[perPage])
    );
    
    useEffect(() => {
        if(page > 1 && result){
            addChunk((prev) => [...prev ,...result[page] ])
        }
    },[page,result])


    return {data:chunked, loading}
}
