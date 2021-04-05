import React from 'react'
import { Task } from '../Task/Task'
import './Tasklist.css'

export class Tasklist extends React.Component{
    render(){
        return(
            <div>
                <div className='tasklist'>
                {this.props.tasks.map(task => {return <Task key={task.id} taskInfo={task.info} taskId={task.id} taskDone={task.done} 
                onClick={this.props.onClick}/> })}
                </div>
            </div>
        )
    }
}