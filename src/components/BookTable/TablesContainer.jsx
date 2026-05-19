"use client";
import Tables from "./Tables";
import Filter from "./Filter";

const TablesContainer = ({ takenTables, setNumberOfGuest, filteredTables }) => {
  return (
    <section>
      <Filter setNumberOfGuest={setNumberOfGuest} />
      <div className="flex flex-wrap gap-20 justify-center items-center">
        {filteredTables.map((table, i) => (
          <Tables key={i} img={table.img} number={table.id} isTaken={takenTables.includes(table.id)} />
        ))}
      </div>
    </section>
  );
};

export default TablesContainer;
