import Item from "./item";
import style from "./Lista.module.scss";
function Lista() {
  const tarefas = [
    { tarefa: "React", tempo: "02:00:00" },
    { tarefa: "Javascript", tempo: "01:00:00" },
  ];
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudo do dia</h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item
            key={index}
            //tarefa={item.tarefa} tempo={item.tempo}
            {...item} //usa todo o objeto
          />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
