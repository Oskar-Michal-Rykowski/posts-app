import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './redux/store';
import { HomepageContainer as Homepage } from './components/views/Homepage/Homepage';
import { Post } from './components/views/Post/Post';
import { MainLayoutContainer as MainLayout } from './components/layout/MainLayout/MainLayout';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/post/:id" element={<Post />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  </Provider>
);

export default App;
