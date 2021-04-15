import React from 'react';
import './Task.css';

export class Task extends React.Component{
    constructor(props){
        super(props);
        this.removeTask = this.removeTask.bind(this);
    }

    removeTask(){
        this.props.onClick(this.props.taskId)
    }

    render(){
        return (
            <div className='task-container'>
                <div className='task'>{this.props.taskInfo}</div><button 
                onClick={this.removeTask} className='button remove-button'><i className="
                fa fa-trash icon"></i></button> 
            </div>
        )
    }
}