import { IProduct } from "./IProduct";

export interface IPagination {
        get: any;
        pageIndex: number;
        pageSize: number;
        count: number;
        data: IProduct[];
}
