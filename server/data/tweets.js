let tweets = [
  {
    id: "1",
    text: "jiin fighting",
    createdAt: Date.now().toString(),
    name: "jk",
    username: "jk",
    url: "https://res.cloudinary.com/djzpo9g8p/image/upload/v1640918360/avatar2-2_enjahj.jpg",
  },
  {
    id: "2",
    text: "thank u",
    createdAt: Date.now().toString(),
    name: "jiin",
    username: "jiin",
    url: null,
  },
];

export async function getAll() {
  return tweets;
}

export async function getAllByUsername(username) {
  return tweets.filter((t) => t.username === username);
}

export async function getById(id) {
  return tweets.find((t) => t.id === id);
}

export async function create(text, name, username) {
  const tweet = {
    id: Date.now().toString(),
    text,
    createdAt: Date.now().toString(),
    name,
    username,
    url: null,
  };

  tweets = [tweet, ...tweets];

  return tweets;
}

export async function update(id, text) {
  const tweet = tweets.find((t) => t.id === id);

  if (tweet) {
    tweet.text = text;
  }

  return tweet;
}

export async function remove(id) {
  tweets = tweets.filter((t) => t.id !== id);
}
