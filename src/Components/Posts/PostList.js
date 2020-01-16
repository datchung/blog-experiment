import React from "react";
import PropTypes from "prop-types";
import PostSummary from './PostSummary';

const PostList = ({ posts }) => (
  <>
    {posts.map(post => {
      return (
        <div
          key={post.link}
          className="card"
          >
            <div
              className="card-content"
              >
              <PostSummary
                post={post}
                />
            </div>
        </div>
      );
    })}
  </>
);

PostList.propTypes = {
  posts: PropTypes.array.isRequired
};

export default PostList;
