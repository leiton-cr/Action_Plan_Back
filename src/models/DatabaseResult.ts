export interface DatabaseResult<T>{
    one: T
    all: Array<T> | []
    affected: boolean
}