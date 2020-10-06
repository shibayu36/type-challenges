type Chainable<Options = {}> = {
  option<K extends string, V>(key: K, value: V): Chainable<Options & {
    [k in K]: V
  }>
  get(): Options
}
