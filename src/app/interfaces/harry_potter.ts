export interface Hechizos{
id: number;
hechizo: string;
uso: string
}

export interface Info{

    id: number;
    tipo: string;
    contenido: string
}

export interface Personajes{
    id: number;
    personaje: string;
    apodo: string;
    estudianteDeHogwarts: boolean;
    casaDeHogwarts: string;
    interpretado_por: string;
    hijos: Array<string>;
    imagen: any
}
export interface libros{
    id: number;
    libro:string;
    titulo_original: string;
    fecha_de_lanzamiento: string;
    autora: string;
    descripcion: string;
}