import { useEffect, useState } from "react";


function footer () {

    const [cities,setcities] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            const data = [
                {"cities": "Pune" ,"near":"chinese Restsurnt Near me" },
                {"cities": "Mumbai","near":"South Indian Restraurant Near me"},
                {"cities": "Delhi", "near":"North Indian Restraurant Near me"},
                {"cities": "Bangalore" ,"near":" Indian Restraurant Near me"},
                {"cities": "Chennai","near":"Koraen  Restraurant Near me"},
                {"cities": "Hyderabad", "near":" Seafood Restraurant Near me" },
                {"cities": "Kolkata","near":"Punjabi  Restraurant Near me"},
                {"cities":"Nagpur","near":"Italian Restraurant Near me"},
                {"cities":"Chandrapur","near":"Andhra Restraurant Near me"},
                {"cities":"Gondia","near":"kerla  Restraurant Near me"},
                {"cities":"pune","near":"Bengali Restraurant Near me"},
                {"cities":"Wardha","near":"American Restraurant Near me"}
            ];

            setcities(data);
        };

        fetchData();
    }, []);

  
    return (
        <div className="max-w-[1200px] mb-[100px] mx-auto relative z-11">
        <div className="flex  items-center justify-between ">
         < div className='text-[25px] font-bold'>
            Best Places to Eat Across cities
         </div>

         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 mt-1">
         
            {cities.map ((city,index) => {
                return <div className="max-w-[270px] h-[52px] font-[16px] p-[16px] text-[#000000] mt-[10px] rounded-[10px]  font-bold"  style={{ border: '1.5px solid rgba(2,6,12,0.1)' }} key={index}> 
                               Best Restraurant {city.cities}
            </div>
            })}
         </div>

         <div className="text-[25px] font-bold mt-6">
           Best Cusines Near Me
         </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-1">
            {
                cities.map((city,index) => {
                    return <div className="max-w-[270px] h-[52px] font-[16px] p-[16px] border mt-[10px] font-bold text-ellipsis whitespace-nowrap  rounded-[10px]" key={index} >
                         {city.near}
                    </div>
                })
            }

         </div>

         <div className="text-[25px] font-bold mt-6">
           Explore Every Restaurants Near Me
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2  gap-4 mt-1">
         <div className="max-w-[572px] h-[52px] font-[16px] p-[16px] border mt-[10px] font-bold   rounded-[10px]" >
                         Explore Restraurants Near Me
                    </div>
                    <div className="max-w-[572px] h-[52px] font-[16px] p-[16px] border mt-[10px] font-bold   rounded-[10px]" >
                         Explore Top Rated Restraurants Near Me
                    </div>
            </div>

           

         </div>
        

         
         
        
    )
}

export default footer;