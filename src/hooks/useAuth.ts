import type { Rootstate } from "@/store/store";
import { useSelector, type TypedUseSelectorHook } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<Rootstate> = useSelector