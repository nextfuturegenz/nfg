import { Link } from 'react-router-dom';
import { BlogSidebar, HeroWrap } from '../../../components';
import { useRecoilValue } from 'recoil';
import { blogAtom, featuredblogListAtom } from '../../../atoms';

export const Blog = () => {

    const blogs = useRecoilValue(blogAtom)
    const featuredBlogs = useRecoilValue(featuredblogListAtom(true))

    return (
        <div>
            <HeroWrap pageSlag={'Blogs'} pageTitle={'Our Blogs'}/>

            <section className="ftco-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8  ">
                            <div className="row">

                                {
                                    blogs.map((blog, index) => {
                                        const { imageUrl, date, author, path, title } = blog
                                        return (
                                            <div key={index} className="col-md-6  ">
                                                <div className="blog-entry">
                                                    <Link to={path} className="block-20" style={{ backgroundImage: `url(${imageUrl})` }}>
                                                    </Link>
                                                    <div className="text py-4">
                                                        <div className="meta mb-3">
                                                            <div><a >{date}</a></div>
                                                            <div><a >{author}</a></div>
                                                            {/* <div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a></div> */}
                                                        </div>
                                                        <div className="desc">
                                                            <h3 className="heading"><Link to={path}>{title}</Link></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }


                            </div>

                            <div className="row mt-5">
                                <div className="col text-center">
                                    <div className="block-27">
                                        <ul>
                                            <li><a href="#">&lt;</a></li>
                                            <li className="active"><span>1</span></li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li><a href="#">4</a></li>
                                            <li><a href="#">5</a></li>
                                            <li><a href="#">&gt;</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <BlogSidebar blogs={featuredBlogs} listTitle={'Featured Article'}></BlogSidebar>

                    </div>
                </div>
            </section>

        </div>
    )
}
