import { v4 as uuidv4 } from 'uuid';

export class orderDTO {
    numero_orden: string;
    rut_cliente: string;
    nombre_cliente: string;
    rut_retiro: string;
    nombre_retiro: string;
    comercio: string;
    local_retiro: string;
    fecha_llegada_local: string;
    estado: string;

    constructor(rut){
        this.numero_orden = uuidv4();
        this.rut_cliente = rut;
        this.nombre_cliente = "luis hernan perez salgado";
        this.rut_retiro = rut;
        this.nombre_retiro = "luis hernan perez salgado";
        this.comercio = "PARIS";
        this.local_retiro = "P10";
        this.fecha_llegada_local = "20201030";
        this.estado = "en_curso";
    }
}