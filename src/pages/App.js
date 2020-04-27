import React from 'react';
import {
  fetchCommentslist
} from '../actions/commentAction';
import CommentComponent from '../components/commentComponent';
import { connect } from 'react-redux';
import store from '../store';
import '../modules/styles/App.css';

//enrty screen to the app
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentsList: [],
    }
  }

  componentDidMount() {
    const {
      fetchCommentslist,
    } = this.props;
    fetchCommentslist();
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        commentsList: store.getState().blog.commentsList
      })
    })
  }

  render() {
    const {
      loading,
    } = this.props;
    if (loading) return null;
    return (
      <div className="comments_List_container">
        <ul id="comments_list">
          {
            this.state.commentsList.map((comment, i) =>
              <CommentComponent
                key={i}
                data={comment}
              />
            )
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ blog }) => {
  const {
    commentsList,
    loading,
    errorTtile,
    errorMessage
  } = blog
  return {
    commentsList,
    loading,
    errorTtile,
    errorMessage
  }
}

export default connect(mapStateToProps, {
  fetchCommentslist
})(App)