export  interface SubredditResponse {
  kind: string;
  data: SubredditData;
}

export interface SubredditData {
  after: string;
  dist: number;
  modhash: string;
  geo_filter?: any;
  children: RedditPost[];
  before?: string;
}

export interface RedditPost {
  kind: string;
  data: RedditPostData;
}

export interface RedditPostData {
  id: string;
  subreddit: string;
  title: string;
  ups: number;
  downs: number;
  // "selftext": "",
  // "author_fullname": "t2_dywqc4dt",
  // "pwls": 6,
  // "name": "t3_xmkytc",
  // "upvote_ratio": 0.96,
  // "total_awards_received": 0,
  // "category": null,
  // "post_hint": "image",
  // "wls": 6,
  // "author_flair_type": "text",
  // "likes": null,
  // "num_comments": 911,
}