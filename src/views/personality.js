import { html } from '../../node_modules/lit-html/lit-html.js'

const personalityTemplate = () => html`
<section id="personality" class="">
    <div class="hero-container">

        <header class="personality-header">
            <h1>ABOUT ME</h1>
            <h2>Know me more</h2>
        </header>
        <div class="personality-details">
            <div class="details-text">
                <h2>I'm <span class="green-text bold">Nikolay Velichkov</span> </h3>
                    <h4>a Project Management professional and Web Development enthusiast
                </h2>
                <p>I am experienced Project management professional with positive attitude and strong business acumen
                    Result driven, proactive and determined towards achieving objectives and delivering results of
                    highest standard both individually and as a member of a team In the same time have good technical
                    knowledge in the IT, data distribution and software development I strive for innovation, but when
                    planning and organizing tasks, I stay focused and logical I am self aware, with high integrity and
                    good communication skills Adaptable towards change and confident when working under pressure in a
                    multicultural environment.</p>
            </div>

            <div class="details-table">
                <ul>
                    <li class="details-row">
                        <p><span class="bold">Name:</span> Nikolay Velichkov</p>
                    </li>
                    <li class="details-row">
                        <p><span class="bold">Email:</span><span class="green-text"> velichkov.mail@gmail.com</span>
                        </p>
                    </li>
                    <li class="details-row">
                        <p><span class="bold">Tel:</span> +4571458336</p>
                    </li>
                    <li class="details-row">
                        <p><span class="bold">Age:</span> 36</p>
                    </li>
                    <li class="details-row">
                        <p><span class="bold">Location:</span> Horsens, Denmark</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="personality-hobbies">
            <h3>Family & Hobbies...</h3>
            <div class="hobbies-container">
                <div class="family">
                    <img class="family-photo" src="./img/family-meduim.jpg" alt="my-family">
                    <h4>Family <i class="fas fa-chevron-down"></i></h4>
                    <p>Live in peace and harmony with my life companion Elena and our extremely sweet and playful, 4
                        years old daughter Sofia. </p>
                </div>
                <div class="mtb">
                    <img class="family-photo" src="./img/family-meduim.jpg" alt="my-family">
                    <h4>Winter <i class="fas fa-chevron-down"></i></h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt laboriosam explicabo aperiam
                        voluptatem vero accusamus similique sint quis expedita iusto, alias inventore voluptate tenetur
                        et reprehenderit vel cum sequi veniam sed maiores amet sapiente quo consequuntur? Sapiente cum
                        ex blanditiis earum, enim aut? Corrupti dolores error facere! Aut, optio illum?</p>
                </div>
                <div class="motorcycling">
                    <img class="family-photo" src="./img/family-meduim.jpg" alt="my-family">
                    <h4>Summer <i class="fas fa-chevron-down"></i></h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nam sunt excepturi. Exercitationem
                        eum itaque fuga animi dolore totam nesciunt voluptate assumenda facere ratione quisquam fugiat
                        quis quod doloribus, dicta corrupti quia? Corrupti fugiat et necessitatibus reprehenderit quas
                        omnis vero veniam. Atque libero harum placeat itaque cupiditate, sunt ad voluptas?</p>
                </div>
                <div class="snowboarding">
                    <img class="family-photo" src="./img/family-meduim.jpg" alt="my-family">
                    <h4>All year <i class="fas fa-chevron-down"></i></h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quae obcaecati enim autem
                        doloremque eligendi! Quibusdam vitae dicta necessitatibus assumenda quos, adipisci suscipit
                        magnam ea dolore debitis, nostrum perspiciatis sunt.</p>
                </div>


            </div>

        </div>
    </div>
</section>`;

export function personalityPage(context) {
    context.render(personalityTemplate())
    console.log('personality')
}