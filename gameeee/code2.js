gdjs.Hello_32there_32buckoCode = {};
gdjs.Hello_32there_32buckoCode.localVariables = [];
gdjs.Hello_32there_32buckoCode.GDMagnifyingGlassObjects1= [];
gdjs.Hello_32there_32buckoCode.GDMagnifyingGlassObjects2= [];
gdjs.Hello_32there_32buckoCode.GDStarryBackgroundBlackHoleObjects1= [];
gdjs.Hello_32there_32buckoCode.GDStarryBackgroundBlackHoleObjects2= [];
gdjs.Hello_32there_32buckoCode.GDBlueSpaceObjects1= [];
gdjs.Hello_32there_32buckoCode.GDBlueSpaceObjects2= [];
gdjs.Hello_32there_32buckoCode.GDWelcome_9595to_9595the_9595EmpireObjects1= [];
gdjs.Hello_32there_32buckoCode.GDWelcome_9595to_9595the_9595EmpireObjects2= [];
gdjs.Hello_32there_32buckoCode.GDStarObjects1= [];
gdjs.Hello_32there_32buckoCode.GDStarObjects2= [];
gdjs.Hello_32there_32buckoCode.GDWelcome_9595to_9595the_9595Empire2Objects1= [];
gdjs.Hello_32there_32buckoCode.GDWelcome_9595to_9595the_9595Empire2Objects2= [];
gdjs.Hello_32there_32buckoCode.GDBlackSquareDecoratedButtonObjects1= [];
gdjs.Hello_32there_32buckoCode.GDBlackSquareDecoratedButtonObjects2= [];


gdjs.Hello_32there_32buckoCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BlackSquareDecoratedButton"), gdjs.Hello_32there_32buckoCode.GDBlackSquareDecoratedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Hello_32there_32buckoCode.GDBlackSquareDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.Hello_32there_32buckoCode.GDBlackSquareDecoratedButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Hello_32there_32buckoCode.GDBlackSquareDecoratedButtonObjects1[k] = gdjs.Hello_32there_32buckoCode.GDBlackSquareDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.Hello_32there_32buckoCode.GDBlackSquareDecoratedButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Imperial battle area", false);
}}

}


};

gdjs.Hello_32there_32buckoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Hello_32there_32buckoCode.GDMagnifyingGlassObjects1.length = 0;
gdjs.Hello_32there_32buckoCode.GDMagnifyingGlassObjects2.length = 0;
gdjs.Hello_32there_32buckoCode.GDStarryBackgroundBlackHoleObjects1.length = 0;
gdjs.Hello_32there_32buckoCode.GDStarryBackgroundBlackHoleObjects2.length = 0;
gdjs.Hello_32there_32buckoCode.GDBlueSpaceObjects1.length = 0;
gdjs.Hello_32there_32buckoCode.GDBlueSpaceObjects2.length = 0;
gdjs.Hello_32there_32buckoCode.GDWelcome_9595to_9595the_9595EmpireObjects1.length = 0;
gdjs.Hello_32there_32buckoCode.GDWelcome_9595to_9595the_9595EmpireObjects2.length = 0;
gdjs.Hello_32there_32buckoCode.GDStarObjects1.length = 0;
gdjs.Hello_32there_32buckoCode.GDStarObjects2.length = 0;
gdjs.Hello_32there_32buckoCode.GDWelcome_9595to_9595the_9595Empire2Objects1.length = 0;
gdjs.Hello_32there_32buckoCode.GDWelcome_9595to_9595the_9595Empire2Objects2.length = 0;
gdjs.Hello_32there_32buckoCode.GDBlackSquareDecoratedButtonObjects1.length = 0;
gdjs.Hello_32there_32buckoCode.GDBlackSquareDecoratedButtonObjects2.length = 0;

gdjs.Hello_32there_32buckoCode.eventsList0(runtimeScene);
gdjs.Hello_32there_32buckoCode.GDMagnifyingGlassObjects1.length = 0;
gdjs.Hello_32there_32buckoCode.GDMagnifyingGlassObjects2.length = 0;
gdjs.Hello_32there_32buckoCode.GDStarryBackgroundBlackHoleObjects1.length = 0;
gdjs.Hello_32there_32buckoCode.GDStarryBackgroundBlackHoleObjects2.length = 0;
gdjs.Hello_32there_32buckoCode.GDBlueSpaceObjects1.length = 0;
gdjs.Hello_32there_32buckoCode.GDBlueSpaceObjects2.length = 0;
gdjs.Hello_32there_32buckoCode.GDWelcome_9595to_9595the_9595EmpireObjects1.length = 0;
gdjs.Hello_32there_32buckoCode.GDWelcome_9595to_9595the_9595EmpireObjects2.length = 0;
gdjs.Hello_32there_32buckoCode.GDStarObjects1.length = 0;
gdjs.Hello_32there_32buckoCode.GDStarObjects2.length = 0;
gdjs.Hello_32there_32buckoCode.GDWelcome_9595to_9595the_9595Empire2Objects1.length = 0;
gdjs.Hello_32there_32buckoCode.GDWelcome_9595to_9595the_9595Empire2Objects2.length = 0;
gdjs.Hello_32there_32buckoCode.GDBlackSquareDecoratedButtonObjects1.length = 0;
gdjs.Hello_32there_32buckoCode.GDBlackSquareDecoratedButtonObjects2.length = 0;


return;

}

gdjs['Hello_32there_32buckoCode'] = gdjs.Hello_32there_32buckoCode;
