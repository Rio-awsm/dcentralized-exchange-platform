
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model InrWalet
 * 
 */
export type InrWalet = $Result.DefaultSelection<Prisma.$InrWaletPayload>
/**
 * Model SolWallet
 * 
 */
export type SolWallet = $Result.DefaultSelection<Prisma.$SolWalletPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Provider: {
  Google: 'Google'
};

export type Provider = (typeof Provider)[keyof typeof Provider]

}

export type Provider = $Enums.Provider

export const Provider: typeof $Enums.Provider

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inrWalet`: Exposes CRUD operations for the **InrWalet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InrWalets
    * const inrWalets = await prisma.inrWalet.findMany()
    * ```
    */
  get inrWalet(): Prisma.InrWaletDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.solWallet`: Exposes CRUD operations for the **SolWallet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SolWallets
    * const solWallets = await prisma.solWallet.findMany()
    * ```
    */
  get solWallet(): Prisma.SolWalletDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    InrWalet: 'InrWalet',
    SolWallet: 'SolWallet'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "inrWalet" | "solWallet"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      InrWalet: {
        payload: Prisma.$InrWaletPayload<ExtArgs>
        fields: Prisma.InrWaletFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InrWaletFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InrWaletPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InrWaletFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InrWaletPayload>
          }
          findFirst: {
            args: Prisma.InrWaletFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InrWaletPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InrWaletFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InrWaletPayload>
          }
          findMany: {
            args: Prisma.InrWaletFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InrWaletPayload>[]
          }
          create: {
            args: Prisma.InrWaletCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InrWaletPayload>
          }
          createMany: {
            args: Prisma.InrWaletCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InrWaletCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InrWaletPayload>[]
          }
          delete: {
            args: Prisma.InrWaletDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InrWaletPayload>
          }
          update: {
            args: Prisma.InrWaletUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InrWaletPayload>
          }
          deleteMany: {
            args: Prisma.InrWaletDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InrWaletUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InrWaletUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InrWaletPayload>[]
          }
          upsert: {
            args: Prisma.InrWaletUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InrWaletPayload>
          }
          aggregate: {
            args: Prisma.InrWaletAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInrWalet>
          }
          groupBy: {
            args: Prisma.InrWaletGroupByArgs<ExtArgs>
            result: $Utils.Optional<InrWaletGroupByOutputType>[]
          }
          count: {
            args: Prisma.InrWaletCountArgs<ExtArgs>
            result: $Utils.Optional<InrWaletCountAggregateOutputType> | number
          }
        }
      }
      SolWallet: {
        payload: Prisma.$SolWalletPayload<ExtArgs>
        fields: Prisma.SolWalletFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SolWalletFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolWalletPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SolWalletFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolWalletPayload>
          }
          findFirst: {
            args: Prisma.SolWalletFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolWalletPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SolWalletFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolWalletPayload>
          }
          findMany: {
            args: Prisma.SolWalletFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolWalletPayload>[]
          }
          create: {
            args: Prisma.SolWalletCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolWalletPayload>
          }
          createMany: {
            args: Prisma.SolWalletCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SolWalletCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolWalletPayload>[]
          }
          delete: {
            args: Prisma.SolWalletDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolWalletPayload>
          }
          update: {
            args: Prisma.SolWalletUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolWalletPayload>
          }
          deleteMany: {
            args: Prisma.SolWalletDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SolWalletUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SolWalletUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolWalletPayload>[]
          }
          upsert: {
            args: Prisma.SolWalletUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolWalletPayload>
          }
          aggregate: {
            args: Prisma.SolWalletAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSolWallet>
          }
          groupBy: {
            args: Prisma.SolWalletGroupByArgs<ExtArgs>
            result: $Utils.Optional<SolWalletGroupByOutputType>[]
          }
          count: {
            args: Prisma.SolWalletCountArgs<ExtArgs>
            result: $Utils.Optional<SolWalletCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    inrWalet?: InrWaletOmit
    solWallet?: SolWalletOmit
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

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
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    sub: string | null
    name: string | null
    profilePicture: string | null
    password: string | null
    solWalletId: string | null
    inrWalletId: string | null
    provider: $Enums.Provider | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    sub: string | null
    name: string | null
    profilePicture: string | null
    password: string | null
    solWalletId: string | null
    inrWalletId: string | null
    provider: $Enums.Provider | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    sub: number
    name: number
    profilePicture: number
    password: number
    solWalletId: number
    inrWalletId: number
    provider: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    sub?: true
    name?: true
    profilePicture?: true
    password?: true
    solWalletId?: true
    inrWalletId?: true
    provider?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    sub?: true
    name?: true
    profilePicture?: true
    password?: true
    solWalletId?: true
    inrWalletId?: true
    provider?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    sub?: true
    name?: true
    profilePicture?: true
    password?: true
    solWalletId?: true
    inrWalletId?: true
    provider?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    sub: string
    name: string | null
    profilePicture: string | null
    password: string | null
    solWalletId: string | null
    inrWalletId: string | null
    provider: $Enums.Provider
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    sub?: boolean
    name?: boolean
    profilePicture?: boolean
    password?: boolean
    solWalletId?: boolean
    inrWalletId?: boolean
    provider?: boolean
    solWallet?: boolean | User$solWalletArgs<ExtArgs>
    inrWallet?: boolean | User$inrWalletArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    sub?: boolean
    name?: boolean
    profilePicture?: boolean
    password?: boolean
    solWalletId?: boolean
    inrWalletId?: boolean
    provider?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    sub?: boolean
    name?: boolean
    profilePicture?: boolean
    password?: boolean
    solWalletId?: boolean
    inrWalletId?: boolean
    provider?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    sub?: boolean
    name?: boolean
    profilePicture?: boolean
    password?: boolean
    solWalletId?: boolean
    inrWalletId?: boolean
    provider?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "sub" | "name" | "profilePicture" | "password" | "solWalletId" | "inrWalletId" | "provider", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    solWallet?: boolean | User$solWalletArgs<ExtArgs>
    inrWallet?: boolean | User$inrWalletArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      solWallet: Prisma.$SolWalletPayload<ExtArgs> | null
      inrWallet: Prisma.$InrWaletPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      sub: string
      name: string | null
      profilePicture: string | null
      password: string | null
      solWalletId: string | null
      inrWalletId: string | null
      provider: $Enums.Provider
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    solWallet<T extends User$solWalletArgs<ExtArgs> = {}>(args?: Subset<T, User$solWalletArgs<ExtArgs>>): Prisma__SolWalletClient<$Result.GetResult<Prisma.$SolWalletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    inrWallet<T extends User$inrWalletArgs<ExtArgs> = {}>(args?: Subset<T, User$inrWalletArgs<ExtArgs>>): Prisma__InrWaletClient<$Result.GetResult<Prisma.$InrWaletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly sub: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly profilePicture: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly solWalletId: FieldRef<"User", 'String'>
    readonly inrWalletId: FieldRef<"User", 'String'>
    readonly provider: FieldRef<"User", 'Provider'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.solWallet
   */
  export type User$solWalletArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolWallet
     */
    select?: SolWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolWallet
     */
    omit?: SolWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolWalletInclude<ExtArgs> | null
    where?: SolWalletWhereInput
  }

  /**
   * User.inrWallet
   */
  export type User$inrWalletArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InrWalet
     */
    select?: InrWaletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InrWalet
     */
    omit?: InrWaletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InrWaletInclude<ExtArgs> | null
    where?: InrWaletWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model InrWalet
   */

  export type AggregateInrWalet = {
    _count: InrWaletCountAggregateOutputType | null
    _avg: InrWaletAvgAggregateOutputType | null
    _sum: InrWaletSumAggregateOutputType | null
    _min: InrWaletMinAggregateOutputType | null
    _max: InrWaletMaxAggregateOutputType | null
  }

  export type InrWaletAvgAggregateOutputType = {
    balance: number | null
  }

  export type InrWaletSumAggregateOutputType = {
    balance: number | null
  }

  export type InrWaletMinAggregateOutputType = {
    id: string | null
    balance: number | null
    userId: string | null
  }

  export type InrWaletMaxAggregateOutputType = {
    id: string | null
    balance: number | null
    userId: string | null
  }

  export type InrWaletCountAggregateOutputType = {
    id: number
    balance: number
    userId: number
    _all: number
  }


  export type InrWaletAvgAggregateInputType = {
    balance?: true
  }

  export type InrWaletSumAggregateInputType = {
    balance?: true
  }

  export type InrWaletMinAggregateInputType = {
    id?: true
    balance?: true
    userId?: true
  }

  export type InrWaletMaxAggregateInputType = {
    id?: true
    balance?: true
    userId?: true
  }

  export type InrWaletCountAggregateInputType = {
    id?: true
    balance?: true
    userId?: true
    _all?: true
  }

  export type InrWaletAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InrWalet to aggregate.
     */
    where?: InrWaletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InrWalets to fetch.
     */
    orderBy?: InrWaletOrderByWithRelationInput | InrWaletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InrWaletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InrWalets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InrWalets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InrWalets
    **/
    _count?: true | InrWaletCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InrWaletAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InrWaletSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InrWaletMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InrWaletMaxAggregateInputType
  }

  export type GetInrWaletAggregateType<T extends InrWaletAggregateArgs> = {
        [P in keyof T & keyof AggregateInrWalet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInrWalet[P]>
      : GetScalarType<T[P], AggregateInrWalet[P]>
  }




  export type InrWaletGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InrWaletWhereInput
    orderBy?: InrWaletOrderByWithAggregationInput | InrWaletOrderByWithAggregationInput[]
    by: InrWaletScalarFieldEnum[] | InrWaletScalarFieldEnum
    having?: InrWaletScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InrWaletCountAggregateInputType | true
    _avg?: InrWaletAvgAggregateInputType
    _sum?: InrWaletSumAggregateInputType
    _min?: InrWaletMinAggregateInputType
    _max?: InrWaletMaxAggregateInputType
  }

  export type InrWaletGroupByOutputType = {
    id: string
    balance: number
    userId: string
    _count: InrWaletCountAggregateOutputType | null
    _avg: InrWaletAvgAggregateOutputType | null
    _sum: InrWaletSumAggregateOutputType | null
    _min: InrWaletMinAggregateOutputType | null
    _max: InrWaletMaxAggregateOutputType | null
  }

  type GetInrWaletGroupByPayload<T extends InrWaletGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InrWaletGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InrWaletGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InrWaletGroupByOutputType[P]>
            : GetScalarType<T[P], InrWaletGroupByOutputType[P]>
        }
      >
    >


  export type InrWaletSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    balance?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inrWalet"]>

  export type InrWaletSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    balance?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inrWalet"]>

  export type InrWaletSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    balance?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inrWalet"]>

  export type InrWaletSelectScalar = {
    id?: boolean
    balance?: boolean
    userId?: boolean
  }

  export type InrWaletOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "balance" | "userId", ExtArgs["result"]["inrWalet"]>
  export type InrWaletInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InrWaletIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InrWaletIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $InrWaletPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InrWalet"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      balance: number
      userId: string
    }, ExtArgs["result"]["inrWalet"]>
    composites: {}
  }

  type InrWaletGetPayload<S extends boolean | null | undefined | InrWaletDefaultArgs> = $Result.GetResult<Prisma.$InrWaletPayload, S>

  type InrWaletCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InrWaletFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InrWaletCountAggregateInputType | true
    }

  export interface InrWaletDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InrWalet'], meta: { name: 'InrWalet' } }
    /**
     * Find zero or one InrWalet that matches the filter.
     * @param {InrWaletFindUniqueArgs} args - Arguments to find a InrWalet
     * @example
     * // Get one InrWalet
     * const inrWalet = await prisma.inrWalet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InrWaletFindUniqueArgs>(args: SelectSubset<T, InrWaletFindUniqueArgs<ExtArgs>>): Prisma__InrWaletClient<$Result.GetResult<Prisma.$InrWaletPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InrWalet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InrWaletFindUniqueOrThrowArgs} args - Arguments to find a InrWalet
     * @example
     * // Get one InrWalet
     * const inrWalet = await prisma.inrWalet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InrWaletFindUniqueOrThrowArgs>(args: SelectSubset<T, InrWaletFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InrWaletClient<$Result.GetResult<Prisma.$InrWaletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InrWalet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InrWaletFindFirstArgs} args - Arguments to find a InrWalet
     * @example
     * // Get one InrWalet
     * const inrWalet = await prisma.inrWalet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InrWaletFindFirstArgs>(args?: SelectSubset<T, InrWaletFindFirstArgs<ExtArgs>>): Prisma__InrWaletClient<$Result.GetResult<Prisma.$InrWaletPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InrWalet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InrWaletFindFirstOrThrowArgs} args - Arguments to find a InrWalet
     * @example
     * // Get one InrWalet
     * const inrWalet = await prisma.inrWalet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InrWaletFindFirstOrThrowArgs>(args?: SelectSubset<T, InrWaletFindFirstOrThrowArgs<ExtArgs>>): Prisma__InrWaletClient<$Result.GetResult<Prisma.$InrWaletPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InrWalets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InrWaletFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InrWalets
     * const inrWalets = await prisma.inrWalet.findMany()
     * 
     * // Get first 10 InrWalets
     * const inrWalets = await prisma.inrWalet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inrWaletWithIdOnly = await prisma.inrWalet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InrWaletFindManyArgs>(args?: SelectSubset<T, InrWaletFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InrWaletPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InrWalet.
     * @param {InrWaletCreateArgs} args - Arguments to create a InrWalet.
     * @example
     * // Create one InrWalet
     * const InrWalet = await prisma.inrWalet.create({
     *   data: {
     *     // ... data to create a InrWalet
     *   }
     * })
     * 
     */
    create<T extends InrWaletCreateArgs>(args: SelectSubset<T, InrWaletCreateArgs<ExtArgs>>): Prisma__InrWaletClient<$Result.GetResult<Prisma.$InrWaletPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InrWalets.
     * @param {InrWaletCreateManyArgs} args - Arguments to create many InrWalets.
     * @example
     * // Create many InrWalets
     * const inrWalet = await prisma.inrWalet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InrWaletCreateManyArgs>(args?: SelectSubset<T, InrWaletCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InrWalets and returns the data saved in the database.
     * @param {InrWaletCreateManyAndReturnArgs} args - Arguments to create many InrWalets.
     * @example
     * // Create many InrWalets
     * const inrWalet = await prisma.inrWalet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InrWalets and only return the `id`
     * const inrWaletWithIdOnly = await prisma.inrWalet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InrWaletCreateManyAndReturnArgs>(args?: SelectSubset<T, InrWaletCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InrWaletPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InrWalet.
     * @param {InrWaletDeleteArgs} args - Arguments to delete one InrWalet.
     * @example
     * // Delete one InrWalet
     * const InrWalet = await prisma.inrWalet.delete({
     *   where: {
     *     // ... filter to delete one InrWalet
     *   }
     * })
     * 
     */
    delete<T extends InrWaletDeleteArgs>(args: SelectSubset<T, InrWaletDeleteArgs<ExtArgs>>): Prisma__InrWaletClient<$Result.GetResult<Prisma.$InrWaletPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InrWalet.
     * @param {InrWaletUpdateArgs} args - Arguments to update one InrWalet.
     * @example
     * // Update one InrWalet
     * const inrWalet = await prisma.inrWalet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InrWaletUpdateArgs>(args: SelectSubset<T, InrWaletUpdateArgs<ExtArgs>>): Prisma__InrWaletClient<$Result.GetResult<Prisma.$InrWaletPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InrWalets.
     * @param {InrWaletDeleteManyArgs} args - Arguments to filter InrWalets to delete.
     * @example
     * // Delete a few InrWalets
     * const { count } = await prisma.inrWalet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InrWaletDeleteManyArgs>(args?: SelectSubset<T, InrWaletDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InrWalets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InrWaletUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InrWalets
     * const inrWalet = await prisma.inrWalet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InrWaletUpdateManyArgs>(args: SelectSubset<T, InrWaletUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InrWalets and returns the data updated in the database.
     * @param {InrWaletUpdateManyAndReturnArgs} args - Arguments to update many InrWalets.
     * @example
     * // Update many InrWalets
     * const inrWalet = await prisma.inrWalet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InrWalets and only return the `id`
     * const inrWaletWithIdOnly = await prisma.inrWalet.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InrWaletUpdateManyAndReturnArgs>(args: SelectSubset<T, InrWaletUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InrWaletPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InrWalet.
     * @param {InrWaletUpsertArgs} args - Arguments to update or create a InrWalet.
     * @example
     * // Update or create a InrWalet
     * const inrWalet = await prisma.inrWalet.upsert({
     *   create: {
     *     // ... data to create a InrWalet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InrWalet we want to update
     *   }
     * })
     */
    upsert<T extends InrWaletUpsertArgs>(args: SelectSubset<T, InrWaletUpsertArgs<ExtArgs>>): Prisma__InrWaletClient<$Result.GetResult<Prisma.$InrWaletPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InrWalets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InrWaletCountArgs} args - Arguments to filter InrWalets to count.
     * @example
     * // Count the number of InrWalets
     * const count = await prisma.inrWalet.count({
     *   where: {
     *     // ... the filter for the InrWalets we want to count
     *   }
     * })
    **/
    count<T extends InrWaletCountArgs>(
      args?: Subset<T, InrWaletCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InrWaletCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InrWalet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InrWaletAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InrWaletAggregateArgs>(args: Subset<T, InrWaletAggregateArgs>): Prisma.PrismaPromise<GetInrWaletAggregateType<T>>

    /**
     * Group by InrWalet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InrWaletGroupByArgs} args - Group by arguments.
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
      T extends InrWaletGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InrWaletGroupByArgs['orderBy'] }
        : { orderBy?: InrWaletGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, InrWaletGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInrWaletGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InrWalet model
   */
  readonly fields: InrWaletFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InrWalet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InrWaletClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InrWalet model
   */
  interface InrWaletFieldRefs {
    readonly id: FieldRef<"InrWalet", 'String'>
    readonly balance: FieldRef<"InrWalet", 'Int'>
    readonly userId: FieldRef<"InrWalet", 'String'>
  }
    

  // Custom InputTypes
  /**
   * InrWalet findUnique
   */
  export type InrWaletFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InrWalet
     */
    select?: InrWaletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InrWalet
     */
    omit?: InrWaletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InrWaletInclude<ExtArgs> | null
    /**
     * Filter, which InrWalet to fetch.
     */
    where: InrWaletWhereUniqueInput
  }

  /**
   * InrWalet findUniqueOrThrow
   */
  export type InrWaletFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InrWalet
     */
    select?: InrWaletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InrWalet
     */
    omit?: InrWaletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InrWaletInclude<ExtArgs> | null
    /**
     * Filter, which InrWalet to fetch.
     */
    where: InrWaletWhereUniqueInput
  }

  /**
   * InrWalet findFirst
   */
  export type InrWaletFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InrWalet
     */
    select?: InrWaletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InrWalet
     */
    omit?: InrWaletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InrWaletInclude<ExtArgs> | null
    /**
     * Filter, which InrWalet to fetch.
     */
    where?: InrWaletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InrWalets to fetch.
     */
    orderBy?: InrWaletOrderByWithRelationInput | InrWaletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InrWalets.
     */
    cursor?: InrWaletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InrWalets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InrWalets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InrWalets.
     */
    distinct?: InrWaletScalarFieldEnum | InrWaletScalarFieldEnum[]
  }

  /**
   * InrWalet findFirstOrThrow
   */
  export type InrWaletFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InrWalet
     */
    select?: InrWaletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InrWalet
     */
    omit?: InrWaletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InrWaletInclude<ExtArgs> | null
    /**
     * Filter, which InrWalet to fetch.
     */
    where?: InrWaletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InrWalets to fetch.
     */
    orderBy?: InrWaletOrderByWithRelationInput | InrWaletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InrWalets.
     */
    cursor?: InrWaletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InrWalets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InrWalets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InrWalets.
     */
    distinct?: InrWaletScalarFieldEnum | InrWaletScalarFieldEnum[]
  }

  /**
   * InrWalet findMany
   */
  export type InrWaletFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InrWalet
     */
    select?: InrWaletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InrWalet
     */
    omit?: InrWaletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InrWaletInclude<ExtArgs> | null
    /**
     * Filter, which InrWalets to fetch.
     */
    where?: InrWaletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InrWalets to fetch.
     */
    orderBy?: InrWaletOrderByWithRelationInput | InrWaletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InrWalets.
     */
    cursor?: InrWaletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InrWalets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InrWalets.
     */
    skip?: number
    distinct?: InrWaletScalarFieldEnum | InrWaletScalarFieldEnum[]
  }

  /**
   * InrWalet create
   */
  export type InrWaletCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InrWalet
     */
    select?: InrWaletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InrWalet
     */
    omit?: InrWaletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InrWaletInclude<ExtArgs> | null
    /**
     * The data needed to create a InrWalet.
     */
    data: XOR<InrWaletCreateInput, InrWaletUncheckedCreateInput>
  }

  /**
   * InrWalet createMany
   */
  export type InrWaletCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InrWalets.
     */
    data: InrWaletCreateManyInput | InrWaletCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InrWalet createManyAndReturn
   */
  export type InrWaletCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InrWalet
     */
    select?: InrWaletSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InrWalet
     */
    omit?: InrWaletOmit<ExtArgs> | null
    /**
     * The data used to create many InrWalets.
     */
    data: InrWaletCreateManyInput | InrWaletCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InrWaletIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InrWalet update
   */
  export type InrWaletUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InrWalet
     */
    select?: InrWaletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InrWalet
     */
    omit?: InrWaletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InrWaletInclude<ExtArgs> | null
    /**
     * The data needed to update a InrWalet.
     */
    data: XOR<InrWaletUpdateInput, InrWaletUncheckedUpdateInput>
    /**
     * Choose, which InrWalet to update.
     */
    where: InrWaletWhereUniqueInput
  }

  /**
   * InrWalet updateMany
   */
  export type InrWaletUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InrWalets.
     */
    data: XOR<InrWaletUpdateManyMutationInput, InrWaletUncheckedUpdateManyInput>
    /**
     * Filter which InrWalets to update
     */
    where?: InrWaletWhereInput
    /**
     * Limit how many InrWalets to update.
     */
    limit?: number
  }

  /**
   * InrWalet updateManyAndReturn
   */
  export type InrWaletUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InrWalet
     */
    select?: InrWaletSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InrWalet
     */
    omit?: InrWaletOmit<ExtArgs> | null
    /**
     * The data used to update InrWalets.
     */
    data: XOR<InrWaletUpdateManyMutationInput, InrWaletUncheckedUpdateManyInput>
    /**
     * Filter which InrWalets to update
     */
    where?: InrWaletWhereInput
    /**
     * Limit how many InrWalets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InrWaletIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InrWalet upsert
   */
  export type InrWaletUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InrWalet
     */
    select?: InrWaletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InrWalet
     */
    omit?: InrWaletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InrWaletInclude<ExtArgs> | null
    /**
     * The filter to search for the InrWalet to update in case it exists.
     */
    where: InrWaletWhereUniqueInput
    /**
     * In case the InrWalet found by the `where` argument doesn't exist, create a new InrWalet with this data.
     */
    create: XOR<InrWaletCreateInput, InrWaletUncheckedCreateInput>
    /**
     * In case the InrWalet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InrWaletUpdateInput, InrWaletUncheckedUpdateInput>
  }

  /**
   * InrWalet delete
   */
  export type InrWaletDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InrWalet
     */
    select?: InrWaletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InrWalet
     */
    omit?: InrWaletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InrWaletInclude<ExtArgs> | null
    /**
     * Filter which InrWalet to delete.
     */
    where: InrWaletWhereUniqueInput
  }

  /**
   * InrWalet deleteMany
   */
  export type InrWaletDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InrWalets to delete
     */
    where?: InrWaletWhereInput
    /**
     * Limit how many InrWalets to delete.
     */
    limit?: number
  }

  /**
   * InrWalet without action
   */
  export type InrWaletDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InrWalet
     */
    select?: InrWaletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InrWalet
     */
    omit?: InrWaletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InrWaletInclude<ExtArgs> | null
  }


  /**
   * Model SolWallet
   */

  export type AggregateSolWallet = {
    _count: SolWalletCountAggregateOutputType | null
    _min: SolWalletMinAggregateOutputType | null
    _max: SolWalletMaxAggregateOutputType | null
  }

  export type SolWalletMinAggregateOutputType = {
    id: string | null
    publicKey: string | null
    privateKey: string | null
    userId: string | null
  }

  export type SolWalletMaxAggregateOutputType = {
    id: string | null
    publicKey: string | null
    privateKey: string | null
    userId: string | null
  }

  export type SolWalletCountAggregateOutputType = {
    id: number
    publicKey: number
    privateKey: number
    userId: number
    _all: number
  }


  export type SolWalletMinAggregateInputType = {
    id?: true
    publicKey?: true
    privateKey?: true
    userId?: true
  }

  export type SolWalletMaxAggregateInputType = {
    id?: true
    publicKey?: true
    privateKey?: true
    userId?: true
  }

  export type SolWalletCountAggregateInputType = {
    id?: true
    publicKey?: true
    privateKey?: true
    userId?: true
    _all?: true
  }

  export type SolWalletAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SolWallet to aggregate.
     */
    where?: SolWalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SolWallets to fetch.
     */
    orderBy?: SolWalletOrderByWithRelationInput | SolWalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SolWalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SolWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SolWallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SolWallets
    **/
    _count?: true | SolWalletCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SolWalletMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SolWalletMaxAggregateInputType
  }

  export type GetSolWalletAggregateType<T extends SolWalletAggregateArgs> = {
        [P in keyof T & keyof AggregateSolWallet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSolWallet[P]>
      : GetScalarType<T[P], AggregateSolWallet[P]>
  }




  export type SolWalletGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SolWalletWhereInput
    orderBy?: SolWalletOrderByWithAggregationInput | SolWalletOrderByWithAggregationInput[]
    by: SolWalletScalarFieldEnum[] | SolWalletScalarFieldEnum
    having?: SolWalletScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SolWalletCountAggregateInputType | true
    _min?: SolWalletMinAggregateInputType
    _max?: SolWalletMaxAggregateInputType
  }

  export type SolWalletGroupByOutputType = {
    id: string
    publicKey: string
    privateKey: string
    userId: string
    _count: SolWalletCountAggregateOutputType | null
    _min: SolWalletMinAggregateOutputType | null
    _max: SolWalletMaxAggregateOutputType | null
  }

  type GetSolWalletGroupByPayload<T extends SolWalletGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SolWalletGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SolWalletGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SolWalletGroupByOutputType[P]>
            : GetScalarType<T[P], SolWalletGroupByOutputType[P]>
        }
      >
    >


  export type SolWalletSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicKey?: boolean
    privateKey?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["solWallet"]>

  export type SolWalletSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicKey?: boolean
    privateKey?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["solWallet"]>

  export type SolWalletSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicKey?: boolean
    privateKey?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["solWallet"]>

  export type SolWalletSelectScalar = {
    id?: boolean
    publicKey?: boolean
    privateKey?: boolean
    userId?: boolean
  }

  export type SolWalletOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "publicKey" | "privateKey" | "userId", ExtArgs["result"]["solWallet"]>
  export type SolWalletInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SolWalletIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SolWalletIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SolWalletPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SolWallet"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      publicKey: string
      privateKey: string
      userId: string
    }, ExtArgs["result"]["solWallet"]>
    composites: {}
  }

  type SolWalletGetPayload<S extends boolean | null | undefined | SolWalletDefaultArgs> = $Result.GetResult<Prisma.$SolWalletPayload, S>

  type SolWalletCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SolWalletFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SolWalletCountAggregateInputType | true
    }

  export interface SolWalletDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SolWallet'], meta: { name: 'SolWallet' } }
    /**
     * Find zero or one SolWallet that matches the filter.
     * @param {SolWalletFindUniqueArgs} args - Arguments to find a SolWallet
     * @example
     * // Get one SolWallet
     * const solWallet = await prisma.solWallet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SolWalletFindUniqueArgs>(args: SelectSubset<T, SolWalletFindUniqueArgs<ExtArgs>>): Prisma__SolWalletClient<$Result.GetResult<Prisma.$SolWalletPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SolWallet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SolWalletFindUniqueOrThrowArgs} args - Arguments to find a SolWallet
     * @example
     * // Get one SolWallet
     * const solWallet = await prisma.solWallet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SolWalletFindUniqueOrThrowArgs>(args: SelectSubset<T, SolWalletFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SolWalletClient<$Result.GetResult<Prisma.$SolWalletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SolWallet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolWalletFindFirstArgs} args - Arguments to find a SolWallet
     * @example
     * // Get one SolWallet
     * const solWallet = await prisma.solWallet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SolWalletFindFirstArgs>(args?: SelectSubset<T, SolWalletFindFirstArgs<ExtArgs>>): Prisma__SolWalletClient<$Result.GetResult<Prisma.$SolWalletPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SolWallet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolWalletFindFirstOrThrowArgs} args - Arguments to find a SolWallet
     * @example
     * // Get one SolWallet
     * const solWallet = await prisma.solWallet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SolWalletFindFirstOrThrowArgs>(args?: SelectSubset<T, SolWalletFindFirstOrThrowArgs<ExtArgs>>): Prisma__SolWalletClient<$Result.GetResult<Prisma.$SolWalletPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SolWallets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolWalletFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SolWallets
     * const solWallets = await prisma.solWallet.findMany()
     * 
     * // Get first 10 SolWallets
     * const solWallets = await prisma.solWallet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const solWalletWithIdOnly = await prisma.solWallet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SolWalletFindManyArgs>(args?: SelectSubset<T, SolWalletFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolWalletPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SolWallet.
     * @param {SolWalletCreateArgs} args - Arguments to create a SolWallet.
     * @example
     * // Create one SolWallet
     * const SolWallet = await prisma.solWallet.create({
     *   data: {
     *     // ... data to create a SolWallet
     *   }
     * })
     * 
     */
    create<T extends SolWalletCreateArgs>(args: SelectSubset<T, SolWalletCreateArgs<ExtArgs>>): Prisma__SolWalletClient<$Result.GetResult<Prisma.$SolWalletPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SolWallets.
     * @param {SolWalletCreateManyArgs} args - Arguments to create many SolWallets.
     * @example
     * // Create many SolWallets
     * const solWallet = await prisma.solWallet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SolWalletCreateManyArgs>(args?: SelectSubset<T, SolWalletCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SolWallets and returns the data saved in the database.
     * @param {SolWalletCreateManyAndReturnArgs} args - Arguments to create many SolWallets.
     * @example
     * // Create many SolWallets
     * const solWallet = await prisma.solWallet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SolWallets and only return the `id`
     * const solWalletWithIdOnly = await prisma.solWallet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SolWalletCreateManyAndReturnArgs>(args?: SelectSubset<T, SolWalletCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolWalletPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SolWallet.
     * @param {SolWalletDeleteArgs} args - Arguments to delete one SolWallet.
     * @example
     * // Delete one SolWallet
     * const SolWallet = await prisma.solWallet.delete({
     *   where: {
     *     // ... filter to delete one SolWallet
     *   }
     * })
     * 
     */
    delete<T extends SolWalletDeleteArgs>(args: SelectSubset<T, SolWalletDeleteArgs<ExtArgs>>): Prisma__SolWalletClient<$Result.GetResult<Prisma.$SolWalletPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SolWallet.
     * @param {SolWalletUpdateArgs} args - Arguments to update one SolWallet.
     * @example
     * // Update one SolWallet
     * const solWallet = await prisma.solWallet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SolWalletUpdateArgs>(args: SelectSubset<T, SolWalletUpdateArgs<ExtArgs>>): Prisma__SolWalletClient<$Result.GetResult<Prisma.$SolWalletPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SolWallets.
     * @param {SolWalletDeleteManyArgs} args - Arguments to filter SolWallets to delete.
     * @example
     * // Delete a few SolWallets
     * const { count } = await prisma.solWallet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SolWalletDeleteManyArgs>(args?: SelectSubset<T, SolWalletDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SolWallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolWalletUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SolWallets
     * const solWallet = await prisma.solWallet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SolWalletUpdateManyArgs>(args: SelectSubset<T, SolWalletUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SolWallets and returns the data updated in the database.
     * @param {SolWalletUpdateManyAndReturnArgs} args - Arguments to update many SolWallets.
     * @example
     * // Update many SolWallets
     * const solWallet = await prisma.solWallet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SolWallets and only return the `id`
     * const solWalletWithIdOnly = await prisma.solWallet.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SolWalletUpdateManyAndReturnArgs>(args: SelectSubset<T, SolWalletUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolWalletPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SolWallet.
     * @param {SolWalletUpsertArgs} args - Arguments to update or create a SolWallet.
     * @example
     * // Update or create a SolWallet
     * const solWallet = await prisma.solWallet.upsert({
     *   create: {
     *     // ... data to create a SolWallet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SolWallet we want to update
     *   }
     * })
     */
    upsert<T extends SolWalletUpsertArgs>(args: SelectSubset<T, SolWalletUpsertArgs<ExtArgs>>): Prisma__SolWalletClient<$Result.GetResult<Prisma.$SolWalletPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SolWallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolWalletCountArgs} args - Arguments to filter SolWallets to count.
     * @example
     * // Count the number of SolWallets
     * const count = await prisma.solWallet.count({
     *   where: {
     *     // ... the filter for the SolWallets we want to count
     *   }
     * })
    **/
    count<T extends SolWalletCountArgs>(
      args?: Subset<T, SolWalletCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SolWalletCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SolWallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolWalletAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SolWalletAggregateArgs>(args: Subset<T, SolWalletAggregateArgs>): Prisma.PrismaPromise<GetSolWalletAggregateType<T>>

    /**
     * Group by SolWallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolWalletGroupByArgs} args - Group by arguments.
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
      T extends SolWalletGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SolWalletGroupByArgs['orderBy'] }
        : { orderBy?: SolWalletGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SolWalletGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSolWalletGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SolWallet model
   */
  readonly fields: SolWalletFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SolWallet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SolWalletClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SolWallet model
   */
  interface SolWalletFieldRefs {
    readonly id: FieldRef<"SolWallet", 'String'>
    readonly publicKey: FieldRef<"SolWallet", 'String'>
    readonly privateKey: FieldRef<"SolWallet", 'String'>
    readonly userId: FieldRef<"SolWallet", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SolWallet findUnique
   */
  export type SolWalletFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolWallet
     */
    select?: SolWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolWallet
     */
    omit?: SolWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolWalletInclude<ExtArgs> | null
    /**
     * Filter, which SolWallet to fetch.
     */
    where: SolWalletWhereUniqueInput
  }

  /**
   * SolWallet findUniqueOrThrow
   */
  export type SolWalletFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolWallet
     */
    select?: SolWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolWallet
     */
    omit?: SolWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolWalletInclude<ExtArgs> | null
    /**
     * Filter, which SolWallet to fetch.
     */
    where: SolWalletWhereUniqueInput
  }

  /**
   * SolWallet findFirst
   */
  export type SolWalletFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolWallet
     */
    select?: SolWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolWallet
     */
    omit?: SolWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolWalletInclude<ExtArgs> | null
    /**
     * Filter, which SolWallet to fetch.
     */
    where?: SolWalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SolWallets to fetch.
     */
    orderBy?: SolWalletOrderByWithRelationInput | SolWalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SolWallets.
     */
    cursor?: SolWalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SolWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SolWallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SolWallets.
     */
    distinct?: SolWalletScalarFieldEnum | SolWalletScalarFieldEnum[]
  }

  /**
   * SolWallet findFirstOrThrow
   */
  export type SolWalletFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolWallet
     */
    select?: SolWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolWallet
     */
    omit?: SolWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolWalletInclude<ExtArgs> | null
    /**
     * Filter, which SolWallet to fetch.
     */
    where?: SolWalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SolWallets to fetch.
     */
    orderBy?: SolWalletOrderByWithRelationInput | SolWalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SolWallets.
     */
    cursor?: SolWalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SolWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SolWallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SolWallets.
     */
    distinct?: SolWalletScalarFieldEnum | SolWalletScalarFieldEnum[]
  }

  /**
   * SolWallet findMany
   */
  export type SolWalletFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolWallet
     */
    select?: SolWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolWallet
     */
    omit?: SolWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolWalletInclude<ExtArgs> | null
    /**
     * Filter, which SolWallets to fetch.
     */
    where?: SolWalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SolWallets to fetch.
     */
    orderBy?: SolWalletOrderByWithRelationInput | SolWalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SolWallets.
     */
    cursor?: SolWalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SolWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SolWallets.
     */
    skip?: number
    distinct?: SolWalletScalarFieldEnum | SolWalletScalarFieldEnum[]
  }

  /**
   * SolWallet create
   */
  export type SolWalletCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolWallet
     */
    select?: SolWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolWallet
     */
    omit?: SolWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolWalletInclude<ExtArgs> | null
    /**
     * The data needed to create a SolWallet.
     */
    data: XOR<SolWalletCreateInput, SolWalletUncheckedCreateInput>
  }

  /**
   * SolWallet createMany
   */
  export type SolWalletCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SolWallets.
     */
    data: SolWalletCreateManyInput | SolWalletCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SolWallet createManyAndReturn
   */
  export type SolWalletCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolWallet
     */
    select?: SolWalletSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SolWallet
     */
    omit?: SolWalletOmit<ExtArgs> | null
    /**
     * The data used to create many SolWallets.
     */
    data: SolWalletCreateManyInput | SolWalletCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolWalletIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SolWallet update
   */
  export type SolWalletUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolWallet
     */
    select?: SolWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolWallet
     */
    omit?: SolWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolWalletInclude<ExtArgs> | null
    /**
     * The data needed to update a SolWallet.
     */
    data: XOR<SolWalletUpdateInput, SolWalletUncheckedUpdateInput>
    /**
     * Choose, which SolWallet to update.
     */
    where: SolWalletWhereUniqueInput
  }

  /**
   * SolWallet updateMany
   */
  export type SolWalletUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SolWallets.
     */
    data: XOR<SolWalletUpdateManyMutationInput, SolWalletUncheckedUpdateManyInput>
    /**
     * Filter which SolWallets to update
     */
    where?: SolWalletWhereInput
    /**
     * Limit how many SolWallets to update.
     */
    limit?: number
  }

  /**
   * SolWallet updateManyAndReturn
   */
  export type SolWalletUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolWallet
     */
    select?: SolWalletSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SolWallet
     */
    omit?: SolWalletOmit<ExtArgs> | null
    /**
     * The data used to update SolWallets.
     */
    data: XOR<SolWalletUpdateManyMutationInput, SolWalletUncheckedUpdateManyInput>
    /**
     * Filter which SolWallets to update
     */
    where?: SolWalletWhereInput
    /**
     * Limit how many SolWallets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolWalletIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SolWallet upsert
   */
  export type SolWalletUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolWallet
     */
    select?: SolWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolWallet
     */
    omit?: SolWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolWalletInclude<ExtArgs> | null
    /**
     * The filter to search for the SolWallet to update in case it exists.
     */
    where: SolWalletWhereUniqueInput
    /**
     * In case the SolWallet found by the `where` argument doesn't exist, create a new SolWallet with this data.
     */
    create: XOR<SolWalletCreateInput, SolWalletUncheckedCreateInput>
    /**
     * In case the SolWallet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SolWalletUpdateInput, SolWalletUncheckedUpdateInput>
  }

  /**
   * SolWallet delete
   */
  export type SolWalletDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolWallet
     */
    select?: SolWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolWallet
     */
    omit?: SolWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolWalletInclude<ExtArgs> | null
    /**
     * Filter which SolWallet to delete.
     */
    where: SolWalletWhereUniqueInput
  }

  /**
   * SolWallet deleteMany
   */
  export type SolWalletDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SolWallets to delete
     */
    where?: SolWalletWhereInput
    /**
     * Limit how many SolWallets to delete.
     */
    limit?: number
  }

  /**
   * SolWallet without action
   */
  export type SolWalletDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolWallet
     */
    select?: SolWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolWallet
     */
    omit?: SolWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolWalletInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    sub: 'sub',
    name: 'name',
    profilePicture: 'profilePicture',
    password: 'password',
    solWalletId: 'solWalletId',
    inrWalletId: 'inrWalletId',
    provider: 'provider'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const InrWaletScalarFieldEnum: {
    id: 'id',
    balance: 'balance',
    userId: 'userId'
  };

  export type InrWaletScalarFieldEnum = (typeof InrWaletScalarFieldEnum)[keyof typeof InrWaletScalarFieldEnum]


  export const SolWalletScalarFieldEnum: {
    id: 'id',
    publicKey: 'publicKey',
    privateKey: 'privateKey',
    userId: 'userId'
  };

  export type SolWalletScalarFieldEnum = (typeof SolWalletScalarFieldEnum)[keyof typeof SolWalletScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Provider'
   */
  export type EnumProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Provider'>
    


  /**
   * Reference to a field of type 'Provider[]'
   */
  export type ListEnumProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Provider[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    sub?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    profilePicture?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    solWalletId?: StringNullableFilter<"User"> | string | null
    inrWalletId?: StringNullableFilter<"User"> | string | null
    provider?: EnumProviderFilter<"User"> | $Enums.Provider
    solWallet?: XOR<SolWalletNullableScalarRelationFilter, SolWalletWhereInput> | null
    inrWallet?: XOR<InrWaletNullableScalarRelationFilter, InrWaletWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    sub?: SortOrder
    name?: SortOrderInput | SortOrder
    profilePicture?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    solWalletId?: SortOrderInput | SortOrder
    inrWalletId?: SortOrderInput | SortOrder
    provider?: SortOrder
    solWallet?: SolWalletOrderByWithRelationInput
    inrWallet?: InrWaletOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    sub?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    profilePicture?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    solWalletId?: StringNullableFilter<"User"> | string | null
    inrWalletId?: StringNullableFilter<"User"> | string | null
    provider?: EnumProviderFilter<"User"> | $Enums.Provider
    solWallet?: XOR<SolWalletNullableScalarRelationFilter, SolWalletWhereInput> | null
    inrWallet?: XOR<InrWaletNullableScalarRelationFilter, InrWaletWhereInput> | null
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    sub?: SortOrder
    name?: SortOrderInput | SortOrder
    profilePicture?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    solWalletId?: SortOrderInput | SortOrder
    inrWalletId?: SortOrderInput | SortOrder
    provider?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    sub?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    profilePicture?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    solWalletId?: StringNullableWithAggregatesFilter<"User"> | string | null
    inrWalletId?: StringNullableWithAggregatesFilter<"User"> | string | null
    provider?: EnumProviderWithAggregatesFilter<"User"> | $Enums.Provider
  }

  export type InrWaletWhereInput = {
    AND?: InrWaletWhereInput | InrWaletWhereInput[]
    OR?: InrWaletWhereInput[]
    NOT?: InrWaletWhereInput | InrWaletWhereInput[]
    id?: StringFilter<"InrWalet"> | string
    balance?: IntFilter<"InrWalet"> | number
    userId?: StringFilter<"InrWalet"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type InrWaletOrderByWithRelationInput = {
    id?: SortOrder
    balance?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type InrWaletWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: InrWaletWhereInput | InrWaletWhereInput[]
    OR?: InrWaletWhereInput[]
    NOT?: InrWaletWhereInput | InrWaletWhereInput[]
    balance?: IntFilter<"InrWalet"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type InrWaletOrderByWithAggregationInput = {
    id?: SortOrder
    balance?: SortOrder
    userId?: SortOrder
    _count?: InrWaletCountOrderByAggregateInput
    _avg?: InrWaletAvgOrderByAggregateInput
    _max?: InrWaletMaxOrderByAggregateInput
    _min?: InrWaletMinOrderByAggregateInput
    _sum?: InrWaletSumOrderByAggregateInput
  }

  export type InrWaletScalarWhereWithAggregatesInput = {
    AND?: InrWaletScalarWhereWithAggregatesInput | InrWaletScalarWhereWithAggregatesInput[]
    OR?: InrWaletScalarWhereWithAggregatesInput[]
    NOT?: InrWaletScalarWhereWithAggregatesInput | InrWaletScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InrWalet"> | string
    balance?: IntWithAggregatesFilter<"InrWalet"> | number
    userId?: StringWithAggregatesFilter<"InrWalet"> | string
  }

  export type SolWalletWhereInput = {
    AND?: SolWalletWhereInput | SolWalletWhereInput[]
    OR?: SolWalletWhereInput[]
    NOT?: SolWalletWhereInput | SolWalletWhereInput[]
    id?: StringFilter<"SolWallet"> | string
    publicKey?: StringFilter<"SolWallet"> | string
    privateKey?: StringFilter<"SolWallet"> | string
    userId?: StringFilter<"SolWallet"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SolWalletOrderByWithRelationInput = {
    id?: SortOrder
    publicKey?: SortOrder
    privateKey?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SolWalletWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: SolWalletWhereInput | SolWalletWhereInput[]
    OR?: SolWalletWhereInput[]
    NOT?: SolWalletWhereInput | SolWalletWhereInput[]
    publicKey?: StringFilter<"SolWallet"> | string
    privateKey?: StringFilter<"SolWallet"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type SolWalletOrderByWithAggregationInput = {
    id?: SortOrder
    publicKey?: SortOrder
    privateKey?: SortOrder
    userId?: SortOrder
    _count?: SolWalletCountOrderByAggregateInput
    _max?: SolWalletMaxOrderByAggregateInput
    _min?: SolWalletMinOrderByAggregateInput
  }

  export type SolWalletScalarWhereWithAggregatesInput = {
    AND?: SolWalletScalarWhereWithAggregatesInput | SolWalletScalarWhereWithAggregatesInput[]
    OR?: SolWalletScalarWhereWithAggregatesInput[]
    NOT?: SolWalletScalarWhereWithAggregatesInput | SolWalletScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SolWallet"> | string
    publicKey?: StringWithAggregatesFilter<"SolWallet"> | string
    privateKey?: StringWithAggregatesFilter<"SolWallet"> | string
    userId?: StringWithAggregatesFilter<"SolWallet"> | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    sub?: string
    name?: string | null
    profilePicture?: string | null
    password?: string | null
    solWalletId?: string | null
    inrWalletId?: string | null
    provider: $Enums.Provider
    solWallet?: SolWalletCreateNestedOneWithoutUserInput
    inrWallet?: InrWaletCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    sub?: string
    name?: string | null
    profilePicture?: string | null
    password?: string | null
    solWalletId?: string | null
    inrWalletId?: string | null
    provider: $Enums.Provider
    solWallet?: SolWalletUncheckedCreateNestedOneWithoutUserInput
    inrWallet?: InrWaletUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    sub?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    solWalletId?: NullableStringFieldUpdateOperationsInput | string | null
    inrWalletId?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    solWallet?: SolWalletUpdateOneWithoutUserNestedInput
    inrWallet?: InrWaletUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    sub?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    solWalletId?: NullableStringFieldUpdateOperationsInput | string | null
    inrWalletId?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    solWallet?: SolWalletUncheckedUpdateOneWithoutUserNestedInput
    inrWallet?: InrWaletUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    sub?: string
    name?: string | null
    profilePicture?: string | null
    password?: string | null
    solWalletId?: string | null
    inrWalletId?: string | null
    provider: $Enums.Provider
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    sub?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    solWalletId?: NullableStringFieldUpdateOperationsInput | string | null
    inrWalletId?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    sub?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    solWalletId?: NullableStringFieldUpdateOperationsInput | string | null
    inrWalletId?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
  }

  export type InrWaletCreateInput = {
    id?: string
    balance: number
    user: UserCreateNestedOneWithoutInrWalletInput
  }

  export type InrWaletUncheckedCreateInput = {
    id?: string
    balance: number
    userId: string
  }

  export type InrWaletUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutInrWalletNestedInput
  }

  export type InrWaletUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type InrWaletCreateManyInput = {
    id?: string
    balance: number
    userId: string
  }

  export type InrWaletUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
  }

  export type InrWaletUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SolWalletCreateInput = {
    id?: string
    publicKey: string
    privateKey: string
    user: UserCreateNestedOneWithoutSolWalletInput
  }

  export type SolWalletUncheckedCreateInput = {
    id?: string
    publicKey: string
    privateKey: string
    userId: string
  }

  export type SolWalletUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    privateKey?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutSolWalletNestedInput
  }

  export type SolWalletUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    privateKey?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SolWalletCreateManyInput = {
    id?: string
    publicKey: string
    privateKey: string
    userId: string
  }

  export type SolWalletUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    privateKey?: StringFieldUpdateOperationsInput | string
  }

  export type SolWalletUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    privateKey?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>
    in?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderFilter<$PrismaModel> | $Enums.Provider
  }

  export type SolWalletNullableScalarRelationFilter = {
    is?: SolWalletWhereInput | null
    isNot?: SolWalletWhereInput | null
  }

  export type InrWaletNullableScalarRelationFilter = {
    is?: InrWaletWhereInput | null
    isNot?: InrWaletWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    sub?: SortOrder
    name?: SortOrder
    profilePicture?: SortOrder
    password?: SortOrder
    solWalletId?: SortOrder
    inrWalletId?: SortOrder
    provider?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    sub?: SortOrder
    name?: SortOrder
    profilePicture?: SortOrder
    password?: SortOrder
    solWalletId?: SortOrder
    inrWalletId?: SortOrder
    provider?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    sub?: SortOrder
    name?: SortOrder
    profilePicture?: SortOrder
    password?: SortOrder
    solWalletId?: SortOrder
    inrWalletId?: SortOrder
    provider?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>
    in?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderWithAggregatesFilter<$PrismaModel> | $Enums.Provider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProviderFilter<$PrismaModel>
    _max?: NestedEnumProviderFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type InrWaletCountOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
    userId?: SortOrder
  }

  export type InrWaletAvgOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type InrWaletMaxOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
    userId?: SortOrder
  }

  export type InrWaletMinOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
    userId?: SortOrder
  }

  export type InrWaletSumOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type SolWalletCountOrderByAggregateInput = {
    id?: SortOrder
    publicKey?: SortOrder
    privateKey?: SortOrder
    userId?: SortOrder
  }

  export type SolWalletMaxOrderByAggregateInput = {
    id?: SortOrder
    publicKey?: SortOrder
    privateKey?: SortOrder
    userId?: SortOrder
  }

  export type SolWalletMinOrderByAggregateInput = {
    id?: SortOrder
    publicKey?: SortOrder
    privateKey?: SortOrder
    userId?: SortOrder
  }

  export type SolWalletCreateNestedOneWithoutUserInput = {
    create?: XOR<SolWalletCreateWithoutUserInput, SolWalletUncheckedCreateWithoutUserInput>
    connectOrCreate?: SolWalletCreateOrConnectWithoutUserInput
    connect?: SolWalletWhereUniqueInput
  }

  export type InrWaletCreateNestedOneWithoutUserInput = {
    create?: XOR<InrWaletCreateWithoutUserInput, InrWaletUncheckedCreateWithoutUserInput>
    connectOrCreate?: InrWaletCreateOrConnectWithoutUserInput
    connect?: InrWaletWhereUniqueInput
  }

  export type SolWalletUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<SolWalletCreateWithoutUserInput, SolWalletUncheckedCreateWithoutUserInput>
    connectOrCreate?: SolWalletCreateOrConnectWithoutUserInput
    connect?: SolWalletWhereUniqueInput
  }

  export type InrWaletUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<InrWaletCreateWithoutUserInput, InrWaletUncheckedCreateWithoutUserInput>
    connectOrCreate?: InrWaletCreateOrConnectWithoutUserInput
    connect?: InrWaletWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumProviderFieldUpdateOperationsInput = {
    set?: $Enums.Provider
  }

  export type SolWalletUpdateOneWithoutUserNestedInput = {
    create?: XOR<SolWalletCreateWithoutUserInput, SolWalletUncheckedCreateWithoutUserInput>
    connectOrCreate?: SolWalletCreateOrConnectWithoutUserInput
    upsert?: SolWalletUpsertWithoutUserInput
    disconnect?: SolWalletWhereInput | boolean
    delete?: SolWalletWhereInput | boolean
    connect?: SolWalletWhereUniqueInput
    update?: XOR<XOR<SolWalletUpdateToOneWithWhereWithoutUserInput, SolWalletUpdateWithoutUserInput>, SolWalletUncheckedUpdateWithoutUserInput>
  }

  export type InrWaletUpdateOneWithoutUserNestedInput = {
    create?: XOR<InrWaletCreateWithoutUserInput, InrWaletUncheckedCreateWithoutUserInput>
    connectOrCreate?: InrWaletCreateOrConnectWithoutUserInput
    upsert?: InrWaletUpsertWithoutUserInput
    disconnect?: InrWaletWhereInput | boolean
    delete?: InrWaletWhereInput | boolean
    connect?: InrWaletWhereUniqueInput
    update?: XOR<XOR<InrWaletUpdateToOneWithWhereWithoutUserInput, InrWaletUpdateWithoutUserInput>, InrWaletUncheckedUpdateWithoutUserInput>
  }

  export type SolWalletUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<SolWalletCreateWithoutUserInput, SolWalletUncheckedCreateWithoutUserInput>
    connectOrCreate?: SolWalletCreateOrConnectWithoutUserInput
    upsert?: SolWalletUpsertWithoutUserInput
    disconnect?: SolWalletWhereInput | boolean
    delete?: SolWalletWhereInput | boolean
    connect?: SolWalletWhereUniqueInput
    update?: XOR<XOR<SolWalletUpdateToOneWithWhereWithoutUserInput, SolWalletUpdateWithoutUserInput>, SolWalletUncheckedUpdateWithoutUserInput>
  }

  export type InrWaletUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<InrWaletCreateWithoutUserInput, InrWaletUncheckedCreateWithoutUserInput>
    connectOrCreate?: InrWaletCreateOrConnectWithoutUserInput
    upsert?: InrWaletUpsertWithoutUserInput
    disconnect?: InrWaletWhereInput | boolean
    delete?: InrWaletWhereInput | boolean
    connect?: InrWaletWhereUniqueInput
    update?: XOR<XOR<InrWaletUpdateToOneWithWhereWithoutUserInput, InrWaletUpdateWithoutUserInput>, InrWaletUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutInrWalletInput = {
    create?: XOR<UserCreateWithoutInrWalletInput, UserUncheckedCreateWithoutInrWalletInput>
    connectOrCreate?: UserCreateOrConnectWithoutInrWalletInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutInrWalletNestedInput = {
    create?: XOR<UserCreateWithoutInrWalletInput, UserUncheckedCreateWithoutInrWalletInput>
    connectOrCreate?: UserCreateOrConnectWithoutInrWalletInput
    upsert?: UserUpsertWithoutInrWalletInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInrWalletInput, UserUpdateWithoutInrWalletInput>, UserUncheckedUpdateWithoutInrWalletInput>
  }

  export type UserCreateNestedOneWithoutSolWalletInput = {
    create?: XOR<UserCreateWithoutSolWalletInput, UserUncheckedCreateWithoutSolWalletInput>
    connectOrCreate?: UserCreateOrConnectWithoutSolWalletInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSolWalletNestedInput = {
    create?: XOR<UserCreateWithoutSolWalletInput, UserUncheckedCreateWithoutSolWalletInput>
    connectOrCreate?: UserCreateOrConnectWithoutSolWalletInput
    upsert?: UserUpsertWithoutSolWalletInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSolWalletInput, UserUpdateWithoutSolWalletInput>, UserUncheckedUpdateWithoutSolWalletInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>
    in?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderFilter<$PrismaModel> | $Enums.Provider
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>
    in?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderWithAggregatesFilter<$PrismaModel> | $Enums.Provider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProviderFilter<$PrismaModel>
    _max?: NestedEnumProviderFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type SolWalletCreateWithoutUserInput = {
    id?: string
    publicKey: string
    privateKey: string
  }

  export type SolWalletUncheckedCreateWithoutUserInput = {
    id?: string
    publicKey: string
    privateKey: string
  }

  export type SolWalletCreateOrConnectWithoutUserInput = {
    where: SolWalletWhereUniqueInput
    create: XOR<SolWalletCreateWithoutUserInput, SolWalletUncheckedCreateWithoutUserInput>
  }

  export type InrWaletCreateWithoutUserInput = {
    id?: string
    balance: number
  }

  export type InrWaletUncheckedCreateWithoutUserInput = {
    id?: string
    balance: number
  }

  export type InrWaletCreateOrConnectWithoutUserInput = {
    where: InrWaletWhereUniqueInput
    create: XOR<InrWaletCreateWithoutUserInput, InrWaletUncheckedCreateWithoutUserInput>
  }

  export type SolWalletUpsertWithoutUserInput = {
    update: XOR<SolWalletUpdateWithoutUserInput, SolWalletUncheckedUpdateWithoutUserInput>
    create: XOR<SolWalletCreateWithoutUserInput, SolWalletUncheckedCreateWithoutUserInput>
    where?: SolWalletWhereInput
  }

  export type SolWalletUpdateToOneWithWhereWithoutUserInput = {
    where?: SolWalletWhereInput
    data: XOR<SolWalletUpdateWithoutUserInput, SolWalletUncheckedUpdateWithoutUserInput>
  }

  export type SolWalletUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    privateKey?: StringFieldUpdateOperationsInput | string
  }

  export type SolWalletUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    privateKey?: StringFieldUpdateOperationsInput | string
  }

  export type InrWaletUpsertWithoutUserInput = {
    update: XOR<InrWaletUpdateWithoutUserInput, InrWaletUncheckedUpdateWithoutUserInput>
    create: XOR<InrWaletCreateWithoutUserInput, InrWaletUncheckedCreateWithoutUserInput>
    where?: InrWaletWhereInput
  }

  export type InrWaletUpdateToOneWithWhereWithoutUserInput = {
    where?: InrWaletWhereInput
    data: XOR<InrWaletUpdateWithoutUserInput, InrWaletUncheckedUpdateWithoutUserInput>
  }

  export type InrWaletUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
  }

  export type InrWaletUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateWithoutInrWalletInput = {
    id?: string
    username: string
    sub?: string
    name?: string | null
    profilePicture?: string | null
    password?: string | null
    solWalletId?: string | null
    inrWalletId?: string | null
    provider: $Enums.Provider
    solWallet?: SolWalletCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInrWalletInput = {
    id?: string
    username: string
    sub?: string
    name?: string | null
    profilePicture?: string | null
    password?: string | null
    solWalletId?: string | null
    inrWalletId?: string | null
    provider: $Enums.Provider
    solWallet?: SolWalletUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInrWalletInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInrWalletInput, UserUncheckedCreateWithoutInrWalletInput>
  }

  export type UserUpsertWithoutInrWalletInput = {
    update: XOR<UserUpdateWithoutInrWalletInput, UserUncheckedUpdateWithoutInrWalletInput>
    create: XOR<UserCreateWithoutInrWalletInput, UserUncheckedCreateWithoutInrWalletInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInrWalletInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInrWalletInput, UserUncheckedUpdateWithoutInrWalletInput>
  }

  export type UserUpdateWithoutInrWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    sub?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    solWalletId?: NullableStringFieldUpdateOperationsInput | string | null
    inrWalletId?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    solWallet?: SolWalletUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInrWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    sub?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    solWalletId?: NullableStringFieldUpdateOperationsInput | string | null
    inrWalletId?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    solWallet?: SolWalletUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutSolWalletInput = {
    id?: string
    username: string
    sub?: string
    name?: string | null
    profilePicture?: string | null
    password?: string | null
    solWalletId?: string | null
    inrWalletId?: string | null
    provider: $Enums.Provider
    inrWallet?: InrWaletCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSolWalletInput = {
    id?: string
    username: string
    sub?: string
    name?: string | null
    profilePicture?: string | null
    password?: string | null
    solWalletId?: string | null
    inrWalletId?: string | null
    provider: $Enums.Provider
    inrWallet?: InrWaletUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSolWalletInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSolWalletInput, UserUncheckedCreateWithoutSolWalletInput>
  }

  export type UserUpsertWithoutSolWalletInput = {
    update: XOR<UserUpdateWithoutSolWalletInput, UserUncheckedUpdateWithoutSolWalletInput>
    create: XOR<UserCreateWithoutSolWalletInput, UserUncheckedCreateWithoutSolWalletInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSolWalletInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSolWalletInput, UserUncheckedUpdateWithoutSolWalletInput>
  }

  export type UserUpdateWithoutSolWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    sub?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    solWalletId?: NullableStringFieldUpdateOperationsInput | string | null
    inrWalletId?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    inrWallet?: InrWaletUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSolWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    sub?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    solWalletId?: NullableStringFieldUpdateOperationsInput | string | null
    inrWalletId?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    inrWallet?: InrWaletUncheckedUpdateOneWithoutUserNestedInput
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