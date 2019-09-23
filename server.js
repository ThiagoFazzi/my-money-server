import express from 'express';
import graphqlHTTP from 'express-graphql';
import bodyParser from 'body-parser';
import cors from 'cors';
import { mongoose } from './mongoose';
import { graphql } from './graphql';

const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema: graphql.schemas,
    rootValue: graphql.resolvers,
    graphiql: true,
  })
);

mongoose.connection
  .startConnection(
    process.env.MONGO_USER,
    process.env.MONGO_PASSWORD,
    process.env.MONGO_DB
  )
  .then(_ => {
    app.listen(PORT, () =>
      console.log(
        `GraphQL API listening on port ${PORT}\nTo access a graphql tool go to http://localhost:${PORT}/graphql`
      )
    );
  })
  .catch(error => {
    throw error.message;
  });
