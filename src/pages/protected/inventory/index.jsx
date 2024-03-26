import { Outlet, Link } from "react-router-dom"

export const Inventory = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <div className="block-7">
                            <div className="text-center">
                                <h2 className="heading">Stock</h2>
                                <span className="price"><span className="number">0</span></span>
                                <Link to={'attributes'}><span className="excerpt d-block">Get Info</span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="block-7">
                            <div className="text-center">
                                <h2 className="heading">Categories</h2>
                                <span className="price"><span className="number">0</span></span>
                                <Link to={'categories'}><span className="excerpt d-block">Get Info</span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="block-7">
                            <div className="text-center">
                                <h2 className="heading">Products</h2>
                                <span className="price"><span className="number">0</span></span>
                                <Link to={'products'}><span className="excerpt d-block">Get Info</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Outlet />
        </div>
    )
}