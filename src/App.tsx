import React from 'react';
import { Provider } from 'react-redux';
import TodoList from './components/todoList';
import store from './store/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <h1>Hello</h1>
      <TodoList />
    </Provider>
  )
}

export default App;
