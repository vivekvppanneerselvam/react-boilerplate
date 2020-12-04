* {
box-sizing:border-box;
}
*:before, *:after{
	box-sizing:border-box;
}

.main{
position:absolute;
background:#f12e50;
top:50;
left:50%;
width:40%;
ma-width:30em;
min-width:15em;
transform:translate(-50%, -50%);
overflow:hidden;
}
.main>.title{
	color: #fff;
	background:#f12e50;
	text-align:center;
	font-weight:700;
	line-weight: 1.2em;
	padding:1em;
	
}
.section{
	postion:relative;
	width:100%;
	border-bottom:5px solid #ce80e3d;
	border-left:2px solid #ce80e3d;
	border-right:2px solid #ce80e3d;
}

.section>button{
	postion:absolute;
	right:0;
	margin:0;
	padding:0;
	height:3em;
	width:3em;
	outline:0
	border:0;
	background:none;
	text-indent:-9999%;
	pointer-events:none;
}
.section>button:before{
	content:'';
	display:bock;
	position:absolute;
	height:12px;
	with:4px;
	border-radius:.3em;
	background:#ce80e3d
	transform-origin:50%;
	top:50%;
	left:50%;
	transition:all .25s ease-in-out;
	transform:translate(-75%, -50%) rotate(45deg);
}

.section>button:after{
	content:'';
	display:bock;
	position:absolute;
	height:12px;
	with:4px;
	border-radius:.3em;
	background:#ce80e3d
	transform-origin:50%;
	top:50%;
	left:50%;
	transition:all .25s ease-in-out;
	transform:translate(-75%, -50%) rotate(-45deg);
}

.section.open>button:before{
	height:14px;
	transform:translate(0%, -50px) rotate(-45deg);
}

.section.open>button:after{
	height:14px;
	transform:translate(0%, -50px) rotate(45deg);
}


.section.open>.articlewrap{
  height: 120px;
}


.articlewrap {
  height: 0;
  overflow: hidden;
  transition: all .2s ease-in;
}

.sectionhead {
  width: 100%;
  overflow: hidden;
  background: white;
  cursor: pointer;
  font-weight: 700;
  color: #888;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 1em;
  padding-right: 2.1em;
}

.article {
  padding: 1em;
  color: #333;
  line-height: 1.3;
}


import React, {useState, useEffect, useRef} from 'react
function Accordian(props){
const [site, setStite] = useState('')
const textInput = useRef(null)
return (<div>
	<input type="radio" name="site_name" value={'1'}
	checked={site === '1'} onChange={()=>{setStite('1')}} /> 1
	<input type="radio" name="site_name" value={'2'}
	checked={site === '2'} onChange={()=>{setStite('2')}} /> 1
	<div className="main" ref={textInput}>
        <div className="title"></div>
        <Section title="Section Title One" id='1' selected={site==='1'} >   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nemo harum voluptas aliquid rem possimus nostrum excepturi!
        </Section>
        <Section title="Section Title Two" selected={site==='2'} >   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nemo harum voluptas aliquid rem possimus nostrum excepturi!
        </Section>
        <Section title="Section Title Three" selected={site==='3'} >   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nemo harum voluptas aliquid rem possimus nostrum excepturi!
        </Section>
      </div>

</div>)
}

const Section = (props)=>{
	const[state, setState]  useState(getInitialState())
useEffect(()=>{
	if(props.selected){
		setState(prevState=>{
		prevState.open = true
		prevState.class ="section open"
		return({...prevState})
		})
	}
},[props.selected])
  function handleClick(){
  
    if(this.state.open) {
      setState(prevState=>{
		prevState.open = false
		prevState.class ="section"
		return({...prevState})
		})
    }else{
      setState(prevState=>{
		prevState.open = true
		prevState.class ="section open"
		return({...prevState})
		})
    }
  }
  function getInitialState(){
     return {
       open: props.selected ?true :false,
       class: props.selected ? "section open" : "section"
     }
  }
  
    return (
      <div className={state.class}>
        <button>toggle</button>
        <div className="sectionhead" onClick={handleClick}>{props.title}</div>
        <div className="articlewrap">
          <div className="article">
            {props.children}
          </div>
        </div>
      </div>
    );
  }


export default Accordian