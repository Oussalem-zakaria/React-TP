import CompTest from "./CompTest";
import img1 from "../../src/img/img.png"
import img2 from "../../src/img/img.png"
import img3 from "../../src/img/img.png"

function Test() {
    const data = [
        {
            src: img1,
            header: "header1",
            alt: "alt1"
        },
        {
            src: img1,
            header: "header1",
            alt: "alt1"
        }

    ];
    return (
        <>
            <div className="container m-auto flex justify-between">
                <CompTest src={img1} header="header1" alt="image 1" width="300" height="300" />
                <CompTest src={img2} header="header2" alt="image 2" width="300" height="300" />
                <CompTest src={img3} header="header3" alt="image 3" width="300" height="300" />
            </div>
        </>
    );
}

export default Test;