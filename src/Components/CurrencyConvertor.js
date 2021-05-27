import React from 'react'

class CurrencyRow extends React.Component {
    constructor(props) {
        super(props)

        
        
    }


    render () {

        return(

        <div className = "container input-values">
            <div className = "row">
                <select  value = {this.props.base} onChange ={this.props.onChangeCurrency}>
                    {this.props.rates.map(item => {
                        return <option key = {item}>{item}</option>
                    })}
                </select>
                <input  className = "input-value"  value = {this.props.amount} onChange = {this.props.onChangeAmount}></input>
            </div>
        </div>
            
        )
    

    }
}


class CurrencyConverter extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currencyList: [],
            currencyRates: {rates: {}},
            amount: "",
            fromCurrencySelected: "",
            toCurrencySelected: "",
            amountInput: true
        }
    }

    

    componentDidMount() {
        const base_url = "https://altexchangerateapi.herokuapp.com/latest"
        fetch(base_url)
        .then(res => res.json())
        .then(data => {
            const firstCurrency = Object.keys(data.rates)[0]
            this.setState({currencyRates: data.rates, amount: data.amount, currencyList: [data.base, ...Object.keys(data.rates)], fromCurrencySelected: data.base, toCurrencySelected: firstCurrency})
            
        })

       
    } 
    
  
    render() {

        const {
            currencyList,
            currencyRates,
            fromCurrencySelected,
            toCurrencySelected,
            amount,
            amountInput
        } = this.state

        // currencyRates[fromCurrencySelected];
        // currencyRates[toCurrencySelected];

        console.log(currencyRates[fromCurrencySelected]);

        let toRateValue =  currencyRates[toCurrencySelected];

        


        let fromExchangeValue = currencyRates[fromCurrencySelected];
        let fromAmount;
        let toAmount;

        if (amountInput) {
            fromAmount = amount
            toAmount = fromAmount * toRateValue;
        } else {
            toAmount = amount
            fromAmount = toAmount / fromExchangeValue
        }



      return (
          <div className = "container">
              <div className = "text-center p-3 mb-2">
                  <h2 className = "mb-2 main-currency-header">Currency Converter</h2>
                  <CurrencyRow  onChangeAmount = {e => {this.setState({amount: e.target.value,amountInput: true})}} rates = {currencyList} amount = {fromAmount} base = {fromCurrencySelected} onChangeCurrency = {e => {
                      return this.setState({fromCurrencySelected: e.target.value})
                  }}/>
                  <h2>=</h2>
                  <CurrencyRow onChangeAmount = {e => {this.setState({amount: e.target.value,amountInput: false})}} rates = {currencyList}  amount = {toAmount} base = {toCurrencySelected} onChangeCurrency = {e => {
                      return this.setState({toCurrencySelected: e.target.value})
                  }}/>
              </div>
          </div>
        )
      }
    
}


export default CurrencyConverter;