import { Models, init, RematchDispatch, RematchRootState } from "@rematch/core";
import { colorMode } from "./colorMode";

export interface RootModel extends Models<RootModel> {
    colorMode: typeof colorMode;
}

const models: RootModel = { colorMode };

const store = init({ models });

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;

export default store;