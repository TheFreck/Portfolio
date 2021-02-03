import React, { Component } from 'react';

export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
    super(props);
      this.state = {
          forecasts: [],
          loading: true
      };
  }

  componentDidMount() {
      this.populateWeatherData();

  }

    populateWeatherData() {
        let forecasts = [];
        for (let i = 0; i < 7; i++) {
            forecasts.push({
                date: `${Math.floor(Math.random() * 12)}/${Math.floor(Math.random() * 28)}/${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
                temperatureC: `${Math.floor(Math.random() * 40)}C`,
            })
        }
    }

  static renderForecastsTable(forecasts) {
    return (
        <ul>
          {forecasts.map(forecast =>
            <li key={forecast.date}>
                  <div>{forecast.date}</div>
                  <div>{forecast.temperatureC}</div>
            </li>
          )}
        </ul>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchData.renderForecastsTable(this.state.forecasts);

    return (
      <div>
        <h1 id="tabelLabel" >Weather forecast</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

  async populateWeatherData() {
    const response = await fetch('weatherforecast');
    const data = await response.json();
    this.setState({ forecasts: data, loading: false });
  }

let`<Card key={cards.cardId}>
                        <Accordion.Toggle as={Card.Header} eventKey={card.toggleEventKey}>
                            <div className="dropdown-header" >{card.title}<img className="dropdown-arrows" src={"arrow"} alt="up or down arrow" /></div>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={this.props.collapseEventKey}>
                            <Card.Body>
                                {card.content}
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>`;
}