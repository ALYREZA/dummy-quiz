import { router, Stack } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';
import Input from 'src/components/Input';

function Login() {
    const navigateToRegister = () => {
        router.push("/register");
    }
    const onSend = () => {
        router.replace('/list')
    }
    return (
        <View style={styles.wrapper}>
            <Stack.Screen options={{title: "Login", headerRight:(props) => <Button title='Register' onPress={navigateToRegister} />}} />
            <Text style={styles.title}>Login page</Text>
            <Input label="username" onChange={console.log} />
            <Input secureTextEntry label="password" onChange={console.log} />
            <Button title='Send' onPress={onSend} />
        </View>
    );

}
const styles = StyleSheet.create({
    wrapper: {
        marginTop: 12
    },
    title: {
        paddingHorizontal: 12,
        marginVertical: 8,
        fontSize: 22
    }
});
export default Login