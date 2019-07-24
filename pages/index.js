import React from 'react'
import {
    View,
    Image,
    StyleSheet,
    Text,
    AsyncStorage,
} from 'react-native'


import {InputItem, List, Button, WhiteSpace, WingBlank, Icon} from '@ant-design/react-native'

class index extends React.Component {
    constructor(props) {
        super(props);
        AsyncStorage.getItem('account').then(value => {
            console.log(value, 111)
            this.setState({
                account: value
            })
        })
        AsyncStorage.getItem('mes').then(value => {
            console.log(value, 222)
        })
        this.state = {account: ''}
        this.del = () => {
            AsyncStorage.removeItem('account')
            this.setState({
                account: ''
            })
        }
    }

    render() {
        return (<View>
                <View style={style.view1}>
                    <Image style={style.pic} source={require('../img/1.jpg')}></Image>
                    {this.state.account ? <Text>{this.state.account}</Text> :
                        <Text onPress={() => this.props.navigation.navigate('log')}>点击登录</Text>}
                </View>
                <View style={style.view2}>
                    <View style={style.view3}>
                        <View style={style.view4}
                              onStartShouldSetResponder={() => this.props.navigation.navigate('keep')}>
                            <Icon name="edit" style={style.icon1}/>
                            <Text style={style.text1}>记账</Text>
                        </View>
                        <View style={style.view4}>
                            <Icon name="transaction" style={style.icon1}/>
                            <Text style={style.text1}>查看流水</Text>
                        </View>
                    </View>
                    <View style={style.view3}>
                        <View style={style.view4}>
                            <Icon name="snippets" style={style.icon1}/>
                            <Text style={style.text1}>分析报告</Text>
                        </View>
                        <View style={style.view4} onStartShouldSetResponder={this.del}>
                            <Icon name="logout" style={style.icon1}/>
                            <Text style={style.text1}>退出</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    pic: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    view1: {
        position: 'relative',
        top: 20,
        flexDirection: 'column',
        alignItems: 'center'
    },
    icon1: {
        fontSize: 80
    },
    text1: {
        fontSize: 20
    },
    view2: {
        position: 'absolute',
        left: 100,
        top: 120
    },
    view3: {
        flexDirection: 'row',
        paddingTop: 30,
        paddingBottom: 30
    },
    view4: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingLeft: 30,
        paddingRight: 30,
    }
})

export default index