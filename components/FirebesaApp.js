import React, { Component } from 'react'
import { Text } from 'react-native'
import firestore from '@react-native-firebase/firestore'

export class App extends Component {

    constructor(props){
        super(props)
        this.getUser()
        this.state = {name:" "}
    }

    getUser = async ()=> {
        const userDocument = await firestore().collection('users').doc('Atbhp4fIfFRaFhmqVSSQ').get()
        //console.log(userDocument._data.name) //linha da tabela = Document
        this.setState({name:userDocument._data.name})
    }

    render() {
        return (
        <View style={{backgrondColor:'yellow',justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize:25}}>
           {this.state.name}
            </Text>
        </View>
        )
    }
}   

export default App
