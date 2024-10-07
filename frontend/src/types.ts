
export type Country = {
    code: string;
    emoji: string;
    name: string;
    id: number;
    continent : Continent;
};

export type Continent = {
    id: number;
    name: string;
};
