import { router, Stack } from 'expo-router';
import { useForm } from 'react-hook-form';
import { Button, StyleSheet, Text, View } from 'react-native';
import Input from 'src/components/Input';
import Title from 'src/components/title';
import * as z from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';

function Register() {

    const schema = z.object({
        firstName: z.string().min(3),
        lastName: z.string().min(3),
        password: z.string().min(6),
        age: z.coerce.number().min(7).max(18),
      });

    const {control, handleSubmit, setError, formState: {errors}} = useForm({mode: 'onChange', resolver: zodResolver(schema)});


    const navigateToLogin = () => {
        router.push("/login");
    }
    const onSend = (data) => {
        fetch('https://dummyjson.com/users/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
          })
          .then(res => res.json())
          .then(() => {
            setError('root.register',{type: 'custom', message: 'successfully created but Adding a new user will not add it into the server. '})
          })
          .catch(() => {
            setError('root.register',{type: 'custom', message: 'please try again'})
          });
    }

return (
    <View style={styles.wrapper}>
    <Stack.Screen options={{title: "Register", headerBackVisible:false,headerRight:(props) => <Button title='Login' onPress={navigateToLogin} />}} />
    <Title title={'Register page'} />
    <Input name='firstName' control={control} label="first name" />
    <Input name='lastName' control={control} label="last name" />
    <Input name='age' control={control} label="age" keyboardType='number-pad' />
    <Input name='password' control={control} secureTextEntry label="password" />
    <Button title='Send' onPress={handleSubmit(onSend)} />
    {errors?.root?.register && <Text style={{textAlign: 'center'}}>{errors.root.register.message}</Text>}

</View>
);

}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 12
    },

});

export default Register