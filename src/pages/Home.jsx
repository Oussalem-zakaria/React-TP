import Footer from "../Components/Footer/Footer";
import img from "../img/undraw_welcome_cats_thqn.svg"
function Home() {
    return (
        <>
            <div className="flex flex-col space-y-2 items-center justify-center">
                <h1 className="text-center py-20 capitalize text-3xl text-sky-950 font-extrabold">TP React Js</h1>
                <img src={img} alt="" width={500} height={500} />
            </div>
            <Footer />

        </>
    );
}

export default Home;