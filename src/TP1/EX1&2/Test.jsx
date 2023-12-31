import CompTest from "./CompTest";
import img1 from "../../img/undraw_projections_re_ulc6.svg"
import img2 from "../../img/undraw_content_team_re_6rlg.svg"
import img3 from "../../img/undraw_join_re_w1lh.svg"

function Test() {
    const data = [
        {
            src: img1,
            header: "header1",
            alt: "alt1",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate vero quam quidem nihil nostrum, autem consequuntur facilis? Fugit dicta minus exercitationem distinctio aspernatur ipsum eveniet sapiente. Consequuntur voluptas corrupti magni."
        },
        {
            src: img2,
            header: "header2",
            alt: "alt2",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate vero quam quidem nihil nostrum, autem consequuntur facilis? Fugit dicta minus exercitationem distinctio aspernatur ipsum eveniet sapiente. Consequuntur voluptas corrupti magni."
        },
        {
            src: img3,
            header: "header3",
            alt: "alt3",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate vero quam quidem nihil nostrum, autem consequuntur facilis? Fugit dicta minus exercitationem distinctio aspernatur ipsum eveniet sapiente. Consequuntur voluptas corrupti magni."
        }

    ];
    return (
        <>
            <div className="container px-4 py-5 w-full mx-auto flex flex-col space-y-4 md:flex-row md:space-y-0 md:justify-between">
                {
                    data.map((item, index) => {
                        return (
                            <CompTest
                                key={index}
                                src={item.src}
                                header={item.header}
                                alt={item.alt}
                                description={item.description}
                                width={200}
                                height={200}
                            />
                        )
                    }
                    )
                }

            </div>
        </>
    );
}

export default Test;