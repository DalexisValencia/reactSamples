import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './app/Navbar'
import { PostsList } from './features/posts/PostsList'
import { AddPostForm } from './features/posts/AddPostForm'
import { SinglePostPage } from './features/posts/SinglePostPage';
import { EditPostForm } from './features/posts/EditPostForm'
import { UserList } from './features/users/userList'
import { NotificationsList } from './features/notifications/NotificationsList';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <AddPostForm />
                <PostsList />
              </React.Fragment>
            )}
          />
            <Route exact path="/notifications" component={NotificationsList}/>
            <Route exatc path="/posts/:postId" component={SinglePostPage}/>
            <Route exact path="/editPost/:postId" component={EditPostForm}/>
            <Route exact path="/users" component={UserList}/>
            <Route exact path="/users/:userId" component={UserPage}/>
            <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
