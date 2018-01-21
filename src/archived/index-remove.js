import React from 'react';
import ReactDOM from 'react-dom';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      display: true,
    }
  }

  changeChecked() {
    this.setState({checked: !this.state.checked})
  }

  hideTask() {
    this.setState({display: false})
  }

  render() {
    return (
      this.state.display ? (
        <div className='list'>
          <span onClick={this.changeChecked.bind(this)} >
            {this.state.checked
              ? <i className='fas fa-check-circle' />
              : <i className='far fa-circle' />
            }
          </span>
          {this.props.title}
          <i
            className="fas fa-times"
            onClick={this.hideTask.bind(this)}
          />
        </div>
      ) : (
        null
      )
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

  handleChangeText(event) {
    this.setState({inputText: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault()

    if (this.state.inputText === '') {
      return
    }

    const newTasks = this.state.tasks
    newTasks.push(this.state.inputText)
    this.setState({tasks: newTasks, inputText: ''})
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
