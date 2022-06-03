import { Task } from '../Task/Task';
import './Tasklist.css';

export const Tasklist = ({tasks, handleClick}) => {
    return(
        <div>
            <div className='tasklist'>
                {tasks ? 
                        tasks.map(task => 
                            <Task 
                                key={task.id} 
                                info={task.info} 
                                id={task.id} 
                                done={task.done} 
                                handleClick={handleClick}/>}) : 
                        'No tasks to display'
                    }
            </div>
        </div>
    )
}
