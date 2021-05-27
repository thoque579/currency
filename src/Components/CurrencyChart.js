import React from "react";


class CurrencyTable extends React.Component {

    

    constructor(props) {
        super(props)
        this.state = {
            exchangeRates: [],
            exchangeRateValues: {rates: {}},
            currentSelectedValue: ""    
        };

        this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
    }

    componentDidMount() {
        const base = "https://altexchangerateapi.herokuapp.com/latest"
        fetch(base)
        .then(res => res.json())
        .then(data => {
            this.setState({exchangeRates: [...Object.keys(data.rates)], exchangeRateValues: data.rates})
            console.log(data.rates);
            console.log(Object.keys(data.rates))
        })
    }
     
    handleCurrencyChange(event) {
        this.setState({currentSelectedValue: event.target.value})
    }

    render() {
        
        const {
            exchangeRates,
            currentSelectedValue,
            exchangeRateValues
        } = this.state
        console.log(exchangeRateValues[currentSelectedValue]);
        console.log(currentSelectedValue);

        let getValue = exchangeRateValues[currentSelectedValue];

        return(
            <div className = "currency-table container">
                <table className = "table table-responsive">
                    <thead>
                        <tr>
                            <th scope = "col">Currency listings base amount against Euros</th>
                            <th scope = "col">Currency exchangeRates</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <select onChange = {this.handleCurrencyChange}>
                                    {exchangeRates.map(item => {
                                        return <option value = {item}>{item}</option>
                                         })}
                                </select>
                                </td>
                            <td>
                                <input value = {getValue}>
                                    
                                </input>
                            </td> 
                            </tr>
                    </tbody>
                </table>
            </div>
        )
    }


}

export default CurrencyTable;