import { User } from "./classes/User";
import { Tweet } from "./classes/Tweet";
import { Like } from "./classes/Like";

const User1 = new User ('Jose' , 'jose', 'jose@jose', '123456'); 
const User2 = new User ('Maria', 'maria', 'maria@maria', '123654');
const User3 = new User ('Joana', 'joana', 'joana@joana', '654321');

const Tweet1 = new Tweet ('Olá mundo', 'normal', 'jose');
User1.sendTweet(Tweet1);

const Tweet2 = new Tweet ('Estou em transição de carreira', 'reply', 'joana');
User3.sendTweet(Tweet2);

const Tweet3 = new Tweet ('Esse calor não está normal!', 'normal', 'maria');
User2.sendTweet(Tweet3);

Tweet1.reply(Tweet2);
console.log(Tweet1.show());

const replies = Tweet1.showReplies();
console.log(replies);

const like1 = new Like (User3);

const tweet4 = new Tweet('Olá', 'normal', 'joana');
User3.sendTweet(tweet4);
const tweet5 = new Tweet('Bora assistir NFL?', 'normal', 'maria');
User2.sendTweet(tweet5);

User3.showFeed();
User2.follow(User1);
User2.showFeed();
