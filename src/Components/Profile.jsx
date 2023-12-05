import Card from "./Card";
import img1 from "../../src/img/img.png"

function Profile(props) {
    return (
        <>
            <div className="my-5 space-y-5 lg:flex lg:justify-between lg:space-x-5 lg:space-y-0">
                <Card>
                    <h1 className="text-2xl font-semibold mb-5">Photo</h1>
                    <img
                        className="avatar"
                        src={img1}
                        alt="Aklilu Lemma"
                        width={'100%'}
                        height={'auto'}
                    />
                </Card>
                <Card>
                    <h1 className="text-2xl font-semibold mb-5">About</h1>
                    <p className="">Aklilu Lemma was a distinguished Ethiopian scientist
                        who discovered a natural treatment to schistosomiasis.
                    </p>
                </Card>
            </div>
        </>
    );
}

export default Profile;