
// GraphQL Schema Definition for Authentication
export const authTypeDefs = `#graphql
  type User {
    id: ID!
    email: String!
    name: String!
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): AuthPayload
    register(email: String!, password: String!, name: String!): AuthPayload
  }
`;

// GraphQL Resolvers
export const authResolvers = {
  Query: {
    me: async (_: any, __: any, { user }: any) => {
      // return the authenticated user
      return user;
    },
  },
  Mutation: {
    login: async (_: any, { email, password }: any, { dataSources }: any) => {
      return dataSources.authService.login(email, password);
    },
    register: async (_: any, { email, password, name }: any, { dataSources }: any) => {
      return dataSources.authService.register(email, password, name);
    },
  },
};
