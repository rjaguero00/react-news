import axios from "axios";

const BaseUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
const ApiKey = "9c2fb71c81bd4477a140f13701ffd613";

export default {
  search: function(query) {
    return axios.get(BaseUrl + ApiKey + query);
  },
  // Gets all articles
  getArticles: function () {
    return axios.get("/api/articles");
  },
  // Deletes the article with the given id
  deleteArticle: function (id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves an article to the database
  saveArticle: function (articleData) {
    return axios.post("/api/articles", articleData);
  }

};