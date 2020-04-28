import React, { Component } from 'react';
import { Collapse } from 'react-collapse';
import { Button } from '~/atoms';
import {
  ErrorButtonContainer,
  ErrorDisplayContainer,
  ErrorHeaderContainer,
  ErrorHeading,
  ErrorPreElement,
  ErrorSubtext,
} from './style';

interface IProps {
  children: any;
  shouldRestart?: boolean;
  silent?: boolean;
  maxRestartAttempts?: number;
}

interface IState {
  collapsed: boolean;
  errorInfo: any;
  errorMessage: any;
  hasError: boolean;
  restartAttempts: number;
}

class ErrorBoundary extends Component<IProps, IState> {
  static defaultProps = {
    children: null,
    silent: false,
    shouldRestart: false,
    maxRestartAttempts: 5,
  };

  constructor(props) {
    super(props);
    this.componentDidCatch = this.componentDidCatch.bind(this);
    this.toggleCollapse = this.toggleCollapse.bind(this);
  }

  state = {
    collapsed: true,
    errorInfo: null,
    errorMessage: null,
    hasError: false,
    restartAttempts: 0,
  };

  toggleCollapse() {
    this.setState((prevState: IState) => ({
      collapsed: !prevState.collapsed,
    }));
  }

  componentDidCatch(error: Error, info) {
    const { shouldRestart, maxRestartAttempts } = this.props;
    const { restartAttempts } = this.state;

    this.setState({
      hasError: true,
      errorMessage: error,
      errorInfo: info,
    });

    if (shouldRestart && (restartAttempts < maxRestartAttempts)) {
      setTimeout(() => {
        console.warn('Component encountered an error. Attempting to restart...');
        this.setState(prevState => ({
          ...prevState,
          hasError: false,
          restartAttempts: prevState.restartAttempts + 1,
        }));
      }, 150);
    }
  }

  render() {
    const { children, silent } = this.props;
    const { hasError, collapsed, errorMessage, errorInfo } = this.state;

    if (hasError) {
      if (!silent) {
        return (
          <ErrorDisplayContainer>
            <ErrorHeaderContainer>
              <ErrorHeading>An error occurred!</ErrorHeading>
              <ErrorSubtext>Please see below for further details.</ErrorSubtext>
            </ErrorHeaderContainer>
            <ErrorButtonContainer>
              <Button
                onClick={this.toggleCollapse}
                title={!collapsed ? 'Hide Error Details' : 'Show Error Details'}
              />
            </ErrorButtonContainer>
            <Collapse
              isOpened={!collapsed}
            >
              <ErrorPreElement>{errorMessage.toString()}</ErrorPreElement>
              <ErrorPreElement>{errorInfo.componentStack}</ErrorPreElement>
            </Collapse>
          </ErrorDisplayContainer>
        );
      }
      return <div/>;
    }

    return children;
  }
}

export default ErrorBoundary;
