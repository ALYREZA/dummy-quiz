import { memo, useCallback, useRef, useState } from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';

const openHeight = 110;
const closeHeight = 60

function ListItem({item}) {
    const [isOpen, setIsOpen] = useState(false);
    const heightRef = useRef(new Animated.Value(isOpen ? openHeight : closeHeight)).current;

    const toggle = useCallback(() => {
        const toValue = isOpen ? closeHeight : openHeight;
        Animated.timing(heightRef,{      
            toValue,
            duration: 600,
            useNativeDriver: false,
        }).start();
        setIsOpen(!isOpen);
    },[isOpen])

    return(
    <Pressable onPress={toggle}>
        <Animated.View style={[styles.animatedWrapper,{height: heightRef}]}>
            <View style={styles.staticWrapper}>
                <Text style={styles.title}>{item?.API}</Text>
            </View>
            <View style={{top: closeHeight + 1, position: 'absolute'}}>
                <Text numberOfLines={2}>{item?.Description}</Text>
                <Text numberOfLines={1}>{item?.Id}</Text>
            </View>
        </Animated.View>
    </Pressable>
    );
}

const styles = StyleSheet.create({
    animatedWrapper: {
        backgroundColor: 'white', borderRadius: 10, marginHorizontal: 12, marginBottom: 8, overflow: 'hidden', position: 'relative'
    },
    staticWrapper: {
        justifyContent: 'center', 
        paddingHorizontal: 12
    },
    title: {
        paddingTop: 12, fontSize: 22, fontWeight: 'bold'
    }
});

export default memo(ListItem);