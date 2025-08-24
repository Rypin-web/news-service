import {type TypedUseSelectorHook, useSelector} from "react-redux";
import type {TRootState} from "../../app/store.ts";

export const useTypedSelector:TypedUseSelectorHook<TRootState> = useSelector