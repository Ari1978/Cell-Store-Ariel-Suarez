import { useState } from 'react'
import { Checkbox } from 'primereact/checkbox'
import './stylo.css'

const ContactForm = () => {
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [email, setEmail] = useState("")
    const [telefono, setTelefono] = useState("")
    const [checked, setChecked] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (nombre === "" || apellido === "" || email === "" || telefono === "") {
            alert("Por favor completa todos los campos.")
        } else {
            alert(`¡Gracias por registrarte, ${nombre} ${apellido}!${checked ? " Te suscribiste correctamente." : ""}`)
        }
    }

    return (
        <div className="contact-form-footer">
            <h2>Contacto</h2>
            <form onSubmit={handleSubmit} className="contact-form">
                <input
                    type='text'
                    placeholder="Nombre"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                    className="contact-input"
                />
                <input
                    type='text'
                    placeholder="Apellido"
                    value={apellido}
                    onChange={e => setApellido(e.target.value)}
                    className="contact-input"
                />
                <input
                    type='email'
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="contact-input"
                />
                <input
                    type='tel'
                    placeholder="Teléfono"
                    value={telefono}
                    onChange={e => setTelefono(e.target.value)}
                    className="contact-input"
                />
                <div className="checkbox-row">
                    <Checkbox inputId="suscribir" onChange={e => setChecked(e.checked)} checked={checked} />
                    <label htmlFor="suscribir" className="checkbox-label">Quiero suscribirme</label>
                </div>
                <button type='submit' className="contact-btn">Enviar</button>
            </form>
        </div>
    )
}

export default ContactForm