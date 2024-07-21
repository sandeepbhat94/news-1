const { default: axios } = require("axios");
// const  getRequest  = require("../../config/axios");


const newsController = {};

newsController.get_news = async (req, res) => {
    try {
        const news = await axios.get("https://saurav.tech/NewsAPI/everything/cnn.json")
        console.log("NEWS", news)
        if (news.status == 200) {
            return res.status(200).send({ message: "News list", data: news.data.articles })
        } else {
            return res.status(400).send({ message: "News content not available" })
        }

    } catch (error) {
        return res.status(500).send({ message: "Something went wrong" })
    }

}

newsController.get_news_auth = async (req, res) => {
    try {
        const { id } = req.params;
        if (id) {
            const news = await axios.get("https://saurav.tech/NewsAPI/everything/cnn.json")            
            if (news.status == 200) {
                const article = news.data.articles;
                console.log("ID", id)
                const filteredArticle = article.find(({ author }) => author.toLowerCase().includes(id.toLowerCase()))
                return res.status(200).send({ message: "News details", data: filteredArticle })
            } else {
                return res.status(400).send({ message: "News content not available" })
            }
        } else {
            return res.status(400).send({ message: "id mandatory param missing" })
        }

    } catch (error) {
        console.log("ERROR--", error)
        return res.status(500).send({ message: "Something went wrong", error: error })
    }

}


newsController.search_news = async (req, res) => {
    try {
        const { text } = req.params;
        if (text) {
            const news = await axios.get("https://saurav.tech/NewsAPI/everything/cnn.json")
            console.log("NEWS - ", news)
            if (news.status == 200) {
                const article = news.data.articles;
                const filteredArticle = article.filter(({ title }) => title.toLowerCase().includes(text.toLowerCase()))
                return res.status(200).send({ message: "News list", data: filteredArticle })
            } else {
                return res.status(400).send({ message: "News content not available" })
            }
        } else {
            return res.status(400).send({ message: "text mandatory param missing" })
        }

    } catch (error) {
        console.log("ERROR--", error)
        return res.status(500).send({ message: "Something went wrong", error: error })
    }

}

module.exports = newsController;