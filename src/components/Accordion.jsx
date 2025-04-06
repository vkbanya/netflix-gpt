import React, { Fragment } from "react";

const Accordion = ({ title, data, expended, setExpended }) => {
  return (
    <div className="py-4 mx-12 m-auto  text-white font-bold">
      <div>
        <h2 className="text-3xl my-4">{title}</h2>
        {data?.map((item) => (
          <Fragment key={item.id}>
            <button
              className="w-full text-left border-0 py-8 px-4 my-1 rounded-2xl bg-[rgba(255,255,255,0.1)] cursor-pointer hover:bg-[rgba(255,255,255,0.2)] flex justify-between items-center"
              onClick={() =>
                item.id === expended ? setExpended(-1) : setExpended(item.id)
              }
            >
              {item.title}
              {expended>0 ? <span className="mr-2">x</span> : <span className="mr-2">+</span>}
            </button>
            {expended === item.id && (
              <p className="border-0 py-8 px-4 rounded-2xl bg-[rgba(255,255,255,0.1)] my-2">
                {item.body}
              </p>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
