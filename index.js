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
        const speechText = 'Welcome to Lord Rama`s kingdom!';
        const repromptText = 'You can ask about Rama`s wife, brothers, his birthplace, his Devotee - Hanuman, Ravana and his empire Lanka, Bird Jatayu, Ravana`s sister Shurpankha';
        console.log(speechText);
        return handlerInput.responseBuilder
            .speak(speechText + repromptText)
            .reprompt(speechText + repromptText)
            .withSimpleCard(title, speechText + repromptText)
            .getResponse()
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
        const speechText = 'Ram, also known as Ramachandra, is a major deity of Hinduism.  He was the seventh avatar of the god Vishnu. Want to know more about him?' +
            'Ask what`s his birthplace, who is his wife, who was Hanuman?';
        const repromptText = 'Ram, also known as Ramachandra, is a major deity of Hinduism. He was the seventh avatar of the god Vishnu. Want to know more about him?' +
            'Ask what`s his birthplace, who is his wife, who was Hanuman?';
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
        const speechText = 'Rama`s birthplace is on the banks of the Sarayu river in a city called Ayodhya in Uttar Pradesh, India.';
        const repromptText = 'Rama`s birthplace is on the banks of the Sarayu river in a city called Ayodhya in Uttar Pradesh, India.';
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(repromptText)
            .withSimpleCard(title, speechText)
            .withShouldEndSession(true)
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
        const speechText = 'Ram got married to Sita, an avatar of Sri Lakshmi. She is described as the daughter of the earth goddess, Bhūmi and the adopted daughter' +
            ' of King Janaka of Videha and his wife, Queen Sunaina. ';
        const repromptText = 'Ram got married to Sita, an avatar of Sri Lakshmi. She is described as the daughter of the earth goddess, Bhūmi and the adopted daughter\' +\n' +
            '            \' of King Janaka of Videha and his wife, Queen Sunaina.';
        return handlerInput.responseBuilder
            .speak(speechText )
            .reprompt(speechText )
            .withSimpleCard(title, speechText )
            .withShouldEndSession(true)
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
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .withSimpleCard(title, speechText)
            .withShouldEndSession(true)
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
        const speechText = 'Lanka is considered to be a large island-country, situated in the Indian Ocean. Lanka is the name given in Hindu epics to the island fortress capital of the legendary asura king Ravana in the epics of the Ramayana and the Mahabharata. ' +
            'The ancient city of Lankapura is thought to have been burnt down by Hanuman.';
        const repromptText = 'Lanka is considered to be a large island-country, situated in the Indian Ocean. Lanka is the name given in Hindu epics to the island fortress capital of the legendary asura king Ravana in the epics of the Ramayana and the Mahabharata. ' +
            ' The ancient city of Lankapura is thought to have been burnt down by Hanuman. Ask who was the emperor of Lanka?  ';
        return handlerInput.responseBuilder
            .speak(speechText )
            .reprompt(speechText )
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
            ' His ten heads represent his knowledge of the six shastras and the four Vedas. To know about his Lanka ask Where is Lanka?';
        const repromptText = 'Ravana was a follower of Shiva, a great scholar, a capable ruler and a maestro of the veena, but someone who wished to overpower the Devas. ' +
            'His ten heads represent his knowledge of the six shastras and the four Vedas. To know about his Lanka ask Where is Lanka?';
        console.log(speechText);
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(repromptText)
            .withSimpleCard(title, speechText)
            .getResponse();

    }
};

/***
 * Rama's Mother Handler
 * @type {{canHandle(*): *, handle(*): *}}
 */
const RamaMotherHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'&&
            handlerInput.requestEnvelope.request.intent.name === 'RamaMother';
    },
    handle(handlerInput) {
        const speechText = 'Ram is the son of Kaushalya and Dasharath. Kaikeyi was the mother of Bharata and Sumitra was the mother of Lakshmana and Shatrughna.';
        const repromptText = 'Ram is the son of Kaushalya and Dasharath. Kaikeyi was the mother of Bharata and Sumitra was the mother of Lakshmana and Shatrughna. ';
        return handlerInput.responseBuilder
            .speak(speechText )
            .reprompt(speechText )
            .withSimpleCard(title, speechText)
            .withShouldEndSession(true)
            .getResponse();
    }
};

/***
 * Jatayu Handler
 * @type {{canHandle(*): *, handle(*): *}}
 */
const JatayuHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'&&
            handlerInput.requestEnvelope.request.intent.name === 'Jatayu';
    },
    handle(handlerInput) {
        const speechText = ' In the epic Ramayana, Jatayu was the bird who tried to prevent Ravana from carrying Sita away.';
        const repromptText = 'In the epic Ramayana, Jatayu was the bird who tried to prevent Ravana from carrying Sita away. ';
        return handlerInput.responseBuilder
            .speak(speechText )
            .reprompt(speechText )
            .withSimpleCard(title, speechText)
            .withShouldEndSession(true)
            .getResponse();
    }
};

/***
 * Shurpankha Handler
 * @type {{canHandle(*): *, handle(*): *}}
 */
const ShurpanakhaHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'&&
            handlerInput.requestEnvelope.request.intent.name === 'Shurpanakha';
    },
    handle(handlerInput) {
        const speechText = 'Shurpankha was the sister of Ravana. She was the widow of the Davana prince of the Kalkeya Danava, Vidyutjihva. To know more ask How is she related to Ramayan';
        const repromptText = 'Shurpankha was the sister of Ravana. She was the widow of the the Davana prince of the Kalkeya Danava, Vidyutjihva. To know more ask How is she related to Ramayan';
        return handlerInput.responseBuilder
            .speak(speechText )
            .reprompt(speechText )
            .withSimpleCard(title, speechText)
            .withShouldEndSession(false)
            .getResponse();
    }
};

/***
 * ShurpankhaMoreDetails Handler
 * @type {{canHandle(*): *, handle(*): *}}
 */
const ShurpanakhaDetailsHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'&&
            handlerInput.requestEnvelope.request.intent.name === 'ShurpanakhaDetails';
    },
    handle(handlerInput) {
        const speechText = 'According to Valmiki, Shurpankaha met Rama during her visit to the forests of Panchavati and wanted to marry him. ' +
            'Rama meanwhile spurred her advances. Rejected, Shurpanakha then approached his younger brother, Lakshmana, who reacted in a similar manner. ' +
            'The humiliated and envious Shurpanakha attacked Sita but was thwarted by Lakshmana, who cut off her nose and left ear which later on became the reason behind the demise of Ravana ';
        const repromptText = 'According to Valmiki, Shurpankha met Rama during her visit to the forests of Panchavati and wanted to marry him. ' +
            'Rama meanwhile spurred her advances. Rejected, Shurpanakha then approached his younger brother, Lakshmana, who reacted in a similar manner. ' +
            'The humiliated and envious Shurpanakha attacked Sita but was thwarted by Lakshmana, who cut off her nose and left ear which later on became the reason behind the demise of Ravana ';
        return handlerInput.responseBuilder
            .speak(speechText )
            .reprompt(speechText)
            .withSimpleCard(title, speechText)
            .withShouldEndSession(true)
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
        const repromtTest = 'Bye! Talk to you soon!';
        return handlerInput.responseBuilder
            .speak(speech)
            .repromt(repromtTest)
            .withSimpleCard(title, speech)
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
            .speak('Sorry, I can`t understand the command. Please say again.')
            .reprompt('Sorry, I can`t understand the command. Please say again.')
            .getResponse();
    }
};

/***
 * Cancel Handler
 * @type {{canHandle(): boolean, handle(*, *): *}}
 */
const CancelHandler = {
    canHandle() {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'&&
       handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent';
    },
    handle(handlerInput, error) {
        console.log(`Error handled: ${error.message}`);
        console.log('cancel handlerrrr');
        const speechText = 'Cancelling Event. Talk to you soon';
        const repromptText = 'Oh! Talk to you soon';

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(repromptText)
            .withShouldEndSession(true)
            .getResponse();
    }
};

/***
 * Help Handler
 * @type {{canHandle(): boolean, handle(*, *): *}}
 */
const HelpHandler = {
    canHandle() {
      return handlerInput.requestEnvelope.request.type === 'IntentRequest'&&
       handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speechtext = 'Oh! You can ask Lord Rama questions like Where is Lanka, who is Hanuman, who is Sita?';
        return handlerInput.responseBuilder
            .speak(speechtext)
            .reprompt('Oh! Talk to you soon')
            .getResponse();
    }
};
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        AboutRamaHandler,
        BirthplaceHandler,
        WifeDetailsHandler,
        HanumanHandler,
        LankaHandler,
        RavanaHandler,
        RamaMotherHandler,
        JatayuHandler,
        ShurpanakhaHandler,
        ShurpanakhaDetailsHandler,
        CancelHandler,
        HelpHandler,
        SessionEndedRequestHandler,
    )
    .addResponseInterceptors()
    .addErrorHandlers(ErrorHandler)
    .lambda();