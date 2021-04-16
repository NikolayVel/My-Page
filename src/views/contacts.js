import {html} from '../../node_modules/lit-html/lit-html.js'

const contactsTemplate = () => html`
<section id="contacts">
            <div class="contacts-container">
                <div class="contacts-header">
                    <h1>CONTACT</h1>
                    <h2>Get in Touch</h1>
                    
                </div>
                <div class="contacts-content">
                    <ul>
                        <li class="detail"><span class="bold">Adress:</span> Horsens, Denmark </li>
                        <li class="detail"><span class="bold">Telephone:</span> +45 71458663 </li>
                        <li class="detail"><span class="bold">Telephone:</span> +359 887854349 </li>
                        <li class="detail"><span class="bold">Email:</span> velichkov.mail@gmail.com</li>
                        <li class="detail"><span class="bold">Skype:</span> live:59fa91498aff9ee0</li>
                        <li class="detail"><span class="bold">GitHub:</span> <a target="_blank" href="https://github.com/NikolayVel" class="links">GitGub.com/NikolayVel</a></li>
                        <li class="detail"><span class="bold">Strava:</span> <a target='_blank' href="https://www.strava.com/athletes/54375068" class="links">Strava.com/NikolayVelichkov</a></li>


                    </ul>
                </div>
            </div>
        </section>`;

export function contactsPage(context) {
    context.render(contactsTemplate());
}

