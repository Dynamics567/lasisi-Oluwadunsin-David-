import React from 'react';

const Banner = () => {

    return(
        <section className="banner-one" id="banner" style={{backgroundImage: `url(/assets/images/background/banner-bg-1-1.jpg)`}}>
            <img src="/assets/images/shapes/banner-shapes-1-1.png" alt="" className="banner-one__shape-1" />
            <img src="/assets/images/shapes/banner-shapes-1-2.png" alt="" className="banner-one__shape-2" />

            <img src="/assets/images/shapes/banner-shapes-1-4.png" alt="" className="banner-one__shape-4" />
            <img src="/assets/images/shapes/banner-shapes-1-5.png" alt="" className="banner-one__shape-5" />
            <img src="/assets/images/shapes/banner-shapes-1-6.png" alt="" className="banner-one__shape-6" />
            <img src="/assets/images/shapes/banner-shapes-1-7.png" alt="" className="banner-one__shape-7" />

            <div className="container">
                {/* <img src="/assets/images/shapes/banner-shapes-1-3.png" alt="" className="banner-one__shape-moc-1"/> */}
                {/* <img src="/assets/images/mocs/banner-moc-1-1.png" alt="" className="banner-one__moc" /> */}
                <div className="row">
                    <div className="col-lg-7">
                        <div className="banner-one__content">
                            {/* <p className="banner-one__tag-line">Welcome to SEO Business <a href="#">free trial</a></p> */}
                            <h3>Afrilearn helps achieve <br/> best result</h3>
                            <p>Afrileaarn is designed to allow every student to access to today's most powerful learning technology. Afrilearn is desiged to help you reach your goals</p>
                            <a href="#contact" data-target="#contact" className="thm-btn banner-one__btn scroll-to-target">Sign up</a>
                        </div>
                    </div>
                </div>
            </div>
            </section>
    )
}
export default Banner;