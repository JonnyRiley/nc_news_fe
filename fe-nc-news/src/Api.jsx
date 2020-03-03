import axios from "axios";

const baseURL = "https://portfolio-nc-news.herokuapp.com/api";

export const FetchArticles = (sortBy, filterTopicsBy) => {
  return axios
    .get(baseURL + "/articles", {
      params: {
        sort_by: sortBy,
        topic: filterTopicsBy
      }
    })
    .then(res => {
      return res.data.articles;
    })
    .catch(err => {
      this.setState({ err });
    });
};

export const FetchArticleById = article_id => {
  return axios.get(baseURL + `/articles/${article_id}`).then(res => {
    return res.data.article;
  });
};

export const FetchCommentsByArticleId = article_id => {
  return axios.get(baseURL + `/articles/${article_id}/comments`).then(res => {
    return res.data.comments;
  });
};

export const FetchTopics = () => {
  return axios.get(baseURL + `/topics`).then(res => {
    return res.data.topics;
  });
};

export const postAnItem = (article_id, requestBody) => {
  return axios
    .post(baseURL + `/articles/${article_id}/comments`, requestBody)
    .then(({ data }) => {
      return data.comment;
    });
};

export const patchVotes = (inc_votes, comment_id) => {
  return axios.patch(baseURL + `/comments/${comment_id}`, {
    inc_votes: inc_votes
  });
};

export const patchArticleVotes = (inc_votes, article_id) => {
  console.log(inc_votes, article_id);
  return axios.patch(baseURL + `/articles/${article_id}`, {
    inc_votes: inc_votes
  });
};

export const deleteCommentById = comment_Id => {
  return axios.delete(baseURL + `/comments/${comment_Id}`);
};

export const FetchUsers = username => {
  return axios.get(baseURL + `/users/${username}`).then(res => {
    return res.data.user;
  });
};
