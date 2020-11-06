var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["99307d47-5446-4bb7-a411-a864fea3c9d6","1dfdcb41-77b7-4a40-9433-27e7b3195933","88e4472b-2201-4c49-be85-bed03b37b04b"],"propsByKey":{"99307d47-5446-4bb7-a411-a864fea3c9d6":{"name":"1.png_1","sourceUrl":"assets/v3/animations/gfAEz5Fh_rRaatefGIsKcp8_8JrMbX8qCdFuNJusiNU/99307d47-5446-4bb7-a411-a864fea3c9d6.png","frameSize":{"x":50,"y":67},"frameCount":1,"looping":true,"frameDelay":4,"version":"QWhl_WReXdZAL8JiLsN6MKvPU2W4OaN8","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":67},"rootRelativePath":"assets/v3/animations/gfAEz5Fh_rRaatefGIsKcp8_8JrMbX8qCdFuNJusiNU/99307d47-5446-4bb7-a411-a864fea3c9d6.png"},"1dfdcb41-77b7-4a40-9433-27e7b3195933":{"name":"7.png_1","sourceUrl":null,"frameSize":{"x":41,"y":68},"frameCount":1,"looping":true,"frameDelay":12,"version":"fzswCjXgENkqKFB6XwLVV6zQKIuJFhYs","loadedFromSource":true,"saved":true,"sourceSize":{"x":41,"y":68},"rootRelativePath":"assets/1dfdcb41-77b7-4a40-9433-27e7b3195933.png"},"88e4472b-2201-4c49-be85-bed03b37b04b":{"name":"png1","sourceUrl":null,"frameSize":{"x":353,"y":213},"frameCount":6,"looping":true,"frameDelay":12,"version":"Yfep4kfLULEQvBa0I_WhAvgxOuia_YRR","loadedFromSource":true,"saved":true,"sourceSize":{"x":706,"y":639},"rootRelativePath":"assets/88e4472b-2201-4c49-be85-bed03b37b04b.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

function draw() {
  playSound("assets/category_female_voiceover/level_up_female.mp3", false);
  playSound("assets/category_female_voiceover/game_over_female.mp3", false);
  playSound("assets/category_female_voiceover/mission_failed_female.mp3", false);
  playSound("assets/category_female_voiceover/congratulations_female.mp3", false);
  playSound("assets/category_background/jazzy_beats.mp3", false);
  playSound("assets/category_explosion/8bit_explosion.mp3", false);
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
