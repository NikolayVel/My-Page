import {html} from '../../node_modules/lit-html/lit-html.js'

const educationTemplate = () => html`
    <section id="education" class="">
            <div class="education-container">
                <div class="education-header">

                    <h1>KNOWLEDGE</h1>
                    <h2>My Education</h1>

                </div>
                <div class="education-timeline">


                    <ul>
                        <li>
                            <div>
                                <h3><i class="fas fa-chevron-right"></i> YEAR: TITLE</h3>
                                <p class="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem culpa rerum ea
                                    possimus laboriosam cupiditate beatae dignissimos eaque esse? Pariatur?orem ipsum,
                                    dolor sit amet consectetur adipisicing elit. Autem culpa rerum ea
                                    possimus laboriosam cupiditate beatae dignissimos eaque esse? Pariatur?</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h3><i class="fas fa-chevron-right"></i> YEAR: TITLE</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem culpa rerum ea
                                    possimus laboriosam cupiditate beatae dignissimos eaque esse? Pariatur?</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h3><i class="fas fa-chevron-right"></i> YEAR: TITLE</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem culpa rerum ea
                                    possimus laboriosam cupiditate beatae dignissimos eaque esse? Pariatur?</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h3><i class="fas fa-chevron-right"></i> YEAR: TITLE</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem culpa rerum ea
                                    possimus laboriosam cupiditate beatae dignissimos eaque esse? Pariatur?</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h3><i class="fas fa-chevron-right"></i> YEAR: TITLE</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem culpa rerum ea
                                    possimus laboriosam cupiditate beatae dignissimos eaque esse? Pariatur?</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h3><i class="fas fa-chevron-right"></i> YEAR: TITLE</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem culpa rerum ea
                                    possimus laboriosam cupiditate beatae dignissimos eaque esse? Pariatur?</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h3><i class="fas fa-chevron-right"></i> YEAR: TITLE</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem culpa rerum ea
                                    possimus laboriosam cupiditate beatae dignissimos eaque esse? Pariatur?</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h3><i class="fas fa-chevron-right"></i> YEAR: TITLE</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem culpa rerum ea
                                    possimus laboriosam cupiditate beatae dignissimos eaque esse? Pariatur?</p>
                            </div>
                        </li>
                    </ul>

                </div>
            </div>
        </section> `;


export function educationPage(context) {
    context.render(educationTemplate());
}