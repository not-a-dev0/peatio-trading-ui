/*Script 1*/
filterMarkets("all");
function filterMarkets(market) {
  var x = document.getElementsByClassName("filter-row");
  if (market == "all") market = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (var i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(market) > -1) w3AddClass(x[i], "show");
  }
}
// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}
// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var arr1 = element.className.split(" ");
  var arr2 = name.split(" ");
  for (var i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}
// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("base_pair_menu");
var btns = btnContainer.getElementsByClassName("market-base");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
/*Script 2*/
function chartSelector(evt, key) {
  var x = document.getElementById('time_choices');
  var y = document.getElementById('type_choices');
  var z = document.getElementById('indicator_choices');
  var timeDownArrow = document.getElementById('time_arrow_down');
  var timeUpArrow = document.getElementById('time_arrow_up');
  var typeDownArrow = document.getElementById('type_arrow_down');
  var typeUpArrow = document.getElementById('type_arrow_up');
  var indicatorDownArrow = document.getElementById('indicator_arrow_down');
  var indicatorUpArrow = document.getElementById('indicator_arrow_up');
  if (key === 'time') {
    x.classList.toggle('show');
    timeDownArrow.classList.toggle('hide');
    timeUpArrow.classList.toggle('hide');
  }
  if (key === 'type') {
    y.classList.toggle('show');
    typeDownArrow.classList.toggle('hide');
    typeUpArrow.classList.toggle('hide');
  }
  if (key === 'indicator') {
    z.classList.toggle('show');
    indicatorDownArrow.classList.toggle('hide');
    indicatorUpArrow.classList.toggle('hide');
  }
}
/*Script 3*/
TradingView.onready(function()
{
  var widget = window.tvWidget = new TradingView.widget({
    debug: true,
    symbol: window.gon.market.id.toUpperCase(),
    datafeed: new Datafeeds.UDFCompatibleDatafeed('https://tvprod.falcon.ovex.io'),
    interval: '60',
    container_id: "tv_chart_container",
    library_path: "/trading-ui-assets/charting_library/",
    locale: 'en',
    disabled_features: ["use_localstorage_for_settings"],
    enabled_features: [],
    client_id: 'test',
    user_id: 'public_user_id',
    fullscreen: false,
    autosize: true,
    //  Regression Trend-related functionality is not implemented yet, so it's hidden for a while
    drawings_access: { type: 'black', tools: [ { name: "Regression Trend" } ] },
    overrides: {
      "paneProperties.background": "rgb(38, 45, 51)",
      "paneProperties.vertGridProperties.color": "#2F383F",
      "paneProperties.horzGridProperties.color": "#2F383F",
      "mainSeriesProperties.candleStyle.wickUpColor": '#53B987',
      "mainSeriesProperties.candleStyle.wickDownColor": '#B96053',
    }
  });
});
/*Script 4*/
/* Chatbro Widget Embed Code Start */
function ChatbroLoader(chats,async){async=!1!==async;var params={embedChatsParameters:chats instanceof Array?chats:[chats],lang:navigator.language||navigator.userLanguage,needLoadCode:'undefined'==typeof Chatbro,embedParamsVersion:localStorage.embedParamsVersion,chatbroScriptVersion:localStorage.chatbroScriptVersion},xhr=new XMLHttpRequest;xhr.withCredentials=!0,xhr.onload=function(){eval(xhr.responseText)},xhr.onerror=function(){console.error('Chatbro loading error')},xhr.open('GET','//www.chatbro.com/embed.js?'+btoa(unescape(encodeURIComponent(JSON.stringify(params)))),async),xhr.send()}
/* Chatbro Widget Embed Code End */
ChatbroLoader({encodedChatId: '32dNL'});
document.addEventListener('DOMContentLoaded', function() {
  var orderbook = document.getElementById('table_orderbook_asks');
  orderbook.scrollTop = orderbook.scrollHeight;
});

setInterval(function() {
    x = 0;
    $('#table_orderbook_bids tbody tr').each(function() {
        x = x + parseFloat(this.dataset.volume)
    });
    $('#table_orderbook_bids tbody tr').each(function() {
        this.style.background = `linear-gradient(to left, rgba(83,185,135,0.2) ${(Math.min((parseFloat(this.dataset.volume)/x)*100, 100))}%, transparent 0)`
        this.style.backgroundColor = 'transparent';
    });
 
    x = 0;
    $('#table_orderbook_asks tbody tr').each(function() {
        x = x + parseFloat(this.dataset.volume)
    });
 
    $('#table_orderbook_asks tbody tr').each(function() {
        this.style.background = `linear-gradient(to left, rgba(185,96,83,0.2) ${(Math.min((parseFloat(this.dataset.volume)/x)*100, 100))}%, transparent 0)`
        this.style.backgroundColor = 'transparent';
    });
}, 1000);

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function marketBtn() {
  document.getElementById("market_list").classList.toggle("show");
  document.getElementById("arrow_down").classList.toggle("hide");
  document.getElementById("arrow_up").classList.toggle("show");
}
document.getElementById('ask_bid_link').click();
function bidAskTabs(tabId) {
  var target = document.getElementById(tabId);
  var ticker = document.getElementById('ticker');
  var bids = document.getElementById('bid_tab');
  var bidTable = document.getElementById('table_orderbook_bids');
  var askTable = document.getElementById('table_orderbook_asks');
  var asks = document.getElementById('ask_tab');
  var askTab = document.getElementById('ask_link');
  var bidTab = document.getElementById('bid_link');
  var askBidTab = document.getElementById('ask_bid_link');

  if (tabId === 'ask_tab') {
    if (asks.classList.contains('hide')) {
      asks.classList.remove('hide');
    }
    if (!(askTable.classList.contains('asks-table'))) {
      askTable.classList.add('asks-table');
    }
    if (!(asks.classList.contains('asks-div'))) {
      asks.classList.add('asks-div');
    }

    askTab.classList.add('active');
    if (bidTab.classList.contains('active')) {
      bidTab.classList.remove('active');
    }
    if (askBidTab.classList.contains('active')) {
      askBidTab.classList.remove('active');
    }
    if (!(bids.classList.contains('hide'))) {
      bids.classList.add('hide')
    }
    if (!(ticker.classList.contains('asks-ticker-container'))) {
      ticker.classList.add('asks-ticker-container');
    }
    if (ticker.classList.contains('ticker-container')) {
      ticker.classList.remove('ticker-container');
    }
    if (ticker.classList.contains('bids-ticker-container')) {
      ticker.classList.remove('bids-ticker-container');
    }

  }
  if (tabId === 'bid_tab') {
    if (bids.classList.contains('hide')) {
      bids.classList.remove('hide');
    }

    if (!(bidTable.classList.contains('bids-table'))) {
      bidTable.classList.add('bids-table');
    }
    if (!(bids.classList.contains('bids-div'))) {
      bids.classList.add('bids-div');
    }

    bidTab.classList.add('active');
    if (askTab.classList.contains('active')) {
      askTab.classList.remove('active');
    }
    if (askBidTab.classList.contains('active')) {
      askBidTab.classList.remove('active');
    }
    if (!(asks.classList.contains('hide'))) {
      asks.classList.add('hide')
    }
    if (!(ticker.classList.contains('bids-ticker-container'))) {
      ticker.classList.add('bids-ticker-container');
    }
    if (ticker.classList.contains('ticker-container')) {
      ticker.classList.remove('ticker-container');
    }
    if (ticker.classList.contains('asks-ticker-container')) {
      ticker.classList.remove('asks-ticker-container');
    }
  }
  if (tabId === 'ask_bid_tab') {
    if (bids.classList.contains('hide')) {
      bids.classList.remove('hide');
    }
    if (asks.classList.contains('hide')) {
      asks.classList.remove('hide');
    }
    if (askTable.classList.contains('asks-table')) {
      askTable.classList.remove('asks-table');
    }
    if (asks.classList.contains('asks-div')) {
      asks.classList.remove('asks-div');
    }
    if (bidTable.classList.contains('bids-table')) {
      bidTable.classList.remove('bids-table');
    }
    if (bids.classList.contains('bids-div')) {
      bids.classList.remove('bids-div');
    }
    askBidTab.classList.add('active');
    if (askTab.classList.contains('active')) {
      askTab.classList.remove('active');
    }
    if (bidTab.classList.contains('active')) {
      bidTab.classList.remove('active');
    }
    if (!(ticker.classList.contains('ticker-container'))) {
      ticker.classList.add('ticker-container');
    }
    if (ticker.classList.contains('asks-ticker-container')) {
      ticker.classList.remove('asks-ticker-container');
    }
    if (ticker.classList.contains('bids-ticker-container')) {
      ticker.classList.remove('bids-ticker-container');
    }
  }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!document.getElementsByClassName('market-btn')[0].contains(event.target) && !document.getElementById('market_list').contains(event.target)) {

    var dropdowns = document.getElementsByClassName("market-list");
    var arrowUp = document.getElementById('arrow_up');
    var arrowDown = document.getElementById('arrow_down');

    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
    if (arrowUp.classList.contains('show')) {
      arrowUp.classList.remove('show');
    }
    if (arrowDown.classList.contains('hide')) {
      arrowDown.classList.remove('hide');
    }
  }
}
document.getElementById("default_chart_tab").click();
var candleFlag = true;
var depthFlag = false;
function openChart(evt, chartName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("chart-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    

    document.getElementById(chartName).style.display = "block";
    $(window).resize();
    
    evt.currentTarget.className += " active";

    var x = document.getElementById("range_switch");
    var y = document.getElementById("indicator_switch_wrapper");
    
    if (chartName != "candlestick") {
      x.style.display = "none";
      y.style.display = "none";
    }
    if (chartName === "candlestick") {
      x.style.display = "block";
      y.style.display = "block";
    }

}
document.getElementById("my_orders_default_tab").click();
function openMyOrdersTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("my-orders-tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("my-orders-tab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("default-limit").click();
function openOrderForm(evt, orderType) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    limitcontent = document.getElementsByClassName("limit-order-form");
    marketcontent = document.getElementsByClassName("market-order-form");
    for (i = 0; i < limitcontent.length; i++) {
      limitcontent[i].style.display = "none";
      marketcontent[i].style.display = "none";

    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("new-trade-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    orderForm = document.getElementsByClassName(orderType)
    for (i=0; i < orderForm.length; i++) {
      orderForm[i].style.display = "block";
    }
    evt.currentTarget.className += " active";
}

          