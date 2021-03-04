import React, { Component } from 'react';
import './todolist.css'

class ToDoListComponent extends Component {
    state = { 
        addTask : '',
        toDoListItems : []
     }
     addToDoTask = () =>
     {
        if(this.state.addTask === '')
        {
            alert('Please Enter Task')
        }
        else
        {
            // alert(this.state.addTask)
            let listArr = [...this.state.toDoListItems]
            listArr.push({taskName : this.state.addTask, completed : false})

            this.setState({
                toDoListItems : listArr
            })
        }

     }
     getToDo = (getData) =>
     {
         this.setState({
             addTask : getData
         })
     }
     taskDelete = (index) =>
     {
        let confirmAlert = window.confirm('Are you sure you want to delete ?')
        if(confirmAlert){
            let listArr = [...this.state.toDoListItems]
            listArr.splice(index,1)
            this.setState({
            toDoListItems : listArr
            })
        }
     }
     taskComplete = (index) =>
     {

        let listArr = [...this.state.toDoListItems]
        listArr[index].completed = !listArr[index].completed 



        this.setState({
            toDoListItems : listArr
        })
     }


    render() { 
        return ( 
            <div className="todoContainer">
                <div className="todoTitle">
                    To Do List 

                    ({this.state.toDoListItems.length})


                </div>
                <div className="todoInput" >
                    <input type="text"  className="inputText" onChange={e => this.getToDo(e.target.value)} placeholder="Enter To Do"></input>
                    <input type="button" className="inputButton" onClick={this.addToDoTask} value="Add"/>
                </div>
                <div className="listContainer">
                    {this.state.toDoListItems.map((e,i)=>
                    
                    <div key={i} className="list">
                          <span className={e.completed ? 'strikeCompleted' : ''}>{e.taskName}</span> 
                    <div className="listButtons">
                        <input type="button"  className={ e.completed ? 'btnClass undoClass' : 'btnClass completedClass'} onClick={e => this.taskComplete(i)} value={e.completed ? 'Undo' : 'Complete'}></input>
                        <input type="button" className="btnClass deletedClass"  onClick={e => this.taskDelete(i)} value="Deleted"></input>
                    </div>
                    </div>
                    
                    )}
                    
                </div>
            </div>
         );
    }
}
export default ToDoListComponent;