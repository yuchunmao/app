/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'

// 路由的使用步骤
// (1)创建组件类，并引入
import Login from './pages/Login'
import index from './pages/index'
import keep from './pages/KeepingAccounts'
// (2)配置路由
import {createStackNavigator, createAppContainer} from 'react-navigation'


// 路由标记名称 : {screen: 对应的页面组件}
const stackNavigator = createStackNavigator({
  index: {screen: index},
  log: {screen: Login},
  keep:{screen: keep},

}, {
  headerLayoutPreset: 'center'
})
// 将创建的创建组件由createAppContainer包裹
const RNRoute=createAppContainer(stackNavigator);

export default RNRoute;
