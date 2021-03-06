import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home/Home.js';
import NavBar from './components/NavBar/NavBar.js';
import Auth from './components/Auth/Auth.js';
import PostDetails from './components/PostDetails/PostDetails';

const App = () => {
    const user = JSON.parse(localStorage.getItem('profile'));
    console.log('Wihtout json.parse: ',localStorage.getItem('profile'));
    console.log('with json.parse: ',JSON.parse(localStorage.getItem('profile')));
    return (
        <BrowserRouter> 
            <Container maxWidth='xl'>
                <NavBar />

                <Switch>
                    <Route path='/' exact component={() => <Redirect to="/posts" />}></Route>
                    <Route path="/posts" exact component={Home} />
                    <Route path="/posts/search" exact component={Home} />
                    <Route path="/posts/:id" exact component={PostDetails} />
                    <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/posts" />)} />
                </Switch>
            </Container>
        </BrowserRouter>
    );
}
export default App;