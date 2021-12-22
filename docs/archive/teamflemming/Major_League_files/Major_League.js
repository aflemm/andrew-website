// Created by iWeb 3.0.4 local-build-20131030

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,196),url:'Major_League_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'Major_League_files/stroke_1.png'},{rect:new IWRect(2,-2,198,4),url:'Major_League_files/stroke_2.png'},{rect:new IWRect(200,-2,4,4),url:'Major_League_files/stroke_3.png'},{rect:new IWRect(200,2,4,196),url:'Major_League_files/stroke_4.png'},{rect:new IWRect(200,198,4,4),url:'Major_League_files/stroke_5.png'},{rect:new IWRect(2,198,198,4),url:'Major_League_files/stroke_6.png'},{rect:new IWRect(-2,198,4,4),url:'Major_League_files/stroke_7.png'}],new IWSize(202,200))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Major_League_files/Major_LeagueMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id2');applyEffects()}
function onPageUnload()
{Widget.onunload();}
