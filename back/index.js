const axios = require('axios');

const apiKey = 'sk-proj-f6wQXcrhZcy6F2JDwRRwT3BlbkFJSLzRFugbZLc0CgwJk42N';
const apiUrl = 'http://api.openai.com/v1/completions';

const prompt = 'Fale um pouco sobre o pericles';

axios.post(apiUrl, {
    model: 'text-davinci-003',
    prompt: prompt,
    max_tokens: 400
}, {
    headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
    }
})
.then(responde => {
    console.log(responde.data.choices[0].text)
})
.catch(error => console.log(error));