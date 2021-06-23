import React from 'react'
import { Line } from 'react-chartjs-2'

class Row extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <select value = {this.props.defaultValue} onChange = {this.props.onChangeValue} className = "custom-select-sm" disabled = {this.props.loading}>
                {this.props.rates.map(item => {
                    return <option key = {item  } value = {item}>{item}</option>
                })}
            </select>
        )
    }
}

class CurrencyChart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currencyList: [],
            base: "USD",
            quote: "AUD",
            labels: "",
            chartData: "",
            label: "",
            chartLabel: "",
            loading: false

        }
    }

    componentDidMount() {
        this.getRates(this.state.base, this.state.quote)
        const base_url =   `https://altexchangerateapi.herokuapp.com/latest`
        fetch(base_url)
        .then(res => res.json())
        .then(data => {
            this.setState({currencyList: [...Object.keys(data.rates)]})
        })
    }

    changeBaseValue = (event) => {
        const base = event.target.value;
        this.setState({ base })
        this.getRates(base, this.state.quote)
        this.setState({loading: false})
    }

    changeQuoteValue = (event) => {
        const quote = event.target.value;
        this.setState({ quote })
        this.getRates(this.state.base, quote)
        this.setState({loading: false})
    }

    getRates = (base, quote) => {
        
        const endDate = new Date().toISOString().split('T')[0];
        const startDate = new Date((new Date).getTime() - (30 * 24 * 60 * 60 * 1000)).toISOString().split('T')[0];
       
        fetch(`https://altexchangerateapi.herokuapp.com/${startDate}..${endDate}?from=${base}&to=${quote}`)
        .then(res => res.json())
        .then(data => {
            let chartLabels = Object.keys(data.rates);
            let chartData = Object.values(data.rates).map(rate => rate[quote]);
            let chartLabel = `${base}/${quote}`
            this.setState({chartData: chartData, labels: chartLabels, chartLabel: chartLabel})
        })
    }


    render() {

        const {currencyList, base, quote, chartData, labels, chartLabel, loading} = this.state

        let data = {
            
            labels: labels,
            datasets: [
                {
                    label: chartLabel,
                    data: chartData,
                    fill: false,
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgba(255, 99, 132,0.2)'
                },
            ],
        };

        return(
        
            <div className = "main-chart-section">
                <div className = "selectBoxes">
                    <Row rates = {currencyList} onChangeValue = {this.changeBaseValue} defaultValue = {base} loading = {loading} />
                        <p>to</p>
                    <Row rates = {currencyList} onChangeValue = {this.changeQuoteValue} defaultValue = {quote} loading = {loading} />
                </div>
                <div className= "container chart">
                    <Line data = {data}/>
                </div>
            </div>  
        
        )
    }
}


export  default CurrencyChart 