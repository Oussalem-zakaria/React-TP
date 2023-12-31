function FormButton({ action, text,color }) {
    return (
        <>
            <button onClick={() => action()} 
            className={`rounded-md bg-${color}-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-${color}-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-${color}-600`}>
                {text}
            </button>
        </>
    );
}

export default FormButton;