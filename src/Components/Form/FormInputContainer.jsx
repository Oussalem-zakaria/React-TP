import { Form } from "react-router-dom";
import FormInputErrorMessage from "./FormInputErrorMessage";
import FormInput from "./FormInput";
import FormLabel from "./FormLabel";

function FormInputContainer({props}) {
    return (
        <>
            <div className="sm:col-span-3">
                <FormLabel htmlFor={props.name} text={props.text} />
                <div className="mt-2">
                    <FormInput type={props.type} name={props.name} id={props.name} value={props.value} onChange_={props.onChange_}/>
                    <FormInputErrorMessage mesaage={props.message} />
                </div>
            </div>
        </>
    );
}

export default FormInputContainer;