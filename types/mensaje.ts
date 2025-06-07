export type Emisor = "admin" | "cliente";
export type TipoMensaje = "text" | "imagen" | "audio";

export interface Mensaje {
  numero: string;
  mensaje?: string;
  emisor: Emisor;
  tipo: TipoMensaje;
  mediaUrl?: string;
  mediaMimeType?: string;
  timestamp: string;
}
