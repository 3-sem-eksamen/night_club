"use client";
const Filter = ({ setNumberOfGuest }) => {
  return (
    <section>
      <button onClick={() => setNumberOfGuest("")}>All</button>
      <button onClick={() => setNumberOfGuest("4")}>Table for 4 people</button>
      <button onClick={() => setNumberOfGuest("6")}>Table for 6 people</button>
      <button onClick={() => setNumberOfGuest("8")}>Table for 8 people</button>
    </section>
  );
};

export default Filter;
