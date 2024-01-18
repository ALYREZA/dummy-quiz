import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';

type InputProps = {label: string} & TextInputProps;

function Input({label, ...props}:InputProps) {


    return(
        <View style={styles.wrapper}>
            <Text style={styles.label}>{label}</Text>
            <TextInput {...props} style={styles.input} />
        </View>
    );

}

const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: 12,
        marginVertical: 8
    },
    label: {
        paddingHorizontal: 8,
        marginBottom: 2
    },
    input: {
        paddingHorizontal: 8,
        height: 35,
        width: "100%",
        backgroundColor: 'white',
        borderRadius: 8,
        borderWidth:1,
        borderColor: '#bbb'
    }
});
export default Input;