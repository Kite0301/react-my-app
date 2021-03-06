import React from 'react';
import ReactDOM from 'react-dom';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    }
  }

  changeChecked() {
    this.setState({checked: !this.state.checked})
  }

  render() {
    return (
      <div className='list'>
        <span onClick={this.changeChecked.bind(this)}>
          {this.state.checked
            ? <i className='fas fa-check-circle' />
            : <i className='far fa-circle' />
          }
        </span>
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
