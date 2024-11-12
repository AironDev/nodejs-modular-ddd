import { userRouter } from './interface/http/http.routes';
import { authTypeDefs, authResolvers } from './interface/graphql/account.graphql.schema';

export const UserModule = {
    userRouter,
    authTypeDefs,
    authResolvers
};
