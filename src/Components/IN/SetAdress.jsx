import React from 'react';

const SetAdress = () => {
    return (
        <div>
            <form>
                <span>
                    Ingresar nueva dirección para el envio de productos:
                </span> 
                <input type="text" placeholder="Dirección" />
                <button> Ingresar </button>
            </form>
        </div>
    );
};

export default SetAdress;