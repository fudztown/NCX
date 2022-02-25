// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new("chartdiv");


// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([
  am5themes_Dark.new(root)
]);




// Create series
// https://www.amcharts.com/docs/v5/charts/flow-charts/
var series = root.container.children.push(am5flow.Sankey.new(root, {
  orientation: "vertical",
  sourceIdField: "from",
  targetIdField: "to",
  valueField: "value",
  nodePadding: 10,
  nodeAlign: "justify"
}));


series.links.template.setAll({
  tooltipText: null,
  templateField: "linkSettings",
  fillOpacity: 0,
  strokeOpacity: 1,
  interactive: true
});


//series.nodes.get("colors").set("step", 2);
series.nodes.rectangles.template.setAll({
  fillOpacity: 1,
  strokeOpacity: 0,
  fill: am5.color(0x020a0d)
});


//Labels
//Testing these settings

series.links.template.states.create("hover", { fillOpacity: 1 });

/*
series.nodes.labels.template.setAll({
  forceHidden: false,
  wrap: true,
  maxWidth: 120,
  templateField: "labelSettings"
});
*/


series.nodes.labels.template.setAll({
  fontSize: 30,
  oversizedBehavior: "wrap",
  maxWidth: 200,
  rotation: 0
});







//Set as IDs as needed
series.nodes.data.setAll([

  { id: "CMV", fill: am5.color(0x020a0d)},
  { id: "EST", fill: am5.color(0x020a0d)},
  { id: "MFD", fill: am5.color(0x020a0d)},
  { id: "SEC", fill: am5.color(0x020a0d) },
  { id: "OTO", fill: am5.color(0x020a0d) },
  { id: "GAS", fill: am5.color(0x020a0d) },
  { id: "MDG", fill: am5.color(0x020a0d) },

  ]);

  //Lable Functions
/*
    series.bullets.push(function () {
      return am5.Bullet.new(root, {
        locationY: 0.5,
        sprite: am5.Label.new(root, {
          templateField: "labelSettings",
          textAlign: "center",
          centerY: am5.p50,
          paddingTop: 0,
          paddingBottom: 0,
          wrap: true,
          maxWidth: 120
        })
      });
    });

    series.nodes.push(function () {
      return am5.nodes.new(root, {
        sprite: am5.Label.new(root, {
          templateField: "labelSettingsHidden",
          forceHidden: true
        })
      });
    });


    series.bullets.push(function () {
    return am5.Bullet.new(root, {
      locationY: 1,
      sprite: am5.Label.new(root, {
        templateField: "labelSettings2",
        textAlign: "left",
        centerY: am5.p50,
        paddingTop: 0,
        paddingBottom: 0,
        wrap: true,
        maxWidth: 120
      })
    });
  });
*/
// Set data
// https://www.amcharts.com/docs/v5/charts/flow-charts/#Setting_data
series.data.setAll([



  { from: "Committing to the vehicle and/or vehicle choice", to: "Online aftersales content and tools", value: 1 },
  { from: "Committing to the vehicle and/or vehicle choice", to: "Holistic and transparent financial options", value: 1 },
  { from: "Committing to the vehicle and/or vehicle choice", to: "Frictionless guidance", value: 1 },
  { from: "Considering a vehicle repurchase", to: "Nissan Knows Me (Personalised interactions and information)", value: 1 },
  { from: "Considering a vehicle repurchase", to: "Easy enrolment to ownership", value: 1 },
  { from: "Experiencing how a certain type of vehicle & set-up may feel to drive, own and live with", to: "Booking and preparing for test-drive", value: 1 },
  { from: "Experiencing how a certain type of vehicle & set-up may feel to drive, own and live with", to: "Tailored test-drive ('Flexible TD' - physical experience)", value: 1},
  { from: "Experiencing how a certain type of vehicle & set-up may feel to drive, own and live with", to: "Immersive exploration ", value: 1 },
  { from: "Experiencing how a certain type of vehicle & set-up may feel to drive, own and live with", to: "One Seamless Account", value: 1 },
  { from: "Experiencing how a certain type of vehicle & set-up may feel to drive, own and live with", to: "Frictionless guidance", value: 1 },
  { from: "Referring Back To Research And Any Choices Made", to: "Immersive exploration ", value: 1 },
  { from: "Referring Back To Research And Any Choices Made", to: "Nissan Knows Me (Personalised interactions and information)", value: 1 },
  { from: "My vehicle needs my care and attention", to: "Digital services booking and management", value:1 },
  { from: "My vehicle needs my care and attention", to: "Nissan Knows Me (Personalised interactions and information)", value: 1 },
  { from: "My vehicle needs my care and attention", to: "One Seamless Account", value: 1 },
  { from: "Receiving The Vehicle", to: "Nissan Knows Me (Personalised interactions and information)", value: 1 },
  { from: "Receiving The Vehicle", to: "Vehicle order tracking", value: 1 },
  { from: "Receiving The Vehicle", to: "Guided learning", value: 1 },
  { from: "Receiving The Vehicle", to: "Frictionless guidance", value: 1 },
  { from: "Referring Back To Research And Any Choices Made", to: "Easy enrolment to ownership", value: 1 },
  { from: "Referring Back To Research And Any Choices Made", to: "Frictionless guidance", value: 1 },
  { from: "Referring Back To Research And Any Choices Made", to: "One Seamless Account", value: 1 },
  { from: "Trying to ensure the most suitable financial solution", to: "Holistic and transparent financial options", value: 1 },
  { from: "Waiting For The Vehicle", to: "Nissan Knows Me (Personalised interactions and information)", value: 1 },
  { from: "Waiting For The Vehicle", to: "Easy enrolment to ownership", value: 1 },
  { from: "Waiting For The Vehicle", to: "Vehicle order tracking", value: 1 },
  { from: "Considering a vehicle repurchase", to: "Effortless digital financial support", value: 1 },
  { from: "Exploring how the vehicle/service or brand can work harder for me", to: "Guided learning", value: 1 },
  { from: "Receiving The Vehicle", to: "Tailored handover", value: 1 },
  { from: "Trying to ensure the most suitable financial solution", to: "Tools to facilitate online purchasing", value: 1 },
  { from: "Waiting For The Vehicle", to: "Effortless digital financial support", value: 1 },
  { from: "Experiencing how a certain type of vehicle & set-up may feel to drive, own and live with", to: "Following up after test-drive", value: 1 },
  { from: "Trying to ensure the most suitable financial solution", to: "Frictionless guidance", value: 1 },
  { from: "Waiting For The Vehicle", to: "Frictionless guidance", value: 1 },
  { from: "Committing to the vehicle and/or vehicle choice", to: "Vehicle order tracking", value: 1 },
  { from: "Considering a vehicle repurchase", to: "Service Status", value: 1 },
  { from: "Experiencing how a certain type of vehicle & set-up may feel to drive, own and live with", to: "Online aftersales content and tools", value: 1 },
  { from: "Referring Back To Research And Any Choices Made", to: "Holistic and transparent financial options", value: 1 },
  { from: "My vehicle needs my care and attention", to: "Booking and preparing for test-drive", value: 1 },
  { from: "Waiting For The Vehicle", to: "Holistic and transparent financial options", value: 1 },
  { from: "Waiting For The Vehicle", to: "Rewarding loyalty", value: 1 },
  { from: "Committing to the vehicle and/or vehicle choice", to: "Easy enrolment to ownership", value: 1 },
  { from: "Considering a vehicle repurchase", to: "Tools to facilitate online purchasing", value: 1 },
  { from: "Considering a vehicle repurchase", to: "Easy vehicle and service status access", value: 1 },
  { from: "Considering a vehicle repurchase", to: "Rewarding loyalty", value: 1 },
  { from: "Experiencing how a certain type of vehicle & set-up may feel to drive, own and live with", to: "Connected shopper account", value: 1 },
  { from: "Experiencing how a certain type of vehicle & set-up may feel to drive, own and live with", to: "Nissan Knows Me (Personalised interactions and information)", value: 1 },
  { from: "Experiencing how a certain type of vehicle & set-up may feel to drive, own and live with", to: "Tools to facilitate online purchasing", value: 1 },
  { from: "Exploring how the vehicle/service or brand can work harder for me", to: "A single account touch-point throughout ownership", value: 1 },
  { from: "Exploring how the vehicle/service or brand can work harder for me", to: "Easy vehicle and service status access", value: 1 },
  { from: "Exploring how the vehicle/service or brand can work harder for me", to: "Effortless digital financial support", value: 1 },
  { from: "Exploring how the vehicle/service or brand can work harder for me", to: "Rewarding loyalty", value: 1 },
  { from: "Exploring how the vehicle/service or brand can work harder for me", to: "Nissan Knows Me (Personalised interactions and information)", value: 1 },
  { from: "Exploring how the vehicle/service or brand can work harder for me", to: "Digital services booking and management", value: 1 },
  { from: "Receiving The Vehicle", to: "Easy enrolment to ownership", value: 1 },
  { from: "Receiving The Vehicle", to: "A single account touch-point throughout ownership", value: 1 },
  { from: "My vehicle needs my care and attention", to: "Service Status", value: 1 },
  { from: "My vehicle needs my care and attention", to: "A single account touch-point throughout ownership", value: 1 },
  { from: "Trying to ensure the most suitable financial solution", to: "Nissan Knows Me (Personalised interactions and information)", value: 1 },
  { from: "Waiting For The Vehicle", to: "One Seamless Account", value: 1 },
  { from: "Waiting For The Vehicle", to: "Tools to facilitate online purchasing", value: 1 },
  { from: "Waiting For The Vehicle", to: "Digital services booking and management", value: 1 },
  { from: "Trying to understand how the vehicle or service is performing", to: "A single account touch-point throughout ownership", value: 1 },
  { from: "Trying to understand how the vehicle or service is performing", to: "Easy vehicle and service status access", value: 1 },
  { from: "Trying to understand how the vehicle or service is performing", to: "Service Status", value: 1 },
  { from: "Considering a vehicle repurchase", to: "Holistic and transparent financial options", value: 1 },
  { from: "Experiencing how a certain type of vehicle & set-up may feel to drive, own and live with", to: "Rewarding loyalty", value: 1 },
  { from: "Trying to ensure the most suitable financial solution", to: "Connected shopper account", value: 1 },
  { from: "Waiting For The Vehicle", to: "Tailored handover", value: 1 },
  { from: "Waiting For The Vehicle", to: "Online aftersales content and tools", value: 1 },



  { from: "Tools to facilitate online purchasing", to: "Brazil", value: 1 },
  { from: "Online aftersales content and tools", to: "Brazil", value: 1 },
  { from: "Holistic and transparent financial options", to: "Brazil", value: 1 },
  { from: "Frictionless guidance", to: "Brazil", value: 1 },
  { from: "Nissan Knows Me (Personalised interactions and information)", to: "Brazil", value: 1 },
  { from: "Easy enrolment to ownership", to: "Brazil", value: 1 },
  { from: "Booking and preparing for test-drive", to: "Brazil", value: 1 },
  { from: "Tailored test-drive ('Flexible TD' - physical experience)", to: "Brazil", value: 1 },
  { from: "Immersive exploration ", to: "Brazil", value: 1 },
  { from: "One Seamless Account", to: "Brazil", value: 1 },
  { from: "Digital services booking and management", to: "Brazil", value: 1 },
  { from: "Tools to facilitate online purchasing", to: "Canada", value: 1 },
  { from: "Online aftersales content and tools", to: "Canada", value: 1 },
  { from: "Nissan Knows Me (Personalised interactions and information)", to: "Canada", value: 1 },
  { from: "Frictionless guidance", to: "Canada", value: 1 },
  { from: "Vehicle order tracking", to: "Canada", value: 1 },
  { from: "Guided learning", to: "Canada", value: 1 },
  { from: "Easy enrolment to ownership", to: "Canada", value: 1 },
  { from: "One Seamless Account", to: "Canada", value: 1 },
  { from: "Digital services booking and management", to: "Canada", value: 1 },
  { from: "Holistic and transparent financial options", to: "Canada", value: 1 },
  { from: "Tools to facilitate online purchasing", to: "Mexico", value: 1 },
  { from: "Effortless digital financial support", to: "Mexico", value: 1 },
  { from: "Tailored test-drive ('Flexible TD' - physical experience)", to: "Mexico", value: 1 },
  { from: "Immersive exploration ", to: "Mexico", value: 1 },
  { from: "Guided learning", to: "Mexico", value: 1 },
  { from: "Tailored handover", to: "Mexico", value: 1 },
  { from: "Easy enrolment to ownership", to: "Mexico", value: 1 },
  { from: "Tools to facilitate online purchasing", to: "Thailand", value: 1 },
  { from: "Nissan Knows Me (Personalised interactions and information)", to: "Thailand", value: 1 },
  { from: "Immersive exploration ", to: "Thailand", value: 1 },
  { from: "Frictionless guidance", to: "Thailand", value: 1 },
  { from: "Booking and preparing for test-drive", to: "Thailand", value: 1 },
  { from: "Following up after test-drive", to: "Thailand", value: 1 },
  { from: "Holistic and transparent financial options", to: "Thailand", value: 1 },
  { from: "Tools to facilitate online purchasing", to: "UK", value: 1 },
  { from: "Vehicle order tracking", to: "UK", value: 1 },
  { from: "Holistic and transparent financial options", to: "UK", value: 1 },
  { from: "Service Status", to: "UK", value: 1 },
  { from: "Online aftersales content and tools", to: "UK", value: 1 },
  { from: "Immersive exploration ", to: "UK", value: 1 },
  { from: "Guided learning", to: "UK", value: 1 },
  { from: "Booking and preparing for test-drive", to: "UK", value: 1 },
  { from: "Rewarding loyalty", to: "UK", value: 1 },
  { from: "Tailored handover", to: "UK", value: 1 },
  { from: "Frictionless guidance", to: "UK", value: 1 },
  { from: "Easy enrolment to ownership", to: "USA", value: 1 },
  { from: "Holistic and transparent financial options", to: "USA", value: 1 },
  { from: "Tools to facilitate online purchasing", to: "USA", value: 1 },
  { from: "Easy vehicle and service status access", to: "USA", value: 1 },
  { from: "Rewarding loyalty", to: "USA", value: 1 },
  { from: "Service Status", to: "USA", value: 1 },
  { from: "Effortless digital financial support", to: "USA", value: 1 },
  { from: "Connected shopper account", to: "USA", value: 1 },
  { from: "Immersive exploration ", to: "USA", value: 1 },
  { from: "Nissan Knows Me (Personalised interactions and information)", to: "USA", value: 1 },
  { from: "Frictionless guidance", to: "USA", value: 1 },
  { from: "One Seamless Account", to: "USA", value: 1 },
  { from: "A single account touch-point throughout ownership", to: "USA", value: 1 },
  { from: "Digital services booking and management", to: "USA", value: 1 },
  { from: "Tools to facilitate online purchasing", to: "KSA", value: 1 },
  { from: "Holistic and transparent financial options", to: "KSA", value: 1 },
  { from: "Rewarding loyalty", to: "KSA", value: 1 },
  { from: "Immersive exploration ", to: "KSA", value: 1 },
  { from: "Tailored handover", to: "KSA", value: 1 },
  { from: "Frictionless guidance", to: "KSA", value: 1 },
  { from: "Nissan Knows Me (Personalised interactions and information)", to: "KSA", value: 1 },
  { from: "Connected shopper account", to: "KSA", value: 1 },
  { from: "Online aftersales content and tools", to: "KSA", value: 1 }


]);


// Make stuff animate on load
series.appear(1000, 100);
