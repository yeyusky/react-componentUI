import React from 'react';
import './dialog.css';
import Button from '../buttons/button';

export default class Clock extends React.Component{
    constructor(props) {
        super(props);
        this.state = {}
    }
       
    // componentDidMount() {
    //     this.clockStart = setInterval(() => this.tick(),1000)
    // }
  
    // componentWillUnmount() {
    //     clearInterval(this.clockStart)
    // }

    handleClickClose = () => {
        if(!this.props.onClose) return;
        this.props.onClose();
    }
    handleClickOK= () => {
        if(!this.props.onOk) return;
        this.props.onOk();
    }
    verifyFun = (val) => {
        let w = document.body.clientWidth;
        let h = document.body.clientHeight;
        if(this.props.height && val === 'h') {
            if(this.props.height.indexOf('px')){
                if(h-Number(this.props.height.split('px')[0]) < 0) {
                    return '100%'
                }else{
                    return this.props.height
                }
            }else if(this.props.height.indexOf('%')){
                if(Number(this.props.height.split('%')[0]) - 100 >0) {
                    return '100%'
                }else{
                    return this.props.height
                }
            } 
        }
        if(this.props.width && val === 'w') {
            if(this.props.width.indexOf('px')){
                if(w-Number(this.props.width.split('px')[0]) < 0) {
                    return '100%'
                }else{
                    return this.props.width
                }
            }else if(this.props.width.indexOf('%')){
                if(Number(this.props.width.split('%')[0]) - 100 >0) {
                    return '100%'
                }else{
                    return this.props.width
                }
            } 
        }
    }
    render() {
        const height = this.verifyFun('h');
        const width = this.verifyFun('w');
        // const btnClassName = `btn${this.props.type ? ' btn_'+this.props.type : ''}${this.props.size ? ' btn_'+this.props.size : ''}${this.props.disabled ? ' btn_disabled' : ''}${this.props.circle && this.props.title.length === 1 ? ' btn_circle' : ''}`;
        return ( 
            <div>
                <div className='dialog' style={{display:this.props.visable&&this.props.type==='1'?'block':'none',borderRadius:height==='100%'&&width==='100%'?'0':'10px',opacity:this.props.visable ? '1' : '0',top:this.props.height ? 'calc((100% - '+height+')/2)' : '50px',left:this.props.width ? 'calc((100% - '+width+')/2)' : '25%',height:this.props.height ? this.props.visable ? height : '0px' : this.props.visable ? '300px' : '0px',width:this.props.width ? width : '50%'}}>
                    <div className='dialog-title'>{this.props.title?this.props.title:'标题'}<div className='closeBtn' onClick={this.handleClickClose} >X</div></div>
                    <div className='dialog-content'>
                        {this.props.children}
                    </div>
                    <div className='dialog-footer'>
                        <div className='dialog-btnBox' style={{textAlign:this.props.btnAlign ? this.props.btnAlign : 'center'}}>
                            <Button title='取消' size='small' onClick={this.handleClickClose}></Button>
                            <Button title='确定' size='small' type='primary' onClick={this.handleClickOK}></Button>
                        </div>
                    </div>
                </div>
                <div className='dialog' style={{display:this.props.visable&&this.props.type==='2'?'block':'none',opacity:this.props.visable ? '1' : '0',top:'50px',left:'calc((100% - 320px)/2)',minHeight:'220px',width:'320px'}}>
                    <div className='dialog-title'>{this.props.title?this.props.title:'提示'}<div className='closeBtn' onClick={this.handleClickClose} >X</div></div>
                    <div className='dialog-content'>
                        {this.props.children}
                    </div>
                    <div className='dialog-footer'>
                        <div className='dialog-btnBox' style={{textAlign:this.props.btnAlign ? this.props.btnAlign : 'center'}}>
                            <Button title='取消' size='small' onClick={this.handleClickClose}></Button>
                            <Button title='确定' size='small' type='primary' onClick={this.handleClickOK}></Button>
                        </div>
                    </div>
                </div>
                <div className='marks' style={{display:this.props.visable ? this.props.mark?'block':'none' : 'none'}}></div>
            </div>
        )
    }
}