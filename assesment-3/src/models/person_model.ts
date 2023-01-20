export interface Person {
    id:      string;
    name:    string;
    age:     number;
    address: string;
    sexType: string;
    married: boolean;
}

export class PersonJSONConverter {
    public static toPerson(json: string): Person {
        return JSON.parse(json);
    }

    public static toJSON(value: Person): string {
        return JSON.stringify(value);
    }
}


