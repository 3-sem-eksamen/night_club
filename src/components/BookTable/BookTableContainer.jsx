"use client";
import TablesContainer from "./TablesContainer";
import BookTableForm from "./BookTableForm";
import { useState } from "react";

const BookTableContainer = ({ events }) => {
  const [availableTables, setAvailableTables] = useState([]);
  return (
    <section>
      <TablesContainer />
      <BookTableForm events={events} availableTables={availableTables} setAvailableTables={setAvailableTables} />
    </section>
  );
};

export default BookTableContainer;
