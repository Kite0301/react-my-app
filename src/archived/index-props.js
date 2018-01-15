import React from 'react';
import ReactDOM from 'react-dom';

class List extends React.Component {
  render() {
    return (
      <div className='list'>
        <i className='fa fa-square-o' />
        {this.props.title}
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
          <List title='トイレ掃除' />
          <List title='ポチの散歩' />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
