import axios from "axios";
import { readFile, writeFile } from "../util/file-sync";
import { RedditPost, RedditPostData, SubredditResponse } from '../interface/subreddit-response'
import { Post } from "interface/post";

export async function posts (input: any) {
  const { subreddit } = input;

  console.log(`Hello Reddit r/${subreddit}`)

  const response = await axios.get(
    `https://www.reddit.com/r/${subreddit}.json`
  );

  const subredditResponse: SubredditResponse = response.data;
  const redditPosts: RedditPost[] = subredditResponse.data.children;

  console.log(`Number of Posts in response: ${redditPosts.length}`);

  const posts = redditPosts.map((postObj: RedditPost) => {
    const post: RedditPostData = {
      id: postObj.data.id,
      subreddit: postObj.data.subreddit,
      title: postObj.data.title,
      ups: postObj.data.ups,
      downs: postObj.data.downs
    };
    return post;
  });

  writeFile('./previousPost.json', posts);

  const fileData: Post[] = readFile('./previousPost.json');

  fileData.forEach((post: Post) => {
    console.log(JSON.stringify(post, null, 2))
  })
}