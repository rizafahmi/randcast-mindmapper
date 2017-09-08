import React, { Component } from 'react'
import MindMap from 'react-mindmap'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      currentText: '',
      nodes: [
        {
          text: 'python',
          url: 'http://www.wikiwand.com/en/Python_(programming_language)',
          nodes: [],
          category: 'wiki'
        },
        {
          text: 'pip',
          url: 'https://pypi.python.org/pypi/pip',
          nodes: [
            {
              text: 'virtualenv'
            }
          ]
        }
      ],
      connections: [
        {
          source: 'python',
          target: 'pip'
        }
      ]
    }
  }
  addNodeToState () {
    const randomNode = {
      text: this.state.currentText
    }
    let nodes = [...this.state.nodes, randomNode]
    this.setState({
      nodes,
      currentText: ''
    })
  }
  addNode () {
    this.addNodeToState()
  }
  handleKeyPress (e) {
    if (e.key === 'Enter') {
      this.addNodeToState()
    }
  }
  onTitleChange (text) {
    this.setState({
      currentText: text
    })
  }
  render () {
    return (
      <div>
        <MindMap
          nodes={this.state.nodes}
          connections={this.state.connections}
        />
        <input
          type='text'
          onChange={e => this.onTitleChange(e.target.value)}
          onKeyPress={e => this.handleKeyPress(e)}
          value={this.state.currentText}
        />
        <button onClick={() => this.addNode()}>Add Node</button>
      </div>
    )
  }
}

export default App
