import express from "express";

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

const router = express.Router();

// GET /tweets
// GET /tweets?username=:username
router.get("/", (req, res, next) => {
  const { username } = req.query;

  const data = username
    ? tweets.filter((t) => t.username === username)
    : tweets;

  res.status(200).json(data);
});

// GET /tweets/:id
router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  const tweet = tweets.find((t) => t.id === id);
  if (tweet) {
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `Tweet id(${id}) not found.` });
  }
});

// POST /tweets
router.post("/", (req, res, next) => {
  const { text, username, name } = req.body;
  const tweet = {
    id: Date.now().toString(),
    text,
    createdAt: Date.now().toString(),
    name,
    username,
    url: null,
  };

  tweets = [tweet, ...tweets];
  res.status(201).json(tweet);
});

// PUT /tweets/:id
router.put("/:id", (req, res, next) => {
  const { id } = req.params;
  const { text } = req.body;
  const tweet = tweets.find((t) => t.id === id);

  if (tweet) {
    tweet.text = text;
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `Tweet id(${id}) not found.` });
  }
});

// DELETE /tweets/:id
router.delete("/:id", (req, res, next) => {
  const { id } = req.params;
  tweets = tweets.filter((t) => t.id !== id);
  res.sendStatus(204);
});

export default router;
