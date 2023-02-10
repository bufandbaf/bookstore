import { IAuthorCreate } from "../../app/author/author.interface";
import { IBookCreate } from "../../app/book/book.interface";
import { Genre } from "../../app/book/genre.enum";
import { authorCreateSamples } from "./author.setter";

export enum demoBooks {
    animalFarm = 'animalFarm',
    nineteenEightyFour = 'nineteenEightyFour',
    cestaKolemSvetaZaOsmdesatDnu = 'cestaKolemSvetaZaOsmdesatDnu',
}

export const bookCreateSamples: Record<demoBooks, Omit<IBookCreate, 'authorCode'>> = {
    animalFarm: {
        name: "Animal Farm",
        genre: Genre.Drama,
    },
    nineteenEightyFour: {
        name: "1984",
        genre: Genre.ScienceFiction,
    },
    cestaKolemSvetaZaOsmdesatDnu: {
        name: "Cesta kolem světa za 80 dnů",
        genre: Genre.Adventure,
    }
}