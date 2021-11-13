import React from 'react'

const commands = [
    {name: 'help', action: <div><b>no te ayudo nada</b></div>},
    {name: 'boke', action: <div><b>Aguante boke</b></div>}
]

function isValidCommand(command) {
    console.log(command)
    if (commands.some(e => e.name === command)) {
        return true
      }
  }

const Terminal = () => {
    const [input, setInput] = React.useState('')
    const [history, setHistory] = React.useState([])
    const [output, setOutput] = React.useState('')

    function handleKeyPress(e) {
    
        // var key = e.key;
        console.log( "You pressed a key: " + e.key );
        switch(e.key){
            case "r":
                console.log("RRRRRRRRicardo")
                break;

            case "g":
                console.log("GGGato")
                break;

            case "Enter":
                console.log("dale booo")
                storeInput(input)
                break;


        }
    }
    
    
    
    const storeInput = (e) => {
        e.preventDefault()
        
        
        if(!input.trim()){
            console.log('esta vacio')
            return

        }
         console.log('procesando')

       if(!isValidCommand(input)){
            console.log('Error papu')
        }
        else{
        setHistory([
            ...history,
            {command : input}
        ])
        let obj = commands.find(o => o.name === input).action;
        console.log(obj);
        setOutput([...output, obj]);
    }
        e.target.reset()
        setInput('')
   
    }

    return (
        <div>
            {/* <form onSubmit= {storeInput}> */}
            <span><b>anon@juanallegretti.com $</b></span>
                <input
                    type="text"
                    placeholder="Ingresá algo papu"
                    className="form-control mb-2"
                    onChange={ e => setInput(e.target.value) }
                    // onKeyPress={(event) => (event.key === 'Enter' ? setInput(event.target.value) : null)}
                    // onKeyPress={(e) => handleInputKeyDown(e)}
                    onKeyDown={handleKeyPress}
    
                />

{/*                 
                <button className="btn btn-primary btn-block" type='submit'>Agregar</button> */}
                <div>{output}</div>


            {/* </form> */}
        </div>
    )
}

export default Terminal
