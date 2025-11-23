import express from 'express';
import cors from 'cors';
import { db } from './firebase.js';
import { collection, getDocs, addDoc } from 'firebase/firestore';

const app = express();

app.use(cors());
app.use(express.json());

//test route
app.get('/api/test', (req, res) => {
    res.json({ message: 'Backend is working!' });
});

// Get all challenges
app.get('/api/challenges', async (req, res) => {
    try {
        const challengesRef = collection(db, 'challengeData');
        const snapshot = await getDocs(challengesRef);
        const challenges = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        res.json(challenges);
    } catch (error) {
        console.error('Error fetching challenges:', error);
        res.status(500).json({ error: error.message });
    }
});

// Add a new challenge
app.post('/api/challenges', async (req, res) => {
    try {
        const challengesRef = collection(db, 'challengeData');
        const docRef = await addDoc(challengesRef, req.body);
        res.json({ id: docRef.id, ...req.body });
    } catch (error) {
        console.error('Error adding challenge:', error);
        res.status(500).json({ error: error.message });
    }
});

export default app;