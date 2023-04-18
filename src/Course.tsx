/**
 * Interface ami illeszkedik a response-ból vissza kapott json adat objektumhoz
 * 
 */
export interface Course {
  id:number;
  name:string;
  description:string;
  cphoto:string;
  subject: string;
  topic:string;
  details:string;
  file_url:string;
  deadline:string;
  }