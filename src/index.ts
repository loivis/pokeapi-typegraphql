import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import Express from "express";
import { buildSchema, Resolver, Query } from "type-graphql";

@Resolver()
class HelloResolver {
    @Query(() => String)
    async helloWorld() {
        return "Hello World!";
    }
}

const main = async () => {
    const schema = await buildSchema({
        resolvers: [HelloResolver]
    });

    const apolloServer = new ApolloServer({ schema });

    const app = Express();

    apolloServer.applyMiddleware({ app });

    const port = process.env.PORT || 4000;

    app.listen(port, () => {
        if (port == 4000) {
            console.log(`server started on http://localhost:${port}`);
        } else {
            console.log(`server started at port ${port}`);
        }
    });
};

main();
