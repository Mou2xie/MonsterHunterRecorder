import { Image } from 'antd-mobile';
import monsterDetailPic from '../Assets/images/monsterDetailPic.png';
import { DetailItem } from '../Components/DetailItem';
import data from '../Assets/images/data.png';
import { Link } from 'react-router-dom';


let RecordList: any = () => {
    return (
        <div className='mx-5 mt-5 bg-[#3B4B6D] flex flex-col items-stretch border-2 border-[#344260]'>
            <div className='relative m-2 flex justify-center'>
                <Image src={monsterDetailPic} lazy fit='contain' className='opacity-60 border-2 border-[#D9B990]'></Image>
                <div className='w-[10px] h-[10px] bg-[#7C4343] border-[#AB6762] border-[2px] rotate-45 absolute top-[-4px] left-[-4px]'></div>
                <div className='w-[10px] h-[10px] bg-[#7C4343] border-[#AB6762] border-[2px] rotate-45 absolute top-[-4px] right-[-4px]'></div>
                <div className='w-[10px] h-[10px] bg-[#7C4343] border-[#AB6762] border-[2px] rotate-45 absolute bottom-[-4px] left-[-4px]'></div>
                <div className='w-[10px] h-[10px] bg-[#7C4343] border-[#AB6762] border-[2px] rotate-45 absolute bottom-[-4px] right-[-4px]'></div>
                <div className='text-white absolute top-1/3 text-center'>
                    <div className='text-2xl'>泡狐龙</div>
                    <div>上位7星</div>
                </div>
            </div>

            <div className='flex justify-center items-center relative my-3'>
                <div className='text-white text-lg'>我的讨伐记录</div>
                <Image src={data} width={16} height={16} className='absolute right-3'></Image>
            </div>

            {
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => {
                    return (
                        <Link to='/RecordDetail' className='mx-4 py-2 border-b border-dashed border-[#4A6296] last:border-b-0 last:mb-3'>
                            <DetailItem key={index}></DetailItem>
                        </Link>
                    );
                })
            }
        </div>
    );
}

export default RecordList;