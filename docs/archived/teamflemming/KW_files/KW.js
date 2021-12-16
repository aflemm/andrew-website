// Created by iWeb 3.0.4 local-build-20131030

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,324),url:'KW_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'KW_files/stroke_1.png'},{rect:new IWRect(2,-2,692,4),url:'KW_files/stroke_2.png'},{rect:new IWRect(694,-2,4,4),url:'KW_files/stroke_3.png'},{rect:new IWRect(694,2,4,324),url:'KW_files/stroke_4.png'},{rect:new IWRect(694,326,4,5),url:'KW_files/stroke_5.png'},{rect:new IWRect(2,326,692,5),url:'KW_files/stroke_6.png'},{rect:new IWRect(-2,326,4,5),url:'KW_files/stroke_7.png'}],new IWSize(696,328))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('KW_files/KWMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id4');applyEffects()}
function onPageUnload()
{Widget.onunload();}
