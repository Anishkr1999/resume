


const About = () => {
   

    return (
        <>
            <div className="container-fluid row g-0 bg-light ">
                <div className="col-md-5 mb-md-0 p-md-4 mx-2">
                    <img src="./img/anish.jpg" className="w-100 picture" alt="..." />
                </div>
                <div className="col-md-5 p-4 ps-md-0 mx-2 align-self-center">
                    <h5 className="mt-0 my-4 d-flex flex-column "><h2 className='profilename'>I</h2><h2 className='profilename'>Am</h2><h2 className='profilename'>Anish Kumar</h2></h5>
                    <hr />
                    <h5 className='honda'>Frontend Website Developer</h5>
                    <hr />
                    <p className='paragraf'>I am frontend website developer and created projects using Different Langauges.As of now,I a'm Fresher and Student of MCA.I Want an Opportunity to Improvement Myself.</p>
                </div>
            </div>
            <div className=' container my-5'>
                <div>
                    <h4 className=' mt-3'>Javascript</h4>
                    <div className="progress my-3">
                        <div className="progress-bar bg-warning progress-bar-striped" role="progressbar" style={{ width: "85%" }} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">85%</div>
                    </div>
                </div>

                <div>
                    <h4 className=' mt-3'>Html</h4>
                    <div className="progress my-3">
                        <div className="progress-bar bg-info progress-bar-striped" role="progressbar" style={{ width: "70%" }} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">70%</div>
                    </div>
                </div>

                <div>
                    <h4 className=' mt-3'>CSS</h4>
                    <div className="progress my-3">
                        <div className="progress-bar bg-danger progress-bar-striped" role="progressbar" style={{ width: "80%" }} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">80%</div>
                    </div>
                </div>

                <div>
                    <h4 className=' mt-3'>React-js</h4>
                    <div className="progress my-3">
                        <div className="progress-bar bg-info progress-bar-striped" role="progressbar" style={{ width: "40%" }} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">40%</div>
                    </div>
                </div>

                <div>
                    <h4 className=' mt-3'>Boostrap</h4>
                    <div className="progress my-3">
                        <div className="progress-bar bg-success progress-bar-striped" role="progressbar" style={{ width: "75%" }} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">75%</div>
                    </div>
                </div>


                <div>
                    <h4 className=' mt-3'>C</h4>
                    <div className="progress my-3">
                        <div className="progress-bar bg-success progress-bar-striped" role="progressbar" style={{ width: "70%" }} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">70%</div>
                    </div>
                </div>

            </div>

            <div>
                <div class="text-center container">
                    <div class="card-header py-3">
                        About me
                    </div>
                    <div class="card-body d-flex flex-column">
                        <h5 class=" my-4 profilename py-0">INTRODUCTION</h5>
                        <p class="card-text  my-3  heading ">I am Anish kumar From KothiBigha.I Am Student of Class M.C.A Frist year From KALINGA UNIVERSITY (RAIPUR)..I Have Completed B.C.A  From Jawaharlal Nehru College (Dehri on Sone), </p>
                        <p class="card-text   my-3  heading ">I Am Quick Learner And Hope To Acheive My Goals Through Sheer Hard Work.I Have A Thirst For knowledge And Like To Devlop my Skill That Can Take Me To A More Advanced Level.I Have A Creative Mind And Am Always Up For New Challenges.I Am Well Organized And Always Plan Ahead to Make Sure I Manage my Time well.</p>
                        <p class="card-text   my-3  heading ">I Am Able To Work On
                            HTML,CSS,Bootstrap,JAVASCRIPT,REACT-JS,GIT,GITHUB..ETC</p>

                    </div>
                    <div class="card-footer text-muted">
                    </div>
                </div>
            </div>


            <div className='row container my-5 mx-auto'>
                <div className=" col-sm-6 my-2">
                    <img src="./img/op2.jpg" className=' w-100 my-4 bgphoto' alt="" />
                    <h3 className='fuffa'>Front-End side</h3>
                    <p className='my-3 mama'>The front end of a website is everything the user either sees or interacts with when they visit the website. It is responsible for the total look and feel of an online experience</p>
                </div>
                <div className=" col-sm-6 my-2">
                    <img src="./img/op7.jpg" className=' w-100 my-4 bgphoto' alt="" />
                    <h3 className='fuffa'>UI developer</h3>
                    <p className='my-3 mama'>A UI developer's role is to translate creative software design concepts and ideas into reality using front end technology. They understand the user interface design solution both in its practical intent and creative vision, and convert it into engineered softwares.</p>
                </div>

                
            </div>


            <div className='row container project my-5 mx-auto'>
                <div className='row col-sm-6 my-4 mx-auto'>
                    

                    <div className='col-sm-6 my-3 col-3'>
                        <a href="https://instagram.com/anish_amit98?igshid=YmMyMTA2M2Y=" rel="noreferrer" target="_blank">  <i class="fa fa-instagram social" style={{ fontSize: "55px", color: "red" }}></i></a>
                    </div>
                    <div className='col-sm-6 my-3 col-3'>
                        <a href="https://www.linkedin.com/in/anish-kumar-8b3484217" rel="noreferrer" target="_blank">   <i class="fa fa-linkedin social" style={{ fontSize: "55px", color: "blueviolet" }}></i></a>
                    </div>
                    

                </div>
                
            </div>
        </>
    )
}
export default About;