import React from 'react'

const Footer = () => {
    return (
        <>
            <div className=' row footer  d-flex justify-content-around bg-dark'>
                <div className='my-2 col-12 col-sm-4'>
                    <h4>Address</h4>
                    <li>Anish Kumar</li>
                    <li>Village:-KothiBigha</li>
                    <li>City:-Dehri-on-sone</li>
                    <li>Pincode:-821302(Bihar)</li>
                </div>
                <div className='my-2 col-12 col-sm-4'>
                    <h4>Service</h4>
                    <li>client-side developer</li>
                    <li>UI developer</li>
                    
                </div>
                <div className='my-2 col-12 col-sm-4'>
                    <h4>Contact-me</h4>
                    <li>anishamit1996@gmail.com</li>
                    <li>7260858715</li>

                </div>
            </div>
        </>
    )
}
export default Footer;