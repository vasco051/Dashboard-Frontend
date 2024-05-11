import { ComponentType } from "react";

export type InferProps<Component> = Component extends ComponentType<infer Props> ? Props : never;