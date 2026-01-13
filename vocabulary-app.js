// KET词库 - 剑桥英语初级证书完整词汇（1000个单词）
const KET_WORDS = [
    // 家庭与人物
    { word: "aunt", phonetic: "/ɑːnt/", translation: "阿姨，姑姑", example: "My aunt lives in London." },
    { word: "baby", phonetic: "/ˈbeɪbi/", translation: "婴儿", example: "The baby is sleeping." },
    { word: "brother", phonetic: "/ˈbrʌðər/", translation: "兄弟", example: "I have one brother." },
    { word: "child", phonetic: "/tʃaɪld/", translation: "孩子", example: "She is a happy child." },
    { word: "children", phonetic: "/ˈtʃɪldrən/", translation: "孩子们", example: "The children are playing." },
    { word: "dad", phonetic: "/dæd/", translation: "爸爸", example: "My dad is a doctor." },
    { word: "daughter", phonetic: "/ˈdɔːtər/", translation: "女儿", example: "She is my daughter." },
    { word: "family", phonetic: "/ˈfæməli/", translation: "家庭", example: "I love my family." },
    { word: "father", phonetic: "/ˈfɑːðər/", translation: "父亲", example: "My father works hard." },
    { word: "friend", phonetic: "/frend/", translation: "朋友", example: "She is my best friend." },
    { word: "grandfather", phonetic: "/ˈɡrænfɑːðər/", translation: "祖父", example: "My grandfather tells good stories." },
    { word: "grandmother", phonetic: "/ˈɡrænmʌðər/", translation: "祖母", example: "Grandmother makes delicious cookies." },
    { word: "man", phonetic: "/mæn/", translation: "男人", example: "The man is tall." },
    { word: "mother", phonetic: "/ˈmʌðər/", translation: "母亲", example: "My mother is kind." },
    { word: "mum", phonetic: "/mʌm/", translation: "妈妈", example: "Mum is cooking dinner." },
    { word: "parent", phonetic: "/ˈperənt/", translation: "父母", example: "My parents love me." },
    { word: "people", phonetic: "/ˈpiːpl/", translation: "人们", example: "Many people visit the park." },
    { word: "person", phonetic: "/ˈpɜːrsn/", translation: "人", example: "He is a nice person." },
    { word: "sister", phonetic: "/ˈsɪstər/", translation: "姐妹", example: "My sister is younger than me." },
    { word: "son", phonetic: "/sʌn/", translation: "儿子", example: "He is their son." },
    { word: "uncle", phonetic: "/ˈʌŋkl/", translation: "叔叔，舅舅", example: "Uncle Tom is funny." },
    { word: "woman", phonetic: "/ˈwʊmən/", translation: "女人", example: "The woman is a teacher." },
    { word: "boy", phonetic: "/bɔɪ/", translation: "男孩", example: "The boy is playing." },
    { word: "girl", phonetic: "/ɡɜːrl/", translation: "女孩", example: "The girl is reading." },
    { word: "baby", phonetic: "/ˈbeɪbi/", translation: "婴儿", example: "The baby is crying." },
    { word: "husband", phonetic: "/ˈhʌzbənd/", translation: "丈夫", example: "Her husband is a teacher." },
    { word: "wife", phonetic: "/waɪf/", translation: "妻子", example: "His wife is a doctor." },
    { word: "cousin", phonetic: "/ˈkʌzn/", translation: "堂兄弟姐妹", example: "My cousin visits us often." },
    { word: "teenager", phonetic: "/ˈtiːneɪdʒər/", translation: "青少年", example: "Teenagers love music." },
    { word: "adult", phonetic: "/əˈdʌlt/", translation: "成年人", example: "Adults work every day." },
    { word: "neighbor", phonetic: "/ˈneɪbər/", translation: "邻居", example: "Our neighbor is friendly." },
    { word: "guest", phonetic: "/ɡest/", translation: "客人", example: "We have guests tonight." },

    // 身体部位
    { word: "arm", phonetic: "/ɑːrm/", translation: "手臂", example: "He broke his arm." },
    { word: "back", phonetic: "/bæk/", translation: "背部", example: "My back hurts." },
    { word: "body", phonetic: "/ˈbɑːdi/", translation: "身体", example: "Exercise is good for your body." },
    { word: "ear", phonetic: "/ɪr/", translation: "耳朵", example: "I can hear with my ears." },
    { word: "eye", phonetic: "/aɪ/", translation: "眼睛", example: "She has blue eyes." },
    { word: "face", phonetic: "/feɪs/", translation: "脸", example: "Wash your face." },
    { word: "foot", phonetic: "/fʊt/", translation: "脚", example: "My foot is tired." },
    { word: "hair", phonetic: "/her/", translation: "头发", example: "She has long hair." },
    { word: "hand", phonetic: "/hænd/", translation: "手", example: "Wash your hands." },
    { word: "head", phonetic: "/hed/", translation: "头", example: "My head aches." },
    { word: "leg", phonetic: "/leɡ/", translation: "腿", example: "I hurt my leg." },
    { word: "mouth", phonetic: "/maʊθ/", translation: "嘴", example: "Open your mouth." },
    { word: "nose", phonetic: "/nəʊz/", translation: "鼻子", example: "I smell with my nose." },
    { word: "tooth", phonetic: "/tuːθ/", translation: "牙齿", example: "Brush your teeth." },
    { word: "finger", phonetic: "/ˈfɪŋɡər/", translation: "手指", example: "I have ten fingers." },
    { word: "toe", phonetic: "/təʊ/", translation: "脚趾", example: "I hurt my toe." },
    { word: "neck", phonetic: "/nek/", translation: "脖子", example: "My neck is sore." },
    { word: "shoulder", phonetic: "/ˈʃəʊldər/", translation: "肩膀", example: "My shoulder hurts." },
    { word: "stomach", phonetic: "/ˈstʌmək/", translation: "胃，肚子", example: "My stomach is full." },
    { word: "knee", phonetic: "/niː/", translation: "膝盖", example: "I hurt my knee." },
    { word: "heart", phonetic: "/hɑːrt/", translation: "心脏", example: "My heart is beating fast." },
    { word: "brain", phonetic: "/breɪn/", translation: "大脑", example: "The brain controls your body." },
    { word: "skin", phonetic: "/skɪn/", translation: "皮肤", example: "Protect your skin from the sun." },

    // 动物
    { word: "animal", phonetic: "/ˈænɪml/", translation: "动物", example: "I love animals." },
    { word: "bird", phonetic: "/bɜːrd/", translation: "鸟", example: "The bird is singing." },
    { word: "cat", phonetic: "/kæt/", translation: "猫", example: "The cat is sleeping." },
    { word: "cow", phonetic: "/kaʊ/", translation: "奶牛", example: "The cow gives milk." },
    { word: "dog", phonetic: "/dɔːɡ/", translation: "狗", example: "My dog is friendly." },
    { word: "duck", phonetic: "/dʌk/", translation: "鸭子", example: "Ducks swim in the pond." },
    { word: "elephant", phonetic: "/ˈelɪfənt/", translation: "大象", example: "Elephants are big." },
    { word: "fish", phonetic: "/fɪʃ/", translation: "鱼", example: "Fish live in water." },
    { word: "horse", phonetic: "/hɔːrs/", translation: "马", example: "I can ride a horse." },
    { word: "lion", phonetic: "/ˈlaɪən/", translation: "狮子", example: "The lion is strong." },
    { word: "monkey", phonetic: "/ˈmʌŋki/", translation: "猴子", example: "Monkeys like bananas." },
    { word: "mouse", phonetic: "/maʊs/", translation: "老鼠", example: "A mouse is small." },
    { word: "pet", phonetic: "/pet/", translation: "宠物", example: "I have a pet cat." },
    { word: "rabbit", phonetic: "/ˈræbɪt/", translation: "兔子", example: "The rabbit is white." },
    { word: "sheep", phonetic: "/ʃiːp/", translation: "羊", example: "Sheep eat grass." },
    { word: "tiger", phonetic: "/ˈtaɪɡər/", translation: "老虎", example: "Tigers are dangerous." },
    { word: "bear", phonetic: "/ber/", translation: "熊", example: "Bears sleep in winter." },
    { word: "pig", phonetic: "/pɪɡ/", translation: "猪", example: "The pig is pink." },
    { word: "chicken", phonetic: "/ˈtʃɪkɪn/", translation: "小鸡", example: "The chicken lays eggs." },
    { word: "snake", phonetic: "/sneɪk/", translation: "蛇", example: "Some snakes are poisonous." },
    { word: "butterfly", phonetic: "/ˈbʌtərflaɪ/", translation: "蝴蝶", example: "Butterflies are colorful." },
    { word: "bee", phonetic: "/biː/", translation: "蜜蜂", example: "Bees make honey." },
    { word: "ant", phonetic: "/ænt/", translation: "蚂蚁", example: "Ants work hard." },
    { word: "spider", phonetic: "/ˈspaɪdər/", translation: "蜘蛛", example: "The spider makes a web." },
    { word: "frog", phonetic: "/frɒɡ/", translation: "青蛙", example: "Frogs can jump high." },
    { word: "turtle", phonetic: "/ˈtɜːrtl/", translation: "乌龟", example: "The turtle is slow." },
    { word: "whale", phonetic: "/weɪl/", translation: "鲸鱼", example: "Whales are huge." },
    { word: "shark", phonetic: "/ʃɑːrk/", translation: "鲨鱼", example: "Sharks have sharp teeth." },
    { word: "dolphin", phonetic: "/ˈdɒlfɪn/", translation: "海豚", example: "Dolphins are smart." },
    { word: "giraffe", phonetic: "/dʒɪˈræf/", translation: "长颈鹿", example: "Giraffes have long necks." },
    { word: "zebra", phonetic: "/ˈziːbrə/", translation: "斑马", example: "Zebras have stripes." },
    { word: "panda", phonetic: "/ˈpændə/", translation: "熊猫", example: "Pandas eat bamboo." },
    { word: "kangaroo", phonetic: "/ˌkæŋɡəˈruː/", translation: "袋鼠", example: "Kangaroos can jump far." },
    { word: "wolf", phonetic: "/wʊlf/", translation: "狼", example: "Wolves hunt in packs." },

    // 食物与饮料
    { word: "apple", phonetic: "/ˈæpl/", translation: "苹果", example: "An apple a day keeps the doctor away." },
    { word: "banana", phonetic: "/bəˈnænə/", translation: "香蕉", example: "Monkeys love bananas." },
    { word: "bread", phonetic: "/bred/", translation: "面包", example: "I eat bread for breakfast." },
    { word: "breakfast", phonetic: "/ˈbrekfəst/", translation: "早餐", example: "Breakfast is important." },
    { word: "butter", phonetic: "/ˈbʌtər/", translation: "黄油", example: "Put butter on the bread." },
    { word: "cake", phonetic: "/keɪk/", translation: "蛋糕", example: "Birthday cake is sweet." },
    { word: "cheese", phonetic: "/tʃiːz/", translation: "奶酪", example: "I like cheese sandwiches." },
    { word: "chicken", phonetic: "/ˈtʃɪkɪn/", translation: "鸡肉", example: "We're having chicken for dinner." },
    { word: "chocolate", phonetic: "/ˈtʃɑːklət/", translation: "巧克力", example: "I love chocolate." },
    { word: "coffee", phonetic: "/ˈkɔːfi/", translation: "咖啡", example: "Dad drinks coffee every morning." },
    { word: "dinner", phonetic: "/ˈdɪnər/", translation: "晚餐", example: "We have dinner at 6 pm." },
    { word: "drink", phonetic: "/drɪŋk/", translation: "饮料，喝", example: "Drink some water." },
    { word: "egg", phonetic: "/eɡ/", translation: "鸡蛋", example: "I eat eggs for breakfast." },
    { word: "fish", phonetic: "/fɪʃ/", translation: "鱼", example: "Fish is healthy food." },
    { word: "food", phonetic: "/fuːd/", translation: "食物", example: "I love Italian food." },
    { word: "fruit", phonetic: "/fruːt/", translation: "水果", example: "Eat more fruit." },
    { word: "ice cream", phonetic: "/aɪs kriːm/", translation: "冰淇淋", example: "Ice cream is cold and sweet." },
    { word: "juice", phonetic: "/dʒuːs/", translation: "果汁", example: "I drink orange juice." },
    { word: "lunch", phonetic: "/lʌntʃ/", translation: "午餐", example: "What's for lunch?" },
    { word: "meat", phonetic: "/miːt/", translation: "肉", example: "Some people don't eat meat." },
    { word: "milk", phonetic: "/mɪlk/", translation: "牛奶", example: "Milk is good for you." },
    { word: "orange", phonetic: "/ˈɔːrɪndʒ/", translation: "橙子", example: "Oranges have vitamin C." },
    { word: "pizza", phonetic: "/ˈpiːtsə/", translation: "披萨", example: "Let's order pizza." },
    { word: "rice", phonetic: "/raɪs/", translation: "米饭", example: "Rice is a staple food." },
    { word: "salad", phonetic: "/ˈsæləd/", translation: "沙拉", example: "I'll have a salad." },
    { word: "sandwich", phonetic: "/ˈsænwɪtʃ/", translation: "三明治", example: "I made a sandwich." },
    { word: "sugar", phonetic: "/ˈʃʊɡər/", translation: "糖", example: "Too much sugar is bad." },
    { word: "tea", phonetic: "/tiː/", translation: "茶", example: "Would you like some tea?" },
    { word: "tomato", phonetic: "/təˈmeɪtəʊ/", translation: "西红柿", example: "Tomatoes are red." },
    { word: "vegetable", phonetic: "/ˈvedʒtəbl/", translation: "蔬菜", example: "Eat your vegetables." },
    { word: "water", phonetic: "/ˈwɔːtər/", translation: "水", example: "Drink plenty of water." },
    { word: "carrot", phonetic: "/ˈkærət/", translation: "胡萝卜", example: "Rabbits love carrots." },
    { word: "potato", phonetic: "/pəˈteɪtəʊ/", translation: "土豆", example: "French fries are made from potatoes." },
    { word: "onion", phonetic: "/ˈʌnjən/", translation: "洋葱", example: "Onions make me cry." },
    { word: "cucumber", phonetic: "/ˈkjuːkʌmbər/", translation: "黄瓜", example: "Cucumbers are green." },
    { word: "corn", phonetic: "/kɔːrn/", translation: "玉米", example: "I like sweet corn." },
    { word: "pear", phonetic: "/per/", translation: "梨", example: "Pears are juicy." },
    { word: "grape", phonetic: "/ɡreɪp/", translation: "葡萄", example: "Grapes grow on vines." },
    { word: "strawberry", phonetic: "/ˈstrɔːberi/", translation: "草莓", example: "Strawberries are sweet." },
    { word: "watermelon", phonetic: "/ˈwɔːtərmelən/", translation: "西瓜", example: "Watermelon is refreshing." },
    { word: "lemon", phonetic: "/ˈlemən/", translation: "柠檬", example: "Lemons are sour." },
    { word: "peach", phonetic: "/piːtʃ/", translation: "桃子", example: "Peaches are soft." },
    { word: "cherry", phonetic: "/ˈtʃeri/", translation: "樱桃", example: "Cherries are red." },
    { word: "cookie", phonetic: "/ˈkʊki/", translation: "饼干", example: "I want a cookie." },
    { word: "candy", phonetic: "/ˈkændi/", translation: "糖果", example: "Too much candy is bad." },
    { word: "soup", phonetic: "/suːp/", translation: "汤", example: "Chicken soup is hot." },
    { word: "noodle", phonetic: "/ˈnuːdl/", translation: "面条", example: "I like noodles." },
    { word: "spaghetti", phonetic: "/spəˈɡeti/", translation: "意大利面", example: "Spaghetti is delicious." },
    { word: "hamburger", phonetic: "/ˈhæmbɜːrɡər/", translation: "汉堡包", example: "I had a hamburger for lunch." },
    { word: "hot dog", phonetic: "/hɒt dɒɡ/", translation: "热狗", example: "Hot dogs are popular." },
    { word: "french fries", phonetic: "/frentʃ fraɪz/", translation: "薯条", example: "I love french fries." },
    { word: "popcorn", phonetic: "/ˈpɒpkɔːrn/", translation: "爆米花", example: "We eat popcorn at the movies." },
    { word: "yogurt", phonetic: "/ˈjəʊɡərt/", translation: "酸奶", example: "Yogurt is healthy." },
    { word: "honey", phonetic: "/ˈhʌni/", translation: "蜂蜜", example: "Honey is sweet." },
    { word: "jam", phonetic: "/dʒæm/", translation: "果酱", example: "I like strawberry jam." },
    { word: "flour", phonetic: "/ˈflaʊər/", translation: "面粉", example: "We use flour to make bread." },
    { word: "salt", phonetic: "/sɔːlt/", translation: "盐", example: "Add a little salt." },
    { word: "pepper", phonetic: "/ˈpepər/", translation: "胡椒", example: "Black pepper is spicy." },

    // 颜色
    { word: "black", phonetic: "/blæk/", translation: "黑色", example: "I wear black shoes." },
    { word: "blue", phonetic: "/bluː/", translation: "蓝色", example: "The sky is blue." },
    { word: "brown", phonetic: "/braʊn/", translation: "棕色", example: "My dog is brown." },
    { word: "color", phonetic: "/ˈkʌlər/", translation: "颜色", example: "What's your favorite color?" },
    { word: "green", phonetic: "/ɡriːn/", translation: "绿色", example: "Grass is green." },
    { word: "grey", phonetic: "/ɡreɪ/", translation: "灰色", example: "The clouds are grey." },
    { word: "orange", phonetic: "/ˈɔːrɪndʒ/", translation: "橙色", example: "Oranges are orange." },
    { word: "pink", phonetic: "/pɪŋk/", translation: "粉色", example: "Pink is a nice color." },
    { word: "purple", phonetic: "/ˈpɜːrpl/", translation: "紫色", example: "I like purple flowers." },
    { word: "red", phonetic: "/red/", translation: "红色", example: "Apples can be red." },
    { word: "white", phonetic: "/waɪt/", translation: "白色", example: "Snow is white." },
    { word: "yellow", phonetic: "/ˈjeləʊ/", translation: "黄色", example: "The sun is yellow." },
    { word: "gold", phonetic: "/ɡəʊld/", translation: "金色", example: "The ring is gold." },
    { word: "silver", phonetic: "/ˈsɪlvər/", translation: "银色", example: "Silver is shiny." },
    { word: "dark", phonetic: "/dɑːrk/", translation: "深色的", example: "Dark blue is my favorite." },
    { word: "light", phonetic: "/laɪt/", translation: "浅色的", example: "Light pink is pretty." },
    { word: "bright", phonetic: "/braɪt/", translation: "明亮的", example: "Bright colors are happy." },

    // 学校与学习
    { word: "book", phonetic: "/bʊk/", translation: "书", example: "I'm reading a book." },
    { word: "class", phonetic: "/klæs/", translation: "班级，课", example: "I have English class today." },
    { word: "classroom", phonetic: "/ˈklæsruːm/", translation: "教室", example: "The classroom is clean." },
    { word: "desk", phonetic: "/desk/", translation: "书桌", example: "Sit at your desk." },
    { word: "exam", phonetic: "/ɪɡˈzæm/", translation: "考试", example: "I have an exam tomorrow." },
    { word: "homework", phonetic: "/ˈhəʊmwɜːrk/", translation: "家庭作业", example: "Do your homework." },
    { word: "lesson", phonetic: "/ˈlesn/", translation: "课程", example: "Today's lesson is about animals." },
    { word: "page", phonetic: "/peɪdʒ/", translation: "页", example: "Turn to page 10." },
    { word: "paper", phonetic: "/ˈpeɪpər/", translation: "纸", example: "Write on the paper." },
    { word: "pen", phonetic: "/pen/", translation: "钢笔", example: "I need a pen." },
    { word: "pencil", phonetic: "/ˈpensl/", translation: "铅笔", example: "Use a pencil to draw." },
    { word: "question", phonetic: "/ˈkwestʃən/", translation: "问题", example: "Ask a question." },
    { word: "read", phonetic: "/riːd/", translation: "阅读", example: "I read every day." },
    { word: "school", phonetic: "/skuːl/", translation: "学校", example: "I go to school by bus." },
    { word: "student", phonetic: "/ˈstuːdnt/", translation: "学生", example: "She is a good student." },
    { word: "study", phonetic: "/ˈstʌdi/", translation: "学习", example: "I study English." },
    { word: "teacher", phonetic: "/ˈtiːtʃər/", translation: "老师", example: "My teacher is nice." },
    { word: "test", phonetic: "/test/", translation: "测试", example: "We have a test today." },
    { word: "write", phonetic: "/raɪt/", translation: "写", example: "Write your name." },
    { word: "notebook", phonetic: "/ˈnəʊtbʊk/", translation: "笔记本", example: "I need a new notebook." },
    { word: "eraser", phonetic: "/ɪˈreɪzər/", translation: "橡皮擦", example: "Can I borrow your eraser?" },
    { word: "ruler", phonetic: "/ˈruːlər/", translation: "尺子", example: "Use a ruler to draw straight lines." },
    { word: "backpack", phonetic: "/ˈbækpæk/", translation: "背包", example: "Put your books in your backpack." },
    { word: "library", phonetic: "/ˈlaɪbreri/", translation: "图书馆", example: "The library has many books." },
    { word: "dictionary", phonetic: "/ˈdɪkʃəneri/", translation: "字典", example: "Look it up in the dictionary." },
    { word: "math", phonetic: "/mæθ/", translation: "数学", example: "Math is fun." },
    { word: "science", phonetic: "/ˈsaɪəns/", translation: "科学", example: "I like science class." },
    { word: "history", phonetic: "/ˈhɪstəri/", translation: "历史", example: "History tells us about the past." },
    { word: "geography", phonetic: "/dʒiˈɒɡrəfi/", translation: "地理", example: "Geography is about places." },
    { word: "art", phonetic: "/ɑːrt/", translation: "美术", example: "I love art class." },
    { word: "music", phonetic: "/ˈmjuːzɪk/", translation: "音乐", example: "Music makes me happy." },
    { word: "computer", phonetic: "/kəmˈpjuːtər/", translation: "电脑", example: "I use a computer for homework." },
    { word: "answer", phonetic: "/ˈɑːnsər/", translation: "答案", example: "What's the answer?" },
    { word: "mistake", phonetic: "/mɪˈsteɪk/", translation: "错误", example: "Learn from your mistakes." },
    { word: "grade", phonetic: "/ɡreɪd/", translation: "年级，成绩", example: "I'm in third grade." },
    { word: "learn", phonetic: "/lɜːrn/", translation: "学习", example: "I want to learn English." },

    // 运动与活动
    { word: "ball", phonetic: "/bɔːl/", translation: "球", example: "Kick the ball." },
    { word: "basketball", phonetic: "/ˈbæskɪtbɔːl/", translation: "篮球", example: "I play basketball." },
    { word: "bike", phonetic: "/baɪk/", translation: "自行车", example: "I ride my bike to school." },
    { word: "dance", phonetic: "/dæns/", translation: "跳舞", example: "She loves to dance." },
    { word: "football", phonetic: "/ˈfʊtbɔːl/", translation: "足球", example: "Football is popular." },
    { word: "game", phonetic: "/ɡeɪm/", translation: "游戏", example: "Let's play a game." },
    { word: "jump", phonetic: "/dʒʌmp/", translation: "跳", example: "Jump high!" },
    { word: "play", phonetic: "/pleɪ/", translation: "玩", example: "Children play outside." },
    { word: "run", phonetic: "/rʌn/", translation: "跑", example: "Run fast!" },
    { word: "sing", phonetic: "/sɪŋ/", translation: "唱歌", example: "I sing in the shower." },
    { word: "sport", phonetic: "/spɔːrt/", translation: "运动", example: "Sport is good for health." },
    { word: "swim", phonetic: "/swɪm/", translation: "游泳", example: "I can swim well." },
    { word: "tennis", phonetic: "/ˈtenɪs/", translation: "网球", example: "She plays tennis." },
    { word: "walk", phonetic: "/wɔːk/", translation: "走路", example: "Let's walk to the park." },
    { word: "climb", phonetic: "/klaɪm/", translation: "爬", example: "Children climb trees." },
    { word: "ski", phonetic: "/skiː/", translation: "滑雪", example: "I can ski well." },
    { word: "skate", phonetic: "/skeɪt/", translation: "滑冰", example: "Let's go skating." },
    { word: "baseball", phonetic: "/ˈbeɪsbɔːl/", translation: "棒球", example: "Baseball is popular in America." },
    { word: "volleyball", phonetic: "/ˈvɒlibɔːl/", translation: "排球", example: "We play volleyball at school." },
    { word: "golf", phonetic: "/ɡɒlf/", translation: "高尔夫球", example: "Golf is a quiet sport." },
    { word: "yoga", phonetic: "/ˈjəʊɡə/", translation: "瑜伽", example: "Yoga is relaxing." },
    { word: "exercise", phonetic: "/ˈeksərsaɪz/", translation: "锻炼", example: "Exercise every day." },
    { word: "race", phonetic: "/reɪs/", translation: "比赛，赛跑", example: "Let's have a race!" },
    { word: "win", phonetic: "/wɪn/", translation: "赢", example: "I want to win the game." },
    { word: "lose", phonetic: "/luːz/", translation: "输", example: "Don't be sad if you lose." },
    { word: "team", phonetic: "/tiːm/", translation: "团队", example: "We are a good team." },
    { word: "player", phonetic: "/ˈpleɪər/", translation: "运动员", example: "He is a basketball player." },

    // 衣服
    { word: "clothes", phonetic: "/kləʊðz/", translation: "衣服", example: "Wear clean clothes." },
    { word: "coat", phonetic: "/kəʊt/", translation: "外套", example: "It's cold, wear your coat." },
    { word: "dress", phonetic: "/dres/", translation: "连衣裙", example: "She wears a pretty dress." },
    { word: "hat", phonetic: "/hæt/", translation: "帽子", example: "Wear a hat in the sun." },
    { word: "jacket", phonetic: "/ˈdʒækɪt/", translation: "夹克", example: "I need a warm jacket." },
    { word: "jeans", phonetic: "/dʒiːnz/", translation: "牛仔裤", example: "I wear jeans every day." },
    { word: "shirt", phonetic: "/ʃɜːrt/", translation: "衬衫", example: "He wears a white shirt." },
    { word: "shoe", phonetic: "/ʃuː/", translation: "鞋", example: "These shoes are comfortable." },
    { word: "skirt", phonetic: "/skɜːrt/", translation: "裙子", example: "She wears a red skirt." },
    { word: "sock", phonetic: "/sɑːk/", translation: "袜子", example: "I need new socks." },
    { word: "trousers", phonetic: "/ˈtraʊzərz/", translation: "裤子", example: "He wears black trousers." },
    { word: "sweater", phonetic: "/ˈswetər/", translation: "毛衣", example: "Wear a sweater, it's cold." },
    { word: "scarf", phonetic: "/skɑːrf/", translation: "围巾", example: "This scarf is warm." },
    { word: "gloves", phonetic: "/ɡlʌvz/", translation: "手套", example: "I need gloves in winter." },
    { word: "boots", phonetic: "/buːts/", translation: "靴子", example: "These boots are waterproof." },
    { word: "sandals", phonetic: "/ˈsændlz/", translation: "凉鞋", example: "I wear sandals in summer." },
    { word: "sneakers", phonetic: "/ˈsniːkərz/", translation: "运动鞋", example: "My sneakers are comfortable." },
    { word: "tie", phonetic: "/taɪ/", translation: "领带", example: "Dad wears a tie to work." },
    { word: "belt", phonetic: "/belt/", translation: "腰带", example: "I need a belt for these pants." },
    { word: "pocket", phonetic: "/ˈpɒkɪt/", translation: "口袋", example: "Put it in your pocket." },
    { word: "button", phonetic: "/ˈbʌtn/", translation: "纽扣", example: "Button your shirt." },
    { word: "zipper", phonetic: "/ˈzɪpər/", translation: "拉链", example: "Zip up your jacket." },
    { word: "uniform", phonetic: "/ˈjuːnɪfɔːrm/", translation: "制服", example: "Students wear uniforms." },

    // 天气与自然
    { word: "cloud", phonetic: "/klaʊd/", translation: "云", example: "There are clouds in the sky." },
    { word: "cold", phonetic: "/kəʊld/", translation: "寒冷的", example: "It's cold today." },
    { word: "flower", phonetic: "/ˈflaʊər/", translation: "花", example: "Flowers are beautiful." },
    { word: "garden", phonetic: "/ˈɡɑːrdn/", translation: "花园", example: "We have a nice garden." },
    { word: "hot", phonetic: "/hɑːt/", translation: "热的", example: "Summer is hot." },
    { word: "rain", phonetic: "/reɪn/", translation: "雨", example: "It will rain tomorrow." },
    { word: "snow", phonetic: "/snəʊ/", translation: "雪", example: "I love snow." },
    { word: "sun", phonetic: "/sʌn/", translation: "太阳", example: "The sun is shining." },
    { word: "tree", phonetic: "/triː/", translation: "树", example: "Trees give us oxygen." },
    { word: "warm", phonetic: "/wɔːrm/", translation: "温暖的", example: "Spring is warm." },
    { word: "weather", phonetic: "/ˈweðər/", translation: "天气", example: "How's the weather?" },
    { word: "wind", phonetic: "/wɪnd/", translation: "风", example: "The wind is strong." },
    { word: "sky", phonetic: "/skaɪ/", translation: "天空", example: "The sky is blue." },
    { word: "moon", phonetic: "/muːn/", translation: "月亮", example: "The moon is bright tonight." },
    { word: "star", phonetic: "/stɑːr/", translation: "星星", example: "I can see many stars." },
    { word: "rainbow", phonetic: "/ˈreɪnbəʊ/", translation: "彩虹", example: "Look at the rainbow!" },
    { word: "storm", phonetic: "/stɔːrm/", translation: "暴风雨", example: "The storm is coming." },
    { word: "thunder", phonetic: "/ˈθʌndər/", translation: "雷", example: "I hear thunder." },
    { word: "lightning", phonetic: "/ˈlaɪtnɪŋ/", translation: "闪电", example: "Lightning is dangerous." },
    { word: "ice", phonetic: "/aɪs/", translation: "冰", example: "Ice is cold and slippery." },
    { word: "fog", phonetic: "/fɒɡ/", translation: "雾", example: "The fog is thick." },
    { word: "leaf", phonetic: "/liːf/", translation: "树叶", example: "The leaf is green." },
    { word: "grass", phonetic: "/ɡrɑːs/", translation: "草", example: "Don't walk on the grass." },
    { word: "plant", phonetic: "/plɑːnt/", translation: "植物", example: "Water the plants." },
    { word: "forest", phonetic: "/ˈfɒrɪst/", translation: "森林", example: "The forest has many trees." },
    { word: "mountain", phonetic: "/ˈmaʊntɪn/", translation: "山", example: "The mountain is high." },
    { word: "river", phonetic: "/ˈrɪvər/", translation: "河流", example: "The river is long." },
    { word: "lake", phonetic: "/leɪk/", translation: "湖", example: "We swim in the lake." },
    { word: "ocean", phonetic: "/ˈəʊʃn/", translation: "海洋", example: "The ocean is big." },
    { word: "beach", phonetic: "/biːtʃ/", translation: "海滩", example: "Let's go to the beach." },
    { word: "island", phonetic: "/ˈaɪlənd/", translation: "岛", example: "Hawaii is an island." },
    { word: "desert", phonetic: "/ˈdezərt/", translation: "沙漠", example: "The desert is hot and dry." },
    { word: "rock", phonetic: "/rɒk/", translation: "岩石", example: "Sit on this rock." },
    { word: "sand", phonetic: "/sænd/", translation: "沙子", example: "I like playing in the sand." },

    // 常用动词
    { word: "come", phonetic: "/kʌm/", translation: "来", example: "Come here, please." },
    { word: "do", phonetic: "/duː/", translation: "做", example: "What do you do?" },
    { word: "eat", phonetic: "/iːt/", translation: "吃", example: "Let's eat together." },
    { word: "get", phonetic: "/ɡet/", translation: "得到", example: "Get your books." },
    { word: "give", phonetic: "/ɡɪv/", translation: "给", example: "Give me the pen." },
    { word: "go", phonetic: "/ɡəʊ/", translation: "去", example: "Let's go home." },
    { word: "have", phonetic: "/hæv/", translation: "有", example: "I have a dog." },
    { word: "help", phonetic: "/help/", translation: "帮助", example: "Can you help me?" },
    { word: "know", phonetic: "/nəʊ/", translation: "知道", example: "I know the answer." },
    { word: "like", phonetic: "/laɪk/", translation: "喜欢", example: "I like music." },
    { word: "listen", phonetic: "/ˈlɪsn/", translation: "听", example: "Listen to me." },
    { word: "live", phonetic: "/lɪv/", translation: "居住", example: "I live in Beijing." },
    { word: "look", phonetic: "/lʊk/", translation: "看", example: "Look at the board." },
    { word: "love", phonetic: "/lʌv/", translation: "爱", example: "I love my family." },
    { word: "make", phonetic: "/meɪk/", translation: "制作", example: "Make a cake." },
    { word: "open", phonetic: "/ˈəʊpən/", translation: "打开", example: "Open the door." },
    { word: "see", phonetic: "/siː/", translation: "看见", example: "I can see you." },
    { word: "sit", phonetic: "/sɪt/", translation: "坐", example: "Sit down, please." },
    { word: "sleep", phonetic: "/sliːp/", translation: "睡觉", example: "I sleep at 10 pm." },
    { word: "speak", phonetic: "/spiːk/", translation: "说话", example: "Speak English." },
    { word: "stand", phonetic: "/stænd/", translation: "站", example: "Stand up." },
    { word: "take", phonetic: "/teɪk/", translation: "拿", example: "Take this book." },
    { word: "talk", phonetic: "/tɔːk/", translation: "交谈", example: "Let's talk." },
    { word: "think", phonetic: "/θɪŋk/", translation: "思考", example: "Think carefully." },
    { word: "want", phonetic: "/wɑːnt/", translation: "想要", example: "I want a toy." },
    { word: "watch", phonetic: "/wɑːtʃ/", translation: "观看", example: "Watch TV." },
    { word: "work", phonetic: "/wɜːrk/", translation: "工作", example: "I work hard." },
    { word: "buy", phonetic: "/baɪ/", translation: "买", example: "I want to buy a toy." },
    { word: "sell", phonetic: "/sel/", translation: "卖", example: "They sell books." },
    { word: "find", phonetic: "/faɪnd/", translation: "找到", example: "I can't find my keys." },
    { word: "lose", phonetic: "/luːz/", translation: "丢失", example: "Don't lose your wallet." },
    { word: "bring", phonetic: "/brɪŋ/", translation: "带来", example: "Bring your book tomorrow." },
    { word: "carry", phonetic: "/ˈkæri/", translation: "携带", example: "Help me carry this bag." },
    { word: "put", phonetic: "/pʊt/", translation: "放", example: "Put it on the table." },
    { word: "pull", phonetic: "/pʊl/", translation: "拉", example: "Pull the door open." },
    { word: "push", phonetic: "/pʊʃ/", translation: "推", example: "Push the door closed." },
    { word: "throw", phonetic: "/θrəʊ/", translation: "扔", example: "Throw the ball to me." },
    { word: "catch", phonetic: "/kætʃ/", translation: "接住", example: "Catch the ball!" },
    { word: "hit", phonetic: "/hɪt/", translation: "打", example: "Hit the ball with the bat." },
    { word: "kick", phonetic: "/kɪk/", translation: "踢", example: "Kick the football." },
    { word: "touch", phonetic: "/tʌtʃ/", translation: "触摸", example: "Don't touch the hot pot." },
    { word: "hold", phonetic: "/həʊld/", translation: "握住", example: "Hold my hand." },
    { word: "wash", phonetic: "/wɒʃ/", translation: "洗", example: "Wash your hands before eating." },
    { word: "clean", phonetic: "/kliːn/", translation: "打扫", example: "Clean your room." },
    { word: "cook", phonetic: "/kʊk/", translation: "烹饪", example: "Mom is cooking dinner." },
    { word: "cut", phonetic: "/kʌt/", translation: "切", example: "Cut the cake." },
    { word: "draw", phonetic: "/drɔː/", translation: "画", example: "I like to draw pictures." },
    { word: "paint", phonetic: "/peɪnt/", translation: "绘画", example: "Let's paint a picture." },
    { word: "cry", phonetic: "/kraɪ/", translation: "哭", example: "The baby is crying." },
    { word: "laugh", phonetic: "/lɑːf/", translation: "笑", example: "The joke made me laugh." },
    { word: "smile", phonetic: "/smaɪl/", translation: "微笑", example: "She has a beautiful smile." },
    { word: "shout", phonetic: "/ʃaʊt/", translation: "喊叫", example: "Don't shout in class." },
    { word: "call", phonetic: "/kɔːl/", translation: "打电话", example: "Call me later." },
    { word: "ask", phonetic: "/ɑːsk/", translation: "问", example: "Ask your teacher." },
    { word: "answer", phonetic: "/ˈɑːnsər/", translation: "回答", example: "Answer the question." },
    { word: "tell", phonetic: "/tel/", translation: "告诉", example: "Tell me a story." },
    { word: "say", phonetic: "/seɪ/", translation: "说", example: "What did you say?" },
    { word: "show", phonetic: "/ʃəʊ/", translation: "展示", example: "Show me your drawing." },
    { word: "teach", phonetic: "/tiːtʃ/", translation: "教", example: "My dad teaches me math." },
    { word: "learn", phonetic: "/lɜːrn/", translation: "学习", example: "I learn something new every day." },
    { word: "try", phonetic: "/traɪ/", translation: "尝试", example: "Try your best!" },
    { word: "use", phonetic: "/juːz/", translation: "使用", example: "Use a pen to write." },
    { word: "wear", phonetic: "/wer/", translation: "穿戴", example: "Wear warm clothes." },
    { word: "close", phonetic: "/kləʊz/", translation: "关闭", example: "Close the window." },
    { word: "turn", phonetic: "/tɜːrn/", translation: "转向", example: "Turn left here." },
    { word: "wait", phonetic: "/weɪt/", translation: "等待", example: "Wait for me!" },
    { word: "start", phonetic: "/stɑːrt/", translation: "开始", example: "Let's start the game." },
    { word: "stop", phonetic: "/stɒp/", translation: "停止", example: "Stop talking, please." },
    { word: "finish", phonetic: "/ˈfɪnɪʃ/", translation: "完成", example: "Finish your homework." },
    { word: "begin", phonetic: "/bɪˈɡɪn/", translation: "开始", example: "Begin reading." },
    { word: "end", phonetic: "/end/", translation: "结束", example: "The movie will end soon." },
    { word: "change", phonetic: "/tʃeɪndʒ/", translation: "改变", example: "Change your clothes." },
    { word: "move", phonetic: "/muːv/", translation: "移动", example: "Move your chair closer." },
    { word: "stay", phonetic: "/steɪ/", translation: "停留", example: "Stay here with me." },
    { word: "follow", phonetic: "/ˈfɒləʊ/", translation: "跟随", example: "Follow me." },
    { word: "leave", phonetic: "/liːv/", translation: "离开", example: "It's time to leave." },
    { word: "arrive", phonetic: "/əˈraɪv/", translation: "到达", example: "We will arrive at 3 pm." },
    { word: "visit", phonetic: "/ˈvɪzɪt/", translation: "拜访", example: "Let's visit grandma." },
    { word: "meet", phonetic: "/miːt/", translation: "见面", example: "Nice to meet you." },
    { word: "send", phonetic: "/send/", translation: "发送", example: "Send me a message." },
    { word: "receive", phonetic: "/rɪˈsiːv/", translation: "收到", example: "I received your letter." },
    { word: "choose", phonetic: "/tʃuːz/", translation: "选择", example: "Choose your favorite color." },
    { word: "pick", phonetic: "/pɪk/", translation: "挑选", example: "Pick the red one." },
    { word: "drop", phonetic: "/drɒp/", translation: "掉落", example: "Don't drop the glass." },
    { word: "break", phonetic: "/breɪk/", translation: "打破", example: "Be careful not to break it." },
    { word: "fix", phonetic: "/fɪks/", translation: "修理", example: "Can you fix my bike?" },
    { word: "build", phonetic: "/bɪld/", translation: "建造", example: "Let's build a sandcastle." },
    { word: "grow", phonetic: "/ɡrəʊ/", translation: "生长", example: "Plants grow in the spring." },
    { word: "fly", phonetic: "/flaɪ/", translation: "飞", example: "Birds can fly." },
    { word: "drive", phonetic: "/draɪv/", translation: "驾驶", example: "My dad can drive a car." },
    { word: "ride", phonetic: "/raɪd/", translation: "骑", example: "I can ride a bike." },

    // 其他常用词
    { word: "bag", phonetic: "/bæɡ/", translation: "包", example: "Put it in the bag." },
    { word: "box", phonetic: "/bɑːks/", translation: "盒子", example: "Open the box." },
    { word: "chair", phonetic: "/tʃer/", translation: "椅子", example: "Sit on the chair." },
    { word: "city", phonetic: "/ˈsɪti/", translation: "城市", example: "I live in a big city." },
    { word: "door", phonetic: "/dɔːr/", translation: "门", example: "Close the door." },
    { word: "happy", phonetic: "/ˈhæpi/", translation: "快乐的", example: "I am happy." },
    { word: "home", phonetic: "/həʊm/", translation: "家", example: "Let's go home." },
    { word: "house", phonetic: "/haʊs/", translation: "房子", example: "I live in a house." },
    { word: "money", phonetic: "/ˈmʌni/", translation: "钱", example: "I need more money." },
    { word: "music", phonetic: "/ˈmjuːzɪk/", translation: "音乐", example: "I love music." },
    { word: "name", phonetic: "/neɪm/", translation: "名字", example: "What's your name?" },
    { word: "phone", phonetic: "/fəʊn/", translation: "电话", example: "Call me on my phone." },
    { word: "picture", phonetic: "/ˈpɪktʃər/", translation: "图片", example: "Look at this picture." },
    { word: "time", phonetic: "/taɪm/", translation: "时间", example: "What time is it?" },
    { word: "town", phonetic: "/taʊn/", translation: "城镇", example: "I live in a small town." },
    { word: "window", phonetic: "/ˈwɪndəʊ/", translation: "窗户", example: "Open the window." },
    { word: "year", phonetic: "/jɪr/", translation: "年", example: "Happy New Year!" },
    { word: "zoo", phonetic: "/zuː/", translation: "动物园", example: "Let's visit the zoo." },

    // 地点与建筑
    { word: "restaurant", phonetic: "/ˈrestrɒnt/", translation: "餐厅", example: "Let's eat at a restaurant." },
    { word: "hospital", phonetic: "/ˈhɒspɪtl/", translation: "医院", example: "The hospital is big." },
    { word: "hotel", phonetic: "/həʊˈtel/", translation: "酒店", example: "We stayed at a nice hotel." },
    { word: "supermarket", phonetic: "/ˈsuːpərmɑːrkɪt/", translation: "超市", example: "Mom is at the supermarket." },
    { word: "store", phonetic: "/stɔːr/", translation: "商店", example: "The toy store is fun." },
    { word: "shop", phonetic: "/ʃɒp/", translation: "商店", example: "I like that shop." },
    { word: "bank", phonetic: "/bæŋk/", translation: "银行", example: "Dad went to the bank." },
    { word: "post office", phonetic: "/pəʊst ˈɒfɪs/", translation: "邮局", example: "Mail the letter at the post office." },
    { word: "station", phonetic: "/ˈsteɪʃn/", translation: "车站", example: "The train station is near." },
    { word: "airport", phonetic: "/ˈeəpɔːrt/", translation: "机场", example: "We're going to the airport." },
    { word: "museum", phonetic: "/mjuˈziːəm/", translation: "博物馆", example: "The museum has old things." },
    { word: "theater", phonetic: "/ˈθiːətər/", translation: "剧院", example: "We saw a play at the theater." },
    { word: "cinema", phonetic: "/ˈsɪnəmə/", translation: "电影院", example: "Let's go to the cinema." },
    { word: "park", phonetic: "/pɑːrk/", translation: "公园", example: "Children play in the park." },
    { word: "playground", phonetic: "/ˈpleɪɡraʊnd/", translation: "游乐场", example: "The playground has swings." },
    { word: "pool", phonetic: "/puːl/", translation: "游泳池", example: "Let's swim in the pool." },
    { word: "gym", phonetic: "/dʒɪm/", translation: "体育馆", example: "I exercise at the gym." },
    { word: "stadium", phonetic: "/ˈsteɪdiəm/", translation: "体育场", example: "The stadium is huge." },
    { word: "office", phonetic: "/ˈɒfɪs/", translation: "办公室", example: "Dad works in an office." },
    { word: "factory", phonetic: "/ˈfæktəri/", translation: "工厂", example: "They make cars in that factory." },
    { word: "farm", phonetic: "/fɑːrm/", translation: "农场", example: "Cows live on the farm." },
    { word: "church", phonetic: "/tʃɜːrtʃ/", translation: "教堂", example: "The church is old." },
    { word: "temple", phonetic: "/ˈtempl/", translation: "寺庙", example: "The temple is beautiful." },
    { word: "bridge", phonetic: "/brɪdʒ/", translation: "桥", example: "Cross the bridge." },
    { word: "building", phonetic: "/ˈbɪldɪŋ/", translation: "建筑物", example: "That building is tall." },
    { word: "tower", phonetic: "/ˈtaʊər/", translation: "塔", example: "The tower is very high." },
    { word: "castle", phonetic: "/ˈkɑːsl/", translation: "城堡", example: "The castle is in a story." },
    { word: "palace", phonetic: "/ˈpæləs/", translation: "宫殿", example: "The king lives in a palace." },

    // 交通工具
    { word: "car", phonetic: "/kɑːr/", translation: "汽车", example: "We go by car." },
    { word: "bus", phonetic: "/bʌs/", translation: "公共汽车", example: "I take the bus to school." },
    { word: "train", phonetic: "/treɪn/", translation: "火车", example: "The train is fast." },
    { word: "plane", phonetic: "/pleɪn/", translation: "飞机", example: "Planes fly in the sky." },
    { word: "ship", phonetic: "/ʃɪp/", translation: "轮船", example: "The ship is on the ocean." },
    { word: "boat", phonetic: "/bəʊt/", translation: "小船", example: "We row the boat." },
    { word: "subway", phonetic: "/ˈsʌbweɪ/", translation: "地铁", example: "The subway is underground." },
    { word: "taxi", phonetic: "/ˈtæksi/", translation: "出租车", example: "Take a taxi home." },
    { word: "truck", phonetic: "/trʌk/", translation: "卡车", example: "The truck carries goods." },
    { word: "motorcycle", phonetic: "/ˈməʊtərsaɪkl/", translation: "摩托车", example: "He rides a motorcycle." },
    { word: "bicycle", phonetic: "/ˈbaɪsɪkl/", translation: "自行车", example: "I ride my bicycle." },
    { word: "helicopter", phonetic: "/ˈhelɪkɒptər/", translation: "直升机", example: "The helicopter is loud." },
    { word: "rocket", phonetic: "/ˈrɒkɪt/", translation: "火箭", example: "The rocket goes to space." },

    // 时间相关
    { word: "today", phonetic: "/təˈdeɪ/", translation: "今天", example: "Today is Monday." },
    { word: "tomorrow", phonetic: "/təˈmɒrəʊ/", translation: "明天", example: "See you tomorrow." },
    { word: "yesterday", phonetic: "/ˈjestərdeɪ/", translation: "昨天", example: "Yesterday was fun." },
    { word: "week", phonetic: "/wiːk/", translation: "星期", example: "There are seven days in a week." },
    { word: "month", phonetic: "/mʌnθ/", translation: "月", example: "January is a month." },
    { word: "day", phonetic: "/deɪ/", translation: "天", example: "Have a nice day!" },
    { word: "night", phonetic: "/naɪt/", translation: "夜晚", example: "Good night!" },
    { word: "morning", phonetic: "/ˈmɔːrnɪŋ/", translation: "早上", example: "Good morning!" },
    { word: "afternoon", phonetic: "/ˌɑːftərˈnuːn/", translation: "下午", example: "See you this afternoon." },
    { word: "evening", phonetic: "/ˈiːvnɪŋ/", translation: "傍晚", example: "Good evening!" },
    { word: "hour", phonetic: "/ˈaʊər/", translation: "小时", example: "Wait one hour." },
    { word: "minute", phonetic: "/ˈmɪnɪt/", translation: "分钟", example: "Five minutes left." },
    { word: "second", phonetic: "/ˈsekənd/", translation: "秒", example: "Wait a second." },
    { word: "clock", phonetic: "/klɒk/", translation: "时钟", example: "Look at the clock." },
    { word: "watch", phonetic: "/wɒtʃ/", translation: "手表", example: "My watch shows 3 o'clock." },
    { word: "early", phonetic: "/ˈɜːrli/", translation: "早的", example: "I wake up early." },
    { word: "late", phonetic: "/leɪt/", translation: "晚的", example: "Don't be late." },
    { word: "now", phonetic: "/naʊ/", translation: "现在", example: "Do it now." },
    { word: "soon", phonetic: "/suːn/", translation: "很快", example: "I'll be back soon." },
    { word: "later", phonetic: "/ˈleɪtər/", translation: "稍后", example: "See you later." },
    { word: "always", phonetic: "/ˈɔːlweɪz/", translation: "总是", example: "I always brush my teeth." },
    { word: "never", phonetic: "/ˈnevər/", translation: "从不", example: "Never give up!" },
    { word: "sometimes", phonetic: "/ˈsʌmtaɪmz/", translation: "有时", example: "Sometimes I walk to school." },
    { word: "often", phonetic: "/ˈɒfn/", translation: "经常", example: "I often read books." },

    // 数字与数量
    { word: "number", phonetic: "/ˈnʌmbər/", translation: "数字", example: "What's your phone number?" },
    { word: "one", phonetic: "/wʌn/", translation: "一", example: "I have one apple." },
    { word: "two", phonetic: "/tuː/", translation: "二", example: "Two cats are playing." },
    { word: "three", phonetic: "/θriː/", translation: "三", example: "I see three birds." },
    { word: "four", phonetic: "/fɔːr/", translation: "四", example: "Four legs on a chair." },
    { word: "five", phonetic: "/faɪv/", translation: "五", example: "Give me five!" },
    { word: "six", phonetic: "/sɪks/", translation: "六", example: "Six eggs in the box." },
    { word: "seven", phonetic: "/ˈsevn/", translation: "七", example: "Seven days a week." },
    { word: "eight", phonetic: "/eɪt/", translation: "八", example: "Eight o'clock." },
    { word: "nine", phonetic: "/naɪn/", translation: "九", example: "Nine planets." },
    { word: "ten", phonetic: "/ten/", translation: "十", example: "I have ten fingers." },
    { word: "first", phonetic: "/fɜːrst/", translation: "第一", example: "I'm first in line." },
    { word: "second", phonetic: "/ˈsekənd/", translation: "第二", example: "You're second." },
    { word: "third", phonetic: "/θɜːrd/", translation: "第三", example: "Third place is good too." },
    { word: "many", phonetic: "/ˈmeni/", translation: "许多", example: "Many people are here." },
    { word: "much", phonetic: "/mʌtʃ/", translation: "许多", example: "How much is it?" },
    { word: "some", phonetic: "/sʌm/", translation: "一些", example: "Give me some water." },
    { word: "few", phonetic: "/fjuː/", translation: "少数", example: "A few friends came." },
    { word: "all", phonetic: "/ɔːl/", translation: "全部", example: "All students are here." },
    { word: "both", phonetic: "/bəʊθ/", translation: "两者都", example: "Both answers are correct." },
    { word: "every", phonetic: "/ˈevri/", translation: "每个", example: "Every day is special." },
    { word: "each", phonetic: "/iːtʃ/", translation: "每个", example: "Each child gets a gift." },
    { word: "half", phonetic: "/hɑːf/", translation: "一半", example: "Half of the cake." },
    { word: "whole", phonetic: "/həʊl/", translation: "全部的", example: "I ate the whole apple." },

    // 形容词
    { word: "big", phonetic: "/bɪɡ/", translation: "大的", example: "The elephant is big." },
    { word: "small", phonetic: "/smɔːl/", translation: "小的", example: "The mouse is small." },
    { word: "large", phonetic: "/lɑːrdʒ/", translation: "大的", example: "This is a large room." },
    { word: "little", phonetic: "/ˈlɪtl/", translation: "小的", example: "A little bird." },
    { word: "long", phonetic: "/lɒŋ/", translation: "长的", example: "The snake is long." },
    { word: "short", phonetic: "/ʃɔːrt/", translation: "短的", example: "My hair is short." },
    { word: "tall", phonetic: "/tɔːl/", translation: "高的", example: "He is tall." },
    { word: "high", phonetic: "/haɪ/", translation: "高的", example: "The mountain is high." },
    { word: "low", phonetic: "/ləʊ/", translation: "低的", example: "The wall is low." },
    { word: "wide", phonetic: "/waɪd/", translation: "宽的", example: "The road is wide." },
    { word: "narrow", phonetic: "/ˈnærəʊ/", translation: "窄的", example: "The path is narrow." },
    { word: "thick", phonetic: "/θɪk/", translation: "厚的", example: "A thick book." },
    { word: "thin", phonetic: "/θɪn/", translation: "薄的", example: "Thin paper." },
    { word: "heavy", phonetic: "/ˈhevi/", translation: "重的", example: "The box is heavy." },
    { word: "light", phonetic: "/laɪt/", translation: "轻的", example: "The feather is light." },
    { word: "fast", phonetic: "/fɑːst/", translation: "快的", example: "The car is fast." },
    { word: "slow", phonetic: "/sləʊ/", translation: "慢的", example: "The turtle is slow." },
    { word: "new", phonetic: "/njuː/", translation: "新的", example: "I have a new bike." },
    { word: "old", phonetic: "/əʊld/", translation: "旧的", example: "This is an old house." },
    { word: "young", phonetic: "/jʌŋ/", translation: "年轻的", example: "She is young." },
    { word: "good", phonetic: "/ɡʊd/", translation: "好的", example: "This is good food." },
    { word: "bad", phonetic: "/bæd/", translation: "坏的", example: "Bad weather today." },
    { word: "nice", phonetic: "/naɪs/", translation: "好的", example: "Have a nice day." },
    { word: "great", phonetic: "/ɡreɪt/", translation: "很棒的", example: "Great job!" },
    { word: "beautiful", phonetic: "/ˈbjuːtɪfl/", translation: "美丽的", example: "Beautiful flowers." },
    { word: "pretty", phonetic: "/ˈprɪti/", translation: "漂亮的", example: "A pretty dress." },
    { word: "ugly", phonetic: "/ˈʌɡli/", translation: "丑的", example: "An ugly monster." },
    { word: "clean", phonetic: "/kliːn/", translation: "干净的", example: "Clean hands." },
    { word: "dirty", phonetic: "/ˈdɜːrti/", translation: "脏的", example: "Dirty shoes." },
    { word: "wet", phonetic: "/wet/", translation: "湿的", example: "My clothes are wet." },
    { word: "dry", phonetic: "/draɪ/", translation: "干的", example: "The towel is dry." },
    { word: "full", phonetic: "/fʊl/", translation: "满的", example: "The glass is full." },
    { word: "empty", phonetic: "/ˈempti/", translation: "空的", example: "The box is empty." },
    { word: "busy", phonetic: "/ˈbɪzi/", translation: "忙的", example: "Mom is busy." },
    { word: "free", phonetic: "/friː/", translation: "空闲的", example: "I'm free today." },
    { word: "easy", phonetic: "/ˈiːzi/", translation: "容易的", example: "This is easy." },
    { word: "hard", phonetic: "/hɑːrd/", translation: "困难的", example: "Math is hard." },
    { word: "difficult", phonetic: "/ˈdɪfɪkəlt/", translation: "困难的", example: "A difficult question." },
    { word: "simple", phonetic: "/ˈsɪmpl/", translation: "简单的", example: "A simple answer." },
    { word: "strong", phonetic: "/strɒŋ/", translation: "强壮的", example: "He is strong." },
    { word: "weak", phonetic: "/wiːk/", translation: "虚弱的", example: "I feel weak." },
    { word: "quiet", phonetic: "/ˈkwaɪət/", translation: "安静的", example: "Be quiet!" },
    { word: "loud", phonetic: "/laʊd/", translation: "大声的", example: "Don't be loud." },
    { word: "soft", phonetic: "/sɒft/", translation: "柔软的", example: "A soft pillow." },
    { word: "hard", phonetic: "/hɑːrd/", translation: "坚硬的", example: "This rock is hard." },
    { word: "smooth", phonetic: "/smuːð/", translation: "光滑的", example: "Smooth skin." },
    { word: "rough", phonetic: "/rʌf/", translation: "粗糙的", example: "Rough surface." },
    { word: "sweet", phonetic: "/swiːt/", translation: "甜的", example: "Sweet candy." },
    { word: "sour", phonetic: "/ˈsaʊər/", translation: "酸的", example: "Sour lemon." },
    { word: "bitter", phonetic: "/ˈbɪtər/", translation: "苦的", example: "Bitter medicine." },
    { word: "salty", phonetic: "/ˈsɔːlti/", translation: "咸的", example: "Salty chips." },
    { word: "delicious", phonetic: "/dɪˈlɪʃəs/", translation: "美味的", example: "Delicious food." },
    { word: "terrible", phonetic: "/ˈterəbl/", translation: "糟糕的", example: "Terrible weather." },
    { word: "wonderful", phonetic: "/ˈwʌndərfl/", translation: "精彩的", example: "A wonderful day." },
    { word: "special", phonetic: "/ˈspeʃl/", translation: "特别的", example: "A special gift." },
    { word: "different", phonetic: "/ˈdɪfrənt/", translation: "不同的", example: "Different colors." },
    { word: "same", phonetic: "/seɪm/", translation: "相同的", example: "The same shirt." },
    { word: "right", phonetic: "/raɪt/", translation: "正确的", example: "The right answer." },
    { word: "wrong", phonetic: "/rɒŋ/", translation: "错误的", example: "That's wrong." },
    { word: "true", phonetic: "/truː/", translation: "真的", example: "Is it true?" },
    { word: "false", phonetic: "/fɔːls/", translation: "假的", example: "That's false." },
    { word: "real", phonetic: "/ˈriːəl/", translation: "真实的", example: "Is it real?" },
    { word: "safe", phonetic: "/seɪf/", translation: "安全的", example: "Stay safe." },
    { word: "dangerous", phonetic: "/ˈdeɪndʒərəs/", translation: "危险的", example: "Fire is dangerous." },
    { word: "favorite", phonetic: "/ˈfeɪvərɪt/", translation: "最喜欢的", example: "My favorite color is blue." },
    { word: "best", phonetic: "/best/", translation: "最好的", example: "You're the best!" },
    { word: "worst", phonetic: "/wɜːrst/", translation: "最坏的", example: "The worst day ever." },
    { word: "better", phonetic: "/ˈbetər/", translation: "更好的", example: "This is better." },
    { word: "worse", phonetic: "/wɜːrs/", translation: "更坏的", example: "It's getting worse." },
    { word: "ready", phonetic: "/ˈredi/", translation: "准备好的", example: "Are you ready?" },
    { word: "tired", phonetic: "/ˈtaɪərd/", translation: "累的", example: "I'm tired." },
    { word: "hungry", phonetic: "/ˈhʌŋɡri/", translation: "饿的", example: "I'm hungry." },
    { word: "thirsty", phonetic: "/ˈθɜːrsti/", translation: "渴的", example: "I'm thirsty." },
    { word: "sick", phonetic: "/sɪk/", translation: "生病的", example: "I feel sick." },
    { word: "healthy", phonetic: "/ˈhelθi/", translation: "健康的", example: "Eat healthy food." },
    { word: "angry", phonetic: "/ˈæŋɡri/", translation: "生气的", example: "Don't be angry." },
    { word: "sad", phonetic: "/sæd/", translation: "伤心的", example: "Why are you sad?" },
    { word: "glad", phonetic: "/ɡlæd/", translation: "高兴的", example: "I'm glad to see you." },
    { word: "excited", phonetic: "/ɪkˈsaɪtɪd/", translation: "兴奋的", example: "I'm excited!" },
    { word: "surprised", phonetic: "/sərˈpraɪzd/", translation: "惊讶的", example: "I'm surprised!" },
    { word: "scared", phonetic: "/skerd/", translation: "害怕的", example: "Don't be scared." },
    { word: "brave", phonetic: "/breɪv/", translation: "勇敢的", example: "Be brave!" },
    { word: "kind", phonetic: "/kaɪnd/", translation: "善良的", example: "She is kind." },
    { word: "friendly", phonetic: "/ˈfrendli/", translation: "友好的", example: "A friendly dog." },
    { word: "funny", phonetic: "/ˈfʌni/", translation: "有趣的", example: "A funny joke." },
    { word: "smart", phonetic: "/smɑːrt/", translation: "聪明的", example: "You're smart!" },
    { word: "clever", phonetic: "/ˈklevər/", translation: "聪明的", example: "A clever idea." },
    { word: "silly", phonetic: "/ˈsɪli/", translation: "愚蠢的", example: "Don't be silly." },
    { word: "careful", phonetic: "/ˈkerfəl/", translation: "小心的", example: "Be careful!" },
    { word: "lucky", phonetic: "/ˈlʌki/", translation: "幸运的", example: "You're lucky!" },

    // 更多动词
    { word: "agree", phonetic: "/əˈɡriː/", translation: "同意", example: "I agree with you." },
    { word: "allow", phonetic: "/əˈlaʊ/", translation: "允许", example: "Mom allows me to play." },
    { word: "answer", phonetic: "/ˈænsər/", translation: "回答", example: "Answer the question." },
    { word: "appear", phonetic: "/əˈpɪr/", translation: "出现", example: "A rainbow appears." },
    { word: "arrive", phonetic: "/əˈraɪv/", translation: "到达", example: "We arrive at school." },
    { word: "ask", phonetic: "/æsk/", translation: "问", example: "Ask a question." },
    { word: "attack", phonetic: "/əˈtæk/", translation: "攻击", example: "Don't attack others." },
    { word: "avoid", phonetic: "/əˈvɔɪd/", translation: "避免", example: "Avoid bad habits." },
    { word: "become", phonetic: "/bɪˈkʌm/", translation: "成为", example: "I want to become a teacher." },
    { word: "begin", phonetic: "/bɪˈɡɪn/", translation: "开始", example: "Let's begin!" },
    { word: "believe", phonetic: "/bɪˈliːv/", translation: "相信", example: "I believe you." },
    { word: "belong", phonetic: "/bɪˈlɔːŋ/", translation: "属于", example: "This belongs to me." },
    { word: "borrow", phonetic: "/ˈbɑːroʊ/", translation: "借", example: "Can I borrow your pen?" },
    { word: "breathe", phonetic: "/briːð/", translation: "呼吸", example: "Breathe slowly." },
    { word: "burn", phonetic: "/bɜːrn/", translation: "燃烧", example: "Don't burn yourself." },
    { word: "care", phonetic: "/ker/", translation: "关心", example: "I care about you." },
    { word: "carry", phonetic: "/ˈkæri/", translation: "携带", example: "Carry your bag." },
    { word: "catch", phonetic: "/kætʃ/", translation: "抓住", example: "Catch the ball!" },
    { word: "cause", phonetic: "/kɔːz/", translation: "引起", example: "Don't cause trouble." },
    { word: "celebrate", phonetic: "/ˈselɪbreɪt/", translation: "庆祝", example: "Let's celebrate!" },
    { word: "change", phonetic: "/tʃeɪndʒ/", translation: "改变", example: "Things change." },
    { word: "check", phonetic: "/tʃek/", translation: "检查", example: "Check your homework." },
    { word: "choose", phonetic: "/tʃuːz/", translation: "选择", example: "Choose a color." },
    { word: "clean", phonetic: "/kliːn/", translation: "打扫", example: "Clean your room." },
    { word: "climb", phonetic: "/klaɪm/", translation: "爬", example: "Climb the tree." },
    { word: "close", phonetic: "/kloʊz/", translation: "关闭", example: "Close the door." },
    { word: "collect", phonetic: "/kəˈlekt/", translation: "收集", example: "I collect stamps." },
    { word: "compare", phonetic: "/kəmˈper/", translation: "比较", example: "Compare the sizes." },
    { word: "complete", phonetic: "/kəmˈpliːt/", translation: "完成", example: "Complete your work." },
    { word: "continue", phonetic: "/kənˈtɪnjuː/", translation: "继续", example: "Continue reading." },
    { word: "control", phonetic: "/kənˈtroʊl/", translation: "控制", example: "Control your anger." },
    { word: "copy", phonetic: "/ˈkɑːpi/", translation: "复制", example: "Copy this word." },
    { word: "cost", phonetic: "/kɔːst/", translation: "花费", example: "How much does it cost?" },
    { word: "count", phonetic: "/kaʊnt/", translation: "数", example: "Count to ten." },
    { word: "cover", phonetic: "/ˈkʌvər/", translation: "覆盖", example: "Cover your mouth." },
    { word: "cross", phonetic: "/krɔːs/", translation: "穿过", example: "Cross the street." },
    { word: "cry", phonetic: "/kraɪ/", translation: "哭", example: "Don't cry." },
    { word: "cut", phonetic: "/kʌt/", translation: "切", example: "Cut the paper." },
    { word: "dance", phonetic: "/dæns/", translation: "跳舞", example: "I love to dance." },
    { word: "decide", phonetic: "/dɪˈsaɪd/", translation: "决定", example: "You decide." },
    { word: "describe", phonetic: "/dɪˈskraɪb/", translation: "描述", example: "Describe the picture." },
    { word: "develop", phonetic: "/dɪˈveləp/", translation: "发展", example: "Develop good habits." },
    { word: "die", phonetic: "/daɪ/", translation: "死", example: "Plants die without water." },
    { word: "discover", phonetic: "/dɪˈskʌvər/", translation: "发现", example: "Discover new things." },
    { word: "discuss", phonetic: "/dɪˈskʌs/", translation: "讨论", example: "Let's discuss it." },
    { word: "draw", phonetic: "/drɔː/", translation: "画", example: "Draw a picture." },
    { word: "dream", phonetic: "/driːm/", translation: "梦想", example: "I dream of flying." },
    { word: "drop", phonetic: "/drɑːp/", translation: "掉落", example: "Don't drop it!" },
    { word: "earn", phonetic: "/ɜːrn/", translation: "赚", example: "Earn some money." },
    { word: "enjoy", phonetic: "/ɪnˈdʒɔɪ/", translation: "享受", example: "Enjoy your meal!" },
    { word: "enter", phonetic: "/ˈentər/", translation: "进入", example: "Enter the room." },
    { word: "escape", phonetic: "/ɪˈskeɪp/", translation: "逃跑", example: "The bird escaped." },
    { word: "examine", phonetic: "/ɪɡˈzæmɪn/", translation: "检查", example: "Examine the map." },
    { word: "exist", phonetic: "/ɪɡˈzɪst/", translation: "存在", example: "Dinosaurs existed long ago." },
    { word: "expect", phonetic: "/ɪkˈspekt/", translation: "期待", example: "I expect good news." },
    { word: "explain", phonetic: "/ɪkˈspleɪn/", translation: "解释", example: "Please explain." },
    { word: "express", phonetic: "/ɪkˈspres/", translation: "表达", example: "Express your feelings." },
    { word: "fail", phonetic: "/feɪl/", translation: "失败", example: "Don't be afraid to fail." },
    { word: "fall", phonetic: "/fɔːl/", translation: "落下", example: "Leaves fall in autumn." },
    { word: "feed", phonetic: "/fiːd/", translation: "喂", example: "Feed the cat." },
    { word: "fight", phonetic: "/faɪt/", translation: "打架", example: "Don't fight!" },
    { word: "fill", phonetic: "/fɪl/", translation: "填满", example: "Fill the cup." },
    { word: "finish", phonetic: "/ˈfɪnɪʃ/", translation: "完成", example: "Finish your homework." },
    { word: "fix", phonetic: "/fɪks/", translation: "修理", example: "Fix the bike." },
    { word: "fly", phonetic: "/flaɪ/", translation: "飞", example: "Birds can fly." },
    { word: "follow", phonetic: "/ˈfɑːloʊ/", translation: "跟随", example: "Follow me!" },
    { word: "forget", phonetic: "/fərˈɡet/", translation: "忘记", example: "Don't forget!" },
    { word: "forgive", phonetic: "/fərˈɡɪv/", translation: "原谅", example: "Please forgive me." },
    { word: "freeze", phonetic: "/friːz/", translation: "冻结", example: "Water freezes at 0°C." },
    { word: "grow", phonetic: "/ɡroʊ/", translation: "成长", example: "Plants grow fast." },
    { word: "guess", phonetic: "/ɡes/", translation: "猜", example: "Guess my age." },
    { word: "happen", phonetic: "/ˈhæpən/", translation: "发生", example: "What happened?" },
    { word: "hate", phonetic: "/heɪt/", translation: "讨厌", example: "I hate rain." },
    { word: "hear", phonetic: "/hɪr/", translation: "听", example: "I can hear music." },
    { word: "hide", phonetic: "/haɪd/", translation: "藏", example: "Hide and seek!" },
    { word: "hit", phonetic: "/hɪt/", translation: "打", example: "Hit the ball." },
    { word: "hold", phonetic: "/hoʊld/", translation: "拿着", example: "Hold my hand." },
    { word: "hope", phonetic: "/hoʊp/", translation: "希望", example: "I hope so." },
    { word: "hunt", phonetic: "/hʌnt/", translation: "打猎", example: "Lions hunt at night." },
    { word: "hurry", phonetic: "/ˈhɜːri/", translation: "匆忙", example: "Hurry up!" },
    { word: "hurt", phonetic: "/hɜːrt/", translation: "伤害", example: "Don't hurt others." },
    { word: "imagine", phonetic: "/ɪˈmædʒɪn/", translation: "想象", example: "Imagine a world..." },
    { word: "improve", phonetic: "/ɪmˈpruːv/", translation: "改进", example: "Improve your English." },
    { word: "include", phonetic: "/ɪnˈkluːd/", translation: "包括", example: "Include everyone." },
    { word: "increase", phonetic: "/ɪnˈkriːs/", translation: "增加", example: "Increase the volume." },
    { word: "invent", phonetic: "/ɪnˈvent/", translation: "发明", example: "Who invented this?" },
    { word: "invite", phonetic: "/ɪnˈvaɪt/", translation: "邀请", example: "I invite you to my party." },
    { word: "join", phonetic: "/dʒɔɪn/", translation: "加入", example: "Join our team!" },
    { word: "joke", phonetic: "/dʒoʊk/", translation: "开玩笑", example: "I'm just joking!" },
    { word: "jump", phonetic: "/dʒʌmp/", translation: "跳", example: "Jump high!" },
    { word: "keep", phonetic: "/kiːp/", translation: "保持", example: "Keep quiet." },
    { word: "kick", phonetic: "/kɪk/", translation: "踢", example: "Kick the ball." },
    { word: "kill", phonetic: "/kɪl/", translation: "杀", example: "Don't kill insects." },
    { word: "knock", phonetic: "/nɑːk/", translation: "敲", example: "Knock on the door." },
    { word: "land", phonetic: "/lænd/", translation: "着陆", example: "The plane will land soon." },
    { word: "last", phonetic: "/læst/", translation: "持续", example: "The movie lasts two hours." },
    { word: "laugh", phonetic: "/læf/", translation: "笑", example: "She makes me laugh." },
    { word: "lead", phonetic: "/liːd/", translation: "领导", example: "Lead the way." },
    { word: "lean", phonetic: "/liːn/", translation: "倾斜", example: "Don't lean back." },
    { word: "learn", phonetic: "/lɜːrn/", translation: "学习", example: "Learn new words." },
    { word: "leave", phonetic: "/liːv/", translation: "离开", example: "Don't leave me!" },
    { word: "lend", phonetic: "/lend/", translation: "借出", example: "Lend me your book." },
    { word: "lie", phonetic: "/laɪ/", translation: "躺", example: "Lie down and rest." },
    { word: "lift", phonetic: "/lɪft/", translation: "举起", example: "Lift the box." },
    { word: "listen", phonetic: "/ˈlɪsn/", translation: "听", example: "Listen carefully!" },
    { word: "live", phonetic: "/lɪv/", translation: "居住", example: "I live in Beijing." },
    { word: "lock", phonetic: "/lɑːk/", translation: "锁", example: "Lock the door." },
    { word: "look", phonetic: "/lʊk/", translation: "看", example: "Look at me!" },
    { word: "lose", phonetic: "/luːz/", translation: "失去", example: "Don't lose your keys." },
    { word: "love", phonetic: "/lʌv/", translation: "爱", example: "I love you!" },
    { word: "manage", phonetic: "/ˈmænɪdʒ/", translation: "管理", example: "I can manage it." },
    { word: "mark", phonetic: "/mɑːrk/", translation: "标记", example: "Mark your answer." },
    { word: "matter", phonetic: "/ˈmætər/", translation: "重要", example: "It doesn't matter." },
    { word: "mean", phonetic: "/miːn/", translation: "意味", example: "What does it mean?" },
    { word: "measure", phonetic: "/ˈmeʒər/", translation: "测量", example: "Measure the length." },
    { word: "meet", phonetic: "/miːt/", translation: "见面", example: "Nice to meet you!" },
    { word: "melt", phonetic: "/melt/", translation: "融化", example: "Ice melts in the sun." },
    { word: "mention", phonetic: "/ˈmenʃn/", translation: "提到", example: "Don't mention it." },
    { word: "miss", phonetic: "/mɪs/", translation: "想念", example: "I miss you." },
    { word: "mix", phonetic: "/mɪks/", translation: "混合", example: "Mix the colors." },
    { word: "move", phonetic: "/muːv/", translation: "移动", example: "Move your chair." },
    { word: "need", phonetic: "/niːd/", translation: "需要", example: "I need help." },
    { word: "notice", phonetic: "/ˈnoʊtɪs/", translation: "注意", example: "Did you notice?" },
    { word: "obey", phonetic: "/oʊˈbeɪ/", translation: "服从", example: "Obey the rules." },
    { word: "offer", phonetic: "/ˈɔːfər/", translation: "提供", example: "I offer you help." },
    { word: "open", phonetic: "/ˈoʊpən/", translation: "打开", example: "Open the window." },
    { word: "order", phonetic: "/ˈɔːrdər/", translation: "命令", example: "Order food." },
    { word: "own", phonetic: "/oʊn/", translation: "拥有", example: "I own a bike." },
    { word: "pack", phonetic: "/pæk/", translation: "打包", example: "Pack your bag." },
    { word: "paint", phonetic: "/peɪnt/", translation: "画", example: "Paint a picture." },
    { word: "pass", phonetic: "/pæs/", translation: "通过", example: "Pass the exam." },
    { word: "pay", phonetic: "/peɪ/", translation: "支付", example: "Pay the bill." },
    { word: "pick", phonetic: "/pɪk/", translation: "挑选", example: "Pick a card." },
    { word: "plan", phonetic: "/plæn/", translation: "计划", example: "Plan your day." },
    { word: "plant", phonetic: "/plænt/", translation: "种植", example: "Plant a tree." },
    { word: "point", phonetic: "/pɔɪnt/", translation: "指", example: "Point to the board." },
    { word: "pour", phonetic: "/pɔːr/", translation: "倒", example: "Pour the water." },
    { word: "practice", phonetic: "/ˈpræktɪs/", translation: "练习", example: "Practice every day." },
    { word: "pray", phonetic: "/preɪ/", translation: "祈祷", example: "Pray for peace." },
    { word: "prefer", phonetic: "/prɪˈfɜːr/", translation: "更喜欢", example: "I prefer tea." },
    { word: "prepare", phonetic: "/prɪˈper/", translation: "准备", example: "Prepare for the test." },
    { word: "press", phonetic: "/pres/", translation: "按", example: "Press the button." },
    { word: "prevent", phonetic: "/prɪˈvent/", translation: "阻止", example: "Prevent accidents." },
    { word: "print", phonetic: "/prɪnt/", translation: "打印", example: "Print the document." },
    { word: "produce", phonetic: "/prəˈduːs/", translation: "生产", example: "Farmers produce food." },
    { word: "promise", phonetic: "/ˈprɑːmɪs/", translation: "承诺", example: "I promise!" },
    { word: "protect", phonetic: "/prəˈtekt/", translation: "保护", example: "Protect the environment." },
    { word: "provide", phonetic: "/prəˈvaɪd/", translation: "提供", example: "Provide clean water." },
    { word: "pull", phonetic: "/pʊl/", translation: "拉", example: "Pull the rope." },
    { word: "push", phonetic: "/pʊʃ/", translation: "推", example: "Push the door." },
    { word: "put", phonetic: "/pʊt/", translation: "放", example: "Put it here." },
    { word: "raise", phonetic: "/reɪz/", translation: "举起", example: "Raise your hand." },
    { word: "reach", phonetic: "/riːtʃ/", translation: "到达", example: "Reach for the stars." },
    { word: "read", phonetic: "/riːd/", translation: "读", example: "Read a book." },
    { word: "realize", phonetic: "/ˈriːəlaɪz/", translation: "意识到", example: "I realize my mistake." },
    { word: "receive", phonetic: "/rɪˈsiːv/", translation: "收到", example: "Receive a gift." },
    { word: "recognize", phonetic: "/ˈrekəɡnaɪz/", translation: "认出", example: "I recognize you." },
    { word: "record", phonetic: "/rɪˈkɔːrd/", translation: "记录", example: "Record your voice." },
    { word: "reduce", phonetic: "/rɪˈduːs/", translation: "减少", example: "Reduce waste." },
    { word: "refuse", phonetic: "/rɪˈfjuːz/", translation: "拒绝", example: "I refuse to go." },
    { word: "regret", phonetic: "/rɪˈɡret/", translation: "后悔", example: "I regret it." },
    { word: "relax", phonetic: "/rɪˈlæks/", translation: "放松", example: "Relax and enjoy." },
    { word: "remain", phonetic: "/rɪˈmeɪn/", translation: "保持", example: "Remain calm." },
    { word: "remember", phonetic: "/rɪˈmembər/", translation: "记住", example: "Remember me!" },
    { word: "remind", phonetic: "/rɪˈmaɪnd/", translation: "提醒", example: "Remind me later." },
    { word: "remove", phonetic: "/rɪˈmuːv/", translation: "移除", example: "Remove your shoes." },
    { word: "repair", phonetic: "/rɪˈper/", translation: "修理", example: "Repair the computer." },
    { word: "repeat", phonetic: "/rɪˈpiːt/", translation: "重复", example: "Repeat after me." },
    { word: "replace", phonetic: "/rɪˈpleɪs/", translation: "替换", example: "Replace the battery." },
    { word: "reply", phonetic: "/rɪˈplaɪ/", translation: "回复", example: "Please reply soon." },
    { word: "report", phonetic: "/rɪˈpɔːrt/", translation: "报告", example: "Report the news." },
    { word: "represent", phonetic: "/ˌreprɪˈzent/", translation: "代表", example: "I represent our class." },
    { word: "require", phonetic: "/rɪˈkwaɪər/", translation: "需要", example: "This requires effort." },
    { word: "respect", phonetic: "/rɪˈspekt/", translation: "尊重", example: "Respect others." },
    { word: "rest", phonetic: "/rest/", translation: "休息", example: "Take a rest." },
    { word: "return", phonetic: "/rɪˈtɜːrn/", translation: "返回", example: "Return home." },
    { word: "ride", phonetic: "/raɪd/", translation: "骑", example: "Ride a bike." },
    { word: "ring", phonetic: "/rɪŋ/", translation: "响", example: "The phone is ringing." },
    { word: "rise", phonetic: "/raɪz/", translation: "升起", example: "The sun rises." },
    { word: "roll", phonetic: "/roʊl/", translation: "滚", example: "Roll the ball." },
    { word: "rub", phonetic: "/rʌb/", translation: "擦", example: "Rub your hands." },
    { word: "rule", phonetic: "/ruːl/", translation: "统治", example: "Follow the rules." },
    { word: "run", phonetic: "/rʌn/", translation: "跑", example: "Run fast!" },
    { word: "rush", phonetic: "/rʌʃ/", translation: "冲", example: "Don't rush!" },
    { word: "sail", phonetic: "/seɪl/", translation: "航行", example: "Sail the boat." },
    { word: "save", phonetic: "/seɪv/", translation: "拯救", example: "Save money." },
    { word: "say", phonetic: "/seɪ/", translation: "说", example: "Say hello!" },
    { word: "search", phonetic: "/sɜːrtʃ/", translation: "搜索", example: "Search for information." },
    { word: "see", phonetic: "/siː/", translation: "看见", example: "I see you!" },
    { word: "seem", phonetic: "/siːm/", translation: "似乎", example: "You seem happy." },
    { word: "sell", phonetic: "/sel/", translation: "卖", example: "Sell fruits." },
    { word: "send", phonetic: "/send/", translation: "发送", example: "Send a message." },
    { word: "serve", phonetic: "/sɜːrv/", translation: "服务", example: "Serve dinner." },
    { word: "set", phonetic: "/set/", translation: "设置", example: "Set the alarm." },
    { word: "settle", phonetic: "/ˈsetl/", translation: "安定", example: "Settle down." },
    { word: "shake", phonetic: "/ʃeɪk/", translation: "摇", example: "Shake hands." },
    { word: "share", phonetic: "/ʃer/", translation: "分享", example: "Share your toys." },
    { word: "shine", phonetic: "/ʃaɪn/", translation: "照耀", example: "The sun shines." },
    { word: "shoot", phonetic: "/ʃuːt/", translation: "射击", example: "Shoot the ball." },
    { word: "shop", phonetic: "/ʃɑːp/", translation: "购物", example: "Let's go shopping!" },
    { word: "shout", phonetic: "/ʃaʊt/", translation: "喊", example: "Don't shout!" },
    { word: "show", phonetic: "/ʃoʊ/", translation: "展示", example: "Show me your book." },
    { word: "shut", phonetic: "/ʃʌt/", translation: "关闭", example: "Shut the window." },
    { word: "sign", phonetic: "/saɪn/", translation: "签名", example: "Sign your name." },
    { word: "sing", phonetic: "/sɪŋ/", translation: "唱歌", example: "Sing a song!" },
    { word: "sit", phonetic: "/sɪt/", translation: "坐", example: "Sit down please." },
    { word: "sleep", phonetic: "/sliːp/", translation: "睡觉", example: "Sleep well!" },
    { word: "slide", phonetic: "/slaɪd/", translation: "滑", example: "Slide down!" },
    { word: "smell", phonetic: "/smel/", translation: "闻", example: "Smell the flowers." },
    { word: "smile", phonetic: "/smaɪl/", translation: "微笑", example: "Smile please!" },
    { word: "snow", phonetic: "/snoʊ/", translation: "下雪", example: "It's snowing!" },
    { word: "solve", phonetic: "/sɑːlv/", translation: "解决", example: "Solve the problem." },
    { word: "sound", phonetic: "/saʊnd/", translation: "听起来", example: "That sounds good!" },
    { word: "speak", phonetic: "/spiːk/", translation: "说话", example: "Speak loudly!" },
    { word: "spell", phonetic: "/spel/", translation: "拼写", example: "Spell your name." },
    { word: "spend", phonetic: "/spend/", translation: "花费", example: "Spend wisely." },
    { word: "spill", phonetic: "/spɪl/", translation: "溅出", example: "Don't spill the milk!" },
    { word: "stand", phonetic: "/stænd/", translation: "站", example: "Stand up!" },
    { word: "start", phonetic: "/stɑːrt/", translation: "开始", example: "Start now!" },
    { word: "stay", phonetic: "/steɪ/", translation: "停留", example: "Stay here!" },
    { word: "steal", phonetic: "/stiːl/", translation: "偷", example: "Don't steal!" },
    { word: "step", phonetic: "/step/", translation: "踏", example: "Step carefully!" },
    { word: "stick", phonetic: "/stɪk/", translation: "粘", example: "Stick the paper." },
    { word: "stop", phonetic: "/stɑːp/", translation: "停止", example: "Stop running!" },
    { word: "store", phonetic: "/stɔːr/", translation: "储存", example: "Store your toys." },
    { word: "study", phonetic: "/ˈstʌdi/", translation: "学习", example: "Study hard!" },
    { word: "succeed", phonetic: "/səkˈsiːd/", translation: "成功", example: "You will succeed!" },
    { word: "suffer", phonetic: "/ˈsʌfər/", translation: "受苦", example: "Nobody should suffer." },
    { word: "suggest", phonetic: "/səɡˈdʒest/", translation: "建议", example: "I suggest we go." },
    { word: "suit", phonetic: "/suːt/", translation: "适合", example: "This suits you." },
    { word: "support", phonetic: "/səˈpɔːrt/", translation: "支持", example: "I support you!" },
    { word: "suppose", phonetic: "/səˈpoʊz/", translation: "假设", example: "I suppose so." },
    { word: "surprise", phonetic: "/sərˈpraɪz/", translation: "惊讶", example: "What a surprise!" },
    { word: "swim", phonetic: "/swɪm/", translation: "游泳", example: "I can swim!" },
    { word: "take", phonetic: "/teɪk/", translation: "拿", example: "Take this!" },
    { word: "talk", phonetic: "/tɔːk/", translation: "说话", example: "Let's talk!" },
    { word: "taste", phonetic: "/teɪst/", translation: "品尝", example: "Taste this!" },
    { word: "teach", phonetic: "/tiːtʃ/", translation: "教", example: "Teach me please!" },
    { word: "tear", phonetic: "/ter/", translation: "撕", example: "Don't tear the paper!" },
    { word: "tell", phonetic: "/tel/", translation: "告诉", example: "Tell me!" },
    { word: "test", phonetic: "/test/", translation: "测试", example: "Test your skills." },
    { word: "thank", phonetic: "/θæŋk/", translation: "感谢", example: "Thank you!" },
    { word: "think", phonetic: "/θɪŋk/", translation: "思考", example: "Think carefully!" },
    { word: "throw", phonetic: "/θroʊ/", translation: "扔", example: "Throw the ball!" },
    { word: "touch", phonetic: "/tʌtʃ/", translation: "触摸", example: "Touch the screen." },
    { word: "train", phonetic: "/treɪn/", translation: "训练", example: "Train every day." },
    { word: "translate", phonetic: "/trænsˈleɪt/", translation: "翻译", example: "Translate this word." },
    { word: "travel", phonetic: "/ˈtrævl/", translation: "旅行", example: "I love to travel!" },
    { word: "treat", phonetic: "/triːt/", translation: "对待", example: "Treat others kindly." },
    { word: "trust", phonetic: "/trʌst/", translation: "信任", example: "Trust me!" },
    { word: "try", phonetic: "/traɪ/", translation: "尝试", example: "Try your best!" },
    { word: "turn", phonetic: "/tɜːrn/", translation: "转", example: "Turn left!" },
    { word: "understand", phonetic: "/ˌʌndərˈstænd/", translation: "理解", example: "I understand!" },
    { word: "use", phonetic: "/juːz/", translation: "使用", example: "Use your brain!" },
    { word: "visit", phonetic: "/ˈvɪzɪt/", translation: "访问", example: "Visit me!" },
    { word: "wait", phonetic: "/weɪt/", translation: "等待", example: "Wait for me!" },
    { word: "wake", phonetic: "/weɪk/", translation: "醒来", example: "Wake up!" },
    { word: "walk", phonetic: "/wɔːk/", translation: "走", example: "Walk slowly!" },
    { word: "want", phonetic: "/wɑːnt/", translation: "想要", example: "I want ice cream!" },
    { word: "warn", phonetic: "/wɔːrn/", translation: "警告", example: "I warned you!" },
    { word: "wash", phonetic: "/wɑːʃ/", translation: "洗", example: "Wash your hands!" },
    { word: "watch", phonetic: "/wɑːtʃ/", translation: "观看", example: "Watch TV!" },
    { word: "wave", phonetic: "/weɪv/", translation: "挥手", example: "Wave goodbye!" },
    { word: "wear", phonetic: "/wer/", translation: "穿", example: "Wear a jacket!" },
    { word: "weigh", phonetic: "/weɪ/", translation: "称重", example: "Weigh the apples." },
    { word: "welcome", phonetic: "/ˈwelkəm/", translation: "欢迎", example: "Welcome home!" },
    { word: "whisper", phonetic: "/ˈwɪspər/", translation: "低语", example: "Whisper quietly." },
    { word: "win", phonetic: "/wɪn/", translation: "赢", example: "We can win!" },
    { word: "wish", phonetic: "/wɪʃ/", translation: "希望", example: "I wish!" },
    { word: "wonder", phonetic: "/ˈwʌndər/", translation: "想知道", example: "I wonder why." },
    { word: "work", phonetic: "/wɜːrk/", translation: "工作", example: "Work hard!" },
    { word: "worry", phonetic: "/ˈwɜːri/", translation: "担心", example: "Don't worry!" },
    { word: "write", phonetic: "/raɪt/", translation: "写", example: "Write your name!" },
    { word: "yell", phonetic: "/jel/", translation: "喊叫", example: "Don't yell!" },

    // 更多名词
    { word: "accident", phonetic: "/ˈæksɪdənt/", translation: "事故", example: "There was an accident." },
    { word: "address", phonetic: "/əˈdres/", translation: "地址", example: "What's your address?" },
    { word: "adventure", phonetic: "/ədˈventʃər/", translation: "冒险", example: "A great adventure!" },
    { word: "advice", phonetic: "/ədˈvaɪs/", translation: "建议", example: "Good advice!" },
    { word: "age", phonetic: "/eɪdʒ/", translation: "年龄", example: "What's your age?" },
    { word: "air", phonetic: "/er/", translation: "空气", example: "Fresh air!" },
    { word: "airport", phonetic: "/ˈerpɔːrt/", translation: "机场", example: "Go to the airport." },
    { word: "alarm", phonetic: "/əˈlɑːrm/", translation: "警报", example: "The alarm rang." },
    { word: "animal", phonetic: "/ˈænɪml/", translation: "动物", example: "I love animals!" },
    { word: "announcement", phonetic: "/əˈnaʊnsmənt/", translation: "公告", example: "An important announcement." },
    { word: "apartment", phonetic: "/əˈpɑːrtmənt/", translation: "公寓", example: "I live in an apartment." },
    { word: "area", phonetic: "/ˈeriə/", translation: "区域", example: "This area is safe." },
    { word: "army", phonetic: "/ˈɑːrmi/", translation: "军队", example: "Join the army." },
    { word: "art", phonetic: "/ɑːrt/", translation: "艺术", example: "I love art!" },
    { word: "attention", phonetic: "/əˈtenʃn/", translation: "注意", example: "Pay attention!" },
    { word: "author", phonetic: "/ˈɔːθər/", translation: "作者", example: "The book's author." },
    { word: "bakery", phonetic: "/ˈbeɪkəri/", translation: "面包店", example: "Buy bread at the bakery." },
    { word: "balance", phonetic: "/ˈbæləns/", translation: "平衡", example: "Keep your balance!" },
    { word: "balloon", phonetic: "/bəˈluːn/", translation: "气球", example: "A red balloon!" },
    { word: "band", phonetic: "/bænd/", translation: "乐队", example: "Join the band!" },
    { word: "bank", phonetic: "/bæŋk/", translation: "银行", example: "Go to the bank." },
    { word: "basket", phonetic: "/ˈbæskɪt/", translation: "篮子", example: "A fruit basket." },
    { word: "bathroom", phonetic: "/ˈbæθruːm/", translation: "浴室", example: "Use the bathroom." },
    { word: "battery", phonetic: "/ˈbætəri/", translation: "电池", example: "Change the battery." },
    { word: "beach", phonetic: "/biːtʃ/", translation: "海滩", example: "Play at the beach!" },
    { word: "beard", phonetic: "/bɪrd/", translation: "胡须", example: "He has a beard." },
    { word: "beauty", phonetic: "/ˈbjuːti/", translation: "美丽", example: "Natural beauty!" },
    { word: "bell", phonetic: "/bel/", translation: "铃", example: "The bell rings." },
    { word: "belt", phonetic: "/belt/", translation: "腰带", example: "Wear a belt." },
    { word: "bench", phonetic: "/bentʃ/", translation: "长凳", example: "Sit on the bench." },
    { word: "bicycle", phonetic: "/ˈbaɪsɪkl/", translation: "自行车", example: "Ride a bicycle!" },
    { word: "bill", phonetic: "/bɪl/", translation: "账单", example: "Pay the bill." },
    { word: "bird", phonetic: "/bɜːrd/", translation: "鸟", example: "A beautiful bird!" },
    { word: "birthday", phonetic: "/ˈbɜːrθdeɪ/", translation: "生日", example: "Happy birthday!" },
    { word: "blanket", phonetic: "/ˈblæŋkɪt/", translation: "毯子", example: "A warm blanket." },
    { word: "block", phonetic: "/blɑːk/", translation: "街区", example: "Walk one block." },
    { word: "blood", phonetic: "/blʌd/", translation: "血", example: "Red blood." },
    { word: "board", phonetic: "/bɔːrd/", translation: "板", example: "Write on the board." },
    { word: "boat", phonetic: "/boʊt/", translation: "船", example: "Sail a boat!" },
    { word: "bone", phonetic: "/boʊn/", translation: "骨头", example: "A dog bone." },
    { word: "bottle", phonetic: "/ˈbɑːtl/", translation: "瓶子", example: "A water bottle." },
    { word: "bottom", phonetic: "/ˈbɑːtəm/", translation: "底部", example: "At the bottom." },
    { word: "bowl", phonetic: "/boʊl/", translation: "碗", example: "A rice bowl." },
    { word: "box", phonetic: "/bɑːks/", translation: "盒子", example: "A gift box!" },
    { word: "brain", phonetic: "/breɪn/", translation: "大脑", example: "Use your brain!" },
    { word: "branch", phonetic: "/bræntʃ/", translation: "树枝", example: "A tree branch." },
    { word: "bread", phonetic: "/bred/", translation: "面包", example: "Fresh bread!" },
    { word: "bridge", phonetic: "/brɪdʒ/", translation: "桥", example: "Cross the bridge." },
    { word: "brush", phonetic: "/brʌʃ/", translation: "刷子", example: "A tooth brush." },
    { word: "building", phonetic: "/ˈbɪldɪŋ/", translation: "建筑物", example: "A tall building!" },
    { word: "bush", phonetic: "/bʊʃ/", translation: "灌木", example: "Behind the bush." },
    { word: "business", phonetic: "/ˈbɪznəs/", translation: "生意", example: "Start a business." },
    { word: "button", phonetic: "/ˈbʌtn/", translation: "按钮", example: "Press the button." },
    { word: "cafe", phonetic: "/kæˈfeɪ/", translation: "咖啡馆", example: "Meet at the cafe." },
    { word: "cage", phonetic: "/keɪdʒ/", translation: "笼子", example: "A bird cage." },
    { word: "calendar", phonetic: "/ˈkælɪndər/", translation: "日历", example: "Check the calendar." }
];

// PET词库 - 剑桥英语初级证书进阶词汇
const PET_WORDS = [
    { word: "achieve", phonetic: "/əˈtʃiːv/", translation: "实现，达到", example: "She achieved her goal through hard work." },
    { word: "adventure", phonetic: "/ədˈventʃər/", translation: "冒险", example: "They went on an exciting adventure." },
    { word: "beautiful", phonetic: "/ˈbjuːtɪfl/", translation: "美丽的", example: "The sunset is beautiful." },
    { word: "celebrate", phonetic: "/ˈselɪbreɪt/", translation: "庆祝", example: "Let's celebrate your birthday!" },
    { word: "challenge", phonetic: "/ˈtʃælɪndʒ/", translation: "挑战", example: "This is a big challenge for me." },
    { word: "describe", phonetic: "/dɪˈskraɪb/", translation: "描述", example: "Can you describe what you saw?" },
    { word: "discover", phonetic: "/dɪˈskʌvər/", translation: "发现", example: "Scientists discover new things every day." },
    { word: "environment", phonetic: "/ɪnˈvaɪrənmənt/", translation: "环境", example: "We should protect the environment." },
    { word: "experience", phonetic: "/ɪkˈspɪəriəns/", translation: "经验，经历", example: "Travel gives you valuable experience." },
    { word: "future", phonetic: "/ˈfjuːtʃər/", translation: "未来", example: "What do you want to be in the future?" },
    { word: "government", phonetic: "/ˈɡʌvənmənt/", translation: "政府", example: "The government makes important decisions." },
    { word: "imagine", phonetic: "/ɪˈmædʒɪn/", translation: "想象", example: "Can you imagine living on Mars?" },
    { word: "important", phonetic: "/ɪmˈpɔːrtnt/", translation: "重要的", example: "Education is very important." },
    { word: "journey", phonetic: "/ˈdʒɜːrni/", translation: "旅程", example: "Life is a long journey." },
    { word: "knowledge", phonetic: "/ˈnɑːlɪdʒ/", translation: "知识", example: "Reading gives you knowledge." },
    { word: "necessary", phonetic: "/ˈnesəseri/", translation: "必要的", example: "Sleep is necessary for health." },
    { word: "opportunity", phonetic: "/ˌɑːpərˈtuːnəti/", translation: "机会", example: "This is a great opportunity for you." },
    { word: "popular", phonetic: "/ˈpɑːpjələr/", translation: "受欢迎的", example: "Basketball is a popular sport." },
    { word: "prepare", phonetic: "/prɪˈper/", translation: "准备", example: "We need to prepare for the exam." },
    { word: "question", phonetic: "/ˈkwestʃən/", translation: "问题", example: "Do you have any questions?" },
    { word: "remember", phonetic: "/rɪˈmembər/", translation: "记得", example: "I remember our first meeting." },
    { word: "serious", phonetic: "/ˈsɪriəs/", translation: "严肃的，严重的", example: "This is a serious problem." },
    { word: "success", phonetic: "/səkˈses/", translation: "成功", example: "Hard work leads to success." },
    { word: "temperature", phonetic: "/ˈtemprətʃər/", translation: "温度", example: "The temperature is rising today." },
    { word: "understand", phonetic: "/ˌʌndərˈstænd/", translation: "理解", example: "Do you understand the question?" },
    { word: "vacation", phonetic: "/veɪˈkeɪʃn/", translation: "假期", example: "Where will you go for vacation?" },
    { word: "wonderful", phonetic: "/ˈwʌndərfl/", translation: "精彩的", example: "We had a wonderful time!" }
];

// 全局变量
let currentLevel = 'KET';
let currentWords = [...KET_WORDS];
let currentIndex = 0;
let learnedWords = new Set();
let wrongCount = {}; // 记录每个单词的错误次数
let wrongWordsList = new Set(); // 错题本（错误次数>=2的单词）
let isTestMode = false;
let isReviewMode = false; // 是否在复习错题模式
let coins = 0; // 金币总数
let streak = 0; // 连续答对次数
let userAnswer = ''; // 用户当前输入的答案

// 元素引用
const wordEl = document.getElementById('word');
const phoneticEl = document.getElementById('phonetic');
const translationEl = document.getElementById('translation');
const exampleEl = document.getElementById('example');
const cardBack = document.getElementById('card-back');
const showBtn = document.getElementById('show-btn');
const playBtn = document.getElementById('play-btn');
const forgotBtn = document.getElementById('forgot-btn');
const knowBtn = document.getElementById('know-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const learnedCountEl = document.getElementById('learned-count');
const totalCountEl = document.getElementById('total-count');
const levelBtns = document.querySelectorAll('.level-btn');
const modeBtns = document.querySelectorAll('.mode-btn');
const wordCard = document.getElementById('word-card');
const testContainer = document.getElementById('test-container');
const testWordEl = document.getElementById('test-word-display');
const testPlayBtn = document.getElementById('test-play-btn');
const submitBtn = document.getElementById('submit-btn');
const testResultEl = document.getElementById('test-result');
const progressFill = document.getElementById('progress-fill');
const progressPercentage = document.getElementById('progress-percentage');
const wrongCountBadge = document.getElementById('wrong-count-badge');
const reviewModeBtn = document.getElementById('review-mode');
const coinCountEl = document.getElementById('coin-count');
const coinPopup = document.getElementById('coin-popup');
const coinText = document.getElementById('coin-text');
const letterBlanks = document.getElementById('letter-blanks');
const mobileInput = document.getElementById('mobile-input');

// 初始化
function init() {
    loadProgress(); // 加载保存的进度
    updateStats();
    showWord();
    setupEventListeners();
}

// 设置事件监听器
function setupEventListeners() {
    showBtn.addEventListener('click', showTranslation);
    playBtn.addEventListener('click', () => playPronunciation(currentWords[currentIndex].word));
    testPlayBtn.addEventListener('click', () => playPronunciation(currentWords[currentIndex].word));
    forgotBtn.addEventListener('click', markAsForgot);
    knowBtn.addEventListener('click', markAsKnown);
    prevBtn.addEventListener('click', showPreviousWord);
    nextBtn.addEventListener('click', showNextWord);

    levelBtns.forEach(btn => {
        btn.addEventListener('click', () => switchLevel(btn.dataset.level));
    });

    document.getElementById('reset-btn').addEventListener('click', resetProgress);

    modeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.id === 'learn-mode') {
                switchToLearnMode();
            } else if (btn.id === 'test-mode') {
                switchToTestMode();
            } else if (btn.id === 'review-mode') {
                switchToReviewMode();
            }
        });
    });

    submitBtn.addEventListener('click', checkSpelling);

    // 监听键盘输入（桌面）
    document.addEventListener('keydown', handleKeyboardInput);

    // 监听移动设备输入框
    mobileInput.addEventListener('input', handleMobileInput);

    // 监听回车键（移动设备）
    mobileInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            checkSpelling();
        }
    });

    // 点击字母框区域时聚焦输入框
    letterBlanks.addEventListener('click', () => {
        if (isTestMode && !submitBtn.disabled) {
            mobileInput.focus();
        }
    });

    // 点击测试容器时聚焦输入框（移动设备）
    testContainer.addEventListener('click', (e) => {
        if (isTestMode && !submitBtn.disabled && e.target !== submitBtn) {
            mobileInput.focus();
        }
    });
}

// 显示单词
function showWord() {
    const currentWord = currentWords[currentIndex];
    wordEl.textContent = currentWord.word;
    phoneticEl.textContent = currentWord.phonetic;
    translationEl.textContent = currentWord.translation;
    exampleEl.textContent = currentWord.example;

    cardBack.classList.add('hidden');
    showBtn.style.display = 'block';
}

// 显示翻译
function showTranslation() {
    cardBack.classList.remove('hidden');
    showBtn.style.display = 'none';
}

// 发音功能
function playPronunciation(word) {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US';
    utterance.rate = 0.8;
    speechSynthesis.speak(utterance);
}

// 标记为不认识
function markAsForgot() {
    learnedWords.delete(currentWords[currentIndex].word);
    updateStats();
    showNextWord();
}

// 标记为认识
function markAsKnown() {
    learnedWords.add(currentWords[currentIndex].word);
    updateStats();
    showNextWord();
}

// 上一个单词
function showPreviousWord() {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : currentWords.length - 1;
    if (isTestMode) {
        showTest();
    } else {
        showWord();
    }
}

// 下一个单词
function showNextWord() {
    currentIndex = (currentIndex + 1) % currentWords.length;
    if (isTestMode) {
        showTest();
    } else {
        showWord();
    }
}

// 更新统计
function updateStats() {
    learnedCountEl.textContent = learnedWords.size;
    totalCountEl.textContent = currentWords.length;

    // 更新进度条
    const percentage = currentWords.length > 0
        ? Math.round((learnedWords.size / currentWords.length) * 100)
        : 0;
    progressPercentage.textContent = `${percentage}%`;
    progressFill.style.width = `${percentage}%`;

    // 更新错题本数量
    wrongCountBadge.textContent = wrongWordsList.size;

    // 更新金币数量
    coinCountEl.textContent = coins;

    // 保存进度到本地存储
    saveProgress();
}

// 保存进度到本地存储
function saveProgress() {
    // 获取现有的进度数据
    const existingProgress = localStorage.getItem('vocabularyProgress');
    let progress = existingProgress ? JSON.parse(existingProgress) : {};

    // 确保各个对象存在
    if (!progress.learnedWordsByLevel) {
        progress.learnedWordsByLevel = {};
    }
    if (!progress.wrongCountByLevel) {
        progress.wrongCountByLevel = {};
    }
    if (!progress.wrongWordsListByLevel) {
        progress.wrongWordsListByLevel = {};
    }

    // 保存当前词库的数据
    progress.learnedWordsByLevel[currentLevel] = Array.from(learnedWords);
    progress.wrongCountByLevel[currentLevel] = wrongCount;
    progress.wrongWordsListByLevel[currentLevel] = Array.from(wrongWordsList);

    // 保存其他全局数据
    progress.currentLevel = currentLevel;
    progress.coins = coins;
    progress.streak = streak;

    localStorage.setItem('vocabularyProgress', JSON.stringify(progress));
}

// 从本地存储加载进度
function loadProgress() {
    const savedProgress = localStorage.getItem('vocabularyProgress');
    if (savedProgress) {
        try {
            const progress = JSON.parse(savedProgress);
            currentLevel = progress.currentLevel || 'KET';

            // 加载当前词库的已学习单词
            if (progress.learnedWordsByLevel && progress.learnedWordsByLevel[currentLevel]) {
                learnedWords = new Set(progress.learnedWordsByLevel[currentLevel]);
            } else if (progress.learnedWords) {
                // 兼容旧版本数据格式
                learnedWords = new Set(progress.learnedWords || []);
            } else {
                learnedWords = new Set();
            }

            // 加载当前词库的错题本数据
            if (progress.wrongCountByLevel && progress.wrongCountByLevel[currentLevel]) {
                wrongCount = progress.wrongCountByLevel[currentLevel];
            } else if (progress.wrongCount) {
                // 兼容旧版本数据格式
                wrongCount = progress.wrongCount || {};
            } else {
                wrongCount = {};
            }

            if (progress.wrongWordsListByLevel && progress.wrongWordsListByLevel[currentLevel]) {
                wrongWordsList = new Set(progress.wrongWordsListByLevel[currentLevel]);
            } else if (progress.wrongWordsList) {
                // 兼容旧版本数据格式
                wrongWordsList = new Set(progress.wrongWordsList || []);
            } else {
                wrongWordsList = new Set();
            }

            coins = progress.coins || 0;
            streak = progress.streak || 0;

            // 更新词库
            currentWords = currentLevel === 'KET' ? [...KET_WORDS] : [...PET_WORDS];

            // 更新词库按钮状态
            levelBtns.forEach(btn => {
                btn.classList.toggle('active', btn.dataset.level === currentLevel);
            });
        } catch (e) {
            console.error('加载进度失败:', e);
        }
    }
}

// 重置所有进度
function resetProgress() {
    if (confirm('确定要重置所有学习进度吗？这将清除所有已学单词、金币和错题本。')) {
        localStorage.removeItem('vocabularyProgress');
        learnedWords.clear();
        wrongCount = {};
        wrongWordsList.clear();
        coins = 0;
        streak = 0;
        updateStats();
        alert('进度已重置！');
    }
}

// 显示金币奖励
function showCoinReward(amount, bonusText = '') {
    const displayText = bonusText
        ? `+${amount} 金币\n${bonusText}`
        : `+${amount} 金币`;

    coinText.textContent = displayText;
    coinPopup.classList.remove('hidden');

    setTimeout(() => {
        coinPopup.classList.add('hidden');
    }, 1500);
}

// 计算金币奖励
function calculateCoinReward() {
    let reward = 1; // 基础奖励1金币
    let bonusText = '';

    // 连续答对奖励
    if (streak === 3) {
        reward += 1;
        bonusText = '🎉 连续3题奖励!';
    } else if (streak === 5) {
        reward += 3;
        bonusText = '🎊 连续5题奖励!';
    } else if (streak === 10) {
        reward += 5;
        bonusText = '🏆 连续10题奖励!';
    } else if (streak > 10 && streak % 10 === 0) {
        reward += 5;
        bonusText = `🌟 连续${streak}题奖励!`;
    }

    return { reward, bonusText };
}

// 切换词库
function switchLevel(level) {
    // 先保存当前词库的进度
    saveProgress();

    currentLevel = level;
    currentWords = level === 'KET' ? [...KET_WORDS] : [...PET_WORDS];
    currentIndex = 0;

    // 加载新词库的数据
    const savedProgress = localStorage.getItem('vocabularyProgress');
    if (savedProgress) {
        try {
            const progress = JSON.parse(savedProgress);

            // 加载已学习单词
            if (progress.learnedWordsByLevel && progress.learnedWordsByLevel[level]) {
                learnedWords = new Set(progress.learnedWordsByLevel[level]);
            } else {
                learnedWords = new Set();
            }

            // 加载错题本数据
            if (progress.wrongCountByLevel && progress.wrongCountByLevel[level]) {
                wrongCount = progress.wrongCountByLevel[level];
            } else {
                wrongCount = {};
            }

            if (progress.wrongWordsListByLevel && progress.wrongWordsListByLevel[level]) {
                wrongWordsList = new Set(progress.wrongWordsListByLevel[level]);
            } else {
                wrongWordsList = new Set();
            }
        } catch (e) {
            learnedWords = new Set();
            wrongCount = {};
            wrongWordsList = new Set();
        }
    } else {
        learnedWords = new Set();
        wrongCount = {};
        wrongWordsList = new Set();
    }

    levelBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.level === level);
    });

    updateStats();
    if (isTestMode) {
        showTest();
    } else {
        showWord();
    }
}

// 切换到学习模式
function switchToLearnMode() {
    isTestMode = false;
    isReviewMode = false;
    modeBtns[0].classList.add('active');
    modeBtns[1].classList.remove('active');
    reviewModeBtn.classList.remove('active');
    wordCard.classList.remove('hidden');
    testContainer.classList.add('hidden');

    // 恢复原始词库
    currentWords = currentLevel === 'KET' ? [...KET_WORDS] : [...PET_WORDS];
    currentIndex = 0;
    updateStats();
    showWord();
}

// 切换到测试模式
function switchToTestMode() {
    isTestMode = true;
    isReviewMode = false;
    modeBtns[1].classList.add('active');
    modeBtns[0].classList.remove('active');
    reviewModeBtn.classList.remove('active');
    wordCard.classList.add('hidden');
    testContainer.classList.remove('hidden');

    // 恢复原始词库
    currentWords = currentLevel === 'KET' ? [...KET_WORDS] : [...PET_WORDS];
    currentIndex = 0;
    updateStats();
    findNextUntested();
}

// 切换到错题本模式
function switchToReviewMode() {
    if (wrongWordsList.size === 0) {
        alert('错题本是空的！继续学习吧！');
        return;
    }

    isTestMode = true;
    isReviewMode = true;
    reviewModeBtn.classList.add('active');
    modeBtns[0].classList.remove('active');
    modeBtns[1].classList.remove('active');
    wordCard.classList.add('hidden');
    testContainer.classList.remove('hidden');

    // 只显示错题本中的单词
    const allWords = currentLevel === 'KET' ? KET_WORDS : PET_WORDS;
    currentWords = allWords.filter(w => wrongWordsList.has(w.word));
    currentIndex = 0;
    updateStats();
    showTest();
}

// 查找下一个未掌握的单词
function findNextUntested() {
    if (isReviewMode) {
        // 错题本模式，显示所有错题
        showTest();
        return;
    }

    let attempts = 0;
    const maxAttempts = currentWords.length;

    // 跳过已掌握的单词
    while (attempts < maxAttempts) {
        const currentWord = currentWords[currentIndex];
        if (!learnedWords.has(currentWord.word)) {
            showTest();
            return;
        }
        currentIndex = (currentIndex + 1) % currentWords.length;
        attempts++;
    }

    // 所有单词都已掌握
    testResultEl.textContent = '🎉 恭喜！你已经掌握所有单词了！';
    testResultEl.className = 'test-result correct';
    testResultEl.classList.remove('hidden');
    spellingInput.disabled = true;
    submitBtn.disabled = true;
}

// 显示测试
function showTest() {
    testResultEl.classList.add('hidden');
    userAnswer = '';
    submitBtn.disabled = false;

    const currentWord = currentWords[currentIndex];
    // 显示中文翻译，让小朋友输入英文
    testWordEl.textContent = currentWord.translation;

    // 生成字母横线
    createLetterBlanks(currentWord.word);

    // 清空并聚焦输入框（支持移动设备）
    mobileInput.value = '';
    mobileInput.disabled = false;

    // iOS 设备需要用户交互触发，延迟聚焦
    setTimeout(() => {
        mobileInput.focus();
    }, 300);
}

// 创建字母横线
function createLetterBlanks(word) {
    letterBlanks.innerHTML = '';

    for (let i = 0; i < word.length; i++) {
        const blank = document.createElement('div');

        if (word[i] === ' ') {
            // 如果是空格，创建一个小的间隔
            blank.className = 'letter-blank space';
        } else {
            blank.className = 'letter-blank';
            blank.dataset.index = i;
        }

        letterBlanks.appendChild(blank);
    }

    // 激活第一个横线
    updateLetterBlanks();
}

// 处理键盘输入
function handleKeyboardInput(e) {
    // 只在测试模式且未禁用时处理
    if (!isTestMode || submitBtn.disabled) {
        return;
    }

    const currentWord = currentWords[currentIndex];
    const targetLength = currentWord.word.replace(/\s/g, '').length; // 不计空格的长度

    // 处理字母输入
    if (e.key.length === 1 && /[a-zA-Z]/.test(e.key)) {
        e.preventDefault();
        if (userAnswer.replace(/\s/g, '').length < targetLength) {
            // 检查当前位置是否应该是空格
            const actualPosition = userAnswer.length;
            if (currentWord.word[actualPosition] === ' ') {
                userAnswer += ' ';
            }
            userAnswer += e.key.toLowerCase();
            updateLetterBlanks();
        }
    }
    // 处理退格键
    else if (e.key === 'Backspace') {
        e.preventDefault();
        if (userAnswer.length > 0) {
            userAnswer = userAnswer.slice(0, -1);
            // 如果删除后的最后一个字符是空格，再删一次
            if (userAnswer.length > 0 && userAnswer[userAnswer.length - 1] === ' ') {
                userAnswer = userAnswer.slice(0, -1);
            }
            updateLetterBlanks();
        }
    }
    // 处理回车键
    else if (e.key === 'Enter') {
        e.preventDefault();
        checkSpelling();
    }
}

// 处理移动设备输入
function handleMobileInput(e) {
    // 只在测试模式且未禁用时处理
    if (!isTestMode || submitBtn.disabled) {
        return;
    }

    const currentWord = currentWords[currentIndex];
    const inputValue = mobileInput.value.toLowerCase().replace(/[^a-z\s]/g, '');

    // 只保留字母和必要的空格
    let filteredInput = '';
    let inputIndex = 0;

    for (let i = 0; i < currentWord.word.length && inputIndex < inputValue.length; i++) {
        if (currentWord.word[i] === ' ') {
            filteredInput += ' ';
        } else {
            // 跳过输入中多余的空格
            while (inputIndex < inputValue.length && inputValue[inputIndex] === ' ') {
                inputIndex++;
            }
            if (inputIndex < inputValue.length) {
                filteredInput += inputValue[inputIndex];
                inputIndex++;
            }
        }
    }

    userAnswer = filteredInput;

    // 更新输入框显示（保持光标位置）
    const cursorPosition = mobileInput.selectionStart;
    mobileInput.value = filteredInput;

    // 恢复光标位置
    const newPosition = Math.min(cursorPosition, filteredInput.length);
    mobileInput.setSelectionRange(newPosition, newPosition);

    updateLetterBlanks();
}

// 更新字母横线显示
function updateLetterBlanks() {
    const blanks = letterBlanks.querySelectorAll('.letter-blank:not(.space)');
    let answerIndex = 0;

    blanks.forEach((blank, index) => {
        // 跳过答案中的空格
        while (answerIndex < userAnswer.length && userAnswer[answerIndex] === ' ') {
            answerIndex++;
        }

        if (answerIndex < userAnswer.length) {
            blank.textContent = userAnswer[answerIndex].toUpperCase();
            blank.classList.add('filled');
            blank.classList.remove('active');
            answerIndex++;
        } else if (answerIndex === userAnswer.length && index === blanks.length - 1) {
            // 最后一个未填充的位置
            blank.textContent = '';
            blank.classList.remove('filled');
            blank.classList.add('active');
        } else {
            blank.textContent = '';
            blank.classList.remove('filled');
            if (answerIndex === userAnswer.length) {
                blank.classList.add('active');
                answerIndex++; // 只激活一个
            } else {
                blank.classList.remove('active');
            }
        }
    });
}

// 检查拼写
function checkSpelling() {
    const currentWord = currentWords[currentIndex];
    const userInput = userAnswer.trim().toLowerCase();
    const correctAnswer = currentWord.word.toLowerCase();

    if (!userInput) {
        alert('请先输入答案！');
        return;
    }

    // 禁用提交按钮
    submitBtn.disabled = true;

    if (userInput === correctAnswer) {
        // 答对了
        streak++; // 增加连续答对次数
        learnedWords.add(currentWord.word);

        // 计算金币奖励
        const { reward, bonusText } = calculateCoinReward();
        coins += reward;

        // 显示金币奖励动画
        showCoinReward(reward, bonusText);

        testResultEl.textContent = `🎉 太棒了！拼写正确！`;
        testResultEl.className = 'test-result correct';

        // 如果在错题本中，拼对了就从错题本移除
        if (wrongWordsList.has(currentWord.word)) {
            wrongWordsList.delete(currentWord.word);
            wrongCount[currentWord.word] = 0;
        }
    } else {
        // 答错了
        streak = 0; // 重置连续答对次数

        // 记录错误次数
        if (!wrongCount[currentWord.word]) {
            wrongCount[currentWord.word] = 0;
        }
        wrongCount[currentWord.word]++;

        // 错误次数>=2，加入错题本
        if (wrongCount[currentWord.word] >= 2) {
            wrongWordsList.add(currentWord.word);
            testResultEl.textContent = `❌ 拼写错误。正确答案是：${currentWord.word}（已加入错题本）`;
        } else {
            testResultEl.textContent = `❌ 拼写错误。正确答案是：${currentWord.word}`;
        }
        testResultEl.className = 'test-result wrong';

        // 拼错了就从已掌握列表中移除
        learnedWords.delete(currentWord.word);
    }

    testResultEl.classList.remove('hidden');
    updateStats();

    // 2秒后自动下一题
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % currentWords.length;
        if (isTestMode) {
            findNextUntested();
        } else {
            showWord();
        }
    }, 2000);
}

// 启动应用
init();
