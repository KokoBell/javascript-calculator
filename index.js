function App() {

    const [view, setView] = React.useState("0")
    const [dotPressed, setDotPressed] = React.useState(false)

    const show = (after) => {
        setView((current) => {
            if(current==="0") {
                return after
            } else if ( dotPressed && after === ".") {
                return current
            } else { return current+after }
        })
    }

    const simplify = () => {
        var removed = view.match(/(\*|\+|\/|-)?(\.|\-)?\d+/g).join('');
        setView(eval(removed))
    }

    const clear = () => {
        if(dotPressed){
            setDotPressed(false)
        }
        setView("0")
    }

    const show_dot = () => {
        if(!dotPressed){
            show(".")
            setDotPressed(true)
        }   
    }

    const show_sign = (sign) => {
        if(dotPressed){
            setDotPressed(false)
        }
        show(sign)
    }

    return (
        <div className="container">
            <div className="grid">
                <div className="dis">
                    <input id="display" type="text" value={view} disabled/>
                </div>
                <div id="clear" onClick={clear} className="cButton AC red">AC</div>
                <div id="divide" onClick={() => show_sign("/")} className="cButton div"> / </div>
                <div id="multiply" onClick={() => show_sign("*")} className="cButton times"> x </div>
                <div id="seven" onClick={() => show("7")} className="cButton seven dark-grey"> 7 </div>
                <div id="eight" onClick={() => show("8")} className="cButton eight dark-grey"> 8 </div>
                <div id="nine" onClick={() => show("9")} className="cButton nine dark-grey"> 9 </div>
                <div id="subtract" onClick={() => show_sign("-")} className="cButton minus"> - </div>
                <div id="four" onClick={() => show("4")} className="cButton four dark-grey"> 4 </div>
                <div id="five" onClick={() => show("5")} className="cButton five dark-grey"> 5 </div>
                <div id="six" onClick={() => show("6")} className="cButton six dark-grey"> 6 </div>
                <div id="add" onClick={() => show_sign("+")} className="cButton plus"> + </div>
                <div id="one" onClick={() => show("1")} className="cButton one dark-grey"> 1 </div>
                <div id="two" onClick={() => show("2")} className="cButton two dark-grey"> 2 </div>
                <div id="three" onClick={() => show("3")} className="cButton three dark-grey"> 3 </div>
                <div id="equals" onClick={simplify} className="cButton equal baby"> = </div>
                <div id="zero" onClick={() => show("0")} className="cButton zero dark-grey"> 0 </div>
                <div id="decimal" onClick={() => show_dot(".")} className="cButton dot dark-grey"> . </div>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("app"))