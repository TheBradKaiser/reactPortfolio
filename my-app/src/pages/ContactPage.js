
import React from 'react';
import   {Link} from "react-router-dom";
import './HomePage.css'




function ContactPage() {
    return <div><h1 class='h1-title'>How to contact me!</h1>
    <div class='div-container'>
        <p>Heres where I'm at, if you found my phone number somewhere on the internet: I dont answer phone calls from random numbers.

                <ul class='div-container-2'>
            <li>
            <Link to={`mailto:BradEdKaiser@gmail.com`}>BradEdKaiser@gmail.com</Link>
            </li>
            <li>
                <Link to="https://www.linkedin.com/in/bradley-k/">LinkedIn</Link>
            </li>
            <li>
                <Link to="https://github.com/TheBradKaiser">Github</Link>
            </li>
            <li>

            </li>
            </ul>

        </p>
    </div>

    </div>
    ;
  }

export default ContactPage;
