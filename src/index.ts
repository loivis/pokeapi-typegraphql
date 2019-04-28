import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import Express from "express";
import { buildSchema, } from "type-graphql";

const main = async () => {
    const schema = await buildSchema({
        resolvers: [__dirname + "/**/*.ts"]
    });

    const apolloServer = new ApolloServer({
        schema,
        introspection: true,
        playground: true,
    });

    const app = Express();

    apolloServer.applyMiddleware({ app });

    const port = process.env.PORT || 4000;

    app.listen(port, () => {
        if (port == 4000) {
            console.log(`server started on http://localhost:${port}/graphql`);
        } else {
            console.log(`server started at port ${port}`);
        }
    });
};

main();
