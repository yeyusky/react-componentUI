import React from 'react';
import './button.css'

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

    handleClick = () => {
        if(!this.props.onClick) return;
        this.props.onClick();
    }

    render() {
        const btnClassName = `btn${this.props.type ? ' btn_'+this.props.type : ''}${this.props.size ? ' btn_'+this.props.size : ''}${this.props.disabled ? ' btn_disabled' : ''}${this.props.circle && this.props.title.length === 1 ? ' btn_circle' : ''}`;
        return ( 
            <button disabled={this.props.disabled === 'disabled'? 'disabled' : false} className={btnClassName} title={this.props.title} onClick={this.handleClick}><span>{this.props.title}</span></button>
        )
    }
}