'use strict';

var WINDOW_WIDTH = 420;
var WINDOW_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 20;
var FONT_GAP = 16;
var CELL_GAP = 50;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var PLAYER_COLOR = 'hsl(0,100%,50%)';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, WINDOW_WIDTH, WINDOW_HEIGHT);
};

var getMaxElement = function (array) {
  var max = array[0];
  for (var i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'white');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP + CELL_GAP, CLOUD_Y + GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP + CELL_GAP, CLOUD_Y + GAP + FONT_GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    var currentBarHeight = BAR_HEIGHT * times[i] / maxTime;
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], CLOUD_X + BAR_WIDTH * i * 2 + GAP + CELL_GAP, WINDOW_HEIGHT - GAP);
    ctx.fillText(Math.floor(times[i]) + ' мс', CLOUD_X + BAR_WIDTH * i * 2 + GAP + CELL_GAP, WINDOW_HEIGHT + CLOUD_Y - GAP * 2 - FONT_GAP - currentBarHeight, BAR_WIDTH, currentBarHeight);
    ctx.fillStyle = (names[i] === 'Вы') ? PLAYER_COLOR : 'hsl(240,' + (Math.random() * (100 - 10) + 10) + '%,50%)';

    ctx.fillRect(CLOUD_X + BAR_WIDTH * i * 2 + GAP + CELL_GAP, WINDOW_HEIGHT + CLOUD_Y - GAP - FONT_GAP - currentBarHeight, BAR_WIDTH, currentBarHeight);
  }
};
