import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import AllExpenses from './screen/AllExpenses';
import ManageExpenses from './screen/ManageExpenses';
import RecentExpenses from './screen/RecentExpenses';
import {GlobalStyles} from './constans/styles';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Icon} from '@rneui/themed';
import IconButton from './components/UI/IconButton';
import ExpensesContextProvider from './store/expenses-context';
import { storeExpense } from './util/http';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={({navigation}) => ({
        headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
        headerTintColor: 'white',
        tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: () => (
          <IconButton
          sign='+'
            onPress={() => {
              navigation.navigate('ManageExpense');

            }}></IconButton>
        ),
      })}>
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({color, size}) => {
            <Icon name="#" size={size} color={color}></Icon>;
          },
        }}></BottomTabs.Screen>
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'AllExpenses',
          tabBarIcon: ({color, size}) => {
            <Icon name="@" size={size} color={color}></Icon>;
          },
        }}></BottomTabs.Screen>
    </BottomTabs.Navigator>
  );
}
const App = () => {
  return (
      <>
        <StatusBar barStyle="light-content"></StatusBar>
        <ExpensesContextProvider>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
                headerTintColor: 'white',
              }}>
              <Stack.Screen
                options={{headerShown: false}}
                name="ExpensesOverview"
                component={ExpensesOverview}></Stack.Screen>
              <Stack.Screen
                name="ManageExpense"
                component={ManageExpenses}
                options={{
                  presentation: 'modal',
                }}></Stack.Screen>
            </Stack.Navigator>
          </NavigationContainer>
        </ExpensesContextProvider>
      </>
  );
};

const styles = StyleSheet.create({});

export default App;
