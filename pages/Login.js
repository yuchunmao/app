import React from 'react'
import {
    AsyncStorage,
    View
} from 'react-native'

import {InputItem, List, Button, WhiteSpace, WingBlank} from '@ant-design/react-native'

class Login extends React.Component {
    login = () => {
        AsyncStorage.setItem('account', this.state.account)
        this.setState({account: 'admin'})
        this.props.navigation.navigate('index')


    }

    constructor(props) {
        super(props);
        this.state = {
            account: '',
            password: '',
        };

    }

    render() {
        return (<View>
            <List>
                <InputItem
                    value={this.state.account}
                    onChange={account => {
                        this.setState({
                            account,
                        });
                    }}>账号</InputItem>
                <InputItem
                    type="password"
                    value={this.state.password}
                    onChange={password => {
                        this.setState({
                            password,
                        });
                    }}>密码</InputItem>
            </List>

            {/* 上下留白 */}
            <WhiteSpace size="lg"/>

            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                <Button type="primary" onPress={this.login}>登录</Button>
            </View>
        </View>)
    }
}

export default Login