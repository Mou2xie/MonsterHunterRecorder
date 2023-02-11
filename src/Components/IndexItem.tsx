import { Image } from "antd-mobile";
import monsterCover from '../Assets/images/monsterCover.png';
import yanhuologo from '../Assets/images/yanhuologo.png';
import dog from '../Assets/images/dog.png';
import trap from '../Assets/images/trap.png';
import longsword from '../Assets/images/longsword.png';

const IndexItem: any = () => {
    return (
        <div className='h-24 bg-[#3B4B6D] border-4 border-[#344260] flex relative justify-between'>
            <Image src={yanhuologo} width={70} fit='contain' className='absolute right-0 top-0 opacity-60'></Image>
            <Image lazy src={monsterCover} width={68} fit='contain' className="ml-2"></Image>
            <div className='grow ml-2 flex flex-col justify-center'>
                <div className='text-xl text-white font-medium'>泡狐龙</div>
                <div className='text-[#8993A7] mt-[1px]'>大师-7星</div>
            </div>

            <div className='flex flex-col justify-center z-10 grow-0 shrink-0 mr-2'>
                <div className='text-[22px] text-white font-medium tracking-wide text-end'>12'24'31</div>
                <div className="flex justify-around">
                    <Image src={trap} width={18} fit='contain'></Image>
                    <Image src={dog} width={16} fit='contain'></Image>
                    <Image src={longsword} width={16} fit='contain'></Image>
                </div>
            </div>
        </div>
    );
}

export { IndexItem };