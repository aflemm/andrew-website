// Created by iWeb 3.0.4 local-build-20131030

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id4" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="142" height="16" style="height: 16px; left: 173px; position: absolute; top: 172px; width: 142px; z-index: 1; "><param name="src" value="../../../../Media/MEET-ME-IN-MEAFORD.mp3" /><param name="controller" value="true" /><param name="autoplay" value="true" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="true" /></object>');}
else if(isiPhone)
{document.write('<object id="id4" type="video/quicktime" width="142" height="16" style="height: 16px; left: 173px; position: absolute; top: 172px; width: 142px; z-index: 1; "><param name="src" value="../../../../Media/MEET-ME-IN-MEAFORD.mp3"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id4" type="video/quicktime" width="142" height="16" data="../../../../Media/MEET-ME-IN-MEAFORD.mp3" style="height: 16px; left: 173px; position: absolute; top: 172px; width: 142px; z-index: 1; "><param name="src" value="../../../../Media/MEET-ME-IN-MEAFORD.mp3"/><param name="controller" value="true"/><param name="autoplay" value="true"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="true"/></object>');}}
setTransparentGifURL('../../../../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,179),url:'28_The_Trip_to_Meaford_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'28_The_Trip_to_Meaford_files/stroke_1.png'},{rect:new IWRect(2,-2,416,4),url:'28_The_Trip_to_Meaford_files/stroke_2.png'},{rect:new IWRect(418,-2,4,4),url:'28_The_Trip_to_Meaford_files/stroke_3.png'},{rect:new IWRect(418,2,4,179),url:'28_The_Trip_to_Meaford_files/stroke_4.png'},{rect:new IWRect(418,181,4,4),url:'28_The_Trip_to_Meaford_files/stroke_5.png'},{rect:new IWRect(2,181,416,4),url:'28_The_Trip_to_Meaford_files/stroke_6.png'},{rect:new IWRect(-2,181,4,4),url:'28_The_Trip_to_Meaford_files/stroke_7.png'}],new IWSize(420,183))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{dynamicallyPopulate();loadMozillaCSS('28_The_Trip_to_Meaford_files/28_The_Trip_to_MeafordMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id6');adjustFontSizeIfTooBig('id6');adjustLineHeightIfTooBig('id7');adjustFontSizeIfTooBig('id7');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('../../../../Media/transparent.gif');fixupIECSS3Opacity('id5');BlogFixupPreviousNext();applyEffects()}
function onPageUnload()
{Widget.onunload();}
