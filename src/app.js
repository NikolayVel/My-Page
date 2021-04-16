import {html, render} from 'https://unpkg.com/lit-html?module';
import page from '../node_modules/page/page.mjs';

import {homePage} from './views/home.js'
import {personalityPage} from './views/personality.js'
import { educationPage } from './views/education.js';
import { experiencePage } from './views/experience.js';
import { contactsPage } from './views/contacts.js';


const main = document.getElementById('main')

page ('/', decoratePage, homePage);
page ('/personality', decoratePage, personalityPage);
page('/education', decoratePage, educationPage);
page('/experience', decoratePage, experiencePage);
page('/contacts', decoratePage, contactsPage);

page.start();

function decoratePage(context, next) {
    context.render = (content) => render(content, main); 
    next()
}

