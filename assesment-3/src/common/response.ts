export interface ResponseTempl {
    code: number;
    message: string;
    data?: object;
}


export default class ResponseObj {
    public static generate(code: number, message: string, data?: object): ResponseTempl {
        return {code, message, data};
    }
}



