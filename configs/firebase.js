const admin = require('firebase-admin')

const key = require('./sak.json')

admin.initializeApp({
    credential : admin.credential.cert(key)
})

exports.db = admin.firestore()