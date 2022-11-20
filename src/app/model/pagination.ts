export interface Pagination {
    _embedded: any;
    _links: Links;
    page: Page;
}

interface Links {
    first: Link;
    self: Link;
    next: Link;
    last: Link;
}

interface Link {
    href: string;
}

interface Page {
    size: number;
    totalElements: number;
    totalPages: number;
    number: number;
}
