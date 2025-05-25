import { useState } from 'react'
import { Checkbox } from 'primereact/checkbox';

const ContactForm = () => {
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [checked, setChecked] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        nombre === "" || apellido === "" 
            ? alert("Los campos están vacíos") 
            : alert(`Registrado ${nombre} ${apellido}`)
    }

    return (
        <div>
            <h1>Contact Form</h1>
            <form onSubmit={handleSubmit}>  
                <input 
                    type='text' 
                    placeholder="Nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
                <input 
                    type='text'
                    placeholder="Apellido"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                />
                Quiero suscribirme
                <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>

                
                <button type='submit'>Enviar</button>
            </form>
        </div>
    )
}

export default ContactForm