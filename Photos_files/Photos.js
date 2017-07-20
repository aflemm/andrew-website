// Created by iWeb 3.0.4 local-build-20131113

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:0,offset:new IWPoint(-0.0000,1.0000),color:'#ffffff',opacity:1.000000}),shadow_1:new IWShadow({blurRadius:0,offset:new IWPoint(-0.0000,1.0000),color:'#ffffff',opacity:1.000000}),stroke_0:new IWEmptyStroke(),shadow_2:new IWShadow({blurRadius:0,offset:new IWPoint(-0.0000,1.0000),color:'#ffffff',opacity:1.000000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Photos_files/PhotosMoz.css')
fixAllIEPNGs('Media/transparent.gif');IMpreload('Photos_files','shapeimage_1','0');Widget.onload();fixupAllIEPNGBGs();applyEffects()}
function onPageUnload()
{Widget.onunload();}
