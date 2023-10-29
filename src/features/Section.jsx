import ShowNumbers from "@features/ShowNumbers.jsx"
const Section = () => 
{    
    return(
        <section className="w-[710px] p-8 rounded-md bg-slate-100 mx-auto tablet:w-full mobile:w-full">
            <h1 className="text-slate-700 font-bold font-roboto text-center text-5xl">
                Tenzies
            </h1>
            <p className="pt-4 text-lg text-black font-roboto">
                Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
            </p>
            <ShowNumbers />
           
        </section>
    )
}

export default Section;