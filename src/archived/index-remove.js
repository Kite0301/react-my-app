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

  handleClickRemoveBtn() {
    const {title, removeTask} = this.props
    if (window.confirm('「' + title + '」を本当に削除しますか？')) {
      removeTask(title)
    }
  }

  render() {
    return (
      <div className='list'>
        <span onClick={this.changeChecked.bind(this)}>
          {this.state.checked ? (
            <i className='fa fa-check-square-o' />
          ) : (
            <i className='fa fa-square-o' />
          )}
        </span>
        {this.props.title}
        <i
          className='fa fa-times'
          onClick={this.handleClickRemoveBtn.bind(this)}
        />
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

  removeTask(text) {
    const {tasks} = this.state
    const newTasks = tasks.filter((task) => {
      return task !== text
    })
    this.setState({tasks: newTasks})
  }

  render() {
    return (
      <div className='main'>
        <h1>タスク一覧</h1>
        <div className='tasks'>
          {this.state.tasks.map((task, index) => {
            return (
              <List
                key={`list-${index}`}
                title={task}
                removeTask={this.removeTask.bind(this)}
              />
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
