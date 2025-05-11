export type PostInputModel = {
    title: string;
    shortDescription: string;
    content: string;
    blogId: string;
};

export type PostViewModel = {
    id: number;
    title: string;
    shortDescription: string;
    content: string;
    blogId: number;
    blogName: string;
};