gdjs.Game_32SceneCode = {};
gdjs.Game_32SceneCode.localVariables = [];
gdjs.Game_32SceneCode.GDBackgroundObjects1= [];
gdjs.Game_32SceneCode.GDBackgroundObjects2= [];
gdjs.Game_32SceneCode.GDCoinsObjects1= [];
gdjs.Game_32SceneCode.GDCoinsObjects2= [];
gdjs.Game_32SceneCode.GDJumpButtonObjects1= [];
gdjs.Game_32SceneCode.GDJumpButtonObjects2= [];
gdjs.Game_32SceneCode.GDJoystickObjects1= [];
gdjs.Game_32SceneCode.GDJoystickObjects2= [];
gdjs.Game_32SceneCode.GDMaleCharacter10Objects1= [];
gdjs.Game_32SceneCode.GDMaleCharacter10Objects2= [];
gdjs.Game_32SceneCode.GDPlatformObjects1= [];
gdjs.Game_32SceneCode.GDPlatformObjects2= [];
gdjs.Game_32SceneCode.GDManWithCapeObjects1= [];
gdjs.Game_32SceneCode.GDManWithCapeObjects2= [];
gdjs.Game_32SceneCode.GDBullPortraitObjects1= [];
gdjs.Game_32SceneCode.GDBullPortraitObjects2= [];
gdjs.Game_32SceneCode.GDCartoonSmokeBlastObjects1= [];
gdjs.Game_32SceneCode.GDCartoonSmokeBlastObjects2= [];


gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDMaleCharacter10Objects1Objects = Hashtable.newFrom({"MaleCharacter10": gdjs.Game_32SceneCode.GDMaleCharacter10Objects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDCoinsObjects1Objects = Hashtable.newFrom({"Coins": gdjs.Game_32SceneCode.GDCoinsObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBullPortraitObjects1Objects = Hashtable.newFrom({"BullPortrait": gdjs.Game_32SceneCode.GDBullPortraitObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDMaleCharacter10Objects1Objects = Hashtable.newFrom({"MaleCharacter10": gdjs.Game_32SceneCode.GDMaleCharacter10Objects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDManWithCapeObjects1Objects = Hashtable.newFrom({"ManWithCape": gdjs.Game_32SceneCode.GDManWithCapeObjects1});
gdjs.Game_32SceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Coins"), gdjs.Game_32SceneCode.GDCoinsObjects1);
gdjs.copyArray(runtimeScene.getObjects("MaleCharacter10"), gdjs.Game_32SceneCode.GDMaleCharacter10Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDMaleCharacter10Objects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDCoinsObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDCoinsObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDCoinsObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDCoinsObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "PickupCoin", false, 80, gdjs.randomFloatInRange(1, 1.1));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.Game_32SceneCode.GDBullPortraitObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBullPortraitObjects1Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MaleCharacter10"), gdjs.Game_32SceneCode.GDMaleCharacter10Objects1);
gdjs.copyArray(runtimeScene.getObjects("ManWithCape"), gdjs.Game_32SceneCode.GDManWithCapeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDMaleCharacter10Objects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDManWithCapeObjects1Objects, 500, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDManWithCapeObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDManWithCapeObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDManWithCapeObjects1[i].getBehavior("Flippable").flipX(true);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDManWithCapeObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDManWithCapeObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDManWithCapeObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDManWithCapeObjects1[i].getBehavior("PlatformerObject").abortJump();
}
}}

}


};

gdjs.Game_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32SceneCode.GDBackgroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDBackgroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDCoinsObjects1.length = 0;
gdjs.Game_32SceneCode.GDCoinsObjects2.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDJoystickObjects1.length = 0;
gdjs.Game_32SceneCode.GDJoystickObjects2.length = 0;
gdjs.Game_32SceneCode.GDMaleCharacter10Objects1.length = 0;
gdjs.Game_32SceneCode.GDMaleCharacter10Objects2.length = 0;
gdjs.Game_32SceneCode.GDPlatformObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlatformObjects2.length = 0;
gdjs.Game_32SceneCode.GDManWithCapeObjects1.length = 0;
gdjs.Game_32SceneCode.GDManWithCapeObjects2.length = 0;
gdjs.Game_32SceneCode.GDBullPortraitObjects1.length = 0;
gdjs.Game_32SceneCode.GDBullPortraitObjects2.length = 0;
gdjs.Game_32SceneCode.GDCartoonSmokeBlastObjects1.length = 0;
gdjs.Game_32SceneCode.GDCartoonSmokeBlastObjects2.length = 0;

gdjs.Game_32SceneCode.eventsList0(runtimeScene);
gdjs.Game_32SceneCode.GDBackgroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDBackgroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDCoinsObjects1.length = 0;
gdjs.Game_32SceneCode.GDCoinsObjects2.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDJoystickObjects1.length = 0;
gdjs.Game_32SceneCode.GDJoystickObjects2.length = 0;
gdjs.Game_32SceneCode.GDMaleCharacter10Objects1.length = 0;
gdjs.Game_32SceneCode.GDMaleCharacter10Objects2.length = 0;
gdjs.Game_32SceneCode.GDPlatformObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlatformObjects2.length = 0;
gdjs.Game_32SceneCode.GDManWithCapeObjects1.length = 0;
gdjs.Game_32SceneCode.GDManWithCapeObjects2.length = 0;
gdjs.Game_32SceneCode.GDBullPortraitObjects1.length = 0;
gdjs.Game_32SceneCode.GDBullPortraitObjects2.length = 0;
gdjs.Game_32SceneCode.GDCartoonSmokeBlastObjects1.length = 0;
gdjs.Game_32SceneCode.GDCartoonSmokeBlastObjects2.length = 0;


return;

}

gdjs['Game_32SceneCode'] = gdjs.Game_32SceneCode;
