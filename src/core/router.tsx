import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from '~/organisms';
import { PageWrapper } from './style';
import {
  Home,
  About,
  PageNotFound,
  FeatureFlaggedPage,
  ErrorPage,
} from '~/pages';
import { ErrorBoundary } from '~/atoms';
import Search from "~/pages/searchPage/searchPage";
import FavouritePage from "~/pages/favourite-page/favourite-albums";

const AppRouter = () => {
  return (
    <Router>
      <Header/>
      <PageWrapper>
        <ErrorBoundary>
          <Switch>
            {/* Main routes */}
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/feature-flagged-page" exact component={FeatureFlaggedPage} />
            {/* Error route */}
            <Route path="/error-page" exact component={ErrorPage} />

            <Route path="/searchPage" exact component={Search} />
            <Route path="/favouritePage" exact component={FavouritePage} />

            {/* 404 route */}
            <Route path="/*" exact component={PageNotFound} />
          </Switch>
        </ErrorBoundary>
      </PageWrapper>
    </Router>
  );
};

export default AppRouter;
