"use client";
import Tables from "./Tables";
import { useState } from "react";
import Filter from "./Filter";


const tables =[ {id: 1, img: "/assets/icon/table1.svg"}, {id: 2, img: "/assets/icon/table2.svg"}, {id: 3, img: "/assets/icon/table3.svg"}, {id: 4, img: "/assets/icon/table1.svg"}, {id: 5, img: "/assets/icon/table1.svg"}, {id: 6, img: "/assets/icon/table2.svg"}, {id: 7, img: "/assets/icon/table3.svg"}, {id: 8, img: "/assets/icon/table1.svg"}, {id: 9, img: "/assets/icon/table2.svg"}, {id: 10, img: "/assets/icon/table3.svg"}, {id: 11, img: "/assets/icon/table1.svg"}, {id: 12, img: "/assets/icon/table2.svg"}, {id: 13, img: "/assets/icon/table3.svg"}, {id: 14, img: "/assets/icon/table1.svg"}, {id: 15, img: "/assets/icon/table3.svg"} ];
const TablesContainer = () => {
    const [filter, setFilter] = useState("");
    const filteredTables = tables.filter((table) => table.img.includes(filter));
    return ( 
        <section>
            <Filter setFilter={setFilter}/>
            {filteredTables.map((table, i) => <Tables key={i} img={table.img} number={table.id}/>)}
        </section>
    );
}
 
export default TablesContainer;