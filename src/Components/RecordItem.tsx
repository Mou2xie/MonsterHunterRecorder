import { Image } from 'antd-mobile';
import video from '../Assets/images/video.png';

let RecordItem: any = ({ title, info, type }: { title: string, info: string, type: number }) => {

    let outPut;

    if (type == 1) {
        outPut = <div className='mx-4 py-2 border-b border-dashed border-[#4A6296] flex justify-between items-center text-[16px] font-light last:border-b-0 last:mb-2 first:mt-2'>
            <div className='text-[#7085B1] '>{title}</div>
            <div className='text-white font-normal'>{info}</div>
        </div>
    } else if (type == 2 && info != '') {
        outPut = <div className={info == '' ? 'hidden' : 'mx-4 py-2 border-b border-dashed border-[#4A6296] flex justify-between items-center text-[16px] font-light last:border-b-0 last:mb-2 first:mt-2'}>
            <div className='text-[#7085B1] '>{title}</div>
            <Image src={video} width={30} height={30} fit='contain'></Image>
        </div>
    } else {
        outPut = <></>
    }

    return outPut;
}

export { RecordItem };



