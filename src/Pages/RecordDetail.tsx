import { PageTitle } from '../Components/PageTitle';
import { Image } from 'antd-mobile';
import { RecordItem } from '../Components/RecordItem';
import screenShot from '../Assets/images/monsterDetailPic.png';

let RecordDetail: any = () => {

    let data = {
        monsterName: '泡狐龙',
        level: '上位',
        star: '7星',
        time: `12'45"36`,
        weapon: '太刀',
        huntingWay: '捕获',
        withPet: '是',
        hunterName: '谢师傅',
        uploadTime: '2022.08.23 17:45',
        videoUrl: 'aaa',
    }

    let { monsterName, level, star, time, weapon, huntingWay, withPet, hunterName, uploadTime, videoUrl } = data

    return (
        <div className='flex flex-col items-stretch'>
            <div className='flex justify-center my-4'>
                <PageTitle titleText='讨伐详情'></PageTitle>
            </div>

            <div className='mx-5 bg-[#3B4B6D] flex flex-col items-stretch border-2 border-[#344260]'>
                <RecordItem title='讨伐怪物' info={monsterName} type={1}></RecordItem>
                <RecordItem title='难度等级' info={`${level} ${star}`} type={1}></RecordItem>
                <RecordItem title='讨伐用时' info={time} type={1}></RecordItem>
                <RecordItem title='讨伐方式' info={huntingWay} type={1}></RecordItem>
                <RecordItem title='携带随从' info={withPet} type={1}></RecordItem>
                <RecordItem title='武器' info={weapon} type={1}></RecordItem>
                <RecordItem title='猎人' info={hunterName} type={1}></RecordItem>
                <RecordItem title='上传时间' info={uploadTime} type={1}></RecordItem>
                <RecordItem title='讨伐视频' info={videoUrl} type={2}></RecordItem>
            </div>
            <div className='mx-5 my-3'>
                <Image src={screenShot} lazy fit='contain'></Image>
            </div>
        </div>
    );
}

export default RecordDetail;