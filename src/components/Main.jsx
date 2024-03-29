import { useState } from "react";

export default function Main(){
    const [nome, setNome] = useState("");
    const [Number, setNumber] = useState(0)
    const [listaContatos,setLista] = useState ([]);
    const [ CPF, setCpf] = useState (0);


    const registrar = (event) =>{
        event.preventDefault();
       alert("ola")
       setLista([...listaContatos,
     {
       nomeSalvo: nome,
       telefoneSalvo: telefone
     }
     ]);
    };
     console.table(listaContatos);

    return(
    <main>
        <form>
          <input type="text" name="" id="" onChange={(event) => setNome(event.target.value)}/>
          {nome}

      
          <input type="text" name=""  id="" onChange={(event) => setNumber(event.target.value)}/>
          {Number}

          <label htmfor="telefone">telefone:</label>
         <input 
       type="number"
        nome="" id=""
         onChange={(event)=> setTelefone(event.target.event)}
         />
         {telefone}

         <label htmfor="C
         PF">CPF:</label>
         <input 
       type="number"
        Cpf="" id=""
         onChange={(event)=> setCpf(event.target.event)}
         />
         {CPF}
         <button>enviar</button>
         </form>
    </main>
    );

    
}