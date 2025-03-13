export interface IProduct {
    id: number;
    name: string;
    url: string;
    brand_name: string;
}

export interface IPagination {
    current_page: number;
    per_page: number; // number of items on page
    total: number; // total of pages
    last_page: number;
}

export interface PaginationResponse<T> {
    data: T[];
    pagination: IPagination;
}

