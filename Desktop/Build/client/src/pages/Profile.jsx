import React from 'react'
import './Profile.css'

function Profile() {
  return (
    <>
    <header>
        <div className="container">

            <nav>
                <a href="/">Home</a>
                <a href="#about">About</a>
                <a href="#experience">Experience</a>
                <a href="#education">Education</a>
                <a href="#certificates">Contact</a>
            </nav>
        </div>
    </header>
    <div className="body">
    <main>
        <div className="hero">
            <div class="hero-avatar">
                <img src="https://bbdu.ac.in/wp-content/uploads/2021/11/dummy-image1.jpg" alt=""/>
                
            </div>
        </div>
        <div className="intro">
            <div className="intro-name">
                Omraj Sharma
            </div>
            <div className="intro-desc">
                <p>Full Stack Developer</p>
                <p>React | Node | Express | MongoDB</p>
            </div>
        </div>
        
        <section className="about" id="about">
            <h2>About</h2>
            <p className="about-desc">
                I am a Full Stack Engineer with 2+ years of experience in building web applications. I have a Bachelor's degree in Computer Science and Engineering from the Guru Gobind Singh Indraprastha University. I am currently working as a Software Engineer at a startup called <a href="https://www.wheelseye.com">WheelsEye</a>. I am passionate about building scalable and responsive web applications using the latest technologies.
            </p>
        </section>

        <section className="experience" id="experience">
            <h2>Experience</h2>

            <div className="exp-item">
                <div className="org-img">
                    <img src="https://images.yourstory.com/cs/images/companies/oiflRYdP400x400-1592909309243.jpg?fm=auto&ar=1:1&mode=fill&fill=solid&fill-color=fff" alt=""/>
                </div>
                <div className="exp-details">
                    <h4 className="role-name">Software Engineer</h4>
                    <div className="role-org-name">WheelsEye</div>
                    <div className="role-duration">Aug 2022 - Present</div>
                    <div className="role-desc">
                        <ul>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique assumenda iure, unde mollitia cum fugit?</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique assumenda iure, unde mollitia cum fugit?</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique assumenda iure, unde mollitia cum fugit?</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="exp-item">
                <div className="org-img">
                    <img src="https://media.licdn.com/dms/image/C560BAQFXKkWPSzWtVg/company-logo_200_200/0/1634283000059/mazecare_logo?e=2147483647&v=beta&t=UxGLfnJ2HHPQJQMYdasVsAFIJYIhDjnPi1rVwmKFYX4" alt=""/>
                </div>
                <div className="exp-details">
                    <h4 className="role-name">Software Engineer</h4>
                    <div className="role-org-name">Mazecare</div>
                    <div className="role-duration">Apr 2022 - Jul 2022</div>
                    <div className="role-desc">
                        <ul>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique assumenda iure, unde mollitia cum fugit?</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique assumenda iure, unde mollitia cum fugit?</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique assumenda iure, unde mollitia cum fugit?</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="exp-item">
                <div className="org-img">
                    <img src="https://omrajsharma.github.io/assets/images/datametricks-logo.jpg" alt=""/>
                </div>
                <div class="exp-details">
                    <h4 className="role-name">Software Engineer</h4>
                    <div className="role-org-name">DataMatricks</div>
                    <div className="role-duration">Dec 2021 - Feb 2022</div>
                    <div className="role-desc">
                        <ul>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique assumenda iure, unde mollitia cum fugit?</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique assumenda iure, unde mollitia cum fugit?</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique assumenda iure, unde mollitia cum fugit?</li>
                        </ul>
                    </div>
                </div>
            </div>


        </section>

        <section class="education" id="education">
            <h2>Education</h2>

            <div className="edu-item">
                <div className="edu-img">
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b8/GGSIU_logo.svg/1200px-GGSIU_logo.svg.png" alt=""/>
                </div>
                <div className="edu-details">
                    <h4 className="edu-name">Bachelor of Technology, Information Technology</h4>
                    <div className="edu-org-name">Maharaja Agrasen Institute of Technology, GGSIPU</div>
                    <div className="edu-duration">Aug 2019 - Aug 2023</div>
                </div>
            </div>

            
            <div className="edu-item">
                <div className="edu-img">
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b8/GGSIU_logo.svg/1200px-GGSIU_logo.svg.png" alt=""/>
                </div>
                <div className="edu-details">
                    <h4 className="edu-name">Intermediate - 12th Class</h4>
                    <div className="edu-org-name">Mount Abu Public School</div>
                    <div className="edu-duration">2018 - 2019</div>
                </div>
            </div>

            <div className="edu-item">
                <div className="edu-img">
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b8/GGSIU_logo.svg/1200px-GGSIU_logo.svg.png" alt=""/>
                </div>
                <div className="edu-details">
                    <h4 className="edu-name">Matricular - 10th Class</h4>
                    <div className="edu-org-name">Mount Abu Public School</div>
                    <div className="edu-duration">2016 - 2017</div>
                </div>
            </div>
        </section>

        <section className="contact" id="contact">
            <h2>Contact</h2>
            <div className="contact-details">
                <a href="tel:1234567890">☎️ +91-1234567890</a>
                <a href="mailto:sahilsable737">📩 Email</a>
                <a href="https://www.linkedin.com/in/sahil-sable-61460423b/">LinkedIn</a>
                <a href="https://github.com/sahils1201/">Github</a>
                <a href="https://x.com/sahils1201">Twitter</a>
            </div>
        </section>
    </main>
    </div>

    <footer>
        
    </footer>
    </>
  )
}

export default Profile