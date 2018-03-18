$(function(){

  // 
  var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var lowRisk = [[2011, 8], [2012, 5], [2013, 6], [2014, 6], [2015, 8], [2016, 6], [2017, 10]],
      mediumRisk = [[2011, 10], [2012, 6], [2013, 11], [2014, 12], [2015, 5], [2016, 6], [2017, 14]],
      highRisk = [[2011, 5], [2012, 18], [2013, 20], [2014, 8], [2015, 3], [2016, 20], [2017, 12]];
  // for (var i = 2011; i <= 2017; i += 1) {
  //   d1.push([i, parseInt((Math.floor(Math.random() * (1 + 20 - 10))) + 10)]);
  // }

  $("#flot-1ine").length && $.plot($("#flot-1ine"), [{
          data: lowRisk
      }], 
      {
        series: {
            lines: {
                show: true,
                lineWidth: 1,
                fill: true,
                fillColor: {
                    colors: [{
                        opacity: 0.3
                    }, {
                        opacity: 0.3
                    }]
                }
            },
            points: {
                radius: 3,
                show: true
            },
            grow: {
              active: true,
              steps: 50
            },
            shadowSize: 2
        },
        grid: {
            hoverable: true,
            clickable: true,
            tickColor: "#f0f0f0",
            borderWidth: 1,
            color: '#f0f0f0'
        },
        colors: ["#1bb399"],
        xaxis:{
           tickSize: 1,
           tickDecimals: 0
        },
        yaxis: {
          ticks: 5
        },
        tooltip: true,
        tooltipOpts: {
          content: "chart: %x.1 is %y.4",
          defaultTheme: false,
          shifts: {
            x: 0,
            y: 20
          }
        }
      }
  );

  $("#flot-1ine-2").length && $.plot($("#flot-1ine-2"), [{
          data: mediumRisk
      }], 
      {
        series: {
            lines: {
                show: true,
                lineWidth: 1,
                fill: true,
                fillColor: {
                    colors: [{
                        opacity: 0.3
                    }, {
                        opacity: 0.3
                    }]
                }
            },
            points: {
                radius: 3,
                show: true
            },
            grow: {
              active: true,
              steps: 50
            },
            shadowSize: 2
        },
        grid: {
            hoverable: true,
            clickable: true,
            tickColor: "#f0f0f0",
            borderWidth: 1,
            color: '#f0f0f0'
        },
        colors: ["#fcc633"],
        xaxis:{
           tickSize: 1,
           tickDecimals: 0
        },
        yaxis: {
          ticks: 5
        },
        tooltip: true,
        tooltipOpts: {
          content: "chart: %x.1 is %y.4",
          defaultTheme: false,
          shifts: {
            x: 0,
            y: 20
          }
        }
      }
  );
  $("#flot-1ine-3").length && $.plot($("#flot-1ine-3"), [{
          data: highRisk
      }], 
      {
        series: {
            lines: {
                show: true,
                lineWidth: 1,
                fill: true,
                fillColor: {
                    colors: [{
                        opacity: 0.3
                    }, {
                        opacity: 0.3
                    }]
                }
            },
            points: {
                radius: 3,
                show: true
            },
            grow: {
              active: true,
              steps: 50
            },
            shadowSize: 2
        },
        grid: {
            hoverable: true,
            clickable: true,
            tickColor: "#f0f0f0",
            borderWidth: 1,
            color: '#f0f0f0'
        },
        colors: ["#e33244"],
        xaxis:{
           tickSize: 1,
           tickDecimals: 0
        },
        yaxis: {
          ticks: 5
        },
        tooltip: true,
        tooltipOpts: {
          content: "chart: %x.1 is %y.4",
          defaultTheme: false,
          shifts: {
            x: 0,
            y: 20
          }
        }
      }
  );

    var saving = [[1, 10000], [2, 10300], [3, 10610], [4, 10920], [5, 11220]],
      investment = [[1, 10000], [2, 10600], [3, 11200], [4, 12200], [5, 15000]];
  $("#flot-chart").length && $.plot($("#flot-chart"), [{
          data: saving,
          label: "Savings"
      }, {
          data: investment,
          label: "Investments"
      }], 
      {
        series: {
            lines: {
                show: true,
                lineWidth: 1,
                fill: false
            },
            points: {
                show: true
            },
            shadowSize: 2
        },
        grid: {
            hoverable: true,
            clickable: true,
            tickColor: "#f0f0f0",
            borderWidth: 0
        },
        colors: ["#1bb399","#177bbb"],
        xaxis: {
            ticks: 15,
            tickDecimals: 0
        },
        yaxis: {
            ticks: 10,
            tickDecimals: 0
        },
        tooltip: true,
        tooltipOpts: {
          content: "'%s' of %x.1 is %y.4",
          defaultTheme: false,
          shifts: {
            x: 0,
            y: 20
          }
        }
      }
  );
});