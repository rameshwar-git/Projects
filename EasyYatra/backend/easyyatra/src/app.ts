    import express from 'express';
    import connectDB from './config/database';
    import User from './models/User/Travler';

    const app = express();
    app.use(express.json()); // Enable JSON body parsing

    connectDB(); // Connect to MongoDB

    app.get('/', (req, res) => res.send('API Running'));

    // Example route to create a user
    app.post('/users', async (req, res) => {
        const { name, email } = req.body;
        try {
            const newUser = new User({ name, email });
            await newUser.save();
            res.status(201).json(newUser);
        } catch (err) {
            console.error(err);
            res.status(500).send('Server Error');
        }
    });

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));