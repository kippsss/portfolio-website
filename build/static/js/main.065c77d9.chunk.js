(this.webpackJsonpportfolio2=this.webpackJsonpportfolio2||[]).push([[0],{108:function(e,t,i){"use strict";i.r(t);var n=i(0),a=i.n(n),o=i(9),r=i.n(o),s=(i(93),i(94),i(138)),c=i(51),A=i(133),d=i(142),l=i(139),g=i(67),j=i.n(g),u=i(143),h=i(144),b=i(135),p=i(46),x=i(134),m=i(1),f=Object(A.a)((function(e){return{sections:{display:"flex",minWidth:"375px",width:"800px",justifyContent:"space-around"},sectionName:{fontFamily:"Montserrat, sans-serif",fontWeight:"bold",color:"black",fontSize:"1em"},button:{fontFamily:"Montserrat, sans-serif",margin:function(e){return e.isDrawer?"10px 10px":"0 10px"},"&::after":{background:"#FC5185",content:"''",position:"absolute",width:"100%",height:"0.13rem",left:"0",bottom:"0",transform:"scale(0,1)",transition:"0.3s ease"},"&:hover::after":{transform:"scale(1,1)"},"&:hover":{backgroundColor:"#f0ffff"}}}})),O=["about","education","work","involvements"],w=function(){var e=f();return Object(m.jsx)("div",{className:e.sections,children:O.map((function(t){return Object(m.jsx)(p.Link,{activeClass:"active",to:t,spy:!0,smooth:!0,offset:0,duration:500,children:Object(m.jsx)(x.a,{className:e.button,disableRipple:!0,children:Object(m.jsx)(b.a,{variant:"h6",className:e.sectionName,children:t})})})}))})},B=i(136),v=Object(A.a)((function(e){return{GridPage:{backgroundColor:"#f0ffff",display:"flex",flexDirection:"column",alignItems:"center",padding:"50px 0px 70px 0px"},titleDiv:{margin:"20px"},titleTextLarge:{fontFamily:"Julius Sans One, sans-serif",fontSize:"2.3rem",fontWeight:"600",textAlign:"center"},cardsDiv:{display:"flex",justifyContent:"center",maxWidth:"1300px"}}})),y=function(e){var t=v();return Object(m.jsxs)("div",{className:t.GridPage,children:[Object(m.jsx)("div",{className:t.titleDiv,children:Object(m.jsx)(b.a,{variant:"h6",className:t.titleTextLarge,children:e.title})}),Object(m.jsx)(B.a,{container:!0,className:t.cardsDiv,children:e.children})]})},C=i(137),I=Object(A.a)({card:{display:"flex",flexDirection:"column",minWidth:"300px",maxWidth:"400px",margin:"20px"},imageDiv:{position:"relative",display:"flex",justifyContent:"center",height:function(e){return e.isLogo?e.imgPadding?"calc(200px - (".concat(e.imgPadding," * 2))"):"200px":"300px"},padding:function(e){return e.imgPadding}},image:{height:"100%",width:"100%",objectFit:function(e){return e.isLogo?"contain":"cover"}},descriptionDiv:{padding:"15px 20px"},heading:{fontFamily:"Montserrat, sans-serif",fontSize:"1.5rem",fontWeight:"600"},subheading:{fontFamily:"Montserrat, sans",color:"dark-grey",fontSize:"1.1rem",fontWeight:"300"},info:{paddingTop:"10px",fontSize:"0.9rem"},period:{fontSize:"0.8rem"}}),D=function(e){var t=I(e);return Object(m.jsxs)(C.a,{className:t.card,children:[Object(m.jsxs)("div",{className:t.imageDiv,children:[Object(m.jsx)("img",{className:t.image,src:e.img,alt:"Unable to load"}),e.overlay?e.overlay:null]}),Object(m.jsx)(s.a,{width:"100%"}),Object(m.jsxs)("div",{className:t.descriptionDiv,children:[Object(m.jsx)(b.a,{className:t.heading,variant:"h5",children:e.heading}),Object(m.jsx)(b.a,{className:t.subheading,variant:"subtitle1",children:e.subheading}),Object(m.jsx)(b.a,{className:t.period,children:e.period}),e.info?Object(m.jsx)(b.a,{className:t.info,variant:"body1",children:e.info}):null]}),e.children]})},E=i(66),Q=i.n(E),F=i(148),N=i(141),U=i(112),G=Object(A.a)((function(e){return{buttonDiv:{display:"flex",justifyContent:"flex-end"},modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3),width:"80%"},heading:{fontFamily:"Montserrat, sans-serif",fontSize:"1.9rem",fontWeight:"600"},subheading:{fontFamily:"Montserrat, sans",color:"dark-grey",fontSize:"1.3rem",fontWeight:"300"},period:{fontWeight:"400"},description:{paddingTop:"10px"}}})),H=function(e){var t=Object(n.useState)(!1),i=Object(c.a)(t,2),a=i[0],o=i[1],r=G();return Object(m.jsxs)("div",{className:r.buttonDiv,children:[Object(m.jsx)(l.a,{onClick:function(){o(!0)},children:Object(m.jsx)(Q.a,{})}),Object(m.jsx)(F.a,{className:r.modal,open:a,onClose:function(){o(!1)},closeAfterTransition:!0,BackdropComponent:N.a,BackdropProps:{timeout:500},children:Object(m.jsx)(U.a,{in:a,children:Object(m.jsxs)("div",{className:r.paper,children:[Object(m.jsx)(b.a,{className:r.heading,variant:"h5",children:e.heading}),Object(m.jsx)(b.a,{className:r.subheading,variant:"subtitle1",children:e.subheading}),Object(m.jsx)(b.a,{className:r.period,variant:"subtitle2",children:e.period}),Object(m.jsx)("div",{className:r.description,children:e.children})]})})})]})},S=i.p+"static/media/sportscomm.4604afdd.jpg",P=Object(A.a)((function(e){return{overlay:{position:"absolute",top:"0",bottom:"0",left:"0",right:"0",height:"100%",width:"100%",backgroundColor:"black",opacity:"0",transition:".5s ease","&:hover":{opacity:"0.8"}},description:{padding:"30px",color:"white"}}})),M=function(e){var t=P();return Object(m.jsx)("div",{className:t.overlay,children:Object(m.jsx)("div",{className:t.description,children:e.children})})},k=function(){return Object(m.jsx)(D,{heading:"CAPT Sports Committee",subheading:"Developmental Vice-Director",img:S,period:"May 2020 - May 2021",overlay:Object(m.jsx)(M,{children:"The Sports Committee aims to foster a safe and inclusive sporting environment for residents. We oversee a wide array of sports Interest Groups (IGs) and organise events such as Inter-College Games and Inter-Neighbourhood Games."}),children:Object(m.jsxs)(H,{heading:"CAPT Sports Committee",subheading:"Developmental Vice-Director",period:"May 2020 - May 2021",children:[Object(m.jsx)(b.a,{variant:"body1",children:"- Supervised growth and development of Sports Committee members."}),Object(m.jsx)(b.a,{variant:"body1",children:"- Fostered a network of accountability among members to better facilitate individual character growth."}),Object(m.jsx)(b.a,{variant:"body1",children:"- Organised sporting events for CAPT and coordinated safe conduct of sports interest groups."}),Object(m.jsx)(b.a,{variant:"body1",children:"- Led the publicity team to promote college events through social media and hard publicity."}),Object(m.jsx)(b.a,{variant:"body1",children:"- Spearheaded the planning and execution of Community Engagement & Health Awareness Week."})]})})},V=i.p+"static/media/housecomm2.15873e77.jpg",L=function(){return Object(m.jsx)(D,{heading:"House Committee",subheading:"Finance Secretary",img:V,period:"Sep 2019 - May 2020",overlay:Object(m.jsx)(M,{children:"The House Committee seeks to build the house culture and foster meaningful connections among housemates. We organise events and initiatives with the aim of forging friendships among members of the house."}),children:Object(m.jsxs)(H,{heading:"House Committee",subheading:"Finance Secretary",period:"Sep 2019 - May 2020",children:[Object(m.jsx)(b.a,{variant:"body1",children:"- Advised and managed the committee\u2019s budget, resulting in a 25% budget surplus by the end of the year."}),Object(m.jsx)(b.a,{variant:"body1",children:"- Executed neighbourhood events targeted at fostering bonds and creating memories among college students."}),Object(m.jsx)(b.a,{variant:"body1",children:"- Collaborated with CAPT finance management to ensure proper budget claim procedures were followed for reimbursement purposes."})]})})},J=i.p+"static/media/kamal.93d82f37.jpg",T=function(){return Object(m.jsx)(D,{heading:"CAPT Kamal",subheading:"Logistics Head",img:J,period:"Oct 2019 - May 2020",overlay:Object(m.jsx)(M,{children:"CAPT Kamal is an overseas programme aimed at teaching youths from Bangalore the importance of education through a series of planned activities. We also held a fundraiser for our partner organisations to buy basic ammenities for the youths under their care. Unfortunately, due to Covid-19, we were unable to make the trip to Bangalore."}),children:Object(m.jsxs)(H,{heading:"CAPT Kamal",subheading:"Logistics Head",period:"Oct 2019 - May 2020",children:[Object(m.jsx)(b.a,{variant:"body1",children:"- Managed overall welfare and direction of the committee as part of the EXCO."}),Object(m.jsx)(b.a,{variant:"body1",children:"- Directed a subcommittee in sourcing of affordable and effective logistics as required by the programme."}),Object(m.jsx)(b.a,{variant:"body1",children:"- Established communication with overseas accommodations to ensure reservations are made before the trip."})]})})},z=i.p+"static/media/badminton.40c571fe.jpg",K=function(){return Object(m.jsx)(D,{heading:"Badminton Interest Group",subheading:"Head",img:z,period:"May 2020 - May 2021",overlay:Object(m.jsx)(M,{children:"The Badminton Interest Group in CAPT is a platform for residents to enjoy and learn all things badminton. Through weekly sessions, we encourage anybody, regardless of skill, to learn and grow together in the sport."}),children:Object(m.jsxs)(H,{heading:"Badminton Interest Group (IG)",subheading:"IG Head",period:"May 2020 - May 2021",children:[Object(m.jsx)(b.a,{variant:"body1",children:"- Co-headed the weekly planning and execution of Badminton Interest Group sessions held in the college."}),Object(m.jsx)(b.a,{variant:"body1",children:"- Planned lessons on the fundamentals of the sport and organised inclusive matches for enjoyment and development of skills."}),Object(m.jsx)(b.a,{variant:"body1",children:"- Accounted for the logistics and budget required to sustain the Interest Group for the academic year."})]})})},Y=function(){return Object(m.jsxs)(y,{title:"Involvements",children:[Object(m.jsx)(k,{}),Object(m.jsx)(K,{}),Object(m.jsx)(T,{}),Object(m.jsx)(L,{})]})},R=Object(A.a)((function(e){return{sections:{display:"flex",flexDirection:"column"},button:{width:"100%",height:"70px"},sectionName:{fontFamily:"Montserrat, sans-serif",fontWeight:"bold",color:"black",fontSize:"1.3em"}}})),W=["about","education","work","involvements"],X=function(e){var t=R();return Object(m.jsx)("div",{className:t.sections,children:W.map((function(i){return Object(m.jsx)(p.Link,{activeClass:"active",to:i,spy:!0,smooth:!0,offset:0,duration:500,children:Object(m.jsx)(x.a,{className:t.button,onClick:function(){return e.toggleDrawer(!1)},children:Object(m.jsx)(b.a,{variant:"h6",className:t.sectionName,children:i})})})}))})},Z=i(149),q=Object(A.a)((function(e){return{appbar:{backgroundColor:"#f0ffff",boxShadow:"0px 0px",position:"sticky",marginTop:"20px"},toolbar:{justifyContent:function(e){return e?"flex-end":"center"},height:"64px"}}})),_=function(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),i=t[0],o=t[1],r=Object(d.a)("(max-width: 500px)"),s=q(r),A=function(e){o(e)};return Object(m.jsx)(u.a,{className:s.appbar,children:Object(m.jsx)(h.a,{className:s.toolbar,children:r?Object(m.jsxs)(a.a.Fragment,{children:[Object(m.jsx)(l.a,{onClick:function(){return A(!0)},children:Object(m.jsx)(j.a,{})}),Object(m.jsx)(Z.a,{className:s.drawer,anchor:"top",open:i,onClose:function(){return A(!1)},onOpen:function(){return A(!0)},children:Object(m.jsx)(X,{toggleDrawer:A})})]}):Object(m.jsx)(w,{})})})},$=i(23),ee=Object(A.a)((function(){return{circleItem:{position:"absolute",borderRadius:"50%",top:function(e){return e.topleft?e.topleft[0]:"0px"},left:function(e){return e.topleft?e.topleft[1]:"0px"},height:function(e){return e.size?e.size:"100px"},width:function(e){return e.size?e.size:"100px"},backgroundColor:function(e){return e.color?e.color:"#DEEDF0"}}}})),te=function(e){var t=ee(e);return Object(m.jsx)("div",{className:t.circleItem})},ie=Object(A.a)((function(e){return{circles:{position:"absolute",width:"100%",height:"100%",top:"0px"}}})),ne=function(){var e=ie(),t=Object(d.a)("(max-width: 400px)");return Object(m.jsxs)("div",{className:e.circles,children:[!t&&Object(m.jsxs)("div",{children:[Object(m.jsx)(te,{color:"#DEEDF0",topleft:["5%","48%"],size:"200px"}),Object(m.jsx)(te,{color:"#DEEDF0",topleft:["80%","74%"],size:"100px"}),Object(m.jsx)(te,{color:"#B2B8A3",topleft:["60%","0px"],size:"150px"}),Object(m.jsx)(te,{color:"#F4C7AB",topleft:["26%","74%"],size:"100px"}),Object(m.jsx)(te,{color:"#F4C7AB",topleft:["10%","0%"],size:"80px"})]}),t&&Object(m.jsxs)("div",{children:[Object(m.jsx)(te,{color:"#DEEDF0",topleft:["0%","60%"],size:"130px"}),Object(m.jsx)(te,{color:"#DEEDF0",topleft:["74%","80%"],size:"70px"}),Object(m.jsx)(te,{color:"#B2B8A3",topleft:["60%","0px"],size:"100px"}),Object(m.jsx)(te,{color:"#F4C7AB",topleft:["30%","85%"],size:"60px"}),Object(m.jsx)(te,{color:"#F4C7AB",topleft:["10%","0%"],size:"80px"})]})]})},ae=i.p+"static/media/self-portrait.f2e66909.jpg",oe=i(145),re=Object(A.a)((function(e){return{selfPortraitDiv:Object($.a)({position:"relative",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"10px 20px 10px 20px"},e.breakpoints.down("sm"),{width:"80%"}),selfPortrait:Object($.a)({height:"350px",width:"350px",borderRadius:"50%",objectFit:"cover",zIndex:"1"},e.breakpoints.down("xs"),{height:"300px",width:"300px"})}})),se=function(){var e=re();return Object(m.jsx)(oe.a,{in:!0,children:Object(m.jsxs)("div",{className:e.selfPortraitDiv,children:[Object(m.jsx)("img",{className:e.selfPortrait,src:ae,alt:"Portrait"}),Object(m.jsx)(ne,{})]})})},ce=i(150),Ae=i(71),de=i.n(Ae),le=i(70),ge=i.n(le),je=i(69),ue=i.n(je),he=Object(A.a)((function(e){return{socialsDiv:{display:"flex",justifyContent:"space-around",padding:"30px 0",width:"100%"},logo:{width:"22px"}}})),be=function(){var e=he();return Object(m.jsxs)("div",{className:e.socialsDiv,children:[Object(m.jsx)(ce.a,{title:"Email",children:Object(m.jsx)(l.a,{color:"inherit","aria-label":"email",onClick:function(){return window.location="mailto:keithchewzk@u.nus.edu"},children:Object(m.jsx)(ue.a,{})})}),Object(m.jsx)(ce.a,{title:"LinkedIn",children:Object(m.jsx)(l.a,{color:"inherit","aria-label":"Linkedin.com",onClick:function(){return window.open("https://www.linkedin.com/in/keith-chew-36745a1ba/")},children:Object(m.jsx)(ge.a,{})})}),Object(m.jsx)(ce.a,{title:"Instagram",children:Object(m.jsx)(l.a,{color:"inherit","aria-label":"Instagram.com",onClick:function(){return window.open("https://www.instagram.com/kippss___/")},children:Object(m.jsx)(de.a,{})})})]})},pe=i(146),xe=Object(A.a)((function(e){return{textDiv:Object($.a)({padding:"10px 20px 10px 20px",display:"flex",flexDirection:"column",justifyContent:"center"},e.breakpoints.down("sm"),{alignItems:"center"}),textboxName:Object($.a)({fontFamily:"Julius Sans One, sans-serif",fontWeight:"600",fontSize:"4.6rem",zIndex:"1"},e.breakpoints.down("sm"),{textAlign:"center"}),textboxDescription:Object($.a)({fontFamily:"Montserrat, sans",fontSize:"1.3rem",zIndex:"1"},e.breakpoints.down("sm"),{textAlign:"center"}),socialsDiv:{display:"flex",justifyContent:"space-around",padding:"30px 0",width:"100%"},logo:{width:"22px"}}})),me=function(){var e=xe();return Object(m.jsx)(pe.a,{in:!0,children:Object(m.jsxs)("div",{className:e.textDiv,children:[Object(m.jsx)(b.a,{className:e.textboxName,variant:"h2",children:"Hi, I'm Keith"}),Object(m.jsx)(b.a,{className:e.textboxDescription,variant:"h6",children:"Aspiring bioinformatician & web developer"}),Object(m.jsx)(be,{})]})})},fe=Object(A.a)((function(e){return{hero:Object($.a)({backgroundColor:"#fff5eb",display:"flex",height:"calc(100vh - 60px)",flexDirection:"row-reverse",justifyContent:"space-around",padding:"30px 0"},e.breakpoints.down("sm"),{minHeight:"100vh",height:"auto",flexDirection:"column",justifyContent:"center",alignItems:"center"})}})),Oe=function(){var e=fe();return Object(m.jsxs)("div",{className:e.hero,children:[Object(m.jsx)(se,{}),Object(m.jsx)(me,{})]})},we=i(147),Be=i.p+"static/media/python.9bbd42f7.png",ve=i.p+"static/media/react.4526cfee.png",ye=i.p+"static/media/html.a88fa7fd.png",Ce=i.p+"static/media/css.1b7965b7.png",Ie=i.p+"static/media/javascript.029db7d4.png",De=i.p+"static/media/postgresql.d12205b1.png",Ee=Object(A.a)((function(e){return{logo:{width:"40px",margin:"5px"}}})),Qe=[["Python",Be],["Java","data:image/png;base64,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"],["HTML",ye],["CSS",Ce],["JavaScript",Ie],["React",ve],["Flutter","data:image/png;base64,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"],["PostgreSQL",De]],Fe=function(){var e=Ee();return Object(m.jsx)("div",{children:Qe.map((function(t){return Object(m.jsx)(ce.a,{title:t[0],children:Object(m.jsx)("img",{className:e.logo,src:t[1],alt:"Proficiency Logo"})},Math.random())}))})},Ne=i.p+"static/media/gromacs.8e249bbf.png",Ue=i.p+"static/media/vmd.6b85a461.png",Ge=Object(A.a)((function(e){return{logo:{width:"40px",margin:"5px"}}})),He=[["GROMACS",Ne],["VMD",Ue]],Se=function(){var e=Ge();return Object(m.jsx)("div",{children:He.map((function(t){return Object(m.jsx)(ce.a,{title:t[0],children:Object(m.jsx)("img",{className:e.logo,src:t[1],alt:"Proficiency Logo",width:t[2]})},Math.random())}))})},Pe=i.p+"static/media/avatar.55b6c785.png",Me=Object(A.a)((function(e){return{avatarDiv:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minWidth:"250px",margin:"20px"},avatar:{height:"100%",borderRadius:"50%",width:"100%",objectFit:"cover"},avatarBackground:{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#fff5eb",borderRadius:"50%",height:"300px",width:"300px"},description:{marginBottom:"20px"},introDiv:{diplay:"flex",flexDirection:"column",justifyContent:"space-between",minWidth:"250px",maxWidth:"350px",margin:"20px"},categoryTitle:{fontSize:"1.1rem",fontFamily:"Montserrat, sans-serif",fontWeight:"600"},paddingDiv:{height:"20px"}}})),ke=function(){var e=Me();return Object(m.jsxs)(y,{title:"About Me",children:[Object(m.jsx)("div",{className:e.avatarDiv,children:Object(m.jsx)(we.a,{className:e.avatarBackground,children:Object(m.jsx)("img",{className:e.avatar,src:Pe,alt:"avatar"})})}),Object(m.jsxs)("div",{className:e.introDiv,children:[Object(m.jsx)(b.a,{className:e.description,variant:"body1",children:"Hey there, Keith here! I'm an undergraduate at NUS, majoring in Computational Biology. My academic interests include immunology & infection in life science, as well as web development in the field of computer science. My proficiencies in programming and bioinformatics are as follows:"}),Object(m.jsx)(b.a,{className:e.categoryTitle,variant:"subtitle1",children:"Programming"}),Object(m.jsx)(Fe,{}),Object(m.jsx)("div",{className:e.paddingDiv}),Object(m.jsx)(b.a,{className:e.categoryTitle,variant:"subtitle1",children:"Bioinformatics"}),Object(m.jsx)(Se,{})]})]})},Ve=i.p+"static/media/nus-logo.308b842b.png",Le=function(){return Object(m.jsx)(D,{heading:"National University of Singapore",subheading:"B.Sc.(Hons) Computational Biology",img:Ve,imgPadding:"35px",isLogo:"true",period:"Aug 2019 - May 2023",overlay:Object(m.jsx)(M,{children:"A four-year multidisciplinary programme aimed at developing knowledge and skills in biology, computer science, mathematics and statistics. Currently pursuing studies on immunology (biology) and database systems (computer science)."})})},Je=i.p+"static/media/capt-logo.93e2414b.png",Te=function(){return Object(m.jsx)(D,{heading:"College of Alice and Peter Tan",subheading:"University Town College Programme",img:Je,imgPadding:"20px",isLogo:"true",period:"Aug 2019 - May 2021",overlay:Object(m.jsx)(M,{children:"A two-year programme aimed at developing strong writing skills and critical thinking and perspectives on global issues."})})},ze=function(){return Object(m.jsxs)(y,{title:"Education",children:[Object(m.jsx)(Le,{}),Object(m.jsx)(Te,{})]})},Ke=i.p+"static/media/astar-logo.5bb2a311.jpg",Ye=function(){return Object(m.jsx)(D,{heading:"Bioinformatics Research Intern",subheading:"Bioinformatics Institute @ A*STAR",img:Ke,isLogo:!0,period:"Jan 2021 - Jun 2021",info:"Computational research on protein-drug binding interactions for the development of pharmaceutical drugs against a variety of diseases.",children:Object(m.jsxs)(H,{heading:"Research Intern",subheading:"Bioinformatics Institute @ A*STAR",period:"Jan 2021 - Jun 2021",children:[Object(m.jsx)(b.a,{variant:"body1",children:"- Utilised Molecular Dynamics (MD) and computational modelling to run simulations on protein-drug interactions between V-ATPase and Archazolide A molecule."}),Object(m.jsx)(b.a,{variant:"body1",children:"- Conducted analysis on simulation trajectories to determine the molecular mechanisms between the protein and drug."}),Object(m.jsx)(b.a,{variant:"body1",children:"- Determined the relative possibilities of their predicted binding poses through analysis and sound reasoning."})]})})},Re=function(){return Object(m.jsx)(y,{title:"Work Experiences",children:Object(m.jsx)(Ye,{})})},We=function(){return Object(m.jsxs)(a.a.Fragment,{children:[Object(m.jsx)("div",{className:"hero_background",children:Object(m.jsx)(Oe,{})}),Object(m.jsxs)("div",{className:"body_background",children:[Object(m.jsx)(_,{}),Object(m.jsx)("div",{id:"about"}),Object(m.jsx)(ke,{}),Object(m.jsx)(s.a,{variant:"middle",width:"35%"}),Object(m.jsx)("div",{id:"education"}),Object(m.jsx)(ze,{id:"education"}),Object(m.jsx)(s.a,{variant:"middle",width:"35%"}),Object(m.jsx)("div",{id:"work"}),Object(m.jsx)(Re,{}),Object(m.jsx)(s.a,{variant:"middle",width:"35%"}),Object(m.jsx)("div",{id:"involvements"}),Object(m.jsx)(Y,{})]})]})};r.a.render(Object(m.jsx)(We,{}),document.getElementById("root"))},93:function(e,t,i){},94:function(e,t,i){}},[[108,1,2]]]);
//# sourceMappingURL=main.065c77d9.chunk.js.map