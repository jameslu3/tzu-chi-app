import { View, ScrollView, Text, SafeAreaView } from 'react-native';
import { useState } from 'react';
import { Stack, useRouter } from 'expo-router';

// import { COLORS, icons, images, SIZES } from '../constants';

const Home = () => {
    const router = useRouter();

    return (
    <SafeAreaView>
        <Text>Hey I'm testing here!</Text>
    </SafeAreaView>
    )
}

export default Home;
