import { Stack } from 'expo-router';
import { Text, View } from 'react-native';

function Login() {

    return (
        <View>
            <Stack.Screen options={{title: "Login"}} />
            <Text>Login page</Text>
        </View>
    );

}

export default Login