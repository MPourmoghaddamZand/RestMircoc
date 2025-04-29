import React from 'react'
import Input from './util/Input'

const SubmitForm = () => {
    return (
        <form action="" className='flex flex-col gap-2'>
            <Input text={"شماره میز"} placeholder={"شماره میز را وارد کنید"} />
            <Input text={"نام و نام خانوادگی"} placeholder={"نام و نام خانوادگی خود را وارد کنید"} />
            <Input text={"شماره تماس"} placeholder={"مثال : 09012345678"} />
            <Input text={"توضیحات"} placeholder={"در صورت نیاز توضیحات خود را اینجا وارد کنید"} />
        </form>
    )
}

export default SubmitForm