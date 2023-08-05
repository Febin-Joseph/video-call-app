const express = 'express'

const app = express();

const startServer = async () => {
    try {
        connectDB(process.env.MONGO_URL);
        app.listen(3000, () => console.log('Server started'));
    } catch (error) {
        console.log(error);
    }
}