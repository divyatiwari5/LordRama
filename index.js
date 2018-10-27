const Alexa = require('ask-sdk');

const title = "Lord Rama";

/***
 * Launch Event Handler
 * @type {{canHandle(*): *, handle(*): *}}
 */
const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'LaunchRequest'
    },
    handle(handlerInput) {
        const speechText = 'Welcome to Lord Ramas kingdom!';
        const repromptText = 'You can ask about Rama`s parents, wife, brothers, his birthplace, his Devotee - Hanuman, Ravana and his empire Lanka';
        console.log(speechText);
        //   handlerInput.attributesManager.setSessionAttributes({'name': 'investment'});
        return handlerInput.responseBuilder
            .speak(speechText + repromptText)
            .reprompt(speechText + repromptText)
            .withSimpleCard(title, speechText + repromptText)
            .getResponse();
    }
};

/***
 * About Ram Handler
 * @type {{canHandle(*): *, handle(*): *}}
 */
const AboutRamaHandler = {
    canHandle(handlerInput) {
     return handlerInput.requestEnvelope.request.type === 'IntentRequest'&&
       handlerInput.requestEnvelope.request.intent.name === 'AboutRama';
     },
    handle(handlerInput) {
        const speechText = 'Ram, also known as Ramachandra, is a major deity of Hinduism. He was the seventh avatar of the god Vishnu.';
        const repromptText = 'Ram, also known as Ramachandra, is a major deity of Hinduism. He was the seventh avatar of the god Vishnu.';
        console.log(speechText);
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .withSimpleCard(title, speechText)
            .getResponse();
    }
};

/***
 * Rama's Birthplace Handler
 * @type {{canHandle(*): *, handle(*): *}}
 */
const BirthplaceHandler = {
    canHandle(handlerInput) {
     return handlerInput.requestEnvelope.request.type === 'IntentRequest'&&
       handlerInput.requestEnvelope.request.intent.name === 'Birthplace';
     },
    handle(handlerInput) {
        const speechText = 'Rama\'s birthplace is on the banks of the Sarayu river in a city called Ayodhya in Uttar Pradesh, India.';
        const repromptText = 'Rama\'s birthplace is on the banks of the Sarayu river in a city called Ayodhya in Uttar Pradesh, India.';
        console.log(speechText);
        //   handlerInput.attributesManager.setSessionAttributes({'name': 'investment'});
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(repromptText)
            .withSimpleCard(title, speechText)
            .getResponse();
    }
};

/***
 * Ram's parent details handler
 * @type {{canHandle(*): *, handle(*): *}}
 */
const ParentalHistoryHandler = {
    canHandle(handlerInput) {
     return handlerInput.requestEnvelope.request.type === 'IntentRequest'&&
       handlerInput.requestEnvelope.request.intent.name === 'ParentalHistory';
     },
    handle(handlerInput) {
        const speechText = 'Rama was born to Kaushalya & Dashratha in Ayodhya. His father was the ruler kingdom of Kosala.';
        const repromptText = 'Rama was born to Kaushalya & Dashratha in Ayodhya. His father was the ruler kingdom of Kosala.';
        console.log(speechText);
        //   handlerInput.attributesManager.setSessionAttributes({'name': 'investment'});
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText )
            .withSimpleCard(title, speechText)
            .getResponse();
    }
};

/***
 * Ram's wife Sita Handler
 * @type {{canHandle(*): *, handle(*): *}}
 */
const WifeDetailsHandler = {
    canHandle(handlerInput) {
     return handlerInput.requestEnvelope.request.type === 'IntentRequest'&&
       handlerInput.requestEnvelope.request.intent.name === 'WifeDetails';
     },
    handle(handlerInput) {
        const speechText = 'He got married to Sita, an avatar of Sri Lakshmi. She is described as the daughter of the earth goddess, Bhūmi and the adopted daughter' +
            ' of King Janaka of Videha and his wife, Queen Sunaina. ';
        const repromptText = 'He got married to Sita, an avatar of Sri Lakshmi. She is described as the daughter of the earth goddess, Bhūmi and the adopted daughter\' +\n' +
            '            \' of King Janaka of Videha and his wife, Queen Sunaina.';
        console.log(speechText);
        return handlerInput.responseBuilder
            .speak(speechText )
            .reprompt(speechText )
            .withSimpleCard(title, speechText )
            .getResponse();
    }
};

/***
 * Hanuman Intent Handler
 * @type {{canHandle(*): *, handle(*): *}}
 */
const HanumanHandler = {
    canHandle(handlerInput) {
     return handlerInput.requestEnvelope.request.type === 'IntentRequest'&&
       handlerInput.requestEnvelope.request.intent.name === 'Hanuman';
     },
    handle(handlerInput) {
        const speechText = 'Hanuman was Rama`s ardent devotee. He was the son of Anjana and Kesari and is also son of the wind-god Vayu.';
        const repromptText = 'Hanuman was Rama`s ardent devotee. He was the son of Anjana and Kesari and is also son of the wind-god Vayu.';
        console.log(speechText);
        //   handlerInput.attributesManager.setSessionAttributes({'name': 'investment'});
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .withSimpleCard(title, speechText)
            .getResponse();
    }
};

/***
 * Lanka Intent Handler
 * @type {{canHandle(*): *, handle(*): *}}
 */
const LankaHandler = {
    canHandle(handlerInput) {
     return handlerInput.requestEnvelope.request.type === 'IntentRequest'&&
       handlerInput.requestEnvelope.request.intent.name === 'LankaDetails';
     },
    handle(handlerInput) {
        const speechText = 'Lanka is considered to be a large island-country, situated in the Indian Ocean. Lanka is the name given in Hindu epics to the island fortress capital of the legendary asura king Ravana in the epics of the Ramayana and the Mahabharata.' +
            'The ancient city of Lankapura is thought to have been burnt down by Hanuman';
        const repromptText = 'Lanka is considered to be a large island-country, situated in the Indian Ocean. Lanka is the name given in Hindu epics to the island fortress capital of the legendary asura king Ravana in the epics of the Ramayana and the Mahabharata.' +
            'The ancient city of Lankapura is thought to have been burnt down by Hanuman';
        console.log(speechText);
        //   handlerInput.attributesManager.setSessionAttributes({'name': 'investment'});
        return handlerInput.responseBuilder
            .speak(speechText )
            .reprompt(speechText )
            .withSimpleCard(title, speechText)
            .getResponse();
    }
};

/***
 *
 * Ram's Family Details Intent Handler
 * @type {{canHandle(*): *, handle(*): *}}
 */
const FamilyHandler = {
    canHandle(handlerInput) {
     return handlerInput.requestEnvelope.request.type === 'IntentRequest'&&
       handlerInput.requestEnvelope.request.intent.name === 'FamilyDetails';
     },
    handle(handlerInput) {
        const speechText = 'He had 3 siblings: Lakshmana, Bharata, and Shatrughna. Lakshmana married to Sita`s sister Urmila. Bharata married to Mandavi & Shatrughna married to Shrutakirti.';
        const repromptText = 'He had 3 siblings: Lakshmana, Bharata, and Shatrughna. Lakshmana married to Sita`s sister Urmila. Bharata married to Mandavi & Shatrughna married to Shrutakirti.';
        console.log(speechText);
        //   handlerInput.attributesManager.setSessionAttributes({'name': 'investment'});
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .withSimpleCard(title, speechText)
            .getResponse();
    }
};

/***
 * Ravana Event Handler
 * @type {{canHandle(*): *, handle(*): *}}
 */
const RavanaHandler = {
    canHandle(handlerInput) {
     return handlerInput.requestEnvelope.request.type === 'IntentRequest'&&
       handlerInput.requestEnvelope.request.intent.name === 'Ravana';
     },
    handle(handlerInput) {
        const speechText = 'Ravana was a follower of Shiva, a great scholar, a capable ruler and a maestro of the veena, but someone who wished to overpower the Devas.' +
            ' His ten heads represent his knowledge of the six shastras and the four Vedas.';
        const repromptText = 'Ravana was a follower of Shiva, a great scholar, a capable ruler and a maestro of the veena, but someone who wished to overpower the Devas. ' +
            'His ten heads represent his knowledge of the six shastras and the four Vedas.';
        console.log(speechText);
        //   handlerInput.attributesManager.setSessionAttributes({'name': 'investment'});
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(repromptText)
            .withSimpleCard(title, speechText)
            .getResponse();
    }
};

/***
 * Session Ended Request Handler
 * @type {{canHandle(*): *, handle(*): *}}
 */
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        const speech = 'Bye! Talk to you soon!';
        return handlerInput.responseBuilder
            .speak(speech)
            .getResponse();
    }
};

/***
 * Error Handler
 * @type {{canHandle(): boolean, handle(*, *): *}}
 */
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`Error handled: ${error.message}`);

        return handlerInput.responseBuilder
            .speak('Sorry, I can\'t understand the command. Please say again.')
            .reprompt('Sorry, I can\'t understand the command. Please say again.')
            .getResponse();
    }
};

exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        AboutRamaHandler,
        BirthplaceHandler,
        ParentalHistoryHandler,
        WifeDetailsHandler,
        HanumanHandler,
        LankaHandler,
        FamilyHandler,
        RavanaHandler,
        SessionEndedRequestHandler,
    )
    .addResponseInterceptors()
    .addErrorHandlers(ErrorHandler)
    .lambda();