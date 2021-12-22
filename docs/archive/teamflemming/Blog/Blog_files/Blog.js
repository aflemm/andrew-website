// Created by iWeb 3.0.4 local-build-20131030

setTransparentGifURL('../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,336),url:'Blog_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'Blog_files/stroke_1.png'},{rect:new IWRect(2,-2,360,4),url:'Blog_files/stroke_2.png'},{rect:new IWRect(362,-2,5,4),url:'Blog_files/stroke_3.png'},{rect:new IWRect(362,2,5,336),url:'Blog_files/stroke_4.png'},{rect:new IWRect(362,338,5,4),url:'Blog_files/stroke_5.png'},{rect:new IWRect(2,338,360,4),url:'Blog_files/stroke_6.png'},{rect:new IWRect(-2,338,4,4),url:'Blog_files/stroke_7.png'}],new IWSize(364,340))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function photocastSubscribe()
{photocastHelper("file://localhost/Users/andrewflemming/Sites/teamflemming/Blog/rss.xml");}
function onPageLoad()
{loadMozillaCSS('Blog_files/BlogMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');detectBrowser();adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('../Media/transparent.gif');fixupIECSS3Opacity('id4');applyEffects()}
function onPageUnload()
{Widget.onunload();}
