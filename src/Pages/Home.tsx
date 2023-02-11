import { IndexItem } from '../Components/IndexItem';
import { PageTitle } from '../Components/PageTitle';
import { Image } from 'antd-mobile';
import setting from '../Assets/images/setting.png';
import { Link } from 'react-router-dom';

let Home: any = () => {
    return (
        <div className='flex flex-col items-stretch'>
            <div className='h-[8vh] flex justify-center items-center fixed top-0 left-0 right-0 z-20 bg-[#191F35]'>
                <PageTitle titleText='我的战绩'></PageTitle>
                <Image src={setting} width={28} height={28} fit='contain' className='absolute right-5' ></Image>
            </div>

            <div className='h-[8vh]'></div>

            {
                [1, 1, 1, 1, 1, 1, 1, 1, 1,].map((item, index) => {
                    return (
                        <Link to='/RecordList' className='mx-5 mt-3 first-of-type:mt-1 last-of-type:mb-10 '>
                            <IndexItem key={index}></IndexItem>
                        </Link>
                    );
                })
            }

            <div className='h-20'></div>

            <Link to='/UpLoadRecord' className='w-1/2 fixed bottom-7 left-0 right-0 mx-auto z-10'>
                <div className='w-full h-10 bg-[#FDEEDB] text-[#BA8E56] flex justify-center items-center text-xl font-bold border-4 border-[#D9B990]'>上传战绩</div>
            </Link>

        </div>
    );
}

export default Home;