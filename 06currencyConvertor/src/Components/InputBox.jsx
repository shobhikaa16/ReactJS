import React,{useId} from 'react'


function InputBox({   // this inputbox is taking two inputs from you label and classname
    label,    // this input box we are makin that white color box that takes the input of the currency and then do the convert that we what to do 
    amount,
    onAmtChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    
    className = "",
}) {
    const amountInputId = useId()
   

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
            <div className="w-1/2">
                <label htmlFor={amountInputId}
                 className="text-black/40 mb-2 inline-block">
                    {label}
                </label>

                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled = {amountDisable}
                    value={amount}
                    onChange={(e) => onAmtChange && onAmtChange(Number(e.target.value))} // this line of code checks if the amount exists then only the amount will pass otherwise not
                />   
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    // this is the select field where we have to loop for the values
                    value = {selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled = {currencyDisable}
                >
                    
                        {currencyOptions.map((currency) =>( //to use loops remember key
                            <option key={currency} 
                            value={currency}> 
                            {currency}
                            </option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
