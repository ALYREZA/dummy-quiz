import { Stack } from 'expo-router';
import { memo, useCallback, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useGetQuiz } from 'src/hooks/useGetQuiz';

import { FlashList } from '@shopify/flash-list';

function ListScreen() {
    const perPage = 30
    const [page, setPage] = useState(1);
    const {data} = useGetQuiz({perPage,page});

    const renderItem = useCallback(({item}) => {
        return (
        <View style={{height: 80, backgroundColor: 'white', borderRadius: 10, marginHorizontal: 12, justifyContent: 'center', marginBottom: 8}}>
            <Text>{item?.API}</Text>
        </View>
        )
    },[page]);
    const onEndReached = () => {
        setPage(prev => prev+1);        
    }

    return(
        <SafeAreaView style={{flex:1}}>
            <Stack.Screen options={{title: 'Quizzes'}} />
            <Text>List Screen</Text>
            <View style={{flex:1}}>
                <FlashList onEndReachedThreshold={0.4} onEndReached={onEndReached} estimatedItemSize={perPage} data={data} renderItem={renderItem} />
            </View>
        </SafeAreaView>
    );
}


export default memo(ListScreen)