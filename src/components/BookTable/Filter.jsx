"use client";
const Filter = ({setFilter}) => {
    return ( 
        <section>
        <button onClick={() => setFilter("")}>All</button>
        <button onClick={() => setFilter("table1")}>Table for 4 people</button>
        <button onClick={() => setFilter("table2")}>Table for 6 people</button>
        <button onClick={() => setFilter("table3")}>Table for 8 people</button>
        </section>
     );
}
 
export default Filter;