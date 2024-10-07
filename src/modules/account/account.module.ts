import { accountRouter } from './interface/http/account.http.routes';
import { authTypeDefs, authResolvers } from './interface/graphql/account.graphql.schema';

export const AccountModule = {
    accountRouter,
    authTypeDefs,
    authResolvers
};
