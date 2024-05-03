import { useRef, useState } from "react";

function Todolist(){
    const [tarefas, setTarefas] = useState([]);
    const descRef = useRef();

function Salvar() {
    const tarefa = {
        id: 1,
        descricao: descRef.current.value,
        finalizado: false
    }
    setTarefas([...tarefas, tarefa]);
    console.log('Salvado com sucesso.');
}

function Check(tarefa) {
    tarefa.finalizado=!tarefa.finalizado;
    console.log(tarefa)
    setTarefas([...tarefas]);
}

return (
    <>
        <input type="text" ref={descRef}/>
        <button onClick={Salvar}>Salvar</button>
        <br></br>
        {
    tarefas.map(tarefa => {
        return (
            <>
                <br></br>
                <input type="checkbox" onChange={() => Check(tarefa)}/>
                <span style={{
                textDecoration: tarefa.finalizado === true
                ? 'line-through'
                : 'unset'
                }}>
                    {tarefa.descricao}</span>
            </>
        )
    })
    }
    </>
    );
}

export default Todolist;