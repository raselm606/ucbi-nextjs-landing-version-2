import { siteConfig } from "@/lib/config/site";

async function getAdvancing() {
  const res = await fetch(`${siteConfig.baseUrl}/api/advance-api`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch advancing data");
  }

  return res.json();
}

const Advancing = async  () => {
    const { section, posts } = await getAdvancing();

  return (
    <>
    <div className="advancing_section">
        <div className="container cline line_left line_right">
            <div className="row">
                <div className="col-lg-4">
                    <div className="advancing_content">
                        <h2 className="section_title_dark" >
                           Advancing through <br />
                           Structured Growth
                        </h2>
                    </div>   
                </div>

                <div className="offset-lg-2 col-lg-6">
                    {posts.map((item, index) => (
                    <div className="advancing_para" key={item.id}>
                        <h5 >{item.title}</h5>
                        <p > {item.desc}</p>
                    </div>
                    ))}
                     
                </div>


            </div>
        </div>
    </div>
    </>
  )
}

export default Advancing