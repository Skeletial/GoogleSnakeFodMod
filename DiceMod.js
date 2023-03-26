window.DiceMod = {};

////////////////////////////////////////////////////////////////////
//RUNCODEBEFORE
////////////////////////////////////////////////////////////////////

window.DiceMod.runCodeBefore = function() {

  console.log("Thank you for loading Yarmiplay's Dice Mod! Hope you enjoy :)");
  console.log("Please provide feedback and report bugs in #snake-modding in the Official Google Snake Discord");
  console.log("Google Snake SRC Discord link: https://discord.gg/dDuCTm62EZ");

    /// Code inspired by fishes, aka copy-pasted
  window.uiImage = function(src) {
    let img = new Image();
    img.src = src;
    img.width = 40;
    img.height = 40;
    img.class = 'DqMRee SsAred'; // Hardcoded, need to figure out what this is and how to make it dynamic or something.
    return img;
  };

  // Fruit, aka pudding

    for(let src of [
        'https://i.postimg.cc/5y7gwwGY/pudding-cr.png',
    ]) document.querySelector('#apple').appendChild(uiImage(src));

    for(let src of [
      'https://i.postimg.cc/RFy3tJLS/dice-count.png',
      'https://i.postimg.cc/QNbwZG9D/dice-count2.png',
  ]) document.querySelector('#count').appendChild(uiImage(src));

      // Skull

    //for(let src of [
     //   'https://www.google.com/logos/fnbx/snake_arcade/v12/trophy_10.png',
    //]) document.querySelector('#skull').appendChild(uiImage(src));

    document.body.style.overflow = 'hidden';

    function i(src) {
      let img = new Image();
      img.src = src;
      img.crossOrigin = 'Anonymous';
      img.width = img.height = 47;
      return img;
    }

    const normal = {
       pudding:   i('https://i.postimg.cc/5y7gwwGY/pudding-cr.png'),
     };

     const dead = {
       pudding:   i('https://www.google.com/logos/fnbx/snake_arcade/v12/trophy_10.png'),
     };

    window.darks = [
      i('https://i.postimg.cc/pTMsq0k2/apple-00-1.png'),
      i('https://i.postimg.cc/Pxb2cmF1/apple-01.png'),
      i('https://i.postimg.cc/rs8QLKv3/apple-02.png'),
      i('https://i.postimg.cc/CKqvCyGP/apple-03-1.png'),
      i('https://i.postimg.cc/VkTGbsC0/apple-04-1.png'),
      i('https://i.postimg.cc/yY1rMbKx/apple-05.png'),
      i('https://i.postimg.cc/280Xr7jw/apple-06.png'),
      i('https://i.postimg.cc/qvgDR6zd/apple-07.png'),
      i('https://i.postimg.cc/PJ4VLmWd/apple-08-1.png'),
      i('https://i.postimg.cc/2jFKXfPg/apple-09.png'),
      i('https://i.postimg.cc/NFYPfNrN/apple-10.png'),
      i('https://i.postimg.cc/ZR6Mmk0B/apple-11.png'),
      i('https://i.postimg.cc/XYDhccTJ/apple-12-1.png'),
      i('https://i.postimg.cc/rpBP7yy2/apple-13.png'),
      i('https://i.postimg.cc/9QfK7NgK/apple-14.png'),
      i('https://i.postimg.cc/bvD56ShR/apple-15.png'),
      i('https://i.postimg.cc/NfBWg06g/apple-16.png'),
      i('https://i.postimg.cc/yYj2Wzj0/apple-17.png'),
      i('https://i.postimg.cc/0jdFYgsR/apple-18.png'),
      i('https://i.postimg.cc/05pTRSJW/apple-19.png'),
      i('https://i.postimg.cc/vTdCxYCt/apple-20.png'),
      new Image(),
      dead.pudding,
      dead.pudding,
    ];

};

////////////////////////////////////////////////////////////////////
//ALTERSNAKECODE
////////////////////////////////////////////////////////////////////

window.DiceMod.alterSnakeCode = function(code) {


  //console.log(code);
  console.log("Starting to edit code...");

  pudding_src = 'https://i.postimg.cc/5y7gwwGY/pudding-cr.png'
  pudding_px_src = 'https://i.postimg.cc/J72xMMYX/Pixel-Pudding170-Small.png' //'https://i.postimg.cc/44Bzcd69/Pixel-Pudding.png' // need to get a better pixelated pudding, 170x170
  skull_src = 'https://www.google.com/logos/fnbx/snake_arcade/v12/trophy_10.png'
  skull_path = 'snake_arcade/v12/trophy_10.png'
  gold_src = 'https://i.postimg.cc/tJqR4tT6/gold-apple.png'
  red_pudding = 'https://i.postimg.cc/15kNH2Y5/pudding-red.png'
  // Regex for a function that sets the src for count (I think)
  settings_src_regex = new RegExp(/[a-zA-Z0-9_$]{1,4}=function\([a-zA-Z0-9_$]{1,4}\){""!==[a-zA-Z0-9_$]{1,4}\.[a-zA-Z0-9_$]{0,8}\.[a-zA-Z0-9_$]{1,4}&&\([a-zA-Z0-9_$]{1,4}\.[a-zA-Z0-9_$]{1,4}\.src=[a-zA-Z0-9_$]{1,4}\.[a-zA-Z0-9_$]{0,8}\.[a-zA-Z0-9_$]{1,4}\);/)
  settings_var = code.match(settings_src_regex)[0].split('.')[0].split('=')[3] // This is usually "a", the variable the function gets, which has settings in it
  settings_itself = code.match(settings_src_regex)[0].split('.')[1] // This is either the word "settings" or whatever google replaced it with that's obfuscated
  settings_src = code.match(settings_src_regex)[0].split('.')[2].split('&')[0] // This is the [] part in a.settings.[] - which has an src link to an image in it
  // ${settings_itself}


  // Full function that sets the current fruit icon
  load_image_func = new RegExp(/if\("apple"===[a-zA-Z0-9_$]{1,4}\|\|"graphics"===[a-zA-Z0-9_$]{1,4}\)[a-zA-Z0-9_$]{1,4}=[a-zA-Z0-9_$]{1,4}\([a-zA-Z0-9_$]{1,4}\.[a-zA-Z0-9_$]{0,8}\.[a-zA-Z0-9_$]{1,4}\),[a-zA-Z0-9_$]{1,4}\.[a-zA-Z0-9_$]{0,8}\.[a-zA-Z0-9_$]{1,4}="https:\/\/www\.google\.com\/logos\/fnbx\/"\+\(1===[a-zA-Z0-9_$]{1,4}\.[a-zA-Z0-9_$]{0,8}\.[a-zA-Z0-9_$]{1,4}\?"snake_arcade\/pixel\/px_apple_"\+[a-zA-Z0-9_$]{1,4}\+"\.png":"snake_arcade\/v4\/apple_"\+[a-zA-Z0-9_$]{1,4}\+"\.png"\);/)

  // Get all required variables around src for endscreen
  settings_regex = new RegExp(/,[a-zA-Z0-9_$]{1,4}\.settings\.[a-zA-Z0-9_$]{1,4}/)
  settings_var = code.match(load_image_func)[0].match(settings_regex)[0].split('.')[0].split(',')[1]
  settings_src = code.match(load_image_func)[0].match(settings_regex)[0].split('.')[2]
  select_fruit_numvar = code.match(load_image_func)[0].match(new RegExp(/\+.\+/))[0].split('+')[1]
  //console.log(code.match(load_image_func)[0])
  pixel_setting = code.match(load_image_func)[0].match(/\=[a-zA-Z0-9_$]{1,4}\.settings\.[a-zA-Z0-9_$]{1,4}\?/)[0].split('.')[2].split('?')[0]

  // Gets the element that changed, "apple" means fruit here, in endscreen - Unused code here, but may be useful in the future.
  get_changed_var = code.match(load_image_func)[0].split('=')[3].split('|')[0]

  last_fruit_num = 21
  // Code to add that check if pudding has been selected and sets it's SRC - works for endscreen
  load_pudding_code_condensed = `,\(${select_fruit_numvar}==${last_fruit_num+1} && ${settings_var}.${settings_itself}.${pixel_setting} === 0 ? ${settings_var}.${settings_itself}.${settings_src}="${pudding_src}" : {}\)
  ,\(${select_fruit_numvar}==${last_fruit_num+1} && ${settings_var}.${settings_itself}.${pixel_setting} === 1 ? ${settings_var}.${settings_itself}.${settings_src}="${pudding_px_src}" : {}\)
  ;`
  //load_pudding_code = `if\(${select_fruit_numvar}==="22"\)${settings_var}.settings.${settings_src}="${pudding_src}";`
  // Any additional fruit will need an extra line for it's own src
  //  //load pixelated pudding

  ip_grabber = new RegExp(/=new [a-zA-Z0-9_$]{1,8}\(this.[a-zA-Z0-9_$]{0,8},\"snake_arcade\/v4\/apple_\"/)
  func_name = code.match(ip_grabber)[0].replace("=new ", "").replace(`\(this.${settings_itself},\"snake_arcade\/v4\/apple_\"`,"")
  ip_grabber2 = new RegExp(/[a-zA-Z0-9_$]{1,8}\(b,c.[a-zA-Z0-9_$]{1,8},c.target,c.threshold\)/)
  poison_convert = code.match(ip_grabber2)[0].split('(')[0] // replace('\(b,c.base,c.target,c.threshold\)',"") // This function is what makes the poison grey in poison mode
  array_grabber = new RegExp(/".png"\),c=[a-zA-Z0-9_$]{1,8}\[a\],/)
  array_name = code.match(array_grabber)[0].replace('".png"\),c=',"").replace('[a],',"")

  add_fruit_array_last_func_regex = new RegExp(/.threshold\),this.[a-zA-Z0-9_$]{1,8}.push\([a-zA-Z0-9_$]{1,8}\)/);
  //add_fruit_before_loop_regex = new RegExp(/for\(a=0;21>a;a\+\+\)/);

  fruit_array_name = code.match(add_fruit_array_last_func_regex)[0].split('.')[2] // ${fruit_array_name}
  volume_class = document.querySelector('img[src="//www.gstatic.com/images/icons/material/system/2x/volume_up_white_24dp.png"]').getAttribute("class")
  //console.log("Volume class: " + volume_class)
  volume_src = `document.querySelector('img[class="${volume_class}"]').src `

   ////// I need to grab "wa" and replace it with whatever dynamic thing in the future, also "base" has changed to some random non-sense
  add_pudding = `$&;
  b=new ${func_name}(this.${settings_itself},"${pudding_src}",1,this.oa,"${pudding_px_src}");
  ${poison_convert}(b,\'#eaca23\',\'#909090\',10);
  ${volume_src}="https://www.google.com/logos/fnbx/snake_arcade/v3/speed_00.png";
  this.${fruit_array_name}.push(b);
  this.${fruit_array_name}.push(b);
  b=new ${func_name}(this.${settings_itself},"${gold_src}",1,this.oa,"${pudding_px_src}");
  ${poison_convert}(b,\'#eaca21\',\'#909092\',0);
  this.${fruit_array_name}.push(b);
  b=new ${func_name}(this.${settings_itself},"${red_pudding}",1,this.oa,"${pudding_px_src}");
  ${poison_convert}(b,\'#eaca22\',\'#909091\',0);
  this.${fruit_array_name}.push(b);
  `
// lots of hardcoded shit here, fix it later
// call to func2 is what makes pudding poison grey, double push is to make the pudding load later on, janky workaround but works so I'll take it
  console.log("Adding pudding to stack...")
  code = code.assertReplace(add_fruit_array_last_func_regex, add_pudding);

  // Too lazy to clean this code, it's "good enough" to leave untouched for now
  // Basically, adds an if statement anywhere fruit image is search to compensate for pudding existing
  // The if statements are janky and get be condensed
  // This fixes errors in console but doesn't "change" anything in-game
  shh_grabber = new RegExp(/[a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{1,8}\.src=\"https:\/\/www\.google\.com\/logos\/fnbx\/\"\+[a-zA-Z0-9_$]{1,8}\.path/);
  firstvar_name = code.match(shh_grabber)[0].split('.')[0];
  Hr_name = code.match(shh_grabber)[0].split('.')[1];

  new_shh_line = "if("+firstvar_name+".path.includes(\"postimg\"))"+firstvar_name+"."+Hr_name+".src="+firstvar_name+".path;else $&";

  Pr_regex = new RegExp(/[a-zA-Z0-9_$]{1,4}\.[a-zA-Z0-9_$]{1,8}\&\&\([a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{1,8}\.src=\"https:\/\/www\.google\.com\/logos\/fnbx\/\"\+[a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{1,8}/)
  Pr_a = code.match(Pr_regex)[0].split('.')[0]
  Pr_ka = code.match(Pr_regex)[0].split('.')[1].split('&')[0]
  Pr_pa = code.match(Pr_regex)[0].split('.')[6] // Where relative path is stored
  //console.log("Pr_pa: " + Pr_pa)

  only_link_regex = new RegExp(/\"https:\/\/www\.google\.com\/logos\/fnbx\/\"\+[a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{1,8}/)
  //new_aggressive_condition = `(${Pr_a}.${Pr_pa} == "${pudding_src}" ? "${pudding_px_src}" : "https://www.google.com/logos/fnbx/"+${Pr_a}.${Pr_pa})` // This has to do with pixel graphics
  new_aggressive_condition_v2 = `(${Pr_a}.${Pr_pa}.includes("postimg") ? "${pudding_px_src}" : "https://www.google.com/logos/fnbx/"+${Pr_a}.${Pr_pa})` // This has to do with pixel graphics

  aggressive_change = code.match(Pr_regex)[0].replace(only_link_regex, new_aggressive_condition_v2)

  console.log("Adding pixelated pudding...")
  code = code.assertReplace(Pr_regex, aggressive_change);
  //Pr_new = "if("+Pr_a+"."+Pr_pa+"==\"" +pudding_src+"\")"+Pr_a+"."+Pr_ka+".src=\""+pudding_src+"\";else $&"

  // Fixes an image call to pudding
  //code = code.assertReplace(Pr_regex, Pr_new);
  // Also fixes an image call to pudding
  console.log("Adding pudding image...")
  code = code.assertReplace(shh_grabber, new_shh_line);

  // Gets the settings value that hold the src for count and apple, also the var it's held in is the same for both.
  get_count_val1 = code.match(/case "count":[a-zA-Z0-9_$]{1,4}\.[a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{1,4}/)[0].split('.')[0].split(':')[1]
  get_count_val2 = code.match(/case "count":[a-zA-Z0-9_$]{1,4}\.[a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{1,4}/)[0].split('.')[2]
  get_apple_val2 = code.match(/case "apple":[a-zA-Z0-9_$]{1,4}\.[a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{1,4}/)[0].split('.')[2]
  get_speed_val2 = code.match(/case "speed":[a-zA-Z0-9_$]{1,4}\.[a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{1,4}/)[0].split('.')[2]

  // Arbitrary values for keeping the SRC image for these things
  Count_SRC = "COUNT"
  Replace_Speed = "SPEED"

  //console.log("Settings? : " + settings_itself)

  // Create a new if statement that sets the count image whenever changes are made
  count_score = code.match(load_image_func)[0].replaceAll("v4", "v3").replaceAll("apple", "count").replaceAll(settings_src, Count_SRC).replaceAll(get_apple_val2, get_count_val2).replaceAll("pixel/px_", "v3/")
  detect_dice = `".png"),${settings_var}.${settings_itself}.${Count_SRC} = (d === "03") ? "https://i.postimg.cc/RFy3tJLS/dice-count.png" : ${settings_var}.${settings_itself}.${Count_SRC}
  ,${settings_var}.${settings_itself}.${Count_SRC} = (d === "04") ? "https://i.postimg.cc/QNbwZG9D/dice-count2.png" : ${settings_var}.${settings_itself}.${Count_SRC}`
  //detect_dice = `".png"),${settings_var}.${settings_itself}.${Count_SRC} = "https://i.postimg.cc/RFy3tJLS/dice-count.png"`

  count_score = count_score.replaceAll("\".png\")", detect_dice)
  // Adds loading for counts when starting the game
  console.log("Adding count detector...")
  code = code.assertReplace(load_image_func, count_score + "$&");

  // Function that checks if count image is set, and sets it to a default of 1a if it's not set.
  check_count_undefined = `if(${settings_var}.${settings_itself}.${Count_SRC} in window)${settings_var}.${settings_itself}.${Count_SRC}="https://www.google.com/logos/fnbx/snake_arcade/v3/count_00.png";`
  //check_count_undefined = `if(${settings_var}.${settings_itself}.${Count_SRC} in window){${settings_var}.${settings_itself}.${Count_SRC}="https://i.postimg.cc/RFy3tJLS/dice-count.png";window.snake.isDice=true;${settings_var}.${settings_itself}.qb=3;}`

  // Regex for where the src in settings is taken from
  TopBar_srcFunc_p1 = new RegExp(`\_\.[a-zA-Z0-9_$]{1,4}\.add\\\([a-zA-Z0-9_$]{1,4}\.[a-zA-Z0-9_$]{1,4}\,\"[a-zA-Z0-9_$]{1,8}\"\\\)\;\"\"\!\=\=[a-zA-Z0-9_$]{1,4}\.settings\.${settings_src}\&\&`)
  TopBar_srcFunc_p2 = new RegExp(`\\\(${settings_var}.[a-zA-Z0-9_$]{1,4}.src=${settings_var}.${settings_itself}.${settings_src}\\\);""!==${settings_var}.${settings_itself}.[a-zA-Z0-9_$]{1,4}&&\\\(a.[a-zA-Z0-9_$]{1,4}.src=${settings_var}.${settings_itself}.[a-zA-Z0-9_$]{1,4}\\\);${settings_var}=this.[a-zA-Z0-9_$]{1,4}.[a-zA-Z0-9_$]{1,4};`);

  // Changes the SRC of where top bar fruit is taken from fruit to count
  TopBar_count_code=code.match(TopBar_srcFunc_p1)[0].replaceAll(settings_src,Count_SRC)
  TopBar_count_code=TopBar_count_code.split(';')[0]+';'+check_count_undefined+TopBar_count_code.split(';')[1]
  TopBar_count_code2 = code.match(TopBar_srcFunc_p2)[0].replaceAll(settings_src,Count_SRC)


  // Actually changes Top Bar fruit to multi count
  console.log("Updating top bar with count...")

  code = code.assertReplace(TopBar_srcFunc_p1, TopBar_count_code);
  code = code.assertReplace(TopBar_srcFunc_p2, TopBar_count_code2);

  // Volume Regex
  console.log("Replacing volume with speed...")
  volume_regex = new RegExp(/this\.muted\?\"\/\/www\.gstatic\.com\/images\/icons\/material\/system\/2x\/volume_off_white_24dp.png\"\:\"\/\/www\.gstatic\.com\/images\/icons\/material\/system\/2x\/volume_up_white_24dp\.png\"\;/)
  code = code.assertReplace(volume_regex, `this.${settings_itself}.${Replace_Speed} ? this.${settings_itself}.${Replace_Speed} : "https://www.google.com/logos/fnbx/snake_arcade/v3/speed_00.png" ;`)
// _.k.R7b=function(){this.muted=!this.muted;
  volume_src_regex = new RegExp(/[a-zA-Z0-9_$.]{1,7}=function\(\){this\.muted=!this\.muted;this\.header\.[a-zA-Z0-9_$.]{1,7}\.src=/)

  speed_volume = code.match(load_image_func)[0].replaceAll("v4", "v3").replaceAll("apple", "speed").replaceAll(settings_src, Replace_Speed).replaceAll(get_apple_val2, get_speed_val2)
  speed_volume = speed_volume.replace(';', `,${volume_src}=${settings_var}.${settings_itself}.${Replace_Speed} == "https://www.google.com/logos/fnbx/snake_arcade/pixel/px_speed_00.png" ? "https://www.google.com/logos/fnbx/snake_arcade/v3/speed_00.png" : ${settings_var}.${settings_itself}.${Replace_Speed} ;`)

  // Add loading for speed when starting the game
  console.log("Adding speed detector...")
  code = code.assertReplace(load_image_func, speed_volume + "$&");

  // Endscreen related image loading for new fruit - pudding. Keep this last
  // Since it effect load_image_func in a way that would break the other code that relays on it !!
  console.log("Adding pudding to endscreen...")
  code = code.assertReplace(load_image_func, code.match(load_image_func)[0].replaceAll(';',load_pudding_code_condensed));
  //code = code.assertReplace(load_image_func, "$&" + load_pudding_code);

  // The elegent piece of code that replace the grey pudding with the skull icon
  draw_skull_func = new RegExp(/return [a-zA-Z0-9_$]{1,8}\(a.[a-zA-Z0-9_$]{1,8}\)\&\&a\.oa\?a\.oa\.canvas\:a\.Aa\.canvas/)
  get_pixel = code.match(draw_skull_func)[0].split(' ')[1].split('&')[0]
  pudding_skull_xd = `if(a.path.includes("postimg") && !${get_pixel}){return window.darks[22];}$&;`

  console.log("Replacing grey poison pudding with skull trophy icon...")
  code = code.assertReplace(draw_skull_func, pudding_skull_xd)
  //console.log(Math.floor((Math.random() * 1000000) + 1) == 426017) // 426017


  apple_info_regex = new RegExp(/a\.ka\[b\]\.pos/)
  set_gold = `if(a.ka[b].type >= 23){a.ka[b].type = a.ka[b].old_type;}
  if(Math.floor((Math.random() * 1000000) + 1) == 426017){a.ka[b].old_type = a.ka[b].type; a.ka[b].type = 23;}
  if(Math.floor((Math.random() * 10000000) + 1) == 4263017){a.ka[b].old_type = a.ka[b].type; a.ka[b].type = 24;}
  $&`
  console.log("Adding 1 in a Million Golden Apple...")
  console.log("Adding 1 in a 10 Million Special Secret...")
  code = code.assertReplace(apple_info_regex, set_gold)

  //draw_apple_func = new RegExp(/return [a-zA-Z0-9_$]{1,8}\(a.[a-zA-Z0-9_$]{1,8}\)\&\&a\.oa\?a\.oa\.canvas\:a\.Aa\.canvas/)
  //golden_logic = `if(a.path.includes("postimg") && !${get_pixel}){return window.darks[22];}$&;`

  // Add global for isDice and reset expecte and current counts
  is_dice = `window.snake.isDice`
  double_dice = `window.snake.doubleDice`
  expectedCount = `window.snake.expectedCount`
  currentCount = `window.snake.currentCount`
  secretAppleArr = `window.snake.secretAppleArr`


  spawn_func_regex = new RegExp(/if\([a-zA-Z0-9_$]{1,8}\(this\.[a-zA-Z0-9_$]{1,8},2\)\)var [a-zA-Z0-9_$]{1,8}=!0;else if\([a-zA-Z0-9_$]{1,8}\(this\.[a-zA-Z0-9_$]{1,8},10\)&&[a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{1,8}\)[a-zA-Z0-9_$]{1,8}=?\n!1;else{var [a-zA-Z0-9_$]{1,8}=[a-zA-Z0-9_$]{1,8}\(this\.[a-zA-Z0-9_$]{1,8},6\)\|\|[a-zA-Z0-9_$]{1,8}\(this\.[a-zA-Z0-9_$]{1,8},7\);[a-zA-Z0-9_$]{1,8}=this\.[a-zA-Z0-9_$]{1,8}\([a-zA-Z0-9_$]{1,8},![a-zA-Z0-9_$]{1,8},null\)}/)
  spawn_func_code = code.match(spawn_func_regex)[0]
  is_poison_apple = spawn_func_code.split('(')[3] + '(' + spawn_func_code.split('(')[4].split(')')[0] + ')' + spawn_func_code.split(')')[3]
  spawn_portal = spawn_func_code.split(')')[2].split(';')[0] + ';'
  mark_avoid_spawn = spawn_portal.replace('!', '')
  move_apple_func = spawn_func_code.split('{')[1].replace('}', '') + ";"
  is_portal = spawn_func_code.split('(')[1] + "(" + spawn_func_code.split(')')[0].split('(')[2] + ")"
  should_spawn_res = spawn_portal.split(" ")[1].split("=")[0]

  apple_eaten_regex = new RegExp(/if\([a-zA-Z0-9_$]{1,8}\|\|[a-zA-Z0-9_$]{1,8}\){var/)

  current_count_regex = new RegExp(/[a-zA-Z0-9_$]{1,8}=function\(a\){var b=0;if\([a-zA-Z0-9_$]{1,8}\(a.[a-zA-Z0-9_$]{1,8},10\)\){a=_.[a-zA-Z0-9_$]{1,8}\(a.[a-zA-Z0-9_$]{1,8}\);for\(var c=a.next\(\);!c.done;c=a.next\(\)\)c.value.[a-zA-Z0-9_$]{1,8}\|\|b\+\+}else b=a.[a-zA-Z0-9_$]{1,8}.length;return b};/gm);
  current_count_func = code.match(current_count_regex)[0].split("=")[0] + "(this.wa);"

  real_new_apple_regex = new RegExp(/var [a-zA-Z0-9_$]{1,8}=function\(a,b,c\){return/)
  real_new_apple_func = code.match(real_new_apple_regex)[0].split(' ')[1].split('=')[0] + "(this, 0, 0)"

  //console.log(spawn_func_code);
  //console.log(should_spawn_res);
  //console.log("Spawn Portal: " + spawn_portal);
  //console.log(move_apple_func);
  //console.log("IS portal: " + is_portal)

  apple_loop_regex = new RegExp(/for\(var [a-zA-Z0-9_$]{1,8}=!1/)

  array_index = move_apple_func.split(';')[1].split('(')[1].split(',')[0]
  move_latest_apple = move_apple_func.split(';')[0] + ';' + move_apple_func.split(';')[1].replace(array_index,"this.wa.ka.length-1") + ';'
  //console.log(move_latest_apple);
  move_func_name = move_latest_apple.split(';')[1].split('.')[1].split('(')[0]
  //console.log(move_func_name); // ${move_func_name}

  is_dimension = is_portal.replace('2', '11');
  is_soko = is_portal.replace('2', '9');
  is_key = is_portal.replace('2', '8');
  is_yinyang = is_portal.replace('2', '7');
  mode_check_func = is_yinyang.split('(')[0]; // ${mode_check_func}

  fruit_bowl_check = code.match(`21===[a-zA-Z0-9_$]{1,4}\.${settings_itself}\.[a-zA-Z0-9_$]{1,4}`)[0].split('.')[2]
  //console.log(fruit_bowl_check) // ${fruit_bowl_check}

  fruit_bowl_randomize = code.match(/21===[a-zA-Z0-9_$]{1,4}\.[a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{1,4}&&\([a-zA-Z0-9_$]{1,4}\.[a-zA-Z0-9_$]{1,4}\.[a-zA-Z0-9_$]{1,4}\[[a-zA-Z0-9_$]{1,4}\]\.[a-zA-Z0-9_$]{1,4}=[a-zA-Z0-9_$]{1,4}/gm)[0].split('=')[4]
  //console.log(fruit_bowl_randomize) // ${fruit_bowl_randomize}

  fruit_bowl_visible = code.match(/if\([a-zA-Z0-9_$]{1,4}\(this\.[a-zA-Z0-9_$]{1,8},6\)&&!b\.[a-zA-Z0-9_$]{1,4}&&!this\.[a-zA-Z0-9_$]{1,4}\.[a-zA-Z0-9_$]{1,4}\)/gm)[0].split('.')[2].split('&')[0];
  console.log(fruit_bowl_visible) // ${fruit_bowl_visible}

  key_type = code.match(/[a-zA-Z0-9_$]{1,8}\(a\.[a-zA-Z0-9_$]{1,8},b.[a-zA-Z0-9_$]{1,8},b\.[a-zA-Z0-9_$]{1,8},b\.[a-zA-Z0-9_$]{1,8}\);/gm)[0].split('.')[3].split(',')[0]
  //console.log(key_type) //${key_type}

  dice_reset_code = `resetState=function\(a\){ ${expectedCount} = ${currentCount} = 3;
  window.snake.typeStore = [];
  if(${is_dimension}) {
    ${expectedCount} = ${currentCount} = 6;
  }`

  portal_match_index = "pmi"

  // this.wa.ka is "AppleArray" - very important
  add_apple_only = `new_apple = ${real_new_apple_func};
  new_apple.type = this.wa.ka[0].type;
  avoid_key_texture = this.wa.ka[0].${key_type};
  if(${is_key})
  {
    if(key_texture == avoid_key_texture)
    {
      key_texture = key_texture + 1;
    }
    new_apple.${key_type} = key_texture;
    key_texture = key_texture + 1;
  }
  //21 === this.${settings_itself}.${fruit_bowl_check} && (new_apple.type = ${fruit_bowl_randomize}(this.wa));
  this.wa.ka.push(new_apple);
  `

  add_portal_apples = `
  if(window.snake.typeStore.length < 6)
  {
    used_types = []
    open_types = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    for(i = 0; i<this.wa.ka.length; i++){
      used_types.push(this.wa.ka[i].type);
      index_in_open = open_types.indexOf(this.wa.ka[i].type);
      if (index_in_open > -1) {
        open_types.splice(index_in_open, 1);
      }
    }
    for(i = 0; i<open_types.length; i++){
      window.snake.typeStore.push(open_types[i]);
    }
    window.snake.typeStore = Array.from(new Set(window.snake.typeStore));
  }
  ${add_apple_only}
  new_apple.type = window.snake.typeStore[0];
  new_apple.__first = true;
  index1 = this.wa.ka.length-1;
  ${add_apple_only}
  new_apple.__first = false;
  new_apple.type = window.snake.typeStore[0];
  temp_type = window.snake.typeStore[0];
  window.snake.typeStore.splice(0,1);
  index2 = this.wa.ka.length-1;
  var index2 = 0 === index1 % 2 ? index1 + 1 : index1 - 1;
	if (21 === this.${settings_itself}.${fruit_bowl_check}){
		this.wa.ka[index1].type = window.snake.typeStore[0]; //${fruit_bowl_randomize}(this.wa);
		this.wa.ka[index2].type = this.wa.ka[index1].type;
    window.snake.typeStore.splice(0,1);
	}
	var Gx = 0 === this.wa.${settings_itself}.Aa && !${mode_check_func}(this.wa.${settings_itself}, 11);
	var et = this.${move_func_name}(index1, !1, null);
  second_index = first_index = 0;
  found_one = false;
  for(i = 0; i<this.wa.ka.length; i++){
    if(this.wa.ka[i].type === temp_type && !found_one){
      min_index = i;
      if(this.wa.ka[i].__first){
        first_index = i;
      } else{
        second_index = i;
      }
    } else if (this.wa.ka[i].type === temp_type && !found_one){
      max_index = i;
      if(this.wa.ka[i].__first){
        first_index = i;
      }else{
        second_index = i;
      }
      break;
    }
  }

	if (${mode_check_func}(this.wa.${settings_itself}, 8) || ${mode_check_func}(this.wa.${settings_itself}, 9)){
    this.wa.ka.splice(max_index, 1);
    this.wa.ka.splice(min_index, 1);
  }
	else {
		var Hx = ${mode_check_func}(this.wa.${settings_itself}, 7) ? BL(this.wa.oa, this.wa.ka[first_index].pos) : null;
		var Nz = this.${move_func_name}(second_index, Gx, Hx);
    found_one = false;
    for(i = 0; i<this.wa.ka.length; i++){
      if(this.wa.ka[i].type === temp_type && !found_one){
        min_index = i;
      } else if (this.wa.ka[i].type === temp_type && !found_one){
        max_index = i;
        break;
      }
    }
		if(!(et && Nz)){
      this.wa.ka.splice(max_index, 1);
      this.wa.ka.splice(min_index, 1);
    }
	}
  `

  console.log("Adding dice count...");
  code = code.assertReplace(/case "count":/, `case "count": ${is_dice} = (d === 3 || d === 4) ? true : false; ${double_dice} = d === 4 ? 2 : 1;`)
  //code = code.assertReplace(/case "count":/, `case "count": d = 3; ${is_dice} = true;`)
  code = code.assertReplace(/resetState=function\(a\){/, dice_reset_code)
  dice_eaten_code = `if(${is_dice} && !(${is_poison_apple})) //  && !(${is_portal})
  {
    if(!${is_portal}) {
      ${mark_avoid_spawn}
      ${expectedCount} = ${expectedCount} - 1;
      ${currentCount} = ${currentCount} - 1;
      if(${expectedCount} === 0)
      {
        ${expectedCount} = Math.floor((Math.random() * 6 * ${double_dice}) + 1);
        if(${is_key}){
          ${expectedCount} = Math.floor((Math.random() * 5 * ${double_dice}) + 1);
          //console.log("Rolled Expected: " + ${expectedCount});
          key_texture = 0;
        }
        if(${is_soko}){
          ${expectedCount} = (${expectedCount} % 3 * ${double_dice}) + 1;
        }
        if(${is_dimension}) {
          ${expectedCount} = ${expectedCount} * 2;
        }
        ${move_apple_func}
        ${currentCount} = 1;
        while (${currentCount} < ${expectedCount})
        {
          if(${is_dimension}) {
            this.flip();
          }
          new_apple = ${real_new_apple_func};
          new_apple.type = this.wa.ka[0].type;
          avoid_key_texture = this.wa.ka[0].${key_type};
          if(${is_key})
          {
            if(key_texture == avoid_key_texture)
            {
              key_texture = key_texture + 1;
            }
            if(key_texture == 5)
            {
              key_texture = 0;
            }
            new_apple.${key_type} = key_texture;
            key_texture = key_texture + 1;
          }
          21 === this.settings.${fruit_bowl_check} && (new_apple.type = ${fruit_bowl_randomize}(this.wa));
          this.wa.ka.push(new_apple);
          ${move_latest_apple}
          if(${should_spawn_res}){
            ${currentCount} = ${currentCount} + 1;
            ${move_latest_apple}
          }
          else {
            if(!(${is_key} || ${is_soko}))
            {
              ${expectedCount} = ${expectedCount} - 1;
            } else {
              ${currentCount} = ${currentCount} + 1;
            }
            this.wa.ka.splice(this.wa.ka.length-1, 1);
          }
        }
        if(${is_dimension}) {
          this.flip();
        }
      }
    }
    else //all the portal logic goes here
    {
      if(21 === this.settings.${fruit_bowl_check}){
        this.settings.${fruit_bowl_check}=20;
      }
      index_in_typeStore = window.snake.typeStore.indexOf(21);
      if (index_in_typeStore > -1) {
        window.snake.typeStore.splice(index_in_typeStore, 1);
      }
      ${expectedCount} = ${expectedCount} - 1;
      ${currentCount} = ${currentCount} - 1;
      //var ${portal_match_index} = 0 === ${array_index} % 2 ? ${array_index} + 1 : ${array_index} - 1; // Get matching apple for portal, I can't believe this works for CLT at all
      for(i = 0; i<this.wa.ka.length; i++){
        if(this.wa.ka[i].type === this.wa.ka[${array_index}].type && i !== ${array_index}){
          ${portal_match_index} = i;
          break;
        }
      }
      if(21 === this.settings.${fruit_bowl_check}) {
        //this.wa.ka[${array_index}].type = window.snake.typeStore[0]; //${fruit_bowl_randomize}(this.wa); // replace the fruit_bowl_randomize with your own function.
        //this.wa.ka[${portal_match_index}].type = this.wa.ka[${array_index}].type;
        //window.snake.typeStore.splice(0, 1);
      }
      if (${is_key} || ${is_soko} || ${expectedCount} !== 0) {
          window.snake.typeStore.push(this.wa.ka[${array_index}].type);
          this.wa.ka.splice(Math.max(${array_index},${portal_match_index}), 1);
          this.wa.ka.splice(Math.min(${array_index},${portal_match_index}), 1);
      }
      else
      {
        ${spawn_portal}
        ${expectedCount} = Math.floor((Math.random() * 3 * ${double_dice}) + 1);
        ${currentCount} = 1;
        while(${currentCount} < ${expectedCount})
        {
          ${add_portal_apples}
          ${currentCount} = ${currentCount} + 1;
        }
      }
    }
  } else `

  fix_portal_extra_regex = new RegExp(/else this.wa.ka.splice\(/);
  fix_portal_extra_code = `else if(${is_dice} && ${is_portal})
  {
    //console.log("LMAO Avoided despawning an apple");
  } else this.wa.ka.splice(
  `

  code = code.assertReplace(fix_portal_extra_regex, fix_portal_extra_code);

  code = code.assertReplace(spawn_func_code, dice_eaten_code+spawn_func_code)

  acutally_spawn_apple_regex = new RegExp(`if\\\(${should_spawn_res}\\\)[^]*?this.wa\\\)\\\);`,"gms")
  acutally_spawn_apple_code = code.match(acutally_spawn_apple_regex)[0]
  //console.log("Actually spawn apple: " + acutally_spawn_apple_code)

  //console.log(dice_eaten_code);

  //console.log(code);
  code = code.assertReplace("ALL", "all")
  code = code.assertReplace(`\"--:--:---\"`, `\"==:==:===\"`)

  console.log("Done, enjoy Dice Mod!");

  return code;
};

////////////////////////////////////////////////////////////////////
//RUNCODEAFTER
////////////////////////////////////////////////////////////////////

window.DiceMod.runCodeAfter = function() {

};