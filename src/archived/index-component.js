import React from 'react';
import ReactDOM from 'react-dom';

class List extends React.Component {
  render() {
    return (
      <div className='list'>
        <i className='fa fa-square-o' />
        トイレ掃除
      </div>
    );
  }
}

class Main extends React.Component {
  render() {
    return (
      <div className='main'>
        <h1>タスク一覧</h1>
        <div className='tasks'>
          <List />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
