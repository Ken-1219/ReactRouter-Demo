import React from 'react';
import './About.css';
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();

  const goToContact = ()=>{
      navigate('/Contact');
  }

  return (
    <>

      <section className='about-section'>
        <h1 className='about-heading'>Hello! This is </h1>
        <p className='about-para'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum impedit quaerat harum, facilis ut, exercitationem beatae commodi amet sit tempora fugiat laborum quidem ab architecto, doloribus possimus earum mollitia obcaecati!
          Rem nemo alias iusto? Fugit perferendis dolores ducimus ratione recusandae modi quod in doloremque iure. Suscipit corrupti tempora voluptas obcaecati aperiam repellat reprehenderit provident, impedit sapiente dolore, quidem repellendus laborum?
          Quaerat quia ratione nulla aspernatur ad consequuntur magni dignissimos? Deserunt excepturi fuga nam numquam, dignissimos laudantium, sunt enim deleniti autem cum officiis consequatur officia exercitationem at vero. Iste, eligendi saepe.
        </p>
      <button onClick={goToContact}>Go to Contact</button>
      </section>
    </>
  )
}

export default About;