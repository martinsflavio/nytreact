import axios from 'axios';

class NYTApi  {
  constructor(){
    this.API_KEY = "c18cea5e774f482687a1ae3919d6bfa3";
    this.axios = axios;
  }

  runQuery(obj){
    let url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';

    console.log(this.API_KEY);


   return  this.axios.get(url, {
     params:{
       'api-key': this.API_KEY,
       q: obj.topic.trim(),
       begin_date: obj.startYr.replace(/-/g, "").trim(),
       end_date: obj.endYr.replace(/-/g, "").trim(),
     }
    });
  }

  saveArticle(article){
    const newArticle = {
      title: article.headline.main,
      url: article.web_url,
    };

    console.log(newArticle);

    return this.axios.post('/api/articles/create', newArticle);
  }


  getArticles(){

  }
}

export default NYTApi;

