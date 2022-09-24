import axios from "axios";
import * as fs from 'fs';
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
    return {
      id: postObj.data.id,
      subreddit: postObj.data.subreddit,
      title: postObj.data.title,
      ups: postObj.data.ups,
      downs: postObj.data.downs
    };
  });

  const filename = '../../previousPost.json'

  if (fs.existsSync(filename)) {
    const fileData: Post[] = readFile(filename);

    fileData.forEach((post: Post) => {
      console.log(JSON.stringify(post, null, 2))
    })
  } else {
    writeFile(filename, [])
  }
  
  writeFile(filename, posts);  
}