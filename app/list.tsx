import { Stack } from 'expo-router';
import { memo, useCallback, useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ListItem from 'src/components/ListItem';
import Title from 'src/components/title';
import { useGetQuiz } from 'src/hooks/useGetQuiz';

function ListScreen() {
    const [page, setPage] = useState(0);
    const {data, loading,lastPage} = useGetQuiz({page});

    const onEndReached = useCallback(() => {
        if(data){
            if(lastPage > page){
                setPage(prev => prev + 1)     
            }
        }
    },[data,page]);

    return(
        <SafeAreaView style={{flex:1}}>
            <Stack.Screen options={{title: 'Quizzes', headerLeft: () => <ActivityIndicator animating={loading} />}} />
            <Title title={'List of Item page'} />
            <FlatList keyExtractor={(item, index) => item.Id} onEndReachedThreshold={0.2} onEndReached={onEndReached} data={data} renderItem={({item}) => <ListItem item={item} />} />
        </SafeAreaView>
    ); 
}


export default memo(ListScreen);