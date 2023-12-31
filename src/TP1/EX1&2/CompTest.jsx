function CompTest(props) {
    return ( 
        <>
            <div className="flex flex-col items-center py-5 px-4 w-full md:max-w-sm md: bg-white border border-gray-200 rounded-lg shadow light:bg-gray-100 light:border-gray-100">
                <h1 className="text-2xl font-bold">{props.header}</h1>
                <img src={props.src} alt={props.alt} className="my-5" style={{width: props.width,height:props.height}}/>
                <p className="mb-3 py-3 text-justify font-normal text-gray-700 dark:text-gray-400">{props.description}</p>
            </div>
        </>
     );
}

export default CompTest;