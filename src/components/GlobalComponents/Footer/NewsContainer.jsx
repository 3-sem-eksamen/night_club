import NewsCard from "./NewsCard";

const newsImages =["/assets/content-img/recent_post1.jpg", "/assets/content-img/recent_post2.jpg"]
const NewsContainer = () => {
    return ( 
        <section>
            <h3>News</h3>
            {newsImages.map((image, i) => <div key={i}><NewsCard img={image} /></div>)}
        </section>
     );
}
 
export default NewsContainer;