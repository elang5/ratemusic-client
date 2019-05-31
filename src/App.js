import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import LoginPage from './routes/LoginPage/LoginPage'
import RegistrationPage from './routes/RegistrationPage/RegistrationPage'
import AlbumListPage from './routes/AlbumListPage/AlbumListPage'
import AlbumReviewsPage from './routes/ReviewListPage/ReviewListPage'
import NotFoundPage from './routes/NotFoundPage/NotFoundPage'
import Header from './components/Header/Header'
import ReviewForm from './components/ReviewForm/ReviewForm';

class App extends Component {
  state = { 
    hasError: false
  }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }
  render() {
    return (
      <div className="App">
        <header>
          <Header />
        </header>
        <main className='app-body'>
          {this.state.hasError && <p className="error">There was an error! Sorry!</p>}
          <Switch>
            <Route
              exact path={"/"}
              component={AlbumListPage}
            />
            <Route 
              path={"/register"}
              component={RegistrationPage}
            />
            <Route
              path={"/login"}
              component={LoginPage}
            />
            <Route
              exact path={"/albums"}
              component={AlbumListPage}
            />
            <Route
              path={"/albums/:albumId"}
              component={AlbumReviewsPage}
            />
            <Route
              path={"/reviews"}
              component={ReviewForm}
            />
            <Route
              component={NotFoundPage}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
