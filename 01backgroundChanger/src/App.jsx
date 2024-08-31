    import { useState } from 'react'
    import './App.css'
    import { Helmet } from 'react-helmet';

    function App() {
        const [color, setColor] = useState("purple");
        const onClickFunction = (e) => {
            const value = e.target.value;
            setColor(value);
        };
        const arr = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"];
        const divStyle = {
            bgcolor: "white",
            display: "flex",
            justifyContent: "center",
            position: "fixed",
            left: "50%",
            right: "50%",
            bottom: "5%"
        }
        const buttonStyle = {
            // margin: "auto",
            // width: "50%"
        };
        return <>
            <Helmet>
                <style>
                    {`body {
                        background-color: ${color};}`
                    }
                </style>
            </Helmet>
            <div style={divStyle}>
                {arr.map(function(item){
                    return <button onClick={onClickFunction} value={item} style={buttonStyle}>
                        {item}
                    </button>;
                })}
            </div>
        </>
    }

    export default App
