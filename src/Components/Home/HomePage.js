import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Back from "../Common/Back";
import PageTitle from "../Common/PageTitle";
import PostList from "../Posts/PostList"
import T from '../../Localization/i18n';
import { connect } from "react-redux";

const HomePage = (props) => (
  <>
    <Back history={props.history} />
    <PageTitle title={T.t("appTitle")}/>
    <p>{T.t("homeText")}</p>
    <PostList posts={props.posts} />
  </>
);

HomePage.propTypes = {
  history: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    posts: state.records,
    loading: state.apiCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      //loadPosts: bindActionCreators(recordActions.loadRecords, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
