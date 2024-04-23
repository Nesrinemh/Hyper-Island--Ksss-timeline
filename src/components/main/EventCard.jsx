import React from 'react';
import Fredrik from '../../assets/fredrik.jpg';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

function EventCard() {
  return (
    <>
      <article>
        <section>
          <h1 className="font-md font-bold px-12 pt-8 pb-2">
            Fredrik Lööf wins the bronze medal at the Sydney Olympics
          </h1>
          <p className="text-sm px-12 pb-6">
            In the summer of 2000, Fredrik Lööf secured a bronze medal for
            Sweden in the Finn dinghy class at the Sydney Olympics.{' '}
          </p>
        </section>

        <figure>
          <img src={Fredrik} alt="Fredrik Lööf" />
        </figure>

        <div className="w-full overflow-x-auto flex flex-row py-6">
          <div className="flex justify-center items-center">
            <SlArrowLeft
              className="absolute left-5 text-white text-3xl"
              style={{
                filter: 'drop-shadow(1px 1px 3px rgba(0,0,0))',
              }}
            />
          </div>
          <div className="snap-center pl-4">
            <img
              className="object-cover shrink-0 max-w-100 max-h-70 min-w-40 min-h-30 rounded-lg shadow-md"
              src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
            />
          </div>
          <div className="snap-center pl-4">
            <img
              className="object-cover shrink-0 max-w-100 max-h-70 min-w-40 min-h-30 rounded-lg shadow-md"
              src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
            />
          </div>
          <div className="snap-center pl-4">
            <img
              className="object-cover shrink-0 max-w-100 max-h-70 min-w-40 min-h-30 rounded-lg shadow-md"
              src="https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
            />
          </div>
          <div className="snap-center pl-4">
            <img
              className="object-cover shrink-0 max-w-100 max-h-70 min-w-40 min-h-30 rounded-lg shadow-md"
              src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
            />
          </div>
          <div class="snap-center pl-4">
            <img
              className="object-cover shrink-0 max-w-100 max-h-70 min-w-40 min-h-30 rounded-lg shadow-md"
              src="https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
            />
          </div>
          <div class="snap-center px-4">
            <img
              className="object-cover shrink-0 max-w-100 max-h-70 min-w-40 min-h-30 rounded-lg shadow-md"
              src="https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
            />
          </div>
          <div className="flex justify-center items-center">
            <SlArrowRight
              className="absolute right-5 text-white text-3xl"
              style={{
                filter: 'drop-shadow(1px 1px 3px rgba(0,0,0))',
              }}
            />
          </div>
        </div>
        <div className="text-sm px-12 py-4">
          <p className="pb-4">
            Lööf's achievement marked a significant moment in Swedish sailing
            history, showcasing his skill and determination on the international
            stage.
          </p>
          <p className="pb-4">
            With his impressive performance, Lööf demonstrated the prowess of
            Swedish sailors and added to the country's Olympic medal tally. His
            accomplishment in the Finnjolle event not only brought pride to
            Sweden but also highlighted the excellence of athletes in the sport
            of sailing.
          </p>
        </div>
      </article>
    </>
  );
}

export default EventCard;
