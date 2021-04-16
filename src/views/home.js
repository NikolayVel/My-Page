import {html} from 'https://unpkg.com/lit-html?module';

const homeTemplate = () => html`
<section id="home" class="" >
            <div class="hero-container">
                <h3 class="color-white">Hej</h3>
                <h1 class="color-white">I'm Nikolay Velichkov</h1> 
                <h4 class="color-white">a Project Management professional and Web Development enthusiast positioned in Horsens, Denmark</h2>
                <a href="/contacts" class="contact-btn">Get in touch</a>
            </div>
        </section>
`

export function homePage(context) {
    
    context.render(homeTemplate())
    console.log(context)
}