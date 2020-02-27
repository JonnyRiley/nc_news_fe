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
    });
};

export const FetchArticleById = article_id => {
  return axios.get(baseURL + `/articles/${article_id}`).then(res => {
    return res.data.article;
  });
};

export const FetchCommentsByArticleId = article_id => {
  console.log("FEtch");
  return axios.get(baseURL + `/articles/${article_id}/comments`).then(res => {
    console.log(res, "FETCHING");
    return res.data.comments;
  });
};

export const FetchTopics = () => {
  return axios.get(baseURL + `/topics`).then(res => {
    console.log(res, "FETCHING");
    return res.data.topics;
  });
};

export const postAnItem = (article_id, requestBody) => {
  console.log(article_id, requestBody, "POSTER");
  return axios
    .post(baseURL + `/articles/${article_id}/comments`, requestBody)
    .then(({ data }) => {
      console.log(data, "last");
      return data.comment;
    });
};

export const patchVotes = (inc_votes, comment_Id) => {
  console.log(inc_votes, comment_Id, "handlingRequest");
  return axios.patch(baseURL + `/comments/${comment_Id}`, {
    inc_votes: inc_votes
  });
};
