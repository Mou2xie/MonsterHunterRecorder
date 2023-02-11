import { useState } from "react";
import { Picker, CascadePicker } from "antd-mobile";
import { Image } from "antd-mobile";
import triangle from '../Assets/images/triangle.png';

let MyPicker: any = ({ columns, defaultValue, output }: { columns: any, defaultValue: string, output: string }) => {
    let [visible, setVisible] = useState(false);
    let [value, setValue] = useState<(string | null)[]>([defaultValue]);
    let input;
    if (typeof (value[0]) == 'string') {
        input = <div className="text-xl text-white">{`${value} ${output}`}</div>
    } else if (typeof (value[0]) == 'number') {
        if (value[0] < 10) {
            input = <div className="text-xl text-white">{`0${value} ${output}`}</div>
        } else {
            input = <div className="text-xl text-white">{`${value} ${output}`}</div>
        }
    }
    return (
        <>
            <div className='h-12 grow bg-[#3B4B6D] relative flex items-center justify-center' onClick={() => { setVisible(true) }}>
                {input}
                <Image src={triangle} width={12} height={12} fit='contain' className='absolute right-0 bottom-0'></Image>
            </div>
            <Picker
                columns={columns}
                visible={visible}
                value={value}
                onConfirm={(v) => {
                    setValue(v)
                }}
                onClose={() => {
                    setVisible(false)
                }}
            ></Picker>
        </>
    );

}

let MyCascadePicker: any = ({ columns }: { columns: any }) => {
    let [visible, setVisible] = useState(false);
    let [value, setValue] = useState<(string | null)[]>([""]);
    let input;

    if (value[0] != "") {
        input = <div className="text-xl text-white">{`${value[0]}-${value[1]}`}</div>
    }

    return (
        <>
            <div className='h-12 grow bg-[#3B4B6D] relative flex items-center justify-center' onClick={() => { setVisible(true) }}>
                {input}
                <Image src={triangle} width={12} height={12} fit='contain' className='absolute right-0 bottom-0'></Image>
            </div>
            <CascadePicker
                options={columns}
                visible={visible}
                value={value}
                onConfirm={(v) => {
                    setValue(v);
                }}
                onClose={() => {
                    setVisible(false)
                }}
            ></CascadePicker>
        </>
    );

}

export { MyPicker, MyCascadePicker }