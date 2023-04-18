/**
 * egy interface ami illeszkedik a response-nak a hiba üzenetéhez
 * eltárolja a statusCode-ot , backend-ből vissza kapott hiba üzenetet és magát a hibát
 */
export  interface ResponseMess{
    statusCode: number;
    message: string[];
    error: string;
}