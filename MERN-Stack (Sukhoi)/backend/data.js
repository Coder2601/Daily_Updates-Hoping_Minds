const articles = [
  {
    id:505,
    title:"Bollywood Songs",
    content:["Deewane Hum nahi hote", "Koi Mil Gaya", "Chale Jaise Hawayein", "Dilwale"]
  },
  {
    id:305,
    title:"Bollywood Movies",
    content:["Kaho Na Pyaar Hai", "RRR", "RAW", "Dilwale"]
  }

]

const users = [
  {
    id: 505,
    name: "Manushi",
    password: "u7uy7",
    encPass: "$2b$05$k4rEl1nwNnO92g1hQWSNju8qlOsH1vtBmgIcPfjkyoLavmC3/MpHq"
  },
  {
    id: 201,
    name: "Harh",
    password: "trg767yu",
    encPass: "$2b$05$tTHxLsVQOYjewMsBcc2dq.FBmY866DQHFRPO.hwFLP27N98zv4a9C"
  },
  {
    id: 305,
    name: "Yami",
    password: "t5gnnhyg",
    encPass: "$2b$05$7/dJEZVzjw69Ho/TMbIqT..qrrdeXvuOxTUBZ6uXvysgjzJQD3h1u"
  },
  {
    id: 968,
    name: "Manu",
    password: "t5gnnhyg",
    encPass: "$2b$05$xEgwp5RC46iZyIjo5rXfieLWaxo0EaTYuUhk2ISraq10e5BfgQqvS"
  },
  {
    id: 751,
    name: "Ashu",
    password: "u6btuynhkj",
    encPass: "$2b$05$Eg7YU1qo/5mFErx09gRhleBegp3qe1kx4mxDzm8y0K6n.tR2Xo9F6"
  }
]


// module.exports = articles;
// module.exports = users;
// default export in node.js

module.exports = {
  Articles : articles,
  Users: users
}

// named export in node.js