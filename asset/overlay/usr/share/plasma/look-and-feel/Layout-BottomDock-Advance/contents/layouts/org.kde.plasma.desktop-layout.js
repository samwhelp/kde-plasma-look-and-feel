

//
// ## Layout
//

//
// * https://github.com/samwhelp/kde-plasma-layout-templates
//




//
// ## Layout / BottomDock-Advance
//

loadTemplate("base.desktop.BottomDock-Advance")




//
// ## Layout / TopPanelBottomDock-BasicPlusPager
//

//loadTemplate("base.desktop.TopPanel-BasicPlusPager")
//loadTemplate("base.desktop.BottomDock-IconTask")




//
// ## Layout / BottomPanel-MiddleMenu
//

//loadTemplate("base.desktop.BottomPanel-MiddleMenu")








//
// ## Wallpaper
//

var desktopsArray = desktopsForActivity(currentActivity());

for( var j = 0; j < desktopsArray.length; j++) {
	desktopsArray[j].wallpaperPlugin = 'org.kde.image';
}
