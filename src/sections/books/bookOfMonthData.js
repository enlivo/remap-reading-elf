/*
 * Book of the Month - content for the Books page cards and the
 * /books/<slug> detail pages. Ported from the Reading Elf site
 * (github.com/enlivo/the-reading-elf): card copy from its home page,
 * detail copy from each book's own page.
 */
import imgeric_book_month from "../../../assets/images/books-page/book-of-month/eric-book-month.webp";
import imgeric_bown_bear from "../../../assets/images/books-page/book-of-month/eric-bown-bear.webp";
import imgeric_goodnight from "../../../assets/images/books-page/book-of-month/eric-goodnight.webp";
import imgeric_polar_bear from "../../../assets/images/books-page/book-of-month/eric-polar-bear.webp";
import imgeric_profile from "../../../assets/images/books-page/book-of-month/eric-profile.webp";
import imgeric_spider from "../../../assets/images/books-page/book-of-month/eric-spider.webp";
import imgfrances_1 from "../../../assets/images/books-page/book-of-month/frances-1.webp";
import imgfrances_2 from "../../../assets/images/books-page/book-of-month/frances-2.webp";
import imgfrances_3 from "../../../assets/images/books-page/book-of-month/frances-3.webp";
import imgfrances_4 from "../../../assets/images/books-page/book-of-month/frances-4.webp";
import imgfrances_book from "../../../assets/images/books-page/book-of-month/frances-book.webp";
import imgfrances_profile from "../../../assets/images/books-page/book-of-month/frances-profile.webp";
import imgimages_book_bg from "../../../assets/images/books-page/book-of-month/images-book-bg.webp";
import imglewis_1 from "../../../assets/images/books-page/book-of-month/lewis-1.webp";
import imglewis_2 from "../../../assets/images/books-page/book-of-month/lewis-2.webp";
import imglewis_3 from "../../../assets/images/books-page/book-of-month/lewis-3.webp";
import imglewis_4 from "../../../assets/images/books-page/book-of-month/lewis-4.webp";
import imglewis_book from "../../../assets/images/books-page/book-of-month/lewis-book.webp";
import imglewis_lewis from "../../../assets/images/books-page/book-of-month/lewis-lewis.webp";
import imgmargery_author from "../../../assets/images/books-page/book-of-month/margery-author.webp";
import imgmargery_book from "../../../assets/images/books-page/book-of-month/margery-book.webp";
import imgmargery_poor_cecco from "../../../assets/images/books-page/book-of-month/margery-poor-cecco.webp";
import imgmargery_skin_horse from "../../../assets/images/books-page/book-of-month/margery-skin-horse.webp";
import imgmargery_toys from "../../../assets/images/books-page/book-of-month/margery-toys.webp";
import imgmargery_wooden_doll from "../../../assets/images/books-page/book-of-month/margery-wooden-doll.webp";
import imgnarayan_book from "../../../assets/images/books-page/book-of-month/narayan-book.webp";
import imgnarayan_grandmothers_tale from "../../../assets/images/books-page/book-of-month/narayan-grandmothers-tale.webp";
import imgnarayan_horse_and_two_goats from "../../../assets/images/books-page/book-of-month/narayan-horse-and-two-goats.webp";
import imgnarayan_profile from "../../../assets/images/books-page/book-of-month/narayan-profile.webp";
import imgnarayan_swami_and_friends from "../../../assets/images/books-page/book-of-month/narayan-swami-and-friends.webp";

import imgharari_unstoppable_us from "../../../assets/images/books-page/book-of-month/harari-unstoppable-us.webp";
import imgharari_sapiens from "../../../assets/images/books-page/book-of-month/harari-sapiens.webp";
import imgharari_homo_deus from "../../../assets/images/books-page/book-of-month/harari-homo-deus.webp";
import imgharari_nexus from "../../../assets/images/books-page/book-of-month/harari-nexus.webp";
import ctaShelf from "../../../assets/images/books-page/book-of-month/images-book-bg.webp";

export const BOOKS_OF_MONTH = [
  {
    "slug": "unstoppable-us",
    "metaDescription": "Explore this month's featured book: Unstoppable Us by Yuval Noah Harari. How did humans take over the world? A history, science and human evolution adventure for young readers aged 10+.",
    "card": {
      "title": "Unstoppable Us",
      "author": "Yuval Noah Harari",
      "month": "September",
      "desc": "Why are humans running the planet? Yuval Noah Harari takes young readers on an extraordinary journey through the story of humankind, from early humans to the ideas, tools and cooperation that made us unstoppable.",
      "image": imgharari_unstoppable_us
    },
    "hero": {
      "badge": "September Book of the Month",
      "title": ["Unstoppable Us"],
      "subtitle": "How Humans Took Over the World",
      "author": "By Yuval Noah Harari",
      "illustrator": "Illustrated by Ricard Zaplana Ruiz",
      "cover": imgharari_unstoppable_us,
      "meta": ["History / Science / Human Evolution", "Age 10+ Years"],
      "lead": "Why are humans running the planet?",
      "paras": [
        "We aren't the strongest animals. We can't outrun a lion, swim like a dolphin, or fly like an eagle. Yet somehow, humans have travelled across the world, built cities, invented machines, landed on the Moon, and transformed the planet.",
        "Unstoppable Us takes young readers on an extraordinary journey through the story of humankind \u2014 from early humans and hunter-gatherers to the ideas, stories, tools and cooperation that helped Homo sapiens become the most powerful species on Earth."
      ],
      "closing": [
        "But the real mystery isn't simply how humans survived.",
        "It's how humans became unstoppable."
      ]
    },
    "sections": [
      {
        "kind": "grid",
        "variant": "cards",
        "title": "Creative Learning Activities",
        "subtitle": "Turn the history of humanity into something children can imagine, question and create.",
        "items": [
          {
            "title": "Invent a Human Superpower",
            "text": "Humans don't have claws, wings or incredible strength. So what abilities helped us survive?\nAsk children to invent their own human superpower. It could be imagination, cooperation, curiosity, language, problem-solving or something completely new.\nDraw it, name it and explain how it would help humanity.",
            "icon": "\ud83d\udd25"
          },
          {
            "title": "The Human Journey",
            "text": "Create a giant timeline showing the journey of humans from early Homo sapiens to the world we live in today.\nAdd important discoveries, inventions and turning points \u2014 fire, tools, farming, writing, cities, machines, space travel and beyond.\nThen ask:",
            "text2": "What do you think the next step will be?",
            "icon": "\ud83c\udf0d"
          },
          {
            "title": "Survive the Wild",
            "text": "Imagine you have been transported 100,000 years into the past with no electricity, buildings, supermarkets or phones.\nYou have only what you can carry.",
            "text2": "What would you need to survive?",
            "icon": "\ud83e\udd81"
          },
          {
            "title": "The Story That Changed Everything",
            "text": "Humans can believe in things that don't physically exist \u2014 countries, money, companies, laws and countless other shared ideas.\nChoose one idea that people collectively believe in.\nDraw it as a character or creature.\nThen imagine what the world would look like if everyone suddenly stopped believing in it.",
            "icon": "\ud83e\udde0"
          }
        ]
      },
      {
        "kind": "grid",
        "variant": "themes",
        "title": "Discussion Points & Themes",
        "subtitle": "Unstoppable Us isn't just a history book. It invites children to question what makes humans different \u2014 and whether being powerful always means being wise.",
        "items": [
          {
            "title": "Cooperation",
            "text": "One human isn't particularly powerful compared with many animals. But humans can cooperate in enormous numbers.",
            "text2": "Why are we so good at working together?\nAnd what happens when people cooperate towards something harmful?",
            "icon": "\ud83e\udd1d"
          },
          {
            "title": "Stories & Shared Beliefs",
            "text": "Humans don't only communicate about things they can see.\nWe create stories, ideas and shared beliefs that can connect millions of strangers.",
            "text2": "What are some invisible ideas that shape the world around you?",
            "icon": "\ud83d\udde3\ufe0f"
          },
          {
            "title": "Curiosity & Discovery",
            "text": "From controlling fire to exploring the planet and reaching space, humans have always wanted to understand what lies beyond the familiar.",
            "text2": "What does curiosity make us do?\nAnd can curiosity sometimes take us too far?",
            "icon": "\ud83d\udd25"
          },
          {
            "title": "Our Power Over the Planet",
            "text": "Humans have changed the world more dramatically than any other species.\nBut being powerful comes with responsibility.",
            "text2": "If humans can change the planet, what should we choose to change \u2014 and what should we protect?",
            "icon": "\ud83c\udf0e"
          }
        ]
      },
      {
        "kind": "prose",
        "title": "Why This Book?",
        "lead": "Because history isn't just about remembering what happened.",
        "paras": [
          "It's about understanding how we got here.",
          "Unstoppable Us turns the enormous story of human evolution into an exciting journey filled with surprising questions about intelligence, imagination, cooperation, technology and our relationship with the world around us.",
          "It gives young readers a chance to look at humanity from the outside \u2014 almost as if we were discovering humans as a species for the very first time."
        ]
      },
      {
        "kind": "grid",
        "variant": "learning",
        "title": "Vocabulary List",
        "subtitle": "Introduce these fascinating words while reading together.",
        "items": [
          {
            "title": "Homo sapiens",
            "text": "The scientific name for our species of human.",
            "text2": "Homo sapiens are the humans living on Earth today.",
            "icon": "\ud83e\uddec"
          },
          {
            "title": "Evolution",
            "text": "The gradual process through which living things change across generations.",
            "text2": "Human beings are part of a much longer evolutionary story.",
            "icon": "\ud83c\udf0e"
          },
          {
            "title": "Hunter-Gatherer",
            "text": "A person who survives by hunting animals and gathering plants and other foods from nature.",
            "text2": "For most of human history, people lived as hunter-gatherers.",
            "icon": "\ud83e\udea8"
          },
          {
            "title": "Cooperation",
            "text": "Working together with others to achieve something.",
            "text2": "Human cooperation allowed groups of people to accomplish things that individuals could never do alone.",
            "icon": "\ud83e\udd1d"
          },
          {
            "title": "Myth",
            "text": "A traditional story or shared belief that helps people make sense of the world.",
            "text2": "Shared stories and beliefs have played an important role in human societies.",
            "icon": "\ud83d\udcad"
          }
        ]
      },
      {
        "kind": "author",
        "name": "Yuval Noah Harari",
        "tagline": "HISTORIAN \u2022 AUTHOR \u2022 THINKER",
        "paras": [
          "Yuval Noah Harari is a historian and bestselling author whose books explore some of humanity's biggest questions \u2014 where we came from, how societies developed, and where humans might be heading.",
          "In Unstoppable Us, he brings the enormous story of human history to younger readers, turning evolution and early human history into an accessible and thought-provoking adventure."
        ],
        "chips": ["Author of Sapiens", "Historian", "Human History Explorer"]
      },
      {
        "kind": "series",
        "variant": "cards",
        "title": "Start a Reading Habit",
        "subtitle": "If Unstoppable Us makes you curious about how humans became who we are, there are many more stories waiting to be explored.",
        "items": [
          {
            "title": "Sapiens",
            "text": "The bigger story of humankind.",
            "image": imgharari_sapiens,
            "alt": "Sapiens: A Brief History of Humankind"
          },
          {
            "title": "Unstoppable Us \u2014 Volume 2",
            "text": "Continue the journey and discover how humans built the world we know today.",
            "placeholder": "Volume 2"
          },
          {
            "title": "Explore More History & Science",
            "text": "Discover books that turn big questions about our world into unforgettable adventures.",
            "images": [imgharari_homo_deus, imgharari_nexus],
            "alt": "Homo Deus and Nexus"
          }
        ]
      },
      {
        "kind": "cta",
        "title": ["Start Your Child's", "Reading Journey", "Today"],
        "text": "What makes humans different?\nWhy did our species survive?\nAnd where could our story go next?\nUnstoppable Us is an invitation to look at humanity with fresh eyes \u2014 to question, imagine, discover and become curious about the incredible story we are all part of.",
        "button": "GET THIS BOOK VIA WHATSAPP \u2192",
        "href": "https://wa.me/919500056482"
      }
    ]
  },
  {
    "slug": "malgudi-schooldays",
    "metaDescription": "Explore this month's featured book: Malgudi Schooldays by R.K. Narayan. A timeless Indian classic about friendship, curiosity, and the joys of childhood in the fictional town of Malgudi.",
    "card": {
      "title": "Malgudi Schooldays",
      "author": "R.K. Narayan",
      "month": "August",
      "desc": "A joyful journey through Malgudi's classrooms and playgrounds — R.K. Narayan's timeless tale of childhood, friendship, and mischief, beautifully illustrated for young readers.",
      "image": imgnarayan_book
    },
    "hero": {
      "badge": "Book of the Month (August)",
      "title": [
        "Malgudi",
        "Schooldays"
      ],
      "author": "By R.K. Narayan",
      "cover": imgnarayan_book,
      "meta": [
        "Classic / Adventure / Friendship",
        "Age 7+ Years"
      ],
      "paras": [
        "Step into the charming town of Malgudi and experience childhood through the eyes of Swami and his friends. Filled with school adventures, mischievous moments, unforgettable friendships, and everyday discoveries, Malgudi Schooldays captures the innocence and joy of growing up in India. A timeless classic that continues to delight readers across generations."
      ]
    },
    "sections": [
      {
        "kind": "grid",
        "variant": "cards",
        "title": "Creative Learning Activities",
        "subtitle": "Bring the world of Malgudi to life through imagination, storytelling, and creative play.",
        "items": [
          {
            "title": "Build Your Own Malgudi",
            "text": "Draw or create your own little town inspired by Malgudi. Add a school, railway station, river, playground, and the places where your own adventures would happen.",
            "icon": "🚂"
          },
          {
            "title": "A Letter to Swami",
            "text": "Imagine Swami is your pen pal. Write him a letter telling him about your school, your friends, and what childhood looks like today.",
            "icon": "✉️"
          },
          {
            "title": "School Then & Now",
            "text": "Talk to your parents or grandparents about their school days. Compare them with yours. What's changed? What has stayed the same?",
            "icon": "🎒"
          },
          {
            "title": "Adventure Around the Corner",
            "text": "Create a short story about an ordinary day that suddenly turns into an unforgettable adventure — just like Swami's.",
            "icon": "🎭"
          }
        ],
        "bg": "#ffffff"
      },
      {
        "kind": "grid",
        "variant": "themes",
        "title": "Discussion Points & Themes",
        "subtitle": "Malgudi Schooldays is a timeless Indian classic that celebrates friendship, curiosity, imagination, and the simple joys of childhood.",
        "items": [
          {
            "title": "Friendship",
            "text": "Swami, Mani, and Rajam share many adventures together. What makes a friendship strong, even when friends are different?",
            "icon": "🤝"
          },
          {
            "title": "Growing Up",
            "text": "Childhood is full of mistakes, lessons, and discoveries. What have you learned from your own adventures?",
            "icon": "🌱"
          },
          {
            "title": "School Life",
            "text": "School is about much more than books. What are your favourite memories of school?",
            "icon": "🏫"
          },
          {
            "title": "Why This Book?",
            "text": "A timeless Indian classic that celebrates friendship, curiosity, imagination, and the simple joys of childhood — a reminder that life's greatest adventures often happen in the most ordinary moments.",
            "icon": "🌟"
          }
        ],
        "bg": "#FEFFE0"
      },
      {
        "kind": "grid",
        "variant": "learning",
        "title": "Vocabulary List",
        "subtitle": "Introduce these beautiful words while reading together.",
        "items": [
          {
            "title": "Malgudi",
            "text": "The fictional town where Swami's adventures take place.",
            "text2": "Malgudi is home to Swami and his friends throughout the story.",
            "icon": "🏡"
          },
          {
            "title": "Adventure",
            "text": "An exciting or unusual experience filled with discovery.",
            "text2": "Swami and his friends encounter many small adventures throughout their school days.",
            "icon": "🚂"
          },
          {
            "title": "Companion",
            "text": "A friend who shares experiences and adventures with you.",
            "text2": "Mani and Rajam are two of Swami's closest companions.",
            "icon": "🤝"
          },
          {
            "title": "Curiosity",
            "text": "The desire to learn, explore, and discover new things.",
            "text2": "Swami's curiosity often leads him into mischief and discovery.",
            "icon": "🌿"
          }
        ],
        "bg": "#ffffff"
      },
      {
        "kind": "author",
        "name": "R.K. Narayan",
        "tagline": "Beloved Storyteller",
        "paras": [
          "R.K. Narayan was one of India's most celebrated authors, best known for bringing the fictional town of Malgudi to life.",
          "Through simple yet powerful storytelling, he captured the humour, innocence, and everyday beauty of childhood and Indian life."
        ],
        "chips": [
          "1906–2001",
          "Indian Literary Legend"
        ],
        "photo": imgnarayan_profile
      },
      {
        "kind": "series",
        "variant": "cards",
        "title": "Start a Reading Habit",
        "subtitle": "Malgudi Schooldays is just the beginning. Explore more unforgettable stories by R.K. Narayan.",
        "items": [
          {
            "title": "Swami and Friends",
            "text": "R.K. Narayan — The Original Adventures of Swami",
            "image": imgnarayan_swami_and_friends,
            "alt": "Swami and Friends"
          },
          {
            "title": "The Grandmother's Tale",
            "text": "R.K. Narayan — A Heartwarming Family Story",
            "image": imgnarayan_grandmothers_tale,
            "alt": "The Grandmother's Tale"
          },
          {
            "title": "A Horse and Two Goats",
            "text": "R.K. Narayan — A Charming Tale of Culture & Kindness",
            "image": imgnarayan_horse_and_two_goats,
            "alt": "A Horse and Two Goats"
          }
        ],
        "bg": "#ffffff"
      },
      {
        "kind": "cta",
        "title": [
          "Start Your Child's",
          "Reading Journey",
          "Today"
        ],
        "text": "Filled with laughter, friendship, and timeless adventures, Malgudi Schooldays is a book every young reader should experience and every parent will love revisiting.",
        "button": "GET THIS BOOK VIA WHATSAPP →",
        "href": "https://wa.me/919500056482"
      }
    ]
  },
  {
    "slug": "velveteen-rabbit",
    "metaDescription": "Explore this month's featured book: The Velveteen Rabbit by Margery Williams. A timeless story about friendship, loss, courage, and unconditional love.",
    "card": {
      "title": "The Velveteen Rabbit",
      "author": "Margery Williams",
      "month": "July",
      "desc": "A tender classic about a toy rabbit who discovers that becoming Real is what happens when you are truly loved.",
      "image": imgmargery_book
    },
    "hero": {
      "badge": "Book of the Month (July)",
      "title": [
        "The Velveteen",
        "Rabbit"
      ],
      "author": "By Margery Williams",
      "cover": imgmargery_book,
      "meta": [
        "Genre: Classic · Friendship · Emotional Growth",
        "Age Group: 4+ years"
      ],
      "paras": [
        "Published in 1922, The Velveteen Rabbit tells the timeless story of a little toy rabbit who dreams of becoming \"real\" through the love of a child. As the Rabbit experiences friendship, loss, courage, and unconditional love, children discover that what truly matters isn't how perfect something looks—but how deeply it is loved."
      ]
    },
    "sections": [
      {
        "kind": "grid",
        "variant": "cards",
        "title": "Creative Learning Activities",
        "subtitle": "Bring the story to life through imaginative play and meaningful conversations.",
        "items": [
          {
            "title": "Create Your Own Story Companion",
            "text": "Using felt, paper, or socks, create your own little rabbit (or favourite toy). Give it a name, a personality, and imagine the adventures you'll share together.",
            "icon": "🧸"
          },
          {
            "title": "Love Makes Us Real",
            "text": "Draw or write about someone (or something) that makes you feel loved. It could be a family member, a friend, a pet—or even a favourite toy.",
            "icon": "💌"
          },
          {
            "title": "Toy Comes Alive",
            "text": "Choose your favourite stuffed toy and act out a day where it secretly comes alive whenever nobody is watching. What adventures would it have?",
            "icon": "🎭"
          }
        ],
        "bg": "#ffffff"
      },
      {
        "kind": "feature",
        "title": "Bring the Story Home",
        "image": imgmargery_toys,
        "paras": [
          "Continue the magic beyond the final page with our story-inspired companions and collectibles, thoughtfully curated to celebrate The Velveteen Rabbit.",
          "From adorable bunny companions to keepsakes inspired by the story, they're the perfect reading buddies and a beautiful way to remember this timeless classic."
        ],
        "note": "✨ Available exclusively at The Reading Elf.",
        "bg": "#FFF6EA"
      },
      {
        "kind": "grid",
        "variant": "themes",
        "title": "Discussion Points & Themes",
        "subtitle": "The Velveteen Rabbit is a gentle classic that explores love, identity, change, and what it truly means to be real.",
        "items": [
          {
            "title": "What Makes Someone Real?",
            "text": "Can love change how we see people and things? What do you think it means to be \"real\"?",
            "icon": "❤️"
          },
          {
            "title": "Friendship",
            "text": "How did the Rabbit become the Boy's best friend? What makes a good friend?",
            "icon": "🤝"
          },
          {
            "title": "Growing Up",
            "text": "Sometimes growing means changing. Is change always a bad thing?",
            "icon": "🌱"
          },
          {
            "title": "Why This Book?",
            "text": "A gentle classic that reminds children that kindness, love, and memories are what make life meaningful. It's one of those rare books that stays with readers long after the final page.",
            "icon": "🌟"
          }
        ],
        "bg": "#FEFFE0"
      },
      {
        "kind": "grid",
        "variant": "learning",
        "title": "Vocabulary List",
        "subtitle": "Introduce these beautiful words while reading together.",
        "items": [
          {
            "title": "Velveteen",
            "text": "Soft fabric that feels like velvet.",
            "icon": "🧸"
          },
          {
            "title": "Real",
            "text": "Something that becomes meaningful through love, care, and experience.",
            "icon": "✨"
          },
          {
            "title": "Affection",
            "text": "Showing love and care for someone.",
            "icon": "❤️"
          },
          {
            "title": "Nursery",
            "text": "A room where young children play or sleep.",
            "icon": "🌸"
          }
        ],
        "bg": "#ffffff"
      },
      {
        "kind": "author",
        "name": "Margery Williams",
        "tagline": "Beloved Storyteller",
        "paras": [
          "Margery Williams was an English-American author best known for The Velveteen Rabbit. First published over 100 years ago, her timeless story continues to remind children and adults that love is what gives life its deepest meaning."
        ],
        "chips": [
          "1881–1944",
          "Classic Children's Literature"
        ],
        "photo": imgmargery_author
      },
      {
        "kind": "series",
        "variant": "cards",
        "title": "Start a Reading Habit",
        "subtitle": "The Velveteen Rabbit is just the beginning. Explore more timeless stories by Margery Williams.",
        "items": [
          {
            "title": "The Skin Horse",
            "text": "Velveteen Rabbit Companion",
            "text2": "Margery Williams",
            "image": imgmargery_skin_horse,
            "alt": "The Skin Horse by Margery Williams"
          },
          {
            "title": "Poor Cecco",
            "text": "Christmas Classic",
            "text2": "Margery Williams",
            "image": imgmargery_poor_cecco,
            "alt": "Poor Cecco by Margery Williams"
          },
          {
            "title": "The Little Wooden Doll",
            "text": "Timeless Toy Story",
            "text2": "Margery Williams",
            "image": imgmargery_wooden_doll,
            "alt": "The Little Wooden Doll by Margery Williams"
          }
        ],
        "bg": "#ffffff"
      },
      {
        "kind": "cta",
        "title": [
          "Start Your Child's",
          "Reading Journey",
          "Today"
        ],
        "text": "Whether for bedtime, quiet afternoons, or thoughtful conversations, The Velveteen Rabbit is a story every child should experience.",
        "button": "GET THIS BOOK VIA WHATSAPP →",
        "href": "https://wa.me/919500056482"
      }
    ]
  },
  {
    "slug": "the-secret-garden",
    "metaDescription": "Explore this month's featured book: The Secret Garden by Frances Hodgson Burnett. A timeless story about healing, growth, and the extraordinary power of discovering hidden wonders.",
    "card": {
      "title": "The Secret Garden",
      "author": "Frances Hodgson Burnett",
      "month": "June",
      "desc": "A timeless story about healing, growth, and the extraordinary power of discovering hidden wonders.",
      "image": imgfrances_book
    },
    "hero": {
      "badge": "Book of the Month (June)",
      "title": [
        "The Secret",
        "Garden"
      ],
      "author": "By Frances Hodgson Burnett",
      "cover": imgfrances_book,
      "meta": [],
      "paras": [
        "Published in 1911, The Secret Garden is one of the most beloved children's classics by Frances Hodgson Burnett. It tells the story of Mary Lennox, a lonely and spoiled young girl who is sent to live with her uncle in a vast, mysterious manor house on the Yorkshire moors after the loss of her parents.",
        "While exploring the grounds, Mary discovers a hidden, locked garden that has been abandoned for years. With the help of new friends, she begins to restore the secret garden, uncovering its beauty and magic. As the garden slowly comes back to life, it transforms not only the world around her but also the lives of everyone connected to it."
      ]
    },
    "sections": [
      {
        "kind": "grid",
        "variant": "cards",
        "title": "Creative Learning Activities",
        "subtitle": "Engage your young readers with hands-on projects inspired by the magical world of The Secret Garden.",
        "items": [
          {
            "title": "Design Your Dream Secret Garden",
            "text": "Imagine you've discovered a hidden garden of your own! Draw or paint your dream secret garden. What flowers would bloom there? Would there be a treehouse, a hidden pathway, or a magical fountain? Add all the details that make your garden special.",
            "icon": "🌿"
          },
          {
            "title": "Create a Secret Garden Key",
            "text": "Every secret garden needs a secret key. Using cardboard, clay, or craft paper, design a magical key that unlocks your hidden garden. Decorate it with flowers, vines, butterflies, or symbols that represent nature and imagination.",
            "icon": "🗝️"
          },
          {
            "title": "Nature Explorer Journal",
            "text": "Mary discovered that nature is full of surprises. Take a walk in your garden, park, or neighborhood and create a Nature Explorer Journal. Draw the birds, flowers, insects, and trees you find. Write down interesting observations and create your own collection of nature discoveries.",
            "icon": "🐦"
          }
        ],
        "bg": "#ffffff"
      },
      {
        "kind": "grid",
        "variant": "themes",
        "title": "Discussion Points & Themes",
        "subtitle": "The Secret Garden is a timeless classic that celebrates friendship, curiosity, resilience, and the healing power of nature.",
        "items": [
          {
            "title": "The Secret Garden",
            "text": "Why do you think the garden was locked away for so many years? Discuss how discovering the garden changed Mary and why some places can feel magical when we take the time to care for them.",
            "icon": "🗝️"
          },
          {
            "title": "Growth & Change",
            "text": "At the beginning of the story, Mary is lonely and unhappy. How does she change throughout the book? Can people grow and change just like plants in a garden?",
            "icon": "🌱"
          },
          {
            "title": "Friendship",
            "text": "Mary, Dickon, and Colin help one another in different ways. How do friendships make difficult times easier? What qualities make a good friend?",
            "icon": "🤝"
          },
          {
            "title": "Nature & Wellbeing",
            "text": "The garden becomes a place of healing and happiness. How does spending time outdoors affect the characters? What role does nature play in helping them feel better?",
            "icon": "🌼"
          }
        ],
        "bg": "#FEFFE0"
      },
      {
        "kind": "grid",
        "variant": "learning",
        "title": "Vocabulary List",
        "subtitle": "Introduce these beautiful words from The Secret Garden to help young readers expand their vocabulary and understanding of the story.",
        "items": [
          {
            "title": "Secret",
            "text": "Something hidden or kept unknown from others.",
            "text2": "Mary discovers a secret garden that has been locked away for years.",
            "icon": "🗝️"
          },
          {
            "title": "Garden",
            "text": "A piece of land where flowers, plants, fruits, or vegetables are grown.",
            "text2": "The garden becomes the heart of the story and a place of transformation.",
            "icon": "🌿"
          },
          {
            "title": "Moor",
            "text": "A large area of open land covered with grass, shrubs, and wild plants.",
            "text2": "Misselthwaite Manor is surrounded by the mysterious Yorkshire moors.",
            "icon": "🌼"
          },
          {
            "title": "Robin",
            "text": "A small bird with a cheerful song.",
            "text2": "A friendly robin helps Mary discover clues about the secret garden.",
            "icon": "🐦"
          },
          {
            "title": "Restore",
            "text": "To bring something back to its original condition.",
            "text2": "Mary and her friends work together to restore the neglected garden.",
            "icon": "🌱"
          },
          {
            "title": "Curiosity",
            "text": "A strong desire to learn, explore, or discover something new.",
            "text2": "Mary's curiosity leads her to uncover many secrets throughout the story.",
            "icon": "✨"
          },
          {
            "title": "Friendship",
            "text": "A relationship based on kindness, trust, and support.",
            "text2": "The friendships formed in the garden help the characters grow and heal.",
            "icon": "🤝"
          },
          {
            "title": "Bloom",
            "text": "When a flower opens and begins to grow beautifully.",
            "text2": "As the garden blooms, the lives of the characters bloom too.",
            "icon": "🌸"
          }
        ],
        "bg": "#ffffff"
      },
      {
        "kind": "author",
        "name": "Frances Hodgson Burnett",
        "tagline": "Beloved Children's Author",
        "paras": [
          "Frances Hodgson Burnett was a British-American novelist and playwright known for creating some of the most treasured children's classics of all time.",
          "Born in England and later moving to the United States, she wrote stories that celebrated imagination, resilience, friendship, and the transformative power of nature.",
          "She is best known for The Secret Garden, a timeless classic that has inspired generations of readers with its message of hope, healing, and personal growth."
        ],
        "chips": [
          "1849–1924",
          "Classic Children's Literature"
        ],
        "photo": imgfrances_profile
      },
      {
        "kind": "series",
        "variant": "cards",
        "title": "Start a Reading Habit",
        "subtitle": "Explore more magical adventures and classic stories for young readers.",
        "items": [
          {
            "title": "A Little Princess",
            "text": "Frances Hodgson Burnett",
            "image": imgfrances_1,
            "alt": "A Little Princess"
          },
          {
            "title": "Little Lord Fauntleroy",
            "text": "Frances Hodgson Burnett",
            "image": imgfrances_2,
            "alt": "Little Lord Fauntleroy"
          },
          {
            "title": "The Lost Prince",
            "text": "Frances Hodgson Burnett",
            "image": imgfrances_3,
            "alt": "The Lost Prince"
          },
          {
            "title": "The Land of the Blue Flower",
            "text": "Frances Hodgson Burnett",
            "image": imgfrances_4,
            "alt": "The Land of the Blue Flower"
          }
        ],
        "bg": "#ffffff"
      },
      {
        "kind": "cta",
        "title": [
          "Start Your Child's",
          "Reading Journey",
          "Today"
        ],
        "text": "Whether for bedtime, the classroom, or a gift — this book is a treasure every child deserves.",
        "button": "GET THIS BOOK VIA WHATSAPP →",
        "href": "https://wa.me/919500056482"
      }
    ]
  },
  {
    "slug": "lion-witch-wardrobe",
    "metaDescription": "Explore this month's featured book: The Lion, the Witch and the Wardrobe by C.S. Lewis. Discover magical activities, vocabulary, and discussion points.",
    "card": {
      "title": "The Lion, the Witch and the Wardrobe",
      "author": "C.S. Lewis",
      "month": "May",
      "desc": "A masterpiece of world-building balancing high-stakes adventure with deep emotional themes like loyalty, sacrifice, and forgiveness.",
      "image": imglewis_book
    },
    "hero": {
      "badge": "Book of the Month (May)",
      "title": [
        "The Lion,",
        "the Witch",
        "and the",
        "Wardrobe"
      ],
      "author": "By C.S. Lewis",
      "cover": imglewis_book,
      "meta": [
        "Genre: Fantasy / Adventure",
        "Age Group: 8+ years"
      ],
      "paras": [
        "Published in 1950, this is the most famous book in The Chronicles of Narnia series. It tells the story of four siblings—Peter, Susan, Edmund, and Lucy—who are evacuated from London during the Blitz to live in a large, mysterious country house. While exploring, the youngest, Lucy, steps into an old wardrobe and discovers the magical, snowy land of Narnia.",
        "The land is under the spell of the White Witch, who has made it \"always winter but never Christmas.\" The children must join the Great Lion, Aslan, to fulfill a prophecy, defeat the Witch, and bring Spring back to Narnia."
      ]
    },
    "sections": [
      {
        "kind": "grid",
        "variant": "steps",
        "title": "Creative Learning Activities",
        "subtitle": "Engage your young readers with hands-on projects inspired by the magical world of Narnia.",
        "items": [
          {
            "title": "The Wardrobe Sensory Bin",
            "text": "Create a mini Narnia! Fill a container with \"snow\" (cotton wool or baking soda and hair conditioner). Add small figurines of a lion, a sleigh, and some pine branches. Hide a small wooden wardrobe at the entrance for kids to find.",
            "icon": "❄️"
          },
          {
            "title": "Design Your Own Shield",
            "text": "In the book, Father Christmas gives Peter a shield with a red lion. Use cardboard to cut out a shield shape. If you were a hero in Narnia, what symbol would be on your shield? Paint it and explain why you chose that animal or symbol.",
            "icon": "🛡️"
          },
          {
            "title": "Map Making",
            "text": "Narnia is filled with iconic locations. Have children draw an \"aged\" map using a tea-stained piece of paper featuring Key Landmarks: The Lamp-post, Mr. Tumnus’s House, The Stone Table, and Cair Paravel.",
            "icon": "🗺️"
          }
        ],
        "bg": "#ffffff"
      },
      {
        "kind": "grid",
        "variant": "themes",
        "title": "Discussion Points & Themes",
        "subtitle": "",
        "items": [
          {
            "title": "The Choice",
            "text": "Why did Edmund follow the White Witch? Discuss how temptation and \"Turkish Delight\" can sometimes cloud our judgment.",
            "icon": "🍬"
          },
          {
            "title": "Courage",
            "text": "Who was the bravest character? Is bravery doing something when you aren't afraid, or doing it even though you are?",
            "icon": "🦁"
          },
          {
            "title": "Atmosphere",
            "text": "How does the author describe the change from winter to spring? How does the setting reflect the mood of the story?",
            "icon": "🌤️"
          },
          {
            "title": "Why This Book?",
            "text": "This story is a masterpiece of world-building. It balances high-stakes adventure with deep emotional themes like loyalty, sacrifice, and forgiveness.",
            "icon": "🌟"
          }
        ],
        "bg": "#F0F9FF"
      },
      {
        "kind": "grid",
        "variant": "learning",
        "title": "Vocabulary List",
        "subtitle": "Introduce these \"Narnian\" words to your young readers to expand their language skills:",
        "items": [
          {
            "title": "Wardrobe",
            "text": "A large, tall cupboard in which clothes may be hung or stored.",
            "icon": "🚪"
          },
          {
            "title": "Daughter of Eve / Son of Adam",
            "text": "The terms used by Narnian creatures to describe human girls and boys.",
            "icon": "👑"
          },
          {
            "title": "Prophecy",
            "text": "A prediction of what will happen in the future.",
            "icon": "📜"
          },
          {
            "title": "Traitor",
            "text": "A person who betrays a friend, country, or principle.",
            "icon": "🤝"
          }
        ],
        "bg": "#ffffff"
      },
      {
        "kind": "author",
        "name": "C.S. Lewis",
        "tagline": "Master of Fantasy",
        "paras": [
          "Clive Staples Lewis was a British writer and lay theologian. He held academic positions at both Oxford University and Cambridge University.",
          "He is best known for his works of fiction, especially The Chronicles of Narnia, which has captivated millions of readers and remains a beloved classic of children's literature."
        ],
        "chips": [
          "1898–1963",
          "Classic Fantasy"
        ],
        "photo": imglewis_lewis
      },
      {
        "kind": "series",
        "variant": "cards",
        "title": "Start a Reading Habit",
        "subtitle": "Explore more magical adventures and classic stories for young readers.",
        "items": [
          {
            "title": "Prince Caspian",
            "text": "Chronicles of Narnia",
            "image": imglewis_1,
            "alt": "Similar book"
          },
          {
            "title": "The Voyage of the Dawn Treader",
            "text": "Chronicles of Narnia",
            "image": imglewis_2,
            "alt": "Similar book"
          },
          {
            "title": "The Silver Chair",
            "text": "Chronicles of Narnia",
            "image": imglewis_3,
            "alt": "Similar book"
          },
          {
            "title": "The Horse and His Boy",
            "text": "Chronicles of Narnia",
            "image": imglewis_4,
            "alt": "Similar book"
          }
        ],
        "bg": "#ffffff"
      },
      {
        "kind": "cta",
        "title": [
          "Start Your Child's",
          "Magical Journey",
          "Today"
        ],
        "text": "Whether for bedtime, the classroom, or a gift — this book is a treasure every child deserves.",
        "button": "GET THIS BOOK VIA WHATSAPP →",
        "href": "https://wa.me/919500056482"
      }
    ]
  },
  {
    "slug": "hungry-caterpillar",
    "metaDescription": "Explore this month's featured book: The Very Hungry Caterpillar by Eric Carle. Learn about the story, life cycles, and counting in a fun, interactive way.",
    "card": {
      "title": "The Very Hungry Caterpillar",
      "author": "Eric Carle",
      "month": "April",
      "desc": "A simple, colorful story about a tiny caterpillar who eats, grows, and transforms into a beautiful butterfly. A worldwide favorite!",
      "image": imgeric_book_month
    },
    "hero": {
      "badge": "Book of the Month (April)",
      "title": [
        "The Very",
        "Hungry",
        "Caterpillar"
      ],
      "author": "By Eric Carle",
      "cover": imgeric_book_month,
      "meta": [],
      "paras": [
        "A simple, colorful story about a tiny caterpillar who eats, grows, and transforms into a beautiful butterfly. A worldwide favorite for over 50 years!"
      ]
    },
    "sections": [
      {
        "kind": "grid",
        "variant": "steps",
        "title": "The Life of a Caterpillar",
        "subtitle": "Follow the magical journey of growth and transformation through Eric Carle's iconic life cycle.",
        "items": [
          {
            "title": "The Egg",
            "text": "In the light of the moon, a little egg lay on a leaf.",
            "icon": "🥚"
          },
          {
            "title": "Hatching",
            "text": "One Sunday morning, a tiny caterpillar popped out.",
            "icon": "🐛"
          },
          {
            "title": "Eating",
            "text": "He started to look for some food. He was very hungry!",
            "icon": "🍎"
          },
          {
            "title": "The Cocoon",
            "text": "He built a small house, called a cocoon, around himself.",
            "icon": "🏠"
          },
          {
            "title": "Butterfly",
            "text": "He nibbled a hole... and he was a beautiful butterfly!",
            "icon": "🦋"
          }
        ],
        "bg": "#ffffff"
      },
      {
        "kind": "grid",
        "variant": "themes",
        "title": "Why Kids Love This Book",
        "subtitle": "",
        "items": [
          {
            "title": "Learning",
            "text": "Teaches counting, days of the week, and simple science in a natural way.",
            "icon": "🍎"
          },
          {
            "title": "Visuals",
            "text": "Iconic collage art with bright, vibrant colors that capture attention instantly.",
            "icon": "🎨"
          },
          {
            "title": "Repetition",
            "text": "Predictable patterns help kids remember the story and participate while reading.",
            "icon": "🔁"
          },
          {
            "title": "Transformation",
            "text": "A magical life cycle story that inspires wonder about the natural world.",
            "icon": "🦋"
          }
        ],
        "bg": "#FEFFE0"
      },
      {
        "kind": "grid",
        "variant": "learning",
        "title": "What Children Learn",
        "subtitle": "More than just a story, it's a foundation for early learning.",
        "items": [
          {
            "title": "Counting (1 to 5+)",
            "text": "Kids learn to count as the caterpillar eats through different numbers of fruits each day.",
            "icon": "🔢"
          },
          {
            "title": "Days of the Week",
            "text": "The story follows a weekly cycle, helping children understand Monday through Sunday.",
            "icon": "📅"
          },
          {
            "title": "Healthy Habits",
            "text": "Differentiates between healthy fruits and \"junk\" food that gives the caterpillar a stomachache.",
            "icon": "🍓"
          },
          {
            "title": "Life Cycles",
            "text": "A perfect introduction to biological growth, from egg to caterpillar to butterfly.",
            "icon": "🌱"
          }
        ],
        "bg": "#ffffff"
      },
      {
        "kind": "author",
        "name": "Eric Carle",
        "tagline": "Master of Collage",
        "paras": [
          "Eric Carle was an American designer, illustrator, and writer of children's books. He is most famous for The Very Hungry Caterpillar, which has been translated into more than 66 languages.",
          "His art style is unique, created using hand-painted tissue paper which he cut and layered into beautiful, textured collages. This technique gives his books their unmistakable, vibrant look."
        ],
        "chips": [
          "1929–2021",
          "Award Winning"
        ],
        "photo": imgeric_profile
      },
      {
        "kind": "series",
        "variant": "cards",
        "title": "Start a Reading Habit",
        "subtitle": "The Very Hungry Caterpillar is just the beginning. Explore more early learning favorites for ages 2–6.",
        "items": [
          {
            "title": "Brown Bear, Brown Bear",
            "text": "Eric Carle Classic",
            "image": imgeric_bown_bear,
            "alt": "Similar book"
          },
          {
            "title": "The Very Busy Spider",
            "text": "Eric Carle Classic",
            "image": imgeric_spider,
            "alt": "Similar book"
          },
          {
            "title": "Polar Bear, Polar Bear",
            "text": "Early Learning",
            "image": imgeric_polar_bear,
            "alt": "Similar book"
          },
          {
            "title": "Goodnight Moon",
            "text": "Bedtime Favorite",
            "image": imgeric_goodnight,
            "alt": "Similar book"
          }
        ],
        "bg": "#ffffff"
      },
      {
        "kind": "cta",
        "title": [
          "Start Your Child's",
          "Reading Journey",
          "Today"
        ],
        "text": "Whether for bedtime, the classroom, or a gift — this book is a treasure every child deserves.",
        "button": "GET THIS BOOK VIA WHATSAPP →",
        "href": "https://wa.me/919500056482"
      }
    ]
  }
];

export const BOOK_OF_MONTH_CTA_SHELF = ctaShelf;

export function getBookOfMonth(slug) {
  return BOOKS_OF_MONTH.find((book) => book.slug === slug) ?? null;
}
