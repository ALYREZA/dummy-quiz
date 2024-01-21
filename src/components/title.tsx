import { StyleSheet, Text, View } from 'react-native';

function Title({title, subTitle=''}) {


    return(
    <View style={styles.wrapper}>
        <Text style={styles.title}>{title}</Text>
        {subTitle && <Text>{subTitle}</Text>}
    </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 12
    },
    title: {
        paddingHorizontal: 12,
        marginVertical: 8,
        fontSize: 22
    }
});

export default Title;