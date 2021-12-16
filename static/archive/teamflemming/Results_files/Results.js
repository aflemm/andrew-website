// Created by iWeb 3.0.4 local-build-20131030

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,31),url:'Results_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'Results_files/stroke_1.png'},{rect:new IWRect(2,-2,63,4),url:'Results_files/stroke_2.png'},{rect:new IWRect(65,-2,4,4),url:'Results_files/stroke_3.png'},{rect:new IWRect(65,2,4,31),url:'Results_files/stroke_4.png'},{rect:new IWRect(65,33,4,4),url:'Results_files/stroke_5.png'},{rect:new IWRect(2,33,63,4),url:'Results_files/stroke_6.png'},{rect:new IWRect(-2,33,4,4),url:'Results_files/stroke_7.png'}],new IWSize(67,35))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Results_files/ResultsMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');adjustLineHeightIfTooBig('id6');adjustFontSizeIfTooBig('id6');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id3');fixupIECSS3Opacity('id4');fixupIECSS3Opacity('id5');fixupIECSS3Opacity('id6');fixupIECSS3Opacity('id7');applyEffects()}
function onPageUnload()
{Widget.onunload();}
