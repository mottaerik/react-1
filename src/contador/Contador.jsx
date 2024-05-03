import { useState } from "react";

function Contador(){
    
    //
    const [numero, setNumero] = useState(0);

    function contar(){
        setNumero(numero+1);
        console.log(numero);
    }

    function zerar(){
        setNumero(0);
    }
    
    return (
        <>
            <button onClick={contar}>Contar</button>
            <button onClick={zerar}>Zerar</button>
            { //com as chaves da para escrever JS dentro do HTML
                numero
            }
        </>
    )
}

export default Contador;