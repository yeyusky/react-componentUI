import React from 'react';
import logo from './logo.svg';
import Button from '../buttons/button';
import Dialog from '../dialog/dialog';
import './clock.css'

export default class Clock extends React.Component{
    constructor(props) {
        super(props);
        this.state = {time: new Date(),visable:false,visables:false}
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
    open() {
        this.setState({
            visable:true
        })
    }
    opens() {
        this.setState({
            visables:true
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
                    <Button title='Dialog按钮' onClick={() => this.open()}  type='primary' size='small'></Button>
                    <Button title='Dialog按钮' onClick={() => this.opens()}  type='primary' size='small'></Button>
                    <Dialog width='90%' type='1' height='80%' btnAlign='center' onClose={() => this.closeFun()} onOk={() => this.handleClickOk()} title='按钮弹出层' mark='true' visable={this.state.visable}>
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
                        <Button title='A'   type='danger' size='small'></Button>
                    </Dialog>
                    <Dialog  type='2' btnAlign='center' onClose={() => this.closeFun()} onOk={() => this.handleClickOk()} title='按钮弹出层' mark='true' visable={this.state.visables}>
                        这是一个提示
                    </Dialog>
                </div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
            </div>
        )
    }
}