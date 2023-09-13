import React, { useState, useEffect } from 'react'
import Layout from './../components/Layout/Layout';
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';

const CategoryProduct = () => {
    const params = useParams()
    const navigate = useNavigate()
    const [products, setProducts] = useState([])
    const [category, setCategory] = useState([])
    const getProductByCat = async () => {

        try {
            const { data } = await axios.get(`http://localhost:8000/api/v1/product/product-category/${params.slug}`)
            setProducts(data?.products)
            setCategory(data?.category)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        if (params?.slug) {
            getProductByCat()
        }
    }, [params?.slug])
    return (
        <Layout>
            <div className='container'>
                <h4 className='text-center'>Category - {category?.name}</h4>
                <h6 className='text-center'>{products?.length} results found</h6>
                <div className='row'>
                    <div className='d-flex flex-wrap'>

                        {products?.map((p) => (

                            <div key={p._id} className="card m-2" style={{ width: "18rem" }}>
                                <img
                                    src={`http://localhost:8000/api/v1/product/product-photo/${p._id}`}
                                    className="card-img-top"
                                    alt={p.name}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{p.name}</h5>
                                    <p className="card-text">{p.description.substring(0, 40)}</p>
                                    <p className="card-text">$ {p.price}</p>
                                    <button className='btn btn-primary ms-1' onClick={() => navigate(`/product/${p.slug}`)}>More Details</button>
                                    <button className='btn btn-success ms-1'>Add To Cart</button>
                                </div>
                            </div>

                        ))}
                    </div>

                </div>
            </div>
        </Layout>
    )
}

export default CategoryProduct