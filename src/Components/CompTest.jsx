function CompTest(props) {
    return ( 
        <>
            <div className="flex flex-col items-center">
                <h1 className="text-xl">{props.header}</h1>
                <img src={props.src} alt={props.alt} width={props.width} height={props.height} />
            </div>
        </>
     );
}

export default CompTest;