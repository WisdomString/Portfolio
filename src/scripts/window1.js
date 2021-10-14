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
  const law_tw =() => {
    window.open("https://twitter.com/LawNielleArt")
  }
  const alph_tw =() => {
    window.open("https://twitter.com/Alph_Alpha_Alph")
  }
  const kurase_tw =() => {
    window.open("https://twitter.com/Kurase07")
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
    
    
        <span className="span_personality"> <h2>PERSONALITY</h2></span>
          <p className="p_personality">
             She is a very cute  self-proclaimed "seiso" tenshi who likes to do whatever she wants.
              She likes to eat weird food combos just like "Sinigang" (a filipino food) with ketchup 
              or Adobo (another filipino food) with hotdog and soup. She also loves to play different games.
              She's mostly a boomer, and occasionally observed as a yaoi fan.
              She also burps and hics a lot.
          
          </p>
          
          <span className="span_Lore"> <h2>LORE</h2></span>
          <p className="p_Lore">
             Haniel was one of the Seven Archangels, sometimes referred to as “the great princes and princesses” of Heaven.
              Much like Lucifer, Haniel has fallen from God’s Grace. What many don’t know is that Haniel has a sister named Shifa,
              who is an acting reaper and the farthest thing from a servant of God.
              No matter how devout Haniel tried to be, she could not be the embodiment of Joy with loneliness clawing away at her.
              In order to be reunited with her sister, who never had a place in heaven,
              Haniel courageously committed blasphemy, guided by her love of her sister,
              in order to be cast out of the Holy Kingdom. By calling The One Most High an “Idiot,”
              she gave up her angelic status and was sent into a world outside of Heaven. 
          </p>
          <p className="p_Lore">
              Underneath the skies of a strange land, Haniel had to learn the rules of this new world.
              Her body was not that of an angel’s anymore, though she did retain a few angelic features such as her halo and wings.
              No longer an angel, she was soon  met with human emotions and afflictions, such as hunger. 
              Unfortunately, in order to survive in this new world one must eat, and in order to eat one must work.
              For the sake of survival, Haniel became a VTuber.
          </p> 
          
    </Col>
    <h4 className="p_yabai_level">Yabai Level: <span className="moderate">Moderate</span></h4>
    <Container className="bottom_details_and_info" fluid>
      
          <Col className="details_and_info">
            <p>
              PERSONAL DETAILS:   <br></br>
              Name:     Haniel    <br></br> 
              Nickname:  Hani     <br></br>
              Age:       n/a      <br></br>
              Gender:   Female    <br></br> 
              Birthday: Nov 22    <br></br>
              Height:   49ft      <br></br>
            </p>
          </Col>

          <Col className="details_and_info">
            <p>
            BASIC DETAILS:                                                                       <br></br>
              Debut date: <span className="Yellow">05/29/2021</span>                             <br></br>
              MAMA: <span className="law_tw_link" onClick={law_tw}>   @LawNielleArt      </span> <br></br>
              PAPA: <span className="alph_tw_link" onClick={alph_tw}> @Alph_Alpha_Alph   </span> <br></br>
              Affiliation:<br></br>
               <span className="CLP_text">Crescent Link Productions</span>  <br></br>
            </p>
          </Col>

          <Col className="details_and_info">
             <p>
              LIKES:                       <br></br>
               Spaghetti                   <br></br>
               Weird food combos           <br></br>
               Sleep                       <br></br>
               Learning new skills         <br></br>
               Reading manga/manhwa/manhua <br></br>
               <span className="forbidden">yuri AND yaoi</span>    <br></br>
              </p>
          </Col>

          <Col className="details_and_info">
            <p>
               DISLIKES:                      <br></br>
               Gore                           <br></br>
               Toxic enemies in games         <br></br>
               Art block                      <br></br>
               Chocolate                      <br></br>
               Looking up to talk to tall ppl <br></br>
               CS-ing in league               <br></br>
            </p>
          </Col>

          <Col className="details_and_info">
            <p>
              TWITTER HASHTAGS:      <br></br>
                Live:   #HaniLIVE    <br></br>
                Music:  #HaniTunes   <br></br>
                Fanart: #HaniHaven   <br></br>
                Fan-name: #Hanies    <br></br>
            </p>
          </Col>

          <Col className="details_and_info">
            <p>
              SOCIAL MEDIA:  <br></br>
              <span  onClick={open_twitter_haniel}>
               <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg_twitter_i"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" class=""></path></svg>
                Twitter 
              </span>
               
                 <br></br>

              <span  onClick={open_yt_haniel}>
               <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="youtube" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="svg_yt_i"><path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" class=""></path></svg>
                Youtube  
              </span>
            </p>
          </Col>

        </Container>
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
    
    
   
    <Col xs={6} fluid>
    
    
    <span className="span_personality"> <h2>PERSONALITY</h2></span>
      <p className="p_personality">
      PRINCESS Nephilim is a playful, cheerful, wholesome predator demon (or angel) who likes to bully chat
       while chat bullies her back. She's without doubt "boing boing", or at least, that's how she wants to
        believe in. She also calls herself the "CEO of bonkers", but if you asked her stream witnesses and 
        moderators, it's actually the other way around. Indeed, she is the "CEO of getting bonked".
         She also have a questionable relation with Diana (the wolf princess). 
         Witnesses stated that those two have a good chemistry with each other. It is believed that once they collab,
          everything would go wrong (as of the time of making, no collabs were made).
       She also seems to like boobas, especially Dulla's (the dullahan princess).
      </p>
    
      <span className="span_Lore"> <h2>LORE</h2></span>
      
      <p className="p_Lore">
      Nephilim, who roamed the 4th Circle of Hell, is a Greed Devil. 強欲の魔神. Nephi's greed knows no bounds, so it's only natural that she 
      wanted to take over Hell for herself. The other devils did not appreciate this, banishing Nephi due to her greed that exceeded that of other 
      devils. Normally, her attempt at a coup d'etat would be forgiven, but the other devils already had problems with Nephi's Greed. She would 
      hide knowledge from others so that only she knew things and would often hoard items that fell into Hell from the human world. 
      </p>
      <p className="p_Lore">
      After being banished, Nephi began looking for a way to satisfy her Greed in a way that couldn't be done in Hell. What better way to satisfy her Greed than to 
      take over the world? If Nephi controlled the world, that would mean that everything
       in it was hers. Since the top devil, Lucifer, also wishes to rule the world, Nephi realized
       that she would need to be careful in order to beat him. Devils gain power by making pacts,
       and the more people Nephi can charm the more pacts she can make. In order to gain a mass following, 
      Nephi decided to become a VTuber in order to trick people into making pacts when they press "follow" or "subscribe."
      
      </p> 


    </Col>
    <h4 className="p_yabai_level">Yabai Level: <span className="high">High</span></h4>
    <Container className="bottom_details_and_info" fluid>
      
          <Col className="details_and_info">
            <p>
              PERSONAL DETAILS:   <br></br>
              Name:     Nephilim  <br></br> 
              Nickname:  Nephy    <br></br>
              Age:       n/a      <br></br>
              Gender:   Female    <br></br> 
              Birthday: July 7    <br></br>
              Height:   4'9ft     <br></br>
            </p>
          </Col>

          <Col className="details_and_info">
            <p>
            BASIC DETAILS:                                                                       <br></br>
              Debut date: <span className="Yellow">05/30/2021</span>                             <br></br>
              MAMA: <span className="law_tw_link" onClick={law_tw}>   @LawNielleArt      </span> <br></br>
              PAPA: <span className="alph_tw_link" onClick={alph_tw}> @Alph_Alpha_Alph   </span> <br></br>
              Affiliation:<br></br>
               <span className="CLP_text">Crescent Link Productions</span>  <br></br>
            </p>
          </Col>

          <Col className="details_and_info">
             <p>
              LIKES:                       <br></br>
               Doggos                      <br></br>
               Hani                        <br></br>
               Killing ppl (in games)      <br></br>
               Nightsky                    <br></br>
               Milk                        <br></br>
               Playing Games               <br></br>
              </p>
          </Col>

          <Col className="details_and_info">
            <p>
               DISLIKES:                    <br></br>
               Spicy foods                  <br></br>
               Thunder and Lightning        <br></br>
               Losing in Games              <br></br>
               Lucifer                      <br></br>
               Being Alone                  <br></br>
            </p>
          </Col>

          <Col className="details_and_info">
            <p>
              TWITTER HASHTAGS:          <br></br>
                Live:   #NephilimLIVE    <br></br>
                Music:  #NephiScreams    <br></br>
                Fanart: #NephIllust      <br></br>
                Fan-name: #Nephews <br></br> #甥っ子 (oi-kko)        <br></br>
            </p>
          </Col>

          <Col className="details_and_info">
            <p>
              SOCIAL MEDIA:  <br></br>
              <span  onClick={open_twitter_nephilim}>
               <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg_twitter_i"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" class=""></path></svg>
                Twitter 
              </span>
               
                 <br></br>

              <span  onClick={open_yt_nephilim}>
               <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="youtube" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="svg_yt_i"><path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" class=""></path></svg>
                Youtube  
              </span>
            </p>
          </Col>

        </Container>
    
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
    
    
    <span className="span_personality"> <h2>PERSONALITY</h2></span>
      <p className="p_personality">
      1 week observation
      </p>
    
      <span className="span_Lore"> <h2>LORE</h2></span>
      
      <p className="p_Lore">
      During the late Edo period, on a small village was a well said to be connected to another world. 
      Dulha, who was hiding that she was a Dullahan lived in that village, which also had an ancient custom. 
      If an item was believed to be cursed, it was to be thrown down the well. 
      In exchange, a similar item would be found in the well the next day.
      One day, a villager caught her headless and rallied the village to capture her and bring her to the well. 
      Right before they pushed her in, one villager suggested they throw her head in and see what would happen. 
      Dulha could only close her eyes as she fell into the well and sunk to the depths... 
      but when she opened her eyes again she was surrounded by cars and buildings which she had never seen before. 
      A nearby body rested without a head inside of an upside-down car, so she claimed it as her own. 
      This body was a lot bustier than her old one, which pleased her greatly.</p>
      <p className="p_Lore">
      As she fled the scene of an accident in her new body, Dulha decided this was a chance to live a new life. She eventually found her way to the 
      apartment belonging to her new body's old owner and decided to live life as her instead. Little did she know, she was taking over the life of a
      VTber..
      </p> 


    </Col>
    <h4 className="p_yabai_level">Yabai Level: <span className="very_high">Very High</span></h4>
  </Row>
  <Container className="bottom_details_and_info" fluid>
      
          <Col className="details_and_info">
            <p>
              PERSONAL DETAILS:           <br></br>
              Name: Dulla gan Ceann       <br></br> 
              Nickname:  Dulla            <br></br>
              Age:       idk how to count <br></br>
              Gender:   Female            <br></br> 
              Birthday: Sept 2            <br></br>
              Height:                     <br></br>
              6'0 (Head on)               <br></br> 
              5'4 (Head off)
              
            </p>
          </Col>
          <Col className="details_and_info">
            <p>
              Skills and Abilities           <br></br>
              -Detachable Head               <br></br> <br></br>
              -Can open every barrier        <br></br><br></br>
              -Can kill someone              <br></br>
              by calling their name          <br></br>
            </p>
          </Col>

          <Col className="details_and_info">
            <p>
            BASIC DETAILS:                                                                      <br></br>
              Debut date: <span className="Yellow">10/10/2021</span>                            <br></br>
              MAMA: <span className="law_tw_link" onClick={law_tw}>   @LawNielleArt      </span><br></br>
              PAPA: <span className="alph_tw_link" onClick={alph_tw}> @Alph_Alpha_Alph  </span> <br></br>
              Affiliation:<br></br>
               <span className="CLP_text">Crescent Link Productions</span>  <br></br>
            </p>
          </Col>

          <Col className="details_and_info">
             <p>
              LIKES:                      <br></br>
               MELON                      <br></br>
               Boba                       <br></br>
               Drawing                    <br></br>
               Cooking                    <br></br>
               Music                      <br></br>
               Cats                       <br></br>
               Sneks                      <br></br>
              </p>
          </Col>

          <Col className="details_and_info">
            <p>
               DISLIKES:                    <br></br>
               League of Legends            <br></br>
               Letter 'R'                   <br></br>
               League of Legends            <br></br>
               Coffee                       <br></br>
               Soft Drinks                  <br></br>
               League of Legends            <br></br>
               Wordy Games                  <br></br>
               League of Legends            <br></br>
               Motion Blur                  <br></br>
            </p>
          </Col>

          <Col className="details_and_info">
            <p>
              TWITTER HASHTAGS:         <br></br>
                Live:   #DullaLIVE      <br></br>
                Music:  #DullaNOISE     <br></br>
                Fanart: #DullaIllust    <br></br>
                Fan-name: <br></br>Melon-Heads   
            </p>
          </Col>

          <Col className="details_and_info">
            <p>
              SOCIAL MEDIA:  <br></br>
              <span  onClick={open_twitter_dulla}>
               <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg_twitter_i"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" class=""></path></svg>
                Twitter 
              </span>
               
                 <br></br>

              <span  onClick={open_yt_dulla}>
               <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="youtube" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="svg_yt_i"><path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" class=""></path></svg>
                Youtube  
              </span>
            </p>
          </Col>

        </Container>
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
    
    
        <span className="span_personality"> <h2>PERSONALITY</h2></span>
          <p className="p_personality">
             1 week observation
          </p>
        
          <span className="span_Lore"> <h2>LORE</h2></span>
          <p className="p_Lore">
            Ambition and mischief are the two words that best describe Diana Yeou,
            a princess who is half-wolf and half_fox. Born with nine tails that foretold of peace
            and prosperity, it came as a surpise that she grew up playing pranks and laying traps instead
            of doing her royal duties. No, Diana's ambitions grew beyond the kingdom. She wanted to become the 
            greates prankster the world had ever known. But as she sat in the ashes and sudden taste of blood and smoke filling her lings 
            as the fortress walls fell all around her, she begged for one more chance. It was the last thought 
            in her mind before her yeyes closed, never to open again. Years past, she opened her eyes once more, to a world different than the one she 
            remembered, a world with crystals screens and metal carriages. In this world, Dianna learned the marvelous internet, memes,
             and of games. She gained a reputation for mischief, pranks and tricks 
            feared in every game she tries her hand at. But soon she recieved a message from a certain little devil 
            , eager to claim her prize... 
          </p>
          <p className="p_Lore">
            Diana now found herself at the beck and call Nephilim "the Greed Devil", in exchange 
            for saving her life. But it wasn't so bad~ For Diana had learned of the greatest prank that she could ever dream of, 
            a prank so big in scale that it would etch her name in everyone's memory forever!
          </p> 
          <p className="p_Lore">
            What bigger prank is there than taking over Hell itself?
          </p> 
    </Col>
    <h4 className="p_yabai_level">Yabai Level: <span className="degen"> ̴͚͔͎̏͋͘ ̵̧͚́̾̎̾̒R̸̨͙͔̻͑̍̉̋͘E̵̡̦̥͓̞̒̌͊͜D̷̢̛̬̦̦̀̀̑̂̈́A̸͚̳̭̦̞̮̮̍̀̉̃̐̋͠Ç̷͖̳̝̩͍͑̀̅̿̒̉͂ͅṪ̶̨͓͓̤͖͑̔̈͘͝͠E̵̜̱̒͋D̶̟̺͕͐͛͌̉ͅ ̵̧̥̹͈̭͊ ̷̤̐ ̴̙͓̭̩̳̈͆̆͐͑ </span></h4>
    <Container className="bottom_details_and_info" fluid>
      
          <Col className="details_and_info">
            <p>
              PERSONAL DETAILS:   <br></br>
              Name: Diana Yeou    <br></br> 
              Nickname:  Diana    <br></br>
              Age:       999 years<br></br>
              Gender:   Female    <br></br> 
              Birthday: Feb 11    <br></br>
              Height:   4'8       <br></br>
              Race: Half-fox,Half wofl             <br></br>
               and not a Cat or Dog nor Fish       <br></br>
            </p>
          </Col>

          <Col className="details_and_info">
            <p>
            BASIC DETAILS:                                                                      <br></br>
              Debut date: <span className="Yellow">10/9/2021</span>                             <br></br>
              MAMA: <span className="law_tw_link" onClick={kurase_tw}>   @Kurase07      </span> <br></br>
              PAPA: <span className="alph_tw_link" onClick={alph_tw}> @Alph_Alpha_Alph  </span> <br></br>
              Affiliation:<br></br>
               <span className="CLP_text">Crescent Link Productions</span>  <br></br>
            </p>
          </Col>

          <Col className="details_and_info">
             <p>
              LIKES:                       <br></br>
               Valorant                    <br></br>
               Planet Uranus               <br></br>
               Water                       <br></br>
               <span className="forbidden"> Boys Love (BL)</span>    <br></br>
              </p>
          </Col>

          <Col className="details_and_info">
            <p>
               DISLIKES:                      <br></br>
               Valorant                       <br></br>
               Micro Managed                  <br></br>
               Lizards                        <br></br>
               Cucumbers                      <br></br>
               Distractions                   <br></br>
               Her own Voice                  <br></br>
            </p>
          </Col>

          <Col className="details_and_info">
            <p>
              TWITTER HASHTAGS:         <br></br>
                Live:   #DoggoTime      <br></br>
                Music:  n/a             <br></br>
                Fanart: #DianaFart      <br></br>
                Fan-name: Garapatas(?)  <br></br>
            </p>
          </Col>

          <Col className="details_and_info">
            <p>
              SOCIAL MEDIA:  <br></br>
              <span  onClick={open_twitter_dianna}>
               <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg_twitter_i"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" class=""></path></svg>
                Twitter 
              </span>
               
                 <br></br>

              <span  onClick={open_yt_dianna}>
               <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="youtube" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="svg_yt_i"><path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" class=""></path></svg>
                Youtube  
              </span>
            </p>
          </Col>

        </Container>
  </Row>

  
</Container>

</div>
<div className="Footer_text"><p className="footer_p">All Rights to CRESCENT LINK</p></div>
        </>  
  )
}

export default window1
