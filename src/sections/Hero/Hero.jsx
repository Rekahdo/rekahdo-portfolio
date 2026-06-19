import './Hero.css'

import Photo from '../../components/Photo/Photo'
import Button from '../../components/Button/Button'

function Hero({className="", ...props}){
    const hero = {
        greetings: "Hi there, i'm",
        name: "Richard Okafor",
        stack: "Full Stack Web Developer",
        desc: "Welcome to my portfolio, where I showcase my projects, skills, and experience as a passionate developer with a focus on Java-based and front-end technologies, developing innovative solutions that drive business value and user engagement. I'm excited to share my work with you, so feel free to explore. I look forward to exploring potential opportunities for collaboration and growth."
    }

    return(
        <section className={`web-section hero-section radial-bg flex-col${className}`}>
            <Photo className="photo hero"></Photo>

            <div className='details flex-col se fx-grow'>
                <p className='greetings'>{hero.greetings}</p>
                <h1 className='name'>{hero.name}</h1>
                <p className='stack'>{hero.stack}</p>
                <p className='desc'>{hero.desc}</p>

                <div className='flex'>
                    <p className='tag'>Clean Code Developer</p>
                    <p className='tag'>TS Academy Frontend Development Student</p>
                </div>

                <div className='flex'>
                    <Button>Contact Me</Button>
                    <Button>Tech-Stack</Button>
                    <Button>Download CV</Button>
                </div>
            </div>

        </section>
    )
}

export default Hero;