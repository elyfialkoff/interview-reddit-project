#! /usr/bin/env node
import { program } from 'commander';
import { posts } from './command/posts';

program
  .command('posts')
  .description('List top posts from Reddit')
  .option('-r, --subreddit <subreddit>', 'The Subreddit that you would like to get the posts from.')
  .action(posts);

program.parse();