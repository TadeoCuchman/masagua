import React from 'react';

const Contact = () => {
    const mail = 'fhos@gmail.com'

    const copy = async () => {
        await navigator.clipboard.writeText(mail);
        alert('Copiado');
    }

    return (
        <div className>
            <br />
            <p>Por consultas dirigirse a:</p>
            <br />
            <br />
            <input type='email' placeholder='fhos@gmail.com' value={ mail } disabled />
            <button onClick={copy} > Copy </button>
            
        </div>
    );
};

export default Contact;