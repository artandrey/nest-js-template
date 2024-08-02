export interface IUseCase<Q extends any[], T> {
  execute(...args: Q): T;
}
