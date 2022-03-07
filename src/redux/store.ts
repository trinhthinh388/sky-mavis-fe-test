import { createStore, applyMiddleware, EmptyObject, Store } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { AssetState } from './reducers/asset';
import { AuthState } from './reducers/auth';

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

const store: Store<
  EmptyObject & {
    authState: AuthState;
    assetState: AssetState;
  }
> = createStore(rootReducer, applyMiddleware(thunk));
export default store;
