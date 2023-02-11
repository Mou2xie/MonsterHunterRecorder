
const PageTitle: any = ({ titleText }: { titleText: string }) => {
    return (
        <div className='w-[35%] h-8 bg-[#7C4343] border-y-2 border-[#683636] text-center text-white text-lg flex justify-around items-center relative'>
            <div className='h-3 w-3 border-[#AB6762] border-t-[3px] border-l-[3px] border-r-[3px] border-b-[3px] bg-[#7C4343] rotate-45 ml-[-10px] z-10'></div>
            <div>{titleText}</div>
            <div className='h-3 w-3 border-[#AB6762] border-t-[3px] border-l-[3px] border-r-[3px] border-b-[3px] bg-[#7C4343] rotate-45 mr-[-10px] z-10'></div>
            <div className='h-[23px] w-[23px] absolute left-[-11px] bg-[#7C4343] border-l-2 border-b-2 border-[#683636] rotate-45 z-0'></div>
            <div className='h-[23px] w-[23px] absolute right-[-11px] bg-[#7C4343] border-r-2 border-t-2 border-[#683636] rotate-45 z-0'></div>
        </div>
    );
}

export { PageTitle };