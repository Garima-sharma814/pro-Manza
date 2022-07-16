import { initializeApp, cert } from 'firebase-admin/app';

const connectDB = (firebaseConfig) => {
    initializeApp({
        credential: cert(firebaseConfig),
        databaseURL: 'https://fir-auth-9f4e0-default-rtdb.firebaseio.com'
    })
}

export { connectDB };
