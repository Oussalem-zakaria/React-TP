function FormLabel({htmlFor, text}) {
    return ( 
        <>
            <label htmlFor={htmlFor} className="block text-sm font-medium leading-6">{text}</label>
        </>
     );
}

export default FormLabel;