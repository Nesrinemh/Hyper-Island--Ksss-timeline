import React from 'react';
import Fredrik from '../../assets/images/fredrik.jpg';

function EventCard() {
  return (
    <>
      <article>
        <section>
          <h1>Fredrik Lööf wins the bronze medal at the Sydney Olympics</h1>
          <p>
            In the summer of 2000, Fredrik Lööf secured a bronze medal for
            Sweden in the Finn dinghy class at the Sydney Olympics.{' '}
          </p>
        </section>
        <figure>
          <img src={Fredrik} alt="Fredrik Lööf" />
        </figure>
      </article>
    </>
  );
}

export default EventCard;
