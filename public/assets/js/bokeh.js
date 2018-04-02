$(".background__canvas").each(function() {
  var el = $("<canvas />").appendTo(this);
  draw_canvas(el.get(0), "#230D1C");
});
function draw_canvas(el, color) {
  var rand = function(min, max) {
      return Math.random() * (max - min) + min;
    },
    hsla = function(h, s, l, a) {
      return "hsla(" + h + "," + s + "%," + l + "%," + a + ")";
    },
    hexToHue = function(color) {
      var r = parseInt(color.substr(1, 2), 16);
      var g = parseInt(color.substr(3, 2), 16);
      var b = parseInt(color.substr(5, 2), 16);
      var max = Math.max(r, g, b),
        min = Math.min(r, g, b);
      var h,
        s,
        l = (max + min) / 2;
      if (max == min) {
        h = s = 0; // achromatic
      } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
          case g:
            h = (b - r) / d + 2;
            break;
          case b:
            h = (r - g) / d + 4;
            break;
        }
        h /= 6;
      }
      return h * 360;
    },
    ctx = el.getContext("2d"),
    cw = (el.width = el.parentElement.offsetWidth),
    ch = (el.height = el.parentElement.offsetHeight),
    parts = [],
    twopi = Math.PI * 2,
    sizeBase = cw + ch,
    count = 50,
    hue = hexToHue(color),
    opt = {
      radiusMin: 1,
      radiusMax: sizeBase * 0.04,
      blurMin: 0,
      blurMax: 50,
      hueMin: hue,
      hueMax: hue + 13,
      saturationMin: 20,
      saturationMax: 40,
      lightnessMin: 0,
      lightnessMax: 30,
      alphaMin: 0.1,
      alphaMax: 0.5
    },
    draw = function() {
      //console.log('draw-function');
      while (count--) {
        var radius = rand(opt.radiusMin, opt.radiusMax);
        var role = Math.floor(rand(1, 4)); // Lights and Shadows
        var part = {
          radius: radius,
          blur: radius * rand(0.3, 1),
          x: rand(0, cw),
          y: rand(0, ch),
          hue: rand(opt.hueMin, opt.hueMax),
          saturation: rand(opt.saturationMin, opt.saturationMax),
          lightness: rand(opt.lightnessMin, opt.lightnessMax),
          alpha: rand(opt.alphaMin, opt.alphaMax),
          angle: rand(0, twopi),
          vel: rand(0.01, 0.1),
          tick: rand(0, 10000),
          shape: Math.floor(rand(1, 3)),
          role: role //1 = shadow
        };
        if (part.role == 1) {
          part.radius = opt.radiusMax * rand(1, 3.5);
          part.blur = part.radius * rand(0.75, 3.5);
          part.vel = rand(0.01, 0.04);
        }
        parts[count] = part;
      }
    },
    drawStar = function(cx, cy, spikes, outerRadius, innerRadius, angle) {
      var rot = Math.PI / 2 * 3;
      var x = cx;
      var y = cy;
      var step = Math.PI / spikes;
      ctx.beginPath();
      ctx.moveTo(cx, cy - outerRadius);
      for (i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += step;
        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += step;
      }
      ctx.lineTo(cx, cy - outerRadius);
      ctx.closePath();
    },
    loop = function() {
      //console.log('loop-function');
      requestAnimationFrame(loop);
      ctx.clearRect(0, 0, cw, ch);
      ctx.globalCompositeOperation = "destination-over";
      var i = parts.length;
      while (i--) {
        var part = parts[i];
        part.x += Math.cos(part.angle) * part.vel;
        part.y += Math.sin(part.angle) * part.vel;
        part.angle += rand(-0.05, 0.05);
        ctx.save();
        // Shape 1 means it's a star
        if (part.shape == 1) {
          ctx.translate(part.x - part.radius / 2, part.y - part.radius / 2);
          ctx.rotate(Math.PI / (0.075 + Math.cos(part.tick * 0.0001) * 0.05));
          drawStar(part.x, part.y, 5, part.radius, part.radius / 2);
        } else {
          ctx.beginPath();
          ctx.arc(part.x, part.y, part.radius, 0, twopi);
          ctx.closePath();
        }
        ctx.translate(part.x, part.y);
        ctx.rotate(part.radius);
        ctx.restore();
        // Role 1 means it's a shadow
        if (part.role == 1) {
          ctx.shadowColor = hsla(
            part.hue,
            part.saturation,
            part.lightness,
            0.075 + Math.cos(part.tick * 0.001) * 0.005
          );
          ctx.shadowBlur = part.radius;
          ctx.fillStyle = hsla(
            part.hue,
            part.saturation,
            part.lightness,
            0.075 + Math.cos(part.tick * 0.001) * 0.005
          );
        } else {
          ctx.shadowColor = hsla(250, 9, 44, 1);
          ctx.shadowBlur = part.blur;
          ctx.fillStyle = hsla(
            250,
            9,
            44,
            0.075 + Math.cos(part.tick * 0.009) * 0.03
          );
        }
        ctx.fill();
        if (part.x - part.radius > cw) {
          part.x = -part.radius;
        }
        if (part.x + part.radius < 0) {
          part.x = cw + part.radius;
        }
        if (part.y - part.radius > ch) {
          part.y = -part.radius;
        }
        if (part.y + part.radius < 0) {
          part.y = ch + part.radius;
        }
        part.tick++;
      }
    },
    init = function() {
      draw();
      loop();
    };
  init();
}
