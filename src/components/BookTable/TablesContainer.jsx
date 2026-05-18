"use client";
import Tables from "./Tables";

import Filter from "./Filter";

const TablesContainer = ({ takenTables, setNumberOfGuest, filteredTables }) => {
  return (
    <section>
      <Filter setNumberOfGuest={setNumberOfGuest} />
      {filteredTables.map((table, i) => (
        <Tables key={i} img={table.img} number={table.id} isTaken={takenTables.includes(table.id)} />
      ))}
    </section>
  );
};

export default TablesContainer;
