import style from './lista.module.scss';
import Item from './item';
import { ITarefa } from '../../types/tarefa';

interface Props {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

export default function Lista({tarefas, selecionaTarefa}: Props) {
    return (
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia </h2>
            <ul>
                {tarefas.map((item) => (
                    <Item
                        selecionaTarefa = {selecionaTarefa}
                        key={item.id}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}