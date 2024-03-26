import { Link } from "react-router-dom";

export const BlogSidebar = ({ blogs, listTitle }) => {
    return (
        <div className="col-lg-4 sidebar  ">
              {/* <div className="sidebar-box">
                <form action="#" className="search-form">
                  <div className="form-group">
                    <span className="icon icon-search"></span>
                    <input type="text" className="form-control" placeholder="Type a keyword and hit enter" />
                  </div>
                </form>
              </div> */}
              {/* <div className="sidebar-box  ">
                <h3>Categories</h3>
                <ul className="categories">
                  <li><a href="#">Family Law <span>(6)</span></a></li>
                  <li><a href="#">Criminal Law <span>(8)</span></a></li>
                  <li><a href="#">Business Law <span>(2)</span></a></li>
                  <li><a href="#">Insurance Law <span>(2)</span></a></li>
                  <li><a href="#">Drug Control Law <span>(7)</span></a></li>
                </ul>
              </div> */}

              <div className="sidebar-box  ">
                <h3>{listTitle}</h3>
                {
                  blogs.map((blog,index) => {
                    const { imageUrl, date, author, title, shortDescription, path } = blog

                    return <div key={index} className="block-21 mb-4 d-flex">
                    <Link className="blog-img mr-4" style={{ backgroundImage: `url(${imageUrl})` }}></Link>
                    <div className="text">
                      <h3 className="heading"><Link to={path}>{title}</Link></h3>
                      <div className="meta">
                        <div><Link to={path}><span className="icon-calendar"></span> {date}</Link></div>
                        <div><Link to={path}><span className="icon-person"></span> {author}</Link></div>
                      </div>
                    </div>
                  </div>
                  })
                }
                
              </div>

              {/* <div className="sidebar-box  ">
                <h3>Tag Cloud</h3>
                <ul className="tagcloud">
                  <a href="#" className="tag-cloud-link">dish</a>
                  <a href="#" className="tag-cloud-link">menu</a>
                  <a href="#" className="tag-cloud-link">food</a>
                  <a href="#" className="tag-cloud-link">sweet</a>
                  <a href="#" className="tag-cloud-link">tasty</a>
                  <a href="#" className="tag-cloud-link">delicious</a>
                  <a href="#" className="tag-cloud-link">desserts</a>
                  <a href="#" className="tag-cloud-link">drinks</a>
                </ul>
              </div> */}

              {/* <div className="sidebar-box  ">
                <h3>Paragraph</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
              </div> */}
            </div>
    )
}