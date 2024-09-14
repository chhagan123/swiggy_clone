
import { useEffect, useState } from "react";
import { FaArrowLeft , FaArrowRight} from "react-icons/fa";
import { ImInsertTemplate } from "react-icons/im";
function category () {

    const [slide,setslide] = useState(0);

    const right = () => {
        console.log("right")
        if(category.length -8 == slide) return false;
        setslide(slide+3);
    };

    const lefrarrow = () => {
        setslide(slide-3);
    }
   
    const [category,setcategory] = useState([]);

   
    useEffect(() => {
        // Mock fetching the data (you can replace this with an actual API call)
        const fetchData = async () => {
            const data = [

                 { "image": "North_Indian_4.jpeg", "path": "pizza" },
                { "image": "Pizza.jpeg", "path": "pizza" },
                { "image": "Noodles.jpeg", "path": "noodles" },
                { "image": "Pasta.jpeg", "path": "pasta" },
                { "image": "Paratha.jpeg", "path": "paratha" },
                { "image": "Biryani_2.jpeg", "path": "biryani" },
                { "image": "Burger.jpeg", "path": "burger" },
                { "image": "Cakes.jpeg", "path": "cakes" },
                { "image": "Chinese.jpeg", "path": "chinese" },
                { "image": "Chole_Bature.jpeg", "path": "chole-bature" },
                { "image": "Dosa.jpeg", "path": "dost" },
                { "image": "Gulab_Jamun.jpeg", "path": "gulab-jamun" },
                { "image": "Ice_Creams.jpeg", "path": "ice-creams" },
                { "image": "Idli.jpeg", "path": "idli" },
                { "image": "Khichdi.jpeg", "path": "khichdi" },
                { "image": "Poori.jpeg", "path": "poori" },
                { "image": "Pure_veg.jpeg", "path": "pure-veg" },
                { "image": "Rolls.jpeg", "path": "rolls" },
                { "image": "Salad.jpeg", "path": "salad" },
                { "image": "South_Indian_4.jpeg", "path": "south-indian" }
            ];
            setcategory(data);
        };

        fetchData();
    }, []); 

    return(
        
        
<div className="max-w-[1200px] mx-auto relative z-0">
       <div className="flex my-5 items-center justify-between ">
        < div className='text-[25px] font-bold'>
            What's on your mind?
        </div>
        <div className="flex">
            <div  onClick={lefrarrow} className=" flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] cursor-pointer rounded-full mx-2"><FaArrowLeft /></div>
            <div  onClick={right} className=" flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] cursor-pointer rounded-full mx-2"><FaArrowRight /></div>
        </div>

        </div>
        <div className="flex overflow-hidden ">
               {category.map((cat,index) => {
                  
                   return (
                    <div style={{ transform:`translate(-${slide * 100}%)`}} key={index} className="w-[150px] gap-5 shrink-0  duration-500  flex flex-col items-center   text-black">
                        <img src={`/images/${cat.image}`} alt= {cat.path}className="gap-2" />
                        
                       
                         
                    </div>
                )
               })}
        </div>
        <div className="my-6 border-[1px]">

        </div>
        
       
</div>


    
            )
}
export default category;