import { router, Stack } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';
import Input from 'src/components/Input';

function Register() {

    const navigateToLogin = () => {
        router.push("/login");
    }
    const onSend = () => {
        
    }

return (
    <View style={styles.wrapper}>
    <Stack.Screen options={{title: "Register", headerBackVisible:false,headerRight:(props) => <Button title='Login' onPress={navigateToLogin} />}} />
    <Text style={styles.title}>Register page</Text>
    <Input label="first name" onChange={console.log} />
    <Input label="last name" onChange={console.log} />
    <Input label="age" keyboardType='number-pad' onChange={console.log} />
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

export default Register