import { buildSchema } from 'graphql';

import { user } from './user';

import { rootQuery } from './rootQuery';
import { rootMutation } from './rootMutation';

const schema = `
  schema {
    query: RootQuery
    mutation: RootMutation
  }
`;

export const schemas = buildSchema(`
  ${user}
  ${rootQuery}
  ${rootMutation}
  ${schema}
`);
