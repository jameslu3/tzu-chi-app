import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Nearbyjobs" component={Nearbyjobs} />
        <Stack.Screen name="Popularjobs" component={Popularjobs} />
        <Stack.Screen name="Company" component={Company} />
        <Stack.Screen name="JobTabs" component={JobTabs} />
        <Stack.Screen name="JobAbout" component={JobAbout} />
        <Stack.Screen name="JobFooter" component={JobFooter} />
        <Stack.Screen name="Specifics" component={Specifics} />
        <Stack.Screen name="NearbyJobCard" component={NearbyJobCard} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}