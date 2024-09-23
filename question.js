const gkQuestions = [
    {
        question: "1. What color is the sky on a clear day?",
        options: { a: "Green", b: "Blue", c: "Red", d: "Yellow" },
        correctAnswer: "b"
    },
    {
        question: "2. What do plants need to grow?",
        options: { a: "Rocks", b: "Water", c: "Fire", d: "Ice" },
        correctAnswer: "b"
    },
    {
        question: "3. What is the largest animal on Earth?",
        options: { a: "Elephant", b: "Shark", c: "Blue Whale", d: "Giraffe" },
        correctAnswer: "c"
    },
    {
        question: "4. What do bees make?",
        options: { a: "Milk", b: "Honey", c: "Cheese", d: "Butter" },
        correctAnswer: "b"
    },
    {
        question: "5. What shape is the Earth?",
        options: { a: "Square", b: "Triangle", c: "Round", d: "Rectangle" },
        correctAnswer: "c"
    },
    {
        question: "6. How many legs does a spider have?",
        options: { a: "4", b: "6", c: "8", d: "10" },
        correctAnswer: "c"
    },
    {
        question: "7. What do we breathe in to live?",
        options: { a: "Oxygen", b: "Water", c: "Fire", d: "Smoke" },
        correctAnswer: "a"
    },
    {
        question: "8. Which part of the plant is usually underground?",
        options: { a: "Stem", b: "Flower", c: "Root", d: "Leaf" },
        correctAnswer: "c"
    },
    {
        question: "9. What do cows give us?",
        options: { a: "Wool", b: "Milk", c: "Honey", d: "Eggs" },
        correctAnswer: "b"
    },
    {
        question: "10. Which planet do we live on?",
        options: { a: "Mars", b: "Venus", c: "Earth", d: "Jupiter" },
        correctAnswer: "c"
    },
    {
        question: "11. What is the color of a banana?",
        options: { a: "Red", b: "Blue", c: "Yellow", d: "Green" },
        correctAnswer: "c"
    },
    {
        question: "12. What is the largest continent on Earth?",
        options: { a: "Africa", b: "Asia", c: "Europe", d: "Australia" },
        correctAnswer: "b"
    },
    {
        question: "13. What fruit is red and has seeds on the outside?",
        options: { a: "Apple", b: "Banana", c: "Strawberry", d: "Orange" },
        correctAnswer: "c"
    },
    {
        question: "14. What makes a rainbow?",
        options: { a: "Sunlight and water", b: "Moonlight", c: "Clouds", d: "Wind" },
        correctAnswer: "a"
    },
    {
        question: "15. What do birds use to fly?",
        options: { a: "Legs", b: "Wings", c: "Fins", d: "Claws" },
        correctAnswer: "b"
    },
    {
        question: "16. What animal is known for its long neck?",
        options: { a: "Elephant", b: "Lion", c: "Giraffe", d: "Monkey" },
        correctAnswer: "c"
    },
    {
        question: "17. What is a baby cat called?",
        options: { a: "Cub", b: "Kitten", c: "Puppy", d: "Foal" },
        correctAnswer: "b"
    },
    {
        question: "18. Which gas do plants need to grow?",
        options: { a: "Oxygen", b: "Carbon Dioxide", c: "Nitrogen", d: "Helium" },
        correctAnswer: "b"
    },
    {
        question: "19. What does the sun give us?",
        options: { a: "Snow", b: "Wind", c: "Heat and Light", d: "Rain" },
        correctAnswer: "c"
    },
    {
        question: "20. Which animal is known as the king of the jungle?",
        options: { a: "Tiger", b: "Lion", c: "Elephant", d: "Leopard" },
        correctAnswer: "b"
    },
    {
        question: "21. How many fingers do we have on one hand?",
        options: { a: "4", b: "6", c: "5", d: "3" },
        correctAnswer: "c"
    },
    {
        question: "22. What is the color of grass?",
        options: { a: "Red", b: "Blue", c: "Green", d: "Yellow" },
        correctAnswer: "c"
    },
    {
        question: "23. What animal barks?",
        options: { a: "Cat", b: "Dog", c: "Horse", d: "Cow" },
        correctAnswer: "b"
    },
    {
        question: "24. What season comes after winter?",
        options: { a: "Summer", b: "Autumn", c: "Spring", d: "Fall" },
        correctAnswer: "c"
    },
    {
        question: "25. Which planet is closest to the sun?",
        options: { a: "Earth", b: "Mars", c: "Mercury", d: "Venus" },
        correctAnswer: "c"
    },
    {
        question: "26. What animal lives in a hive?",
        options: { a: "Ant", b: "Bee", c: "Butterfly", d: "Bird" },
        correctAnswer: "b"
    },
    {
        question: "27. What is the opposite of day?",
        options: { a: "Morning", b: "Afternoon", c: "Night", d: "Evening" },
        correctAnswer: "c"
    },
    {
        question: "28. Which animal has a trunk?",
        options: { a: "Tiger", b: "Elephant", c: "Horse", d: "Monkey" },
        correctAnswer: "b"
    },
    {
        question: "29. What is the color of an apple?",
        options: { a: "Red", b: "Yellow", c: "Both", d: "Green" },
        correctAnswer: "c"
    },
    {
        question: "30. What do birds lay?",
        options: { a: "Nests", b: "Eggs", c: "Feathers", d: "Branches" },
        correctAnswer: "b"
    },
    {
        question: "31. How many seasons are there in a year?",
        options: { a: "2", b: "3", c: "4", d: "5" },
        correctAnswer: "c"
    },
    {
        question: "32. What do ducks say?",
        options: { a: "Meow", b: "Woof", c: "Quack", d: "Moo" },
        correctAnswer: "c"
    },
    {
        question: "33. What shape is a football?",
        options: { a: "Square", b: "Oval", c: "Triangle", d: "Circle" },
        correctAnswer: "b"
    },
    {
        question: "34. What does a caterpillar become?",
        options: { a: "Bee", b: "Butterfly", c: "Bird", d: "Snake" },
        correctAnswer: "b"
    },
    {
        question: "35. What is the color of the sun?",
        options: { a: "Blue", b: "Green", c: "Yellow", d: "Red" },
        correctAnswer: "c"
    },
    {
        question: "36. What grows on trees?",
        options: { a: "Leaves", b: "Fish", c: "Hats", d: "Rocks" },
        correctAnswer: "a"
    },
    {
        question: "37. What do fish use to swim?",
        options: { a: "Feet", b: "Wings", c: "Fins", d: "Hands" },
        correctAnswer: "c"
    },
    {
        question: "38. What does a bird build?",
        options: { a: "Dam", b: "Nest", c: "House", d: "Burrow" },
        correctAnswer: "b"
    },
    {
        question: "39. Which fruit is known for keeping doctors away?",
        options: { a: "Banana", b: "Apple", c: "Strawberry", d: "Pineapple" },
        correctAnswer: "b"
    },
    {
        question: "40. What do we drink to stay hydrated?",
        options: { a: "Juice", b: "Soda", c: "Water", d: "Coffee" },
        correctAnswer: "c"
    },
    {
        question: "41. What fruit is known for being yellow and curved?",
        options: { a: "Apple", b: "Orange", c: "Banana", d: "Lemon" },
        correctAnswer: "c"
    },
    {
        question: "42. What do chickens lay?",
        options: { a: "Eggs", b: "Nuts", c: "Rocks", d: "Fish" },
        correctAnswer: "a"
    },
    {
        question: "43. Which planet is known as the Red Planet?",
        options: { a: "Mars", b: "Jupiter", c: "Saturn", d: "Venus" },
        correctAnswer: "a"
    },
    {
        question: "44. What do we use to write on paper?",
        options: { a: "Spoon", b: "Pencil", c: "Knife", d: "Ruler" },
        correctAnswer: "b"
    },
    {
        question: "45. What is the largest ocean on Earth?",
        options: { a: "Atlantic", b: "Indian", c: "Pacific", d: "Arctic" },
        correctAnswer: "c"
    },
    {
        question: "46. What do cows eat?",
        options: { a: "Grass", b: "Meat", c: "Fish", d: "Leaves" },
        correctAnswer: "a"
    },
    {
        question: "47. How many planets are in our solar system?",
        options: { a: "7", b: "8", c: "9", d: "10" },
        correctAnswer: "b"
    },
    {
        question: "48. What color are the stars we see in the night sky?",
        options: { a: "Blue", b: "Yellow", c: "White", d: "Red" },
        correctAnswer: "c"
    },
    {
        question: "49. What does the clock tell us?",
        options: { a: "Temperature", b: "Speed", c: "Time", d: "Distance" },
        correctAnswer: "c"
    },
    {
        question: "50. What animal is known for having black and white stripes?",
        options: { a: "Lion", b: "Tiger", c: "Zebra", d: "Elephant" },
        correctAnswer: "c"
    }
];

const biharGkQuestions = [
    {
        question: "1. बिहार की राजधानी कौन सी है?",
        options: { a: "पटना", b: "मुजफ्फरपुर", c: "गया", d: "दरभंगा" },
        correctAnswer: "a"
    },
    {
        question: "2. महात्मा गांधी सेतु किस नदी पर बना है?",
        options: { a: "कावेरी", b: "नर्मदा", c: "गंगा", d: "गोदावरी" },
        correctAnswer: "c"
    },
    {
        question: "3. बिहार दिवस कब मनाया जाता है?",
        options: { a: "12 मार्च", b: "22 मार्च", c: "5 जून", d: "15 अगस्त" },
        correctAnswer: "b"
    },
    {
        question: "4. बिहार में कौन सा प्रमुख महोत्सव मनाया जाता है?",
        options: { a: "होली", b: "दीपावली", c: "छठ", d: "क्रिसमस" },
        correctAnswer: "c"
    },
    {
        question: "5. बिहार का सबसे बड़ा विश्वविद्यालय कौन सा है?",
        options: { a: "पटना विश्वविद्यालय", b: "मगध विश्वविद्यालय", c: "नालंदा विश्वविद्यालय", d: "दरभंगा विश्वविद्यालय" },
        correctAnswer: "a"
    },
    {
        question: "6. बिहार के प्रथम मुख्यमंत्री कौन थे?",
        options: { a: "श्रीकृष्ण सिंह", b: "जगन्नाथ मिश्रा", c: "लालू प्रसाद यादव", d: "नीतीश कुमार" },
        correctAnswer: "a"
    },
    {
        question: "7. बोधगया किस धर्म का प्रमुख तीर्थस्थल है?",
        options: { a: "हिंदू", b: "सिख", c: "जैन", d: "बौद्ध" },
        correctAnswer: "d"
    },
    {
        question: "8. बिहार का कौन सा शहर ‘नालंदा विश्वविद्यालय’ के लिए प्रसिद्ध है?",
        options: { a: "राजगीर", b: "गया", c: "नालंदा", d: "भागलपुर" },
        correctAnswer: "c"
    },
    {
        question: "9. चंपारण सत्याग्रह का संबंध किससे है?",
        options: { a: "जलवायु परिवर्तन", b: "स्वतंत्रता संग्राम", c: "नदियों की सफाई", d: "कृषि सुधार" },
        correctAnswer: "b"
    },
    {
        question: "10. बिहार में सबसे अधिक बोली जाने वाली भाषा कौन सी है?",
        options: { a: "भोजपुरी", b: "मैथिली", c: "हिंदी", d: "मगही" },
        correctAnswer: "a"
    },
    {
        question: "11. बिहार का कौन सा जिला सिल्क उत्पादन के लिए प्रसिद्ध है?",
        options: { a: "मुजफ्फरपुर", b: "गया", c: "भागलपुर", d: "सीतामढ़ी" },
        correctAnswer: "c"
    },
    {
        question: "12. बिहार की सबसे लंबी नदी कौन सी है?",
        options: { a: "सोन", b: "गंडक", c: "कोसी", d: "गंगा" },
        correctAnswer: "d"
    },
    {
        question: "13. शेरशाह सूरी का मकबरा किस शहर में स्थित है?",
        options: { a: "पटना", b: "सासाराम", c: "राजगीर", d: "नालंदा" },
        correctAnswer: "b"
    },
    {
        question: "14. बिहार का कौन सा जिला चावल उत्पादन के लिए प्रसिद्ध है?",
        options: { a: "गया", b: "पश्चिमी चंपारण", c: "मुजफ्फरपुर", d: "दरभंगा" },
        correctAnswer: "a"
    },
    {
        question: "15. बिहार के किस स्थान को ‘अशोक स्तम्भ’ के लिए जाना जाता है?",
        options: { a: "नालंदा", b: "वैशाली", c: "बोधगया", d: "राजगीर" },
        correctAnswer: "b"
    },
    {
        question: "16. बिहार के प्रसिद्ध लोकनृत्य का नाम क्या है?",
        options: { a: "गरबा", b: "भांगड़ा", c: "झूमर", d: "समाई" },
        correctAnswer: "c"
    },
    {
        question: "17. बिहार में सबसे बड़ा पशु मेला कहाँ आयोजित होता है?",
        options: { a: "पटना", b: "सोनपुर", c: "दरभंगा", d: "भागलपुर" },
        correctAnswer: "b"
    },
    {
        question: "18. किस नदी को ‘बिहार का शोक’ कहा जाता है?",
        options: { a: "सोन", b: "गंगा", c: "कोसी", d: "गंडक" },
        correctAnswer: "c"
    },
    {
        question: "19. बिहार के कौन से जिले को ‘लीची की राजधानी’ कहा जाता है?",
        options: { a: "पटना", b: "मुजफ्फरपुर", c: "गया", d: "दरभंगा" },
        correctAnswer: "b"
    },
    {
        question: "20. भारत के राष्ट्रपति डॉ. राजेंद्र प्रसाद का जन्म स्थान कौन सा है?",
        options: { a: "पटना", b: "मुजफ्फरपुर", c: "सीतामढ़ी", d: "सिवान" },
        correctAnswer: "d"
    },
    {
        question: "21. बिहार के किस शहर में महात्मा गांधी सेतु स्थित है?",
        options: { a: "पटना", b: "दरभंगा", c: "गया", d: "भागलपुर" },
        correctAnswer: "a"
    },
    {
        question: "22. बिहार का कौन सा जिला मखाना उत्पादन के लिए प्रसिद्ध है?",
        options: { a: "दरभंगा", b: "मुजफ्फरपुर", c: "मधुबनी", d: "सीतामढ़ी" },
        correctAnswer: "a"
    },
    {
        question: "23. बिहार के किस शहर को ‘राजधानी का शहर’ कहा जाता है?",
        options: { a: "गया", b: "राजगीर", c: "पटना", d: "मुजफ्फरपुर" },
        correctAnswer: "b"
    },
    {
        question: "24. बिहार में कौन सी जनजाति सबसे अधिक पाई जाती है?",
        options: { a: "संताल", b: "हो", c: "ओरांव", d: "मुण्डा" },
        correctAnswer: "a"
    },
    {
        question: "25. बिहार में चंपारण सत्याग्रह किस वर्ष हुआ था?",
        options: { a: "1917", b: "1920", c: "1930", d: "1942" },
        correctAnswer: "a"
    },
    {
        question: "26. कौन सी नदी बिहार और नेपाल के बीच बहती है?",
        options: { a: "गंगा", b: "कोसी", c: "महानदी", d: "गंडक" },
        correctAnswer: "b"
    },
    {
        question: "27. बिहार का कौन सा स्थान जैन धर्म के 24वें तीर्थंकर महावीर से जुड़ा है?",
        options: { a: "वैशाली", b: "राजगीर", c: "पावापुरी", d: "नालंदा" },
        correctAnswer: "c"
    },
    {
        question: "28. बिहार के किस शहर में मौर्य साम्राज्य की स्थापना हुई थी?",
        options: { a: "पाटलिपुत्र", b: "गया", c: "मुजफ्फरपुर", d: "भागलपुर" },
        correctAnswer: "a"
    },
    {
        question: "29. बिहार में कौन सा त्योहार सूर्य की पूजा के लिए प्रसिद्ध है?",
        options: { a: "दीपावली", b: "होली", c: "छठ", d: "रक्षा बंधन" },
        correctAnswer: "c"
    },
    {
        question: "30. बिहार में 'जवाहरलाल नेहरू बायोलॉजिकल पार्क' किस शहर में स्थित है?",
        options: { a: "पटना", b: "गया", c: "सासाराम", d: "राजगीर" },
        correctAnswer: "d"
    },
    {
        question: "31. कौन सा स्थान बिहार में पवित्र बौद्ध धर्म स्थल के रूप में जाना जाता है?",
        options: { a: "नालंदा", b: "वैशाली", c: "राजगीर", d: "बोधगया" },
        correctAnswer: "d"
    },
    {
        question: "32. बिहार की कौन सी झील एशिया की सबसे बड़ी प्राकृतिक झील है?",
        options: { a: "चिल्का झील", b: "दल झील", c: "कबरताल झील", d: "सूरजकुंड" },
        correctAnswer: "c"
    },
    {
        question: "33. बिहार की सबसे ऊंची चोटी कौन सी है?",
        options: { a: "माउंट एवरेस्ट", b: "गुरपा हिल्स", c: "कंचनजंगा", d: "राजगीर हिल्स" },
        correctAnswer: "b"
    },
    {
        question: "34. बिहार में ‘सोन नदी’ किस राज्य से निकलती है?",
        options: { a: "झारखंड", b: "उत्तर प्रदेश", c: "मध्य प्रदेश", d: "छत्तीसगढ़" },
        correctAnswer: "c"
    },
    {
        question: "35. किस राज्य से अलग होकर बिहार राज्य बना था?",
        options: { a: "उत्तर प्रदेश", b: "पश्चिम बंगाल", c: "ओडिशा", d: "झारखंड" },
        correctAnswer: "b"
    },
    {
        question: "36. किस भारतीय संविधान संशोधन के तहत बिहार का विभाजन कर झारखंड राज्य का गठन हुआ था?",
        options: { a: "84वां", b: "100वां", c: "91वां", d: "94वां" },
        correctAnswer: "a"
    },
    {
        question: "37. बिहार का प्रमुख शैक्षिक बोर्ड कौन सा है?",
        options: { a: "CBSE", b: "ICSE", c: "BSEB", d: "NIOS" },
        correctAnswer: "c"
    },
    {
        question: "38. बिहार में कौन सा वन्यजीव अभयारण्य स्थित है?",
        options: { a: "सिमलीपाल", b: "वाल्मीकि", c: "काजीरंगा", d: "सुंदरबन" },
        correctAnswer: "b"
    },
    {
        question: "39. किस महाकाव्य में बिहार के मिथिला क्षेत्र का वर्णन है?",
        options: { a: "महाभारत", b: "रामायण", c: "गीता", d: "ऋग्वेद" },
        correctAnswer: "b"
    },
    {
        question: "40. बिहार के किस शहर को ‘ज्ञान की भूमि’ कहा जाता है?",
        options: { a: "बोधगया", b: "नालंदा", c: "गया", d: "पटना" },
        correctAnswer: "a"
    },
    {
        question: "41. बिहार में सबसे पुरानी पार्टी कौन सी है?",
        options: { a: "भारतीय राष्ट्रीय कांग्रेस", b: "जनता दल", c: "भारतीय जनता पार्टी", d: "समाजवादी पार्टी" },
        correctAnswer: "a"
    },
    {
        question: "42. बिहार की सबसे बड़ी जनजाति कौन सी है?",
        options: { a: "संताल", b: "मुण्डा", c: "ओरांव", d: "हो" },
        correctAnswer: "a"
    },
    {
        question: "43. बिहार में बौद्ध धर्म से जुड़ी प्रमुख गुफा कौन सी है?",
        options: { a: "एलोरा", b: "अजंता", c: "बराबर गुफाएं", d: "सिद्ध गुफाएं" },
        correctAnswer: "c"
    },
    {
        question: "44. बिहार का कौन सा जिला चूड़ा उत्पादन के लिए प्रसिद्ध है?",
        options: { a: "पटना", b: "मधुबनी", c: "दरभंगा", d: "कटिहार" },
        correctAnswer: "a"
    },
    {
        question: "45. बिहार में नील की खेती का केंद्र कौन सा था?",
        options: { a: "पटना", b: "चंपारण", c: "मुजफ्फरपुर", d: "दरभंगा" },
        correctAnswer: "b"
    },
    {
        question: "46. बिहार का कौन सा शहर जैन धर्म का प्रमुख तीर्थस्थल है?",
        options: { a: "राजगीर", b: "वैशाली", c: "पावापुरी", d: "गया" },
        correctAnswer: "c"
    },
    {
        question: "47. बिहार की राज्य भाषा क्या है?",
        options: { a: "भोजपुरी", b: "हिंदी", c: "मैथिली", d: "मगही" },
        correctAnswer: "b"
    },
    {
        question: "48. बिहार का कौन सा हिल स्टेशन प्रसिद्ध है?",
        options: { a: "शिमला", b: "राजगीर", c: "मसूरी", d: "दार्जिलिंग" },
        correctAnswer: "b"
    },
    {
        question: "49. बिहार में विद्युत उत्पादन के लिए कौन सी नदी प्रमुख है?",
        options: { a: "सोन", b: "गंगा", c: "कोसी", d: "महानदी" },
        correctAnswer: "a"
    },
    {
        question: "50. बिहार में सबसे ज्यादा किस क्षेत्र में रोजगार मिलता है?",
        options: { a: "कृषि", b: "मछली पालन", c: "शिक्षा", d: "सिल्क उत्पादन" },
        correctAnswer: "a"
    }
];


const indiaGkQuestions = [
    {
        question: "1. भारत की राजधानी कौन सी है?",
        options: { a: "मुंबई", b: "कोलकाता", c: "नई दिल्ली", d: "चेन्नई" },
        correctAnswer: "c"
    },
    {
        question: "2. भारत के पहले प्रधानमंत्री कौन थे?",
        options: { a: "महात्मा गांधी", b: "लाल बहादुर शास्त्री", c: "पंडित जवाहरलाल नेहरू", d: "सुभाष चंद्र बोस" },
        correctAnswer: "c"
    },
    {
        question: "3. भारतीय संविधान को कब अपनाया गया?",
        options: { a: "15 अगस्त 1947", b: "26 जनवरी 1950", c: "2 अक्टूबर 1950", d: "26 नवंबर 1949" },
        correctAnswer: "d"
    },
    {
        question: "4. भारत का राष्ट्रीय पशु कौन सा है?",
        options: { a: "शेर", b: "हाथी", c: "चीता", d: "बाघ" },
        correctAnswer: "d"
    },
    {
        question: "5. भारत का राष्ट्रीय पक्षी कौन सा है?",
        options: { a: "मोर", b: "तोता", c: "कौआ", d: "बाज" },
        correctAnswer: "a"
    },
    {
        question: "6. भारतीय रुपये का प्रतीक चिन्ह किसने डिजाइन किया?",
        options: { a: "उदय कुमार", b: "चार्ल्स कोरिया", c: "राम मनोहर लोहिया", d: "सुरेश कश्यप" },
        correctAnswer: "a"
    },
    {
        question: "7. भारत का सबसे बड़ा राज्य क्षेत्रफल के अनुसार कौन सा है?",
        options: { a: "उत्तर प्रदेश", b: "राजस्थान", c: "मध्य प्रदेश", d: "महाराष्ट्र" },
        correctAnswer: "b"
    },
    {
        question: "8. भारतीय संसद के कितने सदन होते हैं?",
        options: { a: "एक", b: "दो", c: "तीन", d: "चार" },
        correctAnswer: "b"
    },
    {
        question: "9. भारत का कौन सा पर्वत सबसे ऊँचा है?",
        options: { a: "कंचनजंगा", b: "नंदा देवी", c: "माउंट एवरेस्ट", d: "धौलागिरी" },
        correctAnswer: "a"
    },
    {
        question: "10. भारत के राष्ट्रीय ध्वज में कितनी धारियां होती हैं?",
        options: { a: "तीन", b: "चार", c: "पांच", d: "दो" },
        correctAnswer: "a"
    },
    {
        question: "11. भारत के किस राज्य में सबसे पहले सूर्योदय होता है?",
        options: { a: "अरुणाचल प्रदेश", b: "सिक्किम", c: "आंध्र प्रदेश", d: "पश्चिम बंगाल" },
        correctAnswer: "a"
    },
    {
        question: "12. भारत का सबसे बड़ा मंदिर किस राज्य में स्थित है?",
        options: { a: "तमिलनाडु", b: "उत्तर प्रदेश", c: "ओडिशा", d: "कर्नाटक" },
        correctAnswer: "a"
    },
    {
        question: "13. भारतीय रुपये का सबसे बड़ा नोट कौन सा है?",
        options: { a: "₹100", b: "₹200", c: "₹2000", d: "₹500" },
        correctAnswer: "c"
    },
    {
        question: "14. भारत की सबसे लंबी नदी कौन सी है?",
        options: { a: "गंगा", b: "यमुना", c: "कावेरी", d: "गोदावरी" },
        correctAnswer: "a"
    },
    {
        question: "15. भारतीय राष्ट्रीय गान 'जन गण मन' किसने लिखा था?",
        options: { a: "रवींद्रनाथ टैगोर", b: "सुभाष चंद्र बोस", c: "महात्मा गांधी", d: "भगत सिंह" },
        correctAnswer: "a"
    },
    {
        question: "16. भारत में कितने राज्य हैं?",
        options: { a: "28", b: "29", c: "30", d: "31" },
        correctAnswer: "a"
    },
    {
        question: "17. भारत का राष्ट्रीय खेल कौन सा है?",
        options: { a: "क्रिकेट", b: "कबड्डी", c: "हॉकी", d: "फुटबॉल" },
        correctAnswer: "c"
    },
    {
        question: "18. भारत के किस राज्य में सबसे ज्यादा चाय का उत्पादन होता है?",
        options: { a: "असम", b: "केरल", c: "तमिलनाडु", d: "उत्तर प्रदेश" },
        correctAnswer: "a"
    },
    {
        question: "19. भारत में कितने केंद्र शासित प्रदेश हैं?",
        options: { a: "6", b: "7", c: "8", d: "9" },
        correctAnswer: "c"
    },
    {
        question: "20. भारत के राष्ट्रपति का कार्यकाल कितने वर्षों का होता है?",
        options: { a: "5 वर्ष", b: "6 वर्ष", c: "4 वर्ष", d: "7 वर्ष" },
        correctAnswer: "a"
    },
    {
        question: "21. भारत का सबसे बड़ा रेल नेटवर्क किस राज्य में है?",
        options: { a: "उत्तर प्रदेश", b: "महाराष्ट्र", c: "पश्चिम बंगाल", d: "तमिलनाडु" },
        correctAnswer: "a"
    },
    {
        question: "22. भारत में सबसे ज्यादा जनसंख्या किस राज्य की है?",
        options: { a: "महाराष्ट्र", b: "उत्तर प्रदेश", c: "बिहार", d: "पश्चिम बंगाल" },
        correctAnswer: "b"
    },
    {
        question: "23. भारत का सबसे पुराना बंदरगाह कौन सा है?",
        options: { a: "मुंबई बंदरगाह", b: "कोलकाता बंदरगाह", c: "चेन्नई बंदरगाह", d: "कोचीन बंदरगाह" },
        correctAnswer: "c"
    },
    {
        question: "24. भारत में सबसे ज्यादा धान उत्पादन किस राज्य में होता है?",
        options: { a: "पंजाब", b: "उत्तर प्रदेश", c: "पश्चिम बंगाल", d: "बिहार" },
        correctAnswer: "c"
    },
    {
        question: "25. भारतीय संसद भवन कहाँ स्थित है?",
        options: { a: "मुंबई", b: "नई दिल्ली", c: "कोलकाता", d: "बेंगलुरु" },
        correctAnswer: "b"
    },
    {
        question: "26. भारतीय सेना के तीन प्रमुख अंग कौन से हैं?",
        options: { a: "जल, थल, वायु", b: "जल, थल, अंतरिक्ष", c: "जल, थल, सुरंग", d: "थल, वायु, रेल" },
        correctAnswer: "a"
    },
    {
        question: "27. भारत की पहली महिला प्रधानमंत्री कौन थीं?",
        options: { a: "प्रतिभा पाटिल", b: "इंदिरा गांधी", c: "सोनिया गांधी", d: "सुषमा स्वराज" },
        correctAnswer: "b"
    },
    {
        question: "28. भारत का सबसे बड़ा बांध कौन सा है?",
        options: { a: "भाखड़ा नांगल", b: "तेहरी बांध", c: "सरदार सरोवर", d: "हीराकुंड" },
        correctAnswer: "d"
    },
    {
        question: "29. भारत की कौन सी झील सबसे बड़ी है?",
        options: { a: "चिल्का झील", b: "डल झील", c: "वूलर झील", d: "लोकटक झील" },
        correctAnswer: "a"
    },
    {
        question: "30. भारत का कौन सा शहर 'सिलिकॉन वैली' के नाम से जाना जाता है?",
        options: { a: "नई दिल्ली", b: "बेंगलुरु", c: "मुंबई", d: "हैदराबाद" },
        correctAnswer: "b"
    },
    {
        question: "31. भारतीय राष्ट्रीय ध्वज का डिजाइन किसने तैयार किया था?",
        options: { a: "पिंगली वेंकय्या", b: "जवाहरलाल नेहरू", c: "रवींद्रनाथ टैगोर", d: "महात्मा गांधी" },
        correctAnswer: "a"
    },
    {
        question: "32. भारतीय सशस्त्र बलों का सर्वोच्च अधिकारी कौन होता है?",
        options: { a: "प्रधानमंत्री", b: "रक्षा मंत्री", c: "राष्ट्रपति", d: "सेना प्रमुख" },
        correctAnswer: "c"
    },
    {
        question: "33. भारत के किस राज्य में सूर्य मंदिर स्थित है?",
        options: { a: "गुजरात", b: "राजस्थान", c: "ओडिशा", d: "मध्य प्रदेश" },
        correctAnswer: "c"
    },
    {
        question: "34. भारतीय रिजर्व बैंक की स्थापना कब हुई थी?",
        options: { a: "1935", b: "1947", c: "1950", d: "1965" },
        correctAnswer: "a"
    },
    {
        question: "35. किस भारतीय वैज्ञानिक को 'मिसाइल मैन' कहा जाता है?",
        options: { a: "होमी जहांगीर भाभा", b: "सी. वी. रमन", c: "डॉ. ए. पी. जे. अब्दुल कलाम", d: "विक्रम साराभाई" },
        correctAnswer: "c"
    },
    {
        question: "36. भारतीय संविधान में कितने मौलिक अधिकार हैं?",
        options: { a: "छह", b: "सात", c: "आठ", d: "नौ" },
        correctAnswer: "a"
    },
    {
        question: "37. भारतीय नौसेना का प्रमुख ठिकाना कहाँ स्थित है?",
        options: { a: "मुंबई", b: "विशाखापत्तनम", c: "कोच्चि", d: "गोवा" },
        correctAnswer: "a"
    },
    {
        question: "38. भारत के पहले राष्ट्रपति कौन थे?",
        options: { a: "डॉ. राजेंद्र प्रसाद", b: "डॉ. सर्वपल्ली राधाकृष्णन", c: "लाल बहादुर शास्त्री", d: "सुभाष चंद्र बोस" },
        correctAnswer: "a"
    },
    {
        question: "39. भारत में 'हरित क्रांति' का नेतृत्व किसने किया?",
        options: { a: "नरेंद्र मोदी", b: "इंदिरा गांधी", c: "डॉ. एम. एस. स्वामीनाथन", d: "लाल बहादुर शास्त्री" },
        correctAnswer: "c"
    },
    {
        question: "40. भारत में सबसे पुरानी मस्जिद कौन सी है?",
        options: { a: "जामा मस्जिद", b: "कुतुबुद्दीन मस्जिद", c: "चेरामन जुमा मस्जिद", d: "मक्का मस्जिद" },
        correctAnswer: "c"
    },
    {
        question: "41. भारत का पहला उपग्रह कौन सा था?",
        options: { a: "अग्नि", b: "रोहिणी", c: "भास्कर", d: "आर्यभट्ट" },
        correctAnswer: "d"
    },
    {
        question: "42. भारत के किस राज्य में सबसे ज्यादा बांध हैं?",
        options: { a: "महाराष्ट्र", b: "तमिलनाडु", c: "राजस्थान", d: "उत्तराखंड" },
        correctAnswer: "a"
    },
    {
        question: "43. भारत में किस दिन संविधान दिवस मनाया जाता है?",
        options: { a: "15 अगस्त", b: "2 अक्टूबर", c: "26 जनवरी", d: "26 नवंबर" },
        correctAnswer: "d"
    },
    {
        question: "44. भारत की सबसे पुरानी यूनिवर्सिटी कौन सी है?",
        options: { a: "नालंदा", b: "तक्षशिला", c: "अलीगढ़ मुस्लिम यूनिवर्सिटी", d: "बनारस हिंदू यूनिवर्सिटी" },
        correctAnswer: "a"
    },
    {
        question: "45. भारत में दूध उत्पादन में कौन सा राज्य अग्रणी है?",
        options: { a: "उत्तर प्रदेश", b: "पंजाब", c: "राजस्थान", d: "हरियाणा" },
        correctAnswer: "a"
    },
    {
        question: "46. भारत में 'श्वेत क्रांति' का उद्देश्य क्या था?",
        options: { a: "गेहूं उत्पादन", b: "दूध उत्पादन", c: "धान उत्पादन", d: "कपास उत्पादन" },
        correctAnswer: "b"
    },
    {
        question: "47. भारत के कौन से राज्य में सबसे ज्यादा बांध हैं?",
        options: { a: "तमिलनाडु", b: "महाराष्ट्र", c: "राजस्थान", d: "उत्तर प्रदेश" },
        correctAnswer: "b"
    },
    {
        question: "48. भारत का कौन सा किला सबसे बड़ा है?",
        options: { a: "मेहरानगढ़ किला", b: "ग्वालियर किला", c: "चित्तौड़गढ़ किला", d: "आगरा किला" },
        correctAnswer: "c"
    },
    {
        question: "49. भारत का पहला परमाणु परीक्षण कब हुआ था?",
        options: { a: "1964", b: "1974", c: "1984", d: "1998" },
        correctAnswer: "b"
    },
    {
        question: "50. भारत का कौन सा शहर 'गुलाबी शहर' के नाम से जाना जाता है?",
        options: { a: "जयपुर", b: "उदयपुर", c: "जोधपुर", d: "अजमेर" },
        correctAnswer: "a"
    }
];
