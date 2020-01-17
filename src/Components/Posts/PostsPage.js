import React from "react";
// import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// import Back from "../Common/Back";
import PageTitle from "../Common/PageTitle";
import PostList from "./PostList"
import T from '../../Localization/i18n';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as postActions from "../../Redux/Actions/PostActions";
import { toast } from "react-toastify";

class PostsPage extends React.Component {
    state = {
        loading: false,
    };

    componentDidMount() {
        const { posts, actions } = this.props;

        if (posts.length === 0) {
            actions.loadPosts().catch(error => {
                toast.error(
                    String.format(T.t("loadingPostsFailed"),
                    error));
            });
        }
    }

    render() {
        return (
            <>
                {/* <Back history={props.history} /> */}
                <PageTitle title={T.t("appTitle")}/>
                <p>{T.t("postsText")}</p>
                <PostList posts={this.props.posts} />
            </>
        );
    }
}

PostsPage.propTypes = {
  history: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    posts: state.posts,
    loading: state.apiCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadPosts: bindActionCreators(postActions.loadPosts, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsPage);
