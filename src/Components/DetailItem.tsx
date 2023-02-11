import { Image } from 'antd-mobile';
import dog from '../Assets/images/dog.png';
import trap from '../Assets/images/trap.png';
import longsword from '../Assets/images/longsword.png';


let DetailItem: any = () => {
    return (
        <div className='bg-green flex justify-between items-center text-[16px] font-light'>
            <div className='text-white text-lg font-normal w-1/3'>19'35'41</div>
            <div className='text-[#7085B1] text-lg w-1/3 text-center'>+12.63 s</div>
            <div className='flex space-x-2 justify-end w-1/3'>
                <Image src={trap} width={22} fit='contain'></Image>
                <Image src={dog} width={20} fit='contain'></Image>
                <Image src={longsword} width={20} fit='contain'></Image>
            </div>
        </div>
    );
}

export { DetailItem };