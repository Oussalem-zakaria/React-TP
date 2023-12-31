function Card({ children }) {
    return (
        <>
            {/* <div className="card flex flex-col bg-slate-200 items-center px-8 py-4 rounded-md"> */}
            <div className="flex flex-col justify-center items-center w-full max-w-sm px-5 py-4 bg-white border border-gray-200 rounded-lg shadow light:bg-gray-200 light:border-gray-100">
                <div className="card-content justify-center items-center">
                    {children}
                </div>
            </div>
        </>
    );
}

export default Card;