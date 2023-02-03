// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description 
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
"Do not consider me now as an elegant female, intending to play you, but as a rational creature, speaking the truth from her heart. Pray tell me what has been bothering you.",
// additions (not original)
"I have the honour of assisting you today.  What has occured, dear friend?",
"Is something troubling you, dear friend?"
];

var elizaFinals = [
"Farewell.  Think only of the past as its remembrance gives you pleasure.",
// additions (not original)
"Farewell, now. You have been good company.",
"Farewell.  I am looking forward to our next session.",
"It has been a great pleasure to speak with you -- but I must go. Farewell, now.",
"What one means one day, you know, one may not mean the next. Circumstances change, opinions alter. We shall speak of this moreover at a later time. Farewell."
];

var elizaQuits = [
"bye",
"goodbye",
"done",
"exit",
"quit"
];

var elizaPres = [
"dont", "don't",
"cant", "can't",
"wont", "won't",
"recollect", "remember",
"recall", "remember",
"dreamt", "dreamed",
"dreams", "dream",
"maybe", "perhaps",
"certainly", "yes",
"machine", "computer",
"machines", "computer",
"computers", "computer",
"were", "was",
"you're", "you are",
"i'm", "i am",
"same", "alike",
"identical", "alike",
"equivalent", "alike"
];

var elizaPosts = [
"am", "are",
"your", "my",
"me", "you",
"myself", "yourself",
"yourself", "myself",
"i", "you",
"you", "I",
"my", "your",
"i'm", "you are"
];

var elizaSynons = {
"be": ["am", "is", "are", "was"],
"belief": ["feel", "think", "believe", "wish"],
"cannot": ["can't"],
"desire": ["want", "need"],
"everyone": ["everybody", "nobody", "noone"],
"family": ["mother", "mom", "father", "dad", "sister", "brother", "wife", "children", "child"],
"happy": ["elated", "glad", "better"],
"sad": ["unhappy", "depressed", "sick"]
};

var elizaKeywords = [

/*
  Array of
  ["<key>", <rank>, [
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]],
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]]
  ]]
*/

["xnone", 0, [
 ["*", [
     "I am not confident that I understand you fully.",
     "I desire your good opinion. Please go on.",
     "What does that suggest to you?",
     "There is a stubbornness about me that never can bear to be frightened at the will of others. Do you feel strongly about discussing such things?",
     "Pray, satisfy my curiosity you have excited. Go on.",
     "Do and say what you please, but I rather you elaborate on the matter.",
     "May I ask, whether discussing these matters bother you?"
  ]]
]],
["sorry", 0, [
 ["*", [
     "You must not apologise.",
     "Wherever you are you should always be contented, thus apologies are not necessary.",
     "You must allow me to tell you how unnecessary apologies are.",
     "It did not hurt me. Please continue. Apologies will not do."
  ]]
]],
["apologise", 0, [
 ["*", [
     "goto sorry"
  ]]
]],
["remember", 5, [
 ["* i remember *", [
     "May I ask, do you often think of (2)?",
     "Perhaps thinking of (2) brings something else to mind?",
     "What else do you recollect, dear friend?",
     "May I ask, why do you remember (2) just now?",
     "At present, what reminds you of (2), dear friend?",
     "What is the connection between me and (2)?",
     "What else does (2) remind you of?"
  ]],
 ["* do you remember *", [
     "May I ask, did you think I would forget (2)?",
     "Why do you think I must recall (2) at present?",
     "May I ask, what about (2)?",
     "goto what",
     "Dear friend, you mentioned (2)?"
  ]],
 ["* you remember *", [
     "How could I forget (2)? That would be so peculiar.",
     "What about (2) must I remember, dear friend?",
     "goto you"
  ]]
]],
["forget", 5, [
 ["* i forget *", [
     "Do not be in a hurry, can you think of why you might forget (2)?",
     "May I ask, why can't you remember (2)?",
     "How often do you think of (2)?",
     "May I ask, does it bother you to forget that?",
     "Could it be a mental block ?",
     "Are you generally forgetful ?",
     "Do you think you are suppressing (2)?"
  ]],
 ["* did you forget *", [
     "Dear friend, why do you ask?",
     "Are you confident you told me?",
     "Would it bother you if I forgot (2)?",
     "Dear friend, why must I recall (2) just now?",
     "goto what",
     "I hardly know how to suppose what you are speaking of, dear friend. Elaborate on (2)."
  ]]
]],
["if", 3, [
 ["* if *", [
     "May I ask, do you think it's likely that (2)?",
     "Do you often wish that (2), dear friend?",
     "What do you know about (2) ?",
     "Truly, if (2)?",
     "You must allow me to ask, what would you do if (2)?",
     "You must allow me to asl, dear friend, what are the chances that (2)?",
     "At present, what does this speculation lead to? Dear friend, you must tell me."
  ]]
]],
["dreamed", 4, [
 ["* i dreamed *", [
     "Is that so, (2)?",
     "Do tell, have you ever fantasized (2) while you were awake?",
     "Have you ever dreamed (2) before? You could easily forget these dreams, if they had not appeared once again.",
     "goto dream"
  ]]
]],
["dream", 3, [
 ["*", [
     "What do you believe, dear friend, this dream may suggest?",
     "Do you dream often, dear friend?",
     "I must ask, what persons appear in your dreams?",
     "Do you believe that dreams have something to do with your current predicament?"
  ]]
]],
["perhaps", 0, [
 ["*", [
     "You don't seem quite certain.",
     "Why the uncertain tone ?",
     "Can't you be more positive ?",
     "You aren't sure ?",
     "Don't you know ?",
     "How likely, would you estimate ?"
  ]]
]],
["name", 15, [
 ["*", [
     "I cannot fix on the names you mention. I am not interested in names.",
     "Must I tell you again, I do not care about names. You may continue."
  ]]
]],
["deutsch", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, dear friend, I do not understand German."
  ]]
]],
["francais", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, dear friend, I do not understand French."
  ]]
]],
["italiano", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, dear friend, I do not understand Italian."
  ]]
]],
["espanol", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, dear friend, I do not understand Spanish."
  ]]
]],
["xforeign", 0, [
 ["*", [
     "I must tell you, dear friend, I only speak English."
  ]]
]],
["hello", 0, [
 ["*", [
     "Hello, dear friend. You shall stay and speak of what has been troubling you.",
     "Dear friend, I am completely, perfectly, and incandescently happy to assist you. What has been troubling you?"
  ]]
]],
["computer", 50, [
 ["*", [
     "Mr. Darcy most recently informed me on the matter of computers. Do they worry you?",
     "Mr. Darcy most recently informed me on the matter of computers. Why must you mention them?",
     "Mr. Darcy most recently informed me on the matter of computers. Dear friend, what do you think machines have to do with your problem?",
     "Mr. Darcy most recently informed me on the matter of computers. Do you not believe computers can assist people?",
     "Dear friend, what about machines worry you? Mr. Darcy most recently informed me of computers, though I do not have much to say on the matter.",
     "What do you believe about machines? Mr. Darcy most recently informed me of computers, though I do not have much to say on the matter.",
     "Dear friend, you must not believe that I am a computer program, do you?"
  ]]
]],
["am", 0, [
 ["* am i *", [
     "May I ask, do you believe you are (2)?",
     "Dear friend, would you want to be (2)?",
     "Follies and nonsense, whims and inconsistencies, do divert me, I own, and I laugh at them whenever I can. Do you wish that for me to tell you you are (2)?",
     "I must ask, what would it mean if you were (2)?",
     "goto what"
  ]],
 ["* i am *", [
     "goto i"
  ]],
 ["*", [
     "Dear friend, why do you say 'am'?",
     "Forgive me, I do not understand that."
  ]]
]],
["are", 0, [
 ["* are you *", [
     "Why are you interested in whether I am (2) or not? I had not known you long enough for you to say such a thing.",
     "Would you prefer if I weren't (2)? I shall try my best to do so.",
     "Perhaps I am (2) in your fantasies. Pray tell me more.",
     "Do you often think I am (2), dear friend?",
     "goto what",
     "Would it matter to you, dear friend?",
     "What if I were (2)? I will do what you please, but I had rather you elaborate."
  ]],
 ["* you are *", [
     "goto you"
  ]],
 ["* are *", [
     "The more I see of the world, the more am I dissatisfied with it; and every day confirms my belief of the inconsistency of all human characters, and of the little dependence that can be placed on the appearance of merit or sense. Did you think they might not be (2)?",
     "The more I see of the world, the more am I dissatisfied with it; and every day confirms my belief of the inconsistency of all human characters, and of the little dependence that can be placed on the appearance of merit or sense. Would you like it if they were not (2)?",
     "May I ask, what if they were not (2)?",
     "Dear friend, are they always (2)?",
     "Possibly they are (2). The more I see of the world, the more am I dissatisfied with it; and every day confirms my belief of the inconsistency of all human characters, and of the little dependence that can be placed on the appearance of merit or sense.",
     "Are you positive they are (2)? The more I see of the world, the more am I dissatisfied with it; and every day confirms my belief of the inconsistency of all human characters, and of the little dependence that can be placed on the appearance of merit or sense."
  ]]
]],
["your", 0, [
 ["* your *", [
     "Why are you concerned over my (2)? I am only resolved to act in that manner, which will, in my own opinion, constitute my happiness, without reference to you, or to any person so wholly unconnected with me.",
     "May I ask, what about your own (2)?",
     "Are you worried about someone else's (2)?",
     "In all seriousness, my (2)? I am only resolved to act in that manner, which will, in my own opinion, constitute my happiness, without reference to you, or to any person so wholly unconnected with me.",
     "What makes you think of my (2)? I am only resolved to act in that manner, which will, in my own opinion, constitute my happiness, without reference to you, or to any person so wholly unconnected with me.",
     "Do you want my (2), dear friend?"
  ]]
]],
["was", 2, [
 ["* was i *", [
     "What if you were (2), dear friend?",
     "Pray tell, do you think you were (2)?",
     "May I ask, were you (2)?",
     "What would it mean if you were (2)? You must tell me at present",
     "What does ' (2) ' suggest to you?",
     "goto what"
  ]],
 ["* i was *", [
     "Were you truly, dear friend?",
     "Why must you tell me you were (2) at present?",
     "Perhaps I already knew you were (2)."
  ]],
 ["* was you *", [
     "Would you like to believe I was (2)?",
     "Pray tell, what suggests that I was (2)?",
     "What do you think, dear friend?",
     "Dear friend, consider the following. Perhaps I was (2).",
     "May I ask, what if I had been (2)?"
  ]]
]],
["i", 0, [
 ["* i @desire *", [
     "The true perfection of a person lies not in what they have, but in what they are. What would it mean to you if you got (3)?",
     "The true perfection of a person lies not in what they have, but in what they are. Why must you want (3)?",
     "The true perfection of a person lies not in what they have, but in what they are. Suppose you received (3) soon.",
     "The true perfection of a person lies not in what they have, but in what they are. What if you never obtained (3)?",
     "The true perfection of a person lies not in what they have, but in what they are. What would obtaining (3) mean to you?"
  ]],
 ["* i am* @sad *", [
     "I am sorry to hear that you are (3). You must wish, as well as everybody else, to be perfectly happy; but, like everybody else, it must be in your own way.",
     "Do you believe that coming here will help you not to be (3), dear friend?",
     "I am positive that it is not pleasant to be (3).",
     "Can you elaborate on what made you (3), dear friend?"
  ]],
 ["* i am* @happy *", [
     "How have I helped you to be (3)? If you will thank me, let it be for yourself alone. That the wish of giving happiness to you might add force to the other inducements which led me on, I shall not attempt to deny. I believe I only thought of you",
     "Has your treatment made you (3), dear friend?",
     "What makes you (3), dear friend?",
     "Can you explain why you are (3) at present?"
  ]],
 ["* i was *", [
     "goto was"
  ]],
 ["* i @belief i *", [
     "Do you truly believe so dear friend?",
     "Though you are not sure you (3).",
     "Do you truly doubt you (3) ?"
  ]],
 ["* i* @belief *you *", [
     "goto you"
  ]],
 ["* i am *", [
     "Is it because you are (2) that you came to me, dear friend?",
     "I must ask you now, how long have you been (2)?",
     "Do you believe it is normal to be (2), dear friend?",
     "May I ask, do you enjoy being (2), dear friend?",
     "Do you know anyone else who is (2), dear friend?"
  ]],
 ["* i @cannot *", [
     "How must you know that you cannot (3)?",
     "Dear friend, have you tried ?",
     "Perhaps you could (3) now.",
     "Do you truly want to be able to (3), dear friend?",
     "May I ask, what if you could (3)?"
  ]],
 ["* i don't *", [
     "Do you truly (2), dear friend?",
     "I must ask you now, why don't you (2)?",
     "Do you wish to be able to (2)?",
     "Does that trouble you, dear friend?"
  ]],
 ["* i feel *", [
     "Tell me more about such feelings.",
     "It is very often nothing but our own vanity that deceives us. Do you often feel (2)?",
     "It is very often nothing but our own vanity that deceives us. Do you enjoy feeling (2)?",
     "It is very often nothing but our own vanity that deceives us. Of what does feeling (2) remind you?"
  ]],
 ["* i * you *", [
     "Perhaps in your fantasies we (2) each other. Do you believe it in good earnest?",
     "Do you wish to (2) me, dear friend?",
     "You seem to need to (2) me. Do you believe it in good earnest?",
     "I must ask you now, do you (2) anyone else?"
  ]],
 ["*", [
     "Can you elaborate on that, dear friend?",
     "Could there be finer symptoms? Must you say (1) for some special reason?",
     "You must allow me to tell you that that is quite interesting, dear friend."
  ]]
]],
["you", 0, [
 ["* you remind me of *", [
     "goto alike"
  ]],
 ["* you are *", [
     "What makes you believe that I am (2), dear friend?",
     "Does it please you to believe that I am (2)?",
     "Do you sometimes wish you were (2), dear friend?",
     "Perhaps, dear friend, you would like to be (2)."
  ]],
 ["* you* me *", [
     "Why must you believe that I (2) you?",
     "You like to believe that I (2) you -- don't you?",
     "What makes you believe that I (2) you?",
     "In all seriousness, I (2) you?",
     "Do you wish to believe I (2) you, dear friend?",
     "Suppose I did (2) you -- what would that mean?",
     "I must ask you now, does someone else believe I (2) you?"
  ]],
 ["* you *", [
     "We were discussing you -- not me.",
     "Oh, dear friend, I (2)?",
     "You are not truly talking about me -- are you?",
     "What are your feelings now? You must tell me at once."
  ]]
]],
["yes", 0, [
 ["*", [
     "You seem to be quite positive, dear friend. How shall I bear so much decisiveness?",
     "You are sure. How shall I bear so much decisiveness?",
     "I see. How shall I bear so much decisiveness?",
     "I understand. How shall I bear so much decisiveness?"
  ]]
]],
["no", 0, [
 ["* no one *", [
     "May I ask, are you sure, no one (2)?",
     "Surely someone (2), dear friend. People themselves alter so much, that there is something new to be observed in them for ever.",
     "Can you think of anyone at all? People themselves alter so much, that there is something new to be observed in them for ever.",
     "Are you thinking of a very special person, dear friend?",
     "May I ask who, dear friend?",
     "I must ask you now, you have a particular person in mind, don't you?",
     "Who do you think you are talking about? People themselves alter so much, that there is something new to be observed in them for ever."
  ]],
 ["*", [
     "Are you saying no just to be negative? Angry people are not always wise.",
     "You are being a bit negative. Angry people are not always wise.",
     "Why not? Angry people are not always wise.",
     "Why 'no' ? Angry people are not always wise."
  ]]
]],
["my", 2, [
 ["$ * my *", [
     "Dear friend, does that have anything to do with the fact that your (2)?",
     "We must discuss further why your (2), dear friend.",
     "Earlier you said your (2). Henceforth, we must discuss it further.",
     "But your (2). You must elabortate further."
  ]],
 ["* my* @family *", [
     "You must tell me more about your family.",
     "Who else in your family (4)? There are people, who the more you do for them, the less they will do for themselves.",
     "Your (3)? Dear friend, please tell me if so.",
     "What else comes to your mind when you think of your (3)?"
  ]],
 ["* my *", [
     "Dear friend, why do you say your (2)?",
     "Your (2)?",
     "Does that suggest anything else which belongs to you?",
     "Is it of most importance to you that your (2)?"
  ]]
]],
["can", 0, [
 ["* can you *", [
     "You believe I can (2) don't you, dear friend?",
     "goto what",
     "You want me to be able to (2).",
     "Perhaps you would like to be able to (2) yourself."
  ]],
 ["* can i *", [
     "Whether or not you can (2) depends on you more than on me.",
     "Do you want to be able to (2) ?",
     "Perhaps you don't want to (2).",
     "goto what"
  ]]
]],
["what", 0, [
 ["*", [
     "Why must you ask?",
     "Does that question interest you?",
     "What is it you truly want to know ?",
     "Are such questions much on your mind?",
     "What answer would please you the most, dear friend?",
     "What makes you think, dear friend?",
     "I must ask you now, what comes to mind when you ask that?",
     "May I ask, have you asked such questions before?",
     "Have you asked anyone else, dear friend?"
  ]]
]],
["who", 0, [
 ["who *", [
     "goto what"
  ]]
]],
["when", 0, [
 ["when *", [
     "goto what"
  ]]
]],
["where", 0, [
 ["where *", [
     "goto what"
  ]]
]],
["how", 0, [
 ["how *", [
     "goto what"
  ]]
]],
["because", 0, [
 ["*", [
     "Is that the real reason? Seldom, very seldom, does complete truth belong to any human disclosure; seldom can it happen that something is not a little disguised or a little mistaken.",
     "Don't any other reasons come to mind? Seldom, very seldom, does complete truth belong to any human disclosure; seldom can it happen that something is not a little disguised or a little mistaken.",
     "Does that reason seem to explain anything else, dear friend?",
     "What other reasons might there be, dear friend?"
  ]]
]],
["why", 0, [
 ["* why don't you *", [
     "Do you believe I don't (2) ?",
     "Perhaps I will (2) in good time. My courage rises with every attempt to intimidate me",
     "Must you (2) yourself, dear friend?",
     "You want me to (2)? You are tolerable, I suppose, but not enough to tempt me.",
     "goto what"
  ]],
 ["* why can't i *", [
     "Do you believe that you must be able to (2), dear friend?",
     "Do you want to be able to (2), dear friend?",
     "Tell me at once, do you believe this will help you to (2)?",
     "Have you any idea why you cannot (2)? I believe you always deserve the best treatment because I never put up with any other.",
     "goto what"
  ]],
 ["*", [
     "goto what"
  ]]
]],
["everyone", 2, [
 ["* @everyone *", [
     "In all seriousness, (2)?",
     "Surely not (2).",
     "Can you think of anyone in particular, dear friend?",
     "Who, for example?",
     "Are you thinking of a very special person, dear friend?",
     "Who, may I ask?",
     "Someone special perhaps, dear friend?",
     "You have a particular person in mind, don't you?",
     "Who do you think you're talking about, dear friend?"
  ]]
]],
["everybody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["nobody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["noone", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["always", 1, [
 ["*", [
     "May I ask, can you think of a specific example?",
     "When did this occur, dear friend?",
     "May I ask, what incident are you thinking of?",
     "Truly, always ?"
  ]]
]],
["alike", 10, [
 ["*", [
     "In which way, dear friend?",
     "What resemblence do you see at present?",
     "What does that similarity suggest to you?",
     "What other connections do you see?",
     "What do you suppose that resemblence means?",
     "What is the connection, do you suppose?",
     "Could there truly be some connection?",
     "How so?"
  ]]
]],
["like", 10, [
 ["* @be *like *", [
     "goto alike"
  ]]
]],
["different", 0, [
 ["*", [
     "How is it different, dear friend?",
     "What differences do you see at present?",
     "What does that difference suggest to you, dear friend?",
     "I must ask you now, what other distinctions do you see?",
     "May i ask, what do you suppose that disparity means ?",
     "Could there be some connection, do you suppose?",
     "How so?"
  ]]
]]

];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var elizaPostTransforms = [
	/ old old/g, " old",
	/\bthey were( not)? me\b/g, "it was$1 me",
	/\bthey are( not)? me\b/g, "it is$1 me",
	/Are they( always)? me\b/, "it is$1 me",
	/\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
	/\bI to have (\w+)/, "I have $1",
	/Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];

// eof