import { Image } from 'antd-mobile';
import { useState } from 'react';
import { Input } from 'antd-mobile';
import { UploadTitle } from '../Components/UploadTitle';
import { MyPicker, MyCascadePicker } from '../Components/MyPicker';
import { MyRadio } from '../Components/MyRadio';
import * as columnsData from '../Utils/pickerData';

let UpLoadRecord: any = () => {

    let [vedioUrl, setVedioUrl] = useState('');

    return (
        <div className="flex flex-col items-stretch">
            <UploadTitle title='讨伐用时'></UploadTitle>
            <div className='mx-5 mt-3 flex justify-between gap-x-2'>
                <MyPicker columns={columnsData.minutes()} defaultValue='00' output="'"></MyPicker>
                <MyPicker columns={columnsData.secends()} defaultValue='00' output='"'></MyPicker>
                <MyPicker columns={columnsData.millisecond()} defaultValue='00' output=''></MyPicker>
            </div>

            <UploadTitle title='讨伐怪物'></UploadTitle>
            <div className='mx-5 mt-3 flex justify-between'>
                <MyCascadePicker columns={columnsData.monsters}></MyCascadePicker>
            </div>

            <UploadTitle title='讨伐武器'></UploadTitle>
            <div className='mx-5 mt-3 flex justify-between'>
                <MyPicker columns={columnsData.weapons} defaultValue='' output=''></MyPicker>
            </div>

            <UploadTitle title='讨伐方式'></UploadTitle>
            <div className='mx-5 mt-3 flex gap-x-8'>
                <MyRadio options={["猎杀", "捕获"]}></MyRadio>
            </div>

            <UploadTitle title='携带随从'></UploadTitle>
            <div className='mx-5 mt-3 flex gap-x-8'>
                <MyRadio options={["有随从", "无随从"]}></MyRadio>
            </div>

            <UploadTitle title='视频地址'></UploadTitle>
            <div className='mx-5 mt-3 mb-20'>
                <Input style={{"--placeholder-color":"#7085B1",background:'#3B4B6D','--color':'white','--font-size':'20px'}} className='h-12 pl-2' placeholder='链接地址' value={vedioUrl} onChange={(v)=>{setVedioUrl(v)}}></Input>
            </div>
        </div>
    );
}

export default UpLoadRecord;