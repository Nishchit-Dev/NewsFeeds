export const GoogleNewApi = {
    method:'GET',
    url:'https://google-news.p.rapidapi.com/v1/top_headlines',
    params:{lang:'en',country:'US'},
    headers:{
        'X-RapidAPI-Host':process.env.REACT_APP_HOST,
        'X-RapidAPI-Key':process.env.REACT_APP_GOOGLE_API_KEY
    }
}

export const NEWAPI = {
    method:'GET',
    url:'https://newsapi.org/v2/top-headlines',
    params:{country:'us',apiKey:'caa5a90f0685491ba21b609e1ea2b841'}
}
// https://newsapi.org/v2/top-headlines?country=us&apiKey=caa5a90f0685491ba21b609e1ea2b841