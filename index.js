require('dotenv').config()
const express = require('express')

const app = express()
const githubData = {
  "login": "Nishadcoder",
  "id": 167220431,

  "node_id": "U_kgDOCfeUzw",
  "avatar_url": "https://avatars.githubusercontent.com/u/167220431?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Nishadcoder",
  "html_url": "https://github.com/Nishadcoder",
  "followers_url": "https://api.github.com/users/Nishadcoder/followers",
  "following_url": "https://api.github.com/users/Nishadcoder/following{/other_user}",
  "gists_url": "https://api.github.com/users/Nishadcoder/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Nishadcoder/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Nishadcoder/subscriptions",
  "organizations_url": "https://api.github.com/users/Nishadcoder/orgs",
  "repos_url": "https://api.github.com/users/Nishadcoder/repos",
  "events_url": "https://api.github.com/users/Nishadcoder/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Nishadcoder/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Nishad_Khalyani",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 7,
  "public_gists": 0,
  "followers": 0,
  "following": 7,
  "created_at": "2024-04-16T14:38:16Z",
  "updated_at": "2024-11-08T13:12:18Z"
}

app,get('/github',(req,res)=>{
    res.json(githubData)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send("Welcome To Twitter")
})
app.get('/login',(req,res)=>{
    res.send('<H1>HEllo, Nishad <H1/>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>NIshad Khalyani chai</h2>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})