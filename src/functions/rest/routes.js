export const serviceVerification = async (req, res) => {
    const {'hub.mode': mode, 'hub.challenge': challenge, 'hub.verify_token': token} = req.query;
    if (!(mode && challenge && token)) {
        return res.status(400).send('');
    }
    if (!(mode === 'subscribe' && token === process.env.challenge_token)) {
        return res.status(400).send('');
    }
    return res.status(200).send(challenge)
}

export const notificationHandler = async (req, res) => {
    console.log('on notification service')
    return res.status(200).json({message: "lemus"})
}
