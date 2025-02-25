gdjs.Imperial_32battle_32areaCode = {};
gdjs.Imperial_32battle_32areaCode.localVariables = [];
gdjs.Imperial_32battle_32areaCode.GDMergedFullBackgroundObjects1= [];
gdjs.Imperial_32battle_32areaCode.GDMergedFullBackgroundObjects2= [];
gdjs.Imperial_32battle_32areaCode.GDTIE_9595fighterObjects1= [];
gdjs.Imperial_32battle_32areaCode.GDTIE_9595fighterObjects2= [];
gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor7Objects1= [];
gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor7Objects2= [];
gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor5Objects1= [];
gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor5Objects2= [];
gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor6Objects1= [];
gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor6Objects2= [];
gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor1Objects1= [];
gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor1Objects2= [];
gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor2Objects1= [];
gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor2Objects2= [];
gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor3Objects1= [];
gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor3Objects2= [];
gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor4Objects1= [];
gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor4Objects2= [];


gdjs.Imperial_32battle_32areaCode.mapOfGDgdjs_9546Imperial_959532battle_959532areaCode_9546GDBigBrownMeteor1Objects1ObjectsGDgdjs_9546Imperial_959532battle_959532areaCode_9546GDBigBrownMeteor2Objects1ObjectsGDgdjs_9546Imperial_959532battle_959532areaCode_9546GDBigBrownMeteor3Objects1ObjectsGDgdjs_9546Imperial_959532battle_959532areaCode_9546GDBigBrownMeteor4Objects1ObjectsGDgdjs_9546Imperial_959532battle_959532areaCode_9546GDBigBrownMeteor7Objects1ObjectsGDgdjs_9546Imperial_959532battle_959532areaCode_9546GDBigBrownMeteor5Objects1ObjectsGDgdjs_9546Imperial_959532battle_959532areaCode_9546GDBigBrownMeteor6Objects1Objects = Hashtable.newFrom({"BigBrownMeteor1": gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor1Objects1, "BigBrownMeteor2": gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor2Objects1, "BigBrownMeteor3": gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor3Objects1, "BigBrownMeteor4": gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor4Objects1, "BigBrownMeteor7": gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor7Objects1, "BigBrownMeteor5": gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor5Objects1, "BigBrownMeteor6": gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor6Objects1});
gdjs.Imperial_32battle_32areaCode.mapOfGDgdjs_9546Imperial_959532battle_959532areaCode_9546GDTIE_95959595fighterObjects1Objects = Hashtable.newFrom({"TIE_fighter": gdjs.Imperial_32battle_32areaCode.GDTIE_9595fighterObjects1});
gdjs.Imperial_32battle_32areaCode.mapOfGDgdjs_9546Imperial_959532battle_959532areaCode_9546GDBigBrownMeteor1Objects1ObjectsGDgdjs_9546Imperial_959532battle_959532areaCode_9546GDBigBrownMeteor2Objects1ObjectsGDgdjs_9546Imperial_959532battle_959532areaCode_9546GDBigBrownMeteor3Objects1ObjectsGDgdjs_9546Imperial_959532battle_959532areaCode_9546GDBigBrownMeteor4Objects1ObjectsGDgdjs_9546Imperial_959532battle_959532areaCode_9546GDBigBrownMeteor7Objects1ObjectsGDgdjs_9546Imperial_959532battle_959532areaCode_9546GDBigBrownMeteor5Objects1ObjectsGDgdjs_9546Imperial_959532battle_959532areaCode_9546GDBigBrownMeteor6Objects1Objects = Hashtable.newFrom({"BigBrownMeteor1": gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor1Objects1, "BigBrownMeteor2": gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor2Objects1, "BigBrownMeteor3": gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor3Objects1, "BigBrownMeteor4": gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor4Objects1, "BigBrownMeteor7": gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor7Objects1, "BigBrownMeteor5": gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor5Objects1, "BigBrownMeteor6": gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor6Objects1});
gdjs.Imperial_32battle_32areaCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TIE_fighter"), gdjs.Imperial_32battle_32areaCode.GDTIE_9595fighterObjects1);
{for(var i = 0, len = gdjs.Imperial_32battle_32areaCode.GDTIE_9595fighterObjects1.length ;i < len;++i) {
    gdjs.Imperial_32battle_32areaCode.GDTIE_9595fighterObjects1[i].addForce(300, 0, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TIE_fighter"), gdjs.Imperial_32battle_32areaCode.GDTIE_9595fighterObjects1);
{for(var i = 0, len = gdjs.Imperial_32battle_32areaCode.GDTIE_9595fighterObjects1.length ;i < len;++i) {
    gdjs.Imperial_32battle_32areaCode.GDTIE_9595fighterObjects1[i].addForce(-(300), 0, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TIE_fighter"), gdjs.Imperial_32battle_32areaCode.GDTIE_9595fighterObjects1);
{for(var i = 0, len = gdjs.Imperial_32battle_32areaCode.GDTIE_9595fighterObjects1.length ;i < len;++i) {
    gdjs.Imperial_32battle_32areaCode.GDTIE_9595fighterObjects1[i].addForce(0, -(300), 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TIE_fighter"), gdjs.Imperial_32battle_32areaCode.GDTIE_9595fighterObjects1);
{for(var i = 0, len = gdjs.Imperial_32battle_32areaCode.GDTIE_9595fighterObjects1.length ;i < len;++i) {
    gdjs.Imperial_32battle_32areaCode.GDTIE_9595fighterObjects1[i].addForce(0, 300, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "meteor");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "meteor") >= 0.5;
if (isConditionTrue_0) {
gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor1Objects1.length = 0;

gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor2Objects1.length = 0;

gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor3Objects1.length = 0;

gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor4Objects1.length = 0;

gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor5Objects1.length = 0;

gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor6Objects1.length = 0;

gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor7Objects1.length = 0;

{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "meteor");
}{gdjs.evtTools.object.createObjectFromGroupOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Imperial_32battle_32areaCode.mapOfGDgdjs_9546Imperial_959532battle_959532areaCode_9546GDBigBrownMeteor1Objects1ObjectsGDgdjs_9546Imperial_959532battle_959532areaCode_9546GDBigBrownMeteor2Objects1ObjectsGDgdjs_9546Imperial_959532battle_959532areaCode_9546GDBigBrownMeteor3Objects1ObjectsGDgdjs_9546Imperial_959532battle_959532areaCode_9546GDBigBrownMeteor4Objects1ObjectsGDgdjs_9546Imperial_959532battle_959532areaCode_9546GDBigBrownMeteor7Objects1ObjectsGDgdjs_9546Imperial_959532battle_959532areaCode_9546GDBigBrownMeteor5Objects1ObjectsGDgdjs_9546Imperial_959532battle_959532areaCode_9546GDBigBrownMeteor6Objects1Objects, "BigBrownMeteor" + gdjs.evtTools.common.toString(gdjs.randomInRange(1, 7)), gdjs.randomInRange(1, gdjs.evtTools.window.getWindowInnerWidth()), 0, "");
}{for(var i = 0, len = gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor1Objects1.length ;i < len;++i) {
    gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor1Objects1[i].getBehavior("Scale").setScale(gdjs.randomFloatInRange(0.5, 2));
}
for(var i = 0, len = gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor2Objects1.length ;i < len;++i) {
    gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor2Objects1[i].getBehavior("Scale").setScale(gdjs.randomFloatInRange(0.5, 2));
}
for(var i = 0, len = gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor3Objects1.length ;i < len;++i) {
    gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor3Objects1[i].getBehavior("Scale").setScale(gdjs.randomFloatInRange(0.5, 2));
}
for(var i = 0, len = gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor4Objects1.length ;i < len;++i) {
    gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor4Objects1[i].getBehavior("Scale").setScale(gdjs.randomFloatInRange(0.5, 2));
}
for(var i = 0, len = gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor7Objects1.length ;i < len;++i) {
    gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor7Objects1[i].getBehavior("Scale").setScale(gdjs.randomFloatInRange(0.5, 2));
}
for(var i = 0, len = gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor5Objects1.length ;i < len;++i) {
    gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor5Objects1[i].getBehavior("Scale").setScale(gdjs.randomFloatInRange(0.5, 2));
}
for(var i = 0, len = gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor6Objects1.length ;i < len;++i) {
    gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor6Objects1[i].getBehavior("Scale").setScale(gdjs.randomFloatInRange(0.5, 2));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BigBrownMeteor1"), gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor1Objects1);
gdjs.copyArray(runtimeScene.getObjects("BigBrownMeteor2"), gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor2Objects1);
gdjs.copyArray(runtimeScene.getObjects("BigBrownMeteor3"), gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor3Objects1);
gdjs.copyArray(runtimeScene.getObjects("BigBrownMeteor4"), gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor4Objects1);
gdjs.copyArray(runtimeScene.getObjects("BigBrownMeteor5"), gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor5Objects1);
gdjs.copyArray(runtimeScene.getObjects("BigBrownMeteor6"), gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor6Objects1);
gdjs.copyArray(runtimeScene.getObjects("BigBrownMeteor7"), gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor7Objects1);
gdjs.copyArray(runtimeScene.getObjects("TIE_fighter"), gdjs.Imperial_32battle_32areaCode.GDTIE_9595fighterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Imperial_32battle_32areaCode.mapOfGDgdjs_9546Imperial_959532battle_959532areaCode_9546GDTIE_95959595fighterObjects1Objects, gdjs.Imperial_32battle_32areaCode.mapOfGDgdjs_9546Imperial_959532battle_959532areaCode_9546GDBigBrownMeteor1Objects1ObjectsGDgdjs_9546Imperial_959532battle_959532areaCode_9546GDBigBrownMeteor2Objects1ObjectsGDgdjs_9546Imperial_959532battle_959532areaCode_9546GDBigBrownMeteor3Objects1ObjectsGDgdjs_9546Imperial_959532battle_959532areaCode_9546GDBigBrownMeteor4Objects1ObjectsGDgdjs_9546Imperial_959532battle_959532areaCode_9546GDBigBrownMeteor7Objects1ObjectsGDgdjs_9546Imperial_959532battle_959532areaCode_9546GDBigBrownMeteor5Objects1ObjectsGDgdjs_9546Imperial_959532battle_959532areaCode_9546GDBigBrownMeteor6Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Haha bozo", false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("BigBrownMeteor1"), gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor1Objects1);
gdjs.copyArray(runtimeScene.getObjects("BigBrownMeteor2"), gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor2Objects1);
gdjs.copyArray(runtimeScene.getObjects("BigBrownMeteor3"), gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor3Objects1);
gdjs.copyArray(runtimeScene.getObjects("BigBrownMeteor4"), gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor4Objects1);
gdjs.copyArray(runtimeScene.getObjects("BigBrownMeteor5"), gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor5Objects1);
gdjs.copyArray(runtimeScene.getObjects("BigBrownMeteor6"), gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor6Objects1);
gdjs.copyArray(runtimeScene.getObjects("BigBrownMeteor7"), gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor7Objects1);
{for(var i = 0, len = gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor1Objects1.length ;i < len;++i) {
    gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor1Objects1[i].setY(gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor1Objects1[i].getY() + (7));
}
for(var i = 0, len = gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor2Objects1.length ;i < len;++i) {
    gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor2Objects1[i].setY(gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor2Objects1[i].getY() + (7));
}
for(var i = 0, len = gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor3Objects1.length ;i < len;++i) {
    gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor3Objects1[i].setY(gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor3Objects1[i].getY() + (7));
}
for(var i = 0, len = gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor4Objects1.length ;i < len;++i) {
    gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor4Objects1[i].setY(gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor4Objects1[i].getY() + (7));
}
for(var i = 0, len = gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor7Objects1.length ;i < len;++i) {
    gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor7Objects1[i].setY(gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor7Objects1[i].getY() + (7));
}
for(var i = 0, len = gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor5Objects1.length ;i < len;++i) {
    gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor5Objects1[i].setY(gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor5Objects1[i].getY() + (7));
}
for(var i = 0, len = gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor6Objects1.length ;i < len;++i) {
    gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor6Objects1[i].setY(gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor6Objects1[i].getY() + (7));
}
}}

}


};

gdjs.Imperial_32battle_32areaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Imperial_32battle_32areaCode.GDMergedFullBackgroundObjects1.length = 0;
gdjs.Imperial_32battle_32areaCode.GDMergedFullBackgroundObjects2.length = 0;
gdjs.Imperial_32battle_32areaCode.GDTIE_9595fighterObjects1.length = 0;
gdjs.Imperial_32battle_32areaCode.GDTIE_9595fighterObjects2.length = 0;
gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor7Objects1.length = 0;
gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor7Objects2.length = 0;
gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor5Objects1.length = 0;
gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor5Objects2.length = 0;
gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor6Objects1.length = 0;
gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor6Objects2.length = 0;
gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor1Objects1.length = 0;
gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor1Objects2.length = 0;
gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor2Objects1.length = 0;
gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor2Objects2.length = 0;
gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor3Objects1.length = 0;
gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor3Objects2.length = 0;
gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor4Objects1.length = 0;
gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor4Objects2.length = 0;

gdjs.Imperial_32battle_32areaCode.eventsList0(runtimeScene);
gdjs.Imperial_32battle_32areaCode.GDMergedFullBackgroundObjects1.length = 0;
gdjs.Imperial_32battle_32areaCode.GDMergedFullBackgroundObjects2.length = 0;
gdjs.Imperial_32battle_32areaCode.GDTIE_9595fighterObjects1.length = 0;
gdjs.Imperial_32battle_32areaCode.GDTIE_9595fighterObjects2.length = 0;
gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor7Objects1.length = 0;
gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor7Objects2.length = 0;
gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor5Objects1.length = 0;
gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor5Objects2.length = 0;
gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor6Objects1.length = 0;
gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor6Objects2.length = 0;
gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor1Objects1.length = 0;
gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor1Objects2.length = 0;
gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor2Objects1.length = 0;
gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor2Objects2.length = 0;
gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor3Objects1.length = 0;
gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor3Objects2.length = 0;
gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor4Objects1.length = 0;
gdjs.Imperial_32battle_32areaCode.GDBigBrownMeteor4Objects2.length = 0;


return;

}

gdjs['Imperial_32battle_32areaCode'] = gdjs.Imperial_32battle_32areaCode;
