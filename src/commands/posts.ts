import axios from "axios";

export async function posts (input: any) {
  const { subreddit } = input;

  console.log(`Hello Reddit r/${subreddit}`)

  const response = await axios.get(
    `https://www.reddit.com/r/${subreddit}.json`
  );

  console.log(response.data);

  const posts = response.data.data.children;

  posts.forEach((postObj: any) => {
    const post = postObj.data;
    console.log(`r/${post.subreddit}\nTitle: ${post.title}`);
  });
}