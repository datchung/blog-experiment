import React, { useEffect, useState } from "react";
// import { connect } from "react-redux";
import { getPost } from "../../Api/PostApi";
// import T from '../../Localization/i18n';
// import Back from "../Common/Back";
// import PageTitle from "../Common/PageTitle";
import PropTypes from "prop-types";
// import Spinner from "../Common/Spinner";
import { toast } from "react-toastify";
import marked from "marked";
import {TwitterTweetEmbed} from "react-twitter-embed";

export function PostPage({
  history,
  ...props
}) {
  const [post, setPost] = useState({});

  useEffect(() => {
      var id = decodeURIComponent(props.match.params.link);
      console.info("useEffect %o", id);

      var promise = new Promise(function(resolve, reject) {
        try {
          resolve(getPost(id));
        }
        catch(error) {
          reject(error);
        }
      });

      promise
          .then(response => {
            setPost(response);
            console.info("PostPage %o", response);
          })
          .catch(error => {
            throw error;
          });
  }, []);

  return (
    <>
      {/* <Back history={history} /> */}
      {/* <PageTitle 
        title={record.id ? T.t("editRecord") : T.t("createRecord")}
        /> */}
        <div dangerouslySetInnerHTML={{ __html: post.content && marked(post.content) }}></div>
        <TwitterTweetEmbed
        tweetId={'933354946111705097'}
        />
    </>
  );
}

PostPage.propTypes = {
    // post: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default PostPage;