import React from 'react';


export default function Contactform() {
    return (
        <form>
            <input type="text" placeholder="Name" name="name" />
            <input type="text" placeholder="Email" name="email" />
            <input type="textarea" placeholder="Message" name="message" />
            <input type="submit" />
        </form>
    )
};
