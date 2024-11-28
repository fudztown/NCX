looker.plugins.visualizations.add({
  id: "custom-pivot-table",
  label: "Custom Pivot Table",
  options: {},

  create: function (element, config) {
    // Create a container for the table
    element.innerHTML = `<div id="pivot-table"></div>`;
  },

  update: function (data, element, config, queryResponse) {
    const pivotTable = document.getElementById("pivot-table");
    pivotTable.innerHTML = ""; // Clear previous table

    // Extract fields
    const dimensions = queryResponse.fields.dimension_like;
    const metrics = queryResponse.fields.measure_like;

    // Create the table
    const table = document.createElement("table");
    table.className = "custom-table";

    // Create table header
    const headerRow = document.createElement("tr");

    // Add first column header (Metric Name)
    const metricHeader = document.createElement("th");
    metricHeader.innerText = "Metric Name";
    metricHeader.className = "subsection-header"; // Apply subsection header style
    headerRow.appendChild(metricHeader);

    // Add month or dimension headers
    dimensions.forEach((dim) => {
      const th = document.createElement("th");
      th.innerText = dim.label_short || dim.label;
      th.className = "center-align"; // Center-align column headers
      headerRow.appendChild(th);
    });

    table.appendChild(headerRow);

    // Add rows for metrics
    metrics.forEach((metric) => {
      const row = document.createElement("tr");

      // Add metric name as the first column
      const metricCell = document.createElement("td");
      metricCell.innerText = metric.label_short || metric.label;

      // Style for specific rows
      if (metric.label_short.includes("Margin")) {
        metricCell.className = "margin-row";
      } else if (metric.label_short.includes("Total")) {
        metricCell.className = "total-row";
      }
      row.appendChild(metricCell);

      // Add values for each dimension
      data.forEach((record) => {
        const cell = document.createElement("td");

        // Extract metric value
        const value = record[metric.name].value || 0;

        // Apply conditional formatting for negative values
        if (value < 0) {
          cell.className = "negative";
        } else if (metric.label_short.includes("%")) {
          cell.className = "percentage";
        }

        // Format the value
        cell.innerText = typeof value === "number" ? value.toLocaleString() : value;
        row.appendChild(cell);
      });

      table.appendChild(row);
    });

    pivotTable.appendChild(table);
  }
});
