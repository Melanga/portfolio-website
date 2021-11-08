import React from "react";
import { Chrono } from "react-chrono";

class EducationTimeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = { matches: window.matchMedia("(min-width: 768px)").matches };
  }

  componentDidMount() {
    const handler = (e) => this.setState({ matches: e.matches });
    window.matchMedia("(min-width: 768px)").addEventListener("change", handler);
  }

  render() {
    const items = [
      {
        title: "Jan 2016",
        cardTitle: "St. Mary's College, Kegalle",
        cardSubtitle: "I have done my O/L  and A/L in Physical Sciences",
        cardDetailedText:
          "Men of the British Expeditionary Force (BEF) wade out to..",
      },
      {
        title: "Jan 2023",
        cardTitle: "Uva Wellassa University of Sri Lanka",
        cardSubtitle: "Bachelor of Industrial Information Technology",
        cardDetailedText:
          "Men of the British Expeditionary Force (BEF) wade out to..",
      },
    ];

    return (
      <div style={{ width: "500px", height: "400px" }}>
        <Chrono
          items={items}
          mode={this.state.matches ? "HORIZONTAL" : "VERTICAL"}
          slideShow={false}
          itemWidth={"250"}
          hideControls={true}
          cardHeight={100}
          borderLessCards={true}
          theme={{
            primary: "#01bf71",
            secondary: "#010606",
            cardBgColor: "#f7f8fa",
            cardForeColor: "#010606",
            titleColor: "#fff",
          }}
        ></Chrono>
      </div>
    );
  }
}

export default EducationTimeline;
