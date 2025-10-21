import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

function Section1() {
  const [data, setData] = useState([]);
  const scrollContainerRef = useRef(null);
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    try {
      let response = await fetch(`${import.meta.env.VITE_SWIGGY_API}`);
      let parseData = await response.json();
      setData(parseData.data.cards[0].card.card.imageGridCards.info);
      console.log(parseData.data.cards[0].card.card.imageGridCards.info);
      console.log(data);
    } catch (error) {}
  }
  const scroll = (direction)=>{
    if(scrollContainerRef.current){
        
        scrollContainerRef.current.scrollBy({
            left : direction == "left" ? -300 : 300,
            behaviour: "smooth"
        });
    }
  };
  return (
    <div className="w-full p-10">
      <div className="flex justify-center items-center">
        <div >
          <h2 className="text-2xl font-bold font-sans">
            What's in your mind ?
          </h2>
        </div>
        <div className="ml-auto ">
          <button onClick= {()=>scroll('left')} className="h-9 w-9 px-1.5 rounded-full bg-gray-400 cursor-pointer hover:bg-gray-500 mx-2">
            <ArrowLeft></ArrowLeft>
          </button>
          <button onClick= {()=>scroll('right')} className="h-9 w-9 px-1.5 rounded-full bg-gray-400 cursor-pointer hover:bg-gray-500">
            <ArrowRight></ArrowRight>
          </button>
        </div>
      </div>
      <div ref={scrollContainerRef} className="flex overflow-x-scroll w-full scroll-smooth [&::-webkit-scrollbar]:hidden">
        {data.map((ele) => (
          <div className=" mr-8 shrink-0">
            <img
            src={`${import.meta.env.VITE_CDN_URL}${ele.imageId}`}
            alt={ele.action.text} className="w-53"
          />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section1;
