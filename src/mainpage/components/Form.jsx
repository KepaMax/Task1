import { useEffect, useState } from 'react'

function Form() {
    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        age: 0
    })
    const [errors, setErrors] = useState({
        name: "",
        surname: "",
        age: 0
    })

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormData((prevValue) => ({ ...prevValue, [name]: value }))
    }

    useEffect(() => {
        console.log(formData)
    }, formData)

    const validate = () => {
        let errObj;
        
        Object.entries(formData).map(([key,value])=>{
            if(typeof value === "number" || !value.trim()){
                errObj = {
                    ...errObj,
                    [key]: `${key} cannot be empty`
                }
            }
        })

        setErrors(errObj)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        validate()
    }

    return (
        <form className='flex flex-col w-[400px] h-[300px] p-6'>
            <div className=' flex flex-col'>
                <label htmlFor="name">Name</label>
                <input required value={formData.name} className='border border-slate-400' onChange={handleChange} type="text" name="name" />
                <span className={`${errors?.name ? "block" : "hidden"} text-red-800 text-sm`}>{errors.name}</span>
            </div>

            <div className=' flex flex-col'>
                <label value={formData.surname} htmlFor="surname">Surname</label>
                <input required className='border border-slate-400' onChange={handleChange} type="text" name="Surname" />
                <span className={`${errors?.surname ? "block" : "hidden"} text-red-800 text-sm`}>{errors.surname}</span>
            </div>

            <div className=' flex flex-col'>
                <label htmlFor="age">Age</label>
                <select required value={formData.age} className='border border-slate-400 my-2' onChange={handleChange} name="age">
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>

                </select>
                <span className={`${errors?.age ? "block" : "hidden"} text-red-800 text-sm`}></span>
            </div>
            <button onClick={handleSubmit} type='submit'>Submit</button>
        </form>
    )
}

export default Form