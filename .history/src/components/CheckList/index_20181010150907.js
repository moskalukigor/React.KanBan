import React, {Component} from 'react'
import PropTypes from 'prop-types'

class CheckList extends Component
{
    checkInputKeyPress(evt)
    {
        if(evt.key === "Enter")
        {
            this.props.taskCallbacks.add(this.props.cardId, evt.target.value);
            evt.target.value = '';
        }
    }
    render(){
        let tasks = this.props.tasks.map((task) => (
            <li key={task.id} className="checklist__task">
                <input type="checkbox" defaultChecked={task.done}/>
                {task.name}
                <a href="#" className="checklist__task--remove"/>
            </li>
        ))
        return(
            <div className="checklist">
                <ul>{tasks}</ul>
                <input type="text"
                       className="checklist--add-task"
                       placeholder="Type text" 
                       onKeyPress={this.checkInputKeyPress.bind(this)}       
                />
            </div>
        )
    }
}

CheckList.propTypes = {
    cardId: PropTypes.number,
    tasks: PropTypes.arrayOf(PropTypes.object),
    taskCallbacks: PropTypes.object,
}

export default CheckList