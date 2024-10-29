const questions = {
    set1: [

        //EI  13题
        {question: "1. You usually:", options: ["A. Become easily familiar with people", "B. Remain more reserved or aloof"], scores: [1, 0]},
        {question: "2. Are you easy to understand?", options: ["A. Yes", "B. No"], scores: [1, 0]},
        {
            question: "3. Most people would describe you as:",
            options: ["A. A person who values privacy", "B. A very open and candid person"],
            scores: [0, 1]
        },
        {question: "In a large group of people, typically:", options: ["A. You introduce everyone to each other", "B. Others introduce you"], scores: [1, 0]},
        {question: "5. Do you prefer to spend a lot of time:", options: ["A. Alone", "B. With others"], scores: [0, 1]},
        {question: "6. Being with a lot of people:", options: ["A. Energizes you", "B. Often drains you"], scores: [1, 0]},
        {question: "7. At social gatherings, you:", options: ["A. Sometimes feel down", "B. Often enjoy yourself"], scores: [0, 1]},
        {question: "8. You usually:", options: ["A. Easily become familiar with others", "B. Tend to stay in your own corner"], scores: [1, 0]},
        {
            question: "9. You think others generally:",
            options: ["A. Take a long time to get to know you", "B. Get to know you quickly"],
            scores: [0, 1]
        },
        {
            question: "10. In each of the following pairs of words, which one suits you better?",
            options: ["A. Privacy-conscious", "B. Open and candid"],
            scores: [0, 1]
        },
        {question: "11. In each of the following pairs of words, which word best describes you?", options: ["A. Enthusiastic", "B. Reserved"], scores: [1, 0]},
        {question: "12. In each of the following pairs of words, which word best describes you?", options: ["A. Quiet", "B. Outgoing"], scores: [0, 1]},
        {
            question: "13. Can your newly met friends describe your interests?",
            options: ["A. They can do so immediately", "B. They can only do so after getting to know you better"],
            scores: [1, 0]
        },

        //SN  11题
        {
            question: "14. If you were a teacher, would you prefer to teach:",
            options: ["A. Fact-based courses", "B. Theory-based courses"],
            scores: [1, 0]
        },
        {question: "15. In general, you get along better with:", options: ["A. Imaginative people", "B. Realistic people"], scores: [0, 1]},
        {question: "16. Would you rather be considered:", options: ["A. A practical person", "B. A clever person"], scores: [1, 0]},
        {question: "17. Would you be friends with:", options: ["A. People who frequently come up with new ideas", "B. Down-to-earth people"], scores: [0, 1]},
        {
            question: "18. Which type of person attracts you more?",
            options: ["A. Someone who is quick-witted and very intelligent", "B. Someone who is practical and has extensive knowledge"],
            scores: [0, 1]
        },
        {question: "19. In each of the following pairs of words, which word better describes you?", options: ["A. Abstract", "B. Concrete"], scores: [0, 1]},
        {question: "20. In each of the following pairs of words, which word better describes you?", options: ["A. Facts", "B. Ideas"], scores: [1, 0]},
        {question: "21. In each of the following pairs of words, which word better describes you?", options: ["A. Theory", "B. Affirmation"], scores: [0, 1]},
        {question: "22. In each of the following pairs of words, which word better describes you?", options: ["A. Statement", "B. Concept"], scores: [1, 0]},
        {question: "23. In each of the following pairs of words, which word better describes you?", options: ["A. Practical", "B. Theoretical"], scores: [1, 0]},
        {question: "24. In each of the following pairs of words, which word better describes you?", options: ["A. Concrete", "B. Abstract"], scores: [1, 0]},

        // TF 13题
        {question: "25. Do you often let:", options: ["A. Your emotions guide your decisions", "B. Your rationality control your emotions"], scores: [0, 1]},
        {question: "26. Do you tend to value:", options: ["A. Emotions more than logic", "B. Logic more than emotions"], scores: [0, 1]},
        {question: "27. In each of the following pairs of words, which word better describes you?", options: ["A. Gentle", "B. Determined"], scores: [0, 1]},
        {question: "28. In each of the following pairs of words, which word better describes you?", options: ["A. Thinking", "B. Feeling"], scores: [1, 0]},
        {question: "29. In each of the following pairs of words, which word better describes you?", options: ["A. Sensitive", "B. Fair"], scores: [0, 1]},
        {
            question: "30. In each of the following pairs of words, which word better describes you?",
            options: ["A. Convincing", "B. Touching"],
            scores: [1, 0]
        },
        {question: "31. In each of the following pairs of words, which word better describes you?", options: ["A. Convincing", "B. Moving"], scores: [0, 1]},
        {question: "32. In each of the following pairs of words, which word better describes you?", options: ["A. Benefit", "B. Blessing"], scores: [1, 0]},
        {question: "33. In each of the following pairs of words, which word better describes you?", options: ["A. Warm", "B. Objective"], scores: [0, 1]},
        {question: "34. In each of the following pairs of words, which word better describes you?", options: ["A. Objective", "B. Enthusiastic"], scores: [1, 0]},
        {
            question: "35. In each of the following pairs of words, which word better describes you?",
            options: ["A. Analytical", "B. Sentimental"],
            scores: [1, 0]
        },
        {question: "36. In each of the following pairs of words, which word better describes you?", options: ["A. Capable", "B. Compassionate"], scores: [1, 0]},
        {
            question: "37. In each of the following pairs of words, which word better describes you?",
            options: ["A. Stubborn", "B. Gentle and caring"],
            scores: [1, 0]
        },

        //JP 11题
        {
            question: "38. When you are going out for the whole day, do you:",
            options: ["A. Plan what you will do and when", "B. Just go without a plan"],
            scores: [1, 0]
        },
        {question: "39. Do you consider yourself to be:", options: ["A. More spontaneous", "B. More organized"], scores: [0, 1]},
        {question: "40. When handling many tasks, do you prefer to:", options: ["A. Act on impulse", "B. Follow a plan"], scores: [0, 1]},
        {question: "41. Following a schedule:", options: ["A. Suits you", "B. Feels restrictive"], scores: [1, 0]},
        {
            question: "42. When you have a special task, do you prefer to:",
            options: ["A. Carefully organize and plan before starting", "B. Figure out what needs to be done as you go"],
            scores: [1, 0]
        },
        {question: "43. When you have a special task, do you prefer to:", options: ["A. Carefully organize and plan before starting", "B. Figure out what needs to be done as you go"], scores: [0, 1]},
        {question: "44. Do you prefer to:", options: ["A. Wait and see how things develop before making plans", "B. Make plans well in advance"], scores: [0, 1]},
        {
            question: "45. Do you prefer to:",
            options: ["A. Arrange appointments and social gatherings well in advance", "B. Be spontaneous and do whatever seems fun at the moment"],
            scores: [1, 0]
        },
        {
            question: "46. When planning a trip, do you prefer to:",
            options: ["A. Go with the flow most of the time based on how you feel each day", "B. Know in advance what you will do most days"],
            scores: [0, 1]
        },
        {
            question: "47. In each of the following pairs of words, which word better describes you?",
            options: ["A. Planned", "B. Unplanned"],
            scores: [1, 0]
        },
        {question: "48. Do you usually prefer to:", options: ["A. Plan your social appointments in advance", "B. Do things spontaneously"], scores: [1, 0]},

    ],
    set2: [
        //EI  21题
        {question: "1. You usually:", options: ["A. Find it easy to get to know people", "B. Are more reserved or quiet"], scores: [1, 0]},
        {question: "2. Are you:", options: ["A. Easy for others to understand", "B. Difficult for others to understand"], scores: [1, 0]},
        {
            question: "3. Most people would say you are:",
            options: ["A. Someone who values privacy", "B. Very open and straightforward"],
            scores: [0, 1]
        },
        {question: "4. In a large group, are you usually:", options: ["A. The one introducing everyone", "B. The one being introduced"], scores: [1, 0]},
        {question: "5. Do you like to spend a lot of time:", options: ["A. Alone", "B. With others"], scores: [0, 1]},
        {question: "6. Being with many people:", options: ["A. Energizes you", "B. Often drains you"], scores: [1, 0]},
        {question: "7. At social gatherings, you:", options: ["A. Sometimes feel bored", "B. Often enjoy yourself"], scores: [0, 1]},
        {question: "8. You usually:", options: ["A. Find it easy to get to know others", "B. Tend to keep to yourself"], scores: [1, 0]},
        {
            question: "9. Do you think others generally:",
            options: ["A. Take a long time to get to know you", "B. Get to know you quickly"],
            scores: [0, 1]
        },
        {
            question: "10. In each of the following pairs of words, which one describes you better?",
            options: ["A. Private", "B. Open"],
            scores: [0, 1]
        },
        {question: "11. In each of the following pairs of words, which one describes you better?", options: ["A. Enthusiastic", "B. Quiet"], scores: [1, 0]},
        {question: "12. In each of the following pairs of words, which one describes you better?", options: ["A. Reserved", "B. Outgoing"], scores: [0, 1]},
        {question: "13. In each of the following pairs of words, which one describes you better?", options: ["A. Reserved", "B. Talkative"], scores: [0, 1]},
        {
            question: "14. In each of the following pairs of words, which one describes you better?",
            options: ["A. Few friends", "B. Many friends"],
            scores: [0, 1]
        },
        {question: "15. In each of the following pairs of words, which one describes you better?", options: ["A. Quiet", "B. Sociable"], scores: [0, 1]},
        {
            question: "16. In social situations, you often feel:",
            options: ["A. It’s difficult to start and maintain conversations with some people", "B. You can comfortably engage in long conversations with most people"],
            scores: [0, 1]
        },
        {
            question: "17. Can someone you’ve just met quickly identify your interests?？",
            options: ["A. Yes", "B. No, they need to get to know you better first"],
            scores: [1, 0]
        },
        {
            question: "18. When you are with a group of people, do you usually:",
            options: ["A. Talk with a few individuals you know well", "B. Join in the conversation with the whole group"],
            scores: [0, 1]
        },
        {question: "19. At social gatherings, do you:", options: ["A. Talk a lot", "B. Let others do most of the talking"], scores: [1, 0]},
        {
            question: "20. Can you engage in lengthy conversations:",
            options: ["A. Only with people who share your interests", "B. With almost anyone"],
            scores: [0, 1]
        },
        {
            question: "21. Are you:",
            options: ["A. Able to comfortably converse with anyone as needed", "B. Only able to speak freely with certain people or in specific situations"],
            scores: [1, 0]
        },

        //SN  27题
        {
            question: "22. If you were a teacher, would you prefer to teach:",
            options: ["A. Courses based on facts", "B. Courses involving theory"],
            scores: [1, 0]
        },
        {question: "23. In general, do you get along better with:", options: ["A. Imaginative people", "B. Practical people"], scores: [0, 1]},
        {question: "24. Would you rather be considered:", options: ["A. A practical person", "B. A clever person"], scores: [1, 0]},
        {question: "25. Which type of people do you prefer to be friends with?", options: ["A. Those who frequently come up with new ideas", "B. Those who are down-to-earth"], scores: [0, 1]},
        {
            question: "26. Which type of person is more attractive to you?",
            options: ["A. Someone who is quick-witted and very intelligent", "B. Someone who is practical and has a wealth of knowledge"],
            scores: [0, 1]
        },
        {question: "27. In each of the following pairs of words, which word better describes you?", options: ["A. Abstract", "B. Concrete"], scores: [0, 1]},
        {question: "28. In each of the following pairs of words, which word better describes you?", options: ["A. Facts", "B. Ideas"], scores: [1, 0]},
        {question: "29. In each of the following pairs of words, which word better describes you?", options: ["A. Theoretical", "B. Confirmatory"], scores: [0, 1]},
        {question: "30. In each of the following pairs of words, which word better describes you?", options: ["A. Statement", "B. Concept"], scores: [1, 0]},
        {question: "31. In each of the following pairs of words, which word better describes you?", options: ["A. Concept", "B. Reality"], scores: [0, 1]},
        {question: "32. In each of the following pairs of words, which word better describes you?", options: ["A. Practical", "B. Theoretical"], scores: [1, 0]},
        {
            question: "33. In each of the following pairs of words, which word better describes you?",
            options: ["A. Imaginative", "B. Pragmatic"],
            scores: [0, 1]
        },
        {question: "34. In each of the following pairs of words, which word better describes you?", options: ["A. Build", "B. Invent"], scores: [1, 0]},
        {question: "35. In each of the following pairs of words, which word better describes you?", options: ["A. Theory", "B. Facts"], scores: [0, 1]},
        {
            question: "36. In each of the following pairs of words, which word better describes you?",
            options: ["A. Reasonable", "B. Fascinating"],
            scores: [1, 0]
        },
        {
            question: "37. When doing something that many people also do, do you prefer to:",
            options: ["A. Follow conventional methods", "B. Come up with your own approach"],
            scores: [1, 0]
        },
        {question: "38. The subjects you usually prefer are:", options: ["A. Those that teach concepts and principles", "B. Those that teach facts and data"], scores: [0, 1]},
        {
            question: "39. Do you:",
            options: ["A. Follow proven methods", "B. Analyze what might still be wrong and address unresolved issues"],
            scores: [1, 0]
        },
        {
            question: "40. When reading for pleasure, do you prefer:",
            options: ["A. Unique or innovative expressions", "B. Direct and straightforward writing"],
            scores: [0, 1]
        },
        {
            question: "41. Which type of supervisor (or teacher) would you prefer to work for?",
            options: ["A. Someone who is naturally kind but often inconsistent", "B. Someone who is sharp-tongued but always logical"],
            scores: [1, 0]
        },
        {question: "42. In each of the following pairs of words, which word better describes your preference?", options: ["A. Imaginative", "B. Realistic"], scores: [0, 1]},
        {question: "43. In each of the following pairs of words, which word better describes your preference?", options: ["A. Production", "B. Design"], scores: [1, 0]},
        {question: "44. In each of the following pairs of words, which word better describes your preference?", options: ["A. Possibility", "B. Certainty"], scores: [0, 1]},
        {question: "45. In each of the following pairs of words, which word better describes your preference?", options: ["A. Manufacture", "B. Create"], scores: [1, 0]},
        {question: "46. In each of the following pairs of words, which word better describes your preference?", options: ["A. Novel", "B. Familiar"], scores: [0, 1]},
        {question: "47. In each of the following pairs of words, which word better describes your preference?", options: ["A. Concrete", "B. Abstract"], scores: [1, 0]},
        {question: "48. In each of the following pairs of words, which word better describes your preference?", options: ["A. Practical", "B. Innovative"], scores: [1, 0]},

        //TF  23题
        {question: "49. Do you often let:", options: ["A. Your emotions govern your reason.", "B. Your reason govern your emotions."], scores: [0, 1]},
        {question: "50. Do you tend to:", options: ["A. Value feelings more than logic.", "B. Value logic more than feelings."], scores: [0, 1]},
        {question: "51. In each of the following pairs of words, which word better describes your preference?", options: ["A. Gentle", "B. Firm"], scores: [0, 1]},
        {question: "52. In each of the following pairs of words, which word better describes your preference?", options: ["A. Thinking", "B. Feeling"], scores: [1, 0]},
        {question: "53. In each of the following pairs of words, which word better describes your preference?", options: ["A. Sensitive", "B. Fair"], scores: [0, 1]},
        {
            question: "54. In each of the following pairs of words, which word better describes your preference?",
            options: ["A. Convincing", "B. Touching"],
            scores: [1, 0]
        },
        {question: "55. In each of the following pairs of words, which word better describes your preference?", options: ["A. Compassion", "B. Foresight"], scores: [0, 1]},
        {question: "56. In each of the following pairs of words, which word better describes your preference?", options: ["A. Benefit", "B. Blessing"], scores: [1, 0]},
        {question: "57. In each of the following pairs of words, which word better describes your preference?", options: ["A. Warm", "B. Objective"], scores: [0, 1]},
        {question: "58. In each of the following pairs of words, which word better describes your preference?", options: ["A. Objective", "B. Enthusiastic"], scores: [1, 0]},
        {
            question: "59. In each of the following pairs of words, which word better describes your preference?",
            options: ["A. Compassionate", "B. Logical"],
            scores: [0, 1]
        },
        {
            question: "60. In each of the following pairs of words, which word better describes your preference?",
            options: ["A. Analytical", "B. Sentimental"],
            scores: [1, 0]
        },
        {question: "61. Which is considered a higher compliment or praise?", options: ["A. Someone who is consistently emotional", "B. Someone who is consistently rational"], scores: [0, 1]},
        {question: "62. Which is considered a higher compliment or praise?", options: ["A. Competent", "B. Compassionate"], scores: [1, 0]},
        {
            question: "63. When making a decision, what do you consider more important?",
            options: ["A. Judging by the facts", "B. Considering others' feelings and opinions"],
            scores: [1, 0]
        },
        {
            question: "64. In each of the following pairs of words, which word better describes your preference?",
            options: ["A. Compassionate and generous", "B. Resolute and determined"],
            scores: [0, 1]
        },
        {
            question: "65. In each of the following pairs of words, which word better describes your preference?",
            options: ["A. Fair", "B. Caring"],
            scores: [1, 0]
        },
        {question: "66. In each of the following pairs of words, which word better describes your preference?", options: ["A. Gentle", "B. Strong"], scores: [0, 1]},
        {question: "67. In each of the following pairs of words, which word better describes your preference?", options: ["A. Practical", "B. Sentimental"], scores: [1, 0]},
        {question: "68. In each of the following pairs of words, which word better describes your preference?", options: ["A. Sympathy", "B. Analysis"], scores: [0, 1]},
        {
            question: "69. In each of the following pairs of words, which word better describes your preference?",
            options: ["A. Stubborn", "B. Gentle and caring"],
            scores: [1, 0]
        },
        {
            question: "70. In each of the following pairs of words, which word better describes your preference?",
            options: ["A. Committed", "B. Determined"],
            scores: [0, 1]
        },
        {question: "71. In each of the following pairs of words, which word better describes your preference?", options: ["A. Competent", "B. Compassionate"], scores: [1, 0]},

        // JP  22题
        {
            question: "72. When you plan to be out for the whole day, do you:",
            options: ["A. Plan what you will do and when you will do it", "B. Go with the flow"],
            scores: [1, 0]
        },
        {question: "73. Do you consider yourself to be:", options: ["A. More spontaneous", "B. More organized"], scores: [0, 1]},
        {question: "74. When handling many tasks, do you prefer to:", options: ["A. Go with the flow", "B. Follow a plan"], scores: [0, 1]},
        {question: "75. Doing things according to a schedule:", options: ["A. Suits you", "B. Feels restrictive"], scores: [1, 0]},
        {
            question: "76. When you have a special task, do you prefer to:",
            options: ["A. Carefully organize and plan before starting", "B. Figure out what needs to be done as you go"],
            scores: [1, 0]
        },
        {question: "77. In most cases, do you prefer to:", options: ["A. Go with the flow", "B. Follow a schedule"], scores: [0, 1]},
        {question: "78. Do you prefer to:", options: ["A. Make plans as things develop", "B. Plan well in advance"], scores: [0, 1]},
        {
            question: "79. Which do you prefer?",
            options: ["A. Planning dates and social gatherings well in advance.", "B. Being spontaneous and doing whatever seems fun at the moment."],
            scores: [1, 0]
        },
        {
            question: "80. When planning a trip, do you prefer:",
            options: ["A. Going with the flow and acting based on the day’s mood.", "B. Knowing in advance what you will do on most of the days."],
            scores: [0, 1]
        },
        {
            question: "81. In your daily work, do you prefer:",
            options: ["A. Handling unexpected situations that require you to act quickly.", "B. Planning in advance to avoid working under pressure."],
            scores: [0, 1]
        },
        {
            question: "82. Which word suits you better in each of the following pairs?",
            options: ["A. Planned", "B. Spontaneous"],
            scores: [1, 0]
        },
        {question: "83. Which word suits you better in each of the following pairs?", options: ["A. Impulsive", "B. Decisive"], scores: [0, 1]},
        {question: "84. Which word suits you better in each of the following pairs?", options: ["A. Systematic", "B. Casual"], scores: [1, 0]},
        {
            question: "85. Which word suits you better in each of the following pairs?",
            options: ["A. Unrestricted", "B. Pre-planned"],
            scores: [0, 1]
        },
        {
            question: "86. Which word suits you better in each of the following pairs?",
            options: ["A. Methodical", "B. Laid-back"],
            scores: [1, 0]
        },
        {question: "87. Which word suits you better in each of the following pairs?", options: ["A. Systematic", "B. Spontaneous"], scores: [1, 0]},
        {
            question: "88. When you need to complete a big project within a week, do you:",
            options: ["A. List out the different tasks you need to do in sequence.", "B. Start working on it immediately."],
            scores: [1, 0]
        },
        {
            question: "89. Do you think following a schedule:",
            options: ["A. Is sometimes necessary, but generally you don't enjoy it.", "B. Is helpful in most cases and you like to do it."],
            scores: [0, 1]
        },
        {
            question: "90. Creating a to-do list for things to accomplish over the weekend:",
            options: ["A. Appeals to you.", "B. Dulls your enthusiasm."],
            scores: [1, 0]
        },
        {question: "91. Do you usually prefer:", options: ["A. Planning your social appointments in advance.", "B. Doing things spontaneously as the mood strikes."], scores: [1, 0]},
        {
            question: "92. Overall, when working on a large project, do you prefer to:",
            options: ["A. Think about what to do as you go along.", "B. Break the work down into steps first."],
            scores: [0, 1]
        },
        {question: "93. When doing tasks, do you mostly:", options: ["A. Act based on your mood for the day.", "B. Follow a planned schedule."], scores: [0, 1]},
    ],
    set3: [
        //EI  21题
        {question: "1. You usually:", options: ["A. Find it easy to get to know people", "B. Are more reserved or quiet"], scores: [1, 0]},
        {question: "2. Are you:", options: ["A. Easy for others to understand", "B. Difficult for others to understand"], scores: [1, 0]},
        {
            question: "3. Most people would say you are:",
            options: ["A. Someone who values privacy", "B. Very open and straightforward"],
            scores: [0, 1]
        },
        {question: "4. In a large group, are you usually:", options: ["A. The one introducing everyone", "B. The one being introduced"], scores: [1, 0]},
        {question: "5. Do you like to spend a lot of time:", options: ["A. Alone", "B. With others"], scores: [0, 1]},
        {question: "6. Being with many people:", options: ["A. Energizes you", "B. Often drains you"], scores: [1, 0]},
        {question: "7. At social gatherings, you:", options: ["A. Sometimes feel bored", "B. Often enjoy yourself"], scores: [0, 1]},
        {question: "8. You usually:", options: ["A. Find it easy to get to know others", "B. Tend to keep to yourself"], scores: [1, 0]},
        {
            question: "9. Do you think others generally:",
            options: ["A. Take a long time to get to know you", "B. Get to know you quickly"],
            scores: [0, 1]
        },
        {
            question: "10. In each of the following pairs of words, which one describes you better?",
            options: ["A. Private", "B. Open"],
            scores: [0, 1]
        },
        {question: "11. In each of the following pairs of words, which one describes you better?", options: ["A. Enthusiastic", "B. Quiet"], scores: [1, 0]},
        {question: "12. In each of the following pairs of words, which one describes you better?", options: ["A. Reserved", "B. Outgoing"], scores: [0, 1]},
        {question: "13. In each of the following pairs of words, which one describes you better?", options: ["A. Reserved", "B. Talkative"], scores: [0, 1]},
        {
            question: "14. In each of the following pairs of words, which one describes you better?",
            options: ["A. Few friends", "B. Many friends"],
            scores: [0, 1]
        },
        {question: "15. In each of the following pairs of words, which one describes you better?", options: ["A. Quiet", "B. Sociable"], scores: [0, 1]},
        {
            question: "16. In social situations, you often feel:",
            options: ["A. It’s difficult to start and maintain conversations with some people", "B. You can comfortably engage in long conversations with most people"],
            scores: [0, 1]
        },
        {
            question: "17. Can someone you’ve just met quickly identify your interests?？",
            options: ["A. Yes", "B. No, they need to get to know you better first"],
            scores: [1, 0]
        },
        {
            question: "18. When you are with a group of people, do you usually:",
            options: ["A. Talk with a few individuals you know well", "B. Join in the conversation with the whole group"],
            scores: [0, 1]
        },
        {question: "19. At social gatherings, do you:", options: ["A. Talk a lot", "B. Let others do most of the talking"], scores: [1, 0]},
        {
            question: "20. Can you engage in lengthy conversations:",
            options: ["A. Only with people who share your interests", "B. With almost anyone"],
            scores: [0, 1]
        },
        {
            question: "21. Are you:",
            options: ["A. Able to comfortably converse with anyone as needed", "B. Only able to speak freely with certain people or in specific situations"],
            scores: [1, 0]
        },

        //SN  27题
        {
            question: "22. If you were a teacher, would you prefer to teach:",
            options: ["A. Courses based on facts", "B. Courses involving theory"],
            scores: [1, 0]
        },
        {question: "23. In general, do you get along better with:", options: ["A. Imaginative people", "B. Practical people"], scores: [0, 1]},
        {question: "24. Would you rather be considered:", options: ["A. A practical person", "B. A clever person"], scores: [1, 0]},
        {question: "25. Which type of people do you prefer to be friends with?", options: ["A. Those who frequently come up with new ideas", "B. Those who are down-to-earth"], scores: [0, 1]},
        {
            question: "26. Which type of person is more attractive to you?",
            options: ["A. Someone who is quick-witted and very intelligent", "B. Someone who is practical and has a wealth of knowledge"],
            scores: [0, 1]
        },
        {question: "27. In each of the following pairs of words, which word better describes you?", options: ["A. Abstract", "B. Concrete"], scores: [0, 1]},
        {question: "28. In each of the following pairs of words, which word better describes you?", options: ["A. Facts", "B. Ideas"], scores: [1, 0]},
        {question: "29. In each of the following pairs of words, which word better describes you?", options: ["A. Theoretical", "B. Confirmatory"], scores: [0, 1]},
        {question: "30. In each of the following pairs of words, which word better describes you?", options: ["A. Statement", "B. Concept"], scores: [1, 0]},
        {question: "31. In each of the following pairs of words, which word better describes you?", options: ["A. Concept", "B. Reality"], scores: [0, 1]},
        {question: "32. In each of the following pairs of words, which word better describes you?", options: ["A. Practical", "B. Theoretical"], scores: [1, 0]},
        {
            question: "33. In each of the following pairs of words, which word better describes you?",
            options: ["A. Imaginative", "B. Pragmatic"],
            scores: [0, 1]
        },
        {question: "34. In each of the following pairs of words, which word better describes you?", options: ["A. Build", "B. Invent"], scores: [1, 0]},
        {question: "35. In each of the following pairs of words, which word better describes you?", options: ["A. Theory", "B. Facts"], scores: [0, 1]},
        {
            question: "36. In each of the following pairs of words, which word better describes you?",
            options: ["A. Reasonable", "B. Fascinating"],
            scores: [1, 0]
        },
        {
            question: "37. When doing something that many people also do, do you prefer to:",
            options: ["A. Follow conventional methods", "B. Come up with your own approach"],
            scores: [1, 0]
        },
        {question: "38. The subjects you usually prefer are:", options: ["A. Those that teach concepts and principles", "B. Those that teach facts and data"], scores: [0, 1]},
        {
            question: "39. Do you:",
            options: ["A. Follow proven methods", "B. Analyze what might still be wrong and address unresolved issues"],
            scores: [1, 0]
        },
        {
            question: "40. When reading for pleasure, do you prefer:",
            options: ["A. Unique or innovative expressions", "B. Direct and straightforward writing"],
            scores: [0, 1]
        },
        {
            question: "41. Which type of supervisor (or teacher) would you prefer to work for?",
            options: ["A. Someone who is naturally kind but often inconsistent", "B. Someone who is sharp-tongued but always logical"],
            scores: [1, 0]
        },
        {question: "42. In each of the following pairs of words, which word better describes your preference?", options: ["A. Imaginative", "B. Realistic"], scores: [0, 1]},
        {question: "43. In each of the following pairs of words, which word better describes your preference?", options: ["A. Production", "B. Design"], scores: [1, 0]},
        {question: "44. In each of the following pairs of words, which word better describes your preference?", options: ["A. Possibility", "B. Certainty"], scores: [0, 1]},
        {question: "45. In each of the following pairs of words, which word better describes your preference?", options: ["A. Manufacture", "B. Create"], scores: [1, 0]},
        {question: "46. In each of the following pairs of words, which word better describes your preference?", options: ["A. Novel", "B. Familiar"], scores: [0, 1]},
        {question: "47. In each of the following pairs of words, which word better describes your preference?", options: ["A. Concrete", "B. Abstract"], scores: [1, 0]},
        {question: "48. In each of the following pairs of words, which word better describes your preference?", options: ["A. Practical", "B. Innovative"], scores: [1, 0]},

        //TF  23题
        {question: "49. Do you often let:", options: ["A. Your emotions govern your reason.", "B. Your reason govern your emotions."], scores: [0, 1]},
        {question: "50. Do you tend to:", options: ["A. Value feelings more than logic.", "B. Value logic more than feelings."], scores: [0, 1]},
        {question: "51. In each of the following pairs of words, which word better describes your preference?", options: ["A. Gentle", "B. Firm"], scores: [0, 1]},
        {question: "52. In each of the following pairs of words, which word better describes your preference?", options: ["A. Thinking", "B. Feeling"], scores: [1, 0]},
        {question: "53. In each of the following pairs of words, which word better describes your preference?", options: ["A. Sensitive", "B. Fair"], scores: [0, 1]},
        {
            question: "54. In each of the following pairs of words, which word better describes your preference?",
            options: ["A. Convincing", "B. Touching"],
            scores: [1, 0]
        },
        {question: "55. In each of the following pairs of words, which word better describes your preference?", options: ["A. Compassion", "B. Foresight"], scores: [0, 1]},
        {question: "56. In each of the following pairs of words, which word better describes your preference?", options: ["A. Benefit", "B. Blessing"], scores: [1, 0]},
        {question: "57. In each of the following pairs of words, which word better describes your preference?", options: ["A. Warm", "B. Objective"], scores: [0, 1]},
        {question: "58. In each of the following pairs of words, which word better describes your preference?", options: ["A. Objective", "B. Enthusiastic"], scores: [1, 0]},
        {
            question: "59. In each of the following pairs of words, which word better describes your preference?",
            options: ["A. Compassionate", "B. Logical"],
            scores: [0, 1]
        },
        {
            question: "60. In each of the following pairs of words, which word better describes your preference?",
            options: ["A. Analytical", "B. Sentimental"],
            scores: [1, 0]
        },
        {question: "61. Which is considered a higher compliment or praise?", options: ["A. Someone who is consistently emotional", "B. Someone who is consistently rational"], scores: [0, 1]},
        {question: "62. Which is considered a higher compliment or praise?", options: ["A. Competent", "B. Compassionate"], scores: [1, 0]},
        {
            question: "63. When making a decision, what do you consider more important?",
            options: ["A. Judging by the facts", "B. Considering others' feelings and opinions"],
            scores: [1, 0]
        },
        {
            question: "64. In each of the following pairs of words, which word better describes your preference?",
            options: ["A. Compassionate and generous", "B. Resolute and determined"],
            scores: [0, 1]
        },
        {
            question: "65. In each of the following pairs of words, which word better describes your preference?",
            options: ["A. Fair", "B. Caring"],
            scores: [1, 0]
        },
        {question: "66. In each of the following pairs of words, which word better describes your preference?", options: ["A. Gentle", "B. Strong"], scores: [0, 1]},
        {question: "67. In each of the following pairs of words, which word better describes your preference?", options: ["A. Practical", "B. Sentimental"], scores: [1, 0]},
        {question: "68. In each of the following pairs of words, which word better describes your preference?", options: ["A. Sympathy", "B. Analysis"], scores: [0, 1]},
        {
            question: "69. In each of the following pairs of words, which word better describes your preference?",
            options: ["A. Stubborn", "B. Gentle and caring"],
            scores: [1, 0]
        },
        {
            question: "70. In each of the following pairs of words, which word better describes your preference?",
            options: ["A. Committed", "B. Determined"],
            scores: [0, 1]
        },
        {question: "71. In each of the following pairs of words, which word better describes your preference?", options: ["A. Competent", "B. Compassionate"], scores: [1, 0]},

        // JP  22题
        {
            question: "72. When you plan to be out for the whole day, do you:",
            options: ["A. Plan what you will do and when you will do it", "B. Go with the flow"],
            scores: [1, 0]
        },
        {question: "73. Do you consider yourself to be:", options: ["A. More spontaneous", "B. More organized"], scores: [0, 1]},
        {question: "74. When handling many tasks, do you prefer to:", options: ["A. Go with the flow", "B. Follow a plan"], scores: [0, 1]},
        {question: "75. Doing things according to a schedule:", options: ["A. Suits you", "B. Feels restrictive"], scores: [1, 0]},
        {
            question: "76. When you have a special task, do you prefer to:",
            options: ["A. Carefully organize and plan before starting", "B. Figure out what needs to be done as you go"],
            scores: [1, 0]
        },
        {question: "77. In most cases, do you prefer to:", options: ["A. Go with the flow", "B. Follow a schedule"], scores: [0, 1]},
        {question: "78. Do you prefer to:", options: ["A. Make plans as things develop", "B. Plan well in advance"], scores: [0, 1]},
        {
            question: "79. Which do you prefer?",
            options: ["A. Planning dates and social gatherings well in advance.", "B. Being spontaneous and doing whatever seems fun at the moment."],
            scores: [1, 0]
        },
        {
            question: "80. When planning a trip, do you prefer:",
            options: ["A. Going with the flow and acting based on the day’s mood.", "B. Knowing in advance what you will do on most of the days."],
            scores: [0, 1]
        },
        {
            question: "81. In your daily work, do you prefer:",
            options: ["A. Handling unexpected situations that require you to act quickly.", "B. Planning in advance to avoid working under pressure."],
            scores: [0, 1]
        },
        {
            question: "82. Which word suits you better in each of the following pairs?",
            options: ["A. Planned", "B. Spontaneous"],
            scores: [1, 0]
        },
        {question: "83. Which word suits you better in each of the following pairs?", options: ["A. Impulsive", "B. Decisive"], scores: [0, 1]},
        {question: "84. Which word suits you better in each of the following pairs?", options: ["A. Systematic", "B. Casual"], scores: [1, 0]},
        {
            question: "85. Which word suits you better in each of the following pairs?",
            options: ["A. Unrestricted", "B. Pre-planned"],
            scores: [0, 1]
        },
        {
            question: "86. Which word suits you better in each of the following pairs?",
            options: ["A. Methodical", "B. Laid-back"],
            scores: [1, 0]
        },
        {question: "87. Which word suits you better in each of the following pairs?", options: ["A. Systematic", "B. Spontaneous"], scores: [1, 0]},
        {
            question: "88. When you need to complete a big project within a week, do you:",
            options: ["A. List out the different tasks you need to do in sequence.", "B. Start working on it immediately."],
            scores: [1, 0]
        },
        {
            question: "89. Do you think following a schedule:",
            options: ["A. Is sometimes necessary, but generally you don't enjoy it.", "B. Is helpful in most cases and you like to do it."],
            scores: [0, 1]
        },
        {
            question: "90. Creating a to-do list for things to accomplish over the weekend:",
            options: ["A. Appeals to you.", "B. Dulls your enthusiasm."],
            scores: [1, 0]
        },
        {question: "91. Do you usually prefer:", options: ["A. Planning your social appointments in advance.", "B. Doing things spontaneously as the mood strikes."], scores: [1, 0]},
        {
            question: "92. Overall, when working on a large project, do you prefer to:",
            options: ["A. Think about what to do as you go along.", "B. Break the work down into steps first."],
            scores: [0, 1]
        },
        {question: "93. When doing tasks, do you mostly:", options: ["A. Act based on your mood for the day.", "B. Follow a planned schedule."], scores: [0, 1]},

        //多余的
        {question: "94. Do you think you are more of a:", options: ["A. Go-with-the-flow person.", "B. Plan-following person."]},
        {
            question: "95. In your daily work, do you:",
            options: ["A. Prefer handling unexpected situations that require you to act quickly.", "B. Usually plan in advance to avoid working under pressure."]
        },
        {question: "96. Setting a schedule for tasks to be done over the weekend:", options: ["A. Is necessary.", "B. Is completely unnecessary."]},
        {question: "97. I am more inclined towards:", options: ["A. Treating everyone equally.", "B. Showing empathy and care."]},
        {question: "98. When facing a problem, do you usually prefer:", options: ["A. Discussing solutions with others.", "B. Figuring out a solution on your own."]},
        {question: "99. I prefer:", options: ["A. Thinking rationally.", "B. Being sensitive and empathetic."]},
        {question: "100. I am more inclined towards:", options: ["A. Being firm.", "B. Being soft-hearted."]},
        {question: "101. I am usually:", options: ["A. Someone who easily gets along with everyone.", "B. Someone who doesn’t talk much"]},
        {question: "102. I am more inclined towards:", options: ["A. Being resolute.", "B. Being loyal."]},
        {question: "103. Which is considered a higher praise:", options: ["A. Someone who is genuine and expressive.", "B. Someone who is consistently rational."]},
        {question: "104. I am more inclined towards:", options: ["A. Being impulsive.", "B. Being decisive."]},
        {question: "105. I prefer:", options: ["A. Possibility", "B. Certainty"]},
        {question: "106. I prefer:", options: ["A. Persuading with logic.", "B. Moving with emotion."]},
        {question: "107. Following a schedule:", options: ["A. Suits me well.", "B. Restricts me."]},
        {question: "108. In a group of people, I usually:", options: ["A. Take the initiative to greet people I don't know.", "B. Wait for others to greet me."]},
        {question: "109. When reading for leisure, I prefer:", options: ["A. Unique or innovative expressions.", "B. Direct and straightforward writing from the author."]},
        {question: "110. I value:", options: ["A. Practical value.", "B. Theoretical necessity."]},
        {question: "111. I enjoy interacting with people who are:", options: ["A. Often full of surprising ideas.", "B. 讲Well-grounded and follow common sense."]},
        {question: "112. I prefer to be:", options: ["A. A person of emotion.", "B. A consistently rational person."]},
        {question: "113. I prefer to:", options: ["A. Present facts.", "B. Express ideas."]},
        {question: "114. I prefer to:", options: ["A. Novelty", "B. Familiarity"]},
        {question: "115. I think I am more of a:", options: ["A. Go-with-the-flow person.", "B. Plan-following person."]},
        {
            question: "116. When with a group of people, I usually:",
            options: ["A. Actively participate in the conversation.", "B. Wait for others to talk to me or only speak occasionally."]
        },
        {
            question: "117. In your daily work, do you:",
            options: ["A. Enjoy handling unexpected situations that require you to act quickly.", "B. Typically plan in advance to avoid working under pressure."]
        },
        {question: "118. I prefer:", options: ["A. Being organized.", "B. Making spontaneous arrangements."]},
        {question: "119. In a shopping mall, where are you most likely to go?", options: ["A. A store for popular brand clothing.", "B. A bookstore or an art gallery."]},
        {
            question: "120. Do you maintain a good image in public?",
            options: ["A. Yes, I believe it's important to maintain a good image in public.", "B. No, I don't care about others' opinions and prefer to be myself."]
        },
        {
            question: "121. When others encounter trouble, do you usually:",
            options: ["A. Offer help without hesitation.", "B. Stay out of it and prefer not to help."]
        },
        {
            question: "122. What is your attitude in conflicts or arguments?",
            options: ["A. Try to resolve the issue and maintain harmonious relationships.", "B. Enjoy arguing and have a confrontational attitude towards conflict."]
        },
        {
            question: "123. How do you respond to pressure?",
            options: ["A. You tend to become nervous and anxious.", "B. You handle pressure calmly and are not easily affected."]
        },
        {question: "124. Are your emotions easily affected by external environments?", options: ["A. Yes", "B. No"]},
        {question: "125. Do you think personal ideals should give way to social interests?", options: ["A. Yes", "B. No"]},
        {question: "126. Do you carefully consider things when solving problems?", options: ["A. Yes", "B. No"]},
        {question: "127. When facing setbacks, do you:", options: ["A. Recover quickly and face challenges positively.", "B. Feel down for a long time and find it hard to recover."]},
        {
            question: "128. Which of the following sounds more appealing to you:",
            options: ["A. Going to a crowded place with lots of social activities with your partner.", "B. Staying at home with your partner, watching an interesting movie, and enjoying your favorite takeout food."]
        },
        {question: "129. When interacting with someone, do you value:", options: ["A. Emotional compatibility.", "B. Intellectual compatibility."]},
        {question: "130. Do you tend to trust:", options: ["A. Your intuition.", "B. Your direct observations and existing experience."]},
        {question: "131. On a first date, if the other person is late, do you:", options: ["A. Feel quite upset.", "B. Not mind at all."]},
        {question: "132. Do you prefer:", options: ["A. Seeing the big picture.", "B. Mastering the details."]},
        {
            question: "133. Are you the type of person who:",
            options: ["A. Prefers living in imagination rather than in reality.", "B. Prefers living in reality rather than in imagination."]
        },
        {question: "134. Which is more common for you:", options: ["A. You arrive on time while others are late.", "B. Others arrive on time while you are late."]},
        {
            question: "135. Are you the type of person who:",
            options: ["A. Likes to focus on one task until it's completed.", "B. Enjoys doing multiple tasks simultaneously."]
        },
        {question: "136. Do you tend to draw strength from:", options: ["A. Friends.", "B. Your own thoughts."]},
        {question: "137. Is your life filled with:", options: ["A. Schedules and organization.", "B. Spontaneity and flexibility."]},
        {question: "138. Are you more likely to notice:", options: ["A. When others need emotional support.", "B. When others are being illogical."]},
        {question: "139. Do you prefer:", options: ["A. A sense of accomplishment.", "B. A sense of security."]},
        {question: "140. Do you prefer:", options: ["A. Solving problems.", "B. Identifying problems."]},
        {question: "141. Your gender:", options: ["A. Male", "B. Female"]},
    ]
};

const urlParams = new URLSearchParams(window.location.search);
const selectedSet = urlParams.get('set');
const questionList = questions[selectedSet];
const totalQuestions = questionList.length;
let currentQuestionIndex = 0;
let EIScore = 0;
let SNScore = 0;
let TFScore = 0;
let JPScore = 0;
let scoreArr = [];
let finalType = [];
let finalTypeStr="";
let selectedAnswers = new Array(totalQuestions).fill(null); // Array to store selected answers
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const prevButton = document.getElementById('prev-question');
const progressBar = document.getElementById('progress-bar');
const progressInfo = document.getElementById('infoSpan');
const numH4 = document.getElementById("numH4")
var overlay;//遮罩

document.addEventListener('DOMContentLoaded', function () {
    numH4.textContent = 1;
});

function loadQuestion() {
    const question = questionList[currentQuestionIndex];
    questionText.textContent = question.question;
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        //button.textContent = `${String.fromCharCode(65 + index)}`; // A, B, C, ...
        button.textContent = questionList[currentQuestionIndex].options[index];
        button.classList.add("option")

        // Check if this option was previously selected
        if (selectedAnswers[currentQuestionIndex] === index) {
            button.classList.add('oldSelected'); // Add selected class for previously selected answer
        }

        button.addEventListener('click', function () {
            document.querySelectorAll('.option').forEach(btn => btn.classList.remove('selected', 'oldSelected'));
            this.classList.add('selected');
            setTimeout(() => {
                document.querySelectorAll('.option').forEach(btn => btn.classList.remove('selected'));
                this.classList.add('selected');
                console.log('Pause ended, executing code...');

                // 在这里写你要执行的代码
                selectedAnswers[currentQuestionIndex] = index;
                // Enable prev button after selecting an option
                prevButton.disabled = false;
                // Update progress bar and info
                updateProgress();
                // Proceed to next question automatically
                currentQuestionIndex++;

                if (selectedSet === "set1") {
                    if (currentQuestionIndex < 48) {
                        scoreArr[currentQuestionIndex] = questionList[currentQuestionIndex].scores[index];
                        loadQuestion();
                    } else if (currentQuestionIndex === 48) {
                        for (let i = 0; i < 13; i++) {
                            EIScore += scoreArr[i];
                        }
                        for (let i = 13; i < 24; i++) {
                            SNScore += scoreArr[i];
                        }
                        for (let i = 24; i < 37; i++) {
                            TFScore += scoreArr[i];
                        }
                        for (let i = 37; i < 48; i++) {
                            JPScore += scoreArr[i];
                        }
                        if (EIScore * 2 > 13) {
                            finalType[0] = "E";
                        } else {
                            finalType[0] = "I";
                        }
                        if (SNScore * 2 > 11) {
                            finalType[1] = "S"
                        } else {
                            finalType[1] = "N"
                        }
                        if (TFScore * 2 > 13) {
                            finalType[2] = "T"
                        } else {
                            finalType[2] = "F"
                        }
                        if (JPScore * 2 > 11) {
                            finalType[3] = "J"
                        } else {
                            finalType[3] = "P"
                        }
                        finalTypeStr=finalType.join('')
                        console.log(finalTypeStr)
                        //回答完毕，遮罩跳转
                        overlay = document.getElementById('loading-overlay');
                        overlay.classList.remove('hidden');
                        overlay.style.visibility = 'visible';
                        // Hide the overlay after 1 second
                        setTimeout(function () {
                            overlay.classList.add('hidden');
                            overlay.style.visibility = 'hidden';
                            // Redirect to payment page
                            window.location.href=`payment.html?set=${selectedSet}&type=${finalTypeStr}`
                        }, 2000);//分析中。。。
                    }
                } else if (selectedSet === "set2") {
                    if (currentQuestionIndex < 93) {
                        scoreArr[currentQuestionIndex] = questionList[currentQuestionIndex].scores[index];
                        loadQuestion();
                    } else if (currentQuestionIndex === 93) {
                        for (let i = 0; i < 21; i++) {
                            EIScore += scoreArr[i];
                        }
                        for (let i = 21; i < 48; i++) {
                            SNScore += scoreArr[i];
                        }
                        for (let i = 48; i < 71; i++) {
                            TFScore += scoreArr[i];
                        }
                        for (let i = 71; i < 93; i++) {
                            JPScore += scoreArr[i];
                        }
                        if (EIScore * 2 > 21) {
                            finalType[0] = "E";
                        } else {
                            finalType[0] = "I";
                        }
                        if (SNScore * 2 > 27) {
                            finalType[1] = "S"
                        } else {
                            finalType[1] = "N"
                        }
                        if (TFScore * 2 > 23) {
                            finalType[2] = "T"
                        } else {
                            finalType[2] = "F"
                        }
                        if (JPScore * 2 > 22) {
                            finalType[3] = "J"
                        } else {
                            finalType[3] = "P"
                        }
                        finalTypeStr=finalType.join('')
                        console.log(finalTypeStr)
                        //回答完毕，遮罩跳转
                        overlay = document.getElementById('loading-overlay');
                        overlay.classList.remove('hidden');
                        overlay.style.visibility = 'visible';

                        // Hide the overlay after 1 second
                        setTimeout(function () {
                            overlay.classList.add('hidden');
                            overlay.style.visibility = 'hidden';
                            // Redirect to payment page

                            // window.location.href = 'payment.html';
                            window.location.href=`payment.html?set=${selectedSet}&type=${finalTypeStr}`
                        }, 2000);//分析中。。。
                    }
                } else if (selectedSet === "set3") {
                    {
                        if (currentQuestionIndex < 93) {
                            scoreArr[currentQuestionIndex] = questionList[currentQuestionIndex].scores[index];
                            loadQuestion();
                        } else if (currentQuestionIndex === 93) {
                            for (let i = 0; i < 21; i++) {
                                EIScore += scoreArr[i];
                            }
                            for (let i = 21; i < 48; i++) {
                                SNScore += scoreArr[i];
                            }
                            for (let i = 48; i < 71; i++) {
                                TFScore += scoreArr[i];
                            }
                            for (let i = 71; i < 93; i++) {
                                JPScore += scoreArr[i];
                            }
                            if (EIScore * 2 > 21) {
                                finalType[0] = "E";
                            } else {
                                finalType[0] = "I";
                            }
                            if (SNScore * 2 > 27) {
                                finalType[1] = "S"
                            } else {
                                finalType[1] = "N"
                            }
                            if (TFScore * 2 > 23) {
                                finalType[2] = "T"
                            } else {
                                finalType[2] = "F"
                            }
                            if (JPScore * 2 > 22) {
                                finalType[3] = "J"
                            } else {
                                finalType[3] = "P"
                            }
                            console.log(finalType)
                        } else if (currentQuestionIndex > 93 && currentQuestionIndex < 141) {
                            loadQuestion()
                        } else if (currentQuestionIndex === 141) {

                            finalTypeStr=finalType.join('')
                            console.log(finalTypeStr)
                            //回答完毕，遮罩跳转
                            overlay = document.getElementById('loading-overlay');
                            overlay.classList.remove('hidden');
                            overlay.style.visibility = 'visible';

                            // Hide the overlay after 1 second
                            setTimeout(function () {
                                overlay.classList.add('hidden');
                                overlay.style.visibility = 'hidden';
                                // Redirect to payment page
                                window.location.href=`payment.html?set=${selectedSet}&type=${finalTypeStr}`
                            }, 2000);//分析中。。。
                        }
                    }
                }
            }, 300); // 1000毫秒等于1秒
        });
        optionsContainer.appendChild(button);
    });

    // Disable prev button on first question
    prevButton.disabled = currentQuestionIndex === 0;

    // Update progress bar and info initially
    updateProgress();
}

prevButton.addEventListener('click', function () {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
});

// Function to update progress bar and info
function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100; // Calculate progress percentage
    progressBar.style.width = `${progress}%`; // Update progress bar width
    // progressInfo.textContent = `${currentQuestionIndex + 1} / ${totalQuestions}`; // Update progress info
    progressInfo.textContent = `/ ${totalQuestions}`;
    numH4.textContent = `${currentQuestionIndex + 1}`;
}

loadQuestion();
