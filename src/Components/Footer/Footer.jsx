function Footer() {
    return ( 
        <>
        <footer className="footer" style={{position: 'fixed', bottom: '0', width: '100%'}}>
            <div className="flex items-center justify-center w-full h-24 border-t bg-blue-100 py-4 px-5">
                <div className="flex items-center justify-center space-x-4">
                    <a href="https://github.com/Oussalem-zakaria" className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-500 font-bold" target="_blank">Designed by: @zakaria_oussalem</a>
                </div>
            </div>
        </footer>
        </>
     );
}

export default Footer;