import { Chart } from "./Chart.js";
import { DataSource } from "./DataSource.js";
import { SpreedSheet } from "./SpreedSheet.js";
let sheet1 = new SpreedSheet();
let chart = new Chart();
let dataSource = new DataSource();
dataSource.addObserver(sheet1);
dataSource.addObserver(chart);
dataSource.setValue('hi');
