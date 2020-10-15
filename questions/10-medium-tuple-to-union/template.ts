// type TupleToUnion<T extends any[]> = T[number]
type TupleToUnion<T> = T extends Array<infer ITEMS> ? ITEMS : never
