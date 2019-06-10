import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import LoginPage from './routes/LoginPage/LoginPage'
import RegistrationPage from './routes/RegistrationPage/RegistrationPage'
import AlbumListPage from './routes/AlbumListPage/AlbumListPage'
import ReviewListPage from './routes/ReviewListPage/ReviewListPage'
import ReviewForm from './components/ReviewForm/ReviewForm'
import ReviewPage from './routes/ReviewPage/ReviewPage'
import LandingPage from './routes/LandingPage/LandingPage'
import NotFoundPage from './routes/NotFoundPage/NotFoundPage'
import Nav from './components/Nav/Nav'


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
          <Nav />
        <main className='app-body'>
          {this.state.hasError && <p className="error">There was an error! Sorry!</p>}
          <Switch>
            <Route
              exact path={"/"}
              component={LandingPage}
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
              exact path={"/albums/:albumId"}
              component={ReviewListPage}
            />
            <Route
              path={"/albums/:albumId/reviews/:reviewId"}
              component={ReviewPage}
            />
            <Route
              path={"/:albumId/reviews"}
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
