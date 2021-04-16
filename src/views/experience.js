import {html} from '../../node_modules/lit-html/lit-html.js'

const experienceTemplate = () => html`
 <section id="experience" class="">
            <div class="experience-container">

                <div class="experience-header">

                    <h1>PROFESSIONAL</h1>
                    <h2>My Experience</h1>

                </div>
                <div class="experience-timeline">
                    <div class="exp-box">
                        <p class="exp-years">2019 - 2021</p>
                        <p class="exp-title">Project Manager</p>
                        <p class="exp-company">Data Wise Ltd.</p>
                        <p class="exp-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ducimus. Aspernatur rerum libero exercitationem blanditiis voluptatem harum nam in illo?</p>
                    </div>

                    <div class="exp-box">
                        <p class="exp-years">2019 - 2021</p>
                        <p class="exp-title">Project Manager</p>
                        <p class="exp-company">Data Wise Ltd.</p>
                        <p class="exp-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ducimus. Aspernatur rerum libero exercitationem blanditiis voluptatem harum nam in illo?</p>
                    </div>
                    <div class="exp-box">
                        <p class="exp-years">2019 - 2021</p>
                        <p class="exp-title">Project Manager</p>
                        <p class="exp-company">Data Wise Ltd.</p>
                        <p class="exp-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ducimus. Aspernatur rerum libero exercitationem blanditiis voluptatem harum nam in illo?</p>
                    </div>
                    <div class="exp-box">
                        <p class="exp-years">2019 - 2021</p>
                        <p class="exp-title">Project Manager</p>
                        <p class="exp-company">Data Wise Ltd.</p>
                        <p class="exp-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ducimus. Aspernatur rerum libero exercitationem blanditiis voluptatem harum nam in illo?</p>
                    </div>
                </div>
                <div class="skills-container">
                    <h2>My Skills</h2>
                    <div class="skills-boxes">
                        <div class="box">
                            <div class="text">
                                <h3>Java Script</h3>
                                <h3>65%</h3>
                            </div>
                            <div class="bar">
                                <div class="base"></div>
                                <div class="overlay"></div>
                            </div>
                        </div>
                        <div class="box">
                            <div class="text">
                                <h3>Java Script</h3>
                                <h3>65%</h3>
                            </div>
                            <div class="bar">
                                <div class="base"></div>
                                <div class="overlay"></div>
                            </div>
                        </div>
                        <div class="box">
                            <div class="text">
                                <h3>Java Script</h3>
                                <h3>65%</h3>
                            </div>
                            <div class="bar">
                                <div class="base"></div>
                                <div class="overlay"></div>
                            </div>
                        </div>
                        <div class="box">
                            <div class="text">
                                <h3>Java Script</h3>
                                <h3>65%</h3>
                            </div>
                            <div class="bar">
                                <div class="base"></div>
                                <div class="overlay"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>`;

export function experiencePage(context) {
    context.render(experienceTemplate());
}