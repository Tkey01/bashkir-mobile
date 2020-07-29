import React from 'react'
import { connect } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { Settings, Favorites, Notes } from '../screens'
import { SideMenu } from '../components/SideMenu'
import { StackNavigator } from './StackNavigator'

const Drawer = createDrawerNavigator()

export const DrawerNavigatorComponent = () => (
  <NavigationContainer>
    <Drawer.Navigator
      overlayColor="rgba(0,0,0,0.6)"
      initialRouteName="StackNavigator"
      drawerPosition="right"
      drawerStyle={{
        width: '70%',
      }}
      drawerContent={(props) => <SideMenu {...props} />}
    >
      <Drawer.Screen
        name="StackNavigator"
        component={StackNavigator}
        options={{ title: 'Главная' }}
      />
      <Drawer.Screen
        name="Notes"
        component={Notes}
        options={{ title: 'Заметки' }}
      />
      <Drawer.Screen
        name="Favorites"
        component={Favorites}
        options={{ title: 'Избранное' }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{ title: 'Настройки' }}
      />
    </Drawer.Navigator>
  </NavigationContainer>
)

const mapStateToProps = (state, ownProps) => ({
  favorites: state.favorites,
  language: state.language,
})

const mapDispatchToProps = {}

export const DrawerNavigator = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DrawerNavigatorComponent)
