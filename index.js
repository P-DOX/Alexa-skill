'use strict';
const Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: const APP_ID = 'amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1';
const APP_ID = 'amzn1.ask.skill.______________________';

const SKILL_NAME = 'Strange Fact about INDIA';
const GET_FACT_MESSAGE = "Here's your amazing fact about India: ";
const HELP_MESSAGE = 'You can say tell me a Fact about India ,or,Indian fact, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!Hope you enjoyed the amazing facts about India.';

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data
//=========================================================================================================================================
const data = [
    'India has the largest postal network in the world with over 1, 55,015 post offices. A single post office on an average serves a population of 7,175 people. The floating post office in Dal Lake, Srinagar, was inaugurated in August 2011.',
    'The 2011 Kumbh Mela was the largest gathering of people with over 75 million pilgrims. The gathering was so huge that the crowd was visible from space.',
    'Mawsynram, a village on the Khasi Hills, Meghalaya, receives the highest recorded average rainfall in the world. Cherrapunji, also a part of Meghalaya, holds the record for the most rainfall in the calendar year of 1861.',
    'Shampoo was invented in India, not the commercial liquid ones but the method by use of herbs. The word shampoo itself has been derived from the Sanskrit word champu, which means to massage.',
    'India has won all 5 mens Kabaddi World Cups held till now and have been undefeated throughout these tournaments. The Indian womens team has also won all Kabaddi World Cups held till date.',
    'The father of Indias missile programme had visited Switzerland back in 2006. Upon his arrival, Switzerland declared May 26th as Science Day.',
    'Be it because of religious reasons or personal choices or both, around 20-40% of Indians are vegetarians, making it the largest vegetarian-friendly country in the world.',
    'Shakuntla Devi was given this title after she demonstrated the calculation of two 13 digit numbers: 7,686,369,774,870 × 2,465,099,745,779 which were picked at random. She answered correctly within 28 seconds.',
    'Freddie Mercury, the legendary singer of the rock band "Queen" was born a Parsi with the name Farrokh Bulsara while the famous Oscar winning Hollywood star Ben Kingsley was born Krishna Pandit Bhanji.',
    'Initially, diamonds were only found in the alluvial deposits in Guntur and Krishna District of the Krishna River Delta. Until diamonds were found in Brazil during the 18th century, India led the world in diamond production.',
    'After defeating Germany 8-1 in the 1936 Berlin Olympics, Major Dhyan Chand, the wizard of hockey, was summoned by Hitler. He was promised German citizenship, a high post in the German military and the chance to play for the German national side. Dhyan Chand however declined the offer.',
];

//=========================================================================================================================================
//Editing anything below this line might break your skill.
//=========================================================================================================================================

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        const factArr = data;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const speechOutput = GET_FACT_MESSAGE + randomFact;

        this.response.cardRenderer(SKILL_NAME, randomFact);
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
};

exports.handler = function (event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute(); 
};
