import Card from "./Card";
import img1 from "../../img/avatar.jpg"

function Profile(props) {
    return (
        <>
            <div className="container px-4 py-4 justify-center items-center mx-auto my-8 space-y-5 flex flex-col">
                <Card>
                    <h1 className="text-2xl text-center font-bold mb-5 tracking-tight">Photo</h1>
                    <div className="flex justify-center">
                        <img
                            className="avatar w-24 h-24 mb-3 rounded-full shadow-lg"
                            src={img1}
                            alt="Aklilu Lemma"
                            width={'100%'}
                            height={'auto'}
                        />
                    </div>
                    <div class="flex mt-4 md:mt-6">
                        <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400 dark:focus:ring-blue-500">Add friend</a>
                        <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3">Message</a>
                    </div>
                </Card>
                <Card>
                    <h1 className="text-2xl font-bold mb-5 text-center tracking-tight">About</h1>
                    <p className="text-justify font-normal text-gray-700 dark:text-gray-500">Aklilu Lemma was a distinguished Ethiopian scientist
                        who discovered a natural treatment to schistosomiasis who discovered a natural.
                    </p>
                </Card>
            </div>
        </>
    );
}

export default Profile;