// Created by iWeb 3.0.4 local-build-20120222

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:10,offset:new IWPoint(1.4142,1.4142),color:'#949494',opacity:0.750000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Buy_files/BuyMoz.css')
detectBrowser();Widget.onload();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
