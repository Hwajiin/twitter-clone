import * as tweetsRepository from "../data/tweets.js";

export async function getTweets(req, res) {
  const { username } = req.query;

  const data = await (username
    ? tweetsRepository.getAllByUsername(username)
    : tweetsRepository.getAll());

  res.status(200).json(data);
}

export async function getTweet(req, res) {
  const { id } = req.params;
  const tweet = await tweetsRepository.getById(id);
  if (tweet) {
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `Tweet id(${id}) not found.` });
  }
}

export async function createTweet(req, res) {
  const { text, username, name } = req.body;
  const tweet = await tweetsRepository.create(text, name, username);
  res.status(201).json(tweet);
}

export async function updateTweet(req, res) {
  const { id } = req.params;
  const { text } = req.body;
  const tweet = await tweetsRepository.update(id, text);

  if (tweet) {
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `Tweet id(${id}) not found.` });
  }
}

export async function deleteTweet(req, res) {
  const { id } = req.params;
  await tweetsRepository.remove(id);
  res.sendStatus(204);
}
