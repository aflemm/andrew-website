// Created by iWeb 3.0.4 local-build-20120222

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:10,offset:new IWPoint(1.4142,1.4142),color:'#949494',opacity:0.750000}),stroke_0:new IWEmptyStroke(),shadow_1:new IWShadow({blurRadius:10,offset:new IWPoint(2.8284,2.8284),color:'#000000',opacity:0.750000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Environmental_files/EnvironmentalMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');Widget.onload();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}