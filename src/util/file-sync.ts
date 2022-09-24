import { readFileSync, writeFileSync, promises as fsPromises } from 'fs';
import { Post } from 'interface/post';
import { RedditPostData } from 'interface/subreddit-response';
import { join } from 'path';

export function readFile(filename: string): Post[] {
  const data = readFileSync(join(__dirname, filename), 'utf-8');
  return JSON.parse(data);
} 

export function writeFile(filename: string, data: RedditPostData[]) {
  // const fileData: Post[] = 
  writeFileSync(join(__dirname, filename), JSON.stringify(data.map((data: RedditPostData) => {
    return {
      id: data.id,
      title: data.title,
      vote_count: data.ups || data.downs
    }
  })), {
    flag: 'w',
  });
}
