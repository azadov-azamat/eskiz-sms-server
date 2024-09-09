require('dotenv').config({});

const axios = require('axios');
const FormData = require('form-data');

async function getSMSProviderToken() {
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTc3NTY3MDAsImlhdCI6MTcxNTE2NDcwMCwicm9sZSI6InVzZXIiLCJzaWduIjoiNjM0YmY5ZTM0ZDBkN2ZkMTMzMjg5YzQ1ZmY0ZDA0M2I4MzBhYWRkNmQ3YzYyYWQ0YmI4OWMxNmJiNzMwOGYwOSIsInN1YiI6IjQ5NTEifQ.0HMYNx11FOaLbxh9ndGevz-6AXh0xKGrcoN2nO9W4cg';

    if (token) {
        return token;
    }
 
    let form = new FormData();
    form.append('email', process.env.ESKIZ_UZ_EMAIL);
    form.append('password', process.env.ESKIZ_UZ_PASSWORD);

    let {data} = await axios({
        method: 'post',
        url: 'https://notify.eskiz.uz/api/auth/login',
        headers: {
            ...form.getHeaders(),
        },
        data: form,
    });

    token = data.data?.token;

    return token;
}

async function sendMessage(phone, body) {
    let token = await getSMSProviderToken();

    let form = new FormData();
    form.append('mobile_phone', `998${phone}`);
    form.append('message', body);
    form.append('from', '4546');
  
    try {
        let {data} = await axios.post("https://notify.eskiz.uz/api/message/sms/send", form, {
            headers: {
                Authorization: `Bearer ${token}`,
                ...form.getHeaders(),
            },
        });

        return data;
    } catch (e) {
        console.log("error", e);
    }
}

function sendSms() {
    const message = "Уважаемые риелторы! Представляем уникальный проект 77kv.uz - первое приложение интеграции телеграмм для удобной работы недвижимостью. Регистрируйтесь сегодня и получите сайт бесплатно. По вопросам и предложениям: +998200027700 https://t.me/marina_laty";

    const numbers = []

    for (const number of numbers) {
        sendMessage(number, message)
            .then(res => {
                console.log("response", res)
            })
            .catch(error => {
                console.log(error)
            })
    }
}

sendSms()
