var v1 = 0;
var v2 = 0;
var u1 = 0;
var u2 = 0;
var hi1 = 0;
var hi2 = 0;
var df = 0;
var k = 0;
var f1 = 60;
var f2 = 100;

var Terminal = function() {
    this.obj = document.getElementById("terminal");
    this.obj.innerHTML = ">>";
    this.update = function(str) {
        this.value = this.obj.innerHTML;
        this.value += str + "<br>>>";
        this.obj.innerHTML = this.value;
        this.obj.scrollTo(0, this.obj.scrollHeight);
    }
    this.reset = function() {
        this.obj.innerHTML = ">>";
    }
};

var getMousePos = function(canvas, e) {
    var boundingClientRect = canvas.getBoundingClientRect();
    var tx = e.clientX - boundingClientRect.left;
    var ty = e.clientY - boundingClientRect.top;
    return {
        x: tx < 0 ? 0 : tx,
        y: ty < 0 ? 0 : ty
    };
};

var Simulation = function() {
    this.start = function() {
        for (let i = 0; i < buttons.length; i++) {
            if (buttons[i].getAttribute("vlab-action") == "START_SIMULATOR") {
                buttons[i].classList.add("disabled");
                buttons[i].setAttribute("disabled", "true");
                continue;
            }
            buttons[i].classList.remove("disabled");
            buttons[i].removeAttribute("disabled");
        }
        terminal.update("Simulator Started");
    }
    this.stop = function() {
        for (let i = 0; i < buttons.length; i++) {
            if (buttons[i].getAttribute("vlab-action") == "START_SIMULATOR") {
                buttons[i].classList.remove("disabled");
                buttons[i].removeAttribute("disabled");
                continue;
            }
            buttons[i].classList.add("disabled");
            buttons[i].setAttribute("disabled", "true");
        }
        terminal.update("Simulator Stopped");
    }
};

window.onload = function() {
    window.terminal = new Terminal();
    window.simulation = new Simulation();
    window.canvas = document.getElementById("mycanvas");
    window.context = canvas.getContext("2d");
    canvas.clear = function() {
        terminal.reset();
        context.clearRect(0, 0, canvas.width, canvas.height);
    }
    canvas.reset = function() {
        canvas.clear();
        for (let i = 0; i < buttons.length; i++) {
            if (buttons[i].getAttribute("vlab-action") == "START_SIMULATOR") {
                continue;
            }
            buttons[i].classList.remove("disabled");
            buttons[i].removeAttribute("disabled");
        }
    }
    window.buttons = this.document.getElementsByClassName("btn");
    simulation.stop();
    document.getElementById("reset1").addEventListener("click", canvas.reset);
    document.getElementById("poweron").addEventListener("click", simulation.start);
    document.getElementById("poweroff").addEventListener("click", function() {
        canvas.clear();
        simulation.stop();
    });

    document.getElementById("bench1").addEventListener("click", function() {
        bench();
        document.getElementById("bench1").classList.add("disabled");
        document.getElementById("bench1").setAttribute("disabled", "true");
    });

    document.getElementById("object1").addEventListener("click", function() {
        object();
        document.getElementById("object1").classList.add("disabled");
        document.getElementById("object1").setAttribute("disabled", "true");
    });

    document.addEventListener("mousemove", function(e) {
        var mousepose = getMousePos(canvas, e);
        //console.log("x=" + mousepose.x + " y=" + mousepose.y);
    });

    document.getElementById("lens1").addEventListener("click", function() {
        window.lx1 = 250;
        window.ly1 = 229;
        window.flag1 = 0;
        convexlens1(lx1, ly1);
        document.getElementById("bench1").classList.add("disabled");
        document.getElementById("bench1").setAttribute("disabled", "true");
        document.getElementById("object1").classList.add("disabled");
        document.getElementById("object1").setAttribute("disabled", "true");
        document.getElementById("lens1").classList.add("disabled");
        document.getElementById("lens1").setAttribute("disabled", "true");
        document.getElementById("lens2").classList.add("disabled");
        document.getElementById("lens2").setAttribute("disabled", "true");
        document.getElementById("add2").classList.add("disabled");
        document.getElementById("add2").setAttribute("disabled", "true");
        document.getElementById("sub2").classList.add("disabled");
        document.getElementById("sub2").setAttribute("disabled", "true");
        document.getElementById("bothlens").classList.add("disabled");
        document.getElementById("bothlens").setAttribute("disabled", "true");
    });

    document.getElementById("lens2").addEventListener("click", function() {
        window.lx2 = 500;
        window.ly2 = 229;
        window.flag2 = 0;
        convexlens2(lx2, ly2);
        document.getElementById("bench1").classList.add("disabled");
        document.getElementById("bench1").setAttribute("disabled", "true");
        document.getElementById("object1").classList.add("disabled");
        document.getElementById("object1").setAttribute("disabled", "true");
        document.getElementById("lens1").classList.add("disabled");
        document.getElementById("lens1").setAttribute("disabled", "true");
        document.getElementById("lens2").classList.add("disabled");
        document.getElementById("lens2").setAttribute("disabled", "true");
        document.getElementById("add1").classList.add("disabled");
        document.getElementById("add1").setAttribute("disabled", "true");
        document.getElementById("sub1").classList.add("disabled");
        document.getElementById("sub1").setAttribute("disabled", "true");
        document.getElementById("bothlens").classList.add("disabled");
        document.getElementById("bothlens").setAttribute("disabled", "true");
    });

    document.getElementById("bothlens").addEventListener("click", function() {
        //canvas.clear();
        window.flag1 = 1;
        window.lx1 = 250;
        window.ly1 = 229;
        convexlens1(lx1, ly1);
        window.flag2 = 1;
        window.lx2 = 500;
        window.ly2 = 229;
        convexlens2(lx2, ly2);
        document.getElementById("bench1").classList.add("disabled");
        document.getElementById("bench1").setAttribute("disabled", "true");
        document.getElementById("object1").classList.add("disabled");
        document.getElementById("object1").setAttribute("disabled", "true");
        document.getElementById("lens1").classList.add("disabled");
        document.getElementById("lens1").setAttribute("disabled", "true");
        document.getElementById("lens2").classList.add("disabled");
        document.getElementById("lens2").setAttribute("disabled", "true");
        document.getElementById("bothlens").classList.add("disabled");
        document.getElementById("bothlens").setAttribute("disabled", "true");
    });

    document.getElementById("add1").addEventListener("click", function() {
        canvas.clear();
        bench();
        object();
        if (flag1 == 0) {
            if ((lx1 >= 680)) {
                terminal.update("You can't move the Lens A further..");
            } else {
                lx1 += 10;
            }
            convexlens1(lx1, ly1);
            draw1();
        } else {
            if ((lx1 >= 250)) {
                terminal.update("You can't move the Lens A further..");
            } else {
                lx1 += 10;
            }
            convexlens1(lx1, ly1);
            convexlens2(lx2, ly2);
            draw1();
            draw2();
        }
    });

    document.getElementById("sub1").addEventListener("click", function() {
        canvas.clear();
        bench();
        object();
        if (flag1 == 0) {
            if ((lx1 <= 40)) {
                terminal.update("You can't move the Lens A further..");
            } else {
                lx1 -= 10;
            }
            convexlens1(lx1, ly1);
            draw1();
        } else {
            if ((lx1 <= 90)) {
                terminal.update("You can't move the Lens A further..");
            } else {
                lx1 -= 10;
            }
            convexlens1(lx1, ly1);
            convexlens2(lx2, ly2);
            draw1();
            draw2();

        }
    });

    document.getElementById("add2").addEventListener("click", function() {
        canvas.clear();
        bench();
        object();
        if (flag2 == 0) {
            if ((lx2 >= 630)) {
                terminal.update("Optical bench exceeds..");
            } else {
                lx2 += 10;
            }
            convexlens2(lx2, ly2);
            draw2();
        } else {
            if ((lx2 >= 580)) {
                terminal.update("You can't move the Lens B further..");
            } else {
                lx2 += 10;
            }
            convexlens2(lx2, ly2);
            convexlens1(lx1, ly1);
            draw1();
            draw2();
        }
    });

    document.getElementById("sub2").addEventListener("click", function() {
        canvas.clear();
        bench();
        object();
        if (flag2 == 0) {
            if ((lx2 <= 40)) {
                terminal.update("You can't move the Lens B further..");
            } else {
                lx2 -= 10;
            }
            convexlens2(lx2, ly2);
            draw2();
        } else {
            if ((lx2 <= 430)) {
                terminal.update("You can't move the Lens B further..");
            } else {
                lx2 -= 10;
            }
            convexlens2(lx2, ly2);
            convexlens1(lx1, ly1);
            draw1();
            draw2()
        }
    });
}

function convexlens1(x, y) {
    context.beginPath();
    context.arc(x, y, 180, 33 * Math.PI / 180, 326 * Math.PI / 180, true);
    context.lineWidth = 2;
    context.strokeStyle = "black";
    context.stroke();
    context.beginPath();
    context.arc(x + 300, y, 180, 146 * Math.PI / 180, 214 * Math.PI / 180, false);
    context.lineWidth = 2;
    context.strokeStyle = "black";
    context.stroke();
    context.font = "18px Inter";
    context.fillStyle = "black";
    context.fillText("A", lx1 + 144, 355);
}

function convexlens2(x, y) {
    context.beginPath();
    context.arc(x, y, 180, 33 * Math.PI / 180, 326 * Math.PI / 180, true);
    context.lineWidth = 2;
    context.strokeStyle = "black";
    context.stroke();
    context.beginPath();
    context.arc(x + 300, 229, 180, 146 * Math.PI / 180, 214 * Math.PI / 180, false);
    context.lineWidth = 2;
    context.strokeStyle = "black";
    context.stroke();
    /*context.font = "25px Arial";
    context.fillStyle = "black";
    context.fillText("0", 494, 270);*/
    context.font = "18px Inter";
    context.fillStyle = "black";
    context.fillText("B", lx2 + 144, 355);
}

function bench() {
    context.beginPath();
    context.moveTo(49, 229);
    context.lineTo(901, 229);
    context.strokeStyle = "black"
    context.lineWidth = 5;
    context.stroke();
    /*context.font = "25px Arial";
    context.fillStyle = "black";
    context.fillText("0", 494, 270);*/

    for (var i = 0, j = 8; i <= 852; i += 10) {
        if (i % 50 === 0) {
            if (!(i >= 300 && i <= 220)) {
                context.beginPath();
                context.moveTo(50 + i, 229);
                context.lineTo(50 + i, 229 + j + j);
                context.strokeStyle = "black"
                context.lineWidth = 2;
                context.stroke();
            }
        } else {
            context.beginPath();
            context.moveTo(50 + i, 229);
            context.lineTo(50 + i, 229 + j);
            context.strokeStyle = "black"
            context.lineWidth = 1;
            context.stroke();
        }
    }
}

function object() {
    var canvas = document.getElementById("mycanvas");
    var context = canvas.getContext("2d");
    context.beginPath();
    context.moveTo(150, 190);
    context.lineTo(150, 227);
    context.strokeStyle = "blue"
    context.lineWidth = 5;
    context.stroke();
    context.beginPath();
    context.moveTo(150, 180);
    context.lineTo(145, 195);
    context.lineTo(155, 195);
    context.lineTo(150, 180);
    context.strokeStyle = "blue"
    context.lineWidth = 1;
    context.fillStyle = "blue";
    context.fill();
    context.stroke();
    context.font = "18px Inter";
    context.fillStyle = "black";
    context.fillText("Object", 120, 270);
}

function draw1() {
    terminal.update("Object distance from Lens A =" + lx1 + " cm");
    if (flag1 == 0) {
        context.beginPath();
        u1 = lx1;
        var v1 = u1 * f1 / (u1 - f1);
        hi1 = (49 * (-1 * v1)) / u1;
        terminal.update("Image distance from Lens A =" + v1.toFixed(2) + " cm");

        if (lx1 > 60) {
            context.moveTo(150, 180);
            context.lineTo(lx1 + 150, 180);
            context.lineTo(150 + u1 + v1, ly1 - hi1);
            context.strokeStyle = "red"
            context.lineWidth = 3;
            context.stroke();
            context.closePath();

            context.beginPath();
            context.moveTo(150, 180);
            context.lineTo(150 + u1 + v1, ly1 - hi1);
            context.strokeStyle = "green"
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(150 + u1 + v1, 231);
            context.lineTo(150 + u1 + v1, ly1 - hi1 - 5);
            context.strokeStyle = "red"
            context.lineWidth = 5;
            context.stroke();

            context.beginPath();
            context.moveTo(150 + u1 + v1, ly1 - hi1);
            context.lineTo(145 + u1 + v1, ly1 - hi1 - 8);
            context.lineTo(155 + u1 + v1, ly1 - hi1 - 8);
            context.lineTo(150 + u1 + v1, ly1 - hi1);
            context.strokeStyle = "red"
            context.lineWidth = 1;
            context.fillStyle = "red";
            context.fill();
            context.stroke();
        } else if (lx1 == 60) {
            context.moveTo(150, 180);
            context.lineTo(210, 180);
            context.lineTo(528, 454);
            context.strokeStyle = "red";
            context.lineWidth = 3;
            context.stroke();
            context.closePath();

            context.beginPath();
            context.moveTo(150, 180);
            context.lineTo(480, 454);
            context.strokeStyle = "green"
            context.lineWidth = 3;
            context.stroke();

        } else {
            context.moveTo(150, 180);
            context.lineTo(lx1 + 150, 180);
            context.lineTo(150 + u1 + v1, ly1 - hi1);
            context.strokeStyle = "red"
            context.lineWidth = 3;
            context.stroke();
            context.closePath();

            context.beginPath();
            context.moveTo(150, 180);
            context.lineTo(150 + u1 + v1, ly1 - hi1);
            context.strokeStyle = "green"
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(150 + u1 + v1, 231);
            context.lineTo(150 + u1 + v1, ly1 - hi1 + 5);
            context.strokeStyle = "red"
            context.lineWidth = 5;
            context.stroke();

            context.beginPath();
            context.moveTo(150 + u1 + v1, ly1 - hi1);
            context.lineTo(145 + u1 + v1, ly1 - hi1 + 8);
            context.lineTo(155 + u1 + v1, ly1 - hi1 + 8);
            context.lineTo(150 + u1 + v1, ly1 - hi1);
            context.strokeStyle = "red"
            context.lineWidth = 1;
            context.fillStyle = "red";
            context.fill();
            context.stroke();
        }
    } else {
        context.beginPath();
        u1 = lx1;
        v1 = u1 * f1 / (u1 - f1);
        hi1 = (49 * (-1 * v1)) / u1;
        window.di = 150 + u1 + v1;
        window.ih1 = ly1 - hi1;
        window.k = v1;
        terminal.update("Image distance from Lens A =" + v1.toFixed(2) + " cm");

        if (lx1 > 60) {

            context.moveTo(150, 180);
            context.lineTo(lx1 + 150, 180);
            context.lineTo(150 + u1 + v1, ly1 - hi1);
            context.strokeStyle = "red"
            context.lineWidth = 3;
            context.stroke();
            context.closePath();

            context.beginPath();
            context.moveTo(150, 180);
            context.lineTo(150 + u1 + v1, ly1 - hi1);
            context.strokeStyle = "green"
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(150 + u1 + v1, 231);
            context.lineTo(150 + u1 + v1, ly1 - hi1 - 5);
            context.strokeStyle = "red"
            context.lineWidth = 5;
            context.stroke();

            context.beginPath();
            context.moveTo(150 + u1 + v1, ly1 - hi1);
            context.lineTo(145 + u1 + v1, ly1 - hi1 - 8);
            context.lineTo(155 + u1 + v1, ly1 - hi1 - 8);
            context.lineTo(150 + u1 + v1, ly1 - hi1);
            context.strokeStyle = "red"
            context.lineWidth = 1;
            context.fillStyle = "red";
            context.fill();
            context.stroke();
        } else if (lx1 == 60) {
            context.moveTo(150, 180);
            context.lineTo(250, 180);
            context.lineTo(528, 454);
            context.strokeStyle = "red"
            context.lineWidth = 3;
            context.stroke();
            context.closePath();

            context.beginPath();
            context.moveTo(150, 180);
            context.lineTo(480, 454);
            context.strokeStyle = "green"
            context.lineWidth = 3;
            context.stroke();
        } else {
            context.moveTo(150, 180);
            context.lineTo(lx1 + 150, 180);
            context.lineTo(150 + u1 + v1, ly1 - hi1);
            context.strokeStyle = "red"
            context.lineWidth = 3;
            context.stroke();
            context.closePath();

            context.beginPath();
            context.moveTo(150, 180);
            context.lineTo(150 + u1 + v1, ly1 - hi1);
            context.strokeStyle = "green"
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(150 + u1 + v1, 231);
            context.lineTo(150 + u1 + v1, ly1 - hi1 + 5);
            context.strokeStyle = "red"
            context.lineWidth = 5;
            context.stroke();

            context.beginPath();
            context.moveTo(150 + u1 + v1, ly1 - hi1);
            context.lineTo(145 + u1 + v1, ly1 - hi1 + 8);
            context.lineTo(155 + u1 + v1, ly1 - hi1 + 8);
            context.lineTo(150 + u1 + v1, ly1 - hi1);
            context.strokeStyle = "red"
            context.lineWidth = 1;
            context.fillStyle = "red";
            context.fill();
            context.stroke();
        }
    }
}

function draw2() {
    if (flag2 == 0) {
        context.beginPath();
        u2 = lx2;
        var v2 = u2 * f2 / (u2 - f2);
        var hi = 0;
        hi = (49 * (-1 * v2)) / u2;
        terminal.update("Object distance from Lens B =" + lx2 + " cm");
        terminal.update("Image distance from Lens B =" + v2.toFixed(2) + " cm");

        if (lx2 > 100) {
            context.moveTo(150, 180);
            context.lineTo(lx2 + 150, 180);
            context.lineTo(150 + u2 + v2, ly2 - hi);
            context.strokeStyle = "Purple"
            context.lineWidth = "3";
            context.stroke();
            context.closePath();

            context.beginPath();
            context.moveTo(150, 180);
            context.lineTo(150 + u2 + v2, ly2 - hi);
            context.strokeStyle = "rgb(60, 60, 60)";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(150 + u2 + v2, 231);
            context.lineTo(150 + u2 + v2, ly2 - hi - 5);
            context.strokeStyle = "red"
            context.lineWidth = 5;
            context.stroke();

            context.beginPath();
            context.moveTo(150 + u2 + v2, ly2 - hi);
            context.lineTo(145 + u2 + v2, ly2 - hi - 8);
            context.lineTo(155 + u2 + v2, ly2 - hi - 8);
            context.lineTo(150 + u2 + v2, ly2 - hi);
            context.strokeStyle = "red"
            context.lineWidth = 1;
            context.fillStyle = "red";
            context.fill();
            context.stroke();

        } else if (lx2 == 100) {
            context.moveTo(150, 180);
            context.lineTo(250, 180);
            context.lineTo(763, 454);
            context.strokeStyle = "Purple";
            context.lineWidth = 3;
            context.stroke();
            context.closePath();

            context.beginPath();
            context.moveTo(150, 180);
            context.lineTo(673, 454);
            context.strokeStyle = "rgb(60, 60, 60)";
            context.lineWidth = 3;
            context.stroke();

        } else {
            context.moveTo(150, 180);
            context.lineTo(lx2 + 150, 180);
            context.lineTo(150 + u2 + v2, ly2 - hi);
            context.strokeStyle = "Purple";
            context.lineWidth = 3;
            context.stroke();
            context.closePath();

            context.beginPath();
            context.moveTo(150, 180);
            context.lineTo(150 + u2 + v2, ly2 - hi);
            context.strokeStyle = "rgb(60, 60, 60)";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(150 + u2 + v2, 231);
            context.lineTo(150 + u2 + v2, ly2 - hi + 5);
            context.strokeStyle = "red"
            context.lineWidth = 5;
            context.stroke();

            context.beginPath();
            context.moveTo(150 + u2 + v2, ly2 - hi);
            context.lineTo(145 + u2 + v2, ly2 - hi + 8);
            context.lineTo(155 + u2 + v2, ly2 - hi + 8);
            context.lineTo(150 + u2 + v2, ly2 - hi);
            context.strokeStyle = "red"
            context.lineWidth = 1;
            context.fillStyle = "red";
            context.fill();
            context.stroke();
        }
    } else {
        var d = window.lx2 - window.lx1;
        df = d - k;
        u2 = df;
        var v2 = u2 * f2 / (u2 - f2);
        var hi = 0;
        hi = (hi1 * (-1 * v2)) / u2;
        context.beginPath();
        terminal.update("Distance b/w both Lens =" + d + " cm");
        terminal.update("Object distance from Lens B =" + df.toFixed(2) + " cm");
        terminal.update("Image distance from Lens B =" + v2.toFixed(2) + " cm");

        if (v2 > 130) {
            context.moveTo(window.di, window.ih1);
            context.lineTo(lx2 + 150, window.ih1);
            context.lineTo(150 + lx2 + v2, ly2 - hi);
            context.strokeStyle = "Purple";
            context.lineWidth = "3";
            context.stroke();
            context.closePath();

            context.beginPath();
            context.moveTo(window.di, window.ih1);
            context.lineTo(150 + lx2 + v2, ly2 - hi);
            context.strokeStyle = "rgb(60, 60, 60)";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(150 + lx2 + v2, 231);
            context.lineTo(150 + lx2 + v2, ly2 - hi + 5);
            context.strokeStyle = "red"
            context.lineWidth = 5;
            context.stroke();

            context.beginPath();
            context.moveTo(150 + lx2 + v2, ly2 - hi);
            context.lineTo(145 + lx2 + v2, ly2 - hi + 8);
            context.lineTo(155 + lx2 + v2, ly2 - hi + 8);
            context.lineTo(150 + lx2 + v2, ly2 - hi);
            context.strokeStyle = "red"
            context.lineWidth = 1;
            context.fillStyle = "red";
            context.fill();
            context.stroke();
        } else {
            context.moveTo(window.di, window.ih1);
            context.lineTo(lx2 + 150, window.ih1);
            context.lineTo(150 + lx2 + v2, ly2 + hi);
            context.strokeStyle = "Purple";
            context.lineWidth = 3;
            context.stroke();
            context.closePath();

            context.beginPath();
            context.moveTo(window.di, window.ih1);
            context.lineTo(150 + lx2 + v2, ly2 + hi);
            context.strokeStyle = "rgb(60, 60, 60)";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(150 + lx2 + v2, 231);
            context.lineTo(150 + lx2 + v2, ly2 + hi - 5);
            context.strokeStyle = "red"
            context.lineWidth = 5;
            context.stroke();

            context.beginPath();
            context.moveTo(150 + lx2 + v2, ly2 + hi);
            context.lineTo(145 + lx2 + v2, ly2 + hi - 8);
            context.lineTo(155 + lx2 + v2, ly2 + hi - 8);
            context.lineTo(150 + lx2 + v2, ly2 + hi);
            context.strokeStyle = "red"
            context.lineWidth = 1;
            context.fillStyle = "red";
            context.fill();
            context.stroke();
        }
    }
}

function calcf1() {

    var u11 = parseFloat(document.getElementById('u11').value);
    var u12 = parseFloat(document.getElementById('u12').value);
    var u13 = parseFloat(document.getElementById('u13').value);
    var u14 = parseFloat(document.getElementById('u14').value);
    var u15 = parseFloat(document.getElementById('u15').value);

    var v11 = parseFloat(document.getElementById('v11').value);
    var v12 = parseFloat(document.getElementById('v12').value);
    var v13 = parseFloat(document.getElementById('v13').value);
    var v14 = parseFloat(document.getElementById('v14').value);
    var v15 = parseFloat(document.getElementById('v15').value);

    var x1 = parseFloat(parseFloat((u11 * v11) / (u11 + v11)).toFixed(2));
    var x2 = parseFloat(parseFloat((u12 * v12) / (u12 + v12)).toFixed(2));
    var x3 = parseFloat(parseFloat((u13 * v13) / (u13 + v13)).toFixed(2));
    var x4 = parseFloat(parseFloat((u14 * v14) / (u14 + v14)).toFixed(2));
    var x5 = parseFloat(parseFloat((u15 * v15) / (u15 + v15)).toFixed(2));
    var x6 = parseFloat(((x1 + x2 + x3 + x4 + x5) / 5).toFixed(2));
    console.log(typeof(x6));
    console.log(x6);

    document.getElementById('f11').innerHTML = x1;
    document.getElementById('f12').innerHTML = x2;
    document.getElementById('f13').innerHTML = x3;
    document.getElementById('f14').innerHTML = x4;
    document.getElementById('f15').innerHTML = x5;
    document.getElementById('meanf1').innerHTML = x6;
}

function calcf2() {

    var u21 = parseFloat(document.getElementById('u21').value);
    var u22 = parseFloat(document.getElementById('u22').value);
    var u23 = parseFloat(document.getElementById('u23').value);
    var u24 = parseFloat(document.getElementById('u24').value);
    var u25 = parseFloat(document.getElementById('u25').value);

    var v21 = parseFloat(document.getElementById('v21').value);
    var v22 = parseFloat(document.getElementById('v22').value);
    var v23 = parseFloat(document.getElementById('v23').value);
    var v24 = parseFloat(document.getElementById('v24').value);
    var v25 = parseFloat(document.getElementById('v25').value);

    var x1 = parseFloat(parseFloat((u21 * v21) / (u21 + v21)).toFixed(2));
    var x2 = parseFloat(parseFloat((u22 * v22) / (u22 + v22)).toFixed(2));
    var x3 = parseFloat(parseFloat((u23 * v23) / (u23 + v23)).toFixed(2));
    var x4 = parseFloat(parseFloat((u24 * v24) / (u24 + v24)).toFixed(2));
    var x5 = parseFloat(parseFloat((u25 * v25) / (u25 + v25)).toFixed(2));
    var x6 = parseFloat(((x1 + x2 + x3 + x4 + x5) / 5).toFixed(2));

    document.getElementById('f21').innerHTML = x1;
    document.getElementById('f22').innerHTML = x2;
    document.getElementById('f23').innerHTML = x3;
    document.getElementById('f24').innerHTML = x4;
    document.getElementById('f25').innerHTML = x5;
    document.getElementById('meanf2').innerHTML = x6;
}

function calcF() {

    var f11 = parseFloat(document.getElementById('f11').value);
    var f12 = parseFloat(document.getElementById('f12').value);
    var f13 = parseFloat(document.getElementById('f13').value);
    var f14 = parseFloat(document.getElementById('f14').value);
    var f15 = parseFloat(document.getElementById('f15').value);

    var f21 = parseFloat(document.getElementById('f21').value);
    var f22 = parseFloat(document.getElementById('f22').value);
    var f23 = parseFloat(document.getElementById('f23').value);
    var f24 = parseFloat(document.getElementById('f24').value);
    var f25 = parseFloat(document.getElementById('f25').value);

    var d1 = parseFloat(document.getElementById('d1').value);
    var d2 = parseFloat(document.getElementById('d2').value);
    var d3 = parseFloat(document.getElementById('d3').value);
    var d4 = parseFloat(document.getElementById('d4').value);
    var d5 = parseFloat(document.getElementById('d5').value);

    /*var F1 = parseFloat(document.getElementById('F1').value);
    var F2 = parseFloat(document.getElementById('F2').value);
    var F3 = parseFloat(document.getElementById('F3').value);
    var F4 = parseFloat(document.getElementById('F4').value);
    var F5 = parseFloat(document.getElementById('F5').value);
    window.F = parseFloat(document.getElementById('meanF').value);*/

    var x1 = parseFloat(parseFloat((f11 * f21) / (f11 + f21 - d1)).toFixed(2));
    var x2 = parseFloat(parseFloat((f12 * f22) / (f12 + f22 - d2)).toFixed(2));
    var x3 = parseFloat(parseFloat((f13 * f23) / (f13 + f23 - d3)).toFixed(2));
    var x4 = parseFloat(parseFloat((f14 * f24) / (f14 + f24 - d4)).toFixed(2));
    var x5 = parseFloat(parseFloat((f15 * f25) / (f15 + f25 - d5)).toFixed(2));
    window.x6 = parseFloat(((x1 + x2 + x3 + x4 + x5) / 5).toFixed(2));
    var meanv = parseFloat(document.getElementById("meanF").value);

    if ((window.x6).toFixed(0) == meanv.toFixed(0)) {
        terminal.update("Correct Result");
    } else {
        terminal.update("Incorrect Result");
    }
}

function verifyF() {
    var calcf = window.x6;
    var res = parseFloat(document.getElementById("meanF").value);
    var perError = 100 * (calcf - res) / calcf;
    document.getElementById('verify').innerHTML = "Percentage Error : " + perError.toFixed(2) + "%";
    terminal.update("Percentage Error : " + perError.toFixed(2) + "%");
}