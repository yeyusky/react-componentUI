import React from 'react';
import logo from './logo.svg';
import Button from '../buttons/button';
import Dialog from '../dialog/dialog';
import './clock.css'

export default class Clock extends React.Component{
    constructor(props) {
        super(props);
        this.state = {time: new Date(),visable:false}
    }

    componentDidMount() {
        this.clockStart = setInterval(() => this.tick(),1000)
    }
  
    componentWillUnmount() {
        clearInterval(this.clockStart)
    }

    tick() {
        this.setState({
            time: new Date()
        })
    }
    alerts() {
        this.setState({
            visable:true
        })
    }
    closeFun() {
        this.setState({
            visable:false
        })
    }
    handleClickOk() {
        this.setState({
            visable:false
        })
    }
    render() {
        return ( 
            <div className='clockBox'>
                <h1 className='clockTitle'>Hello, world!</h1>
                <h2 className='clockContent'>北京时间 {this.state.time.toLocaleTimeString()}</h2>
                <div style={{display:'flex',flex:1,justifyContent:'center',alignItems:'center',margin:'15px 0'}}>
                    <Button title='圆' disabled='disabled' circle='circle' type='primary' size='large'></Button>
                    <Button title='圆' circle='circle' type='success' size='small'></Button>
                    <Button title='D' disabled='disabled' circle='circle' type='' size='mini'></Button>
                    <Button title='圆' disabled='disabled' circle='circle' type='warning' size='medium'></Button>
                    <Button title='C' circle='circle' type='danger' size='small'></Button>
                    <Button title='圆' circle='circle'></Button>
                    <Button title='A' onClick={() => this.alerts()} circle='circle' type='danger' size='small'></Button>
                    <Button title='按钮' type='primary' size='large'></Button>
                    <Button title='按钮' type='success' size='small'></Button>
                    <Button title='钮'  circle='circle' type='' size='mini'></Button>
                    <Button title='按钮' disabled='disabled' type='warning' size='medium'></Button>
                    <Button title='C' type='danger' size='small'></Button>
                    <Button title='圆' type='primary'></Button>
                    <Button title='A' onClick={() => this.alerts()}  type='danger' size='small'></Button>
                    <Dialog width='80%' height='400px' btnAlign='center' onClose={() => this.closeFun()} onOk={() => this.handleClickOk()} title='按钮弹出层' mark='true' visable={this.state.visable}>
                        <div style={{padding:'10px'}}><input value='这是一个测试' style={{width:'200px',height:'60px'}}></input><Button title='按钮' type='primary' size='large'></Button>
                        <Button title='按钮' type='success' size='small'></Button>
                        <Button title='钮'  circle='circle' type='' size='mini'></Button>
                        <Button title='按钮' disabled='disabled' type='warning' size='medium'></Button></div>
                    </Dialog>
                </div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
            </div>
        )
    }
}