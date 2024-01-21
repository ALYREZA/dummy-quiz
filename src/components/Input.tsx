import { Control, useController } from 'react-hook-form';
import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';

type InputProps = {label: string, name: string, control: Control, rules?: {}} & TextInputProps;

function Input({label, name, control,rules, ...props}:InputProps) {
    const {field, fieldState: {error}} = useController({
        name,
        control,
        defaultValue: ''
    });

    return(
        <View style={styles.wrapper}>
            <Text style={styles.label}>{label}</Text>
            <TextInput {...props} style={styles.input} value={field.value} onChangeText={field.onChange} onBlur={field.onBlur} ref={field.ref} />
            {error && <Text style={styles.errorText}>{error.message}</Text>}
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
    },
    errorText: {
        color: '#eb7272',
        fontSize: 12,
        paddingHorizontal: 12
    }
});
export default Input;