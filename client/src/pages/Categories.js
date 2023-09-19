import React,{useState,useEffect} from 'react'
import Layout from '../components/Layout/Layout'
import useCategory from '../hooks/useCategory'
import { Link } from 'react-router-dom'


const Categories = () => {
    const categories = useCategory()
  return (
    <Layout title={"All categories"}>
        <div className='container' style={{ marginTop: "100px" }}>
            <div className='row container'>
                {categories.map((c)=>(
                    <div key={c._id} className='col-md-4 mt-5 mb-3 gx-3 gy-3'>
                
                    <div className='card'>
                    <Link to={`/category/${c.slug}`} className='btn cat-btn'>{c.name}</Link>
                    </div>
                   
                </div>
                ))}
            </div>
        </div>
    </Layout>
  )
}

export default Categories