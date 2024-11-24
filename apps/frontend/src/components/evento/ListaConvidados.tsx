import { Convidado } from "core";
import ConvidadoItem from "./ConvidadoItem";

export interface ConvidadoItemProps {
    convidados: Convidado[];
} 

export default function ListaConvidados(props: ConvidadoItemProps) {
    return (
        <div>
            <ul className="flex flex-col gap-2">
                {props.convidados.map((convidado) => 
                    <ConvidadoItem key={convidado.id} convidado={convidado}></ConvidadoItem>
                )}
            </ul>
        </div>
    )
}