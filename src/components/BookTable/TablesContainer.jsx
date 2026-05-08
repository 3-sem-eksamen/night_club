import Tables from "./Tables";
const tables =["/assets/icon/table1.svg","/assets/icon/table2.svg","/assets/icon/table3.svg", "/assets/icon/table1.svg", "/assets/icon/table1.svg", "/assets/icon/table2.svg", "/assets/icon/table3.svg", "/assets/icon/table1.svg", "/assets/icon/table2.svg", "/assets/icon/table3.svg","/assets/icon/table1.svg", "/assets/icon/table2.svg", "/assets/icon/table3.svg", "/assets/icon/table1.svg", "/assets/icon/table3.svg"]
const TablesContainer = () => {
    return ( 
        <section>
            {tables.map((table, i) => <Tables key={i} img={table} number={i+1}/>)}
        </section>
    );
}
 
export default TablesContainer;