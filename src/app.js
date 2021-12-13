import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ToDo from './components/todo/todo.js';
import Setting from './components/setting/setting'
import Header from './components/header/header.js';
import FormSetting from './components/formSetting/formSetting.js'


export default class App extends React.Component {
  render() {
    return (
      <Setting>
        <BrowserRouter>
        <Header/>
        <Route exact path="/">
      <ToDo />
      </Route>
        <Route exact path="/setting">
      <FormSetting />
      </Route>
      </BrowserRouter>
      </Setting>
    );
  }
}
