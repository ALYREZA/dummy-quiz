import { router, Stack } from 'expo-router';
import { setItemAsync } from 'expo-secure-store';
import { useForm } from 'react-hook-form';
import { Button, StyleSheet, Text, View } from 'react-native';
import Input from 'src/components/Input';
import Title from 'src/components/title';
import * as z from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';

async function saveToken(value) {
    await setItemAsync("Token", value);
  }
function Login() {

    const schema = z.object({
        username: z.string().min(3),
        password: z.string().min(6),
      });

    const {control, handleSubmit,setError, formState: {errors}} = useForm({mode: 'onBlur', resolver: zodResolver(schema)})

    const navigateToRegister = () => {
        router.push("/register");
    }
    const onSend = (data) => {
        fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then((res) => {
        if(res?.message){
            setError("root.login", {type: 'custom',message: res.message})
        }else if(res.token) {
            saveToken(res.token).then(() => {
                router.push("/list");
            });
        }
        
        })
        .catch((error) => {
            setError("root.login", {type:"custom", message: 'please try again'})
        });
    }


    return (
        <View style={styles.wrapper}>
            <Stack.Screen options={{title: "Login", headerRight:(props) => <Button title='Register' onPress={navigateToRegister} />}} />
            <Title title={'Login page'} />
            <Input name='username' control={control} label="username" />
            <Input name='password' control={control} secureTextEntry label="password" />
            <Button title='Send' onPress={handleSubmit(onSend)} />
            {errors?.root?.login && <Text style={{textAlign: 'center', color: 'red'}}>{errors.root.login.message}</Text>}
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