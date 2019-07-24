import React from 'react'
import {
    AsyncStorage,
    View,
    Text,
    StyleSheet,
} from 'react-native'

import {
    InputItem,
    List,
    Button,
    Provider,
    Icon,
    Tabs,
    Picker,
    DatePicker,
} from '@ant-design/react-native'


const data = [{label: '餐饮', value: '餐饮'}, {label: '购物', value: '购物'}, {label: '交通', value: '交通'}, {label: '通讯', value: '通讯'}, {label: '娱乐', value: '娱乐'}, {label: '其他', value: '其他'}];
const data2 = [{label: '工资', value: '工资'}, {label: '兼职', value: '兼职'}, {label: '娱乐', value: '娱乐'}, {label: '其他', value: '其他'}];
class keep extends React.Component {
    sure1 = () =>{
        this.state.obj.type = '支出';
        this.state.obj.class = this.state.value1;
        this.state.obj.date = this.state.value2.toLocaleDateString();
        this.state.obj.sum = this.state.value;
        this.state.obj.explain = this.state.value3;
        if (this.state.a){
            console.log('有记录')
            this.state.allMessage = this.state.a
            this.state.allMessage.push(this.state.obj)
        } else {
            console.log('没记录')
            this.state.allMessage.push(this.state.obj)
        }
        console.log(this.state.allMessage,'总信息')
        AsyncStorage.setItem('mes', JSON.stringify(this.state.allMessage))
        this.props.navigation.navigate('index')
    };
    sure2 = () =>{
        this.state.obj.type = '收入';
        this.state.obj.class = this.state.value4;
        this.state.obj.date = this.state.value5.toLocaleDateString();
        this.state.obj.sum = this.state.value6;
        this.state.obj.explain = this.state.value7;
        console.log(this.state.obj,'本次添加的信息')
        if (this.state.a){
            console.log('有记录')
            this.state.allMessage = this.state.a
            this.state.allMessage.push(this.state.obj)
        } else {
            console.log('没记录')
            this.state.allMessage.push(this.state.obj)
        }
        console.log(this.state.allMessage,'总信息')
        AsyncStorage.setItem('mes', JSON.stringify(this.state.allMessage))
        this.props.navigation.navigate('index')
    };
    constructor(props) {
        AsyncStorage.getItem('mes').then(value => {
            this.state.a = JSON.parse(value)
            console.log(this.state.a,'已经存储的信息')
            console.log(value,'已经存储的信息')
        })
        super(props);
        this.state = {
            a:'',
            allMessage:[],
            obj:{},
            value: '',
            data: [],
            value1: '',
            value2: undefined,
            value3: '',
            value4: '',
            value5: undefined,
            value6: '',
            value7: '',
        };
        this.onChange1 = value1 => {
            this.setState({value1});
        };
        this.onChange2 = value2 => {
            this.setState({value2});
        };
        this.onChange3 = value4 => {
            this.setState({value4});
        };
        this.onChange4 = value5 => {
            this.setState({value5});
        };
    }

    render() {
        const tabs = [
            {title: '支出'},
            {title: '收入'},
        ];
        const style = {
            alignItems: 'center',
            justifyContent: 'center',
            height: 150,
            backgroundColor: '#fff',
            marginTop: 100,
        };

        return (<Provider>

            <Tabs tabs={tabs}>
                <View style={style}>
                    <List style={{width: 400}} renderHeader={'支出'}>

                        <Picker
                            data={data}
                            cols={1}
                            value={this.state.value1}
                            onChange={this.onChange1}
                        >
                            <List.Item arrow="horizontal">
                                类别
                            </List.Item>
                        </Picker>
                        <DatePicker
                            value={this.state.value2}
                            mode="date"
                            minDate={new Date(2015, 7, 6)}
                            maxDate={new Date(2026, 11, 3)}
                            onChange={this.onChange2}
                            format="YYYY-MM-DD"
                        >
                            <List.Item arrow="horizontal">日期</List.Item>
                        </DatePicker>
                        <InputItem
                            clear
                            value={this.state.value}
                            onChange={value => {
                                this.setState({
                                    value,
                                });
                            }}
                            extra="元"
                        >
                            金额
                        </InputItem>
                        <InputItem
                            clear
                            value={this.state.value3}
                            onChange={value3 => {
                                this.setState({
                                    value3,
                                });
                            }}
                        >
                            说明
                        </InputItem>
                    </List>
                        <Button type="primary" onPress={this.sure1}>确定</Button>
                        <Button onPress={() => this.props.navigation.navigate('index')}>取消</Button>
                </View>
                <View style={style}>
                    <List style={{width: 400}} renderHeader={'收入'}>
                        <Picker
                            data={data2}
                            cols={1}
                            value={this.state.value4}
                            onChange={this.onChange3}
                        >
                            <List.Item arrow="horizontal">
                                类别
                            </List.Item>
                        </Picker>
                        <DatePicker
                            value={this.state.value5}
                            mode="date"
                            minDate={new Date(2015, 7, 6)}
                            maxDate={new Date(2026, 11, 3)}
                            onChange={this.onChange4}
                            format="YYYY-MM-DD"
                        >
                            <List.Item arrow="horizontal">日期</List.Item>
                        </DatePicker>
                        <InputItem
                            clear
                            value={this.state.value6}
                            onChange={value6 => {
                                this.setState({
                                    value6,
                                });
                            }}
                            extra="元"
                        >
                            金额
                        </InputItem>
                        <InputItem
                            clear
                            value={this.state.value7}
                            onChange={value7 => {
                                this.setState({
                                    value7,
                                });
                            }}
                        >
                            说明
                        </InputItem>
                    </List>
                        <Button type="primary"  style={styles.btn} onPress={this.sure2}>确定</Button>
                        <Button style={styles.btn} onPress={() => this.props.navigation.navigate('index')}>取消</Button>
                </View>
            </Tabs>
        </Provider>)

    }
}

const styles = StyleSheet.create({

})

export default keep


