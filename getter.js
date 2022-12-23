export default function mapUsers(users) {

  const newObject = {data: users.map(user => user), count: users.length};
  return newObject

}

export function mapArticles(articles) {
  
  const newObject = {data: articles.map(article => article), count: articles.length};
  return newObject

}

// TODO: answer here