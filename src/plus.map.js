const {videos} = require('./mapData')

// const data = []

// videos.forEach((video) => {
//     data.push({
//         id: video.id,
//         title: video.title,
//         uri: video.uri
//     })
// })

const toPairs = video => ({id: video.id, title: video.title, uri: video.uri})
const show = videos.map(toPairs)

console.log(show)