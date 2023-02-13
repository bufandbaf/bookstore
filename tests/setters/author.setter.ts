import { IAuthorCreate } from '../../app/author/author.interface';

export enum demoAuthors {
    georgeOrwell = 'georgeOrwell',
    julesVerne = 'julesVerne',
}

export const authorCreateSamples: Record<demoAuthors, IAuthorCreate> = {
    georgeOrwell: {
        firstName: 'George',
        lastName: 'Orwell',
    },
    julesVerne: {
        firstName: 'Jules',
        lastName: 'Verne',
    }
};

