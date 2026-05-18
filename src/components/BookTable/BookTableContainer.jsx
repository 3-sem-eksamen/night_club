"use client";
import TablesContainer from "./TablesContainer";
import BookTableForm from "./BookTableForm";
import { useState } from "react";

const BookTableContainer = ({ events }) => {
  const [availableTables, setAvailableTables] = useState([]);
  const [takenTables, setTakenTables] = useState([]);
  return (
    <section>
      <TablesContainer takenTables={takenTables} />
      <BookTableForm events={events} availableTables={availableTables} setAvailableTables={setAvailableTables} takenTables={takenTables} setTakenTables={setTakenTables} />
    </section>
  );
};

export default BookTableContainer;
