import 'reflect-metadata'; // Import reflect-metadata at the top
import express, { Application } from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { UserModule } from './modules/user/user.module';
import cors from 'cors';
import bodyParser from 'body-parser';
import { setupContainer } from './shared/container'; // Ensure this is imported

const app: Application = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// HTTP routes
app.use("/api/v1/health", (req, res) => {
  res.json({success: true, message: `App is up and running:  ${req.hostname}${req.originalUrl}`});
});

// Call setupContainer to initialize DI before using the router
const startServer = async () => {
    try {
        await setupContainer();

        app.use('/api/v1/user', UserModule.userRouter()); // Ensure this is used after DI setup

        // Set up Apollo Server
        const server = new ApolloServer({
            typeDefs: [UserModule.authTypeDefs],
            resolvers: [UserModule.authResolvers],
        });

        await server.start();
        app.use('/graphql', expressMiddleware(server));

        const PORT = process.env.PORT || 4000;
        app.listen(PORT, () => {
            console.log(`🚀 Server ready at http://localhost:${PORT}`);
        });

    } catch (error) {
        console.error('Error starting the server:', error);
    }
};

// Call the start function
startServer();

export default app;
