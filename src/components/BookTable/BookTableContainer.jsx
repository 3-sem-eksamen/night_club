"use client";
import TablesContainer from "./TablesContainer";
import BookTableForm from "./BookTableForm";
import { useState } from "react";

const tables = [
  { id: 1, guest: 4, img: "/assets/icon/table1.svg" },
  { id: 2, guest: 6, img: "/assets/icon/table2.svg" },
  { id: 3, guest: 8, img: "/assets/icon/table3.svg" },
  { id: 4, guest: 4, img: "/assets/icon/table1.svg" },
  { id: 5, guest: 4, img: "/assets/icon/table1.svg" },
  { id: 6, guest: 6, img: "/assets/icon/table2.svg" },
  { id: 7, guest: 8, img: "/assets/icon/table3.svg" },
  { id: 8, guest: 4, img: "/assets/icon/table1.svg" },
  { id: 9, guest: 6, img: "/assets/icon/table2.svg" },
  { id: 10, guest: 8, img: "/assets/icon/table3.svg" },
  { id: 11, guest: 4, img: "/assets/icon/table1.svg" },
  { id: 12, guest: 6, img: "/assets/icon/table2.svg" },
  { id: 13, guest: 8, img: "/assets/icon/table3.svg" },
  { id: 14, guest: 4, img: "/assets/icon/table1.svg" },
  { id: 15, guest: 8, img: "/assets/icon/table3.svg" },
];

const BookTableContainer = ({ events }) => {
  const [availableTables, setAvailableTables] = useState([]);
  const [takenTables, setTakenTables] = useState([]);
  const [numberOfGuest, setNumberOfGuest] = useState("");
  const filteredTables = numberOfGuest === "" ? tables : tables.filter((table) => table.guest >= Number(numberOfGuest));
  const filteredAvailableTables =
    numberOfGuest === ""
      ? availableTables
      : availableTables.filter((id) => {
          const table = tables.find((t) => t.id === id);
          return table.guest >= Number(numberOfGuest);
        });

  return (
    <section>
      <TablesContainer takenTables={takenTables} setNumberOfGuest={setNumberOfGuest} filteredTables={filteredTables} />
      <BookTableForm events={events} filteredAvailableTables={filteredAvailableTables} setAvailableTables={setAvailableTables} takenTables={takenTables} setTakenTables={setTakenTables} setNumberOfGuest={setNumberOfGuest} numberOfGuest={numberOfGuest} tables={tables} />
    </section>
  );
};

export default BookTableContainer;
