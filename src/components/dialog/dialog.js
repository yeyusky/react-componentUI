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
    render() {
        const height = ``
        // const btnClassName = `btn${this.props.type ? ' btn_'+this.props.type : ''}${this.props.size ? ' btn_'+this.props.size : ''}${this.props.disabled ? ' btn_disabled' : ''}${this.props.circle && this.props.title.length === 1 ? ' btn_circle' : ''}`;
        return ( 
            <div>
                <div className='dialog' style={{opacity:this.props.visable ? '1' : '0',top:this.props.height ? 'calc((100% - '+this.props.height+')/2)' : '50px',left:this.props.width ? 'calc((100% - '+this.props.width+')/2)' : '25%',height:this.props.height ? this.props.visable ? this.props.height : '0px' : this.props.visable ? '300px' : '0px',width:this.props.width ? this.props.width : '50%'}}>
                    <div className='dialog-title'>{this.props.title}<div className='closeBtn' onClick={this.handleClickClose} >X</div></div>
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