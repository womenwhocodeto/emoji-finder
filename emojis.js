const EMOJIS = [
  {
    "emoji": "😄",
    "keywords": [
      "smile",
      "happy",
      "joy",
      "pleased"
    ]
  },
  {
    "emoji": "😃",
    "keywords": [
      "smiley",
      "happy",
      "joy",
      "haha"
    ]
  },
  {
    "emoji": "😀",
    "keywords": [
      "grinning",
      "smile",
      "happy"
    ]
  },
  {
    "emoji": "😊",
    "keywords": [
      "blush",
      "proud"
    ]
  },
  {
    "emoji": "☺️",
    "keywords": [
      "relaxed",
      "blush",
      "pleased"
    ]
  },
  {
    "emoji": "😉",
    "keywords": [
      "wink",
      "flirt"
    ]
  },
  {
    "emoji": "😍",
    "keywords": [
      "heart_eyes",
      "love",
      "crush"
    ]
  },
  {
    "emoji": "😘",
    "keywords": [
      "kissing_heart",
      "flirt"
    ]
  },
  {
    "emoji": "😚",
    "keywords": [
      "kissing_closed_eyes"
    ]
  },
  {
    "emoji": "😗",
    "keywords": [
      "kissing"
    ]
  },
  {
    "emoji": "😙",
    "keywords": [
      "kissing_smiling_eyes"
    ]
  },
  {
    "emoji": "😜",
    "keywords": [
      "stuck_out_tongue_winking_eye",
      "prank",
      "silly"
    ]
  },
  {
    "emoji": "😝",
    "keywords": [
      "stuck_out_tongue_closed_eyes",
      "prank"
    ]
  },
  {
    "emoji": "😛",
    "keywords": [
      "stuck_out_tongue"
    ]
  },
  {
    "emoji": "😳",
    "keywords": [
      "flushed"
    ]
  },
  {
    "emoji": "😁",
    "keywords": [
      "grin"
    ]
  },
  {
    "emoji": "😔",
    "keywords": [
      "pensive"
    ]
  },
  {
    "emoji": "😌",
    "keywords": [
      "relieved",
      "whew"
    ]
  },
  {
    "emoji": "😒",
    "keywords": [
      "unamused",
      "meh"
    ]
  },
  {
    "emoji": "😞",
    "keywords": [
      "disappointed",
      "sad"
    ]
  },
  {
    "emoji": "😣",
    "keywords": [
      "persevere",
      "struggling"
    ]
  },
  {
    "emoji": "😢",
    "keywords": [
      "cry",
      "sad",
      "tear"
    ]
  },
  {
    "emoji": "😂",
    "keywords": [
      "joy",
      "tears"
    ]
  },
  {
    "emoji": "😭",
    "keywords": [
      "sob",
      "sad",
      "cry",
      "bawling"
    ]
  },
  {
    "emoji": "😪",
    "keywords": [
      "sleepy",
      "tired"
    ]
  },
  {
    "emoji": "😥",
    "keywords": [
      "disappointed_relieved",
      "phew",
      "sweat",
      "nervous"
    ]
  },
  {
    "emoji": "😰",
    "keywords": [
      "cold_sweat",
      "nervous"
    ]
  },
  {
    "emoji": "😅",
    "keywords": [
      "sweat_smile",
      "hot"
    ]
  },
  {
    "emoji": "😓",
    "keywords": [
      "sweat"
    ]
  },
  {
    "emoji": "😩",
    "keywords": [
      "weary",
      "tired"
    ]
  },
  {
    "emoji": "😫",
    "keywords": [
      "tired_face",
      "upset",
      "whine"
    ]
  },
  {
    "emoji": "😨",
    "keywords": [
      "fearful",
      "scared",
      "shocked",
      "oops"
    ]
  },
  {
    "emoji": "😱",
    "keywords": [
      "scream",
      "horror",
      "shocked"
    ]
  },
  {
    "emoji": "😠",
    "keywords": [
      "angry",
      "mad",
      "annoyed"
    ]
  },
  {
    "emoji": "😡",
    "keywords": [
      "rage",
      "pout",
      "angry"
    ]
  },
  {
    "emoji": "😤",
    "keywords": [
      "triumph",
      "smug"
    ]
  },
  {
    "emoji": "😖",
    "keywords": [
      "confounded"
    ]
  },
  {
    "emoji": "😆",
    "keywords": [
      "laughing",
      "satisfied",
      "happy",
      "haha"
    ]
  },
  {
    "emoji": "😋",
    "keywords": [
      "yum",
      "tongue",
      "lick"
    ]
  },
  {
    "emoji": "😷",
    "keywords": [
      "mask",
      "sick",
      "ill"
    ]
  },
  {
    "emoji": "😎",
    "keywords": [
      "sunglasses",
      "cool"
    ]
  },
  {
    "emoji": "😴",
    "keywords": [
      "sleeping",
      "zzz"
    ]
  },
  {
    "emoji": "😵",
    "keywords": [
      "dizzy_face"
    ]
  },
  {
    "emoji": "😲",
    "keywords": [
      "astonished",
      "amazed",
      "gasp"
    ]
  },
  {
    "emoji": "😟",
    "keywords": [
      "worried",
      "nervous"
    ]
  },
  {
    "emoji": "😦",
    "keywords": [
      "frowning"
    ]
  },
  {
    "emoji": "😧",
    "keywords": [
      "anguished",
      "stunned"
    ]
  },
  {
    "emoji": "😈",
    "keywords": [
      "smiling_imp",
      "devil",
      "evil",
      "horns"
    ]
  },
  {
    "emoji": "👿",
    "keywords": [
      "imp",
      "angry",
      "devil",
      "evil",
      "horns"
    ]
  },
  {
    "emoji": "😮",
    "keywords": [
      "open_mouth",
      "surprise",
      "impressed",
      "wow"
    ]
  },
  {
    "emoji": "😬",
    "keywords": [
      "grimacing"
    ]
  },
  {
    "emoji": "😐",
    "keywords": [
      "neutral_face",
      "meh"
    ]
  },
  {
    "emoji": "😕",
    "keywords": [
      "confused"
    ]
  },
  {
    "emoji": "😯",
    "keywords": [
      "hushed",
      "silence",
      "speechless"
    ]
  },
  {
    "emoji": "😶",
    "keywords": [
      "no_mouth",
      "mute",
      "silence"
    ]
  },
  {
    "emoji": "😇",
    "keywords": [
      "innocent",
      "angel"
    ]
  },
  {
    "emoji": "😏",
    "keywords": [
      "smirk",
      "smug"
    ]
  },
  {
    "emoji": "😑",
    "keywords": [
      "expressionless"
    ]
  },
  {
    "emoji": "👲",
    "keywords": [
      "man_with_gua_pi_mao"
    ]
  },
  {
    "emoji": "👳",
    "keywords": [
      "man_with_turban"
    ]
  },
  {
    "emoji": "👮",
    "keywords": [
      "cop",
      "police",
      "law"
    ]
  },
  {
    "emoji": "👷",
    "keywords": [
      "construction_worker",
      "helmet"
    ]
  },
  {
    "emoji": "💂",
    "keywords": [
      "guardsman"
    ]
  },
  {
    "emoji": "👶",
    "keywords": [
      "baby",
      "child",
      "newborn"
    ]
  },
  {
    "emoji": "👦",
    "keywords": [
      "boy",
      "child"
    ]
  },
  {
    "emoji": "👧",
    "keywords": [
      "girl",
      "child"
    ]
  },
  {
    "emoji": "👨",
    "keywords": [
      "man",
      "mustache",
      "father",
      "dad"
    ]
  },
  {
    "emoji": "👩",
    "keywords": [
      "woman",
      "mother",
      "mom"
    ]
  },
  {
    "emoji": "👴",
    "keywords": [
      "older_man"
    ]
  },
  {
    "emoji": "👵",
    "keywords": [
      "older_woman"
    ]
  },
  {
    "emoji": "👱",
    "keywords": [
      "person_with_blond_hair",
      "boy"
    ]
  },
  {
    "emoji": "👼",
    "keywords": [
      "angel"
    ]
  },
  {
    "emoji": "👸",
    "keywords": [
      "princess",
      "blonde",
      "crown",
      "royal"
    ]
  },
  {
    "emoji": "😺",
    "keywords": [
      "smiley_cat"
    ]
  },
  {
    "emoji": "😸",
    "keywords": [
      "smile_cat"
    ]
  },
  {
    "emoji": "😻",
    "keywords": [
      "heart_eyes_cat"
    ]
  },
  {
    "emoji": "😽",
    "keywords": [
      "kissing_cat"
    ]
  },
  {
    "emoji": "😼",
    "keywords": [
      "smirk_cat"
    ]
  },
  {
    "emoji": "🙀",
    "keywords": [
      "scream_cat",
      "horror"
    ]
  },
  {
    "emoji": "😿",
    "keywords": [
      "crying_cat_face",
      "sad",
      "tear"
    ]
  },
  {
    "emoji": "😹",
    "keywords": [
      "joy_cat"
    ]
  },
  {
    "emoji": "😾",
    "keywords": [
      "pouting_cat"
    ]
  },
  {
    "emoji": "👹",
    "keywords": [
      "japanese_ogre",
      "monster"
    ]
  },
  {
    "emoji": "👺",
    "keywords": [
      "japanese_goblin"
    ]
  },
  {
    "emoji": "🙈",
    "keywords": [
      "see_no_evil",
      "monkey",
      "blind",
      "ignore"
    ]
  },
  {
    "emoji": "🙉",
    "keywords": [
      "hear_no_evil",
      "monkey",
      "deaf"
    ]
  },
  {
    "emoji": "🙊",
    "keywords": [
      "speak_no_evil",
      "monkey",
      "mute",
      "hush"
    ]
  },
  {
    "emoji": "💀",
    "keywords": [
      "skull",
      "dead",
      "danger",
      "poison"
    ]
  },
  {
    "emoji": "👽",
    "keywords": [
      "alien",
      "ufo"
    ]
  },
  {
    "emoji": "💩",
    "keywords": [
      "poop",
      "hankey",
      "crap"
    ]
  },
  {
    "emoji": "🔥",
    "keywords": [
      "fire",
      "burn"
    ]
  },
  {
    "emoji": "✨",
    "keywords": [
      "sparkles",
      "shiny"
    ]
  },
  {
    "emoji": "🌟",
    "keywords": [
      "star2"
    ]
  },
  {
    "emoji": "💫",
    "keywords": [
      "dizzy",
      "star"
    ]
  },
  {
    "emoji": "💥",
    "keywords": [
      "boom",
      "collision",
      "explode"
    ]
  },
  {
    "emoji": "💢",
    "keywords": [
      "anger",
      "angry"
    ]
  },
  {
    "emoji": "💦",
    "keywords": [
      "sweat_drops",
      "water",
      "workout"
    ]
  },
  {
    "emoji": "💧",
    "keywords": [
      "droplet",
      "water"
    ]
  },
  {
    "emoji": "💤",
    "keywords": [
      "zzz",
      "sleeping"
    ]
  },
  {
    "emoji": "💨",
    "keywords": [
      "dash",
      "wind",
      "blow",
      "fast"
    ]
  },
  {
    "emoji": "👂",
    "keywords": [
      "ear",
      "hear",
      "sound",
      "listen"
    ]
  },
  {
    "emoji": "👀",
    "keywords": [
      "eyes",
      "look",
      "see",
      "watch"
    ]
  },
  {
    "emoji": "👃",
    "keywords": [
      "nose",
      "smell"
    ]
  },
  {
    "emoji": "👅",
    "keywords": [
      "tongue",
      "taste"
    ]
  },
  {
    "emoji": "👄",
    "keywords": [
      "lips",
      "kiss"
    ]
  },
  {
    "emoji": "👍",
    "keywords": [
      "+1",
      "thumbsup",
      "approve",
      "ok"
    ]
  },
  {
    "emoji": "👎",
    "keywords": [
      "-1",
      "thumbsdown",
      "disapprove",
      "bury"
    ]
  },
  {
    "emoji": "👌",
    "keywords": [
      "ok_hand"
    ]
  },
  {
    "emoji": "👊",
    "keywords": [
      "facepunch",
      "punch",
      "attack"
    ]
  },
  {
    "emoji": "✊",
    "keywords": [
      "fist",
      "power"
    ]
  },
  {
    "emoji": "✌️",
    "keywords": [
      "v",
      "victory",
      "peace"
    ]
  },
  {
    "emoji": "👋",
    "keywords": [
      "wave",
      "goodbye"
    ]
  },
  {
    "emoji": "✋",
    "keywords": [
      "hand",
      "raised_hand",
      "highfive",
      "stop"
    ]
  },
  {
    "emoji": "👐",
    "keywords": [
      "open_hands"
    ]
  },
  {
    "emoji": "👆",
    "keywords": [
      "point_up_2"
    ]
  },
  {
    "emoji": "👇",
    "keywords": [
      "point_down"
    ]
  },
  {
    "emoji": "👉",
    "keywords": [
      "point_right"
    ]
  },
  {
    "emoji": "👈",
    "keywords": [
      "point_left"
    ]
  },
  {
    "emoji": "🙌",
    "keywords": [
      "raised_hands",
      "hooray"
    ]
  },
  {
    "emoji": "🙏",
    "keywords": [
      "pray",
      "please",
      "hope",
      "wish"
    ]
  },
  {
    "emoji": "☝️",
    "keywords": [
      "point_up"
    ]
  },
  {
    "emoji": "👏",
    "keywords": [
      "clap",
      "praise",
      "applause"
    ]
  },
  {
    "emoji": "💪",
    "keywords": [
      "muscle",
      "flex",
      "bicep",
      "strong",
      "workout"
    ]
  },
  {
    "emoji": "🚶",
    "keywords": [
      "walking"
    ]
  },
  {
    "emoji": "🏃",
    "keywords": [
      "runner",
      "running",
      "exercise",
      "workout",
      "marathon"
    ]
  },
  {
    "emoji": "💃",
    "keywords": [
      "dancer",
      "dress"
    ]
  },
  {
    "emoji": "👫",
    "keywords": [
      "couple",
      "date"
    ]
  },
  {
    "emoji": "👪",
    "keywords": [
      "family",
      "home",
      "parents",
      "child"
    ]
  },
  {
    "emoji": "👬",
    "keywords": [
      "two_men_holding_hands",
      "couple",
      "date"
    ]
  },
  {
    "emoji": "👭",
    "keywords": [
      "two_women_holding_hands",
      "couple",
      "date"
    ]
  },
  {
    "emoji": "💏",
    "keywords": [
      "couplekiss"
    ]
  },
  {
    "emoji": "💑",
    "keywords": [
      "couple_with_heart"
    ]
  },
  {
    "emoji": "👯",
    "keywords": [
      "dancers",
      "bunny"
    ]
  },
  {
    "emoji": "🙆",
    "keywords": [
      "ok_woman"
    ]
  },
  {
    "emoji": "🙅",
    "keywords": [
      "no_good",
      "ng_woman",
      "stop",
      "halt"
    ]
  },
  {
    "emoji": "💁",
    "keywords": [
      "information_desk_person"
    ]
  },
  {
    "emoji": "🙋",
    "keywords": [
      "raising_hand"
    ]
  },
  {
    "emoji": "💆",
    "keywords": [
      "massage",
      "spa"
    ]
  },
  {
    "emoji": "💇",
    "keywords": [
      "haircut",
      "beauty"
    ]
  },
  {
    "emoji": "💅",
    "keywords": [
      "nail_care",
      "beauty",
      "manicure"
    ]
  },
  {
    "emoji": "👰",
    "keywords": [
      "bride_with_veil",
      "marriage",
      "wedding"
    ]
  },
  {
    "emoji": "🙎",
    "keywords": [
      "person_with_pouting_face"
    ]
  },
  {
    "emoji": "🙍",
    "keywords": [
      "person_frowning",
      "sad"
    ]
  },
  {
    "emoji": "🙇",
    "keywords": [
      "bow",
      "respect",
      "thanks"
    ]
  },
  {
    "emoji": "🎩",
    "keywords": [
      "tophat",
      "hat",
      "classy"
    ]
  },
  {
    "emoji": "👑",
    "keywords": [
      "crown",
      "king",
      "queen",
      "royal"
    ]
  },
  {
    "emoji": "👒",
    "keywords": [
      "womans_hat"
    ]
  },
  {
    "emoji": "👟",
    "keywords": [
      "athletic_shoe",
      "sneaker",
      "sport",
      "running"
    ]
  },
  {
    "emoji": "👞",
    "keywords": [
      "mans_shoe",
      "shoe"
    ]
  },
  {
    "emoji": "👡",
    "keywords": [
      "sandal",
      "shoe"
    ]
  },
  {
    "emoji": "👠",
    "keywords": [
      "high_heel",
      "shoe"
    ]
  },
  {
    "emoji": "👢",
    "keywords": [
      "boot"
    ]
  },
  {
    "emoji": "👕",
    "keywords": [
      "shirt",
      "tshirt"
    ]
  },
  {
    "emoji": "👔",
    "keywords": [
      "necktie",
      "shirt",
      "formal"
    ]
  },
  {
    "emoji": "👚",
    "keywords": [
      "womans_clothes"
    ]
  },
  {
    "emoji": "👗",
    "keywords": [
      "dress"
    ]
  },
  {
    "emoji": "🎽",
    "keywords": [
      "running_shirt_with_sash",
      "marathon"
    ]
  },
  {
    "emoji": "👖",
    "keywords": [
      "jeans",
      "pants"
    ]
  },
  {
    "emoji": "👘",
    "keywords": [
      "kimono"
    ]
  },
  {
    "emoji": "👙",
    "keywords": [
      "bikini",
      "beach"
    ]
  },
  {
    "emoji": "💼",
    "keywords": [
      "briefcase",
      "business"
    ]
  },
  {
    "emoji": "👜",
    "keywords": [
      "handbag",
      "bag"
    ]
  },
  {
    "emoji": "👝",
    "keywords": [
      "pouch",
      "bag"
    ]
  },
  {
    "emoji": "👛",
    "keywords": [
      "purse"
    ]
  },
  {
    "emoji": "👓",
    "keywords": [
      "eyeglasses",
      "glasses"
    ]
  },
  {
    "emoji": "🎀",
    "keywords": [
      "ribbon"
    ]
  },
  {
    "emoji": "🌂",
    "keywords": [
      "closed_umbrella",
      "weather",
      "rain"
    ]
  },
  {
    "emoji": "💄",
    "keywords": [
      "lipstick",
      "makeup"
    ]
  },
  {
    "emoji": "💛",
    "keywords": [
      "yellow_heart"
    ]
  },
  {
    "emoji": "💙",
    "keywords": [
      "blue_heart"
    ]
  },
  {
    "emoji": "💜",
    "keywords": [
      "purple_heart"
    ]
  },
  {
    "emoji": "💚",
    "keywords": [
      "green_heart"
    ]
  },
  {
    "emoji": "❤️",
    "keywords": [
      "heart",
      "love"
    ]
  },
  {
    "emoji": "💔",
    "keywords": [
      "broken_heart"
    ]
  },
  {
    "emoji": "💗",
    "keywords": [
      "heartpulse"
    ]
  },
  {
    "emoji": "💓",
    "keywords": [
      "heartbeat"
    ]
  },
  {
    "emoji": "💕",
    "keywords": [
      "two_hearts"
    ]
  },
  {
    "emoji": "💖",
    "keywords": [
      "sparkling_heart"
    ]
  },
  {
    "emoji": "💞",
    "keywords": [
      "revolving_hearts"
    ]
  },
  {
    "emoji": "💘",
    "keywords": [
      "cupid",
      "love",
      "heart"
    ]
  },
  {
    "emoji": "💌",
    "keywords": [
      "love_letter",
      "email",
      "envelope"
    ]
  },
  {
    "emoji": "💋",
    "keywords": [
      "kiss",
      "lipstick"
    ]
  },
  {
    "emoji": "💍",
    "keywords": [
      "ring",
      "wedding",
      "marriage",
      "engaged"
    ]
  },
  {
    "emoji": "💎",
    "keywords": [
      "gem",
      "diamond"
    ]
  },
  {
    "emoji": "👤",
    "keywords": [
      "bust_in_silhouette",
      "user"
    ]
  },
  {
    "emoji": "👥",
    "keywords": [
      "busts_in_silhouette",
      "users",
      "group",
      "team"
    ]
  },
  {
    "emoji": "💬",
    "keywords": [
      "speech_balloon",
      "comment"
    ]
  },
  {
    "emoji": "👣",
    "keywords": [
      "footprints",
      "feet",
      "tracks"
    ]
  },
  {
    "emoji": "💭",
    "keywords": [
      "thought_balloon",
      "thinking"
    ]
  },
  {
    "emoji": "🐶",
    "keywords": [
      "dog",
      "pet"
    ]
  },
  {
    "emoji": "🐺",
    "keywords": [
      "wolf"
    ]
  },
  {
    "emoji": "🐱",
    "keywords": [
      "cat",
      "pet"
    ]
  },
  {
    "emoji": "🐭",
    "keywords": [
      "mouse"
    ]
  },
  {
    "emoji": "🐹",
    "keywords": [
      "hamster",
      "pet"
    ]
  },
  {
    "emoji": "🐰",
    "keywords": [
      "rabbit",
      "bunny"
    ]
  },
  {
    "emoji": "🐸",
    "keywords": [
      "frog"
    ]
  },
  {
    "emoji": "🐯",
    "keywords": [
      "tiger"
    ]
  },
  {
    "emoji": "🐨",
    "keywords": [
      "koala"
    ]
  },
  {
    "emoji": "🐻",
    "keywords": [
      "bear"
    ]
  },
  {
    "emoji": "🐷",
    "keywords": [
      "pig"
    ]
  },
  {
    "emoji": "🐽",
    "keywords": [
      "pig_nose"
    ]
  },
  {
    "emoji": "🐮",
    "keywords": [
      "cow"
    ]
  },
  {
    "emoji": "🐗",
    "keywords": [
      "boar"
    ]
  },
  {
    "emoji": "🐵",
    "keywords": [
      "monkey_face"
    ]
  },
  {
    "emoji": "🐒",
    "keywords": [
      "monkey"
    ]
  },
  {
    "emoji": "🐴",
    "keywords": [
      "horse"
    ]
  },
  {
    "emoji": "🐑",
    "keywords": [
      "sheep"
    ]
  },
  {
    "emoji": "🐘",
    "keywords": [
      "elephant"
    ]
  },
  {
    "emoji": "🐼",
    "keywords": [
      "panda_face"
    ]
  },
  {
    "emoji": "🐧",
    "keywords": [
      "penguin"
    ]
  },
  {
    "emoji": "🐦",
    "keywords": [
      "bird"
    ]
  },
  {
    "emoji": "🐤",
    "keywords": [
      "baby_chick"
    ]
  },
  {
    "emoji": "🐥",
    "keywords": [
      "hatched_chick"
    ]
  },
  {
    "emoji": "🐣",
    "keywords": [
      "hatching_chick"
    ]
  },
  {
    "emoji": "🐔",
    "keywords": [
      "chicken"
    ]
  },
  {
    "emoji": "🐍",
    "keywords": [
      "snake"
    ]
  },
  {
    "emoji": "🐢",
    "keywords": [
      "turtle",
      "slow"
    ]
  },
  {
    "emoji": "🐛",
    "keywords": [
      "bug"
    ]
  },
  {
    "emoji": "🐝",
    "keywords": [
      "bee",
      "honeybee"
    ]
  },
  {
    "emoji": "🐜",
    "keywords": [
      "ant"
    ]
  },
  {
    "emoji": "🐞",
    "keywords": [
      "beetle",
      "bug"
    ]
  },
  {
    "emoji": "🐌",
    "keywords": [
      "snail",
      "slow"
    ]
  },
  {
    "emoji": "🐙",
    "keywords": [
      "octopus"
    ]
  },
  {
    "emoji": "🐚",
    "keywords": [
      "shell",
      "sea",
      "beach"
    ]
  },
  {
    "emoji": "🐠",
    "keywords": [
      "tropical_fish"
    ]
  },
  {
    "emoji": "🐟",
    "keywords": [
      "fish"
    ]
  },
  {
    "emoji": "🐬",
    "keywords": [
      "dolphin",
      "flipper"
    ]
  },
  {
    "emoji": "🐳",
    "keywords": [
      "whale",
      "sea"
    ]
  },
  {
    "emoji": "🐋",
    "keywords": [
      "whale2"
    ]
  },
  {
    "emoji": "🐄",
    "keywords": [
      "cow2"
    ]
  },
  {
    "emoji": "🐏",
    "keywords": [
      "ram"
    ]
  },
  {
    "emoji": "🐀",
    "keywords": [
      "rat"
    ]
  },
  {
    "emoji": "🐃",
    "keywords": [
      "water_buffalo"
    ]
  },
  {
    "emoji": "🐅",
    "keywords": [
      "tiger2"
    ]
  },
  {
    "emoji": "🐇",
    "keywords": [
      "rabbit2"
    ]
  },
  {
    "emoji": "🐉",
    "keywords": [
      "dragon"
    ]
  },
  {
    "emoji": "🐎",
    "keywords": [
      "racehorse",
      "speed"
    ]
  },
  {
    "emoji": "🐐",
    "keywords": [
      "goat"
    ]
  },
  {
    "emoji": "🐓",
    "keywords": [
      "rooster"
    ]
  },
  {
    "emoji": "🐕",
    "keywords": [
      "dog2"
    ]
  },
  {
    "emoji": "🐖",
    "keywords": [
      "pig2"
    ]
  },
  {
    "emoji": "🐁",
    "keywords": [
      "mouse2"
    ]
  },
  {
    "emoji": "🐂",
    "keywords": [
      "ox"
    ]
  },
  {
    "emoji": "🐲",
    "keywords": [
      "dragon_face"
    ]
  },
  {
    "emoji": "🐡",
    "keywords": [
      "blowfish"
    ]
  },
  {
    "emoji": "🐊",
    "keywords": [
      "crocodile"
    ]
  },
  {
    "emoji": "🐫",
    "keywords": [
      "camel"
    ]
  },
  {
    "emoji": "🐪",
    "keywords": [
      "dromedary_camel",
      "desert"
    ]
  },
  {
    "emoji": "🐆",
    "keywords": [
      "leopard"
    ]
  },
  {
    "emoji": "🐈",
    "keywords": [
      "cat2"
    ]
  },
  {
    "emoji": "🐩",
    "keywords": [
      "poodle",
      "dog"
    ]
  },
  {
    "emoji": "🐾",
    "keywords": [
      "feet",
      "paw_prints"
    ]
  },
  {
    "emoji": "💐",
    "keywords": [
      "bouquet",
      "flowers"
    ]
  },
  {
    "emoji": "🌸",
    "keywords": [
      "cherry_blossom",
      "flower",
      "spring"
    ]
  },
  {
    "emoji": "🌷",
    "keywords": [
      "tulip",
      "flower"
    ]
  },
  {
    "emoji": "🍀",
    "keywords": [
      "four_leaf_clover",
      "luck"
    ]
  },
  {
    "emoji": "🌹",
    "keywords": [
      "rose",
      "flower"
    ]
  },
  {
    "emoji": "🌻",
    "keywords": [
      "sunflower"
    ]
  },
  {
    "emoji": "🌺",
    "keywords": [
      "hibiscus"
    ]
  },
  {
    "emoji": "🍁",
    "keywords": [
      "maple_leaf",
      "canada"
    ]
  },
  {
    "emoji": "🍃",
    "keywords": [
      "leaves",
      "leaf"
    ]
  },
  {
    "emoji": "🍂",
    "keywords": [
      "fallen_leaf",
      "autumn"
    ]
  },
  {
    "emoji": "🌿",
    "keywords": [
      "herb"
    ]
  },
  {
    "emoji": "🌾",
    "keywords": [
      "ear_of_rice"
    ]
  },
  {
    "emoji": "🍄",
    "keywords": [
      "mushroom"
    ]
  },
  {
    "emoji": "🌵",
    "keywords": [
      "cactus"
    ]
  },
  {
    "emoji": "🌴",
    "keywords": [
      "palm_tree"
    ]
  },
  {
    "emoji": "🌲",
    "keywords": [
      "evergreen_tree",
      "wood"
    ]
  },
  {
    "emoji": "🌳",
    "keywords": [
      "deciduous_tree",
      "wood"
    ]
  },
  {
    "emoji": "🌰",
    "keywords": [
      "chestnut"
    ]
  },
  {
    "emoji": "🌱",
    "keywords": [
      "seedling",
      "plant"
    ]
  },
  {
    "emoji": "🌼",
    "keywords": [
      "blossom"
    ]
  },
  {
    "emoji": "🌐",
    "keywords": [
      "globe_with_meridians",
      "world",
      "global",
      "international"
    ]
  },
  {
    "emoji": "🌞",
    "keywords": [
      "sun_with_face",
      "summer"
    ]
  },
  {
    "emoji": "🌝",
    "keywords": [
      "full_moon_with_face"
    ]
  },
  {
    "emoji": "🌚",
    "keywords": [
      "new_moon_with_face"
    ]
  },
  {
    "emoji": "🌑",
    "keywords": [
      "new_moon"
    ]
  },
  {
    "emoji": "🌒",
    "keywords": [
      "waxing_crescent_moon"
    ]
  },
  {
    "emoji": "🌓",
    "keywords": [
      "first_quarter_moon"
    ]
  },
  {
    "emoji": "🌔",
    "keywords": [
      "moon",
      "waxing_gibbous_moon"
    ]
  },
  {
    "emoji": "🌕",
    "keywords": [
      "full_moon"
    ]
  },
  {
    "emoji": "🌖",
    "keywords": [
      "waning_gibbous_moon"
    ]
  },
  {
    "emoji": "🌗",
    "keywords": [
      "last_quarter_moon"
    ]
  },
  {
    "emoji": "🌘",
    "keywords": [
      "waning_crescent_moon"
    ]
  },
  {
    "emoji": "🌜",
    "keywords": [
      "last_quarter_moon_with_face"
    ]
  },
  {
    "emoji": "🌛",
    "keywords": [
      "first_quarter_moon_with_face"
    ]
  },
  {
    "emoji": "🌙",
    "keywords": [
      "crescent_moon",
      "night"
    ]
  },
  {
    "emoji": "🌍",
    "keywords": [
      "earth_africa",
      "globe",
      "world",
      "international"
    ]
  },
  {
    "emoji": "🌎",
    "keywords": [
      "earth_americas",
      "globe",
      "world",
      "international"
    ]
  },
  {
    "emoji": "🌏",
    "keywords": [
      "earth_asia",
      "globe",
      "world",
      "international"
    ]
  },
  {
    "emoji": "🌋",
    "keywords": [
      "volcano"
    ]
  },
  {
    "emoji": "🌌",
    "keywords": [
      "milky_way"
    ]
  },
  {
    "emoji": "🌠",
    "keywords": [
      "stars"
    ]
  },
  {
    "emoji": "⭐",
    "keywords": [
      "star"
    ]
  },
  {
    "emoji": "☀️",
    "keywords": [
      "sunny",
      "weather"
    ]
  },
  {
    "emoji": "⛅",
    "keywords": [
      "partly_sunny",
      "weather",
      "cloud"
    ]
  },
  {
    "emoji": "☁️",
    "keywords": [
      "cloud"
    ]
  },
  {
    "emoji": "⚡",
    "keywords": [
      "zap",
      "lightning",
      "thunder"
    ]
  },
  {
    "emoji": "☔",
    "keywords": [
      "umbrella",
      "rain",
      "weather"
    ]
  },
  {
    "emoji": "❄️",
    "keywords": [
      "snowflake",
      "winter",
      "cold",
      "weather"
    ]
  },
  {
    "emoji": "⛄",
    "keywords": [
      "snowman",
      "winter",
      "christmas"
    ]
  },
  {
    "emoji": "🌀",
    "keywords": [
      "cyclone",
      "swirl"
    ]
  },
  {
    "emoji": "🌁",
    "keywords": [
      "foggy",
      "karl"
    ]
  },
  {
    "emoji": "🌈",
    "keywords": [
      "rainbow",
      "pride"
    ]
  },
  {
    "emoji": "🌊",
    "keywords": [
      "ocean",
      "sea"
    ]
  },
  {
    "emoji": "🎍",
    "keywords": [
      "bamboo"
    ]
  },
  {
    "emoji": "💝",
    "keywords": [
      "gift_heart",
      "chocolates"
    ]
  },
  {
    "emoji": "🎎",
    "keywords": [
      "dolls"
    ]
  },
  {
    "emoji": "🎒",
    "keywords": [
      "school_satchel"
    ]
  },
  {
    "emoji": "🎓",
    "keywords": [
      "mortar_board",
      "education",
      "college",
      "university",
      "graduation"
    ]
  },
  {
    "emoji": "🎏",
    "keywords": [
      "flags"
    ]
  },
  {
    "emoji": "🎆",
    "keywords": [
      "fireworks",
      "festival",
      "celebration"
    ]
  },
  {
    "emoji": "🎇",
    "keywords": [
      "sparkler"
    ]
  },
  {
    "emoji": "🎐",
    "keywords": [
      "wind_chime"
    ]
  },
  {
    "emoji": "🎑",
    "keywords": [
      "rice_scene"
    ]
  },
  {
    "emoji": "🎃",
    "keywords": [
      "jack_o_lantern",
      "halloween"
    ]
  },
  {
    "emoji": "👻",
    "keywords": [
      "ghost",
      "halloween"
    ]
  },
  {
    "emoji": "🎅",
    "keywords": [
      "santa",
      "christmas"
    ]
  },
  {
    "emoji": "🎄",
    "keywords": [
      "christmas_tree"
    ]
  },
  {
    "emoji": "🎁",
    "keywords": [
      "gift",
      "present",
      "birthday",
      "christmas"
    ]
  },
  {
    "emoji": "🎋",
    "keywords": [
      "tanabata_tree"
    ]
  },
  {
    "emoji": "🎉",
    "keywords": [
      "tada",
      "party"
    ]
  },
  {
    "emoji": "🎊",
    "keywords": [
      "confetti_ball"
    ]
  },
  {
    "emoji": "🎈",
    "keywords": [
      "balloon",
      "party",
      "birthday"
    ]
  },
  {
    "emoji": "🎌",
    "keywords": [
      "crossed_flags"
    ]
  },
  {
    "emoji": "🔮",
    "keywords": [
      "crystal_ball",
      "fortune"
    ]
  },
  {
    "emoji": "🎥",
    "keywords": [
      "movie_camera",
      "film",
      "video"
    ]
  },
  {
    "emoji": "📷",
    "keywords": [
      "camera",
      "photo"
    ]
  },
  {
    "emoji": "📹",
    "keywords": [
      "video_camera"
    ]
  },
  {
    "emoji": "📼",
    "keywords": [
      "vhs"
    ]
  },
  {
    "emoji": "💿",
    "keywords": [
      "cd"
    ]
  },
  {
    "emoji": "📀",
    "keywords": [
      "dvd"
    ]
  },
  {
    "emoji": "💽",
    "keywords": [
      "minidisc"
    ]
  },
  {
    "emoji": "💾",
    "keywords": [
      "floppy_disk",
      "save"
    ]
  },
  {
    "emoji": "💻",
    "keywords": [
      "computer",
      "desktop",
      "screen"
    ]
  },
  {
    "emoji": "📱",
    "keywords": [
      "iphone",
      "smartphone",
      "mobile"
    ]
  },
  {
    "emoji": "☎️",
    "keywords": [
      "phone",
      "telephone"
    ]
  },
  {
    "emoji": "📞",
    "keywords": [
      "telephone_receiver",
      "phone",
      "call"
    ]
  },
  {
    "emoji": "📟",
    "keywords": [
      "pager"
    ]
  },
  {
    "emoji": "📠",
    "keywords": [
      "fax"
    ]
  },
  {
    "emoji": "📡",
    "keywords": [
      "satellite",
      "signal"
    ]
  },
  {
    "emoji": "📺",
    "keywords": [
      "tv"
    ]
  },
  {
    "emoji": "📻",
    "keywords": [
      "radio",
      "podcast"
    ]
  },
  {
    "emoji": "🔊",
    "keywords": [
      "loud_sound",
      "volume"
    ]
  },
  {
    "emoji": "🔉",
    "keywords": [
      "sound",
      "volume"
    ]
  },
  {
    "emoji": "🔈",
    "keywords": [
      "speaker"
    ]
  },
  {
    "emoji": "🔇",
    "keywords": [
      "mute",
      "sound",
      "volume"
    ]
  },
  {
    "emoji": "🔔",
    "keywords": [
      "bell",
      "sound",
      "notification"
    ]
  },
  {
    "emoji": "🔕",
    "keywords": [
      "no_bell",
      "volume",
      "off"
    ]
  },
  {
    "emoji": "📢",
    "keywords": [
      "loudspeaker",
      "announcement"
    ]
  },
  {
    "emoji": "📣",
    "keywords": [
      "mega"
    ]
  },
  {
    "emoji": "⏳",
    "keywords": [
      "hourglass_flowing_sand",
      "time"
    ]
  },
  {
    "emoji": "⌛",
    "keywords": [
      "hourglass",
      "time"
    ]
  },
  {
    "emoji": "⏰",
    "keywords": [
      "alarm_clock",
      "morning"
    ]
  },
  {
    "emoji": "⌚",
    "keywords": [
      "watch",
      "time"
    ]
  },
  {
    "emoji": "🔓",
    "keywords": [
      "unlock",
      "security"
    ]
  },
  {
    "emoji": "🔒",
    "keywords": [
      "lock",
      "security",
      "private"
    ]
  },
  {
    "emoji": "🔏",
    "keywords": [
      "lock_with_ink_pen"
    ]
  },
  {
    "emoji": "🔐",
    "keywords": [
      "closed_lock_with_key",
      "security"
    ]
  },
  {
    "emoji": "🔑",
    "keywords": [
      "key",
      "lock",
      "password"
    ]
  },
  {
    "emoji": "🔎",
    "keywords": [
      "mag_right"
    ]
  },
  {
    "emoji": "💡",
    "keywords": [
      "bulb",
      "idea",
      "light"
    ]
  },
  {
    "emoji": "🔦",
    "keywords": [
      "flashlight"
    ]
  },
  {
    "emoji": "🔆",
    "keywords": [
      "high_brightness"
    ]
  },
  {
    "emoji": "🔅",
    "keywords": [
      "low_brightness"
    ]
  },
  {
    "emoji": "🔌",
    "keywords": [
      "electric_plug"
    ]
  },
  {
    "emoji": "🔋",
    "keywords": [
      "battery",
      "power"
    ]
  },
  {
    "emoji": "🔍",
    "keywords": [
      "mag",
      "search",
      "zoom"
    ]
  },
  {
    "emoji": "🛁",
    "keywords": [
      "bathtub"
    ]
  },
  {
    "emoji": "🛀",
    "keywords": [
      "bath",
      "shower"
    ]
  },
  {
    "emoji": "🚿",
    "keywords": [
      "shower",
      "bath"
    ]
  },
  {
    "emoji": "🚽",
    "keywords": [
      "toilet",
      "wc"
    ]
  },
  {
    "emoji": "🔧",
    "keywords": [
      "wrench",
      "tool"
    ]
  },
  {
    "emoji": "🔩",
    "keywords": [
      "nut_and_bolt"
    ]
  },
  {
    "emoji": "🔨",
    "keywords": [
      "hammer",
      "tool"
    ]
  },
  {
    "emoji": "🚪",
    "keywords": [
      "door"
    ]
  },
  {
    "emoji": "🚬",
    "keywords": [
      "smoking",
      "cigarette"
    ]
  },
  {
    "emoji": "💣",
    "keywords": [
      "bomb",
      "boom"
    ]
  },
  {
    "emoji": "🔫",
    "keywords": [
      "gun",
      "shoot",
      "weapon"
    ]
  },
  {
    "emoji": "🔪",
    "keywords": [
      "hocho",
      "knife",
      "cut",
      "chop"
    ]
  },
  {
    "emoji": "💊",
    "keywords": [
      "pill",
      "health",
      "medicine"
    ]
  },
  {
    "emoji": "💉",
    "keywords": [
      "syringe",
      "health",
      "hospital",
      "needle"
    ]
  },
  {
    "emoji": "💰",
    "keywords": [
      "moneybag",
      "dollar",
      "cream"
    ]
  },
  {
    "emoji": "💴",
    "keywords": [
      "yen"
    ]
  },
  {
    "emoji": "💵",
    "keywords": [
      "dollar",
      "money"
    ]
  },
  {
    "emoji": "💷",
    "keywords": [
      "pound"
    ]
  },
  {
    "emoji": "💶",
    "keywords": [
      "euro"
    ]
  },
  {
    "emoji": "💳",
    "keywords": [
      "credit_card",
      "subscription"
    ]
  },
  {
    "emoji": "💸",
    "keywords": [
      "money_with_wings",
      "dollar"
    ]
  },
  {
    "emoji": "📲",
    "keywords": [
      "calling",
      "call",
      "incoming"
    ]
  },
  {
    "emoji": "📧",
    "keywords": [
      "e-mail"
    ]
  },
  {
    "emoji": "📥",
    "keywords": [
      "inbox_tray"
    ]
  },
  {
    "emoji": "📤",
    "keywords": [
      "outbox_tray"
    ]
  },
  {
    "emoji": "✉️",
    "keywords": [
      "email",
      "envelope",
      "letter"
    ]
  },
  {
    "emoji": "📩",
    "keywords": [
      "envelope_with_arrow"
    ]
  },
  {
    "emoji": "📨",
    "keywords": [
      "incoming_envelope"
    ]
  },
  {
    "emoji": "📯",
    "keywords": [
      "postal_horn"
    ]
  },
  {
    "emoji": "📫",
    "keywords": [
      "mailbox"
    ]
  },
  {
    "emoji": "📪",
    "keywords": [
      "mailbox_closed"
    ]
  },
  {
    "emoji": "📬",
    "keywords": [
      "mailbox_with_mail"
    ]
  },
  {
    "emoji": "📭",
    "keywords": [
      "mailbox_with_no_mail"
    ]
  },
  {
    "emoji": "📮",
    "keywords": [
      "postbox"
    ]
  },
  {
    "emoji": "📦",
    "keywords": [
      "package",
      "shipping"
    ]
  },
  {
    "emoji": "📝",
    "keywords": [
      "memo",
      "pencil",
      "document",
      "note"
    ]
  },
  {
    "emoji": "📄",
    "keywords": [
      "page_facing_up",
      "document"
    ]
  },
  {
    "emoji": "📃",
    "keywords": [
      "page_with_curl"
    ]
  },
  {
    "emoji": "📑",
    "keywords": [
      "bookmark_tabs"
    ]
  },
  {
    "emoji": "📊",
    "keywords": [
      "bar_chart",
      "stats",
      "metrics"
    ]
  },
  {
    "emoji": "📈",
    "keywords": [
      "chart_with_upwards_trend",
      "graph",
      "metrics"
    ]
  },
  {
    "emoji": "📉",
    "keywords": [
      "chart_with_downwards_trend",
      "graph",
      "metrics"
    ]
  },
  {
    "emoji": "📜",
    "keywords": [
      "scroll",
      "document"
    ]
  },
  {
    "emoji": "📋",
    "keywords": [
      "clipboard"
    ]
  },
  {
    "emoji": "📅",
    "keywords": [
      "date",
      "calendar",
      "schedule"
    ]
  },
  {
    "emoji": "📆",
    "keywords": [
      "calendar",
      "schedule"
    ]
  },
  {
    "emoji": "📇",
    "keywords": [
      "card_index"
    ]
  },
  {
    "emoji": "📁",
    "keywords": [
      "file_folder",
      "directory"
    ]
  },
  {
    "emoji": "📂",
    "keywords": [
      "open_file_folder"
    ]
  },
  {
    "emoji": "✂️",
    "keywords": [
      "scissors",
      "cut"
    ]
  },
  {
    "emoji": "📌",
    "keywords": [
      "pushpin",
      "location"
    ]
  },
  {
    "emoji": "📎",
    "keywords": [
      "paperclip"
    ]
  },
  {
    "emoji": "✒️",
    "keywords": [
      "black_nib"
    ]
  },
  {
    "emoji": "✏️",
    "keywords": [
      "pencil2"
    ]
  },
  {
    "emoji": "📏",
    "keywords": [
      "straight_ruler"
    ]
  },
  {
    "emoji": "📐",
    "keywords": [
      "triangular_ruler"
    ]
  },
  {
    "emoji": "📕",
    "keywords": [
      "closed_book"
    ]
  },
  {
    "emoji": "📗",
    "keywords": [
      "green_book"
    ]
  },
  {
    "emoji": "📘",
    "keywords": [
      "blue_book"
    ]
  },
  {
    "emoji": "📙",
    "keywords": [
      "orange_book"
    ]
  },
  {
    "emoji": "📓",
    "keywords": [
      "notebook"
    ]
  },
  {
    "emoji": "📔",
    "keywords": [
      "notebook_with_decorative_cover"
    ]
  },
  {
    "emoji": "📒",
    "keywords": [
      "ledger"
    ]
  },
  {
    "emoji": "📚",
    "keywords": [
      "books",
      "library"
    ]
  },
  {
    "emoji": "📖",
    "keywords": [
      "book",
      "open_book"
    ]
  },
  {
    "emoji": "🔖",
    "keywords": [
      "bookmark"
    ]
  },
  {
    "emoji": "📛",
    "keywords": [
      "name_badge"
    ]
  },
  {
    "emoji": "🔬",
    "keywords": [
      "microscope",
      "science",
      "laboratory",
      "investigate"
    ]
  },
  {
    "emoji": "🔭",
    "keywords": [
      "telescope"
    ]
  },
  {
    "emoji": "📰",
    "keywords": [
      "newspaper",
      "press"
    ]
  },
  {
    "emoji": "🎨",
    "keywords": [
      "art",
      "design",
      "paint"
    ]
  },
  {
    "emoji": "🎬",
    "keywords": [
      "clapper",
      "film"
    ]
  },
  {
    "emoji": "🎤",
    "keywords": [
      "microphone",
      "sing"
    ]
  },
  {
    "emoji": "🎧",
    "keywords": [
      "headphones",
      "music",
      "earphones"
    ]
  },
  {
    "emoji": "🎼",
    "keywords": [
      "musical_score"
    ]
  },
  {
    "emoji": "🎵",
    "keywords": [
      "musical_note"
    ]
  },
  {
    "emoji": "🎶",
    "keywords": [
      "notes",
      "music"
    ]
  },
  {
    "emoji": "🎹",
    "keywords": [
      "musical_keyboard",
      "piano"
    ]
  },
  {
    "emoji": "🎻",
    "keywords": [
      "violin"
    ]
  },
  {
    "emoji": "🎺",
    "keywords": [
      "trumpet"
    ]
  },
  {
    "emoji": "🎷",
    "keywords": [
      "saxophone"
    ]
  },
  {
    "emoji": "🎸",
    "keywords": [
      "guitar",
      "rock"
    ]
  },
  {
    "emoji": "👾",
    "keywords": [
      "space_invader",
      "game",
      "retro"
    ]
  },
  {
    "emoji": "🎮",
    "keywords": [
      "video_game",
      "play",
      "controller",
      "console"
    ]
  },
  {
    "emoji": "🃏",
    "keywords": [
      "black_joker"
    ]
  },
  {
    "emoji": "🎴",
    "keywords": [
      "flower_playing_cards"
    ]
  },
  {
    "emoji": "🀄",
    "keywords": [
      "mahjong"
    ]
  },
  {
    "emoji": "🎲",
    "keywords": [
      "game_die",
      "dice",
      "gambling"
    ]
  },
  {
    "emoji": "🎯",
    "keywords": [
      "dart",
      "target"
    ]
  },
  {
    "emoji": "🏈",
    "keywords": [
      "football",
      "sports"
    ]
  },
  {
    "emoji": "🏀",
    "keywords": [
      "basketball",
      "sports"
    ]
  },
  {
    "emoji": "⚽",
    "keywords": [
      "soccer",
      "sports"
    ]
  },
  {
    "emoji": "⚾️",
    "keywords": [
      "baseball",
      "sports"
    ]
  },
  {
    "emoji": "🎾",
    "keywords": [
      "tennis",
      "sports"
    ]
  },
  {
    "emoji": "🎱",
    "keywords": [
      "8ball",
      "pool",
      "billiards"
    ]
  },
  {
    "emoji": "🏉",
    "keywords": [
      "rugby_football"
    ]
  },
  {
    "emoji": "🎳",
    "keywords": [
      "bowling"
    ]
  },
  {
    "emoji": "⛳",
    "keywords": [
      "golf"
    ]
  },
  {
    "emoji": "🚵",
    "keywords": [
      "mountain_bicyclist"
    ]
  },
  {
    "emoji": "🚴",
    "keywords": [
      "bicyclist"
    ]
  },
  {
    "emoji": "🏁",
    "keywords": [
      "checkered_flag",
      "milestone",
      "finish"
    ]
  },
  {
    "emoji": "🏇",
    "keywords": [
      "horse_racing"
    ]
  },
  {
    "emoji": "🏆",
    "keywords": [
      "trophy",
      "award",
      "contest",
      "winner"
    ]
  },
  {
    "emoji": "🎿",
    "keywords": [
      "ski"
    ]
  },
  {
    "emoji": "🏂",
    "keywords": [
      "snowboarder"
    ]
  },
  {
    "emoji": "🏊",
    "keywords": [
      "swimmer"
    ]
  },
  {
    "emoji": "🏄",
    "keywords": [
      "surfer"
    ]
  },
  {
    "emoji": "🎣",
    "keywords": [
      "fishing_pole_and_fish"
    ]
  },
  {
    "emoji": "☕",
    "keywords": [
      "coffee",
      "cafe",
      "espresso"
    ]
  },
  {
    "emoji": "🍵",
    "keywords": [
      "tea",
      "green",
      "breakfast"
    ]
  },
  {
    "emoji": "🍶",
    "keywords": [
      "sake"
    ]
  },
  {
    "emoji": "🍼",
    "keywords": [
      "baby_bottle",
      "milk"
    ]
  },
  {
    "emoji": "🍺",
    "keywords": [
      "beer",
      "drink"
    ]
  },
  {
    "emoji": "🍻",
    "keywords": [
      "beers",
      "drinks"
    ]
  },
  {
    "emoji": "🍸",
    "keywords": [
      "cocktail",
      "drink"
    ]
  },
  {
    "emoji": "🍹",
    "keywords": [
      "tropical_drink",
      "summer",
      "vacation"
    ]
  },
  {
    "emoji": "🍷",
    "keywords": [
      "wine_glass"
    ]
  },
  {
    "emoji": "🍴",
    "keywords": [
      "fork_and_knife",
      "cutlery"
    ]
  },
  {
    "emoji": "🍕",
    "keywords": [
      "pizza"
    ]
  },
  {
    "emoji": "🍔",
    "keywords": [
      "hamburger",
      "burger"
    ]
  },
  {
    "emoji": "🍟",
    "keywords": [
      "fries"
    ]
  },
  {
    "emoji": "🍗",
    "keywords": [
      "poultry_leg",
      "meat",
      "chicken"
    ]
  },
  {
    "emoji": "🍖",
    "keywords": [
      "meat_on_bone"
    ]
  },
  {
    "emoji": "🍝",
    "keywords": [
      "spaghetti",
      "pasta"
    ]
  },
  {
    "emoji": "🍛",
    "keywords": [
      "curry"
    ]
  },
  {
    "emoji": "🍤",
    "keywords": [
      "fried_shrimp",
      "tempura"
    ]
  },
  {
    "emoji": "🍱",
    "keywords": [
      "bento"
    ]
  },
  {
    "emoji": "🍣",
    "keywords": [
      "sushi"
    ]
  },
  {
    "emoji": "🍥",
    "keywords": [
      "fish_cake"
    ]
  },
  {
    "emoji": "🍙",
    "keywords": [
      "rice_ball"
    ]
  },
  {
    "emoji": "🍘",
    "keywords": [
      "rice_cracker"
    ]
  },
  {
    "emoji": "🍚",
    "keywords": [
      "rice"
    ]
  },
  {
    "emoji": "🍜",
    "keywords": [
      "ramen",
      "noodle"
    ]
  },
  {
    "emoji": "🍲",
    "keywords": [
      "stew"
    ]
  },
  {
    "emoji": "🍢",
    "keywords": [
      "oden"
    ]
  },
  {
    "emoji": "🍡",
    "keywords": [
      "dango"
    ]
  },
  {
    "emoji": "🍳",
    "keywords": [
      "egg",
      "breakfast"
    ]
  },
  {
    "emoji": "🍞",
    "keywords": [
      "bread",
      "toast"
    ]
  },
  {
    "emoji": "🍩",
    "keywords": [
      "doughnut"
    ]
  },
  {
    "emoji": "🍮",
    "keywords": [
      "custard"
    ]
  },
  {
    "emoji": "🍦",
    "keywords": [
      "icecream"
    ]
  },
  {
    "emoji": "🍨",
    "keywords": [
      "ice_cream"
    ]
  },
  {
    "emoji": "🍧",
    "keywords": [
      "shaved_ice"
    ]
  },
  {
    "emoji": "🎂",
    "keywords": [
      "birthday",
      "party"
    ]
  },
  {
    "emoji": "🍰",
    "keywords": [
      "cake",
      "dessert"
    ]
  },
  {
    "emoji": "🍪",
    "keywords": [
      "cookie"
    ]
  },
  {
    "emoji": "🍫",
    "keywords": [
      "chocolate_bar"
    ]
  },
  {
    "emoji": "🍬",
    "keywords": [
      "candy",
      "sweet"
    ]
  },
  {
    "emoji": "🍭",
    "keywords": [
      "lollipop"
    ]
  },
  {
    "emoji": "🍯",
    "keywords": [
      "honey_pot"
    ]
  },
  {
    "emoji": "🍎",
    "keywords": [
      "apple"
    ]
  },
  {
    "emoji": "🍏",
    "keywords": [
      "green_apple",
      "fruit"
    ]
  },
  {
    "emoji": "🍊",
    "keywords": [
      "tangerine",
      "orange",
      "mandarin"
    ]
  },
  {
    "emoji": "🍋",
    "keywords": [
      "lemon"
    ]
  },
  {
    "emoji": "🍒",
    "keywords": [
      "cherries",
      "fruit"
    ]
  },
  {
    "emoji": "🍇",
    "keywords": [
      "grapes"
    ]
  },
  {
    "emoji": "🍉",
    "keywords": [
      "watermelon"
    ]
  },
  {
    "emoji": "🍓",
    "keywords": [
      "strawberry",
      "fruit"
    ]
  },
  {
    "emoji": "🍑",
    "keywords": [
      "peach"
    ]
  },
  {
    "emoji": "🍈",
    "keywords": [
      "melon"
    ]
  },
  {
    "emoji": "🍌",
    "keywords": [
      "banana",
      "fruit"
    ]
  },
  {
    "emoji": "🍐",
    "keywords": [
      "pear"
    ]
  },
  {
    "emoji": "🍍",
    "keywords": [
      "pineapple"
    ]
  },
  {
    "emoji": "🍠",
    "keywords": [
      "sweet_potato"
    ]
  },
  {
    "emoji": "🍆",
    "keywords": [
      "eggplant",
      "aubergine"
    ]
  },
  {
    "emoji": "🍅",
    "keywords": [
      "tomato"
    ]
  },
  {
    "emoji": "🌽",
    "keywords": [
      "corn"
    ]
  },
  {
    "emoji": "🏠",
    "keywords": [
      "house"
    ]
  },
  {
    "emoji": "🏡",
    "keywords": [
      "house_with_garden"
    ]
  },
  {
    "emoji": "🏫",
    "keywords": [
      "school"
    ]
  },
  {
    "emoji": "🏢",
    "keywords": [
      "office"
    ]
  },
  {
    "emoji": "🏣",
    "keywords": [
      "post_office"
    ]
  },
  {
    "emoji": "🏥",
    "keywords": [
      "hospital"
    ]
  },
  {
    "emoji": "🏦",
    "keywords": [
      "bank"
    ]
  },
  {
    "emoji": "🏪",
    "keywords": [
      "convenience_store"
    ]
  },
  {
    "emoji": "🏩",
    "keywords": [
      "love_hotel"
    ]
  },
  {
    "emoji": "🏨",
    "keywords": [
      "hotel"
    ]
  },
  {
    "emoji": "💒",
    "keywords": [
      "wedding",
      "marriage"
    ]
  },
  {
    "emoji": "⛪",
    "keywords": [
      "church"
    ]
  },
  {
    "emoji": "🏬",
    "keywords": [
      "department_store"
    ]
  },
  {
    "emoji": "🏤",
    "keywords": [
      "european_post_office"
    ]
  },
  {
    "emoji": "🌇",
    "keywords": [
      "city_sunrise"
    ]
  },
  {
    "emoji": "🌆",
    "keywords": [
      "city_sunset"
    ]
  },
  {
    "emoji": "🏯",
    "keywords": [
      "japanese_castle"
    ]
  },
  {
    "emoji": "🏰",
    "keywords": [
      "european_castle"
    ]
  },
  {
    "emoji": "⛺",
    "keywords": [
      "tent",
      "camping"
    ]
  },
  {
    "emoji": "🏭",
    "keywords": [
      "factory"
    ]
  },
  {
    "emoji": "🗼",
    "keywords": [
      "tokyo_tower"
    ]
  },
  {
    "emoji": "🗾",
    "keywords": [
      "japan"
    ]
  },
  {
    "emoji": "🗻",
    "keywords": [
      "mount_fuji"
    ]
  },
  {
    "emoji": "🌄",
    "keywords": [
      "sunrise_over_mountains"
    ]
  },
  {
    "emoji": "🌅",
    "keywords": [
      "sunrise"
    ]
  },
  {
    "emoji": "🌃",
    "keywords": [
      "night_with_stars"
    ]
  },
  {
    "emoji": "🗽",
    "keywords": [
      "statue_of_liberty"
    ]
  },
  {
    "emoji": "🌉",
    "keywords": [
      "bridge_at_night"
    ]
  },
  {
    "emoji": "🎠",
    "keywords": [
      "carousel_horse"
    ]
  },
  {
    "emoji": "🎡",
    "keywords": [
      "ferris_wheel"
    ]
  },
  {
    "emoji": "⛲",
    "keywords": [
      "fountain"
    ]
  },
  {
    "emoji": "🎢",
    "keywords": [
      "roller_coaster"
    ]
  },
  {
    "emoji": "🚢",
    "keywords": [
      "ship"
    ]
  },
  {
    "emoji": "⛵",
    "keywords": [
      "boat",
      "sailboat"
    ]
  },
  {
    "emoji": "🚤",
    "keywords": [
      "speedboat",
      "ship"
    ]
  },
  {
    "emoji": "🚣",
    "keywords": [
      "rowboat"
    ]
  },
  {
    "emoji": "⚓",
    "keywords": [
      "anchor",
      "ship"
    ]
  },
  {
    "emoji": "🚀",
    "keywords": [
      "rocket",
      "ship",
      "launch"
    ]
  },
  {
    "emoji": "✈️",
    "keywords": [
      "airplane",
      "flight"
    ]
  },
  {
    "emoji": "💺",
    "keywords": [
      "seat"
    ]
  },
  {
    "emoji": "🚁",
    "keywords": [
      "helicopter"
    ]
  },
  {
    "emoji": "🚂",
    "keywords": [
      "steam_locomotive",
      "train"
    ]
  },
  {
    "emoji": "🚊",
    "keywords": [
      "tram"
    ]
  },
  {
    "emoji": "🚉",
    "keywords": [
      "station"
    ]
  },
  {
    "emoji": "🚞",
    "keywords": [
      "mountain_railway"
    ]
  },
  {
    "emoji": "🚆",
    "keywords": [
      "train2"
    ]
  },
  {
    "emoji": "🚄",
    "keywords": [
      "bullettrain_side",
      "train"
    ]
  },
  {
    "emoji": "🚅",
    "keywords": [
      "bullettrain_front",
      "train"
    ]
  },
  {
    "emoji": "🚈",
    "keywords": [
      "light_rail"
    ]
  },
  {
    "emoji": "🚇",
    "keywords": [
      "metro"
    ]
  },
  {
    "emoji": "🚝",
    "keywords": [
      "monorail"
    ]
  },
  {
    "emoji": "🚋",
    "keywords": [
      "train"
    ]
  },
  {
    "emoji": "🚃",
    "keywords": [
      "railway_car"
    ]
  },
  {
    "emoji": "🚎",
    "keywords": [
      "trolleybus"
    ]
  },
  {
    "emoji": "🚌",
    "keywords": [
      "bus"
    ]
  },
  {
    "emoji": "🚍",
    "keywords": [
      "oncoming_bus"
    ]
  },
  {
    "emoji": "🚙",
    "keywords": [
      "blue_car"
    ]
  },
  {
    "emoji": "🚘",
    "keywords": [
      "oncoming_automobile"
    ]
  },
  {
    "emoji": "🚗",
    "keywords": [
      "car",
      "red_car"
    ]
  },
  {
    "emoji": "🚕",
    "keywords": [
      "taxi"
    ]
  },
  {
    "emoji": "🚖",
    "keywords": [
      "oncoming_taxi"
    ]
  },
  {
    "emoji": "🚛",
    "keywords": [
      "articulated_lorry"
    ]
  },
  {
    "emoji": "🚚",
    "keywords": [
      "truck"
    ]
  },
  {
    "emoji": "🚨",
    "keywords": [
      "rotating_light",
      "911",
      "emergency"
    ]
  },
  {
    "emoji": "🚓",
    "keywords": [
      "police_car"
    ]
  },
  {
    "emoji": "🚔",
    "keywords": [
      "oncoming_police_car"
    ]
  },
  {
    "emoji": "🚒",
    "keywords": [
      "fire_engine"
    ]
  },
  {
    "emoji": "🚑",
    "keywords": [
      "ambulance"
    ]
  },
  {
    "emoji": "🚐",
    "keywords": [
      "minibus"
    ]
  },
  {
    "emoji": "🚲",
    "keywords": [
      "bike",
      "bicycle"
    ]
  },
  {
    "emoji": "🚡",
    "keywords": [
      "aerial_tramway"
    ]
  },
  {
    "emoji": "🚟",
    "keywords": [
      "suspension_railway"
    ]
  },
  {
    "emoji": "🚠",
    "keywords": [
      "mountain_cableway"
    ]
  },
  {
    "emoji": "🚜",
    "keywords": [
      "tractor"
    ]
  },
  {
    "emoji": "💈",
    "keywords": [
      "barber"
    ]
  },
  {
    "emoji": "🚏",
    "keywords": [
      "busstop"
    ]
  },
  {
    "emoji": "🎫",
    "keywords": [
      "ticket"
    ]
  },
  {
    "emoji": "🚦",
    "keywords": [
      "vertical_traffic_light",
      "semaphore"
    ]
  },
  {
    "emoji": "🚥",
    "keywords": [
      "traffic_light"
    ]
  },
  {
    "emoji": "⚠️",
    "keywords": [
      "warning",
      "wip"
    ]
  },
  {
    "emoji": "🚧",
    "keywords": [
      "construction",
      "wip"
    ]
  },
  {
    "emoji": "🔰",
    "keywords": [
      "beginner"
    ]
  },
  {
    "emoji": "⛽",
    "keywords": [
      "fuelpump"
    ]
  },
  {
    "emoji": "🏮",
    "keywords": [
      "izakaya_lantern",
      "lantern"
    ]
  },
  {
    "emoji": "🎰",
    "keywords": [
      "slot_machine"
    ]
  },
  {
    "emoji": "♨️",
    "keywords": [
      "hotsprings"
    ]
  },
  {
    "emoji": "🗿",
    "keywords": [
      "moyai",
      "stone"
    ]
  },
  {
    "emoji": "🎪",
    "keywords": [
      "circus_tent"
    ]
  },
  {
    "emoji": "🎭",
    "keywords": [
      "performing_arts",
      "theater",
      "drama"
    ]
  },
  {
    "emoji": "📍",
    "keywords": [
      "round_pushpin",
      "location"
    ]
  },
  {
    "emoji": "🚩",
    "keywords": [
      "triangular_flag_on_post"
    ]
  },
  {
    "emoji": "🇯🇵",
    "keywords": [
      "jp",
      "japan"
    ]
  },
  {
    "emoji": "🇰🇷",
    "keywords": [
      "kr",
      "korea"
    ]
  },
  {
    "emoji": "🇩🇪",
    "keywords": [
      "de",
      "flag",
      "germany"
    ]
  },
  {
    "emoji": "🇨🇳",
    "keywords": [
      "cn",
      "china"
    ]
  },
  {
    "emoji": "🇺🇸",
    "keywords": [
      "us",
      "flag",
      "united",
      "america"
    ]
  },
  {
    "emoji": "🇫🇷",
    "keywords": [
      "fr",
      "france",
      "french"
    ]
  },
  {
    "emoji": "🇪🇸",
    "keywords": [
      "es",
      "spain"
    ]
  },
  {
    "emoji": "🇮🇹",
    "keywords": [
      "it",
      "italy"
    ]
  },
  {
    "emoji": "🇷🇺",
    "keywords": [
      "ru",
      "russia"
    ]
  },
  {
    "emoji": "🇬🇧",
    "keywords": [
      "gb",
      "uk",
      "flag",
      "british"
    ]
  },
  {
    "emoji": "1️⃣",
    "keywords": [
      "one"
    ]
  },
  {
    "emoji": "2️⃣",
    "keywords": [
      "two"
    ]
  },
  {
    "emoji": "3️⃣",
    "keywords": [
      "three"
    ]
  },
  {
    "emoji": "4️⃣",
    "keywords": [
      "four"
    ]
  },
  {
    "emoji": "5️⃣",
    "keywords": [
      "five"
    ]
  },
  {
    "emoji": "6️⃣",
    "keywords": [
      "six"
    ]
  },
  {
    "emoji": "7️⃣",
    "keywords": [
      "seven"
    ]
  },
  {
    "emoji": "8️⃣",
    "keywords": [
      "eight"
    ]
  },
  {
    "emoji": "9️⃣",
    "keywords": [
      "nine"
    ]
  },
  {
    "emoji": "9️⃣",
    "keywords": [
      "zero"
    ]
  },
  {
    "emoji": "🔟",
    "keywords": [
      "keycap_ten"
    ]
  },
  {
    "emoji": "🔢",
    "keywords": [
      "1234",
      "numbers"
    ]
  },
  {
    "emoji": "#️⃣",
    "keywords": [
      "hash",
      "number"
    ]
  },
  {
    "emoji": "🔣",
    "keywords": [
      "symbols"
    ]
  },
  {
    "emoji": "⬆️",
    "keywords": [
      "arrow_up"
    ]
  },
  {
    "emoji": "⬇️",
    "keywords": [
      "arrow_down"
    ]
  },
  {
    "emoji": "⬅️",
    "keywords": [
      "arrow_left"
    ]
  },
  {
    "emoji": "➡️",
    "keywords": [
      "arrow_right"
    ]
  },
  {
    "emoji": "🔠",
    "keywords": [
      "capital_abcd",
      "letters"
    ]
  },
  {
    "emoji": "🔡",
    "keywords": [
      "abcd"
    ]
  },
  {
    "emoji": "🔤",
    "keywords": [
      "abc",
      "alphabet"
    ]
  },
  {
    "emoji": "↗️",
    "keywords": [
      "arrow_upper_right"
    ]
  },
  {
    "emoji": "↖️",
    "keywords": [
      "arrow_upper_left"
    ]
  },
  {
    "emoji": "↘️",
    "keywords": [
      "arrow_lower_right"
    ]
  },
  {
    "emoji": "↙️",
    "keywords": [
      "arrow_lower_left"
    ]
  },
  {
    "emoji": "↔️",
    "keywords": [
      "left_right_arrow"
    ]
  },
  {
    "emoji": "↕️",
    "keywords": [
      "arrow_up_down"
    ]
  },
  {
    "emoji": "🔄",
    "keywords": [
      "arrows_counterclockwise",
      "sync"
    ]
  },
  {
    "emoji": "◀️",
    "keywords": [
      "arrow_backward"
    ]
  },
  {
    "emoji": "▶️",
    "keywords": [
      "arrow_forward"
    ]
  },
  {
    "emoji": "🔼",
    "keywords": [
      "arrow_up_small"
    ]
  },
  {
    "emoji": "🔽",
    "keywords": [
      "arrow_down_small"
    ]
  },
  {
    "emoji": "↩️",
    "keywords": [
      "leftwards_arrow_with_hook",
      "return"
    ]
  },
  {
    "emoji": "↪️",
    "keywords": [
      "arrow_right_hook"
    ]
  },
  {
    "emoji": "ℹ️",
    "keywords": [
      "information_source"
    ]
  },
  {
    "emoji": "⏪",
    "keywords": [
      "rewind"
    ]
  },
  {
    "emoji": "⏩",
    "keywords": [
      "fast_forward"
    ]
  },
  {
    "emoji": "⏫",
    "keywords": [
      "arrow_double_up"
    ]
  },
  {
    "emoji": "⏬",
    "keywords": [
      "arrow_double_down"
    ]
  },
  {
    "emoji": "⤵️",
    "keywords": [
      "arrow_heading_down"
    ]
  },
  {
    "emoji": "⤴️",
    "keywords": [
      "arrow_heading_up"
    ]
  },
  {
    "emoji": "🆗",
    "keywords": [
      "ok",
      "yes"
    ]
  },
  {
    "emoji": "🔀",
    "keywords": [
      "twisted_rightwards_arrows",
      "shuffle"
    ]
  },
  {
    "emoji": "🔁",
    "keywords": [
      "repeat",
      "loop"
    ]
  },
  {
    "emoji": "🔂",
    "keywords": [
      "repeat_one"
    ]
  },
  {
    "emoji": "🆕",
    "keywords": [
      "new",
      "fresh"
    ]
  },
  {
    "emoji": "🆙",
    "keywords": [
      "up"
    ]
  },
  {
    "emoji": "🆒",
    "keywords": [
      "cool"
    ]
  },
  {
    "emoji": "🆓",
    "keywords": [
      "free"
    ]
  },
  {
    "emoji": "🆖",
    "keywords": [
      "ng"
    ]
  },
  {
    "emoji": "📶",
    "keywords": [
      "signal_strength",
      "wifi"
    ]
  },
  {
    "emoji": "🎦",
    "keywords": [
      "cinema",
      "film",
      "movie"
    ]
  },
  {
    "emoji": "🈁",
    "keywords": [
      "koko"
    ]
  },
  {
    "emoji": "🈯",
    "keywords": [
      "u6307"
    ]
  },
  {
    "emoji": "🈳",
    "keywords": [
      "u7a7a"
    ]
  },
  {
    "emoji": "🈵",
    "keywords": [
      "u6e80"
    ]
  },
  {
    "emoji": "🈴",
    "keywords": [
      "u5408"
    ]
  },
  {
    "emoji": "🈲",
    "keywords": [
      "u7981"
    ]
  },
  {
    "emoji": "🉐",
    "keywords": [
      "ideograph_advantage"
    ]
  },
  {
    "emoji": "🈹",
    "keywords": [
      "u5272"
    ]
  },
  {
    "emoji": "🈺",
    "keywords": [
      "u55b6"
    ]
  },
  {
    "emoji": "🈶",
    "keywords": [
      "u6709"
    ]
  },
  {
    "emoji": "🈚",
    "keywords": [
      "u7121"
    ]
  },
  {
    "emoji": "🚻",
    "keywords": [
      "restroom",
      "toilet"
    ]
  },
  {
    "emoji": "🚹",
    "keywords": [
      "mens"
    ]
  },
  {
    "emoji": "🚺",
    "keywords": [
      "womens"
    ]
  },
  {
    "emoji": "🚼",
    "keywords": [
      "baby_symbol"
    ]
  },
  {
    "emoji": "🚾",
    "keywords": [
      "wc",
      "toilet",
      "restroom"
    ]
  },
  {
    "emoji": "🚰",
    "keywords": [
      "potable_water"
    ]
  },
  {
    "emoji": "🚮",
    "keywords": [
      "put_litter_in_its_place"
    ]
  },
  {
    "emoji": "🅿️",
    "keywords": [
      "parking"
    ]
  },
  {
    "emoji": "♿",
    "keywords": [
      "wheelchair",
      "accessibility"
    ]
  },
  {
    "emoji": "🚭",
    "keywords": [
      "no_smoking"
    ]
  },
  {
    "emoji": "🈷️",
    "keywords": [
      "u6708"
    ]
  },
  {
    "emoji": "🈸",
    "keywords": [
      "u7533"
    ]
  },
  {
    "emoji": "🈂️",
    "keywords": [
      "sa"
    ]
  },
  {
    "emoji": "Ⓜ️",
    "keywords": [
      "m"
    ]
  },
  {
    "emoji": "🛂",
    "keywords": [
      "passport_control"
    ]
  },
  {
    "emoji": "🛄",
    "keywords": [
      "baggage_claim",
      "airport"
    ]
  },
  {
    "emoji": "🛅",
    "keywords": [
      "left_luggage"
    ]
  },
  {
    "emoji": "🛃",
    "keywords": [
      "customs"
    ]
  },
  {
    "emoji": "🉑",
    "keywords": [
      "accept"
    ]
  },
  {
    "emoji": "㊙️",
    "keywords": [
      "secret"
    ]
  },
  {
    "emoji": "㊗️",
    "keywords": [
      "congratulations"
    ]
  },
  {
    "emoji": "🆑",
    "keywords": [
      "cl"
    ]
  },
  {
    "emoji": "🆘",
    "keywords": [
      "sos",
      "help",
      "emergency"
    ]
  },
  {
    "emoji": "🆔",
    "keywords": [
      "id"
    ]
  },
  {
    "emoji": "🚫",
    "keywords": [
      "no_entry_sign",
      "block",
      "forbidden"
    ]
  },
  {
    "emoji": "🔞",
    "keywords": [
      "underage"
    ]
  },
  {
    "emoji": "📵",
    "keywords": [
      "no_mobile_phones"
    ]
  },
  {
    "emoji": "🚯",
    "keywords": [
      "do_not_litter"
    ]
  },
  {
    "emoji": "🚱",
    "keywords": [
      "non-potable_water"
    ]
  },
  {
    "emoji": "🚳",
    "keywords": [
      "no_bicycles"
    ]
  },
  {
    "emoji": "🚷",
    "keywords": [
      "no_pedestrians"
    ]
  },
  {
    "emoji": "🚸",
    "keywords": [
      "children_crossing"
    ]
  },
  {
    "emoji": "⛔",
    "keywords": [
      "no_entry",
      "limit"
    ]
  },
  {
    "emoji": "✳️",
    "keywords": [
      "eight_spoked_asterisk"
    ]
  },
  {
    "emoji": "❇️",
    "keywords": [
      "sparkle"
    ]
  },
  {
    "emoji": "❎",
    "keywords": [
      "negative_squared_cross_mark"
    ]
  },
  {
    "emoji": "✅",
    "keywords": [
      "white_check_mark"
    ]
  },
  {
    "emoji": "✴️",
    "keywords": [
      "eight_pointed_black_star"
    ]
  },
  {
    "emoji": "💟",
    "keywords": [
      "heart_decoration"
    ]
  },
  {
    "emoji": "🆚",
    "keywords": [
      "vs"
    ]
  },
  {
    "emoji": "📳",
    "keywords": [
      "vibration_mode"
    ]
  },
  {
    "emoji": "📴",
    "keywords": [
      "mobile_phone_off",
      "mute",
      "off"
    ]
  },
  {
    "emoji": "🅰️",
    "keywords": [
      "a"
    ]
  },
  {
    "emoji": "🅱️",
    "keywords": [
      "b"
    ]
  },
  {
    "emoji": "🆎",
    "keywords": [
      "ab"
    ]
  },
  {
    "emoji": "🅾️",
    "keywords": [
      "o2"
    ]
  },
  {
    "emoji": "💠",
    "keywords": [
      "diamond_shape_with_a_dot_inside"
    ]
  },
  {
    "emoji": "➿",
    "keywords": [
      "loop"
    ]
  },
  {
    "emoji": "♻️",
    "keywords": [
      "recycle",
      "environment",
      "green"
    ]
  },
  {
    "emoji": "♈",
    "keywords": [
      "aries"
    ]
  },
  {
    "emoji": "♉",
    "keywords": [
      "taurus"
    ]
  },
  {
    "emoji": "♊",
    "keywords": [
      "gemini"
    ]
  },
  {
    "emoji": "♋",
    "keywords": [
      "cancer"
    ]
  },
  {
    "emoji": "♌",
    "keywords": [
      "leo"
    ]
  },
  {
    "emoji": "♍",
    "keywords": [
      "virgo"
    ]
  },
  {
    "emoji": "♎",
    "keywords": [
      "libra"
    ]
  },
  {
    "emoji": "♏",
    "keywords": [
      "scorpius"
    ]
  },
  {
    "emoji": "♐",
    "keywords": [
      "sagittarius"
    ]
  },
  {
    "emoji": "♑",
    "keywords": [
      "capricorn"
    ]
  },
  {
    "emoji": "♒",
    "keywords": [
      "aquarius"
    ]
  },
  {
    "emoji": "♓",
    "keywords": [
      "pisces"
    ]
  },
  {
    "emoji": "⛎",
    "keywords": [
      "ophiuchus"
    ]
  },
  {
    "emoji": "🔯",
    "keywords": [
      "six_pointed_star"
    ]
  },
  {
    "emoji": "🏧",
    "keywords": [
      "atm"
    ]
  },
  {
    "emoji": "💹",
    "keywords": [
      "chart"
    ]
  },
  {
    "emoji": "💲",
    "keywords": [
      "heavy_dollar_sign"
    ]
  },
  {
    "emoji": "💱",
    "keywords": [
      "currency_exchange"
    ]
  },
  {
    "emoji": "©️",
    "keywords": [
      "copyright"
    ]
  },
  {
    "emoji": "®️",
    "keywords": [
      "registered"
    ]
  },
  {
    "emoji": "™️",
    "keywords": [
      "tm",
      "trademark"
    ]
  },
  {
    "emoji": "❌",
    "keywords": [
      "x"
    ]
  },
  {
    "emoji": "‼️",
    "keywords": [
      "bangbang"
    ]
  },
  {
    "emoji": "⁉️",
    "keywords": [
      "interrobang"
    ]
  },
  {
    "emoji": "❗",
    "keywords": [
      "exclamation",
      "heavy_exclamation_mark",
      "bang"
    ]
  },
  {
    "emoji": "❓",
    "keywords": [
      "question",
      "confused"
    ]
  },
  {
    "emoji": "❕",
    "keywords": [
      "grey_exclamation"
    ]
  },
  {
    "emoji": "❔",
    "keywords": [
      "grey_question"
    ]
  },
  {
    "emoji": "⭕",
    "keywords": [
      "o"
    ]
  },
  {
    "emoji": "🔝",
    "keywords": [
      "top"
    ]
  },
  {
    "emoji": "🔚",
    "keywords": [
      "end"
    ]
  },
  {
    "emoji": "🔙",
    "keywords": [
      "back"
    ]
  },
  {
    "emoji": "🔛",
    "keywords": [
      "on"
    ]
  },
  {
    "emoji": "🔜",
    "keywords": [
      "soon"
    ]
  },
  {
    "emoji": "🔃",
    "keywords": [
      "arrows_clockwise"
    ]
  },
  {
    "emoji": "🕛",
    "keywords": [
      "clock12"
    ]
  },
  {
    "emoji": "🕧",
    "keywords": [
      "clock1230"
    ]
  },
  {
    "emoji": "🕐",
    "keywords": [
      "clock1"
    ]
  },
  {
    "emoji": "🕜",
    "keywords": [
      "clock130"
    ]
  },
  {
    "emoji": "🕑",
    "keywords": [
      "clock2"
    ]
  },
  {
    "emoji": "🕝",
    "keywords": [
      "clock230"
    ]
  },
  {
    "emoji": "🕒",
    "keywords": [
      "clock3"
    ]
  },
  {
    "emoji": "🕞",
    "keywords": [
      "clock330"
    ]
  },
  {
    "emoji": "🕓",
    "keywords": [
      "clock4"
    ]
  },
  {
    "emoji": "🕟",
    "keywords": [
      "clock430"
    ]
  },
  {
    "emoji": "🕔",
    "keywords": [
      "clock5"
    ]
  },
  {
    "emoji": "🕠",
    "keywords": [
      "clock530"
    ]
  },
  {
    "emoji": "🕕",
    "keywords": [
      "clock6"
    ]
  },
  {
    "emoji": "🕖",
    "keywords": [
      "clock7"
    ]
  },
  {
    "emoji": "🕗",
    "keywords": [
      "clock8"
    ]
  },
  {
    "emoji": "🕘",
    "keywords": [
      "clock9"
    ]
  },
  {
    "emoji": "🕙",
    "keywords": [
      "clock10"
    ]
  },
  {
    "emoji": "🕚",
    "keywords": [
      "clock11"
    ]
  },
  {
    "emoji": "🕡",
    "keywords": [
      "clock630"
    ]
  },
  {
    "emoji": "🕢",
    "keywords": [
      "clock730"
    ]
  },
  {
    "emoji": "🕣",
    "keywords": [
      "clock830"
    ]
  },
  {
    "emoji": "🕤",
    "keywords": [
      "clock930"
    ]
  },
  {
    "emoji": "🕥",
    "keywords": [
      "clock1030"
    ]
  },
  {
    "emoji": "🕦",
    "keywords": [
      "clock1130"
    ]
  },
  {
    "emoji": "✖️",
    "keywords": [
      "heavy_multiplication_x"
    ]
  },
  {
    "emoji": "➕",
    "keywords": [
      "heavy_plus_sign"
    ]
  },
  {
    "emoji": "➖",
    "keywords": [
      "heavy_minus_sign"
    ]
  },
  {
    "emoji": "➗",
    "keywords": [
      "heavy_division_sign"
    ]
  },
  {
    "emoji": "♠️",
    "keywords": [
      "spades"
    ]
  },
  {
    "emoji": "♥️",
    "keywords": [
      "hearts"
    ]
  },
  {
    "emoji": "♣️",
    "keywords": [
      "clubs"
    ]
  },
  {
    "emoji": "♦️",
    "keywords": [
      "diamonds"
    ]
  },
  {
    "emoji": "💮",
    "keywords": [
      "white_flower"
    ]
  },
  {
    "emoji": "💯",
    "keywords": [
      "100",
      "score",
      "perfect"
    ]
  },
  {
    "emoji": "✔️",
    "keywords": [
      "heavy_check_mark"
    ]
  },
  {
    "emoji": "☑️",
    "keywords": [
      "ballot_box_with_check"
    ]
  },
  {
    "emoji": "🔘",
    "keywords": [
      "radio_button"
    ]
  },
  {
    "emoji": "🔗",
    "keywords": [
      "link"
    ]
  },
  {
    "emoji": "➰",
    "keywords": [
      "curly_loop"
    ]
  },
  {
    "emoji": "〰️",
    "keywords": [
      "wavy_dash"
    ]
  },
  {
    "emoji": "〽️",
    "keywords": [
      "part_alternation_mark"
    ]
  },
  {
    "emoji": "🔱",
    "keywords": [
      "trident"
    ]
  },
  {
    "emoji": "◼️",
    "keywords": [
      "black_medium_square"
    ]
  },
  {
    "emoji": "◻️",
    "keywords": [
      "white_medium_square"
    ]
  },
  {
    "emoji": "◾",
    "keywords": [
      "black_medium_small_square"
    ]
  },
  {
    "emoji": "◽",
    "keywords": [
      "white_medium_small_square"
    ]
  },
  {
    "emoji": "▪️",
    "keywords": [
      "black_small_square"
    ]
  },
  {
    "emoji": "▫️",
    "keywords": [
      "white_small_square"
    ]
  },
  {
    "emoji": "🔺",
    "keywords": [
      "small_red_triangle"
    ]
  },
  {
    "emoji": "🔲",
    "keywords": [
      "black_square_button"
    ]
  },
  {
    "emoji": "🔳",
    "keywords": [
      "white_square_button"
    ]
  },
  {
    "emoji": "⚫",
    "keywords": [
      "black_circle"
    ]
  },
  {
    "emoji": "⚪",
    "keywords": [
      "white_circle"
    ]
  },
  {
    "emoji": "🔴",
    "keywords": [
      "red_circle"
    ]
  },
  {
    "emoji": "🔵",
    "keywords": [
      "large_blue_circle"
    ]
  },
  {
    "emoji": "🔻",
    "keywords": [
      "small_red_triangle_down"
    ]
  },
  {
    "emoji": "⬜",
    "keywords": [
      "white_large_square"
    ]
  },
  {
    "emoji": "⬛",
    "keywords": [
      "black_large_square"
    ]
  },
  {
    "emoji": "🔶",
    "keywords": [
      "large_orange_diamond"
    ]
  },
  {
    "emoji": "🔷",
    "keywords": [
      "large_blue_diamond"
    ]
  },
  {
    "emoji": "🔸",
    "keywords": [
      "small_orange_diamond"
    ]
  },
  {
    "emoji": "🔹",
    "keywords": [
      "small_blue_diamond"
    ]
  }
];
