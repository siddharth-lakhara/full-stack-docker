import React from 'react';
import axios from 'axios';
import Chance from 'chance';
import './App.css';

const chance = new Chance();

class App extends React.Component {
  state = {
    data: [],
    placeholder: 'Data will be shown here'
  }

  handleGet = () => {
    axios.get('/users').then(({data}) => {
      this.setState({data});
    });
  }

  renderTable = () => {
    const dataItems = this.state.data.map((d) => (
      <tr>
        <td>{d.username}</td>
        <td>{d.comment}</td>
      </tr>
    ));
    
    return (
      <table>
        <tr>
          <th>User Name</th>
          <th>Comment</th>
        </tr>
        {dataItems}
      </table>
    );
  }

  handleCreate = (userName, comment) => {
    const payload = {
      userName,
      comment
    };
    axios.post('/users', payload).then(() => {
      this.handleGet();
    });
  }

  render() {
    const { data, placeholder } = this.state;
    const {
      handleGet, 
      renderTable, 
      handleCreate
    } = this;
    const userName = chance.first();
    const comment = chance.word();
    return (
      <div className="App">
        <div className="app-actions">
          <section className="action-createAction">
            <button onClick={() => {handleCreate(userName, comment)}}>Create</button>
            <div>
              Create data:<br />
    <code>username: {userName}</code> &nbsp;
              , &nbsp;
    <code>comment: {comment}</code>
            </div>
          </section>
          <section className="action-getAction">
            <button onClick={handleGet}>Get</button>
            <div>Get all records</div>
          </section>
        </div>
        <div className="app-serverResponse">
          {data.length ? 
            renderTable()
            : 
            (<div>{placeholder}</div>)
          }
        </div>
      </div>
    );
  }
}

export default App;
