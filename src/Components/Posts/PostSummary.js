import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import T from '../../Localization/i18n';

const Post = ({ post }) => (
  <>
    <div className="columns">
      <div className="column">
        <Link to={"/post/" + post.link}>
          {post.title}, {post.dateCreated}
        </Link>
      </div>
    </div>
  </>
);

Post.propTypes = {
  post: PropTypes.object.isRequired
};

export default Post;