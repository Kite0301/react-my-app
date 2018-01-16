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
          {this.state.checked ? (
            <i className='fas fa-check-circle' />
          ) : (
            <i className='far fa-circle' />
          )}
        </span>
        {this.props.title}
      </div>
    );
  }
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      inputText: '',
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    const {tasks, inputText} = this.state
    if (inputText === '') {
      return
    }
    tasks.push(inputText)
    this.setState({
      tasks: tasks,
      inputText: '',
    })
  }

  handleChangeText(event) {
    this.setState({inputText: event.target.value});
  }

  render() {
    return (
      <div className='main'>
        <h1>タスク一覧</h1>
        <div className='tasks'>
          {this.state.tasks.map((task, index) => {
            return (
              <List key={`list-${index}`} title={task} />
            )
          })}
        </div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type='text'
            value={this.state.inputText}
            onChange={this.handleChangeText.bind(this)}
          />
        </form>
      </div>
    );
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
