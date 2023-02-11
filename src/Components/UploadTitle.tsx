import { Image } from "antd-mobile";
import titleLogo from '../Assets/images/titleLogo.png';

let UploadTitle: any = ({ title }: { title: string }) => {
    return (
        <div className='mx-5 mt-8 flex justify-start items-center'>
            <Image src={titleLogo} width={16} height={16} fit='contain'></Image>
            <div className='ml-2 font-light text-lg text-white'>{title}</div>
        </div>
    );
}

export { UploadTitle }