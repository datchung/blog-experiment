import React, { useEffect, useState } from "react";
import { getPost } from "../../Api/PostApi";
import T from '../../Localization/i18n';
import Back from "../Common/Back";
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
    var promise = new Promise(function(resolve, reject) {
      var id = decodeURIComponent(props.match.params.link);
      
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
      })
      .catch(error => {
        toast.error(
          String.format(T.t("loadingPostFailed"),
          error));
      });
  }, []);

  return (
    <>
      <Back history={history} />
      <div dangerouslySetInnerHTML={{ __html: post.content && marked(post.content) }}></div>
      <TwitterTweetEmbed
        tweetId={'933354946111705097'}
        />
    </>
  );
}

PostPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      link: PropTypes.string.isRequired
    })
  }),
  history: PropTypes.object.isRequired
};

export default PostPage;