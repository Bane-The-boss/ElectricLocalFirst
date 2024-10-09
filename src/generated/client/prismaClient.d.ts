
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Images
 * 
 */
export type Images = {
  /**
   * @zod.number.int().gte(-2147483648).lte(2147483647)
   */
  image_id: number
  link: string | null
  descr: string | null
}

/**
 * Model Random1
 * 
 */
export type Random1 = {
  /**
   * @zod.number.int().gte(-2147483648).lte(2147483647)
   */
  id: number
  task: string
  /**
   * @zod.number.int().gte(-2147483648).lte(2147483647)
   */
  checked: number
}

/**
 * Model Testdocument
 * 
 */
export type Testdocument = {
  /**
   * @zod.number.int().gte(-2147483648).lte(2147483647)
   */
  doc_id: number
  experiment_name: string
  type: string | null
  createdtime: string
  /**
   * @zod.number.int().gte(-2147483648).lte(2147483647)
   */
  x_position: number | null
  /**
   * @zod.number.int().gte(-2147483648).lte(2147483647)
   */
  y_position: number | null
  /**
   * @zod.number.int().gte(-2147483648).lte(2147483647)
   */
  width: number | null
  /**
   * @zod.number.int().gte(-2147483648).lte(2147483647)
   */
  height: number | null
}

/**
 * Model Todolist
 * 
 */
export type Todolist = {
  /**
   * @zod.number.int().gte(-2147483648).lte(2147483647)
   */
  item_id: number
  /**
   * @zod.number.int().gte(-2147483648).lte(2147483647)
   */
  doc_id: number
  /**
   * @zod.number.int().gte(-2147483648).lte(2147483647)
   */
  checked: number | null
  task: string | null
}

/**
 * Model Todolist1
 * 
 */
export type Todolist1 = {
  /**
   * @zod.number.int().gte(-2147483648).lte(2147483647)
   */
  item_id: number
  /**
   * @zod.number.int().gte(-2147483648).lte(2147483647)
   */
  doc_id: number
  /**
   * @zod.number.int().gte(-2147483648).lte(2147483647)
   */
  checked: number | null
  task: string | null
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Images
 * const images = await prisma.images.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Images
   * const images = await prisma.images.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>;

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: {maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel}): Promise<R>;

      /**
   * `prisma.images`: Exposes CRUD operations for the **Images** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.images.findMany()
    * ```
    */
  get images(): Prisma.ImagesDelegate<GlobalReject>;

  /**
   * `prisma.random1`: Exposes CRUD operations for the **Random1** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Random1s
    * const random1s = await prisma.random1.findMany()
    * ```
    */
  get random1(): Prisma.Random1Delegate<GlobalReject>;

  /**
   * `prisma.testdocument`: Exposes CRUD operations for the **Testdocument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Testdocuments
    * const testdocuments = await prisma.testdocument.findMany()
    * ```
    */
  get testdocument(): Prisma.TestdocumentDelegate<GlobalReject>;

  /**
   * `prisma.todolist`: Exposes CRUD operations for the **Todolist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Todolists
    * const todolists = await prisma.todolist.findMany()
    * ```
    */
  get todolist(): Prisma.TodolistDelegate<GlobalReject>;

  /**
   * `prisma.todolist1`: Exposes CRUD operations for the **Todolist1** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Todolist1s
    * const todolist1s = await prisma.todolist1.findMany()
    * ```
    */
  get todolist1(): Prisma.Todolist1Delegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.8.1
   * Query Engine version: d6e67a83f971b175a593ccc12e15c4a757f93ffe
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
export type InputJsonValue = null | string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Images: 'Images',
    Random1: 'Random1',
    Testdocument: 'Testdocument',
    Todolist: 'Todolist',
    Todolist1: 'Todolist1'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Images
   */


  export type AggregateImages = {
    _count: ImagesCountAggregateOutputType | null
    _avg: ImagesAvgAggregateOutputType | null
    _sum: ImagesSumAggregateOutputType | null
    _min: ImagesMinAggregateOutputType | null
    _max: ImagesMaxAggregateOutputType | null
  }

  export type ImagesAvgAggregateOutputType = {
    image_id: number | null
  }

  export type ImagesSumAggregateOutputType = {
    image_id: number | null
  }

  export type ImagesMinAggregateOutputType = {
    image_id: number | null
    link: string | null
    descr: string | null
  }

  export type ImagesMaxAggregateOutputType = {
    image_id: number | null
    link: string | null
    descr: string | null
  }

  export type ImagesCountAggregateOutputType = {
    image_id: number
    link: number
    descr: number
    _all: number
  }


  export type ImagesAvgAggregateInputType = {
    image_id?: true
  }

  export type ImagesSumAggregateInputType = {
    image_id?: true
  }

  export type ImagesMinAggregateInputType = {
    image_id?: true
    link?: true
    descr?: true
  }

  export type ImagesMaxAggregateInputType = {
    image_id?: true
    link?: true
    descr?: true
  }

  export type ImagesCountAggregateInputType = {
    image_id?: true
    link?: true
    descr?: true
    _all?: true
  }

  export type ImagesAggregateArgs = {
    /**
     * Filter which Images to aggregate.
     * 
    **/
    where?: ImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     * 
    **/
    orderBy?: Enumerable<ImagesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImagesMaxAggregateInputType
  }

  export type GetImagesAggregateType<T extends ImagesAggregateArgs> = {
        [P in keyof T & keyof AggregateImages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImages[P]>
      : GetScalarType<T[P], AggregateImages[P]>
  }




  export type ImagesGroupByArgs = {
    where?: ImagesWhereInput
    orderBy?: Enumerable<ImagesOrderByWithAggregationInput>
    by: Array<ImagesScalarFieldEnum>
    having?: ImagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImagesCountAggregateInputType | true
    _avg?: ImagesAvgAggregateInputType
    _sum?: ImagesSumAggregateInputType
    _min?: ImagesMinAggregateInputType
    _max?: ImagesMaxAggregateInputType
  }


  export type ImagesGroupByOutputType = {
    image_id: number
    link: string | null
    descr: string | null
    _count: ImagesCountAggregateOutputType | null
    _avg: ImagesAvgAggregateOutputType | null
    _sum: ImagesSumAggregateOutputType | null
    _min: ImagesMinAggregateOutputType | null
    _max: ImagesMaxAggregateOutputType | null
  }

  type GetImagesGroupByPayload<T extends ImagesGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ImagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImagesGroupByOutputType[P]>
            : GetScalarType<T[P], ImagesGroupByOutputType[P]>
        }
      >
    >


  export type ImagesSelect = {
    image_id?: boolean
    link?: boolean
    descr?: boolean
    testdocument?: boolean | TestdocumentArgs
  }


  export type ImagesInclude = {
    testdocument?: boolean | TestdocumentArgs
  } 

  export type ImagesGetPayload<S extends boolean | null | undefined | ImagesArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Images :
    S extends undefined ? never :
    S extends { include: any } & (ImagesArgs | ImagesFindManyArgs)
    ? Images  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'testdocument' ? TestdocumentGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ImagesArgs | ImagesFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'testdocument' ? TestdocumentGetPayload<S['select'][P]> :  P extends keyof Images ? Images[P] : never
  } 
      : Images


  type ImagesCountArgs = Merge<
    Omit<ImagesFindManyArgs, 'select' | 'include'> & {
      select?: ImagesCountAggregateInputType | true
    }
  >

  export interface ImagesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Images that matches the filter.
     * @param {ImagesFindUniqueArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ImagesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ImagesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Images'> extends True ? Prisma__ImagesClient<ImagesGetPayload<T>> : Prisma__ImagesClient<ImagesGetPayload<T> | null, null>

    /**
     * Find one Images that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ImagesFindUniqueOrThrowArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ImagesFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ImagesFindUniqueOrThrowArgs>
    ): Prisma__ImagesClient<ImagesGetPayload<T>>

    /**
     * Find the first Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesFindFirstArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ImagesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ImagesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Images'> extends True ? Prisma__ImagesClient<ImagesGetPayload<T>> : Prisma__ImagesClient<ImagesGetPayload<T> | null, null>

    /**
     * Find the first Images that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesFindFirstOrThrowArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ImagesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ImagesFindFirstOrThrowArgs>
    ): Prisma__ImagesClient<ImagesGetPayload<T>>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.images.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.images.findMany({ take: 10 })
     * 
     * // Only select the `image_id`
     * const imagesWithImage_idOnly = await prisma.images.findMany({ select: { image_id: true } })
     * 
    **/
    findMany<T extends ImagesFindManyArgs>(
      args?: SelectSubset<T, ImagesFindManyArgs>
    ): PrismaPromise<Array<ImagesGetPayload<T>>>

    /**
     * Create a Images.
     * @param {ImagesCreateArgs} args - Arguments to create a Images.
     * @example
     * // Create one Images
     * const Images = await prisma.images.create({
     *   data: {
     *     // ... data to create a Images
     *   }
     * })
     * 
    **/
    create<T extends ImagesCreateArgs>(
      args: SelectSubset<T, ImagesCreateArgs>
    ): Prisma__ImagesClient<ImagesGetPayload<T>>

    /**
     * Create many Images.
     *     @param {ImagesCreateManyArgs} args - Arguments to create many Images.
     *     @example
     *     // Create many Images
     *     const images = await prisma.images.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ImagesCreateManyArgs>(
      args?: SelectSubset<T, ImagesCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Images.
     * @param {ImagesDeleteArgs} args - Arguments to delete one Images.
     * @example
     * // Delete one Images
     * const Images = await prisma.images.delete({
     *   where: {
     *     // ... filter to delete one Images
     *   }
     * })
     * 
    **/
    delete<T extends ImagesDeleteArgs>(
      args: SelectSubset<T, ImagesDeleteArgs>
    ): Prisma__ImagesClient<ImagesGetPayload<T>>

    /**
     * Update one Images.
     * @param {ImagesUpdateArgs} args - Arguments to update one Images.
     * @example
     * // Update one Images
     * const images = await prisma.images.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ImagesUpdateArgs>(
      args: SelectSubset<T, ImagesUpdateArgs>
    ): Prisma__ImagesClient<ImagesGetPayload<T>>

    /**
     * Delete zero or more Images.
     * @param {ImagesDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.images.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ImagesDeleteManyArgs>(
      args?: SelectSubset<T, ImagesDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const images = await prisma.images.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ImagesUpdateManyArgs>(
      args: SelectSubset<T, ImagesUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Images.
     * @param {ImagesUpsertArgs} args - Arguments to update or create a Images.
     * @example
     * // Update or create a Images
     * const images = await prisma.images.upsert({
     *   create: {
     *     // ... data to create a Images
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Images we want to update
     *   }
     * })
    **/
    upsert<T extends ImagesUpsertArgs>(
      args: SelectSubset<T, ImagesUpsertArgs>
    ): Prisma__ImagesClient<ImagesGetPayload<T>>

    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.images.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImagesCountArgs>(
      args?: Subset<T, ImagesCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImagesAggregateArgs>(args: Subset<T, ImagesAggregateArgs>): PrismaPromise<GetImagesAggregateType<T>>

    /**
     * Group by Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ImagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImagesGroupByArgs['orderBy'] }
        : { orderBy?: ImagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ImagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImagesGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Images.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ImagesClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    testdocument<T extends TestdocumentArgs= {}>(args?: Subset<T, TestdocumentArgs>): Prisma__TestdocumentClient<TestdocumentGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Images base type for findUnique actions
   */
  export type ImagesFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Images
     * 
    **/
    select?: ImagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImagesInclude | null
    /**
     * Filter, which Images to fetch.
     * 
    **/
    where: ImagesWhereUniqueInput
  }

  /**
   * Images findUnique
   */
  export interface ImagesFindUniqueArgs extends ImagesFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Images findUniqueOrThrow
   */
  export type ImagesFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Images
     * 
    **/
    select?: ImagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImagesInclude | null
    /**
     * Filter, which Images to fetch.
     * 
    **/
    where: ImagesWhereUniqueInput
  }


  /**
   * Images base type for findFirst actions
   */
  export type ImagesFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Images
     * 
    **/
    select?: ImagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImagesInclude | null
    /**
     * Filter, which Images to fetch.
     * 
    **/
    where?: ImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     * 
    **/
    orderBy?: Enumerable<ImagesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     * 
    **/
    cursor?: ImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     * 
    **/
    distinct?: Enumerable<ImagesScalarFieldEnum>
  }

  /**
   * Images findFirst
   */
  export interface ImagesFindFirstArgs extends ImagesFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Images findFirstOrThrow
   */
  export type ImagesFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Images
     * 
    **/
    select?: ImagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImagesInclude | null
    /**
     * Filter, which Images to fetch.
     * 
    **/
    where?: ImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     * 
    **/
    orderBy?: Enumerable<ImagesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     * 
    **/
    cursor?: ImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     * 
    **/
    distinct?: Enumerable<ImagesScalarFieldEnum>
  }


  /**
   * Images findMany
   */
  export type ImagesFindManyArgs = {
    /**
     * Select specific fields to fetch from the Images
     * 
    **/
    select?: ImagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImagesInclude | null
    /**
     * Filter, which Images to fetch.
     * 
    **/
    where?: ImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     * 
    **/
    orderBy?: Enumerable<ImagesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     * 
    **/
    cursor?: ImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ImagesScalarFieldEnum>
  }


  /**
   * Images create
   */
  export type ImagesCreateArgs = {
    /**
     * Select specific fields to fetch from the Images
     * 
    **/
    select?: ImagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImagesInclude | null
    /**
     * The data needed to create a Images.
     * 
    **/
    data: XOR<ImagesCreateInput, ImagesUncheckedCreateInput>
  }


  /**
   * Images createMany
   */
  export type ImagesCreateManyArgs = {
    /**
     * The data used to create many Images.
     * 
    **/
    data: Enumerable<ImagesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Images update
   */
  export type ImagesUpdateArgs = {
    /**
     * Select specific fields to fetch from the Images
     * 
    **/
    select?: ImagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImagesInclude | null
    /**
     * The data needed to update a Images.
     * 
    **/
    data: XOR<ImagesUpdateInput, ImagesUncheckedUpdateInput>
    /**
     * Choose, which Images to update.
     * 
    **/
    where: ImagesWhereUniqueInput
  }


  /**
   * Images updateMany
   */
  export type ImagesUpdateManyArgs = {
    /**
     * The data used to update Images.
     * 
    **/
    data: XOR<ImagesUpdateManyMutationInput, ImagesUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     * 
    **/
    where?: ImagesWhereInput
  }


  /**
   * Images upsert
   */
  export type ImagesUpsertArgs = {
    /**
     * Select specific fields to fetch from the Images
     * 
    **/
    select?: ImagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImagesInclude | null
    /**
     * The filter to search for the Images to update in case it exists.
     * 
    **/
    where: ImagesWhereUniqueInput
    /**
     * In case the Images found by the `where` argument doesn't exist, create a new Images with this data.
     * 
    **/
    create: XOR<ImagesCreateInput, ImagesUncheckedCreateInput>
    /**
     * In case the Images was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ImagesUpdateInput, ImagesUncheckedUpdateInput>
  }


  /**
   * Images delete
   */
  export type ImagesDeleteArgs = {
    /**
     * Select specific fields to fetch from the Images
     * 
    **/
    select?: ImagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImagesInclude | null
    /**
     * Filter which Images to delete.
     * 
    **/
    where: ImagesWhereUniqueInput
  }


  /**
   * Images deleteMany
   */
  export type ImagesDeleteManyArgs = {
    /**
     * Filter which Images to delete
     * 
    **/
    where?: ImagesWhereInput
  }


  /**
   * Images without action
   */
  export type ImagesArgs = {
    /**
     * Select specific fields to fetch from the Images
     * 
    **/
    select?: ImagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImagesInclude | null
  }



  /**
   * Model Random1
   */


  export type AggregateRandom1 = {
    _count: Random1CountAggregateOutputType | null
    _avg: Random1AvgAggregateOutputType | null
    _sum: Random1SumAggregateOutputType | null
    _min: Random1MinAggregateOutputType | null
    _max: Random1MaxAggregateOutputType | null
  }

  export type Random1AvgAggregateOutputType = {
    id: number | null
    checked: number | null
  }

  export type Random1SumAggregateOutputType = {
    id: number | null
    checked: number | null
  }

  export type Random1MinAggregateOutputType = {
    id: number | null
    task: string | null
    checked: number | null
  }

  export type Random1MaxAggregateOutputType = {
    id: number | null
    task: string | null
    checked: number | null
  }

  export type Random1CountAggregateOutputType = {
    id: number
    task: number
    checked: number
    _all: number
  }


  export type Random1AvgAggregateInputType = {
    id?: true
    checked?: true
  }

  export type Random1SumAggregateInputType = {
    id?: true
    checked?: true
  }

  export type Random1MinAggregateInputType = {
    id?: true
    task?: true
    checked?: true
  }

  export type Random1MaxAggregateInputType = {
    id?: true
    task?: true
    checked?: true
  }

  export type Random1CountAggregateInputType = {
    id?: true
    task?: true
    checked?: true
    _all?: true
  }

  export type Random1AggregateArgs = {
    /**
     * Filter which Random1 to aggregate.
     * 
    **/
    where?: Random1WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Random1s to fetch.
     * 
    **/
    orderBy?: Enumerable<Random1OrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: Random1WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Random1s from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Random1s.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Random1s
    **/
    _count?: true | Random1CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Random1AvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Random1SumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Random1MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Random1MaxAggregateInputType
  }

  export type GetRandom1AggregateType<T extends Random1AggregateArgs> = {
        [P in keyof T & keyof AggregateRandom1]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRandom1[P]>
      : GetScalarType<T[P], AggregateRandom1[P]>
  }




  export type Random1GroupByArgs = {
    where?: Random1WhereInput
    orderBy?: Enumerable<Random1OrderByWithAggregationInput>
    by: Array<Random1ScalarFieldEnum>
    having?: Random1ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Random1CountAggregateInputType | true
    _avg?: Random1AvgAggregateInputType
    _sum?: Random1SumAggregateInputType
    _min?: Random1MinAggregateInputType
    _max?: Random1MaxAggregateInputType
  }


  export type Random1GroupByOutputType = {
    id: number
    task: string
    checked: number
    _count: Random1CountAggregateOutputType | null
    _avg: Random1AvgAggregateOutputType | null
    _sum: Random1SumAggregateOutputType | null
    _min: Random1MinAggregateOutputType | null
    _max: Random1MaxAggregateOutputType | null
  }

  type GetRandom1GroupByPayload<T extends Random1GroupByArgs> = PrismaPromise<
    Array<
      PickArray<Random1GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Random1GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Random1GroupByOutputType[P]>
            : GetScalarType<T[P], Random1GroupByOutputType[P]>
        }
      >
    >


  export type Random1Select = {
    id?: boolean
    task?: boolean
    checked?: boolean
  }


  export type Random1GetPayload<S extends boolean | null | undefined | Random1Args> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Random1 :
    S extends undefined ? never :
    S extends { include: any } & (Random1Args | Random1FindManyArgs)
    ? Random1 
    : S extends { select: any } & (Random1Args | Random1FindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Random1 ? Random1[P] : never
  } 
      : Random1


  type Random1CountArgs = Merge<
    Omit<Random1FindManyArgs, 'select' | 'include'> & {
      select?: Random1CountAggregateInputType | true
    }
  >

  export interface Random1Delegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Random1 that matches the filter.
     * @param {Random1FindUniqueArgs} args - Arguments to find a Random1
     * @example
     * // Get one Random1
     * const random1 = await prisma.random1.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Random1FindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Random1FindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Random1'> extends True ? Prisma__Random1Client<Random1GetPayload<T>> : Prisma__Random1Client<Random1GetPayload<T> | null, null>

    /**
     * Find one Random1 that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Random1FindUniqueOrThrowArgs} args - Arguments to find a Random1
     * @example
     * // Get one Random1
     * const random1 = await prisma.random1.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Random1FindUniqueOrThrowArgs>(
      args?: SelectSubset<T, Random1FindUniqueOrThrowArgs>
    ): Prisma__Random1Client<Random1GetPayload<T>>

    /**
     * Find the first Random1 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Random1FindFirstArgs} args - Arguments to find a Random1
     * @example
     * // Get one Random1
     * const random1 = await prisma.random1.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Random1FindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Random1FindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Random1'> extends True ? Prisma__Random1Client<Random1GetPayload<T>> : Prisma__Random1Client<Random1GetPayload<T> | null, null>

    /**
     * Find the first Random1 that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Random1FindFirstOrThrowArgs} args - Arguments to find a Random1
     * @example
     * // Get one Random1
     * const random1 = await prisma.random1.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Random1FindFirstOrThrowArgs>(
      args?: SelectSubset<T, Random1FindFirstOrThrowArgs>
    ): Prisma__Random1Client<Random1GetPayload<T>>

    /**
     * Find zero or more Random1s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Random1FindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Random1s
     * const random1s = await prisma.random1.findMany()
     * 
     * // Get first 10 Random1s
     * const random1s = await prisma.random1.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const random1WithIdOnly = await prisma.random1.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Random1FindManyArgs>(
      args?: SelectSubset<T, Random1FindManyArgs>
    ): PrismaPromise<Array<Random1GetPayload<T>>>

    /**
     * Create a Random1.
     * @param {Random1CreateArgs} args - Arguments to create a Random1.
     * @example
     * // Create one Random1
     * const Random1 = await prisma.random1.create({
     *   data: {
     *     // ... data to create a Random1
     *   }
     * })
     * 
    **/
    create<T extends Random1CreateArgs>(
      args: SelectSubset<T, Random1CreateArgs>
    ): Prisma__Random1Client<Random1GetPayload<T>>

    /**
     * Create many Random1s.
     *     @param {Random1CreateManyArgs} args - Arguments to create many Random1s.
     *     @example
     *     // Create many Random1s
     *     const random1 = await prisma.random1.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Random1CreateManyArgs>(
      args?: SelectSubset<T, Random1CreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Random1.
     * @param {Random1DeleteArgs} args - Arguments to delete one Random1.
     * @example
     * // Delete one Random1
     * const Random1 = await prisma.random1.delete({
     *   where: {
     *     // ... filter to delete one Random1
     *   }
     * })
     * 
    **/
    delete<T extends Random1DeleteArgs>(
      args: SelectSubset<T, Random1DeleteArgs>
    ): Prisma__Random1Client<Random1GetPayload<T>>

    /**
     * Update one Random1.
     * @param {Random1UpdateArgs} args - Arguments to update one Random1.
     * @example
     * // Update one Random1
     * const random1 = await prisma.random1.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Random1UpdateArgs>(
      args: SelectSubset<T, Random1UpdateArgs>
    ): Prisma__Random1Client<Random1GetPayload<T>>

    /**
     * Delete zero or more Random1s.
     * @param {Random1DeleteManyArgs} args - Arguments to filter Random1s to delete.
     * @example
     * // Delete a few Random1s
     * const { count } = await prisma.random1.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Random1DeleteManyArgs>(
      args?: SelectSubset<T, Random1DeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Random1s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Random1UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Random1s
     * const random1 = await prisma.random1.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Random1UpdateManyArgs>(
      args: SelectSubset<T, Random1UpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Random1.
     * @param {Random1UpsertArgs} args - Arguments to update or create a Random1.
     * @example
     * // Update or create a Random1
     * const random1 = await prisma.random1.upsert({
     *   create: {
     *     // ... data to create a Random1
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Random1 we want to update
     *   }
     * })
    **/
    upsert<T extends Random1UpsertArgs>(
      args: SelectSubset<T, Random1UpsertArgs>
    ): Prisma__Random1Client<Random1GetPayload<T>>

    /**
     * Count the number of Random1s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Random1CountArgs} args - Arguments to filter Random1s to count.
     * @example
     * // Count the number of Random1s
     * const count = await prisma.random1.count({
     *   where: {
     *     // ... the filter for the Random1s we want to count
     *   }
     * })
    **/
    count<T extends Random1CountArgs>(
      args?: Subset<T, Random1CountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Random1CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Random1.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Random1AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Random1AggregateArgs>(args: Subset<T, Random1AggregateArgs>): PrismaPromise<GetRandom1AggregateType<T>>

    /**
     * Group by Random1.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Random1GroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Random1GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Random1GroupByArgs['orderBy'] }
        : { orderBy?: Random1GroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Random1GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRandom1GroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Random1.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Random1Client<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Random1 base type for findUnique actions
   */
  export type Random1FindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Random1
     * 
    **/
    select?: Random1Select | null
    /**
     * Filter, which Random1 to fetch.
     * 
    **/
    where: Random1WhereUniqueInput
  }

  /**
   * Random1 findUnique
   */
  export interface Random1FindUniqueArgs extends Random1FindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Random1 findUniqueOrThrow
   */
  export type Random1FindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Random1
     * 
    **/
    select?: Random1Select | null
    /**
     * Filter, which Random1 to fetch.
     * 
    **/
    where: Random1WhereUniqueInput
  }


  /**
   * Random1 base type for findFirst actions
   */
  export type Random1FindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Random1
     * 
    **/
    select?: Random1Select | null
    /**
     * Filter, which Random1 to fetch.
     * 
    **/
    where?: Random1WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Random1s to fetch.
     * 
    **/
    orderBy?: Enumerable<Random1OrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Random1s.
     * 
    **/
    cursor?: Random1WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Random1s from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Random1s.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Random1s.
     * 
    **/
    distinct?: Enumerable<Random1ScalarFieldEnum>
  }

  /**
   * Random1 findFirst
   */
  export interface Random1FindFirstArgs extends Random1FindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Random1 findFirstOrThrow
   */
  export type Random1FindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Random1
     * 
    **/
    select?: Random1Select | null
    /**
     * Filter, which Random1 to fetch.
     * 
    **/
    where?: Random1WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Random1s to fetch.
     * 
    **/
    orderBy?: Enumerable<Random1OrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Random1s.
     * 
    **/
    cursor?: Random1WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Random1s from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Random1s.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Random1s.
     * 
    **/
    distinct?: Enumerable<Random1ScalarFieldEnum>
  }


  /**
   * Random1 findMany
   */
  export type Random1FindManyArgs = {
    /**
     * Select specific fields to fetch from the Random1
     * 
    **/
    select?: Random1Select | null
    /**
     * Filter, which Random1s to fetch.
     * 
    **/
    where?: Random1WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Random1s to fetch.
     * 
    **/
    orderBy?: Enumerable<Random1OrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Random1s.
     * 
    **/
    cursor?: Random1WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Random1s from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Random1s.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Random1ScalarFieldEnum>
  }


  /**
   * Random1 create
   */
  export type Random1CreateArgs = {
    /**
     * Select specific fields to fetch from the Random1
     * 
    **/
    select?: Random1Select | null
    /**
     * The data needed to create a Random1.
     * 
    **/
    data: XOR<Random1CreateInput, Random1UncheckedCreateInput>
  }


  /**
   * Random1 createMany
   */
  export type Random1CreateManyArgs = {
    /**
     * The data used to create many Random1s.
     * 
    **/
    data: Enumerable<Random1CreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Random1 update
   */
  export type Random1UpdateArgs = {
    /**
     * Select specific fields to fetch from the Random1
     * 
    **/
    select?: Random1Select | null
    /**
     * The data needed to update a Random1.
     * 
    **/
    data: XOR<Random1UpdateInput, Random1UncheckedUpdateInput>
    /**
     * Choose, which Random1 to update.
     * 
    **/
    where: Random1WhereUniqueInput
  }


  /**
   * Random1 updateMany
   */
  export type Random1UpdateManyArgs = {
    /**
     * The data used to update Random1s.
     * 
    **/
    data: XOR<Random1UpdateManyMutationInput, Random1UncheckedUpdateManyInput>
    /**
     * Filter which Random1s to update
     * 
    **/
    where?: Random1WhereInput
  }


  /**
   * Random1 upsert
   */
  export type Random1UpsertArgs = {
    /**
     * Select specific fields to fetch from the Random1
     * 
    **/
    select?: Random1Select | null
    /**
     * The filter to search for the Random1 to update in case it exists.
     * 
    **/
    where: Random1WhereUniqueInput
    /**
     * In case the Random1 found by the `where` argument doesn't exist, create a new Random1 with this data.
     * 
    **/
    create: XOR<Random1CreateInput, Random1UncheckedCreateInput>
    /**
     * In case the Random1 was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<Random1UpdateInput, Random1UncheckedUpdateInput>
  }


  /**
   * Random1 delete
   */
  export type Random1DeleteArgs = {
    /**
     * Select specific fields to fetch from the Random1
     * 
    **/
    select?: Random1Select | null
    /**
     * Filter which Random1 to delete.
     * 
    **/
    where: Random1WhereUniqueInput
  }


  /**
   * Random1 deleteMany
   */
  export type Random1DeleteManyArgs = {
    /**
     * Filter which Random1s to delete
     * 
    **/
    where?: Random1WhereInput
  }


  /**
   * Random1 without action
   */
  export type Random1Args = {
    /**
     * Select specific fields to fetch from the Random1
     * 
    **/
    select?: Random1Select | null
  }



  /**
   * Model Testdocument
   */


  export type AggregateTestdocument = {
    _count: TestdocumentCountAggregateOutputType | null
    _avg: TestdocumentAvgAggregateOutputType | null
    _sum: TestdocumentSumAggregateOutputType | null
    _min: TestdocumentMinAggregateOutputType | null
    _max: TestdocumentMaxAggregateOutputType | null
  }

  export type TestdocumentAvgAggregateOutputType = {
    doc_id: number | null
    x_position: number | null
    y_position: number | null
    width: number | null
    height: number | null
  }

  export type TestdocumentSumAggregateOutputType = {
    doc_id: number | null
    x_position: number | null
    y_position: number | null
    width: number | null
    height: number | null
  }

  export type TestdocumentMinAggregateOutputType = {
    doc_id: number | null
    experiment_name: string | null
    type: string | null
    createdtime: string | null
    x_position: number | null
    y_position: number | null
    width: number | null
    height: number | null
  }

  export type TestdocumentMaxAggregateOutputType = {
    doc_id: number | null
    experiment_name: string | null
    type: string | null
    createdtime: string | null
    x_position: number | null
    y_position: number | null
    width: number | null
    height: number | null
  }

  export type TestdocumentCountAggregateOutputType = {
    doc_id: number
    experiment_name: number
    type: number
    createdtime: number
    x_position: number
    y_position: number
    width: number
    height: number
    _all: number
  }


  export type TestdocumentAvgAggregateInputType = {
    doc_id?: true
    x_position?: true
    y_position?: true
    width?: true
    height?: true
  }

  export type TestdocumentSumAggregateInputType = {
    doc_id?: true
    x_position?: true
    y_position?: true
    width?: true
    height?: true
  }

  export type TestdocumentMinAggregateInputType = {
    doc_id?: true
    experiment_name?: true
    type?: true
    createdtime?: true
    x_position?: true
    y_position?: true
    width?: true
    height?: true
  }

  export type TestdocumentMaxAggregateInputType = {
    doc_id?: true
    experiment_name?: true
    type?: true
    createdtime?: true
    x_position?: true
    y_position?: true
    width?: true
    height?: true
  }

  export type TestdocumentCountAggregateInputType = {
    doc_id?: true
    experiment_name?: true
    type?: true
    createdtime?: true
    x_position?: true
    y_position?: true
    width?: true
    height?: true
    _all?: true
  }

  export type TestdocumentAggregateArgs = {
    /**
     * Filter which Testdocument to aggregate.
     * 
    **/
    where?: TestdocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testdocuments to fetch.
     * 
    **/
    orderBy?: Enumerable<TestdocumentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: TestdocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testdocuments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testdocuments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Testdocuments
    **/
    _count?: true | TestdocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestdocumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestdocumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestdocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestdocumentMaxAggregateInputType
  }

  export type GetTestdocumentAggregateType<T extends TestdocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateTestdocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestdocument[P]>
      : GetScalarType<T[P], AggregateTestdocument[P]>
  }




  export type TestdocumentGroupByArgs = {
    where?: TestdocumentWhereInput
    orderBy?: Enumerable<TestdocumentOrderByWithAggregationInput>
    by: Array<TestdocumentScalarFieldEnum>
    having?: TestdocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestdocumentCountAggregateInputType | true
    _avg?: TestdocumentAvgAggregateInputType
    _sum?: TestdocumentSumAggregateInputType
    _min?: TestdocumentMinAggregateInputType
    _max?: TestdocumentMaxAggregateInputType
  }


  export type TestdocumentGroupByOutputType = {
    doc_id: number
    experiment_name: string
    type: string | null
    createdtime: string
    x_position: number | null
    y_position: number | null
    width: number | null
    height: number | null
    _count: TestdocumentCountAggregateOutputType | null
    _avg: TestdocumentAvgAggregateOutputType | null
    _sum: TestdocumentSumAggregateOutputType | null
    _min: TestdocumentMinAggregateOutputType | null
    _max: TestdocumentMaxAggregateOutputType | null
  }

  type GetTestdocumentGroupByPayload<T extends TestdocumentGroupByArgs> = PrismaPromise<
    Array<
      PickArray<TestdocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestdocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestdocumentGroupByOutputType[P]>
            : GetScalarType<T[P], TestdocumentGroupByOutputType[P]>
        }
      >
    >


  export type TestdocumentSelect = {
    doc_id?: boolean
    experiment_name?: boolean
    type?: boolean
    createdtime?: boolean
    x_position?: boolean
    y_position?: boolean
    width?: boolean
    height?: boolean
    images?: boolean | ImagesArgs
  }


  export type TestdocumentInclude = {
    images?: boolean | ImagesArgs
  } 

  export type TestdocumentGetPayload<S extends boolean | null | undefined | TestdocumentArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Testdocument :
    S extends undefined ? never :
    S extends { include: any } & (TestdocumentArgs | TestdocumentFindManyArgs)
    ? Testdocument  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'images' ? ImagesGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (TestdocumentArgs | TestdocumentFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'images' ? ImagesGetPayload<S['select'][P]> | null :  P extends keyof Testdocument ? Testdocument[P] : never
  } 
      : Testdocument


  type TestdocumentCountArgs = Merge<
    Omit<TestdocumentFindManyArgs, 'select' | 'include'> & {
      select?: TestdocumentCountAggregateInputType | true
    }
  >

  export interface TestdocumentDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Testdocument that matches the filter.
     * @param {TestdocumentFindUniqueArgs} args - Arguments to find a Testdocument
     * @example
     * // Get one Testdocument
     * const testdocument = await prisma.testdocument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TestdocumentFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TestdocumentFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Testdocument'> extends True ? Prisma__TestdocumentClient<TestdocumentGetPayload<T>> : Prisma__TestdocumentClient<TestdocumentGetPayload<T> | null, null>

    /**
     * Find one Testdocument that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TestdocumentFindUniqueOrThrowArgs} args - Arguments to find a Testdocument
     * @example
     * // Get one Testdocument
     * const testdocument = await prisma.testdocument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TestdocumentFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TestdocumentFindUniqueOrThrowArgs>
    ): Prisma__TestdocumentClient<TestdocumentGetPayload<T>>

    /**
     * Find the first Testdocument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestdocumentFindFirstArgs} args - Arguments to find a Testdocument
     * @example
     * // Get one Testdocument
     * const testdocument = await prisma.testdocument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TestdocumentFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TestdocumentFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Testdocument'> extends True ? Prisma__TestdocumentClient<TestdocumentGetPayload<T>> : Prisma__TestdocumentClient<TestdocumentGetPayload<T> | null, null>

    /**
     * Find the first Testdocument that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestdocumentFindFirstOrThrowArgs} args - Arguments to find a Testdocument
     * @example
     * // Get one Testdocument
     * const testdocument = await prisma.testdocument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TestdocumentFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TestdocumentFindFirstOrThrowArgs>
    ): Prisma__TestdocumentClient<TestdocumentGetPayload<T>>

    /**
     * Find zero or more Testdocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestdocumentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Testdocuments
     * const testdocuments = await prisma.testdocument.findMany()
     * 
     * // Get first 10 Testdocuments
     * const testdocuments = await prisma.testdocument.findMany({ take: 10 })
     * 
     * // Only select the `doc_id`
     * const testdocumentWithDoc_idOnly = await prisma.testdocument.findMany({ select: { doc_id: true } })
     * 
    **/
    findMany<T extends TestdocumentFindManyArgs>(
      args?: SelectSubset<T, TestdocumentFindManyArgs>
    ): PrismaPromise<Array<TestdocumentGetPayload<T>>>

    /**
     * Create a Testdocument.
     * @param {TestdocumentCreateArgs} args - Arguments to create a Testdocument.
     * @example
     * // Create one Testdocument
     * const Testdocument = await prisma.testdocument.create({
     *   data: {
     *     // ... data to create a Testdocument
     *   }
     * })
     * 
    **/
    create<T extends TestdocumentCreateArgs>(
      args: SelectSubset<T, TestdocumentCreateArgs>
    ): Prisma__TestdocumentClient<TestdocumentGetPayload<T>>

    /**
     * Create many Testdocuments.
     *     @param {TestdocumentCreateManyArgs} args - Arguments to create many Testdocuments.
     *     @example
     *     // Create many Testdocuments
     *     const testdocument = await prisma.testdocument.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TestdocumentCreateManyArgs>(
      args?: SelectSubset<T, TestdocumentCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Testdocument.
     * @param {TestdocumentDeleteArgs} args - Arguments to delete one Testdocument.
     * @example
     * // Delete one Testdocument
     * const Testdocument = await prisma.testdocument.delete({
     *   where: {
     *     // ... filter to delete one Testdocument
     *   }
     * })
     * 
    **/
    delete<T extends TestdocumentDeleteArgs>(
      args: SelectSubset<T, TestdocumentDeleteArgs>
    ): Prisma__TestdocumentClient<TestdocumentGetPayload<T>>

    /**
     * Update one Testdocument.
     * @param {TestdocumentUpdateArgs} args - Arguments to update one Testdocument.
     * @example
     * // Update one Testdocument
     * const testdocument = await prisma.testdocument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TestdocumentUpdateArgs>(
      args: SelectSubset<T, TestdocumentUpdateArgs>
    ): Prisma__TestdocumentClient<TestdocumentGetPayload<T>>

    /**
     * Delete zero or more Testdocuments.
     * @param {TestdocumentDeleteManyArgs} args - Arguments to filter Testdocuments to delete.
     * @example
     * // Delete a few Testdocuments
     * const { count } = await prisma.testdocument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TestdocumentDeleteManyArgs>(
      args?: SelectSubset<T, TestdocumentDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Testdocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestdocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Testdocuments
     * const testdocument = await prisma.testdocument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TestdocumentUpdateManyArgs>(
      args: SelectSubset<T, TestdocumentUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Testdocument.
     * @param {TestdocumentUpsertArgs} args - Arguments to update or create a Testdocument.
     * @example
     * // Update or create a Testdocument
     * const testdocument = await prisma.testdocument.upsert({
     *   create: {
     *     // ... data to create a Testdocument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Testdocument we want to update
     *   }
     * })
    **/
    upsert<T extends TestdocumentUpsertArgs>(
      args: SelectSubset<T, TestdocumentUpsertArgs>
    ): Prisma__TestdocumentClient<TestdocumentGetPayload<T>>

    /**
     * Count the number of Testdocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestdocumentCountArgs} args - Arguments to filter Testdocuments to count.
     * @example
     * // Count the number of Testdocuments
     * const count = await prisma.testdocument.count({
     *   where: {
     *     // ... the filter for the Testdocuments we want to count
     *   }
     * })
    **/
    count<T extends TestdocumentCountArgs>(
      args?: Subset<T, TestdocumentCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestdocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Testdocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestdocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TestdocumentAggregateArgs>(args: Subset<T, TestdocumentAggregateArgs>): PrismaPromise<GetTestdocumentAggregateType<T>>

    /**
     * Group by Testdocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestdocumentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TestdocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestdocumentGroupByArgs['orderBy'] }
        : { orderBy?: TestdocumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TestdocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestdocumentGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Testdocument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TestdocumentClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    images<T extends ImagesArgs= {}>(args?: Subset<T, ImagesArgs>): Prisma__ImagesClient<ImagesGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Testdocument base type for findUnique actions
   */
  export type TestdocumentFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Testdocument
     * 
    **/
    select?: TestdocumentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TestdocumentInclude | null
    /**
     * Filter, which Testdocument to fetch.
     * 
    **/
    where: TestdocumentWhereUniqueInput
  }

  /**
   * Testdocument findUnique
   */
  export interface TestdocumentFindUniqueArgs extends TestdocumentFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Testdocument findUniqueOrThrow
   */
  export type TestdocumentFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Testdocument
     * 
    **/
    select?: TestdocumentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TestdocumentInclude | null
    /**
     * Filter, which Testdocument to fetch.
     * 
    **/
    where: TestdocumentWhereUniqueInput
  }


  /**
   * Testdocument base type for findFirst actions
   */
  export type TestdocumentFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Testdocument
     * 
    **/
    select?: TestdocumentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TestdocumentInclude | null
    /**
     * Filter, which Testdocument to fetch.
     * 
    **/
    where?: TestdocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testdocuments to fetch.
     * 
    **/
    orderBy?: Enumerable<TestdocumentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Testdocuments.
     * 
    **/
    cursor?: TestdocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testdocuments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testdocuments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Testdocuments.
     * 
    **/
    distinct?: Enumerable<TestdocumentScalarFieldEnum>
  }

  /**
   * Testdocument findFirst
   */
  export interface TestdocumentFindFirstArgs extends TestdocumentFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Testdocument findFirstOrThrow
   */
  export type TestdocumentFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Testdocument
     * 
    **/
    select?: TestdocumentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TestdocumentInclude | null
    /**
     * Filter, which Testdocument to fetch.
     * 
    **/
    where?: TestdocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testdocuments to fetch.
     * 
    **/
    orderBy?: Enumerable<TestdocumentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Testdocuments.
     * 
    **/
    cursor?: TestdocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testdocuments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testdocuments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Testdocuments.
     * 
    **/
    distinct?: Enumerable<TestdocumentScalarFieldEnum>
  }


  /**
   * Testdocument findMany
   */
  export type TestdocumentFindManyArgs = {
    /**
     * Select specific fields to fetch from the Testdocument
     * 
    **/
    select?: TestdocumentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TestdocumentInclude | null
    /**
     * Filter, which Testdocuments to fetch.
     * 
    **/
    where?: TestdocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testdocuments to fetch.
     * 
    **/
    orderBy?: Enumerable<TestdocumentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Testdocuments.
     * 
    **/
    cursor?: TestdocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testdocuments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testdocuments.
     * 
    **/
    skip?: number
    distinct?: Enumerable<TestdocumentScalarFieldEnum>
  }


  /**
   * Testdocument create
   */
  export type TestdocumentCreateArgs = {
    /**
     * Select specific fields to fetch from the Testdocument
     * 
    **/
    select?: TestdocumentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TestdocumentInclude | null
    /**
     * The data needed to create a Testdocument.
     * 
    **/
    data: XOR<TestdocumentCreateInput, TestdocumentUncheckedCreateInput>
  }


  /**
   * Testdocument createMany
   */
  export type TestdocumentCreateManyArgs = {
    /**
     * The data used to create many Testdocuments.
     * 
    **/
    data: Enumerable<TestdocumentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Testdocument update
   */
  export type TestdocumentUpdateArgs = {
    /**
     * Select specific fields to fetch from the Testdocument
     * 
    **/
    select?: TestdocumentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TestdocumentInclude | null
    /**
     * The data needed to update a Testdocument.
     * 
    **/
    data: XOR<TestdocumentUpdateInput, TestdocumentUncheckedUpdateInput>
    /**
     * Choose, which Testdocument to update.
     * 
    **/
    where: TestdocumentWhereUniqueInput
  }


  /**
   * Testdocument updateMany
   */
  export type TestdocumentUpdateManyArgs = {
    /**
     * The data used to update Testdocuments.
     * 
    **/
    data: XOR<TestdocumentUpdateManyMutationInput, TestdocumentUncheckedUpdateManyInput>
    /**
     * Filter which Testdocuments to update
     * 
    **/
    where?: TestdocumentWhereInput
  }


  /**
   * Testdocument upsert
   */
  export type TestdocumentUpsertArgs = {
    /**
     * Select specific fields to fetch from the Testdocument
     * 
    **/
    select?: TestdocumentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TestdocumentInclude | null
    /**
     * The filter to search for the Testdocument to update in case it exists.
     * 
    **/
    where: TestdocumentWhereUniqueInput
    /**
     * In case the Testdocument found by the `where` argument doesn't exist, create a new Testdocument with this data.
     * 
    **/
    create: XOR<TestdocumentCreateInput, TestdocumentUncheckedCreateInput>
    /**
     * In case the Testdocument was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<TestdocumentUpdateInput, TestdocumentUncheckedUpdateInput>
  }


  /**
   * Testdocument delete
   */
  export type TestdocumentDeleteArgs = {
    /**
     * Select specific fields to fetch from the Testdocument
     * 
    **/
    select?: TestdocumentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TestdocumentInclude | null
    /**
     * Filter which Testdocument to delete.
     * 
    **/
    where: TestdocumentWhereUniqueInput
  }


  /**
   * Testdocument deleteMany
   */
  export type TestdocumentDeleteManyArgs = {
    /**
     * Filter which Testdocuments to delete
     * 
    **/
    where?: TestdocumentWhereInput
  }


  /**
   * Testdocument without action
   */
  export type TestdocumentArgs = {
    /**
     * Select specific fields to fetch from the Testdocument
     * 
    **/
    select?: TestdocumentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TestdocumentInclude | null
  }



  /**
   * Model Todolist
   */


  export type AggregateTodolist = {
    _count: TodolistCountAggregateOutputType | null
    _avg: TodolistAvgAggregateOutputType | null
    _sum: TodolistSumAggregateOutputType | null
    _min: TodolistMinAggregateOutputType | null
    _max: TodolistMaxAggregateOutputType | null
  }

  export type TodolistAvgAggregateOutputType = {
    item_id: number | null
    doc_id: number | null
    checked: number | null
  }

  export type TodolistSumAggregateOutputType = {
    item_id: number | null
    doc_id: number | null
    checked: number | null
  }

  export type TodolistMinAggregateOutputType = {
    item_id: number | null
    doc_id: number | null
    checked: number | null
    task: string | null
  }

  export type TodolistMaxAggregateOutputType = {
    item_id: number | null
    doc_id: number | null
    checked: number | null
    task: string | null
  }

  export type TodolistCountAggregateOutputType = {
    item_id: number
    doc_id: number
    checked: number
    task: number
    _all: number
  }


  export type TodolistAvgAggregateInputType = {
    item_id?: true
    doc_id?: true
    checked?: true
  }

  export type TodolistSumAggregateInputType = {
    item_id?: true
    doc_id?: true
    checked?: true
  }

  export type TodolistMinAggregateInputType = {
    item_id?: true
    doc_id?: true
    checked?: true
    task?: true
  }

  export type TodolistMaxAggregateInputType = {
    item_id?: true
    doc_id?: true
    checked?: true
    task?: true
  }

  export type TodolistCountAggregateInputType = {
    item_id?: true
    doc_id?: true
    checked?: true
    task?: true
    _all?: true
  }

  export type TodolistAggregateArgs = {
    /**
     * Filter which Todolist to aggregate.
     * 
    **/
    where?: TodolistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Todolists to fetch.
     * 
    **/
    orderBy?: Enumerable<TodolistOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: TodolistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Todolists from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Todolists.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Todolists
    **/
    _count?: true | TodolistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TodolistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TodolistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TodolistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TodolistMaxAggregateInputType
  }

  export type GetTodolistAggregateType<T extends TodolistAggregateArgs> = {
        [P in keyof T & keyof AggregateTodolist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTodolist[P]>
      : GetScalarType<T[P], AggregateTodolist[P]>
  }




  export type TodolistGroupByArgs = {
    where?: TodolistWhereInput
    orderBy?: Enumerable<TodolistOrderByWithAggregationInput>
    by: Array<TodolistScalarFieldEnum>
    having?: TodolistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TodolistCountAggregateInputType | true
    _avg?: TodolistAvgAggregateInputType
    _sum?: TodolistSumAggregateInputType
    _min?: TodolistMinAggregateInputType
    _max?: TodolistMaxAggregateInputType
  }


  export type TodolistGroupByOutputType = {
    item_id: number
    doc_id: number
    checked: number | null
    task: string | null
    _count: TodolistCountAggregateOutputType | null
    _avg: TodolistAvgAggregateOutputType | null
    _sum: TodolistSumAggregateOutputType | null
    _min: TodolistMinAggregateOutputType | null
    _max: TodolistMaxAggregateOutputType | null
  }

  type GetTodolistGroupByPayload<T extends TodolistGroupByArgs> = PrismaPromise<
    Array<
      PickArray<TodolistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TodolistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TodolistGroupByOutputType[P]>
            : GetScalarType<T[P], TodolistGroupByOutputType[P]>
        }
      >
    >


  export type TodolistSelect = {
    item_id?: boolean
    doc_id?: boolean
    checked?: boolean
    task?: boolean
  }


  export type TodolistGetPayload<S extends boolean | null | undefined | TodolistArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Todolist :
    S extends undefined ? never :
    S extends { include: any } & (TodolistArgs | TodolistFindManyArgs)
    ? Todolist 
    : S extends { select: any } & (TodolistArgs | TodolistFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Todolist ? Todolist[P] : never
  } 
      : Todolist


  type TodolistCountArgs = Merge<
    Omit<TodolistFindManyArgs, 'select' | 'include'> & {
      select?: TodolistCountAggregateInputType | true
    }
  >

  export interface TodolistDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Todolist that matches the filter.
     * @param {TodolistFindUniqueArgs} args - Arguments to find a Todolist
     * @example
     * // Get one Todolist
     * const todolist = await prisma.todolist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TodolistFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TodolistFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Todolist'> extends True ? Prisma__TodolistClient<TodolistGetPayload<T>> : Prisma__TodolistClient<TodolistGetPayload<T> | null, null>

    /**
     * Find one Todolist that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TodolistFindUniqueOrThrowArgs} args - Arguments to find a Todolist
     * @example
     * // Get one Todolist
     * const todolist = await prisma.todolist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TodolistFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TodolistFindUniqueOrThrowArgs>
    ): Prisma__TodolistClient<TodolistGetPayload<T>>

    /**
     * Find the first Todolist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodolistFindFirstArgs} args - Arguments to find a Todolist
     * @example
     * // Get one Todolist
     * const todolist = await prisma.todolist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TodolistFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TodolistFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Todolist'> extends True ? Prisma__TodolistClient<TodolistGetPayload<T>> : Prisma__TodolistClient<TodolistGetPayload<T> | null, null>

    /**
     * Find the first Todolist that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodolistFindFirstOrThrowArgs} args - Arguments to find a Todolist
     * @example
     * // Get one Todolist
     * const todolist = await prisma.todolist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TodolistFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TodolistFindFirstOrThrowArgs>
    ): Prisma__TodolistClient<TodolistGetPayload<T>>

    /**
     * Find zero or more Todolists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodolistFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Todolists
     * const todolists = await prisma.todolist.findMany()
     * 
     * // Get first 10 Todolists
     * const todolists = await prisma.todolist.findMany({ take: 10 })
     * 
     * // Only select the `item_id`
     * const todolistWithItem_idOnly = await prisma.todolist.findMany({ select: { item_id: true } })
     * 
    **/
    findMany<T extends TodolistFindManyArgs>(
      args?: SelectSubset<T, TodolistFindManyArgs>
    ): PrismaPromise<Array<TodolistGetPayload<T>>>

    /**
     * Create a Todolist.
     * @param {TodolistCreateArgs} args - Arguments to create a Todolist.
     * @example
     * // Create one Todolist
     * const Todolist = await prisma.todolist.create({
     *   data: {
     *     // ... data to create a Todolist
     *   }
     * })
     * 
    **/
    create<T extends TodolistCreateArgs>(
      args: SelectSubset<T, TodolistCreateArgs>
    ): Prisma__TodolistClient<TodolistGetPayload<T>>

    /**
     * Create many Todolists.
     *     @param {TodolistCreateManyArgs} args - Arguments to create many Todolists.
     *     @example
     *     // Create many Todolists
     *     const todolist = await prisma.todolist.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TodolistCreateManyArgs>(
      args?: SelectSubset<T, TodolistCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Todolist.
     * @param {TodolistDeleteArgs} args - Arguments to delete one Todolist.
     * @example
     * // Delete one Todolist
     * const Todolist = await prisma.todolist.delete({
     *   where: {
     *     // ... filter to delete one Todolist
     *   }
     * })
     * 
    **/
    delete<T extends TodolistDeleteArgs>(
      args: SelectSubset<T, TodolistDeleteArgs>
    ): Prisma__TodolistClient<TodolistGetPayload<T>>

    /**
     * Update one Todolist.
     * @param {TodolistUpdateArgs} args - Arguments to update one Todolist.
     * @example
     * // Update one Todolist
     * const todolist = await prisma.todolist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TodolistUpdateArgs>(
      args: SelectSubset<T, TodolistUpdateArgs>
    ): Prisma__TodolistClient<TodolistGetPayload<T>>

    /**
     * Delete zero or more Todolists.
     * @param {TodolistDeleteManyArgs} args - Arguments to filter Todolists to delete.
     * @example
     * // Delete a few Todolists
     * const { count } = await prisma.todolist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TodolistDeleteManyArgs>(
      args?: SelectSubset<T, TodolistDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Todolists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodolistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Todolists
     * const todolist = await prisma.todolist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TodolistUpdateManyArgs>(
      args: SelectSubset<T, TodolistUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Todolist.
     * @param {TodolistUpsertArgs} args - Arguments to update or create a Todolist.
     * @example
     * // Update or create a Todolist
     * const todolist = await prisma.todolist.upsert({
     *   create: {
     *     // ... data to create a Todolist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Todolist we want to update
     *   }
     * })
    **/
    upsert<T extends TodolistUpsertArgs>(
      args: SelectSubset<T, TodolistUpsertArgs>
    ): Prisma__TodolistClient<TodolistGetPayload<T>>

    /**
     * Count the number of Todolists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodolistCountArgs} args - Arguments to filter Todolists to count.
     * @example
     * // Count the number of Todolists
     * const count = await prisma.todolist.count({
     *   where: {
     *     // ... the filter for the Todolists we want to count
     *   }
     * })
    **/
    count<T extends TodolistCountArgs>(
      args?: Subset<T, TodolistCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TodolistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Todolist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodolistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TodolistAggregateArgs>(args: Subset<T, TodolistAggregateArgs>): PrismaPromise<GetTodolistAggregateType<T>>

    /**
     * Group by Todolist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodolistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TodolistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TodolistGroupByArgs['orderBy'] }
        : { orderBy?: TodolistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TodolistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTodolistGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Todolist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TodolistClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Todolist base type for findUnique actions
   */
  export type TodolistFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Todolist
     * 
    **/
    select?: TodolistSelect | null
    /**
     * Filter, which Todolist to fetch.
     * 
    **/
    where: TodolistWhereUniqueInput
  }

  /**
   * Todolist findUnique
   */
  export interface TodolistFindUniqueArgs extends TodolistFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Todolist findUniqueOrThrow
   */
  export type TodolistFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Todolist
     * 
    **/
    select?: TodolistSelect | null
    /**
     * Filter, which Todolist to fetch.
     * 
    **/
    where: TodolistWhereUniqueInput
  }


  /**
   * Todolist base type for findFirst actions
   */
  export type TodolistFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Todolist
     * 
    **/
    select?: TodolistSelect | null
    /**
     * Filter, which Todolist to fetch.
     * 
    **/
    where?: TodolistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Todolists to fetch.
     * 
    **/
    orderBy?: Enumerable<TodolistOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Todolists.
     * 
    **/
    cursor?: TodolistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Todolists from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Todolists.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Todolists.
     * 
    **/
    distinct?: Enumerable<TodolistScalarFieldEnum>
  }

  /**
   * Todolist findFirst
   */
  export interface TodolistFindFirstArgs extends TodolistFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Todolist findFirstOrThrow
   */
  export type TodolistFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Todolist
     * 
    **/
    select?: TodolistSelect | null
    /**
     * Filter, which Todolist to fetch.
     * 
    **/
    where?: TodolistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Todolists to fetch.
     * 
    **/
    orderBy?: Enumerable<TodolistOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Todolists.
     * 
    **/
    cursor?: TodolistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Todolists from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Todolists.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Todolists.
     * 
    **/
    distinct?: Enumerable<TodolistScalarFieldEnum>
  }


  /**
   * Todolist findMany
   */
  export type TodolistFindManyArgs = {
    /**
     * Select specific fields to fetch from the Todolist
     * 
    **/
    select?: TodolistSelect | null
    /**
     * Filter, which Todolists to fetch.
     * 
    **/
    where?: TodolistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Todolists to fetch.
     * 
    **/
    orderBy?: Enumerable<TodolistOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Todolists.
     * 
    **/
    cursor?: TodolistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Todolists from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Todolists.
     * 
    **/
    skip?: number
    distinct?: Enumerable<TodolistScalarFieldEnum>
  }


  /**
   * Todolist create
   */
  export type TodolistCreateArgs = {
    /**
     * Select specific fields to fetch from the Todolist
     * 
    **/
    select?: TodolistSelect | null
    /**
     * The data needed to create a Todolist.
     * 
    **/
    data: XOR<TodolistCreateInput, TodolistUncheckedCreateInput>
  }


  /**
   * Todolist createMany
   */
  export type TodolistCreateManyArgs = {
    /**
     * The data used to create many Todolists.
     * 
    **/
    data: Enumerable<TodolistCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Todolist update
   */
  export type TodolistUpdateArgs = {
    /**
     * Select specific fields to fetch from the Todolist
     * 
    **/
    select?: TodolistSelect | null
    /**
     * The data needed to update a Todolist.
     * 
    **/
    data: XOR<TodolistUpdateInput, TodolistUncheckedUpdateInput>
    /**
     * Choose, which Todolist to update.
     * 
    **/
    where: TodolistWhereUniqueInput
  }


  /**
   * Todolist updateMany
   */
  export type TodolistUpdateManyArgs = {
    /**
     * The data used to update Todolists.
     * 
    **/
    data: XOR<TodolistUpdateManyMutationInput, TodolistUncheckedUpdateManyInput>
    /**
     * Filter which Todolists to update
     * 
    **/
    where?: TodolistWhereInput
  }


  /**
   * Todolist upsert
   */
  export type TodolistUpsertArgs = {
    /**
     * Select specific fields to fetch from the Todolist
     * 
    **/
    select?: TodolistSelect | null
    /**
     * The filter to search for the Todolist to update in case it exists.
     * 
    **/
    where: TodolistWhereUniqueInput
    /**
     * In case the Todolist found by the `where` argument doesn't exist, create a new Todolist with this data.
     * 
    **/
    create: XOR<TodolistCreateInput, TodolistUncheckedCreateInput>
    /**
     * In case the Todolist was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<TodolistUpdateInput, TodolistUncheckedUpdateInput>
  }


  /**
   * Todolist delete
   */
  export type TodolistDeleteArgs = {
    /**
     * Select specific fields to fetch from the Todolist
     * 
    **/
    select?: TodolistSelect | null
    /**
     * Filter which Todolist to delete.
     * 
    **/
    where: TodolistWhereUniqueInput
  }


  /**
   * Todolist deleteMany
   */
  export type TodolistDeleteManyArgs = {
    /**
     * Filter which Todolists to delete
     * 
    **/
    where?: TodolistWhereInput
  }


  /**
   * Todolist without action
   */
  export type TodolistArgs = {
    /**
     * Select specific fields to fetch from the Todolist
     * 
    **/
    select?: TodolistSelect | null
  }



  /**
   * Model Todolist1
   */


  export type AggregateTodolist1 = {
    _count: Todolist1CountAggregateOutputType | null
    _avg: Todolist1AvgAggregateOutputType | null
    _sum: Todolist1SumAggregateOutputType | null
    _min: Todolist1MinAggregateOutputType | null
    _max: Todolist1MaxAggregateOutputType | null
  }

  export type Todolist1AvgAggregateOutputType = {
    item_id: number | null
    doc_id: number | null
    checked: number | null
  }

  export type Todolist1SumAggregateOutputType = {
    item_id: number | null
    doc_id: number | null
    checked: number | null
  }

  export type Todolist1MinAggregateOutputType = {
    item_id: number | null
    doc_id: number | null
    checked: number | null
    task: string | null
  }

  export type Todolist1MaxAggregateOutputType = {
    item_id: number | null
    doc_id: number | null
    checked: number | null
    task: string | null
  }

  export type Todolist1CountAggregateOutputType = {
    item_id: number
    doc_id: number
    checked: number
    task: number
    _all: number
  }


  export type Todolist1AvgAggregateInputType = {
    item_id?: true
    doc_id?: true
    checked?: true
  }

  export type Todolist1SumAggregateInputType = {
    item_id?: true
    doc_id?: true
    checked?: true
  }

  export type Todolist1MinAggregateInputType = {
    item_id?: true
    doc_id?: true
    checked?: true
    task?: true
  }

  export type Todolist1MaxAggregateInputType = {
    item_id?: true
    doc_id?: true
    checked?: true
    task?: true
  }

  export type Todolist1CountAggregateInputType = {
    item_id?: true
    doc_id?: true
    checked?: true
    task?: true
    _all?: true
  }

  export type Todolist1AggregateArgs = {
    /**
     * Filter which Todolist1 to aggregate.
     * 
    **/
    where?: Todolist1WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Todolist1s to fetch.
     * 
    **/
    orderBy?: Enumerable<Todolist1OrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: Todolist1WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Todolist1s from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Todolist1s.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Todolist1s
    **/
    _count?: true | Todolist1CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Todolist1AvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Todolist1SumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Todolist1MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Todolist1MaxAggregateInputType
  }

  export type GetTodolist1AggregateType<T extends Todolist1AggregateArgs> = {
        [P in keyof T & keyof AggregateTodolist1]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTodolist1[P]>
      : GetScalarType<T[P], AggregateTodolist1[P]>
  }




  export type Todolist1GroupByArgs = {
    where?: Todolist1WhereInput
    orderBy?: Enumerable<Todolist1OrderByWithAggregationInput>
    by: Array<Todolist1ScalarFieldEnum>
    having?: Todolist1ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Todolist1CountAggregateInputType | true
    _avg?: Todolist1AvgAggregateInputType
    _sum?: Todolist1SumAggregateInputType
    _min?: Todolist1MinAggregateInputType
    _max?: Todolist1MaxAggregateInputType
  }


  export type Todolist1GroupByOutputType = {
    item_id: number
    doc_id: number
    checked: number | null
    task: string | null
    _count: Todolist1CountAggregateOutputType | null
    _avg: Todolist1AvgAggregateOutputType | null
    _sum: Todolist1SumAggregateOutputType | null
    _min: Todolist1MinAggregateOutputType | null
    _max: Todolist1MaxAggregateOutputType | null
  }

  type GetTodolist1GroupByPayload<T extends Todolist1GroupByArgs> = PrismaPromise<
    Array<
      PickArray<Todolist1GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Todolist1GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Todolist1GroupByOutputType[P]>
            : GetScalarType<T[P], Todolist1GroupByOutputType[P]>
        }
      >
    >


  export type Todolist1Select = {
    item_id?: boolean
    doc_id?: boolean
    checked?: boolean
    task?: boolean
  }


  export type Todolist1GetPayload<S extends boolean | null | undefined | Todolist1Args> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Todolist1 :
    S extends undefined ? never :
    S extends { include: any } & (Todolist1Args | Todolist1FindManyArgs)
    ? Todolist1 
    : S extends { select: any } & (Todolist1Args | Todolist1FindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Todolist1 ? Todolist1[P] : never
  } 
      : Todolist1


  type Todolist1CountArgs = Merge<
    Omit<Todolist1FindManyArgs, 'select' | 'include'> & {
      select?: Todolist1CountAggregateInputType | true
    }
  >

  export interface Todolist1Delegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Todolist1 that matches the filter.
     * @param {Todolist1FindUniqueArgs} args - Arguments to find a Todolist1
     * @example
     * // Get one Todolist1
     * const todolist1 = await prisma.todolist1.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Todolist1FindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Todolist1FindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Todolist1'> extends True ? Prisma__Todolist1Client<Todolist1GetPayload<T>> : Prisma__Todolist1Client<Todolist1GetPayload<T> | null, null>

    /**
     * Find one Todolist1 that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Todolist1FindUniqueOrThrowArgs} args - Arguments to find a Todolist1
     * @example
     * // Get one Todolist1
     * const todolist1 = await prisma.todolist1.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Todolist1FindUniqueOrThrowArgs>(
      args?: SelectSubset<T, Todolist1FindUniqueOrThrowArgs>
    ): Prisma__Todolist1Client<Todolist1GetPayload<T>>

    /**
     * Find the first Todolist1 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Todolist1FindFirstArgs} args - Arguments to find a Todolist1
     * @example
     * // Get one Todolist1
     * const todolist1 = await prisma.todolist1.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Todolist1FindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Todolist1FindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Todolist1'> extends True ? Prisma__Todolist1Client<Todolist1GetPayload<T>> : Prisma__Todolist1Client<Todolist1GetPayload<T> | null, null>

    /**
     * Find the first Todolist1 that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Todolist1FindFirstOrThrowArgs} args - Arguments to find a Todolist1
     * @example
     * // Get one Todolist1
     * const todolist1 = await prisma.todolist1.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Todolist1FindFirstOrThrowArgs>(
      args?: SelectSubset<T, Todolist1FindFirstOrThrowArgs>
    ): Prisma__Todolist1Client<Todolist1GetPayload<T>>

    /**
     * Find zero or more Todolist1s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Todolist1FindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Todolist1s
     * const todolist1s = await prisma.todolist1.findMany()
     * 
     * // Get first 10 Todolist1s
     * const todolist1s = await prisma.todolist1.findMany({ take: 10 })
     * 
     * // Only select the `item_id`
     * const todolist1WithItem_idOnly = await prisma.todolist1.findMany({ select: { item_id: true } })
     * 
    **/
    findMany<T extends Todolist1FindManyArgs>(
      args?: SelectSubset<T, Todolist1FindManyArgs>
    ): PrismaPromise<Array<Todolist1GetPayload<T>>>

    /**
     * Create a Todolist1.
     * @param {Todolist1CreateArgs} args - Arguments to create a Todolist1.
     * @example
     * // Create one Todolist1
     * const Todolist1 = await prisma.todolist1.create({
     *   data: {
     *     // ... data to create a Todolist1
     *   }
     * })
     * 
    **/
    create<T extends Todolist1CreateArgs>(
      args: SelectSubset<T, Todolist1CreateArgs>
    ): Prisma__Todolist1Client<Todolist1GetPayload<T>>

    /**
     * Create many Todolist1s.
     *     @param {Todolist1CreateManyArgs} args - Arguments to create many Todolist1s.
     *     @example
     *     // Create many Todolist1s
     *     const todolist1 = await prisma.todolist1.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Todolist1CreateManyArgs>(
      args?: SelectSubset<T, Todolist1CreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Todolist1.
     * @param {Todolist1DeleteArgs} args - Arguments to delete one Todolist1.
     * @example
     * // Delete one Todolist1
     * const Todolist1 = await prisma.todolist1.delete({
     *   where: {
     *     // ... filter to delete one Todolist1
     *   }
     * })
     * 
    **/
    delete<T extends Todolist1DeleteArgs>(
      args: SelectSubset<T, Todolist1DeleteArgs>
    ): Prisma__Todolist1Client<Todolist1GetPayload<T>>

    /**
     * Update one Todolist1.
     * @param {Todolist1UpdateArgs} args - Arguments to update one Todolist1.
     * @example
     * // Update one Todolist1
     * const todolist1 = await prisma.todolist1.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Todolist1UpdateArgs>(
      args: SelectSubset<T, Todolist1UpdateArgs>
    ): Prisma__Todolist1Client<Todolist1GetPayload<T>>

    /**
     * Delete zero or more Todolist1s.
     * @param {Todolist1DeleteManyArgs} args - Arguments to filter Todolist1s to delete.
     * @example
     * // Delete a few Todolist1s
     * const { count } = await prisma.todolist1.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Todolist1DeleteManyArgs>(
      args?: SelectSubset<T, Todolist1DeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Todolist1s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Todolist1UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Todolist1s
     * const todolist1 = await prisma.todolist1.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Todolist1UpdateManyArgs>(
      args: SelectSubset<T, Todolist1UpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Todolist1.
     * @param {Todolist1UpsertArgs} args - Arguments to update or create a Todolist1.
     * @example
     * // Update or create a Todolist1
     * const todolist1 = await prisma.todolist1.upsert({
     *   create: {
     *     // ... data to create a Todolist1
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Todolist1 we want to update
     *   }
     * })
    **/
    upsert<T extends Todolist1UpsertArgs>(
      args: SelectSubset<T, Todolist1UpsertArgs>
    ): Prisma__Todolist1Client<Todolist1GetPayload<T>>

    /**
     * Count the number of Todolist1s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Todolist1CountArgs} args - Arguments to filter Todolist1s to count.
     * @example
     * // Count the number of Todolist1s
     * const count = await prisma.todolist1.count({
     *   where: {
     *     // ... the filter for the Todolist1s we want to count
     *   }
     * })
    **/
    count<T extends Todolist1CountArgs>(
      args?: Subset<T, Todolist1CountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Todolist1CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Todolist1.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Todolist1AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Todolist1AggregateArgs>(args: Subset<T, Todolist1AggregateArgs>): PrismaPromise<GetTodolist1AggregateType<T>>

    /**
     * Group by Todolist1.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Todolist1GroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Todolist1GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Todolist1GroupByArgs['orderBy'] }
        : { orderBy?: Todolist1GroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Todolist1GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTodolist1GroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Todolist1.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Todolist1Client<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Todolist1 base type for findUnique actions
   */
  export type Todolist1FindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Todolist1
     * 
    **/
    select?: Todolist1Select | null
    /**
     * Filter, which Todolist1 to fetch.
     * 
    **/
    where: Todolist1WhereUniqueInput
  }

  /**
   * Todolist1 findUnique
   */
  export interface Todolist1FindUniqueArgs extends Todolist1FindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Todolist1 findUniqueOrThrow
   */
  export type Todolist1FindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Todolist1
     * 
    **/
    select?: Todolist1Select | null
    /**
     * Filter, which Todolist1 to fetch.
     * 
    **/
    where: Todolist1WhereUniqueInput
  }


  /**
   * Todolist1 base type for findFirst actions
   */
  export type Todolist1FindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Todolist1
     * 
    **/
    select?: Todolist1Select | null
    /**
     * Filter, which Todolist1 to fetch.
     * 
    **/
    where?: Todolist1WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Todolist1s to fetch.
     * 
    **/
    orderBy?: Enumerable<Todolist1OrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Todolist1s.
     * 
    **/
    cursor?: Todolist1WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Todolist1s from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Todolist1s.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Todolist1s.
     * 
    **/
    distinct?: Enumerable<Todolist1ScalarFieldEnum>
  }

  /**
   * Todolist1 findFirst
   */
  export interface Todolist1FindFirstArgs extends Todolist1FindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Todolist1 findFirstOrThrow
   */
  export type Todolist1FindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Todolist1
     * 
    **/
    select?: Todolist1Select | null
    /**
     * Filter, which Todolist1 to fetch.
     * 
    **/
    where?: Todolist1WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Todolist1s to fetch.
     * 
    **/
    orderBy?: Enumerable<Todolist1OrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Todolist1s.
     * 
    **/
    cursor?: Todolist1WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Todolist1s from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Todolist1s.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Todolist1s.
     * 
    **/
    distinct?: Enumerable<Todolist1ScalarFieldEnum>
  }


  /**
   * Todolist1 findMany
   */
  export type Todolist1FindManyArgs = {
    /**
     * Select specific fields to fetch from the Todolist1
     * 
    **/
    select?: Todolist1Select | null
    /**
     * Filter, which Todolist1s to fetch.
     * 
    **/
    where?: Todolist1WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Todolist1s to fetch.
     * 
    **/
    orderBy?: Enumerable<Todolist1OrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Todolist1s.
     * 
    **/
    cursor?: Todolist1WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Todolist1s from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Todolist1s.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Todolist1ScalarFieldEnum>
  }


  /**
   * Todolist1 create
   */
  export type Todolist1CreateArgs = {
    /**
     * Select specific fields to fetch from the Todolist1
     * 
    **/
    select?: Todolist1Select | null
    /**
     * The data needed to create a Todolist1.
     * 
    **/
    data: XOR<Todolist1CreateInput, Todolist1UncheckedCreateInput>
  }


  /**
   * Todolist1 createMany
   */
  export type Todolist1CreateManyArgs = {
    /**
     * The data used to create many Todolist1s.
     * 
    **/
    data: Enumerable<Todolist1CreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Todolist1 update
   */
  export type Todolist1UpdateArgs = {
    /**
     * Select specific fields to fetch from the Todolist1
     * 
    **/
    select?: Todolist1Select | null
    /**
     * The data needed to update a Todolist1.
     * 
    **/
    data: XOR<Todolist1UpdateInput, Todolist1UncheckedUpdateInput>
    /**
     * Choose, which Todolist1 to update.
     * 
    **/
    where: Todolist1WhereUniqueInput
  }


  /**
   * Todolist1 updateMany
   */
  export type Todolist1UpdateManyArgs = {
    /**
     * The data used to update Todolist1s.
     * 
    **/
    data: XOR<Todolist1UpdateManyMutationInput, Todolist1UncheckedUpdateManyInput>
    /**
     * Filter which Todolist1s to update
     * 
    **/
    where?: Todolist1WhereInput
  }


  /**
   * Todolist1 upsert
   */
  export type Todolist1UpsertArgs = {
    /**
     * Select specific fields to fetch from the Todolist1
     * 
    **/
    select?: Todolist1Select | null
    /**
     * The filter to search for the Todolist1 to update in case it exists.
     * 
    **/
    where: Todolist1WhereUniqueInput
    /**
     * In case the Todolist1 found by the `where` argument doesn't exist, create a new Todolist1 with this data.
     * 
    **/
    create: XOR<Todolist1CreateInput, Todolist1UncheckedCreateInput>
    /**
     * In case the Todolist1 was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<Todolist1UpdateInput, Todolist1UncheckedUpdateInput>
  }


  /**
   * Todolist1 delete
   */
  export type Todolist1DeleteArgs = {
    /**
     * Select specific fields to fetch from the Todolist1
     * 
    **/
    select?: Todolist1Select | null
    /**
     * Filter which Todolist1 to delete.
     * 
    **/
    where: Todolist1WhereUniqueInput
  }


  /**
   * Todolist1 deleteMany
   */
  export type Todolist1DeleteManyArgs = {
    /**
     * Filter which Todolist1s to delete
     * 
    **/
    where?: Todolist1WhereInput
  }


  /**
   * Todolist1 without action
   */
  export type Todolist1Args = {
    /**
     * Select specific fields to fetch from the Todolist1
     * 
    **/
    select?: Todolist1Select | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const ImagesScalarFieldEnum: {
    image_id: 'image_id',
    link: 'link',
    descr: 'descr'
  };

  export type ImagesScalarFieldEnum = (typeof ImagesScalarFieldEnum)[keyof typeof ImagesScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const Random1ScalarFieldEnum: {
    id: 'id',
    task: 'task',
    checked: 'checked'
  };

  export type Random1ScalarFieldEnum = (typeof Random1ScalarFieldEnum)[keyof typeof Random1ScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TestdocumentScalarFieldEnum: {
    doc_id: 'doc_id',
    experiment_name: 'experiment_name',
    type: 'type',
    createdtime: 'createdtime',
    x_position: 'x_position',
    y_position: 'y_position',
    width: 'width',
    height: 'height'
  };

  export type TestdocumentScalarFieldEnum = (typeof TestdocumentScalarFieldEnum)[keyof typeof TestdocumentScalarFieldEnum]


  export const Todolist1ScalarFieldEnum: {
    item_id: 'item_id',
    doc_id: 'doc_id',
    checked: 'checked',
    task: 'task'
  };

  export type Todolist1ScalarFieldEnum = (typeof Todolist1ScalarFieldEnum)[keyof typeof Todolist1ScalarFieldEnum]


  export const TodolistScalarFieldEnum: {
    item_id: 'item_id',
    doc_id: 'doc_id',
    checked: 'checked',
    task: 'task'
  };

  export type TodolistScalarFieldEnum = (typeof TodolistScalarFieldEnum)[keyof typeof TodolistScalarFieldEnum]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type ImagesWhereInput = {
    AND?: Enumerable<ImagesWhereInput>
    OR?: Enumerable<ImagesWhereInput>
    NOT?: Enumerable<ImagesWhereInput>
    image_id?: IntFilter | number
    link?: StringNullableFilter | string | null
    descr?: StringNullableFilter | string | null
    testdocument?: XOR<TestdocumentRelationFilter, TestdocumentWhereInput>
  }

  export type ImagesOrderByWithRelationInput = {
    image_id?: SortOrder
    link?: SortOrder
    descr?: SortOrder
    testdocument?: TestdocumentOrderByWithRelationInput
  }

  export type ImagesWhereUniqueInput = {
    image_id?: number
  }

  export type ImagesOrderByWithAggregationInput = {
    image_id?: SortOrder
    link?: SortOrder
    descr?: SortOrder
    _count?: ImagesCountOrderByAggregateInput
    _avg?: ImagesAvgOrderByAggregateInput
    _max?: ImagesMaxOrderByAggregateInput
    _min?: ImagesMinOrderByAggregateInput
    _sum?: ImagesSumOrderByAggregateInput
  }

  export type ImagesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ImagesScalarWhereWithAggregatesInput>
    OR?: Enumerable<ImagesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ImagesScalarWhereWithAggregatesInput>
    image_id?: IntWithAggregatesFilter | number
    link?: StringNullableWithAggregatesFilter | string | null
    descr?: StringNullableWithAggregatesFilter | string | null
  }

  export type Random1WhereInput = {
    AND?: Enumerable<Random1WhereInput>
    OR?: Enumerable<Random1WhereInput>
    NOT?: Enumerable<Random1WhereInput>
    id?: IntFilter | number
    task?: StringFilter | string
    checked?: IntFilter | number
  }

  export type Random1OrderByWithRelationInput = {
    id?: SortOrder
    task?: SortOrder
    checked?: SortOrder
  }

  export type Random1WhereUniqueInput = {
    id?: number
  }

  export type Random1OrderByWithAggregationInput = {
    id?: SortOrder
    task?: SortOrder
    checked?: SortOrder
    _count?: Random1CountOrderByAggregateInput
    _avg?: Random1AvgOrderByAggregateInput
    _max?: Random1MaxOrderByAggregateInput
    _min?: Random1MinOrderByAggregateInput
    _sum?: Random1SumOrderByAggregateInput
  }

  export type Random1ScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Random1ScalarWhereWithAggregatesInput>
    OR?: Enumerable<Random1ScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Random1ScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    task?: StringWithAggregatesFilter | string
    checked?: IntWithAggregatesFilter | number
  }

  export type TestdocumentWhereInput = {
    AND?: Enumerable<TestdocumentWhereInput>
    OR?: Enumerable<TestdocumentWhereInput>
    NOT?: Enumerable<TestdocumentWhereInput>
    doc_id?: IntFilter | number
    experiment_name?: StringFilter | string
    type?: StringNullableFilter | string | null
    createdtime?: StringFilter | string
    x_position?: IntNullableFilter | number | null
    y_position?: IntNullableFilter | number | null
    width?: IntNullableFilter | number | null
    height?: IntNullableFilter | number | null
    images?: XOR<ImagesRelationFilter, ImagesWhereInput> | null
  }

  export type TestdocumentOrderByWithRelationInput = {
    doc_id?: SortOrder
    experiment_name?: SortOrder
    type?: SortOrder
    createdtime?: SortOrder
    x_position?: SortOrder
    y_position?: SortOrder
    width?: SortOrder
    height?: SortOrder
    images?: ImagesOrderByWithRelationInput
  }

  export type TestdocumentWhereUniqueInput = {
    doc_id?: number
  }

  export type TestdocumentOrderByWithAggregationInput = {
    doc_id?: SortOrder
    experiment_name?: SortOrder
    type?: SortOrder
    createdtime?: SortOrder
    x_position?: SortOrder
    y_position?: SortOrder
    width?: SortOrder
    height?: SortOrder
    _count?: TestdocumentCountOrderByAggregateInput
    _avg?: TestdocumentAvgOrderByAggregateInput
    _max?: TestdocumentMaxOrderByAggregateInput
    _min?: TestdocumentMinOrderByAggregateInput
    _sum?: TestdocumentSumOrderByAggregateInput
  }

  export type TestdocumentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TestdocumentScalarWhereWithAggregatesInput>
    OR?: Enumerable<TestdocumentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TestdocumentScalarWhereWithAggregatesInput>
    doc_id?: IntWithAggregatesFilter | number
    experiment_name?: StringWithAggregatesFilter | string
    type?: StringNullableWithAggregatesFilter | string | null
    createdtime?: StringWithAggregatesFilter | string
    x_position?: IntNullableWithAggregatesFilter | number | null
    y_position?: IntNullableWithAggregatesFilter | number | null
    width?: IntNullableWithAggregatesFilter | number | null
    height?: IntNullableWithAggregatesFilter | number | null
  }

  export type TodolistWhereInput = {
    AND?: Enumerable<TodolistWhereInput>
    OR?: Enumerable<TodolistWhereInput>
    NOT?: Enumerable<TodolistWhereInput>
    item_id?: IntFilter | number
    doc_id?: IntFilter | number
    checked?: IntNullableFilter | number | null
    task?: StringNullableFilter | string | null
  }

  export type TodolistOrderByWithRelationInput = {
    item_id?: SortOrder
    doc_id?: SortOrder
    checked?: SortOrder
    task?: SortOrder
  }

  export type TodolistWhereUniqueInput = {
    item_id?: number
  }

  export type TodolistOrderByWithAggregationInput = {
    item_id?: SortOrder
    doc_id?: SortOrder
    checked?: SortOrder
    task?: SortOrder
    _count?: TodolistCountOrderByAggregateInput
    _avg?: TodolistAvgOrderByAggregateInput
    _max?: TodolistMaxOrderByAggregateInput
    _min?: TodolistMinOrderByAggregateInput
    _sum?: TodolistSumOrderByAggregateInput
  }

  export type TodolistScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TodolistScalarWhereWithAggregatesInput>
    OR?: Enumerable<TodolistScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TodolistScalarWhereWithAggregatesInput>
    item_id?: IntWithAggregatesFilter | number
    doc_id?: IntWithAggregatesFilter | number
    checked?: IntNullableWithAggregatesFilter | number | null
    task?: StringNullableWithAggregatesFilter | string | null
  }

  export type Todolist1WhereInput = {
    AND?: Enumerable<Todolist1WhereInput>
    OR?: Enumerable<Todolist1WhereInput>
    NOT?: Enumerable<Todolist1WhereInput>
    item_id?: IntFilter | number
    doc_id?: IntFilter | number
    checked?: IntNullableFilter | number | null
    task?: StringNullableFilter | string | null
  }

  export type Todolist1OrderByWithRelationInput = {
    item_id?: SortOrder
    doc_id?: SortOrder
    checked?: SortOrder
    task?: SortOrder
  }

  export type Todolist1WhereUniqueInput = {
    item_id?: number
  }

  export type Todolist1OrderByWithAggregationInput = {
    item_id?: SortOrder
    doc_id?: SortOrder
    checked?: SortOrder
    task?: SortOrder
    _count?: Todolist1CountOrderByAggregateInput
    _avg?: Todolist1AvgOrderByAggregateInput
    _max?: Todolist1MaxOrderByAggregateInput
    _min?: Todolist1MinOrderByAggregateInput
    _sum?: Todolist1SumOrderByAggregateInput
  }

  export type Todolist1ScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Todolist1ScalarWhereWithAggregatesInput>
    OR?: Enumerable<Todolist1ScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Todolist1ScalarWhereWithAggregatesInput>
    item_id?: IntWithAggregatesFilter | number
    doc_id?: IntWithAggregatesFilter | number
    checked?: IntNullableWithAggregatesFilter | number | null
    task?: StringNullableWithAggregatesFilter | string | null
  }

  export type ImagesCreateInput = {
    link?: string | null
    descr?: string | null
    testdocument: TestdocumentCreateNestedOneWithoutImagesInput
  }

  export type ImagesUncheckedCreateInput = {
    image_id: number
    link?: string | null
    descr?: string | null
  }

  export type ImagesUpdateInput = {
    link?: NullableStringFieldUpdateOperationsInput | string | null
    descr?: NullableStringFieldUpdateOperationsInput | string | null
    testdocument?: TestdocumentUpdateOneRequiredWithoutImagesNestedInput
  }

  export type ImagesUncheckedUpdateInput = {
    image_id?: IntFieldUpdateOperationsInput | number
    link?: NullableStringFieldUpdateOperationsInput | string | null
    descr?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImagesCreateManyInput = {
    image_id: number
    link?: string | null
    descr?: string | null
  }

  export type ImagesUpdateManyMutationInput = {
    link?: NullableStringFieldUpdateOperationsInput | string | null
    descr?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImagesUncheckedUpdateManyInput = {
    image_id?: IntFieldUpdateOperationsInput | number
    link?: NullableStringFieldUpdateOperationsInput | string | null
    descr?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Random1CreateInput = {
    id: number
    task: string
    checked: number
  }

  export type Random1UncheckedCreateInput = {
    id: number
    task: string
    checked: number
  }

  export type Random1UpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    task?: StringFieldUpdateOperationsInput | string
    checked?: IntFieldUpdateOperationsInput | number
  }

  export type Random1UncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    task?: StringFieldUpdateOperationsInput | string
    checked?: IntFieldUpdateOperationsInput | number
  }

  export type Random1CreateManyInput = {
    id: number
    task: string
    checked: number
  }

  export type Random1UpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    task?: StringFieldUpdateOperationsInput | string
    checked?: IntFieldUpdateOperationsInput | number
  }

  export type Random1UncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    task?: StringFieldUpdateOperationsInput | string
    checked?: IntFieldUpdateOperationsInput | number
  }

  export type TestdocumentCreateInput = {
    doc_id: number
    experiment_name: string
    type?: string | null
    createdtime: string
    x_position?: number | null
    y_position?: number | null
    width?: number | null
    height?: number | null
    images?: ImagesCreateNestedOneWithoutTestdocumentInput
  }

  export type TestdocumentUncheckedCreateInput = {
    doc_id: number
    experiment_name: string
    type?: string | null
    createdtime: string
    x_position?: number | null
    y_position?: number | null
    width?: number | null
    height?: number | null
    images?: ImagesUncheckedCreateNestedOneWithoutTestdocumentInput
  }

  export type TestdocumentUpdateInput = {
    doc_id?: IntFieldUpdateOperationsInput | number
    experiment_name?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdtime?: StringFieldUpdateOperationsInput | string
    x_position?: NullableIntFieldUpdateOperationsInput | number | null
    y_position?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    images?: ImagesUpdateOneWithoutTestdocumentNestedInput
  }

  export type TestdocumentUncheckedUpdateInput = {
    doc_id?: IntFieldUpdateOperationsInput | number
    experiment_name?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdtime?: StringFieldUpdateOperationsInput | string
    x_position?: NullableIntFieldUpdateOperationsInput | number | null
    y_position?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    images?: ImagesUncheckedUpdateOneWithoutTestdocumentNestedInput
  }

  export type TestdocumentCreateManyInput = {
    doc_id: number
    experiment_name: string
    type?: string | null
    createdtime: string
    x_position?: number | null
    y_position?: number | null
    width?: number | null
    height?: number | null
  }

  export type TestdocumentUpdateManyMutationInput = {
    doc_id?: IntFieldUpdateOperationsInput | number
    experiment_name?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdtime?: StringFieldUpdateOperationsInput | string
    x_position?: NullableIntFieldUpdateOperationsInput | number | null
    y_position?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TestdocumentUncheckedUpdateManyInput = {
    doc_id?: IntFieldUpdateOperationsInput | number
    experiment_name?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdtime?: StringFieldUpdateOperationsInput | string
    x_position?: NullableIntFieldUpdateOperationsInput | number | null
    y_position?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TodolistCreateInput = {
    item_id: number
    doc_id: number
    checked?: number | null
    task?: string | null
  }

  export type TodolistUncheckedCreateInput = {
    item_id: number
    doc_id: number
    checked?: number | null
    task?: string | null
  }

  export type TodolistUpdateInput = {
    item_id?: IntFieldUpdateOperationsInput | number
    doc_id?: IntFieldUpdateOperationsInput | number
    checked?: NullableIntFieldUpdateOperationsInput | number | null
    task?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TodolistUncheckedUpdateInput = {
    item_id?: IntFieldUpdateOperationsInput | number
    doc_id?: IntFieldUpdateOperationsInput | number
    checked?: NullableIntFieldUpdateOperationsInput | number | null
    task?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TodolistCreateManyInput = {
    item_id: number
    doc_id: number
    checked?: number | null
    task?: string | null
  }

  export type TodolistUpdateManyMutationInput = {
    item_id?: IntFieldUpdateOperationsInput | number
    doc_id?: IntFieldUpdateOperationsInput | number
    checked?: NullableIntFieldUpdateOperationsInput | number | null
    task?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TodolistUncheckedUpdateManyInput = {
    item_id?: IntFieldUpdateOperationsInput | number
    doc_id?: IntFieldUpdateOperationsInput | number
    checked?: NullableIntFieldUpdateOperationsInput | number | null
    task?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Todolist1CreateInput = {
    item_id: number
    doc_id: number
    checked?: number | null
    task?: string | null
  }

  export type Todolist1UncheckedCreateInput = {
    item_id: number
    doc_id: number
    checked?: number | null
    task?: string | null
  }

  export type Todolist1UpdateInput = {
    item_id?: IntFieldUpdateOperationsInput | number
    doc_id?: IntFieldUpdateOperationsInput | number
    checked?: NullableIntFieldUpdateOperationsInput | number | null
    task?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Todolist1UncheckedUpdateInput = {
    item_id?: IntFieldUpdateOperationsInput | number
    doc_id?: IntFieldUpdateOperationsInput | number
    checked?: NullableIntFieldUpdateOperationsInput | number | null
    task?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Todolist1CreateManyInput = {
    item_id: number
    doc_id: number
    checked?: number | null
    task?: string | null
  }

  export type Todolist1UpdateManyMutationInput = {
    item_id?: IntFieldUpdateOperationsInput | number
    doc_id?: IntFieldUpdateOperationsInput | number
    checked?: NullableIntFieldUpdateOperationsInput | number | null
    task?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Todolist1UncheckedUpdateManyInput = {
    item_id?: IntFieldUpdateOperationsInput | number
    doc_id?: IntFieldUpdateOperationsInput | number
    checked?: NullableIntFieldUpdateOperationsInput | number | null
    task?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type TestdocumentRelationFilter = {
    is?: TestdocumentWhereInput
    isNot?: TestdocumentWhereInput
  }

  export type ImagesCountOrderByAggregateInput = {
    image_id?: SortOrder
    link?: SortOrder
    descr?: SortOrder
  }

  export type ImagesAvgOrderByAggregateInput = {
    image_id?: SortOrder
  }

  export type ImagesMaxOrderByAggregateInput = {
    image_id?: SortOrder
    link?: SortOrder
    descr?: SortOrder
  }

  export type ImagesMinOrderByAggregateInput = {
    image_id?: SortOrder
    link?: SortOrder
    descr?: SortOrder
  }

  export type ImagesSumOrderByAggregateInput = {
    image_id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type Random1CountOrderByAggregateInput = {
    id?: SortOrder
    task?: SortOrder
    checked?: SortOrder
  }

  export type Random1AvgOrderByAggregateInput = {
    id?: SortOrder
    checked?: SortOrder
  }

  export type Random1MaxOrderByAggregateInput = {
    id?: SortOrder
    task?: SortOrder
    checked?: SortOrder
  }

  export type Random1MinOrderByAggregateInput = {
    id?: SortOrder
    task?: SortOrder
    checked?: SortOrder
  }

  export type Random1SumOrderByAggregateInput = {
    id?: SortOrder
    checked?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type ImagesRelationFilter = {
    is?: ImagesWhereInput | null
    isNot?: ImagesWhereInput | null
  }

  export type TestdocumentCountOrderByAggregateInput = {
    doc_id?: SortOrder
    experiment_name?: SortOrder
    type?: SortOrder
    createdtime?: SortOrder
    x_position?: SortOrder
    y_position?: SortOrder
    width?: SortOrder
    height?: SortOrder
  }

  export type TestdocumentAvgOrderByAggregateInput = {
    doc_id?: SortOrder
    x_position?: SortOrder
    y_position?: SortOrder
    width?: SortOrder
    height?: SortOrder
  }

  export type TestdocumentMaxOrderByAggregateInput = {
    doc_id?: SortOrder
    experiment_name?: SortOrder
    type?: SortOrder
    createdtime?: SortOrder
    x_position?: SortOrder
    y_position?: SortOrder
    width?: SortOrder
    height?: SortOrder
  }

  export type TestdocumentMinOrderByAggregateInput = {
    doc_id?: SortOrder
    experiment_name?: SortOrder
    type?: SortOrder
    createdtime?: SortOrder
    x_position?: SortOrder
    y_position?: SortOrder
    width?: SortOrder
    height?: SortOrder
  }

  export type TestdocumentSumOrderByAggregateInput = {
    doc_id?: SortOrder
    x_position?: SortOrder
    y_position?: SortOrder
    width?: SortOrder
    height?: SortOrder
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type TodolistCountOrderByAggregateInput = {
    item_id?: SortOrder
    doc_id?: SortOrder
    checked?: SortOrder
    task?: SortOrder
  }

  export type TodolistAvgOrderByAggregateInput = {
    item_id?: SortOrder
    doc_id?: SortOrder
    checked?: SortOrder
  }

  export type TodolistMaxOrderByAggregateInput = {
    item_id?: SortOrder
    doc_id?: SortOrder
    checked?: SortOrder
    task?: SortOrder
  }

  export type TodolistMinOrderByAggregateInput = {
    item_id?: SortOrder
    doc_id?: SortOrder
    checked?: SortOrder
    task?: SortOrder
  }

  export type TodolistSumOrderByAggregateInput = {
    item_id?: SortOrder
    doc_id?: SortOrder
    checked?: SortOrder
  }

  export type Todolist1CountOrderByAggregateInput = {
    item_id?: SortOrder
    doc_id?: SortOrder
    checked?: SortOrder
    task?: SortOrder
  }

  export type Todolist1AvgOrderByAggregateInput = {
    item_id?: SortOrder
    doc_id?: SortOrder
    checked?: SortOrder
  }

  export type Todolist1MaxOrderByAggregateInput = {
    item_id?: SortOrder
    doc_id?: SortOrder
    checked?: SortOrder
    task?: SortOrder
  }

  export type Todolist1MinOrderByAggregateInput = {
    item_id?: SortOrder
    doc_id?: SortOrder
    checked?: SortOrder
    task?: SortOrder
  }

  export type Todolist1SumOrderByAggregateInput = {
    item_id?: SortOrder
    doc_id?: SortOrder
    checked?: SortOrder
  }

  export type TestdocumentCreateNestedOneWithoutImagesInput = {
    create?: XOR<TestdocumentCreateWithoutImagesInput, TestdocumentUncheckedCreateWithoutImagesInput>
    connectOrCreate?: TestdocumentCreateOrConnectWithoutImagesInput
    connect?: TestdocumentWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type TestdocumentUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<TestdocumentCreateWithoutImagesInput, TestdocumentUncheckedCreateWithoutImagesInput>
    connectOrCreate?: TestdocumentCreateOrConnectWithoutImagesInput
    upsert?: TestdocumentUpsertWithoutImagesInput
    connect?: TestdocumentWhereUniqueInput
    update?: XOR<TestdocumentUpdateWithoutImagesInput, TestdocumentUncheckedUpdateWithoutImagesInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ImagesCreateNestedOneWithoutTestdocumentInput = {
    create?: XOR<ImagesCreateWithoutTestdocumentInput, ImagesUncheckedCreateWithoutTestdocumentInput>
    connectOrCreate?: ImagesCreateOrConnectWithoutTestdocumentInput
    connect?: ImagesWhereUniqueInput
  }

  export type ImagesUncheckedCreateNestedOneWithoutTestdocumentInput = {
    create?: XOR<ImagesCreateWithoutTestdocumentInput, ImagesUncheckedCreateWithoutTestdocumentInput>
    connectOrCreate?: ImagesCreateOrConnectWithoutTestdocumentInput
    connect?: ImagesWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ImagesUpdateOneWithoutTestdocumentNestedInput = {
    create?: XOR<ImagesCreateWithoutTestdocumentInput, ImagesUncheckedCreateWithoutTestdocumentInput>
    connectOrCreate?: ImagesCreateOrConnectWithoutTestdocumentInput
    upsert?: ImagesUpsertWithoutTestdocumentInput
    disconnect?: boolean
    delete?: boolean
    connect?: ImagesWhereUniqueInput
    update?: XOR<ImagesUpdateWithoutTestdocumentInput, ImagesUncheckedUpdateWithoutTestdocumentInput>
  }

  export type ImagesUncheckedUpdateOneWithoutTestdocumentNestedInput = {
    create?: XOR<ImagesCreateWithoutTestdocumentInput, ImagesUncheckedCreateWithoutTestdocumentInput>
    connectOrCreate?: ImagesCreateOrConnectWithoutTestdocumentInput
    upsert?: ImagesUpsertWithoutTestdocumentInput
    disconnect?: boolean
    delete?: boolean
    connect?: ImagesWhereUniqueInput
    update?: XOR<ImagesUpdateWithoutTestdocumentInput, ImagesUncheckedUpdateWithoutTestdocumentInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type TestdocumentCreateWithoutImagesInput = {
    doc_id: number
    experiment_name: string
    type?: string | null
    createdtime: string
    x_position?: number | null
    y_position?: number | null
    width?: number | null
    height?: number | null
  }

  export type TestdocumentUncheckedCreateWithoutImagesInput = {
    doc_id: number
    experiment_name: string
    type?: string | null
    createdtime: string
    x_position?: number | null
    y_position?: number | null
    width?: number | null
    height?: number | null
  }

  export type TestdocumentCreateOrConnectWithoutImagesInput = {
    where: TestdocumentWhereUniqueInput
    create: XOR<TestdocumentCreateWithoutImagesInput, TestdocumentUncheckedCreateWithoutImagesInput>
  }

  export type TestdocumentUpsertWithoutImagesInput = {
    update: XOR<TestdocumentUpdateWithoutImagesInput, TestdocumentUncheckedUpdateWithoutImagesInput>
    create: XOR<TestdocumentCreateWithoutImagesInput, TestdocumentUncheckedCreateWithoutImagesInput>
  }

  export type TestdocumentUpdateWithoutImagesInput = {
    doc_id?: IntFieldUpdateOperationsInput | number
    experiment_name?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdtime?: StringFieldUpdateOperationsInput | string
    x_position?: NullableIntFieldUpdateOperationsInput | number | null
    y_position?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TestdocumentUncheckedUpdateWithoutImagesInput = {
    doc_id?: IntFieldUpdateOperationsInput | number
    experiment_name?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdtime?: StringFieldUpdateOperationsInput | string
    x_position?: NullableIntFieldUpdateOperationsInput | number | null
    y_position?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ImagesCreateWithoutTestdocumentInput = {
    link?: string | null
    descr?: string | null
  }

  export type ImagesUncheckedCreateWithoutTestdocumentInput = {
    link?: string | null
    descr?: string | null
  }

  export type ImagesCreateOrConnectWithoutTestdocumentInput = {
    where: ImagesWhereUniqueInput
    create: XOR<ImagesCreateWithoutTestdocumentInput, ImagesUncheckedCreateWithoutTestdocumentInput>
  }

  export type ImagesUpsertWithoutTestdocumentInput = {
    update: XOR<ImagesUpdateWithoutTestdocumentInput, ImagesUncheckedUpdateWithoutTestdocumentInput>
    create: XOR<ImagesCreateWithoutTestdocumentInput, ImagesUncheckedCreateWithoutTestdocumentInput>
  }

  export type ImagesUpdateWithoutTestdocumentInput = {
    link?: NullableStringFieldUpdateOperationsInput | string | null
    descr?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImagesUncheckedUpdateWithoutTestdocumentInput = {
    link?: NullableStringFieldUpdateOperationsInput | string | null
    descr?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}

type Buffer = Omit<Uint8Array, 'set'>
