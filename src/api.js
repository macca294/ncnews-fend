import axios from 'axios'
 const url = 'http://jonnys-ncnews-bend.herokuapp.com/api/'


export const getArticles = (query) => {
return axios.get(`${url}articles`, {params : query})
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

    export const getComments = (id) => {

        return axios.get(`${url}articles/${id}/comments` )
                .then(({data: {comments}}) => {
                    return comments;
                })
        
        };

    export const getTopics = (query) => {

        return axios.get(`${url}/topics`, { params: query })
            .then(({data:{topics}})=> {
                console.log(topics)
                return topics
            })

    }
    export const patchArticle = (id, direction) => {

        return axios.patch(`${url}articles/${id}`, direction)
            .then(article => {
            return article
            })

    }