import { Languages } from "./languages.model";

export class Country {
    code:string;
    name:string;
    phone:string;
    capital:string;
    currency:string;
    languages:Array<Languages>;
}
