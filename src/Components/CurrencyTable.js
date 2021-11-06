import React from "react";

class CurrencyTable extends React.Component {
  
    constructor(props) {
        super(props)
        this.state = {
            base: "USD",
            rates: "",
            listName:"",
            selectValues: [],
            loading: true
        }

        this.changeBase = this.changeBase.bind(this)
    }

    componentDidMount() {
        this.getRates(this.state.base)
        fetch(`https://altexchangerateapi.herokuapp.com/currencies`)
        .then(res => res.json())
        .then(data => {
            this.setState({listName: data})
        })


        fetch(`https://altexchangerateapi.herokuapp.com/latest?`)
        .then(res => res.json())
        .then(data => {
            this.setState({selectValues: Object.keys(data.rates)})
        })
    }

    getRates = (base) => {
        fetch(`https://altexchangerateapi.herokuapp.com/latest?from=${base}`)
        .then(res => res.json())
        .then(data => {
            this.setState({rates: data.rates, loading: false})
        })
    }


    changeBase(event) {
        this.setState({base: event.target.value})
        this.getRates(event.target.value)
    }
    
    render() {

        const {
            listName,
            rates,
            selectValues,
            base,
            loading
        } = this.state
        
        let test = Object.keys(rates, listName).map(item => ({
            rate: rates[item],
            names: listName[item],
            accronyms: item
        }))
        return(
            <div className = "container">
                    <table className = "table table-striped table-dark">
                        <thead className = "thead-dark">
                            <tr>
                                <th scope = "col">Listings <small>1.00 {base}</small></th>
                                <th scope = "col">Exchange Rates</th>
                            </tr>
                        </thead>
                    <tbody>
            <div className = "select-area">
                <select disabled = {loading} value = {base} onChange = {this.changeBase} className = "custom-select-sm mt-3 ml-1">
                    {selectValues.map(item => {
                        return <option key = {item} value = {item}>{item}</option>
                    })}
                </select>
            </div>
                {test.map(item => {
                        return  (
                            <tr key = {item.names}>
                                <td>
                                    {item.names} <small>{item.accronyms}</small>
                                </td>
                                <td>
                                    {item.rate}
                                </td>
                            </tr>
                                 )      
                            })}
                    </tbody>
                </table>
            </div>
            )
        }
    }

export default CurrencyTable;
