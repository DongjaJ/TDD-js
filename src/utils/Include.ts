//https://github.com/marpple/FxTS/blob/main/src/types/Include.ts

type Include<T, N> = T extends N ? T : never;

export default Include;
