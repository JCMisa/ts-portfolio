import React, { useState, ChangeEvent, FormEvent } from "react"
import "../../index.css"

interface InputValues {
    // [key: string]: string | boolean;
    name : string;
    email : string;
    message : string
}

function FormContact()
{
    const [inputValue, setInputValue] = useState<InputValues>({
        name : "",
        email : "",
        message : ""
    })

    function handleChange(event : ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)
    {
        const { name, value, type } = event.target;

        setInputValue(prevValue => (
            {
                ...prevValue,
                [name] : type === "checkbox" ? !prevValue.name : value
            }
        ))
    }

    function formSubmit(e : FormEvent<HTMLFormElement>)
    {
        e.preventDefault();
        
        inputValue.name !== "" && inputValue.email !== "" && inputValue.message !== "" ?
        console.log(`Name: ${inputValue.name} | Email: ${inputValue.email} | Messae: ${inputValue.message}`) :
        console.log("Make sure that all fields are occupied")

    }

    function resetBtn()
    {
        setInputValue(prevValue => (
            {
                ...prevValue,
                name : "",
                email : "",
                message : ""
            }
        ))
    }

    let textAreaRow : number = 10;
    let textAreaCol : number = 30;

    return(
        <>
            <form onSubmit={formSubmit}>            
                <div className="form-container-ctc">
                    <div className="form-ctc">
                        <span className="heading-ctc">Get in touch</span>
                       
                        <input type="text" value={inputValue.name as string} name="name" onChange={handleChange} className="input-ctc" placeholder="Name" />

                        <input type="email" value={inputValue.email as string} name="email" onChange={handleChange} id="mail" className="input-ctc" placeholder="Email" />

                        <textarea value={inputValue.message as string} name="message" onChange={handleChange} placeholder="Enter your message..." rows={textAreaRow} cols={textAreaCol} id="message" className="textarea-ctc" />

                        <div className="button-container-ctc">
                            <button className="send-button-ctc">Send</button>
                            <div className="reset-button-container-ctc">
                                <div onClick={resetBtn} id="reset-btn-ctc" className="reset-button-ctc">Reset</div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default FormContact;