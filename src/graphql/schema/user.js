import {
    createTempUser,
    deleteUser,
} from '../../controllers/userController';
import {
    authUser,
    regUser,
} from '../../controllers/authController';

const User = `
    type User {
        id: ID!
        email: String!
        password: String!
        token: String!
    }
`;
const Query = `
    extend type Query {
        users: [User]
        user(id: ID!): User
    }
`;
const Input = '';
const Mutation = `
    extend type Mutation {
        createTempUser(email: String!, password: String!): User!
        deleteUser(id: ID!): Int!
        authUser(email: String!, password: String!): User!
        regUser(email: String!, password: String!): User!
    }
`;

const types = () => [User];
const queryTypes = () => [Query];
const inputTypes = () => [Input];
const mutationTypes = () => [Mutation];

const typeResolvers = {};
export const queryResolvers = {
    Query: {
        users: (parent, args, { db }, info) => db.User.findAll(),
        user: (parent, { id }, { db }, info) => db.User.findById(id),
    },
};
const mutationResolvers = {
    Mutation: {
        createTempUser,
        deleteUser,
        authUser,
        regUser,
    }
};

export default {
    types: () => [types, queryTypes, inputTypes, mutationTypes],
    resolvers: Object.assign(queryResolvers, mutationResolvers, typeResolvers),
}
