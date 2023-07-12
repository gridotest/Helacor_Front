export interface Reporte{
    id? : number;
    empresa_encargada: string,
    patente_vehiculo: string,
    cantidad_bultos: number,
    zona_destino:string,
    fecha_salida:Date,
    fecha_estimada_entrega:Date,
    fecha_entrega:Date,
    estado_entrega:string,
 }