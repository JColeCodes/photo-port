import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';

function About() {
    return (
        <section className="my-5">
            <h1 id="about">Who am I?</h1>
            <img src={coverImage} className="my-2" style={{ width: "100%"}} alt="cover" />
            <div className='my-2'>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem tempore necessitatibus aperiam debitis omnis quasi, quisquam perspiciatis eaque quidem deserunt repellendus ipsa soluta? Possimus ullam a sed velit. Placeat, incidunt.</p>
            </div>
        </section>
    );
}

export default About;