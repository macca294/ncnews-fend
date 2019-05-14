import axios from 'axios'
 const url = 'http://jonnys-ncnews-bend.herokuapp.com/api/'


export const getArticles = () => {

return axios.get(`${url}articles` )
        .then(({data: {articles}}) => {
            return articles;
        })

};

export const getArticle = (id) => {

    return axios.get(`${url}articles/${id}` )
            .then(({data: {article}}) => {
                return article;
            })
    
    };