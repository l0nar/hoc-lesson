import React from "react";

const withData = (WrappedComponent, dataSource) => {
  class WithData extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        fetchedData: [],
      };
    }

    componentDidMount = () => {
      fetch(dataSource)
        .then((response) => response.json())
        .then((data) => this.setState({ fetchedData: data.data.slice(0, 4) }));
    };

    render() {
      return this.state.fetchedData.length > 0 ? (
        <WrappedComponent data={this.state.fetchedData} {...this.props} />
      ) : (
        <h1>Loading...</h1>
      );
    }
  }

  return WithData;
};

export default withData;
