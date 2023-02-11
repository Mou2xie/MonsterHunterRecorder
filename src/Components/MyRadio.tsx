import { Radio } from 'antd-mobile';
import { useState } from 'react';
import checkedPng from '../Assets/images/checked.png';
import uncheckedPng from '../Assets/images/unchecked.png';
import { Image } from 'antd-mobile';

let MyRadio: any = ({ options }: { options: string[] }) => {
    let [value, setValue] = useState(options[0]);
    return (
        <Radio.Group
            value={value}
            onChange={v => {
                setValue(v as string);
            }}
        >
            {
                options.map((item, index) => {
                    return <Radio value={item} key={index} icon={(checked) => {
                        return checked ? <Image src={checkedPng} width={20} height={20} fit='contain'></Image> : <Image src={uncheckedPng} width={20} height={20} fit='contain'></Image>
                    }} className='text-white text-xl'>{item}</Radio>
                })
            }
        </Radio.Group>
    );
}

export { MyRadio }