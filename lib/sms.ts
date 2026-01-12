export function sendSms() {
    const accountSid = process.env.TWILIOACCOUNTSID;
    const authToken = process.env.TWILIOAUTHTOKEN;
    const client = require('twilio')(accountSid, authToken);
    client.messages
        .create({
            body: 'Ahoy 👋',
            messagingServiceSid: process.env.TWILIOSID,
            to: '+14066072405'
        })
        .then((message: { sid: any; }) => console.log(message.sid));
}