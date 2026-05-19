"use client";
const Filter = ({ setNumberOfGuest }) => {
  return (
    <section className="flex gap-5">
      <button className="filter_knap" onClick={() => setNumberOfGuest("")}>
        All tables
      </button>
      <button className="filter_knap" onClick={() => setNumberOfGuest("4")}>
        Table for 4 people
      </button>
      <button className="filter_knap" onClick={() => setNumberOfGuest("6")}>
        Table for 6 people
      </button>
      <button className="filter_knap" onClick={() => setNumberOfGuest("8")}>
        Table for 8 people
      </button>
    </section>
  );
};

export default Filter;
