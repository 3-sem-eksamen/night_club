import Image from "next/image";
const PostCard = () => {
    return (  
        <section>
            <Image src="/assets/icon/cross.svg" alt="cross icon" width={10} height={10}/>
            <p>It is a long established fact that a reader will be distracted by the readable... </p>
            <span>5 hours ago</span>
        </section>
    );
}
 
export default PostCard;
