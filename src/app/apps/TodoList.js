import React, { Component } from 'react'

export class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            todos: [
                {
                    id: 1,
                    task: 'Pick up kids from school',
                    isCompleted: false
                },
                {
                    id: 2,
                    task: 'Prepare for presentation',
                    isCompleted: true
                },
                {
                    id: 3,
                    task: 'Print Statements',
                    isCompleted: false
                },
                {
                    id: 4,
                    task: 'Create invoice',
                    isCompleted: false
                },
                {
                    id: 5,
                    task: 'Call John',
                    isCompleted: true
                },
                {
                    id: 6,
                    task: 'Meeting with Alisa',
                    isCompleted: false
                }
            ],
            inputValue: '',
        }

        this.statusChangedHandler = this.statusChangedHandler.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
    }

    statusChangedHandler(event, id) {
        const todo = {...this.state.todos[id]};
        todo.isCompleted = event.target.checked;

        const todos = [...this.state.todos];
        todos[id] = todo;

        this.setState({
            todos: todos
        })
    }

    addTodo (event) {
        event.preventDefault();

        const todos = [...this.state.todos];
        todos.unshift({
            id: todos.length ? todos[todos.length - 1].id + 1 : 1,
            task: this.state.inputValue,
            isCompleted: false
            
        })

        this.setState({
            todos: todos,
            inputValue: ''
        })
    }

    removeTodo (index) {
        const todos = [...this.state.todos];
        todos.splice(index, 1);

        this.setState({
            todos: todos
        })
    }

    inputChangeHandler(event) {
        this.setState({
            inputValue: event.target.value
        });
    }

    render() {
        return (
            <div>
              <div className="row">
                  <div className="col-lg-12">
                      <div className="card px-3">
                          <div className="card-body">
                              <h4 className="card-title">Todo List</h4>
                              <form  className="add-items d-flex mt-0 justify-content-between align-items-center" onSubmit={this.addTodo}>
                                    <input 
                                        type="text" 
                                        className="form-control h-auto mb-2" 
                                        placeholder="Add new task" 
                                        value={this.state.inputValue} 
                                        onChange={this.inputChangeHandler}
                                        required />
                                    <button type="submit" className="add btn btn-icons btn-rounded btn-primary todo-list-add-btn text-white me-0 pl-1"><i className="mdi mdi-plus"></i></button>
                                  </form>
                                  <div className="list-wrapper">
                                    <ul className="d-flex flex-column todo-list">
                                        {this.state.todos.map((todo, index) =>{
                                            return <ListItem 
                                            isCompleted={todo.isCompleted}
                                            changed={(event) => this.statusChangedHandler(event, index)}
                                            key={todo.id}
                                            remove={() => this.removeTodo(index) }
                                            >
                                              {todo.task}
                                            </ListItem>
                                        })}
                                    </ul>
                                  </div>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
        )
    }
}

const ListItem = (props) => {
    
    return (
        <li className={(props.isCompleted ? 'completed' : null)}>
            <div className="form-check">
                <label htmlFor="" className="form-check-label"> 
                    <input className="checkbox" type="checkbox" 
                        checked={props.isCompleted} 
                        onChange={props.changed} 
                        /> {props.children} <i className="input-helper"></i>
                </label>
            </div>
            <i className="remove ti-close" onClick={props.remove}></i>
        </li>
    )
};

export default TodoList
