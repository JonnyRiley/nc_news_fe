import axios from "axios";

const baseConfig = "https://portfolio-nc-news.herokuapp.com/api";

export const FetchArticles = () => {
  return axios.get(baseConfig + "/articles").then(res => {
    return res.data.articles;
  });
};

export const FetchArticleById = article_id => {
  console.log(article_id);
  return axios.get(baseConfig + `/articles/${article_id}`).then(res => {
    console.log(res.data.article);
    return res.data.article;
  });
};
