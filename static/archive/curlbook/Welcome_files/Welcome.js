// Created by iWeb 3.0.4 local-build-20121116

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_1:new IWShadow({blurRadius:10,offset:new IWPoint(-0.0000,4.0000),color:'#000000',opacity:0.750000}),stroke_1:new IWEmptyStroke(),shadow_0:new IWShadow({blurRadius:5,offset:new IWPoint(-0.0000,2.0000),color:'#000000',opacity:0.770000}),stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,148),url:'Welcome_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'Welcome_files/stroke_1.png'},{rect:new IWRect(1,-1,738,2),url:'Welcome_files/stroke_2.png'},{rect:new IWRect(739,-1,2,2),url:'Welcome_files/stroke_3.png'},{rect:new IWRect(739,1,2,148),url:'Welcome_files/stroke_4.png'},{rect:new IWRect(739,149,2,2),url:'Welcome_files/stroke_5.png'},{rect:new IWRect(1,149,738,2),url:'Welcome_files/stroke_6.png'},{rect:new IWRect(-1,149,2,2),url:'Welcome_files/stroke_7.png'}],new IWSize(740,150))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Welcome_files/WelcomeMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
