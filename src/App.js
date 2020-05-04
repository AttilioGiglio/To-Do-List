import React, { Component } from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: []
    };
  }

  updateInput(key, value) {
    this.setState({ [key]: value });
  }

  addItem() {
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()

    };

    const list = [...this.state.list];

    list.push(newItem);


    this.setState({
      list,
      newItem: ""
    });
  }

  deleteItem(id) {

    const list = [...this.state.list];

    const updatedList = list.filter(item => item.id !== id);

    this.setState({ list: updatedList });
  }

  render() {
    return (
      <div>

        <h1 className="app">Lista de Tareas</h1>

        <div className="container">
          <div
            style={{
              padding: 30,
              textAlign: "left",
              maxWidth: 500,
              margin: "auto"
            }}
          >
            Add an Item...
          <br />
            <input
              type="text"
              placeholder="Escribe tu tarea"
              value={this.state.newItem}
              onChange={e => this.updateInput("newItem", e.target.value)}
            />
            <button
              className="btn"
              onClick={() => this.addItem()}
              disabled={!this.state.newItem.length}
            >
              <i class="icons"> + </i>
            </button>
            <br /> <br />
            <ol>
              {this.state.list.map(item => {
                return (
                  <li key={item.id}>
                    {item.value}
                    <button className="btn" onClick={() => this.deleteItem(item.id)}>
                      <i class="icons">x</i>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}
export default App;