import { router, Stack, useFocusEffect } from 'expo-router';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

function SplashScreen() {
    const onFocused = ()=>{
        router.replace('/login');
    }
    useFocusEffect(onFocused);
    

    return (
        <View style={styles.wrapper}>
            <Stack.Screen options={{headerShown: false}} />
            <Text style={styles.title}>Dummy Quiz</Text>
            <ActivityIndicator size='small' />
        </View>
    );

}

const styles = StyleSheet.create({
    wrapper: {
        flex:1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 12
    }
});
export default SplashScreen