function FormInput(props) {
    return (
        <>
            <input type={props.type} name={props.name}  id={props.name} autoComplete="given-name" className="block px-2 w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-black" value={props.value} onChange={(e) => props.onChange_(e.target.value)} />
        </>
    );
}

export default FormInput;