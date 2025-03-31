import React, { Fragment, useState } from "react";
import Accordion from "./utils/Accordion";

const Faqs = () => {
  const [expended, setExpended] = useState(-1);
  return (
    <div className="w-full bg-[#0f0f0f]">
    <Accordion
      title="Frequently Asked Questions"
      data={data}
      expended={expended}
      setExpended={setExpended}
      />
      </div>
  );
};

export default Faqs;

const data = [
  {
    id: 1,
    title: "What is Netflix?",
    body: <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.<br/><br/> You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>,
  },
  {
    id: 2,
    title: "How much does Netflix cost?",
    body: <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.<br/><br/> You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>,
},
{
    id: 3,
    title: "Where can I watch?",
    body: <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.<br/><br/> You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>,
},
{
    id: 4,
    title: "How do I cancel?",
    body: <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.<br/><br/> You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>,
},
{
    id: 5,
    title: "What can I watch on Netflix?",
    body: <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.<br/><br/> You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>,
},
{
    id: 6,
    title: "Is Netflix good for kids?",
    body: <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.<br/><br/> You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>,
  },
];
