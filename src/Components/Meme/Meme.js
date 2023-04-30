import "./Meme.css"
// import memesData from "../../memesData"
import {useState, useEffect} from "react"

const Meme = () =>{

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    //console.log(meme)
    const [allMemes, setallMemes] = useState([])

    useEffect( ()=>{
        
        const fetchData = async ()=> {
            const res = await fetch("https://api.imgflip.com/get_memes");
            const memesData = await res.json();
            setallMemes(memesData.data.memes);
        }
        
        fetchData();
    },[])

    // console.log(allMemes);
    function getMemeImage(){
        let size = allMemes.length
        let randomIndex = Math.floor(Math.random()*size)
        let url = allMemes[randomIndex].url
        setMeme(prevMeme=> ({
            ...prevMeme,
            randomImage: url
        }))
        
    }

    function handleChange(e){
        const {name, value} = e.target;
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value

            }
        })
    }

    return (
        <main>
            <div className="form">
                <input type="text" name="topText" value ={meme.topText} className="form-input form-input1" placeholder="Top Text" onChange={handleChange}/>
                <input type="text" name="bottomText" value={meme.bottomText} className="form-input form-input2"placeholder="Bottom Text" onChange={handleChange}/>
                <button className="form-btn" onClick={getMemeImage}>Get a new meme image  🖼</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme-img" alt="meme"/>
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </main>
        
    )
}

export default Meme
