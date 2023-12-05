function Card({ children }) {
    return (
        <>
            <div className="card flex flex-col bg-slate-200 items-center px-8 py-4 rounded-md">
                <div className="card-content">
                    {children}
                </div>
            </div>
        </>
    );
}

export default Card;