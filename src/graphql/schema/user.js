const User = `
 type User {
   email: String!
   password: String!
 }
`;
const Query = `
 extend type Query {
   users: [User]
 }
`;
const Input = '';
const Mutation = '';
// `
//   extend type Mutation {
//   }
// `

const types = () => [User];
const queryTypes = () => [Query];
const inputTypes = () => [Input];
const mutationTypes = () => [Mutation];

const typeResolvers = {};
export const queryResolvers = {
    Query: {
        users: () => ([
            {
                email: 'aersfg@mail.ru',
            },
            {
                email: 'Jurassic@Park.com',
            },
        ])
    }
};
const mutationResolvers = {};

export default {
    types: () => [types, queryTypes, inputTypes, mutationTypes],
    resolvers: Object.assign(queryResolvers, mutationResolvers, typeResolvers),
}
