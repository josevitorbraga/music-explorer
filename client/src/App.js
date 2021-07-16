import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from './assets/logo.svg';
import SearchBox from './components/SearchBox';
import { FaGithub } from 'react-icons/fa';
import HomePage from './pages/HomePage';
import AlbumPage from './pages/AlbumPage';

export default function App() {
  return (
    <>
      <Router>
        <header className="site-header">
          <div className="d-flex align-items-center justify-content-between">
            <div className="logo-website">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className="search-bar">
              <SearchBox />
            </div>
            <div className="github">
              <a href="https://github.com/josevitorbraga/">
                <FaGithub size={'3rem'} />
              </a>
            </div>
          </div>
        </header>
        <main>
          <Switch>
            <Route path="/album/:id" component={AlbumPage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </main>
        <div className="d-flex justify-content-center">1 | 2 | 3</div>
      </Router>
    </>
  );
}
