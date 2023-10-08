"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const User_1 = require("./classes/User");
const Tweet_1 = require("./classes/Tweet");
const Like_1 = require("./classes/Like");

const User1 = new User_1.User("Paulo", "paulo", "paulo@paulo", "AAAAA");
const User2 = new User_1.User("Carla", "carla", "carla@carla", "ttpp0102");
const User3 = new User_1.User(
  "Otavio",
  "otavio",
  "otavio@otavio",
  "coxinha123"
);

const Tweet1 = new Tweet_1.Tweet(
  "Está rolando a Copa do Mundo de Rugby",
  "normal",
  "paulo"
);
User1.sendTweet(Tweet1);

const Tweet2 = new Tweet_1.Tweet("Alguém tem 5G?", "reply", "otavio");
User3.sendTweet(Tweet2);

const Tweet3 = new Tweet_1.Tweet(
  "Deftones é a melhor banda que existe!",
  "normal",
  "carla"
);
User2.sendTweet(Tweet3);

Tweet1.reply(Tweet2);
console.log(Tweet1.show());

const replies = Tweet1.showReplies();
console.log(replies);

const like1 = new Like_1.Like(User1);
const tweet4 = new Tweet_1.Tweet(
  "Sertanejo Universitário é horrivel",
  "normal",
  "carla"
);
User2.sendTweet(tweet4);

const tweet5 = new Tweet_1.Tweet("Quero café!", "normal", "paulo");
User1.sendTweet(tweet5);

User3.showFeed();
User1.follow(User3);
User2.showFeed();
