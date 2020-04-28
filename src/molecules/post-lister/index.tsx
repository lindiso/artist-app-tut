import React, { Component } from 'react';
import { isEmpty } from 'lodash';
import { IPosts } from './interfaces';
import { PostWrapper } from './style';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './container';
import { Loader } from '~/atoms';

interface IComponentProps {
  [x: string]: any;
}

interface IContainerProps {
  isLoading?: boolean;
  posts?: IPosts[];
  fetchPosts?: () => void;
}

interface IState {
  [x: string]: any;
}

type IProps = IComponentProps & IContainerProps;

class PostLister extends Component<IProps, IState> {

  state: IState = {};

  constructor(props: IProps) {
    super(props);
    this.renderPosts = this.renderPosts.bind(this);
  }

  componentDidMount() {
    const { fetchPosts } = this.props;
    fetchPosts();
  }

  renderPosts() {
    const { posts, isLoading } = this.props;
    if (!isEmpty(posts)) {
      return posts.map((post) => {
        const { id, title, body } = post;
        return (
          <PostWrapper
            key={id}
          >
            <div>{ title }</div>
            <div>{ body }</div>
          </PostWrapper>
        );
      });
    }
    return (
      <Loader/>
    );
  }

  render () {
    return (
      <>
        <h1>Posts</h1>
        <div data-cy={'posts-wrapper'}>
          { this.renderPosts() }
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostLister);
