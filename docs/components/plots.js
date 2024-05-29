import * as Plot from "npm:@observablehq/plot";

export function analysis_plot(data,x_axis,y_axis,score,start_date,end_date,party) {
    return Plot.plot({
        inset: 10,
        width: 700,
        height: 300,
        marginLeft: 60,
        marginBottom: 40,
        title: "Mean yearly " + score + " score of articles from " + party + " party between " + start_date + " and " + end_date,
        grid: true,
        x: {label: "Year of the article"},
        y: {label: "Mean yearly positiveness score"},
        marks: [
          Plot.lineY(data, {x: x_axis, y: y_axis}),
        ]
      });
}