/* data.js - all content for the MYP 2 Command Terms website.
   Every term has the same structure so one page template can display any term.
   Question kinds: "recall" (remember the meaning) or "apply" (use the term).
   Question types: "mcq" (choose an answer) or "spot" (find the problem in a weak answer). */

function Q(kind, type, q, opts, a, why, extra) {
  return Object.assign({ kind: kind, type: type, q: q, opts: opts, a: a, why: why }, extra || {});
}

const TERMS = [
{
  id: "analyse", name: "Analyse",
  plain: "Break something into parts and show how the parts connect.",
  definition: "Break information down into its main parts to bring out its essential elements or structure, and show how those parts relate.",
  does: ["Split the topic into its key parts.", "Say what each part shows or does.", "Show how the parts link together."],
  mistake: "Writing about the topic as one whole, or listing parts without linking them.",
  confused: { term: "describe", diff: "Describe says what something is like. Analyse splits it into parts and shows how they connect." },
  example: "Analyse the effects of deforestation on a local area.",
  model: [
    { t: "One part is the soil. Without tree roots to hold it together, heavy rain washes the soil away, which makes farming harder.", tag: "Part 1: soil, with a link" },
    { t: "A second part is wildlife. Cutting down trees destroys habitats, so animals leave and the food chain is damaged.", tag: "Part 2: wildlife, with a link" },
    { t: "These parts are connected: less soil means fewer plants, and fewer plants means less food for animals, so each effect makes the others worse.", tag: "Shows how the parts connect" }
  ],
  quiz: [
    Q("recall", "mcq", "Which answer best fits what 'analyse' asks you to do?",
      ["Break something into parts and show how they connect", "Give a short answer without explanation", "Give your own opinion", "List facts in any order"], 0,
      "Analyse is about parts and the links between them."),
    Q("apply", "mcq", "Which answer responds to: 'Analyse why rivers were important to ancient cities.'?",
      ["Rivers gave water, so farming could feed many people. That extra food let cities grow, and the river also carried traders, which brought wealth.",
       "Rivers were important to ancient cities.",
       "Rivers are long bodies of water that flow towards the sea.",
       "Water, food and trade."], 0,
      "It splits the topic into parts (water, food, trade) and links them. An answer that only names the parts (water, food, trade) does not connect them."),
    Q("apply", "spot", "What is the main problem with this answer to 'Analyse the effects of deforestation'?",
      ["It treats deforestation as one whole and never separates it into parts", "It is too long", "It gives the wrong command term", "It has no date"], 0,
      "Analyse needs separate parts (such as soil, wildlife, climate) and the links between them.",
      { weak: "Deforestation is when forests are cut down. It happens in many countries. It is a big problem for the world." }),
    Q("apply", "mcq", "Which answer is the right type for: 'Analyse the factors that help a city grow quickly.'? (You may not have studied this yet. Focus on the type of answer.)",
      ["Jobs attract workers, and workers need homes and shops, which creates more jobs. Good roads and railways bring in goods and people, so the city keeps growing.",
       "Cities grow.",
       "A city is a large settlement where many people live and work.",
       "I think big cities are better than small towns."], 0,
      "It separates factors (jobs, transport) and shows how they connect.", { fresh: true })
  ]
},
{
  id: "compare", name: "Compare",
  plain: "Show how two things are alike, talking about both together.",
  definition: "Give an account of the similarities between two or more things, referring to all of them throughout. If the question says 'compare and contrast', include the differences too.",
  does: ["Choose clear points where the things are alike.", "Write about both things in each point.", "Use link words such as both, similarly and in the same way."],
  mistake: "Describing one thing fully, then the other, without ever linking them.",
  confused: { term: "contrast", diff: "Compare is about similarities. Contrast is about differences." },
  example: "Compare the River Nile and the River Indus as places where early civilisations began.",
  model: [
    { t: "Both the Nile and the Indus flooded every year, leaving behind fertile soil.", tag: "Names both, gives a similarity" },
    { t: "This meant that farmers along both rivers could grow more food than they needed, so towns and cities could develop.", tag: "Develops the similarity, still about both" },
    { t: "Similarly, both rivers worked as routes for trade, so goods and ideas could travel between settlements.", tag: "Second similarity, both rivers named" }
  ],
  quiz: [
    Q("recall", "mcq", "What is a good 'compare' answer like?",
      ["It refers to both things throughout and shows how they are alike", "It describes one thing fully and then the other", "It only lists differences", "It gives one short fact"], 0,
      "Compare means keeping both things in view and showing similarities."),
    Q("apply", "mcq", "Which answer responds to: 'Compare the Nile and the Indus as river valleys.'?",
      ["Both rivers flooded each year and left fertile soil, so farming developed along both.",
       "The Nile flooded every year and left fertile soil for farming. The Indus is a long river that begins in the Himalayas and flows through Pakistan.",
       "The Nile is in Africa but the Indus is in Asia.",
       "Rivers are useful."], 0,
      "The correct answer links both rivers in one point. An answer that talks about each river separately is not a comparison."),
    Q("apply", "spot", "What is the main problem with this answer to 'Compare how ancient Egypt and ancient Greece were governed'?",
      ["It describes each place separately and never links them", "It is far too short", "It gives an opinion", "It uses the wrong dates"], 0,
      "A comparison needs link words and both places in the same point.",
      { weak: "Egypt was ruled by pharaohs, who were kings and were seen as gods. Greece had city-states such as Athens and Sparta, and each one had its own government." }),
    Q("apply", "mcq", "Which answer is the right type for: 'Compare Japan and the United Kingdom as island nations that depend on sea trade.'? (Focus on the type of answer.)",
      ["Both are island nations with no land borders, so both rely on ships to bring in and send out goods.",
       "Japan has many mountains and earthquakes. The United Kingdom has a mild, wet climate.",
       "Japan is in Asia. The United Kingdom is in Europe.",
       "Trade is good for countries."], 0,
      "It uses 'both' and shows a similarity that applies to each country.", { fresh: true })
  ]
},
{
  id: "contrast", name: "Contrast",
  plain: "Show how two things are different, talking about both together.",
  definition: "Give an account of the differences between two or more things, referring to all of them throughout.",
  does: ["Choose clear points where the things differ.", "Write about both things for each point.", "Use link words such as whereas, but and on the other hand."],
  mistake: "Listing facts about each thing separately, so the differences are never made clear.",
  confused: { term: "compare", diff: "Contrast is about differences. Compare is about similarities." },
  example: "Contrast life in a large city with life in a village in India.",
  model: [
    { t: "In a city, most people work in offices, factories or shops, whereas in a village most people work in farming.", tag: "Difference 1, both named" },
    { t: "Cities have crowded housing and buses or trains, but villages usually have more open space, and people often walk or cycle.", tag: "Difference 2, both named" },
    { t: "City families can reach hospitals and schools easily, while village families often have to travel further to reach them.", tag: "Difference 3, both named" }
  ],
  quiz: [
    Q("recall", "mcq", "What does 'contrast' ask for?",
      ["The differences between things, referring to both", "The similarities between things", "The causes of something", "A short summary"], 0,
      "Contrast is about differences."),
    Q("apply", "mcq", "Which answer responds to: 'Contrast the climate of a desert and a rainforest.'?",
      ["Deserts get very little rain, whereas rainforests get heavy rain nearly every day.",
       "Both are important habitats that many plants and animals depend on.",
       "Deserts are hot.",
       "Climate is the weather in a place over a long time."], 0,
      "It sets the two climates against each other. An answer that gives a similarity is answering 'compare', not 'contrast'."),
    Q("apply", "spot", "What is the main problem with this answer to 'Contrast a rainforest and a desert'?",
      ["It describes each place but never sets them against each other", "It gives too many differences", "It states the wrong place", "It is too polite"], 0,
      "Each difference should name both places in the same sentence, using words like 'whereas'.",
      { weak: "In a rainforest it rains nearly every day and there are tall trees and many animals. Deserts are dry and sandy." }),
    Q("apply", "mcq", "Which answer is the right type for: 'Contrast a hunter-gatherer way of life with farming.'? (Focus on the type of answer.)",
      ["Hunter-gatherers moved from place to place to find food, whereas farmers stayed in one place to look after crops and animals.",
       "Both ways of life are ways of getting food.",
       "Hunter-gatherers lived a long time ago.",
       "Farming is better because it is modern."], 0,
      "It names both ways of life and shows a clear difference.", { fresh: true })
  ]
},
{
  id: "define", name: "Define",
  plain: "Give the exact meaning of a word or idea.",
  definition: "Give the precise meaning of a word, phrase or concept.",
  does: ["Say exactly what the word or idea means.", "Use accurate subject words in one or two sentences.", "Do not give only an example."],
  mistake: "Giving an example or a vague sentence instead of the exact meaning.",
  confused: { term: "describe", diff: "Define gives the exact meaning. Describe gives a detailed picture of something." },
  example: "Define the term 'tributary'.",
  model: [
    { t: "A tributary is a smaller river or stream", tag: "Says what it is" },
    { t: "that flows into a larger river or into a lake.", tag: "Gives the exact meaning" }
  ],
  quiz: [
    Q("recall", "mcq", "What makes a good answer to 'define'?",
      ["The precise meaning of the word", "A long list of examples", "Reasons why it matters", "Your opinion about it"], 0,
      "Define asks for the exact meaning."),
    Q("apply", "mcq", "Which answer responds to: 'Define the word monsoon.'?",
      ["A seasonal wind that changes direction and brings heavy rain to a region.", "Monsoons are good for farmers.", "The monsoon happens in India in June.", "It rains a lot."], 0,
      "It gives the exact meaning. The others give an opinion, an example or something vague."),
    Q("apply", "spot", "What is the main problem with this answer to 'Define democracy'?",
      ["It gives an example instead of the meaning", "It is too long", "It uses a wrong date", "It does not name a country"], 0,
      "A definition says what the word means. Saying where it happens is only an example.",
      { weak: "Democracy is like in India, where people go and vote." }),
    Q("apply", "mcq", "Which answer is the right type for: 'Define the term tariff.'? (You may not know this word yet. Focus on the type of answer.)",
      ["A tax charged on goods that are brought into or sent out of a country.", "Tariffs make things expensive.", "Some countries charge tariffs.", "A tariff is a kind of trade."], 0,
      "It states exactly what a tariff is.", { fresh: true })
  ]
},
{
  id: "describe", name: "Describe",
  plain: "Give a detailed picture of what something is like or how it happens.",
  definition: "Give a detailed account or picture of a situation, event, pattern or process.",
  does: ["Give several accurate details, in a sensible order.", "Use specific facts, not general words.", "Say what it is like or what happened. You do not need to give reasons."],
  mistake: "Giving reasons (explaining) or writing only one short line.",
  confused: { term: "explain", diff: "Describe says what happens. Explain says why it happens." },
  example: "Describe the main features of the monsoon season in India.",
  model: [
    { t: "The monsoon usually begins in June, when winds from the south-west bring moist air from the Indian Ocean.", tag: "Detail 1: when it starts" },
    { t: "Heavy rain then falls across much of the country for several weeks, and rivers rise.", tag: "Detail 2: what it is like" },
    { t: "By September the winds weaken and the rain slowly moves away.", tag: "Detail 3: how it ends" }
  ],
  quiz: [
    Q("recall", "mcq", "Which best describes what 'describe' needs?",
      ["A detailed account of what something is like or what happened", "The reasons why it happened", "A single word", "A decision about which is better"], 0,
      "Describe is about detail, not reasons."),
    Q("apply", "mcq", "Which answer responds to: 'Describe the layout of an Indus Valley city.'?",
      ["The cities had straight streets in a grid pattern, brick houses of similar size, and covered drains along the streets.",
       "The cities were planned this way because the people wanted to stay clean and healthy.",
       "Indus Valley cities.",
       "Indus Valley cities were better than other cities."], 0,
      "It gives specific details. An answer that gives a reason is answering 'explain', not 'describe'."),
    Q("apply", "spot", "What is the main problem with this answer to 'Describe how a river changes from its source to its mouth'?",
      ["It gives a reason instead of describing the changes in detail", "It names too many places", "It is too detailed", "It uses the wrong river"], 0,
      "Describe asks what the changes are, with details such as width, depth and speed.",
      { weak: "The river changes because the land gets flatter, so the water slows down." }),
    Q("apply", "mcq", "Which answer is the right type for: 'Describe the appearance of a coral reef.'? (Focus on the type of answer.)",
      ["A coral reef is made of hard, colourful structures in shallow tropical water, with branching and rounded shapes and many fish living around them.",
       "Coral reefs form because tiny animals called polyps build hard skeletons over many years.",
       "Coral reefs are important.",
       "Coral."], 0,
      "It gives several specific details about how a reef looks.", { fresh: true })
  ]
},
{
  id: "discuss", name: "Discuss",
  plain: "Look at different sides of an issue and reach a supported conclusion.",
  definition: "Offer a considered and balanced review that includes a range of arguments or factors. Any opinion or conclusion should be clear and supported by evidence.",
  does: ["Give arguments for and against, or several points of view.", "Support each with evidence or an example.", "Finish with a clear conclusion that you can support."],
  mistake: "Giving only one side, or finishing without a conclusion.",
  confused: { term: "evaluate", diff: "Discuss looks at different views. Evaluate judges how strong, good or successful something is." },
  example: "Discuss whether building a dam on a river is a good idea.",
  model: [
    { t: "A dam can help people because it stores water for farming and can produce electricity.", tag: "Argument for, with a reason" },
    { t: "However, a dam can flood villages and farmland, forcing people to move, and it can harm fish by blocking the river.", tag: "Argument against, with evidence" },
    { t: "Overall, a dam is most worthwhile when it helps many people and when families who must move are properly supported.", tag: "Supported conclusion" }
  ],
  quiz: [
    Q("recall", "mcq", "What should a 'discuss' answer include?",
      ["Several sides of the issue and a conclusion that is supported", "Only the side you agree with", "A list of facts with no conclusion", "One short sentence"], 0,
      "Discuss needs balance and a supported conclusion."),
    Q("apply", "mcq", "Which answer responds to: 'Discuss whether cities should limit the number of cars.'?",
      ["Limiting cars would reduce pollution and traffic. However, people who live far from public transport still need cars for work. Overall, limits work best where buses and trains are reliable.",
       "Cars are bad.",
       "Cars cause pollution, traffic jams and accidents, so cities must ban them.",
       "A car is a vehicle with four wheels."], 0,
      "It gives both sides, uses evidence, and ends with a conclusion. An answer that gives only one side is not balanced."),
    Q("apply", "spot", "What is the main problem with this answer to 'Discuss whether building a dam is a good idea'?",
      ["It is one-sided and gives no arguments against", "It is too balanced", "It defines the word dam", "It has no examples of rivers"], 0,
      "Discuss needs more than one point of view.",
      { weak: "Dams are good because they store water and make electricity. They also help farmers. So dams are a good idea." }),
    Q("apply", "mcq", "Which answer is the right type for: 'Discuss the benefits and drawbacks of tourism for a small island.'? (Focus on the type of answer.)",
      ["Tourism brings jobs and money, but it can also damage beaches and raise prices for local people. Overall, it helps most when visitor numbers are controlled.",
       "Tourism is good.",
       "Tourism means people travelling for pleasure.",
       "Tourists visit islands every year."], 0,
      "It gives benefits, drawbacks and a conclusion.", { fresh: true })
  ]
},
{
  id: "evaluate", name: "Evaluate",
  plain: "Judge how good or successful something is by weighing strengths and limits.",
  definition: "Make a judgement about something by weighing its strengths and its limitations.",
  does: ["Give strengths and limitations, with evidence.", "Weigh them against each other.", "Give a clear judgement and say why."],
  mistake: "Describing the thing without making any judgement, or only saying that it is good or bad.",
  confused: { term: "discuss", diff: "Evaluate ends with a judgement about how successful or strong something is. Discuss reviews different views." },
  example: "Evaluate the success of terrace farming as a way to farm on steep hillsides.",
  model: [
    { t: "Terrace farming is successful because it creates flat areas on steep slopes, so farmers can grow crops and less soil is washed away.", tag: "Strength, with a reason" },
    { t: "However, terraces take a lot of work to build and repair, and they can collapse in very heavy rain.", tag: "Limitation, with evidence" },
    { t: "Overall, terraces are a successful method for hill communities because the benefits outweigh the effort, although they need constant care.", tag: "Clear judgement, with a reason" }
  ],
  quiz: [
    Q("recall", "mcq", "What does 'evaluate' ask you to do?",
      ["Weigh strengths and limitations and reach a judgement", "Give the exact meaning", "List only differences", "Name one fact"], 0,
      "Evaluate always needs a judgement."),
    Q("apply", "mcq", "Which answer responds to: 'Evaluate the success of flood defences in a town.'?",
      ["Flood walls protect homes during most floods. However, they are expensive and may fail in extreme floods. Overall, they are worthwhile for towns at high risk.",
       "Flood defences are walls built beside rivers.",
       "Flood defences are good.",
       "Floods happen when rivers overflow."], 0,
      "It weighs strengths and limitations and then judges."),
    Q("apply", "spot", "What is the main problem with this answer to 'Evaluate the success of terrace farming'?",
      ["It only describes terraces and makes no judgement", "It gives too many limitations", "It compares two countries", "It is too negative"], 0,
      "Evaluate needs strengths, limitations and a judgement.",
      { weak: "Terrace farming is a method where farmers cut flat steps into a hillside. The steps are used to grow rice. It is used in China and India." }),
    Q("apply", "mcq", "Which answer is the right type for: 'Evaluate how effective recycling programmes are at reducing waste.'? (Focus on the type of answer.)",
      ["Recycling keeps materials out of landfill and saves resources. However, many items are put in the wrong bin and cannot be recycled. Overall, it helps, but only if people sort waste correctly.",
       "Recycling is when waste is turned into new products.",
       "Recycling is good for the Earth.",
       "People recycle bottles."], 0,
      "It gives strengths, a limitation and a judgement.", { fresh: true })
  ]
},
{
  id: "explain", name: "Explain",
  plain: "Say what happened and why. Give reasons or causes.",
  definition: "Give a detailed account that includes reasons or causes.",
  does: ["Make a point.", "Give the reason or cause, using words like because, so and which led to.", "Link your reason back to the question."],
  mistake: "Only describing what happened, without saying why.",
  confused: { term: "describe", diff: "Explain gives the reasons why. Describe only says what happened." },
  example: "Explain why most ancient civilisations began near rivers.",
  model: [
    { t: "Ancient civilisations began near rivers because rivers gave people fresh water for drinking and farming.", tag: "Point and reason" },
    { t: "Regular floods left fertile soil, so farmers could grow extra food, which allowed towns and cities to grow.", tag: "Reason, with a chain of causes" },
    { t: "Rivers also worked as transport routes, so people could trade and share ideas.", tag: "Another reason" }
  ],
  quiz: [
    Q("recall", "mcq", "Which link word helps you give a reason in an 'explain' answer?",
      ["because", "and then", "also", "however"], 0,
      "'Because' links an event to its cause."),
    Q("apply", "mcq", "Which answer responds to: 'Explain why the Indus cities needed drains.'?",
      ["Drains carried waste water away from houses, so disease was less likely to spread through the city.",
       "The Indus cities had drains along the streets and in many houses.",
       "Drains.",
       "Drains are interesting."], 0,
      "It gives a reason. An answer that only describes the drains does not say why they were needed."),
    Q("apply", "spot", "What is the main problem with this answer to 'Explain why the monsoon is important to farmers in India'?",
      ["It describes the monsoon but gives no reasons", "It is too short to be correct", "It gives an opinion", "It names no month"], 0,
      "Explain needs 'why', for example that rain fills fields and wells so crops can grow.",
      { weak: "The monsoon brings heavy rain in June. It lasts until September. There are floods in some places." }),
    Q("apply", "mcq", "Which answer is the right type for: 'Explain why many people in Bangladesh live with regular floods.'? (Focus on the type of answer.)",
      ["Much of the country is low delta land where big rivers meet the sea, and the fertile soil lets people farm, so many families stay despite the floods.",
       "Bangladesh has many rivers and gets floods every year.",
       "Floods are dangerous.",
       "Bangladesh."], 0,
      "It gives reasons and links them with 'and' and 'so'.", { fresh: true })
  ]
},
{
  id: "identify", name: "Identify",
  plain: "Pick out the right answer from what you are given and name it briefly.",
  definition: "Provide an answer from a number of possibilities, or recognise and state briefly a distinguishing fact or feature.",
  does: ["Look carefully at what you are given (a description, source or list).", "Pick out the correct answer.", "Name it briefly without explaining."],
  mistake: "Explaining or describing when you only need to name the correct answer.",
  confused: { term: "state", diff: "Identify picks an answer out of what you are given. State gives a short fact you already know." },
  example: "Identify the landform described here: 'a large, flat area beside a river that floods regularly and has fertile soil.'",
  model: [
    { t: "A floodplain.", tag: "Names the correct answer, nothing extra" }
  ],
  quiz: [
    Q("recall", "mcq", "What does 'identify' usually ask you to do?",
      ["Pick out and name the right answer from what is given", "Give reasons", "Compare two things", "Give your opinion"], 0,
      "Identify means recognise and name."),
    Q("apply", "mcq", "Which answer responds to: 'Identify the hazard described: \"The ground shakes suddenly because rock beneath the surface moves along a fault.\"'?",
      ["An earthquake.", "Earthquakes happen when tectonic plates move, which can damage buildings and cause tsunamis.", "A hazard.", "It is dangerous and many people die."], 0,
      "It names the correct answer briefly."),
    Q("apply", "spot", "What is the main problem with this answer to 'Identify one feature of a desert climate'?",
      ["It explains reasons when only one feature needed to be named", "It names the wrong climate", "It is too short", "It has no example"], 0,
      "Identify only needs the feature named, such as 'very little rainfall'.",
      { weak: "Deserts get very little rain, because the air above them is sinking and warm so clouds do not form, and this also affects the plants and animals that live there." }),
    Q("apply", "mcq", "Which answer is the right type for: 'Identify the type of government described: \"One person, a monarch, holds all the power, and the position passes down within one family.\"'? (Focus on the type of answer.)",
      ["A monarchy.", "A democracy, because people vote for their leaders.", "There are many types of government and each has good and bad points.", "The government is powerful."], 0,
      "It names the correct answer from the description.", { fresh: true })
  ]
},
{
  id: "outline", name: "Outline",
  plain: "Give a short summary of the main points only.",
  definition: "Give a brief account or summary.",
  does: ["Choose only the main points.", "Write each point briefly.", "Do not add long details or examples to each point."],
  mistake: "Writing too much detail, or giving only one point.",
  confused: { term: "describe", diff: "Outline is brief and covers the main points. Describe gives much more detail." },
  example: "Outline the main ways the River Nile was useful to ancient Egyptians.",
  model: [
    { t: "It gave water for drinking and farming.", tag: "Main point 1, brief" },
    { t: "Its yearly floods left fertile soil.", tag: "Main point 2, brief" },
    { t: "It was a route for trade and travel.", tag: "Main point 3, brief" }
  ],
  quiz: [
    Q("recall", "mcq", "What is the main difference between 'outline' and 'describe'?",
      ["Outline is brief and covers main points, while describe gives more detail", "Outline needs reasons, describe does not", "Outline needs your opinion", "They mean the same thing"], 0,
      "Outline = main points only."),
    Q("apply", "mcq", "Which answer responds to: 'Outline two effects of deforestation.'?",
      ["Soil erosion increases, and animals lose their habitat.",
       "Deforestation has many effects. When forests are cleared for farming, the soil loses the roots that hold it together, so heavy rain washes the topsoil into rivers, which blocks them and floods nearby villages every year.",
       "Deforestation is bad.",
       "Soil erosion."], 0,
      "It gives two brief points. An answer with long detail is too much for 'outline', and an answer with only one point is too little."),
    Q("apply", "spot", "What is the main problem with this answer to 'Outline two reasons people move from villages to cities'?",
      ["It gives one reason in too much detail instead of two brief points", "It is too short", "It does not mention villages", "It only states the answer"], 0,
      "Outline needs two brief points, not a long explanation of one.",
      { weak: "People move to cities for jobs. Cities have factories and offices where there are lots of jobs, and many companies hire workers every day, and the salaries are higher than they are in the villages, so families can save more money." }),
    Q("apply", "mcq", "Which answer is the right type for: 'Outline how glaciers shape a valley.'? (Focus on the type of answer.)",
      ["Glaciers wear away rock and carve wide, U-shaped valleys. They carry rock and drop it when they melt.",
       "Glaciers are large masses of ice.",
       "Glaciers shape valleys.",
       "Glaciers form when snow builds up over thousands of years and is slowly squeezed into ice, which then begins to flow downhill under its own weight, scraping against the rock as it moves."], 0,
      "It gives the main points briefly.", { fresh: true })
  ]
},
{
  id: "state", name: "State",
  plain: "Give a short, specific answer. No explanation needed.",
  definition: "Give a specific name, value or other brief answer without explanation.",
  does: ["Give one short, clear answer.", "Do not add reasons or extra detail.", "Check that you gave what was asked for (a name, place, date or fact)."],
  mistake: "Writing too much and adding reasons nobody asked for.",
  confused: { term: "explain", diff: "State gives only the answer. Explain gives the answer and the reasons." },
  example: "State the river on which ancient Egyptian civilisation developed.",
  model: [
    { t: "The River Nile.", tag: "Short, specific answer" }
  ],
  quiz: [
    Q("recall", "mcq", "What does 'state' ask you to do?",
      ["Give a short answer without explanation", "Give reasons for your answer", "Compare two things", "Give a balanced judgement"], 0,
      "State = short answer, no explanation."),
    Q("apply", "mcq", "Which answer responds to: 'State one natural resource found in India.'?",
      ["Coal.", "Coal, which formed over millions of years and is burned to make electricity, which is why India depends on it.", "Natural resources are important because people use them.", "India has many resources."], 0,
      "It is short and specific. An answer that adds reasons gives more than 'state' asks for."),
    Q("apply", "spot", "What is the main problem with this answer to 'State the continent where Brazil is located'?",
      ["It gives much more than was needed", "It names the wrong continent", "It does not name anything", "It has no punctuation"], 0,
      "State only needs the answer: South America.",
      { weak: "Brazil is in South America. It is a very large country with the Amazon rainforest, and it has many different people and cultures, and many of them speak Portuguese." }),
    Q("apply", "mcq", "Which answer is the right type for: 'State one cause of the shrinking of the Aral Sea.'? (You may not have studied this. Focus on the type of answer.)",
      ["Rivers that fed it were diverted to water farms.",
       "The Aral Sea is in Central Asia and was once one of the largest lakes in the world. When rivers feeding it were diverted for farming, the water level dropped, fishing towns lost their work and dust storms became common.",
       "Farming is good and bad.",
       "It is a sea."], 0,
      "It is one short, specific cause with nothing extra.", { fresh: true })
  ]
},
{
  id: "summarise", name: "Summarise",
  plain: "Pull out the main idea in your own words, in a few words.",
  definition: "Pick out the general theme or the major points, leaving out the small details.",
  does: ["Find the main idea or major points.", "Leave out small details and examples.", "Use your own words and keep it short."],
  mistake: "Copying sentences from the text, or including every detail.",
  confused: { term: "outline", diff: "Summarise gives the overall main idea in your own words. Outline lists the main points or stages." },
  example: "Summarise how the Silk Road helped different civilisations.",
  model: [
    { t: "The Silk Road linked China with the Mediterranean, so goods such as silk and spices moved west.", tag: "Main idea, own words" },
    { t: "Ideas, religions and technology also spread in both directions.", tag: "Second major point, no small details" }
  ],
  quiz: [
    Q("recall", "mcq", "What does 'summarise' ask you to do?",
      ["Pull out the main idea in your own words, leaving small details out", "Copy the most important sentences", "Explain every detail", "Decide which is better"], 0,
      "Summarise means shorter, in your own words."),
    Q("apply", "mcq", "Read this passage. 'The Nile floods every year. When the water goes down, it leaves rich black soil. Farmers plant crops in this soil. Because of this, Egypt could grow enough food to support large cities.' Which is the best summary?",
      ["The Nile's yearly floods left fertile soil, which let Egypt grow enough food for large cities.",
       "The Nile floods every year. When the water goes down, it leaves rich black soil.",
       "The Nile is a river in Africa that flows north to the Mediterranean Sea.",
       "Farmers plant crops."], 0,
      "It states the main idea in new words. An answer that copies the passage is not a summary in your own words."),
    Q("apply", "spot", "The task was to summarise the Nile passage in one sentence. What is the main problem with this answer?",
      ["It copies sentences from the passage instead of using its own words", "It is too short", "It adds an opinion", "It uses the wrong river"], 0,
      "A summary should be in your own words and shorter than the original.",
      { weak: "The Nile floods every year. When the water goes down it leaves rich black soil. Farmers plant crops in this soil. Egypt could grow enough food." }),
    Q("apply", "mcq", "Read this passage. 'In the 1960s, the rivers feeding the Aral Sea were diverted to water cotton fields. Less water reached the sea, so it shrank and became saltier. Fish died, fishing towns lost their jobs, and dust storms increased.' Which is the best summary?",
      ["Diverting rivers for farming shrank the Aral Sea, which harmed fishing and the local environment.",
       "The Aral Sea shrank and became saltier.",
       "In the 1960s, the rivers feeding the Aral Sea were diverted to water cotton fields.",
       "Fish died and dust storms increased."], 0,
      "It gives the overall idea in a short sentence of its own.", { fresh: true })
  ]
}
];
