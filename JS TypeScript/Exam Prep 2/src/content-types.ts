import { BaseContent, ContentType, WithId } from "./models";

export abstract class DetailedContent implements BaseContent {
    private readonly _id: number;
    private readonly _title: string;
    private readonly _releaseDate: Date;
    private readonly _type: ContentType;

    constructor(id: number, title: string, releaseDate: Date, type: ContentType) {
        this._id = id;
        this._title = title;
        this._releaseDate = releaseDate;
        this._type = type;
    }

    get id(): number {
        return this._id;
    }

    get title(): string {
        return this._title;
    }

    get releaseDate(): Date {
        return new Date(this._releaseDate);
    }

    get type(): ContentType {
        return this._type;
    }

    set type(_: ContentType) {
        throw new Error('Content type is immutable');
    }

    abstract getDetails(): string;
}

export class Movie extends DetailedContent {
    private readonly director: string;

    constructor(id: number, title: string, releaseDate: Date, director: string) {
        super(id, title, releaseDate, ContentType.Movie);
        this.director = director;
    }

    getDetails(): string {
        const date = this.releaseDate;
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();

        return `[MOVIE] "${this.title}" directed by ${this.director} (Released: ${day}/${month}/${year})`;
    }
}

export class Series extends DetailedContent {
    private readonly platformUrl: string;

    constructor(id: number, title: string, releaseDate: Date, platformUrl: string) {
        super(id, title, releaseDate, ContentType.Series);
        this.platformUrl = platformUrl;
    }

    getDetails(): string {
        const date = this.releaseDate;
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();

        return `[SERIES] "${this.title}" (Released: ${day}/${month}/${year}), available at: ${this.platformUrl}`;
    }
}

export function findItemById<T extends WithId>(items: T[], id: number) {
    return items.find(item => item.id === id);
}