

$(function () {
  const $bl = $(".thumbs-block"),
    $th = $(".thumbs"),
    blW = $bl.outerWidth(),
    blSW = $bl.prop("scrollWidth"),
    wDiff = blSW / blW - 1, // widths difference ratio
    mPadd = 60, // Mousemove Padding
    damp = 50; // Mousemove response softness

  let posX = 0,
    mX2 = 0, // Modified mouse position
    mmAA = blW - mPadd * 2, // The mousemove available area
    mmAAr = blW / mmAA, // get available mousemove fidderence ratio
    itv = null;

  const anim = () => {
    posX += (mX2 - posX) / damp; // zeno's paradox equation "catching delay"
    $th.css({
      transform: `translateX(${-posX * wDiff}px)`,
    });
  };

  $bl
    .on("mousemove", function (e) {
      const mouseX = e.pageX - $(this).prop("offsetLeft");
      mX2 = Math.min(Math.max(0, mouseX - mPadd), mmAA) * mmAAr;
    })
    .on("mouseenter", function (e) {
      itv = setInterval(anim, 10);
    })
    .on("mouseleave", function () {
      clearInterval(itv);
    });
});

const imageContainer = document.querySelector(".zoom");
imageContainer.onmousemove = (event) => {
  zoom(event);
};

const zoom = (e) => {
  let imageZoom = e.currentTarget;
  e.offsetX ? (offsetX = e.offsetX) : (offsetX = e.touches[0].pageX);
  e.offsetY ? (offsetY = e.offsetY) : (offsetY = e.touches[0].pageY);
  x = (offsetX / imageZoom.offsetWidth) * 100;
  y = (offsetY / imageZoom.offsetHeight) * 100;
  imageZoom.style.backgroundPosition = x + "% " + y + "%";
};

const thumbs = document.getElementsByClassName("thumb");
for (var i = 0; i < thumbs.length; i++) {
  thumbs[i].onclick = function () {
    document.querySelector(".zoom img").src = this.src;
    document.querySelector(".zoom").style.backgroundImage =
      "url(" + this.src + ")";
  };
}

/** Gallery */

$(".photo").on("click", function () {
  $(".photo").toggleClass("away");
  $(this).removeClass("away").toggleClass("active");
});

/* toggle */

// Show an element
var scroll = document.getElementsByClassName('has-scroll-smooth');
var show = function (elem) {
  // Get the natural height of the element
  var getHeight = function () {
    elem.style.display = "block"; // Make it visible
    var height = elem.scrollHeight + "px"; // Get it's height
    elem.style.display = ""; //  Hide it again
    return height;
  };

  var height = getHeight(); // Get the natural height
  elem.classList.add("is-visible"); // Make the element visible
  elem.style.height = height; // Update the max-height
  scroll.classList.add('noscroll');
};

// Hide an element
var hide = function (elem) {
  // Give the element a height to change from
  elem.style.height = elem.scrollHeight + "px";
  elem.classList.add("mask-hide");

  // Set the height back to 0
  window.setTimeout(function () {
    elem.style.height = "0";
  }, 1);

  // When the transition is complete, hide it
  window.setTimeout(function () {
    elem.classList.remove("is-visible");
    elem.classList.remove("mask-hide");
    html.classList.add('noscroll');
  }, 2000);
};

// Toggle element visibility
var toggle = function (elem, timing) {
  // If the element is visible, hide it
  if (elem.classList.contains("is-visible")) {
    hide(elem);
    return;
  }

  // Otherwise, show it
  show(elem);
};

// Listen for click events
document.addEventListener(
  "click",
  function (event) {
    // Make sure clicked element is our toggle
    if (!event.target.classList.contains("toggle")) return;

    // Prevent default link behavior
    event.preventDefault();

    // Get the content
    var content = document.querySelector(event.target.hash);
    if (!content) return;

    // Toggle the content
    toggle(content);
  },
  false
);

/**Drag horizontal */

const slider = document.querySelector(".thumbs-block");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseup", () => {
  isDown = false;
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 1; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
});

(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "07/30/",
      birthday = dayMonth + yyyy;
  
  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end
  
  const countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    

        const now = new Date().getTime(),
              distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
          document.getElementById("headline").innerText = "Lanzamiento del video";
          document.getElementById("countdown").style.display = "none";
          document.getElementById("content").style.display = "block";
          clearInterval(x);
        }
        //seconds
      }, 0)
  }());


  //Gráfica Escalamiento 80s

  // create 1 data_set
  var data1 = [
    { group: "1978-1982<br>Julio Cesar Turbay Ayala", value: 2224 },
    { group: "1982-1986<br>Belisario Betancur Cuartas", value: 19819 },
    { group: "1986-1990<br>Virgilio Barco Vargas", value: 87203 },
  ];

  var data2 = [
    { group: "1978-1982<br>Julio Cesar Turbay Ayala", value: 2224 },
    { group: "1982-1986<br>Belisario Betancur Cuartas", value: 19819 },
    { group: "1986-1990<br>Virgilio Barco Vargas", value: 87203 },
    { group: "1990-1994<br>César Gaviria Trujillo", value: 133900 },
    { group: "1994-1998<br>Ernesto Samper Pizano", value: 548686 },
  ];

  var data3 = [
    { group: "1978-1982<br>Julio Cesar Turbay Ayala", value: 2224 },
    { group: "1982-1986<br>Belisario Betancur Cuartas", value: 19819 },
    { group: "1986-1990<br>Virgilio Barco Vargas", value: 87203 },
    { group: "1990-1994<br>César Gaviria Trujillo", value: 133900 },
    { group: "1994-1998<br>Ernesto Samper Pizano", value: 548686 },
    { group: "1998-2002<br>Andrés Pastrana Arango ", value: 1827331 },
    { group: "2002-2006<br>Álvaro Uribe Velez -I ", value: 1630614 },
  ];

  var data4 = [
    { group: "1978-1982<br>Julio Cesar Turbay Ayala", value: 2224 },
    { group: "1982-1986<br>Belisario Betancur Cuartas", value: 19819 },
    { group: "1986-1990<br>Virgilio Barco Vargas", value: 87203 },
    { group: "1990-1994<br>César Gaviria Trujillo", value: 133900 },
    { group: "1994-1998<br>Ernesto Samper Pizano", value: 548686 },
    { group: "1998-2002<br>Andrés Pastrana Arango ", value: 1827331 },
    { group: "2002-2006<br>Álvaro Uribe Velez -I ", value: 1630614 },
    { group: "2006-2010<br>Álvaro Uribe Velez -II", value: 1364398 },
    { group: "2010-2014<br>Juan Manuel Santos", value: 969576 },
  ];

  // set the dimensions and margins of the graph
  var margin = { top: 30, right: 30, bottom: 70, left: 60 },
    width = 1250 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;

  // append the svg object to the body of the page
  var svg = d3
    .select("#escalamiento")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // Initialize the X axis
  var x = d3.scaleBand().range([0, width]).padding(0.2);
  var xAxis = svg
    .append("g")
    .attr("transform", "translate(0," + height + ")");

  // Initialize the Y axis
  var y = d3.scaleLinear().range([height, 0]);
  var yAxis = svg.append("g").attr("class", "myYaxis");

  // A function that create / update the plot for a given variable:
  function update(data) {
    // Update the X axis
    x.domain(
      data.map(function (d) {
        return d.group;
      })
    );
    xAxis.call(d3.axisBottom(x));

    // Update the Y axis
    y.domain([
      0,
      d3.max(data, function (d) {
        return d.value;
      }),
    ]);
    yAxis.transition().duration(1000).call(d3.axisLeft(y));

    // Create the u variable
    var u = svg.selectAll("rect").data(data);

    u.enter()
      .append("rect") // Add a new rect for each new elements
      .merge(u) // get the already existing elements as well
      .transition() // and apply changes to all of them
      .duration(1000)
      .attr("x", function (d) {
        return x(d.group);
      })
      .attr("y", function (d) {
        return y(d.value);
      })
      .attr("width", x.bandwidth())
      .attr("height", function (d) {
        return height - y(d.value);
      })
      .attr("fill", "#993333");

    // If less group in the new dataset, I delete the ones not in use anymore
    u.exit().remove();
  }

  // Initialize the plot with the first dataset
  update(data1);


  //Gráfica Agravamiento

  // create 1 data_set
  var data1 = [
    { group: "1978-1982", value: 2224 },
    { group: "1982-1986", value: 19819 },
    { group: "1986-1990", value: 87203 },
  ];
    
/*    Julio Cesar Turbay Ayala
    Belisario Betancur Cuartas
    Virgilio Barco Vargas*/

  var data2 = [
    { group: "1978-1982", value: 2224 },
    { group: "1982-1986", value: 19819 },
    { group: "1986-1990", value: 87203 },
    { group: "1990-1994", value: 133900 },
    { group: "1994-1998", value: 548686 },
  ];
    
    /*Julio Cesar Turbay Ayala
    Belisario Betancur Cuartas
    Virgilio Barco Vargas
    César Gaviria Trujillo
    Ernesto Samper Pizano*/

  var data3 = [
    { group: "1978-1982<br>Julio Cesar Turbay Ayala", value: 2224 },
    { group: "1982-1986", value: 19819 },
    { group: "1986-1990", value: 87203 },
    { group: "1990-1994", value: 133900 },
    { group: "1994-1998", value: 548686 },
    { group: "1998-2002", value: 1827331 },
    { group: "2002-2006", value: 1630614 },
  ];
    
    /*Julio Cesar Turbay Ayala
    Belisario Betancur Cuartas
    Virgilio Barco Vargas
    César Gaviria Trujillo
    Ernesto Samper Pizano
    Andrés Pastrana Arango
    Álvaro Uribe Velez -I*/

  var data4 = [
    { group: "1978-1982", value: 2224 },
    { group: "1982-1986", value: 19819 },
    { group: "1986-1990", value: 87203 },
    { group: "1990-1994", value: 133900 },
    { group: "1994-1998", value: 548686 },
    { group: "1998-2002", value: 1827331 },
    { group: "2002-2006", value: 1630614 },
    { group: "2006-2010", value: 1364398 },
    { group: "2010-2014", value: 969576 },
  ];
    
    /*Julio Cesar Turbay Ayala
    Belisario Betancur Cuartas
    Virgilio Barco Vargas
    César Gaviria Trujillo
    Ernesto Samper Pizano
    Andrés Pastrana Arango
    Álvaro Uribe Velez -I 
    Álvaro Uribe Velez -II
    Juan Manuel Santos*/

  // set the dimensions and margins of the graph
  var margin = { top: 30, right: 30, bottom: 70, left: 60 },
    width = 1250 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;

  // append the svg object to the body of the page
  var svg = d3
    .select("#agravamiento")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // Initialize the X axis
  var x = d3.scaleBand().range([0, width]).padding(0.2);
  var xAxis = svg
    .append("g")
    .attr("transform", "translate(0," + height + ")");

  // Initialize the Y axis
  var y = d3.scaleLinear().range([height, 0]);
  var yAxis = svg.append("g").attr("class", "myYaxis");

  // A function that create / update the plot for a given variable:
  function update(data) {
    // Update the X axis
    x.domain(
      data.map(function (d) {
        return d.group;
      })
    );
    xAxis.call(d3.axisBottom(x));

    // Update the Y axis
    y.domain([
      0,
      d3.max(data, function (d) {
        return d.value;
      }),
    ]);
    yAxis.transition().duration(1000).call(d3.axisLeft(y));

    // Create the u variable
    var u = svg.selectAll("rect").data(data);

    u.enter()
      .append("rect") // Add a new rect for each new elements
      .merge(u) // get the already existing elements as well
      .transition() // and apply changes to all of them
      .duration(1000)
      .attr("x", function (d) {
        return x(d.group);
      })
      .attr("y", function (d) {
        return y(d.value);
      })
      .attr("width", x.bandwidth())
      .attr("height", function (d) {
        return height - y(d.value);
      })
      .attr("fill", "#993333");

    // If less group in the new dataset, I delete the ones not in use anymore
    u.exit().remove();
  }

  // Initialize the plot with the first dataset
  update(data2);