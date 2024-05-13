import React from 'react'
import logo from '../img/logo.png';
import under from '../img/Under.png';
const AboutCom = () => {
    return (
        <section id="abouts">
            <h1>हमारे बारे में</h1>
            <img className='under' src={under} alt="" />
            <div className="row">
                <div className="col-md-5 col-sm-12 aboutImg">
                    <img id="aboutImg" src={logo} alt="Viswakarma ji" />
                </div>
                <div className="col-md-7 col-sm-12">
                    <p id="aboutText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus alias minus
                        repellendus excepturi cum doloremque ipsam eveniet, tempora reiciendis sed laboriosam, fugiat
                        pariatur nemo molestias illo aut perferendis corporis autem?
                        Dolorum assumenda perferendis eaque dicta necessitatibus praesentium quibusdam, cumque ducimus
                        voluptate corporis minima voluptas, earum perspiciatis sunt numquam veritatis consequatur culpa
                        facere labore ab similique, porro distinctio. Ad, blanditiis voluptas?
                        Sequi fugiat veniam iure ex nesciunt itaque vitae fugit at aperiam placeat ipsa sapiente, provident
                        animi cum est dicta modi odit deserunt quos quidem! Voluptates doloribus minus necessitatibus
                        exercitationem aspernatur!
                        Quidem ullam natus odit consequatur molestias, odio impedit at voluptatem suscipit nam fugiat
                        veritatis itaque deleniti quis illo qui inventore amet accusamus corrupti eligendi, similique iste
                        autem tenetur magnam. Dignissimos!
                        Ea sint illum doloremque explicabo veniam impedit suscipit laudantium pariatur expedita saepe
                        praesentium enim, cupiditate libero quas hic nobis blanditiis fuga quisquam incidunt, perferendis
                        optio alias! Praesentium eaque optio veritatis?</p>
                </div>
            </div>
        </section>
    )
}

export default AboutCom
