import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Swiping_pic from'./swiping_pic';
import hanielpf from '../components/haneil_pf_400x400.jpg'
import nephipf from '../components/nephi_pf_400x400.jpg'
import dullahpf from '../components/dulla_pf_400x400.jpg'
import diannapf from '../components/dianna_pf_400x400.jpg'


function window1() {

  const open_yt_dianna = () => {
    window.open("https://www.youtube.com/channel/UCf_1kx1PXZ4dho8NRhxcjaQ");
  
  }
  const open_twitter_dianna =() => {
    window.open("https://twitter.com/DianaYeou_CLP")
  }
   const open_yt_haniel =()=>{
     window.open("https://www.youtube.com/c/HanielCH")
   }

   const open_twitter_haniel =()=>{
    window.open("https://twitter.com/Haniel_CLP")
  }

  const open_yt_nephilim = () => {
    window.open("https://www.youtube.com/channel/UCUqO4T83gV-nncnD2vgv1yw");
  
  }
  const open_twitter_nephilim =() => {
    window.open("https://twitter.com/Nephilim_CLP")
  }

  const open_yt_dulla = () => {
    window.open("https://www.youtube.com/channel/UCypsgHxN6R6VXujdK8irRoQ/featured");
  
  }
  const open_twitter_dulla =() => {
    window.open("https://twitter.com/DullaGanCeann")
  }

    return (
        <>
        <Container fluid>
          <Row>
        <Swiping_pic></Swiping_pic>
        </Row>
        </Container>

<Container className="cresent_link_paragraph">
  <Col>
  <div className="cresent_link_paragraph_cont">
  <h4 className="cresent_link_paragraph_h4">
  <p className="cresent_link_paragraph_p">
  Crescent Link Productions is a Vtuber Production Team that aims to
   distribute Streaming Entertainment Services
   across the Philippines and also in the whole world 
   by Producing Filipino Virtual Youtubers.
</p>
<p className="cresent_link_paragraph_p">
The objective of this project is to accelerate the beginning
 of a new generation of Filipino Streamers through various activities and services
  such as events, live streaming, sales of goods and digital contents, music and etc.
  </p>

  </h4>
  </div>
  </Col>
</Container>


<div className="Haniel_space" id="haniel">
    <Container className="hi">
  <Row>
    <Col  className="Side_bar_container">
    <div className="Side_bar_column_Haniel"> 
    <div className="clptalents_pf_container">
    <div className="Outline_Hover">
    <img src={hanielpf} width="350" height="350" className="clptalents_pf_img"onClick={open_yt_haniel}></img>
    </div>
    </div>

    <div className="text_below_imgpf_container"onClick={open_twitter_haniel}>
    
    <h1 className="text_below_imgpf_text">
    <svg aria-hidden="true" 
    focusable="false" 
    data-prefix="fab" 
    data-icon="twitter-square" 
    role="img" 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 448 512" 
    className="svg_twitter">
      <path fill="currentColor" 
      d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z" 
      >
        </path>
    </svg>

    @Haniel_CLP
    </h1>
    
    
    </div>

     </div>
    </Col>
    
    <Col xs={6} fluid>
    <h2> Hanie </h2>
        <p>2 of 3 (wider also the main content)
        Cillum Lorem dolor Lorem in enim duis qui nostrud in anim nulla. Ipsum est mollit ullamco culpa nisi i
        n commodo sunt consectetur elit voluptate est labore. Magna laborum ad consequat officia sint quis con
        sequat anim commodo amet. Ut est id nulla non eiusmod exercitation quis id veniam exercitation amet su
        nt non. Est in esse consequat ad in deserunt quis sunt qui cupidatat est velit. Lorem irure laboris su
        nt ut et labore voluptate nisi exercitation ullamco et laborum. Dolor elit dolor esse esse non.
        </p>
        <p>2 of 3 (wider also the main content)
        Cillum Lorem dolor Lorem in enim duis qui nostrud in anim nulla. Ipsum est mollit ullamco culpa nisi i
        n commodo sunt consectetur elit voluptate est labore. Magna laborum ad consequat officia sint quis con
        sequat anim commodo amet. Ut est id nulla non eiusmod exercitation quis id veniam exercitation amet su
        nt non. Est in esse consequat ad in deserunt quis sunt qui cupidatat est velit. Lorem irure laboris su
        nt ut et labore voluptate nisi exercitation ullamco et laborum. Dolor elit dolor esse esse non.
        </p>
        <p>2 of 3 (wider also the main content)
        Cillum Lorem dolor Lorem in enim duis qui nostrud in anim nulla. Ipsum est mollit ullamco culpa nisi i
        n commodo sunt consectetur elit voluptate est labore. Magna laborum ad consequat officia sint quis con
        sequat anim commodo amet. Ut est id nulla non eiusmod exercitation quis id veniam exercitation amet su
        nt non. Est in esse consequat ad in deserunt quis sunt qui cupidatat est velit. Lorem irure laboris su
        nt ut et labore voluptate nisi exercitation ullamco et laborum. Dolor elit dolor esse esse non.
        </p>
        <p>2 of 3 (wider also the main content)
        Cillum Lorem dolor Lorem in enim duis qui nostrud in anim nulla. Ipsum est mollit ullamco culpa nisi i
        n commodo sunt consectetur elit voluptate est labore. Magna laborum ad consequat officia sint quis con
        sequat anim commodo amet. Ut est id nulla non eiusmod exercitation quis id veniam exercitation amet su
        nt non. Est in esse consequat ad in deserunt quis sunt qui cupidatat est velit. Lorem irure laboris su
        nt ut et labore voluptate nisi exercitation ullamco et laborum. Dolor elit dolor esse esse non.
        </p>
        <p>2 of 3 (wider also the main content)
        Cillum Lorem dolor Lorem in enim duis qui nostrud in anim nulla. Ipsum est mollit ullamco culpa nisi i
        n commodo sunt consectetur elit voluptate est labore. Magna laborum ad consequat officia sint quis con
        sequat anim commodo amet. Ut est id nulla non eiusmod exercitation quis id veniam exercitation amet su
        nt non. Est in esse consequat ad in deserunt quis sunt qui cupidatat est velit. Lorem irure laboris su
        nt ut et labore voluptate nisi exercitation ullamco et laborum. Dolor elit dolor esse esse non.
        </p>
        <p>2 of 3 (wider also the main content)
        Cillum Lorem dolor Lorem in enim duis qui nostrud in anim nulla. Ipsum est mollit ullamco culpa nisi i
        n commodo sunt consectetur elit voluptate est labore. Magna laborum ad consequat officia sint quis con
        sequat anim commodo amet. Ut est id nulla non eiusmod exercitation quis id veniam exercitation amet su
        nt non. Est in esse consequat ad in deserunt quis sunt qui cupidatat est velit. Lorem irure laboris su
        nt ut et labore voluptate nisi exercitation ullamco et laborum. Dolor elit dolor esse esse non.
        </p>
    </Col>
    
  </Row>
</Container>
</div>


<div className="Nephilim_space" id="nephilim">
<Container className="hi">
<Row>
    <Col  className="Side_bar_container">
    <div className="Side_bar_column_Haniel"> 
    <div className="clptalents_pf_container">
    <div className="Outline_Hover">
    <img src={nephipf} width="350" height="350" className="clptalents_pf_img"onClick={open_yt_nephilim}></img>
    </div>
    </div>
    <div className="text_below_imgpf_container" >
    
    <h1 className="text_below_imgpf_text" onClick={open_twitter_nephilim}>
    <svg aria-hidden="true" 
    focusable="false" 
    data-prefix="fab" 
    data-icon="twitter-square" 
    role="img" 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 448 512" 
    className="svg_twitter">
      <path fill="currentColor" 
      d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z" 
      >
        </path>
    </svg>

    @Nephilim_CLP
    </h1>
    
    </div>
    
    </div>
    </Col>
    
    <Col xs={6} fluid className="content_text">
    <h2> Nephilim </h2>
        <p>2 of 3 (wider also the main content)
        Cillum Lorem dolor Lorem in enim duis qui nostrud in anim nulla. Ipsum est mollit ullamco culpa nisi i
        n commodo sunt consectetur elit voluptate est labore. Magna laborum ad consequat officia sint quis con
        sequat anim commodo amet. Ut est id nulla non eiusmod exercitation quis id veniam exercitation amet su
        nt non. Est in esse consequat ad in deserunt quis sunt qui cupidatat est velit. Lorem irure laboris su
        nt ut et labore voluptate nisi exercitation ullamco et laborum. Dolor elit dolor esse esse non.
        </p>
        <p>2 of 3 (wider also the main content)
        Cillum Lorem dolor Lorem in enim duis qui nostrud in anim nulla. Ipsum est mollit ullamco culpa nisi i
        n commodo sunt consectetur elit voluptate est labore. Magna laborum ad consequat officia sint quis con
        sequat anim commodo amet. Ut est id nulla non eiusmod exercitation quis id veniam exercitation amet su
        nt non. Est in esse consequat ad in deserunt quis sunt qui cupidatat est velit. Lorem irure laboris su
        nt ut et labore voluptate nisi exercitation ullamco et laborum. Dolor elit dolor esse esse non.
        </p>
        <p>2 of 3 (wider also the main content)
        Cillum Lorem dolor Lorem in enim duis qui nostrud in anim nulla. Ipsum est mollit ullamco culpa nisi i
        n commodo sunt consectetur elit voluptate est labore. Magna laborum ad consequat officia sint quis con
        sequat anim commodo amet. Ut est id nulla non eiusmod exercitation quis id veniam exercitation amet su
        nt non. Est in esse consequat ad in deserunt quis sunt qui cupidatat est velit. Lorem irure laboris su
        nt ut et labore voluptate nisi exercitation ullamco et laborum. Dolor elit dolor esse esse non.
        </p>
        <p>2 of 3 (wider also the main content)
        Cillum Lorem dolor Lorem in enim duis qui nostrud in anim nulla. Ipsum est mollit ullamco culpa nisi i
        n commodo sunt consectetur elit voluptate est labore. Magna laborum ad consequat officia sint quis con
        sequat anim commodo amet. Ut est id nulla non eiusmod exercitation quis id veniam exercitation amet su
        nt non. Est in esse consequat ad in deserunt quis sunt qui cupidatat est velit. Lorem irure laboris su
        nt ut et labore voluptate nisi exercitation ullamco et laborum. Dolor elit dolor esse esse non.
        </p>
        <p>2 of 3 (wider also the main content)
        Cillum Lorem dolor Lorem in enim duis qui nostrud in anim nulla. Ipsum est mollit ullamco culpa nisi i
        n commodo sunt consectetur elit voluptate est labore. Magna laborum ad consequat officia sint quis con
        sequat anim commodo amet. Ut est id nulla non eiusmod exercitation quis id veniam exercitation amet su
        nt non. Est in esse consequat ad in deserunt quis sunt qui cupidatat est velit. Lorem irure laboris su
        nt ut et labore voluptate nisi exercitation ullamco et laborum. Dolor elit dolor esse esse non.
        </p>
        <p>2 of 3 (wider also the main content)
        Cillum Lorem dolor Lorem in enim duis qui nostrud in anim nulla. Ipsum est mollit ullamco culpa nisi i
        n commodo sunt consectetur elit voluptate est labore. Magna laborum ad consequat officia sint quis con
        sequat anim commodo amet. Ut est id nulla non eiusmod exercitation quis id veniam exercitation amet su
        nt non. Est in esse consequat ad in deserunt quis sunt qui cupidatat est velit. Lorem irure laboris su
        nt ut et labore voluptate nisi exercitation ullamco et laborum. Dolor elit dolor esse esse non.
        </p>
    </Col>
    
  </Row>
</Container>
</div>


<div className="Dullah_space" id="dullah">
<Container className="hi">
<Row>
    <Col  className="Side_bar_container">
    <div className="Side_bar_column_Haniel"> 
    <div className="clptalents_pf_container">
    <div className="Outline_Hover">
    <img src={dullahpf} width="350" height="350" className="clptalents_pf_img"onClick={open_yt_dulla}></img>
    </div>
    </div>
    <div className="text_below_imgpf_container">
    
    <h1 className="text_below_imgpf_text"onClick={open_twitter_dulla}>
    <svg aria-hidden="true" 
    focusable="false" 
    data-prefix="fab" 
    data-icon="twitter-square" 
    role="img" 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 448 512" 
    className="svg_twitter">
      <path fill="currentColor" 
      d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z" 
      className="">
        </path>
    </svg>
    @DullaGanCeann
    </h1>
    
    </div>
    
     </div>
    </Col>
    
    <Col xs={6} fluid>

    <h2> Dullah Gan Ceann</h2>
        <p>2 of 3 (wider also the main content)
        Cillum Lorem dolor Lorem in enim duis qui nostrud in anim nulla. Ipsum est mollit ullamco culpa nisi i
        n commodo sunt consectetur elit voluptate est labore. Magna laborum ad consequat officia sint quis con
        sequat anim commodo amet. Ut est id nulla non eiusmod exercitation quis id veniam exercitation amet su
        nt non. Est in esse consequat ad in deserunt quis sunt qui cupidatat est velit. Lorem irure laboris su
        nt ut et labore voluptate nisi exercitation ullamco et laborum. Dolor elit dolor esse esse non.
        </p>
        <p>2 of 3 (wider also the main content)
        Cillum Lorem dolor Lorem in enim duis qui nostrud in anim nulla. Ipsum est mollit ullamco culpa nisi i
        n commodo sunt consectetur elit voluptate est labore. Magna laborum ad consequat officia sint quis con
        sequat anim commodo amet. Ut est id nulla non eiusmod exercitation quis id veniam exercitation amet su
        nt non. Est in esse consequat ad in deserunt quis sunt qui cupidatat est velit. Lorem irure laboris su
        nt ut et labore voluptate nisi exercitation ullamco et laborum. Dolor elit dolor esse esse non.
        </p>
        <p>2 of 3 (wider also the main content)
        Cillum Lorem dolor Lorem in enim duis qui nostrud in anim nulla. Ipsum est mollit ullamco culpa nisi i
        n commodo sunt consectetur elit voluptate est labore. Magna laborum ad consequat officia sint quis con
        sequat anim commodo amet. Ut est id nulla non eiusmod exercitation quis id veniam exercitation amet su
        nt non. Est in esse consequat ad in deserunt quis sunt qui cupidatat est velit. Lorem irure laboris su
        nt ut et labore voluptate nisi exercitation ullamco et laborum. Dolor elit dolor esse esse non.
        </p>
        <p>2 of 3 (wider also the main content)
        Cillum Lorem dolor Lorem in enim duis qui nostrud in anim nulla. Ipsum est mollit ullamco culpa nisi i
        n commodo sunt consectetur elit voluptate est labore. Magna laborum ad consequat officia sint quis con
        sequat anim commodo amet. Ut est id nulla non eiusmod exercitation quis id veniam exercitation amet su
        nt non. Est in esse consequat ad in deserunt quis sunt qui cupidatat est velit. Lorem irure laboris su
        nt ut et labore voluptate nisi exercitation ullamco et laborum. Dolor elit dolor esse esse non.
        </p>
        <p>2 of 3 (wider also the main content)
        Cillum Lorem dolor Lorem in enim duis qui nostrud in anim nulla. Ipsum est mollit ullamco culpa nisi i
        n commodo sunt consectetur elit voluptate est labore. Magna laborum ad consequat officia sint quis con
        sequat anim commodo amet. Ut est id nulla non eiusmod exercitation quis id veniam exercitation amet su
        nt non. Est in esse consequat ad in deserunt quis sunt qui cupidatat est velit. Lorem irure laboris su
        nt ut et labore voluptate nisi exercitation ullamco et laborum. Dolor elit dolor esse esse non.
        </p>
        <p>2 of 3 (wider also the main content)
        Cillum Lorem dolor Lorem in enim duis qui nostrud in anim nulla. Ipsum est mollit ullamco culpa nisi i
        n commodo sunt consectetur elit voluptate est labore. Magna laborum ad consequat officia sint quis con
        sequat anim commodo amet. Ut est id nulla non eiusmod exercitation quis id veniam exercitation amet su
        nt non. Est in esse consequat ad in deserunt quis sunt qui cupidatat est velit. Lorem irure laboris su
        nt ut et labore voluptate nisi exercitation ullamco et laborum. Dolor elit dolor esse esse non.
        </p>
    </Col>
    
  </Row>
</Container>
</div>

<div className="Dianna_space" id="dianna">
<Container className="hi">
<Row>
    <Col  className="Side_bar_container">
    <div className="Side_bar_column_Haniel"> 
    <div className="clptalents_pf_container">
    <div className="Outline_Hover">
    <img src={diannapf} width="350" height="350" className="clptalents_pf_img" onClick={open_yt_dianna}></img>
    </div>
    </div>

    <div className="text_below_imgpf_container">
    
    <h1 className="text_below_imgpf_text"onClick={open_twitter_dianna}>
    
    <svg aria-hidden="true" 
    focusable="false" 
    data-prefix="fab" 
    data-icon="twitter-square" 
    role="img" 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 448 512" 
    className="svg_twitter">
      <path fill="currentColor" 
      d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z" 
      >
        </path>
    </svg>
      
    @DianaYeou_CLP
    </h1>
    
    </div>

     </div>
    </Col>
    
    <Col xs={6} fluid>
      <h2> Diana Yeou</h2>
      <h4> no, i'm not gonna pee on your bed.<br></br> (Based on Youtube-About section)  </h4>
        <p className="Yellow">
          Debut Stream in October 9
        </p>
       
    </Col>
    
  </Row>
</Container>


</div>
<div className="Footer_text"><p className="footer_p">All Rights to CLP</p></div>
        </>  
  )
}

export default window1
