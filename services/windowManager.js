const {WINDOW_SIZE} = require('../config');

let windowCurrState =[];

const updateWindow = (num) =>{
    const windowPrevState = [...windowCurrState];

    num.forEach(ele => {
        if(!windowCurrState.includes(ele)){
            windowCurrState.push(ele);
        }
    });

    if(windowCurrState.length > WINDOW_SIZE){
        windowCurrState = windowCurrState.slice(windowCurrState.length - WINDOW_SIZE);
    }
    
    return{
        windowPrevState,
        windowCurrState,
        numbers: windowCurrState.slice(windowCurrState.length - WINDOW_SIZE),
        avg: windowCurrState.length > 0 
        ? parseFloat((windowCurrState.reduce((a, b) => a + b, 0) / windowCurrState.length).toFixed(2)) 
        : 0.0    }
}

module.exports = updateWindow;