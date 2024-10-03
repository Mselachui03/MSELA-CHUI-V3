let handler  = async (m, { conn }) => {
conn.reply(m.chat,`*┌────「 CHALLENGE 」─*\n*“${pickRandom(global.bucin)}”*\n*└────「 𝙼𝚈𝚂𝚃𝙸𝙲 」─*`, m)
}
handler.help = ['challenge']
handler.tags = ['fun']
handler.command = /^challenge/i
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.bucin = [
"Pass the pack of an ant",
"Tell your friends that you're going to live in the US and send me a screenshot of what they told you,"
"Scream from the window that you want to suck and send me the video,"
"Write the name of your crush",
"You must put the name of my creator in your WhatsApp status, without giving context,"
"Send me a photograph of you",
"You must draw the name of a member of the group somewhere on your body, then take a photo and send it,"
"Take a photo giving a kiss to a Television",
 "Send me a picture in your underwear,"
"Write in your WhatsApp status that you like to eat dirt",
"You must put the photograph of a group participant who is of the opposite sex to yours on your WhatsApp profile for 3 days 📸📸",
"You have to send an audio recording of the song: A duck that sings happily quack 🦆",
"Send a message to your ex and tell him I still like you", "Send an audio saying I love The Shadow Brokers - Bot", 
"Tell your crush that you love her and capture the group", "Send an audio singing", 
"Send a photo in which you appear without covering your face or anything", "Send a video dancing", 
"Invite people you don't know to take a selfie with you and then send it to the group," 
"Pick some random numbers from your contacts and text them 'I'm pregnant'." 
"Take whatever drink is near you, then mix it with chili and drink!" 
"Take a random number from your contacts, call them and say 'I love you,'" 
"Buy the cheapest food in the cafeteria (or buy a bottle of water) and sob to your classmates, 'This... is the most expensive food I've ever bought.'" 
"Buy a bottle of coke and splash flowers with it in front of the crowd.", 
"Stand near the refrigerator, close your eyes, choose random foods in it, even when eating, your eyes should be closed.", 
"Standing in the middle of the basketball court and yelling, 'I LOVE YOU MY PRINCE/PRINCESS,'" 
"Pay your respects to someone in the class and then say, 'I am at your service, Your Majesty,'" 
"Walking clapping and singing the song 'Happy Birthday' from class to the hallway.", 
"Kneel on one knee and say 'Marry me?' the first person to enter the room.", 
"Make an absurd headdress with fabric, whatever it is, keep asking for poses in front of the camera, keep uploading," 
"Say 'YOU ARE BEAUTIFUL / VERY BEAUTIFUL, YOU DON'T LIE' to the girl you think is the prettiest in this class.", 
"Tell someone in class, 'First they told me I was your twin, we broke up, and then I had plastic surgery. And this is the most serious thing I've ever said,'" 
"Throwing someone's notebook in the trash, in front of their eyes, saying 'This book no one can understand'", 
"Pluck the hair off your own leg 3 times!" 
"Chat with your parents, tell them you miss them with sad emoticons.", 
"Try searching Google for scary or ridiculous things like trypophobia, etc.", 
"Sit relaxed in the middle of the basketball court while pretending it's a sunbathing beach.", 
"Fill your mouth with water and you have to last up to two rounds, if you laugh and spill or drink, then you have to refill and add one more round.", 
" Greet the first person who walks into this room and say 'Welcome to Who Wants to Be a Millionaire!' ", 
"Text your parents 'Hey bro! I just bought the latest issue of Playboy magazine!' ", 
"Text your parents: 'Mom, Dad, I know I'm an adopted child from the orphanage. Don't hide this anymore.'" 
"Send three random numbers to your contacts and write 'I just became a Playboy magazine model,'" 
"Eat a spoonful of sweet soy sauce and soy sauce!", 
"Eat something but don't use your hands.", 
"Getting angry at your friends who don't come even though you have a date to play 'Truth or Dare' together," 
"Break the egg with your head!" 
"Eat foods that have been mixed together and will taste strange, but make sure the foods are not harmful to your health in the long or short term.", 
"Dance like Girls' Generation for the boys in front of the class, or dance like Super Junior for the girls.", 
"Raise the flagpole without the flag.", 
"Talking about your crush, your closest friends, the opposite sex you don't know at all, and things like that.", 
"Copy all your friends' hairstyles.", 
"Singing the song HAI TAYO in front of many people while dancing", 
"Sing the Baby Shark song out loud in the classroom.", 
"Borrow something from neighbors", 
"Ask for the signature of one of the fiercest teachers while saying 'You are truly the person I admire most in the world,'" 
"Ask someone (random) for money on the street saying 'I don't have money to have an angkot'.", 
"Drink something that has been prepared/agreed upon, but make sure it is not dangerous, it can be like drinking syrup mixed with soy sauce.", 
"Talking to your crush's fear emoticon, it's okay to chat with whatever you want, through any means you can.", 
"Sing your favorite Disney movie outside the house while screaming.", 
"Name 1 blue to 20 blue quickly and you must not make any mistakes. If it is wrong, it must be repeated from the beginning.", 
"Put on a copy paper crown and tell everyone in the room 'HONOR TO THE KING' while pointing at each person with a ruler.", 
"Put your pants back on until the next morning.", 
"Hug the person you DON'T like in class and say, 'Thank you so much for being the best person for me,'" 
"Go to a wide field, then run as fast as possible while saying 'I'm crazy, I'm crazy,'" 
"Pick a flower and then match it to someone you don't know (must be of the opposite sex)," 
"Pick a random person on the street, then say 'You don't know you're beautiful' (ala One Direction)," 
"Pretending to be possessed eg: possessed by a tiger, etc.", 
"Ask him to whistle as his mouth is again full of food.", 
"Ask to be a waiter to serve you with your friends for lunch.", 
"Tell them to use socks to make gloves.", 
"Tell them to wear the strangest hat/most absurd helmet during the next round.", 
"Call your mom and tell her 'Mom, I want to get married as soon as possible,'" 
"Call your ex and say 'I miss you,'" 
"Change clothes with the closest person until the next round.", 
"Update status on WhatsApp anything with words starting with 'S'", 
"Upload a singing video to YouTube that is singing popular songs.", 
"Color your fingernails and toenails different colors for a week.", 
"eat 2 tablespoons of rice without garnishes", 
"Send the '🦄💨' emoji every time you type in a group 1 day", 
"say 'Welcome to Who Wants to Be a Millionaire!' to all the groups you have", 
"sing the chorus of the last song you played", 
"Send a voice audio to your ex/lover/girlfriend, say hello (name), I want to call, just a moment. I miss you🥺👉🏼👈🏼", 
"Tell random people: First they told me I was your twin, we broke up, and then I had plastic surgery. And this," 
"Make 1 rhyme for the first player!" 
"tell your own version of shameful things", 
"change name to 'Gay' for 24 hours", 
"Mention your type of girlfriend!" 
"Say 'I'm in love with you, do you want to be my boyfriend or not?' to the last opposite sex you chatted with on WhatsApp, wait for them to respond", 
"Talk to your ex on WhatsApp and say 'I love you, please come back'. Send a screenshot as evidence of the challenge accomplished!"
]
