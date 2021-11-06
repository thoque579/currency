import React from 'react'

class CurrencyRow extends React.Component {
    constructor(props) {
        super(props)
    }
    render () {
        return(
            <div className = "container input-values">
                <div className = "row">
                    <select value = {this.props.defaultSelectValue} onChange = {this.props.changeSelection} disabled = {this.props.loading} className = "custom-select-sm">
                        {this.props.selectValues.map(item => {
                            return <option key = {item} value = {item}>{item}</option>
                        })}
                    </select>
                    <input value = {this.props.amount} onChange = {this.props.changeAmount}></input>
                </div>
            </div>      
        )
    }
}

class CurrencyConverter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rate: 1.331,
            fromCurrency: "USD",
            toCurrency: "AUD",
            currencies: [],
            baseAmount: 1,
            quoteAmount: 1 * 1.331,
            input: true,
            loading: true
        }
        
        this.changeBaseSelection = this.changeBaseSelection.bind(this)
        this.changeQuoteSelection = this.changeQuoteSelection.bind(this)
        this.changeBaseValue = this.changeBaseValue.bind(this)
        this.changeQuoteValue = this.changeQuoteValue.bind(this)
    }

    componentDidMount() {
        this.getRates(this.state.fromCurrency, this.state.toCurrency)
        const base_url = `https://altexchangerateapi.herokuapp.com/latest?`
        fetch(base_url)
        .then(res => res.json())
        .then(data => {
            this.setState({currencies: Object.keys(data.rates)})
        })
    } 

    getRates = (base, quote) => {
        fetch(`https://altexchangerateapi.herokuapp.com/latest?from=${base}&to=${quote}`)
        .then(res => res.json())
        .then(data => {
            const rate = data.rates[quote];
            this.setState({
                rate,
                baseAmount: 1,
                quoteAmount: Number((1*rate).toFixed(3)),
                loading: false
            })
        })
    }
    
    changeBaseValue = (event) => {
        this.setState({
            baseAmount: event.target.value,
            input: true
        })
    }

    changeBaseSelection = (event) => {
        const fromCurrency = event.target.value
        this.setState({ fromCurrency })
        this.getRates(fromCurrency, this.state.toCurrency)
        this.setState({input: true})
    }

    changeQuoteSelection = (event) => {
        const toCurrency = event.target.value
         this.setState({ toCurrency })
         this.getRates(this.state.fromCurrency, toCurrency)
         this.setState({input: true})
    } 

    changeQuoteValue = (event) => {
        this.setState({
            quoteAmount: event.target.value,
            input: false
        })
    }
    render() {
        const {currencies, fromCurrency, toCurrency, baseAmount, quoteAmount,input, rate, loading} = this.state
       
       let toAmount;
       let fromAmount;
       
       if (input) {
           fromAmount = baseAmount
           toAmount = fromAmount * rate
       } else {
           toAmount = quoteAmount
           fromAmount =  toAmount * 1 / rate
       }
      return (
          <div className = "container">
              <div className = "text-center p-3 mb-2">
                  <h2 className = "mb-2 main-currency-header">Currency Converter</h2>
                  <CurrencyRow selectValues = {currencies} defaultSelectValue = {fromCurrency} changeSelection = {this.changeBaseSelection} amount = {fromAmount} changeAmount = {this.changeBaseValue} loading = {loading} />
                  <h2>=</h2>
                  <CurrencyRow selectValues = {currencies} defaultSelectValue = {toCurrency} changeSelection = {this.changeQuoteSelection} amount = {toAmount} changeAmount = {this.changeQuoteValue} loading = {loading}/>
              </div>
          </div>    
        )
     }
}


export default CurrencyConverter;