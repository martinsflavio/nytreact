import React from "react";
import {Route, Router } from "react-router";


const hashHistory = Router.hashHistory;
const IndexRoute = Router.IndexRoute;

import Home from "./components/home-page/Home";
import Results from "./components/home-page/result/results";
import Search from "./components/home-page/search/search";
import SavedArticles from "./components/home-page/savedArticles/savedArticles";
import SearchForm from "./components/home-page/search/searchForm";
import Result from "./components/home-page/result/result";
import Article from "./components/home-page/savedArticles/article";



export default (
  <Router history={hashHistory} >
    <Route path="/" component={Home}/>
  </Router>
);
