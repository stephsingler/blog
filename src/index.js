import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import AppComponent from './Components/App/App';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import ArticlesPageComponent from "./ArticlesPage/ArticlesPage";
import ArticlePageComponent from "./ArticlePage/ArticlePage";

const router = createBrowserRouter([
    {
        path:"/",
        element: <AppComponent />,

    },
    {
        path: "articles",
        element: <ArticlesPageComponent />
    },
    {
        path: "articles/:articleSlug",
        element: <ArticlePageComponent />
    }
]);

ReactDOM.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
