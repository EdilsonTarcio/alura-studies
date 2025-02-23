import { ITarefa, Props } from '../../../types/tarefa'
import style from '../lista.module.scss'

export default function Item(
    { 
        tarefa, 
        tempo, 
        selecionado, 
        completado, 
        id, 
        selecionaTarefa 
    }: Props) {
    //desestruturação de props 
    return (
        <li 
        className={`${style.item} ${selecionado ? style.itemSelecionado : ''}`}
        onClick={() => selecionaTarefa({
            tarefa, 
            tempo, 
            selecionado, 
            completado, 
            id, 
        })}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}