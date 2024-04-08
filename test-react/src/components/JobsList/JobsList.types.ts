export interface IJob {
    id: string;
    title: string;
    description: string;
    location: string;
    deadline: Date;
    contact: number;
    email: string;
    archive: boolean;
}