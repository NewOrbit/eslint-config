// Covers: enums, generics, utility types, array-type (T[] not Array<T>),
//         type exports, consistent-indexed-object-style off

enum Status {
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Pending = "PENDING",
}

type Nullable<T> = T | null;

interface StringMap { [key: string]: string }

interface ApiResponse<T> {
    data: T;
    status: number;
    message: string;
}

const createResponse = <T>(data: T): ApiResponse<T> => ({
    data,
    status: 200,
    message: "OK",
});

const tags: string[] = ["eslint", "typescript"];
const current: Status = Status.Active;
const maybeNull: Nullable<string> = null;
const lookup: StringMap = { key: "value" };
const response = createResponse(tags);

export { Status, current, maybeNull, lookup, response };
export type { Nullable, StringMap, ApiResponse };
