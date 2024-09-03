import React from 'react'
import CommonPages from '../CommonPages/CommonPages'
import Image from '../../assets/images/aboutus.png'

const Aboutus = (props) => {
  return (
 <>
<CommonPages 
title ="About"
subTitle="Sasto Bazar"
desc1=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores magni voluptatum, delectus omnis illum obcaecati magnam fugiat voluptates illo atque, temporibus doloremque quasi vero ipsa voluptate nihil exercitationem incidunt cumque error odio explicabo rerum! Expedita, minima natus tempora voluptatum odit voluptatibus quo quos. Iusto, vitae."
desc2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nemo suscipit accusamus et similique eligendi qui iusto. Modi culpa qui excepturi magni quis alias hic sint quos unde impedit dicta voluptatibus, in dolore pariatur soluta nisi laboriosam mollitia earum similique odio. Exercitationem officiis itaque animi saepe reiciendis corporis sequi quidem?"

btnAbout ="Learn more"
visit ="learnmore"
image = {Image}

mode = {props.mode}

></CommonPages>
 </>
  )
}

export default Aboutus