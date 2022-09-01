import React,{useState} from 'react'

export default function Light_Dark() {
  const [myStyle, setmyStyle] = useState({
    color: 'white',
    backgroundColor: 'black'
})
const [btntext, setBtnText] = useState("Enable Dark Mode")
    
    const changeTheme = ()=>{
      if(myStyle.color == 'white'){
        setmyStyle({
            color:'black',
            backgroundColor:'white',
            border: '2px solid white'
        })
        setBtnText("Enable Dark Mode")
    }
    else{
        setmyStyle({
            color:'white',
            backgroundColor:'black'
        })
        setBtnText("Enable Light Mode")
    }
}
  return (
    <div>
        <div className="container" style={myStyle} >
            <p>Hello World!</p>
        </div>
        <div className="container">
          <button onClick={changeTheme} className="btn btn-primary">{btntext}</button>
        </div>
    </div>
  )
}
