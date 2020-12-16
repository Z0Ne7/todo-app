import React from 'react';
import './assets/main.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

const isNotCheckedAll = (todos = []) => todos.find((todo) => !todo.isCompleted);

class App extends React.PureComponent {
  state = {
    todosList: [
      {
        id: 1,
        text: 'to do 1',
        isCompleted: true,
      },
      {
        id: 2,
        text: 'to do 2',
        isCompleted: false,
      },
    ],
    todoEditingId: '',
    isCheckedAll: false,
  };

  componentDidMount() {
    this.setState({
      isCheckedAll: !isNotCheckedAll(this.state.todosList),
    });
  }

  addTodo = (todo = {}) => {
    this.setState((preState) => ({
      todosList: [...preState.todosList, todo],
    }));
  };

  getTodoEditingId = (id = '') => {
    this.setState({
      todoEditingId: id,
    });
  };

  onEditTodo = (todo = {}, index = -1) => {
    if (index >= 0) {
      const { todosList: list } = this.state;
      list.splice(index, 1, todo);
      this.setState({ todosList: list, todoEditingId: '' });
    }
  };
  markCompleted = (id = '') => {
    const { todosList } = this.state;
    const updatedList = todosList.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    this.setState((preState) => ({
      todosList: updatedList,
      isCheckedAll: !isNotCheckedAll(updatedList),
    }));
  };
  render() {
    const { todosList, todoEditingId, isCheckedAll } = this.state;
    return (
      <div className='todoapp'>
        <Header isCheckedAll={isCheckedAll} addTodo={this.addTodo} />
        <TodoList
          todosList={todosList}
          todoEditingId={todoEditingId}
          getTodoEditingId={this.getTodoEditingId}
          onEditTodo={this.onEditTodo}
          markCompleted={this.markCompleted}
          isCheckedAll={isCheckedAll}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
