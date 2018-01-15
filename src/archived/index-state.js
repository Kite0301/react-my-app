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
    // if (this.state.checked) {
    //   this.setState({checked: false})
    // } else {
    //   this.setState({checked: true})
    // }
    this.setState({checked: !this.state.checked})
  }

  render() {
    return (
      <div className='task'>
        <span onClick={this.changeChecked.bind(this)}>
          {this.state.checked ? (
            <i className='fa fa-check-square-o' />
          ) : (
            <i className='fa fa-square-o' />
          )}
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
