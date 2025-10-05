var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i646 = root || request.c( 'UnityEngine.JointSpring' )
  var i647 = data
  i646.spring = i647[0]
  i646.damper = i647[1]
  i646.targetPosition = i647[2]
  return i646
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i648 = root || request.c( 'UnityEngine.JointMotor' )
  var i649 = data
  i648.m_TargetVelocity = i649[0]
  i648.m_Force = i649[1]
  i648.m_FreeSpin = i649[2]
  return i648
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i650 = root || request.c( 'UnityEngine.JointLimits' )
  var i651 = data
  i650.m_Min = i651[0]
  i650.m_Max = i651[1]
  i650.m_Bounciness = i651[2]
  i650.m_BounceMinVelocity = i651[3]
  i650.m_ContactDistance = i651[4]
  i650.minBounce = i651[5]
  i650.maxBounce = i651[6]
  return i650
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i652 = root || request.c( 'UnityEngine.JointDrive' )
  var i653 = data
  i652.m_PositionSpring = i653[0]
  i652.m_PositionDamper = i653[1]
  i652.m_MaximumForce = i653[2]
  i652.m_UseAcceleration = i653[3]
  return i652
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i654 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i655 = data
  i654.m_Spring = i655[0]
  i654.m_Damper = i655[1]
  return i654
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i656 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i657 = data
  i656.m_Limit = i657[0]
  i656.m_Bounciness = i657[1]
  i656.m_ContactDistance = i657[2]
  return i656
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i658 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i659 = data
  i658.m_ExtremumSlip = i659[0]
  i658.m_ExtremumValue = i659[1]
  i658.m_AsymptoteSlip = i659[2]
  i658.m_AsymptoteValue = i659[3]
  i658.m_Stiffness = i659[4]
  return i658
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i660 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i661 = data
  i660.m_LowerAngle = i661[0]
  i660.m_UpperAngle = i661[1]
  return i660
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i662 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i663 = data
  i662.m_MotorSpeed = i663[0]
  i662.m_MaximumMotorTorque = i663[1]
  return i662
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i664 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i665 = data
  i664.m_DampingRatio = i665[0]
  i664.m_Frequency = i665[1]
  i664.m_Angle = i665[2]
  return i664
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i666 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i667 = data
  i666.m_LowerTranslation = i667[0]
  i666.m_UpperTranslation = i667[1]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i669 = data
  i668.pivot = new pc.Vec2( i669[0], i669[1] )
  i668.anchorMin = new pc.Vec2( i669[2], i669[3] )
  i668.anchorMax = new pc.Vec2( i669[4], i669[5] )
  i668.sizeDelta = new pc.Vec2( i669[6], i669[7] )
  i668.anchoredPosition3D = new pc.Vec3( i669[8], i669[9], i669[10] )
  i668.rotation = new pc.Quat(i669[11], i669[12], i669[13], i669[14])
  i668.scale = new pc.Vec3( i669[15], i669[16], i669[17] )
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i671 = data
  request.r(i671[0], i671[1], 0, i670, 'animatorController')
  request.r(i671[2], i671[3], 0, i670, 'avatar')
  i670.updateMode = i671[4]
  i670.hasTransformHierarchy = !!i671[5]
  i670.applyRootMotion = !!i671[6]
  var i673 = i671[7]
  var i672 = []
  for(var i = 0; i < i673.length; i += 2) {
  request.r(i673[i + 0], i673[i + 1], 2, i672, '')
  }
  i670.humanBones = i672
  i670.enabled = !!i671[8]
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i677 = data
  i676.cullTransparentMesh = !!i677[0]
  return i676
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i678 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i679 = data
  i678.m_AspectMode = i679[0]
  i678.m_AspectRatio = i679[1]
  return i678
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i680 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i681 = data
  request.r(i681[0], i681[1], 0, i680, 'm_Texture')
  i680.m_UVRect = UnityEngine.Rect.MinMaxRect(i681[2], i681[3], i681[4], i681[5])
  i680.m_Maskable = !!i681[6]
  request.r(i681[7], i681[8], 0, i680, 'm_Material')
  i680.m_Color = new pc.Color(i681[9], i681[10], i681[11], i681[12])
  i680.m_RaycastTarget = !!i681[13]
  i680.m_RaycastPadding = new pc.Vec4( i681[14], i681[15], i681[16], i681[17] )
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i683 = data
  i682.name = i683[0]
  i682.tagId = i683[1]
  i682.enabled = !!i683[2]
  i682.isStatic = !!i683[3]
  i682.layer = i683[4]
  return i682
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i684 = root || request.c( 'UnityEngine.UI.Mask' )
  var i685 = data
  i684.m_ShowMaskGraphic = !!i685[0]
  return i684
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i686 = root || request.c( 'UnityEngine.UI.Image' )
  var i687 = data
  request.r(i687[0], i687[1], 0, i686, 'm_Sprite')
  i686.m_Type = i687[2]
  i686.m_PreserveAspect = !!i687[3]
  i686.m_FillCenter = !!i687[4]
  i686.m_FillMethod = i687[5]
  i686.m_FillAmount = i687[6]
  i686.m_FillClockwise = !!i687[7]
  i686.m_FillOrigin = i687[8]
  i686.m_UseSpriteMesh = !!i687[9]
  i686.m_PixelsPerUnitMultiplier = i687[10]
  i686.m_Maskable = !!i687[11]
  request.r(i687[12], i687[13], 0, i686, 'm_Material')
  i686.m_Color = new pc.Color(i687[14], i687[15], i687[16], i687[17])
  i686.m_RaycastTarget = !!i687[18]
  i686.m_RaycastPadding = new pc.Vec4( i687[19], i687[20], i687[21], i687[22] )
  return i686
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i688 = root || request.c( 'UnityEngine.UI.Text' )
  var i689 = data
  i688.m_FontData = request.d('UnityEngine.UI.FontData', i689[0], i688.m_FontData)
  i688.m_Text = i689[1]
  i688.m_Maskable = !!i689[2]
  request.r(i689[3], i689[4], 0, i688, 'm_Material')
  i688.m_Color = new pc.Color(i689[5], i689[6], i689[7], i689[8])
  i688.m_RaycastTarget = !!i689[9]
  i688.m_RaycastPadding = new pc.Vec4( i689[10], i689[11], i689[12], i689[13] )
  return i688
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i690 = root || request.c( 'UnityEngine.UI.FontData' )
  var i691 = data
  request.r(i691[0], i691[1], 0, i690, 'm_Font')
  i690.m_FontSize = i691[2]
  i690.m_FontStyle = i691[3]
  i690.m_BestFit = !!i691[4]
  i690.m_MinSize = i691[5]
  i690.m_MaxSize = i691[6]
  i690.m_Alignment = i691[7]
  i690.m_AlignByGeometry = !!i691[8]
  i690.m_RichText = !!i691[9]
  i690.m_HorizontalOverflow = i691[10]
  i690.m_VerticalOverflow = i691[11]
  i690.m_LineSpacing = i691[12]
  return i690
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i692 = root || request.c( 'UnityEngine.UI.Button' )
  var i693 = data
  i692.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i693[0], i692.m_OnClick)
  i692.m_Navigation = request.d('UnityEngine.UI.Navigation', i693[1], i692.m_Navigation)
  i692.m_Transition = i693[2]
  i692.m_Colors = request.d('UnityEngine.UI.ColorBlock', i693[3], i692.m_Colors)
  i692.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i693[4], i692.m_SpriteState)
  i692.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i693[5], i692.m_AnimationTriggers)
  i692.m_Interactable = !!i693[6]
  request.r(i693[7], i693[8], 0, i692, 'm_TargetGraphic')
  return i692
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i694 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i695 = data
  i694.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i695[0], i694.m_PersistentCalls)
  return i694
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i696 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i697 = data
  var i699 = i697[0]
  var i698 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i699.length; i += 1) {
    i698.add(request.d('UnityEngine.Events.PersistentCall', i699[i + 0]));
  }
  i696.m_Calls = i698
  return i696
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i702 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i703 = data
  request.r(i703[0], i703[1], 0, i702, 'm_Target')
  i702.m_TargetAssemblyTypeName = i703[2]
  i702.m_MethodName = i703[3]
  i702.m_Mode = i703[4]
  i702.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i703[5], i702.m_Arguments)
  i702.m_CallState = i703[6]
  return i702
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i704 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i705 = data
  request.r(i705[0], i705[1], 0, i704, 'm_ObjectArgument')
  i704.m_ObjectArgumentAssemblyTypeName = i705[2]
  i704.m_IntArgument = i705[3]
  i704.m_FloatArgument = i705[4]
  i704.m_StringArgument = i705[5]
  i704.m_BoolArgument = !!i705[6]
  return i704
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i706 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i707 = data
  i706.m_Mode = i707[0]
  i706.m_WrapAround = !!i707[1]
  request.r(i707[2], i707[3], 0, i706, 'm_SelectOnUp')
  request.r(i707[4], i707[5], 0, i706, 'm_SelectOnDown')
  request.r(i707[6], i707[7], 0, i706, 'm_SelectOnLeft')
  request.r(i707[8], i707[9], 0, i706, 'm_SelectOnRight')
  return i706
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i708 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i709 = data
  i708.m_NormalColor = new pc.Color(i709[0], i709[1], i709[2], i709[3])
  i708.m_HighlightedColor = new pc.Color(i709[4], i709[5], i709[6], i709[7])
  i708.m_PressedColor = new pc.Color(i709[8], i709[9], i709[10], i709[11])
  i708.m_SelectedColor = new pc.Color(i709[12], i709[13], i709[14], i709[15])
  i708.m_DisabledColor = new pc.Color(i709[16], i709[17], i709[18], i709[19])
  i708.m_ColorMultiplier = i709[20]
  i708.m_FadeDuration = i709[21]
  return i708
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i710 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i711 = data
  request.r(i711[0], i711[1], 0, i710, 'm_HighlightedSprite')
  request.r(i711[2], i711[3], 0, i710, 'm_PressedSprite')
  request.r(i711[4], i711[5], 0, i710, 'm_SelectedSprite')
  request.r(i711[6], i711[7], 0, i710, 'm_DisabledSprite')
  return i710
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i712 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i713 = data
  i712.m_NormalTrigger = i713[0]
  i712.m_HighlightedTrigger = i713[1]
  i712.m_PressedTrigger = i713[2]
  i712.m_SelectedTrigger = i713[3]
  i712.m_DisabledTrigger = i713[4]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i715 = data
  i714.m_Alpha = i715[0]
  i714.m_Interactable = !!i715[1]
  i714.m_BlocksRaycasts = !!i715[2]
  i714.m_IgnoreParentGroups = !!i715[3]
  i714.enabled = !!i715[4]
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i717 = data
  i716.name = i717[0]
  i716.width = i717[1]
  i716.height = i717[2]
  i716.mipmapCount = i717[3]
  i716.anisoLevel = i717[4]
  i716.filterMode = i717[5]
  i716.hdr = !!i717[6]
  i716.format = i717[7]
  i716.wrapMode = i717[8]
  i716.alphaIsTransparency = !!i717[9]
  i716.alphaSource = i717[10]
  i716.graphicsFormat = i717[11]
  i716.sRGBTexture = !!i717[12]
  i716.desiredColorSpace = i717[13]
  i716.wrapU = i717[14]
  i716.wrapV = i717[15]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i719 = data
  i718.planeDistance = i719[0]
  i718.referencePixelsPerUnit = i719[1]
  i718.isFallbackOverlay = !!i719[2]
  i718.renderMode = i719[3]
  i718.renderOrder = i719[4]
  i718.sortingLayerName = i719[5]
  i718.sortingOrder = i719[6]
  i718.scaleFactor = i719[7]
  request.r(i719[8], i719[9], 0, i718, 'worldCamera')
  i718.overrideSorting = !!i719[10]
  i718.pixelPerfect = !!i719[11]
  i718.targetDisplay = i719[12]
  i718.overridePixelPerfect = !!i719[13]
  i718.enabled = !!i719[14]
  return i718
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i720 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i721 = data
  i720.m_UiScaleMode = i721[0]
  i720.m_ReferencePixelsPerUnit = i721[1]
  i720.m_ScaleFactor = i721[2]
  i720.m_ReferenceResolution = new pc.Vec2( i721[3], i721[4] )
  i720.m_ScreenMatchMode = i721[5]
  i720.m_MatchWidthOrHeight = i721[6]
  i720.m_PhysicalUnit = i721[7]
  i720.m_FallbackScreenDPI = i721[8]
  i720.m_DefaultSpriteDPI = i721[9]
  i720.m_DynamicPixelsPerUnit = i721[10]
  i720.m_PresetInfoIsWorld = !!i721[11]
  return i720
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i722 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i723 = data
  i722.m_IgnoreReversedGraphics = !!i723[0]
  i722.m_BlockingObjects = i723[1]
  i722.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i723[2] )
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i724 = root || new pc.UnityMaterial()
  var i725 = data
  i724.name = i725[0]
  request.r(i725[1], i725[2], 0, i724, 'shader')
  i724.renderQueue = i725[3]
  i724.enableInstancing = !!i725[4]
  var i727 = i725[5]
  var i726 = []
  for(var i = 0; i < i727.length; i += 1) {
    i726.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i727[i + 0]) );
  }
  i724.floatParameters = i726
  var i729 = i725[6]
  var i728 = []
  for(var i = 0; i < i729.length; i += 1) {
    i728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i729[i + 0]) );
  }
  i724.colorParameters = i728
  var i731 = i725[7]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i731[i + 0]) );
  }
  i724.vectorParameters = i730
  var i733 = i725[8]
  var i732 = []
  for(var i = 0; i < i733.length; i += 1) {
    i732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i733[i + 0]) );
  }
  i724.textureParameters = i732
  var i735 = i725[9]
  var i734 = []
  for(var i = 0; i < i735.length; i += 1) {
    i734.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i735[i + 0]) );
  }
  i724.materialFlags = i734
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i739 = data
  i738.name = i739[0]
  i738.value = i739[1]
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i743 = data
  i742.name = i743[0]
  i742.value = new pc.Color(i743[1], i743[2], i743[3], i743[4])
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i747 = data
  i746.name = i747[0]
  i746.value = new pc.Vec4( i747[1], i747[2], i747[3], i747[4] )
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i751 = data
  i750.name = i751[0]
  request.r(i751[1], i751[2], 0, i750, 'value')
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i755 = data
  i754.name = i755[0]
  i754.enabled = !!i755[1]
  return i754
}

Deserializers["Scripts.Popup"] = function (request, data, root) {
  var i756 = root || request.c( 'Scripts.Popup' )
  var i757 = data
  i756.backgroundColor = new pc.Color(i757[0], i757[1], i757[2], i757[3])
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i759 = data
  i758.position = new pc.Vec3( i759[0], i759[1], i759[2] )
  i758.scale = new pc.Vec3( i759[3], i759[4], i759[5] )
  i758.rotation = new pc.Quat(i759[6], i759[7], i759[8], i759[9])
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i761 = data
  i760.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i761[0], i760.main)
  i760.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i761[1], i760.colorBySpeed)
  i760.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i761[2], i760.colorOverLifetime)
  i760.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i761[3], i760.emission)
  i760.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i761[4], i760.rotationBySpeed)
  i760.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i761[5], i760.rotationOverLifetime)
  i760.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i761[6], i760.shape)
  i760.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i761[7], i760.sizeBySpeed)
  i760.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i761[8], i760.sizeOverLifetime)
  i760.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i761[9], i760.textureSheetAnimation)
  i760.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i761[10], i760.velocityOverLifetime)
  i760.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i761[11], i760.noise)
  i760.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i761[12], i760.inheritVelocity)
  i760.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i761[13], i760.forceOverLifetime)
  i760.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i761[14], i760.limitVelocityOverLifetime)
  i760.useAutoRandomSeed = !!i761[15]
  i760.randomSeed = i761[16]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i762 = root || new pc.ParticleSystemMain()
  var i763 = data
  i762.duration = i763[0]
  i762.loop = !!i763[1]
  i762.prewarm = !!i763[2]
  i762.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[3], i762.startDelay)
  i762.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[4], i762.startLifetime)
  i762.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[5], i762.startSpeed)
  i762.startSize3D = !!i763[6]
  i762.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[7], i762.startSizeX)
  i762.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[8], i762.startSizeY)
  i762.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[9], i762.startSizeZ)
  i762.startRotation3D = !!i763[10]
  i762.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[11], i762.startRotationX)
  i762.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[12], i762.startRotationY)
  i762.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[13], i762.startRotationZ)
  i762.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i763[14], i762.startColor)
  i762.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[15], i762.gravityModifier)
  i762.simulationSpace = i763[16]
  request.r(i763[17], i763[18], 0, i762, 'customSimulationSpace')
  i762.simulationSpeed = i763[19]
  i762.useUnscaledTime = !!i763[20]
  i762.scalingMode = i763[21]
  i762.playOnAwake = !!i763[22]
  i762.maxParticles = i763[23]
  i762.emitterVelocityMode = i763[24]
  i762.stopAction = i763[25]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i764 = root || new pc.MinMaxCurve()
  var i765 = data
  i764.mode = i765[0]
  i764.curveMin = new pc.AnimationCurve( { keys_flow: i765[1] } )
  i764.curveMax = new pc.AnimationCurve( { keys_flow: i765[2] } )
  i764.curveMultiplier = i765[3]
  i764.constantMin = i765[4]
  i764.constantMax = i765[5]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i766 = root || new pc.MinMaxGradient()
  var i767 = data
  i766.mode = i767[0]
  i766.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i767[1], i766.gradientMin)
  i766.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i767[2], i766.gradientMax)
  i766.colorMin = new pc.Color(i767[3], i767[4], i767[5], i767[6])
  i766.colorMax = new pc.Color(i767[7], i767[8], i767[9], i767[10])
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i769 = data
  i768.mode = i769[0]
  var i771 = i769[1]
  var i770 = []
  for(var i = 0; i < i771.length; i += 1) {
    i770.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i771[i + 0]) );
  }
  i768.colorKeys = i770
  var i773 = i769[2]
  var i772 = []
  for(var i = 0; i < i773.length; i += 1) {
    i772.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i773[i + 0]) );
  }
  i768.alphaKeys = i772
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i774 = root || new pc.ParticleSystemColorBySpeed()
  var i775 = data
  i774.enabled = !!i775[0]
  i774.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i775[1], i774.color)
  i774.range = new pc.Vec2( i775[2], i775[3] )
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i779 = data
  i778.color = new pc.Color(i779[0], i779[1], i779[2], i779[3])
  i778.time = i779[4]
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i783 = data
  i782.alpha = i783[0]
  i782.time = i783[1]
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i784 = root || new pc.ParticleSystemColorOverLifetime()
  var i785 = data
  i784.enabled = !!i785[0]
  i784.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i785[1], i784.color)
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i786 = root || new pc.ParticleSystemEmitter()
  var i787 = data
  i786.enabled = !!i787[0]
  i786.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[1], i786.rateOverTime)
  i786.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[2], i786.rateOverDistance)
  var i789 = i787[3]
  var i788 = []
  for(var i = 0; i < i789.length; i += 1) {
    i788.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i789[i + 0]) );
  }
  i786.bursts = i788
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i792 = root || new pc.ParticleSystemBurst()
  var i793 = data
  i792.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[0], i792.count)
  i792.cycleCount = i793[1]
  i792.minCount = i793[2]
  i792.maxCount = i793[3]
  i792.repeatInterval = i793[4]
  i792.time = i793[5]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i794 = root || new pc.ParticleSystemRotationBySpeed()
  var i795 = data
  i794.enabled = !!i795[0]
  i794.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[1], i794.x)
  i794.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[2], i794.y)
  i794.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[3], i794.z)
  i794.separateAxes = !!i795[4]
  i794.range = new pc.Vec2( i795[5], i795[6] )
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i796 = root || new pc.ParticleSystemRotationOverLifetime()
  var i797 = data
  i796.enabled = !!i797[0]
  i796.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[1], i796.x)
  i796.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[2], i796.y)
  i796.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[3], i796.z)
  i796.separateAxes = !!i797[4]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i798 = root || new pc.ParticleSystemShape()
  var i799 = data
  i798.enabled = !!i799[0]
  i798.shapeType = i799[1]
  i798.randomDirectionAmount = i799[2]
  i798.sphericalDirectionAmount = i799[3]
  i798.randomPositionAmount = i799[4]
  i798.alignToDirection = !!i799[5]
  i798.radius = i799[6]
  i798.radiusMode = i799[7]
  i798.radiusSpread = i799[8]
  i798.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[9], i798.radiusSpeed)
  i798.radiusThickness = i799[10]
  i798.angle = i799[11]
  i798.length = i799[12]
  i798.boxThickness = new pc.Vec3( i799[13], i799[14], i799[15] )
  i798.meshShapeType = i799[16]
  request.r(i799[17], i799[18], 0, i798, 'mesh')
  request.r(i799[19], i799[20], 0, i798, 'meshRenderer')
  request.r(i799[21], i799[22], 0, i798, 'skinnedMeshRenderer')
  i798.useMeshMaterialIndex = !!i799[23]
  i798.meshMaterialIndex = i799[24]
  i798.useMeshColors = !!i799[25]
  i798.normalOffset = i799[26]
  i798.arc = i799[27]
  i798.arcMode = i799[28]
  i798.arcSpread = i799[29]
  i798.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[30], i798.arcSpeed)
  i798.donutRadius = i799[31]
  i798.position = new pc.Vec3( i799[32], i799[33], i799[34] )
  i798.rotation = new pc.Vec3( i799[35], i799[36], i799[37] )
  i798.scale = new pc.Vec3( i799[38], i799[39], i799[40] )
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i800 = root || new pc.ParticleSystemSizeBySpeed()
  var i801 = data
  i800.enabled = !!i801[0]
  i800.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[1], i800.x)
  i800.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[2], i800.y)
  i800.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[3], i800.z)
  i800.separateAxes = !!i801[4]
  i800.range = new pc.Vec2( i801[5], i801[6] )
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i802 = root || new pc.ParticleSystemSizeOverLifetime()
  var i803 = data
  i802.enabled = !!i803[0]
  i802.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[1], i802.x)
  i802.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[2], i802.y)
  i802.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[3], i802.z)
  i802.separateAxes = !!i803[4]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i804 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i805 = data
  i804.enabled = !!i805[0]
  i804.mode = i805[1]
  i804.animation = i805[2]
  i804.numTilesX = i805[3]
  i804.numTilesY = i805[4]
  i804.useRandomRow = !!i805[5]
  i804.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[6], i804.frameOverTime)
  i804.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[7], i804.startFrame)
  i804.cycleCount = i805[8]
  i804.rowIndex = i805[9]
  i804.flipU = i805[10]
  i804.flipV = i805[11]
  i804.spriteCount = i805[12]
  var i807 = i805[13]
  var i806 = []
  for(var i = 0; i < i807.length; i += 2) {
  request.r(i807[i + 0], i807[i + 1], 2, i806, '')
  }
  i804.sprites = i806
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i810 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i811 = data
  i810.enabled = !!i811[0]
  i810.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[1], i810.x)
  i810.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[2], i810.y)
  i810.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[3], i810.z)
  i810.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[4], i810.radial)
  i810.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[5], i810.speedModifier)
  i810.space = i811[6]
  i810.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[7], i810.orbitalX)
  i810.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[8], i810.orbitalY)
  i810.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[9], i810.orbitalZ)
  i810.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[10], i810.orbitalOffsetX)
  i810.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[11], i810.orbitalOffsetY)
  i810.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[12], i810.orbitalOffsetZ)
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i812 = root || new pc.ParticleSystemNoise()
  var i813 = data
  i812.enabled = !!i813[0]
  i812.separateAxes = !!i813[1]
  i812.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[2], i812.strengthX)
  i812.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[3], i812.strengthY)
  i812.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[4], i812.strengthZ)
  i812.frequency = i813[5]
  i812.damping = !!i813[6]
  i812.octaveCount = i813[7]
  i812.octaveMultiplier = i813[8]
  i812.octaveScale = i813[9]
  i812.quality = i813[10]
  i812.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[11], i812.scrollSpeed)
  i812.scrollSpeedMultiplier = i813[12]
  i812.remapEnabled = !!i813[13]
  i812.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[14], i812.remapX)
  i812.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[15], i812.remapY)
  i812.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[16], i812.remapZ)
  i812.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[17], i812.positionAmount)
  i812.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[18], i812.rotationAmount)
  i812.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[19], i812.sizeAmount)
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i814 = root || new pc.ParticleSystemInheritVelocity()
  var i815 = data
  i814.enabled = !!i815[0]
  i814.mode = i815[1]
  i814.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[2], i814.curve)
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i816 = root || new pc.ParticleSystemForceOverLifetime()
  var i817 = data
  i816.enabled = !!i817[0]
  i816.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[1], i816.x)
  i816.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[2], i816.y)
  i816.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[3], i816.z)
  i816.space = i817[4]
  i816.randomized = !!i817[5]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i818 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i819 = data
  i818.enabled = !!i819[0]
  i818.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[1], i818.limit)
  i818.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[2], i818.limitX)
  i818.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[3], i818.limitY)
  i818.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[4], i818.limitZ)
  i818.dampen = i819[5]
  i818.separateAxes = !!i819[6]
  i818.space = i819[7]
  i818.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[8], i818.drag)
  i818.multiplyDragByParticleSize = !!i819[9]
  i818.multiplyDragByParticleVelocity = !!i819[10]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i821 = data
  request.r(i821[0], i821[1], 0, i820, 'mesh')
  i820.meshCount = i821[2]
  i820.activeVertexStreamsCount = i821[3]
  i820.alignment = i821[4]
  i820.renderMode = i821[5]
  i820.sortMode = i821[6]
  i820.lengthScale = i821[7]
  i820.velocityScale = i821[8]
  i820.cameraVelocityScale = i821[9]
  i820.normalDirection = i821[10]
  i820.sortingFudge = i821[11]
  i820.minParticleSize = i821[12]
  i820.maxParticleSize = i821[13]
  i820.pivot = new pc.Vec3( i821[14], i821[15], i821[16] )
  request.r(i821[17], i821[18], 0, i820, 'trailMaterial')
  i820.applyActiveColorSpace = !!i821[19]
  i820.enabled = !!i821[20]
  request.r(i821[21], i821[22], 0, i820, 'sharedMaterial')
  var i823 = i821[23]
  var i822 = []
  for(var i = 0; i < i823.length; i += 2) {
  request.r(i823[i + 0], i823[i + 1], 2, i822, '')
  }
  i820.sharedMaterials = i822
  i820.receiveShadows = !!i821[24]
  i820.shadowCastingMode = i821[25]
  i820.sortingLayerID = i821[26]
  i820.sortingOrder = i821[27]
  i820.lightmapIndex = i821[28]
  i820.lightmapSceneIndex = i821[29]
  i820.lightmapScaleOffset = new pc.Vec4( i821[30], i821[31], i821[32], i821[33] )
  i820.lightProbeUsage = i821[34]
  i820.reflectionProbeUsage = i821[35]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i827 = data
  request.r(i827[0], i827[1], 0, i826, 'clip')
  request.r(i827[2], i827[3], 0, i826, 'outputAudioMixerGroup')
  i826.playOnAwake = !!i827[4]
  i826.loop = !!i827[5]
  i826.time = i827[6]
  i826.volume = i827[7]
  i826.pitch = i827[8]
  i826.enabled = !!i827[9]
  return i826
}

Deserializers["UnityEngine.UI.Outline"] = function (request, data, root) {
  var i828 = root || request.c( 'UnityEngine.UI.Outline' )
  var i829 = data
  i828.m_EffectColor = new pc.Color(i829[0], i829[1], i829[2], i829[3])
  i828.m_EffectDistance = new pc.Vec2( i829[4], i829[5] )
  i828.m_UseGraphicAlpha = !!i829[6]
  return i828
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i830 = root || request.c( 'UnityEngine.UI.Slider' )
  var i831 = data
  request.r(i831[0], i831[1], 0, i830, 'm_FillRect')
  request.r(i831[2], i831[3], 0, i830, 'm_HandleRect')
  i830.m_Direction = i831[4]
  i830.m_MinValue = i831[5]
  i830.m_MaxValue = i831[6]
  i830.m_WholeNumbers = !!i831[7]
  i830.m_Value = i831[8]
  i830.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i831[9], i830.m_OnValueChanged)
  i830.m_Navigation = request.d('UnityEngine.UI.Navigation', i831[10], i830.m_Navigation)
  i830.m_Transition = i831[11]
  i830.m_Colors = request.d('UnityEngine.UI.ColorBlock', i831[12], i830.m_Colors)
  i830.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i831[13], i830.m_SpriteState)
  i830.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i831[14], i830.m_AnimationTriggers)
  i830.m_Interactable = !!i831[15]
  request.r(i831[16], i831[17], 0, i830, 'm_TargetGraphic')
  return i830
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i832 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i833 = data
  i832.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i833[0], i832.m_PersistentCalls)
  return i832
}

Deserializers["Scripts.MusicManager"] = function (request, data, root) {
  var i834 = root || request.c( 'Scripts.MusicManager' )
  var i835 = data
  return i834
}

Deserializers["Scripts.SpriteSwapper"] = function (request, data, root) {
  var i836 = root || request.c( 'Scripts.SpriteSwapper' )
  var i837 = data
  request.r(i837[0], i837[1], 0, i836, 'enabledSprite')
  request.r(i837[2], i837[3], 0, i836, 'disabledSprite')
  return i836
}

Deserializers["Scripts.AnimatedButton"] = function (request, data, root) {
  var i838 = root || request.c( 'Scripts.AnimatedButton' )
  var i839 = data
  i838.interactable = !!i839[0]
  i838.m_OnClick = request.d('Scripts.ButtonClickedEvent', i839[1], i838.m_OnClick)
  return i838
}

Deserializers["Scripts.ButtonClickedEvent"] = function (request, data, root) {
  var i840 = root || request.c( 'Scripts.ButtonClickedEvent' )
  var i841 = data
  i840.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i841[0], i840.m_PersistentCalls)
  return i840
}

Deserializers["Scripts.SoundManager"] = function (request, data, root) {
  var i842 = root || request.c( 'Scripts.SoundManager' )
  var i843 = data
  return i842
}

Deserializers["Scripts.SceneTransition"] = function (request, data, root) {
  var i844 = root || request.c( 'Scripts.SceneTransition' )
  var i845 = data
  i844.scene = i845[0]
  i844.duration = i845[1]
  i844.color = new pc.Color(i845[2], i845[3], i845[4], i845[5])
  return i844
}

Deserializers["LevelTaskBox"] = function (request, data, root) {
  var i846 = root || request.c( 'LevelTaskBox' )
  var i847 = data
  request.r(i847[0], i847[1], 0, i846, '_tileImage')
  request.r(i847[2], i847[3], 0, i846, '_missionCountText')
  request.r(i847[4], i847[5], 0, i846, '_currentTileCountText')
  request.r(i847[6], i847[7], 0, i846, '_checkedIcon')
  return i846
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i848 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i849 = data
  i848.m_Spacing = i849[0]
  i848.m_ChildForceExpandWidth = !!i849[1]
  i848.m_ChildForceExpandHeight = !!i849[2]
  i848.m_ChildControlWidth = !!i849[3]
  i848.m_ChildControlHeight = !!i849[4]
  i848.m_ChildScaleWidth = !!i849[5]
  i848.m_ChildScaleHeight = !!i849[6]
  i848.m_ReverseArrangement = !!i849[7]
  i848.m_Padding = UnityEngine.RectOffset.FromPaddings(i849[8], i849[9], i849[10], i849[11])
  i848.m_ChildAlignment = i849[12]
  return i848
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i850 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i851 = data
  i850.m_hasFontAssetChanged = !!i851[0]
  request.r(i851[1], i851[2], 0, i850, 'm_baseMaterial')
  i850.m_maskOffset = new pc.Vec4( i851[3], i851[4], i851[5], i851[6] )
  i850.m_text = i851[7]
  i850.m_isRightToLeft = !!i851[8]
  request.r(i851[9], i851[10], 0, i850, 'm_fontAsset')
  request.r(i851[11], i851[12], 0, i850, 'm_sharedMaterial')
  var i853 = i851[13]
  var i852 = []
  for(var i = 0; i < i853.length; i += 2) {
  request.r(i853[i + 0], i853[i + 1], 2, i852, '')
  }
  i850.m_fontSharedMaterials = i852
  request.r(i851[14], i851[15], 0, i850, 'm_fontMaterial')
  var i855 = i851[16]
  var i854 = []
  for(var i = 0; i < i855.length; i += 2) {
  request.r(i855[i + 0], i855[i + 1], 2, i854, '')
  }
  i850.m_fontMaterials = i854
  i850.m_fontColor32 = UnityEngine.Color32.ConstructColor(i851[17], i851[18], i851[19], i851[20])
  i850.m_fontColor = new pc.Color(i851[21], i851[22], i851[23], i851[24])
  i850.m_enableVertexGradient = !!i851[25]
  i850.m_colorMode = i851[26]
  i850.m_fontColorGradient = request.d('TMPro.VertexGradient', i851[27], i850.m_fontColorGradient)
  request.r(i851[28], i851[29], 0, i850, 'm_fontColorGradientPreset')
  request.r(i851[30], i851[31], 0, i850, 'm_spriteAsset')
  i850.m_tintAllSprites = !!i851[32]
  request.r(i851[33], i851[34], 0, i850, 'm_StyleSheet')
  i850.m_TextStyleHashCode = i851[35]
  i850.m_overrideHtmlColors = !!i851[36]
  i850.m_faceColor = UnityEngine.Color32.ConstructColor(i851[37], i851[38], i851[39], i851[40])
  i850.m_fontSize = i851[41]
  i850.m_fontSizeBase = i851[42]
  i850.m_fontWeight = i851[43]
  i850.m_enableAutoSizing = !!i851[44]
  i850.m_fontSizeMin = i851[45]
  i850.m_fontSizeMax = i851[46]
  i850.m_fontStyle = i851[47]
  i850.m_HorizontalAlignment = i851[48]
  i850.m_VerticalAlignment = i851[49]
  i850.m_textAlignment = i851[50]
  i850.m_characterSpacing = i851[51]
  i850.m_wordSpacing = i851[52]
  i850.m_lineSpacing = i851[53]
  i850.m_lineSpacingMax = i851[54]
  i850.m_paragraphSpacing = i851[55]
  i850.m_charWidthMaxAdj = i851[56]
  i850.m_enableWordWrapping = !!i851[57]
  i850.m_wordWrappingRatios = i851[58]
  i850.m_overflowMode = i851[59]
  request.r(i851[60], i851[61], 0, i850, 'm_linkedTextComponent')
  request.r(i851[62], i851[63], 0, i850, 'parentLinkedComponent')
  i850.m_enableKerning = !!i851[64]
  i850.m_enableExtraPadding = !!i851[65]
  i850.checkPaddingRequired = !!i851[66]
  i850.m_isRichText = !!i851[67]
  i850.m_parseCtrlCharacters = !!i851[68]
  i850.m_isOrthographic = !!i851[69]
  i850.m_isCullingEnabled = !!i851[70]
  i850.m_horizontalMapping = i851[71]
  i850.m_verticalMapping = i851[72]
  i850.m_uvLineOffset = i851[73]
  i850.m_geometrySortingOrder = i851[74]
  i850.m_IsTextObjectScaleStatic = !!i851[75]
  i850.m_VertexBufferAutoSizeReduction = !!i851[76]
  i850.m_useMaxVisibleDescender = !!i851[77]
  i850.m_pageToDisplay = i851[78]
  i850.m_margin = new pc.Vec4( i851[79], i851[80], i851[81], i851[82] )
  i850.m_isUsingLegacyAnimationComponent = !!i851[83]
  i850.m_isVolumetricText = !!i851[84]
  i850.m_Maskable = !!i851[85]
  request.r(i851[86], i851[87], 0, i850, 'm_Material')
  i850.m_Color = new pc.Color(i851[88], i851[89], i851[90], i851[91])
  i850.m_RaycastTarget = !!i851[92]
  i850.m_RaycastPadding = new pc.Vec4( i851[93], i851[94], i851[95], i851[96] )
  return i850
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i856 = root || request.c( 'TMPro.VertexGradient' )
  var i857 = data
  i856.topLeft = new pc.Color(i857[0], i857[1], i857[2], i857[3])
  i856.topRight = new pc.Color(i857[4], i857[5], i857[6], i857[7])
  i856.bottomLeft = new pc.Color(i857[8], i857[9], i857[10], i857[11])
  i856.bottomRight = new pc.Color(i857[12], i857[13], i857[14], i857[15])
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i859 = data
  i858.name = i859[0]
  i858.index = i859[1]
  i858.startup = !!i859[2]
  return i858
}

Deserializers["PlayableSettings"] = function (request, data, root) {
  var i860 = root || request.c( 'PlayableSettings' )
  var i861 = data
  i860.m_SkipMainMenu = !!i861[0]
  i860.m_UseCTAScreen = !!i861[1]
  i860.m_EndcardActivationSendsToStore = !!i861[2]
  i860.m_ShowEndcardAfterXTaps = !!i861[3]
  i860.m_TapsBeforeShowingEndcard = i861[4]
  return i860
}

Deserializers["EndCardController"] = function (request, data, root) {
  var i862 = root || request.c( 'EndCardController' )
  var i863 = data
  i862.alwaysShowEndcardTESTING = !!i863[0]
  i862.EndCardOpenedEvent = request.d('UnityEngine.Events.UnityEvent', i863[1], i862.EndCardOpenedEvent)
  i862._backgroundColor = new pc.Color(i863[2], i863[3], i863[4], i863[5])
  request.r(i863[6], i863[7], 0, i862, '_backgroundTexture')
  request.r(i863[8], i863[9], 0, i862, '_iconTexture')
  i862._iconColor = new pc.Color(i863[10], i863[11], i863[12], i863[13])
  request.r(i863[14], i863[15], 0, i862, '_buttonTexture')
  i862._buttonColor = new pc.Color(i863[16], i863[17], i863[18], i863[19])
  i862._endCardDescriptionText = i863[20]
  i862._CTAButtonText = i863[21]
  i862._useBestFitOnCTA = !!i863[22]
  i862._CTAFontColor = new pc.Color(i863[23], i863[24], i863[25], i863[26])
  i862._descriptionFontColor = new pc.Color(i863[27], i863[28], i863[29], i863[30])
  request.r(i863[31], i863[32], 0, i862, '_CTAFont')
  request.r(i863[33], i863[34], 0, i862, '_descriptionFont')
  i862._CTAFontSize = i863[35]
  i862._descriptionFontSize = i863[36]
  i862._centerDescriptionX = !!i863[37]
  i862._centerDescriptionY = !!i863[38]
  i862._centerButtonX = !!i863[39]
  i862._centerButtonY = !!i863[40]
  i862._descriptionPositionX = i863[41]
  i862._descriptionPositionY = i863[42]
  i862._buttonPositionX = i863[43]
  i862._buttonPositionY = i863[44]
  i862._CTAFontSizeLandscape = i863[45]
  i862._descriptionFontSizeLandscape = i863[46]
  i862._centerDescriptionXLandscape = !!i863[47]
  i862._centerDescriptionYLandscape = !!i863[48]
  i862._centerButtonXLandscape = !!i863[49]
  i862._centerButtonYLandscape = !!i863[50]
  i862._descriptionPositionXLandscape = i863[51]
  i862._descriptionPositionYLandscape = i863[52]
  i862._buttonPositionXLandscape = i863[53]
  i862._buttonPositionYLandscape = i863[54]
  i862._centerIconX = !!i863[55]
  i862._centerIconY = !!i863[56]
  i862._iconPositionX = i863[57]
  i862._iconPositionY = i863[58]
  i862._iconSize = i863[59]
  i862._roundEdgesOnIcon = !!i863[60]
  i862._centerIconXLandscape = !!i863[61]
  i862._centerIconYLandscape = !!i863[62]
  i862._iconPositionXLandscape = i863[63]
  i862._iconPositionYLandscape = i863[64]
  i862._iconSizeLandscape = i863[65]
  i862._roundEdgesOnIconLandscape = !!i863[66]
  i862._endCardClickableOptions = i863[67]
  i862._buttonAnimationType = i863[68]
  i862._endCardPortraitAnimationType = i863[69]
  i862._endCardLandscapeAnimationType = i863[70]
  request.r(i863[71], i863[72], 0, i862, '_backgroundImage')
  request.r(i863[73], i863[74], 0, i862, '_CTAButton')
  request.r(i863[75], i863[76], 0, i862, '_ScreenCTAButton')
  request.r(i863[77], i863[78], 0, i862, '_CTAButtonTextText')
  request.r(i863[79], i863[80], 0, i862, '_EndCardDescriptionTextText')
  request.r(i863[81], i863[82], 0, i862, '_maskIcon')
  request.r(i863[83], i863[84], 0, i862, '_iconRect')
  request.r(i863[85], i863[86], 0, i862, '_iconRectMask')
  request.r(i863[87], i863[88], 0, i862, '_descriptionRect')
  request.r(i863[89], i863[90], 0, i862, '_buttonRect')
  request.r(i863[91], i863[92], 0, i862, '_CTAButtonAnimator')
  request.r(i863[93], i863[94], 0, i862, '_endCardAnimator')
  request.r(i863[95], i863[96], 0, i862, '_iconImage')
  request.r(i863[97], i863[98], 0, i862, '_CTAButtonImage')
  return i862
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i864 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i865 = data
  i864.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i865[0], i864.m_PersistentCalls)
  return i864
}

Deserializers["EndCardSetScale"] = function (request, data, root) {
  var i866 = root || request.c( 'EndCardSetScale' )
  var i867 = data
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i869 = data
  i868.aspect = i869[0]
  i868.orthographic = !!i869[1]
  i868.orthographicSize = i869[2]
  i868.backgroundColor = new pc.Color(i869[3], i869[4], i869[5], i869[6])
  i868.nearClipPlane = i869[7]
  i868.farClipPlane = i869[8]
  i868.fieldOfView = i869[9]
  i868.depth = i869[10]
  i868.clearFlags = i869[11]
  i868.cullingMask = i869[12]
  i868.rect = i869[13]
  request.r(i869[14], i869[15], 0, i868, 'targetTexture')
  i868.usePhysicalProperties = !!i869[16]
  i868.focalLength = i869[17]
  i868.sensorSize = new pc.Vec2( i869[18], i869[19] )
  i868.lensShift = new pc.Vec2( i869[20], i869[21] )
  i868.gateFit = i869[22]
  i868.commandBufferCount = i869[23]
  i868.cameraType = i869[24]
  i868.enabled = !!i869[25]
  return i868
}

Deserializers["Scripts.PopupOpener"] = function (request, data, root) {
  var i870 = root || request.c( 'Scripts.PopupOpener' )
  var i871 = data
  request.r(i871[0], i871[1], 0, i870, 'popupPrefab')
  return i870
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i872 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i873 = data
  i872.m_Spacing = i873[0]
  i872.m_ChildForceExpandWidth = !!i873[1]
  i872.m_ChildForceExpandHeight = !!i873[2]
  i872.m_ChildControlWidth = !!i873[3]
  i872.m_ChildControlHeight = !!i873[4]
  i872.m_ChildScaleWidth = !!i873[5]
  i872.m_ChildScaleHeight = !!i873[6]
  i872.m_ReverseArrangement = !!i873[7]
  i872.m_Padding = UnityEngine.RectOffset.FromPaddings(i873[8], i873[9], i873[10], i873[11])
  i872.m_ChildAlignment = i873[12]
  return i872
}

Deserializers["Match3.Board"] = function (request, data, root) {
  var i874 = root || request.c( 'Match3.Board' )
  var i875 = data
  var i877 = i875[0]
  var i876 = new (System.Collections.Generic.List$1(Bridge.ns('Match3.Row')))
  for(var i = 0; i < i877.length; i += 1) {
    i876.add(request.d('Match3.Row', i877[i + 0]));
  }
  i874._rows = i876
  request.r(i875[1], i875[2], 0, i874, '_levelManager')
  i874._tweenDuration = i875[3]
  request.r(i875[4], i875[5], 0, i874, '_swappingOverlay')
  i874._ensureNoStartingMatches = !!i875[6]
  return i874
}

Deserializers["Match3.Row"] = function (request, data, root) {
  var i880 = root || request.c( 'Match3.Row' )
  var i881 = data
  var i883 = i881[0]
  var i882 = new (System.Collections.Generic.List$1(Bridge.ns('Match3.Tile')))
  for(var i = 0; i < i883.length; i += 2) {
  request.r(i883[i + 0], i883[i + 1], 1, i882, '')
  }
  i880.Tiles = i882
  return i880
}

Deserializers["Match3.Tile"] = function (request, data, root) {
  var i886 = root || request.c( 'Match3.Tile' )
  var i887 = data
  i886.X = i887[0]
  i886.Y = i887[1]
  request.r(i887[2], i887[3], 0, i886, 'Icon')
  return i886
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i888 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i889 = data
  request.r(i889[0], i889[1], 0, i888, 'm_FirstSelected')
  i888.m_sendNavigationEvents = !!i889[2]
  i888.m_DragThreshold = i889[3]
  return i888
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i890 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i891 = data
  i890.m_HorizontalAxis = i891[0]
  i890.m_VerticalAxis = i891[1]
  i890.m_SubmitButton = i891[2]
  i890.m_CancelButton = i891[3]
  i890.m_InputActionsPerSecond = i891[4]
  i890.m_RepeatDelay = i891[5]
  i890.m_ForceModuleActive = !!i891[6]
  i890.m_SendPointerHoverToParent = !!i891[7]
  return i890
}

Deserializers["Match3.Core.LevelManager"] = function (request, data, root) {
  var i892 = root || request.c( 'Match3.Core.LevelManager' )
  var i893 = data
  request.r(i893[0], i893[1], 0, i892, '_movesCountText')
  request.r(i893[2], i893[3], 0, i892, '_tasksParent')
  request.r(i893[4], i893[5], 0, i892, '_levelComplete')
  request.r(i893[6], i893[7], 0, i892, '_disableBoard')
  i892._currentLevel = request.d('Match3.Settings.Level', i893[8], i892._currentLevel)
  request.r(i893[9], i893[10], 0, i892, '_boxPrefab')
  request.r(i893[11], i893[12], 0, i892, '_progressSlider')
  var i895 = i893[13]
  var i894 = []
  for(var i = 0; i < i895.length; i += 2) {
  request.r(i895[i + 0], i895[i + 1], 2, i894, '')
  }
  i892._stars = i894
  request.r(i893[14], i893[15], 0, i892, '_activeStarSprite')
  request.r(i893[16], i893[17], 0, i892, '_inactiveStarSprite')
  i892._progressTweenDuration = i893[18]
  return i892
}

Deserializers["Match3.Settings.Level"] = function (request, data, root) {
  var i896 = root || request.c( 'Match3.Settings.Level' )
  var i897 = data
  var i899 = i897[0]
  var i898 = new (System.Collections.Generic.List$1(Bridge.ns('Match3.Settings.Mission')))
  for(var i = 0; i < i899.length; i += 1) {
    i898.add(request.d('Match3.Settings.Mission', i899[i + 0]));
  }
  i896.Missions = i898
  i896.TotalMoves = i897[1]
  i896.StarsCount = i897[2]
  i896.Score = i897[3]
  i896.LevelButtonType = i897[4]
  return i896
}

Deserializers["Match3.Settings.Mission"] = function (request, data, root) {
  var i902 = root || request.c( 'Match3.Settings.Mission' )
  var i903 = data
  i902.TileType = i903[0]
  i902.TargetCount = i903[1]
  return i902
}

Deserializers["Scripts.BackgroundMusic"] = function (request, data, root) {
  var i906 = root || request.c( 'Scripts.BackgroundMusic' )
  var i907 = data
  return i906
}

Deserializers["Settings.SettingsProvider"] = function (request, data, root) {
  var i908 = root || request.c( 'Settings.SettingsProvider' )
  var i909 = data
  var i911 = i909[0]
  var i910 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.MonoBehaviour')))
  for(var i = 0; i < i911.length; i += 2) {
  request.r(i911[i + 0], i911[i + 1], 1, i910, '')
  }
  i908._settingsList = i910
  return i908
}

Deserializers["Match3.TileTypeDatas"] = function (request, data, root) {
  var i914 = root || request.c( 'Match3.TileTypeDatas' )
  var i915 = data
  var i917 = i915[0]
  var i916 = new (System.Collections.Generic.List$1(Bridge.ns('Match3.TileTypeData')))
  for(var i = 0; i < i917.length; i += 1) {
    i916.add(request.d('Match3.TileTypeData', i917[i + 0]));
  }
  i914.TileDatas = i916
  return i914
}

Deserializers["Match3.TileTypeData"] = function (request, data, root) {
  var i920 = root || request.c( 'Match3.TileTypeData' )
  var i921 = data
  i920.TileType = i921[0]
  i920.TileAbility = i921[1]
  request.r(i921[2], i921[3], 0, i920, 'Sprite')
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i923 = data
  i922.ambientIntensity = i923[0]
  i922.reflectionIntensity = i923[1]
  i922.ambientMode = i923[2]
  i922.ambientLight = new pc.Color(i923[3], i923[4], i923[5], i923[6])
  i922.ambientSkyColor = new pc.Color(i923[7], i923[8], i923[9], i923[10])
  i922.ambientGroundColor = new pc.Color(i923[11], i923[12], i923[13], i923[14])
  i922.ambientEquatorColor = new pc.Color(i923[15], i923[16], i923[17], i923[18])
  i922.fogColor = new pc.Color(i923[19], i923[20], i923[21], i923[22])
  i922.fogEndDistance = i923[23]
  i922.fogStartDistance = i923[24]
  i922.fogDensity = i923[25]
  i922.fog = !!i923[26]
  request.r(i923[27], i923[28], 0, i922, 'skybox')
  i922.fogMode = i923[29]
  var i925 = i923[30]
  var i924 = []
  for(var i = 0; i < i925.length; i += 1) {
    i924.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i925[i + 0]) );
  }
  i922.lightmaps = i924
  i922.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i923[31], i922.lightProbes)
  i922.lightmapsMode = i923[32]
  i922.mixedBakeMode = i923[33]
  i922.environmentLightingMode = i923[34]
  i922.ambientProbe = new pc.SphericalHarmonicsL2(i923[35])
  i922.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i923[36])
  i922.useReferenceAmbientProbe = !!i923[37]
  request.r(i923[38], i923[39], 0, i922, 'customReflection')
  request.r(i923[40], i923[41], 0, i922, 'defaultReflection')
  i922.defaultReflectionMode = i923[42]
  i922.defaultReflectionResolution = i923[43]
  i922.sunLightObjectId = i923[44]
  i922.pixelLightCount = i923[45]
  i922.defaultReflectionHDR = !!i923[46]
  i922.hasLightDataAsset = !!i923[47]
  i922.hasManualGenerate = !!i923[48]
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i929 = data
  request.r(i929[0], i929[1], 0, i928, 'lightmapColor')
  request.r(i929[2], i929[3], 0, i928, 'lightmapDirection')
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i930 = root || new UnityEngine.LightProbes()
  var i931 = data
  return i930
}

Deserializers["InteractiveEndCardBuilder.Scripts.ExampleEndCardCallScript"] = function (request, data, root) {
  var i938 = root || request.c( 'InteractiveEndCardBuilder.Scripts.ExampleEndCardCallScript' )
  var i939 = data
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i941 = data
  var i943 = i941[0]
  var i942 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i943.length; i += 1) {
    i942.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i943[i + 0]));
  }
  i940.ShaderCompilationErrors = i942
  i940.name = i941[1]
  i940.guid = i941[2]
  var i945 = i941[3]
  var i944 = []
  for(var i = 0; i < i945.length; i += 1) {
    i944.push( i945[i + 0] );
  }
  i940.shaderDefinedKeywords = i944
  var i947 = i941[4]
  var i946 = []
  for(var i = 0; i < i947.length; i += 1) {
    i946.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i947[i + 0]) );
  }
  i940.passes = i946
  var i949 = i941[5]
  var i948 = []
  for(var i = 0; i < i949.length; i += 1) {
    i948.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i949[i + 0]) );
  }
  i940.usePasses = i948
  var i951 = i941[6]
  var i950 = []
  for(var i = 0; i < i951.length; i += 1) {
    i950.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i951[i + 0]) );
  }
  i940.defaultParameterValues = i950
  request.r(i941[7], i941[8], 0, i940, 'unityFallbackShader')
  i940.readDepth = !!i941[9]
  i940.isCreatedByShaderGraph = !!i941[10]
  i940.disableBatching = !!i941[11]
  i940.compiled = !!i941[12]
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i955 = data
  i954.shaderName = i955[0]
  i954.errorMessage = i955[1]
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i960 = root || new pc.UnityShaderPass()
  var i961 = data
  i960.id = i961[0]
  i960.subShaderIndex = i961[1]
  i960.name = i961[2]
  i960.passType = i961[3]
  i960.grabPassTextureName = i961[4]
  i960.usePass = !!i961[5]
  i960.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i961[6], i960.zTest)
  i960.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i961[7], i960.zWrite)
  i960.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i961[8], i960.culling)
  i960.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i961[9], i960.blending)
  i960.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i961[10], i960.alphaBlending)
  i960.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i961[11], i960.colorWriteMask)
  i960.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i961[12], i960.offsetUnits)
  i960.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i961[13], i960.offsetFactor)
  i960.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i961[14], i960.stencilRef)
  i960.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i961[15], i960.stencilReadMask)
  i960.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i961[16], i960.stencilWriteMask)
  i960.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i961[17], i960.stencilOp)
  i960.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i961[18], i960.stencilOpFront)
  i960.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i961[19], i960.stencilOpBack)
  var i963 = i961[20]
  var i962 = []
  for(var i = 0; i < i963.length; i += 1) {
    i962.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i963[i + 0]) );
  }
  i960.tags = i962
  var i965 = i961[21]
  var i964 = []
  for(var i = 0; i < i965.length; i += 1) {
    i964.push( i965[i + 0] );
  }
  i960.passDefinedKeywords = i964
  var i967 = i961[22]
  var i966 = []
  for(var i = 0; i < i967.length; i += 1) {
    i966.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i967[i + 0]) );
  }
  i960.passDefinedKeywordGroups = i966
  var i969 = i961[23]
  var i968 = []
  for(var i = 0; i < i969.length; i += 1) {
    i968.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i969[i + 0]) );
  }
  i960.variants = i968
  var i971 = i961[24]
  var i970 = []
  for(var i = 0; i < i971.length; i += 1) {
    i970.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i971[i + 0]) );
  }
  i960.excludedVariants = i970
  i960.hasDepthReader = !!i961[25]
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i973 = data
  i972.val = i973[0]
  i972.name = i973[1]
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i975 = data
  i974.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i975[0], i974.src)
  i974.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i975[1], i974.dst)
  i974.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i975[2], i974.op)
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i977 = data
  i976.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i977[0], i976.pass)
  i976.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i977[1], i976.fail)
  i976.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i977[2], i976.zFail)
  i976.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i977[3], i976.comp)
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i981 = data
  i980.name = i981[0]
  i980.value = i981[1]
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i985 = data
  var i987 = i985[0]
  var i986 = []
  for(var i = 0; i < i987.length; i += 1) {
    i986.push( i987[i + 0] );
  }
  i984.keywords = i986
  i984.hasDiscard = !!i985[1]
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i991 = data
  i990.passId = i991[0]
  i990.subShaderIndex = i991[1]
  var i993 = i991[2]
  var i992 = []
  for(var i = 0; i < i993.length; i += 1) {
    i992.push( i993[i + 0] );
  }
  i990.keywords = i992
  i990.vertexProgram = i991[3]
  i990.fragmentProgram = i991[4]
  i990.exportedForWebGl2 = !!i991[5]
  i990.readDepth = !!i991[6]
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i997 = data
  request.r(i997[0], i997[1], 0, i996, 'shader')
  i996.pass = i997[2]
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1001 = data
  i1000.name = i1001[0]
  i1000.type = i1001[1]
  i1000.value = new pc.Vec4( i1001[2], i1001[3], i1001[4], i1001[5] )
  i1000.textureValue = i1001[6]
  i1000.shaderPropertyFlag = i1001[7]
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1003 = data
  i1002.name = i1003[0]
  request.r(i1003[1], i1003[2], 0, i1002, 'texture')
  i1002.aabb = i1003[3]
  i1002.vertices = i1003[4]
  i1002.triangles = i1003[5]
  i1002.textureRect = UnityEngine.Rect.MinMaxRect(i1003[6], i1003[7], i1003[8], i1003[9])
  i1002.packedRect = UnityEngine.Rect.MinMaxRect(i1003[10], i1003[11], i1003[12], i1003[13])
  i1002.border = new pc.Vec4( i1003[14], i1003[15], i1003[16], i1003[17] )
  i1002.transparency = i1003[18]
  i1002.bounds = i1003[19]
  i1002.pixelsPerUnit = i1003[20]
  i1002.textureWidth = i1003[21]
  i1002.textureHeight = i1003[22]
  i1002.nativeSize = new pc.Vec2( i1003[23], i1003[24] )
  i1002.pivot = new pc.Vec2( i1003[25], i1003[26] )
  i1002.textureRectOffset = new pc.Vec2( i1003[27], i1003[28] )
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1005 = data
  i1004.name = i1005[0]
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1007 = data
  i1006.name = i1007[0]
  i1006.wrapMode = i1007[1]
  i1006.isLooping = !!i1007[2]
  i1006.length = i1007[3]
  var i1009 = i1007[4]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1009[i + 0]) );
  }
  i1006.curves = i1008
  var i1011 = i1007[5]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 1) {
    i1010.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1011[i + 0]) );
  }
  i1006.events = i1010
  i1006.halfPrecision = !!i1007[6]
  i1006._frameRate = i1007[7]
  i1006.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1007[8], i1006.localBounds)
  i1006.hasMuscleCurves = !!i1007[9]
  var i1013 = i1007[10]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.push( i1013[i + 0] );
  }
  i1006.clipMuscleConstant = i1012
  i1006.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1007[11], i1006.clipBindingConstant)
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1017 = data
  i1016.path = i1017[0]
  i1016.hash = i1017[1]
  i1016.componentType = i1017[2]
  i1016.property = i1017[3]
  i1016.keys = i1017[4]
  var i1019 = i1017[5]
  var i1018 = []
  for(var i = 0; i < i1019.length; i += 1) {
    i1018.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1019[i + 0]) );
  }
  i1016.objectReferenceKeys = i1018
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1023 = data
  i1022.functionName = i1023[0]
  i1022.floatParameter = i1023[1]
  i1022.intParameter = i1023[2]
  i1022.stringParameter = i1023[3]
  request.r(i1023[4], i1023[5], 0, i1022, 'objectReferenceParameter')
  i1022.time = i1023[6]
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1025 = data
  i1024.center = new pc.Vec3( i1025[0], i1025[1], i1025[2] )
  i1024.extends = new pc.Vec3( i1025[3], i1025[4], i1025[5] )
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1029 = data
  var i1031 = i1029[0]
  var i1030 = []
  for(var i = 0; i < i1031.length; i += 1) {
    i1030.push( i1031[i + 0] );
  }
  i1028.genericBindings = i1030
  var i1033 = i1029[1]
  var i1032 = []
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.push( i1033[i + 0] );
  }
  i1028.pptrCurveMapping = i1032
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1037 = data
  i1036.time = i1037[0]
  request.r(i1037[1], i1037[2], 0, i1036, 'value')
  return i1036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1039 = data
  i1038.name = i1039[0]
  i1038.ascent = i1039[1]
  i1038.originalLineHeight = i1039[2]
  i1038.fontSize = i1039[3]
  var i1041 = i1039[4]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1041[i + 0]) );
  }
  i1038.characterInfo = i1040
  request.r(i1039[5], i1039[6], 0, i1038, 'texture')
  i1038.originalFontSize = i1039[7]
  return i1038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1045 = data
  i1044.index = i1045[0]
  i1044.advance = i1045[1]
  i1044.bearing = i1045[2]
  i1044.glyphWidth = i1045[3]
  i1044.glyphHeight = i1045[4]
  i1044.minX = i1045[5]
  i1044.maxX = i1045[6]
  i1044.minY = i1045[7]
  i1044.maxY = i1045[8]
  i1044.uvBottomLeftX = i1045[9]
  i1044.uvBottomLeftY = i1045[10]
  i1044.uvBottomRightX = i1045[11]
  i1044.uvBottomRightY = i1045[12]
  i1044.uvTopLeftX = i1045[13]
  i1044.uvTopLeftY = i1045[14]
  i1044.uvTopRightX = i1045[15]
  i1044.uvTopRightY = i1045[16]
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1047 = data
  i1046.name = i1047[0]
  var i1049 = i1047[1]
  var i1048 = []
  for(var i = 0; i < i1049.length; i += 1) {
    i1048.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1049[i + 0]) );
  }
  i1046.layers = i1048
  var i1051 = i1047[2]
  var i1050 = []
  for(var i = 0; i < i1051.length; i += 1) {
    i1050.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1051[i + 0]) );
  }
  i1046.parameters = i1050
  i1046.animationClips = i1047[3]
  i1046.avatarUnsupported = i1047[4]
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1055 = data
  i1054.name = i1055[0]
  i1054.defaultWeight = i1055[1]
  i1054.blendingMode = i1055[2]
  i1054.avatarMask = i1055[3]
  i1054.syncedLayerIndex = i1055[4]
  i1054.syncedLayerAffectsTiming = !!i1055[5]
  i1054.syncedLayers = i1055[6]
  i1054.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1055[7], i1054.stateMachine)
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1057 = data
  i1056.id = i1057[0]
  i1056.name = i1057[1]
  i1056.path = i1057[2]
  var i1059 = i1057[3]
  var i1058 = []
  for(var i = 0; i < i1059.length; i += 1) {
    i1058.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1059[i + 0]) );
  }
  i1056.states = i1058
  var i1061 = i1057[4]
  var i1060 = []
  for(var i = 0; i < i1061.length; i += 1) {
    i1060.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1061[i + 0]) );
  }
  i1056.machines = i1060
  var i1063 = i1057[5]
  var i1062 = []
  for(var i = 0; i < i1063.length; i += 1) {
    i1062.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1063[i + 0]) );
  }
  i1056.entryStateTransitions = i1062
  var i1065 = i1057[6]
  var i1064 = []
  for(var i = 0; i < i1065.length; i += 1) {
    i1064.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1065[i + 0]) );
  }
  i1056.exitStateTransitions = i1064
  var i1067 = i1057[7]
  var i1066 = []
  for(var i = 0; i < i1067.length; i += 1) {
    i1066.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1067[i + 0]) );
  }
  i1056.anyStateTransitions = i1066
  i1056.defaultStateId = i1057[8]
  return i1056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1071 = data
  i1070.id = i1071[0]
  i1070.name = i1071[1]
  i1070.cycleOffset = i1071[2]
  i1070.cycleOffsetParameter = i1071[3]
  i1070.cycleOffsetParameterActive = !!i1071[4]
  i1070.mirror = !!i1071[5]
  i1070.mirrorParameter = i1071[6]
  i1070.mirrorParameterActive = !!i1071[7]
  i1070.motionId = i1071[8]
  i1070.nameHash = i1071[9]
  i1070.fullPathHash = i1071[10]
  i1070.speed = i1071[11]
  i1070.speedParameter = i1071[12]
  i1070.speedParameterActive = !!i1071[13]
  i1070.tag = i1071[14]
  i1070.tagHash = i1071[15]
  i1070.writeDefaultValues = !!i1071[16]
  var i1073 = i1071[17]
  var i1072 = []
  for(var i = 0; i < i1073.length; i += 2) {
  request.r(i1073[i + 0], i1073[i + 1], 2, i1072, '')
  }
  i1070.behaviours = i1072
  var i1075 = i1071[18]
  var i1074 = []
  for(var i = 0; i < i1075.length; i += 1) {
    i1074.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1075[i + 0]) );
  }
  i1070.transitions = i1074
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1081 = data
  i1080.fullPath = i1081[0]
  i1080.canTransitionToSelf = !!i1081[1]
  i1080.duration = i1081[2]
  i1080.exitTime = i1081[3]
  i1080.hasExitTime = !!i1081[4]
  i1080.hasFixedDuration = !!i1081[5]
  i1080.interruptionSource = i1081[6]
  i1080.offset = i1081[7]
  i1080.orderedInterruption = !!i1081[8]
  i1080.destinationStateId = i1081[9]
  i1080.isExit = !!i1081[10]
  i1080.mute = !!i1081[11]
  i1080.solo = !!i1081[12]
  var i1083 = i1081[13]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1083[i + 0]) );
  }
  i1080.conditions = i1082
  return i1080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1087 = data
  i1086.mode = i1087[0]
  i1086.parameter = i1087[1]
  i1086.threshold = i1087[2]
  return i1086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1093 = data
  i1092.destinationStateId = i1093[0]
  i1092.isExit = !!i1093[1]
  i1092.mute = !!i1093[2]
  i1092.solo = !!i1093[3]
  var i1095 = i1093[4]
  var i1094 = []
  for(var i = 0; i < i1095.length; i += 1) {
    i1094.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1095[i + 0]) );
  }
  i1092.conditions = i1094
  return i1092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1099 = data
  i1098.defaultBool = !!i1099[0]
  i1098.defaultFloat = i1099[1]
  i1098.defaultInt = i1099[2]
  i1098.name = i1099[3]
  i1098.nameHash = i1099[4]
  i1098.type = i1099[5]
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController"] = function (request, data, root) {
  var i1100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController' )
  var i1101 = data
  i1100.name = i1101[0]
  request.r(i1101[1], i1101[2], 0, i1100, '_runtimeAnimatorController')
  var i1103 = i1101[3]
  var i1102 = []
  for(var i = 0; i < i1103.length; i += 2) {
  request.r(i1103[i + 0], i1103[i + 1], 2, i1102, '')
  }
  i1100._originalAnimationClips = i1102
  var i1105 = i1101[4]
  var i1104 = []
  for(var i = 0; i < i1105.length; i += 2) {
  request.r(i1105[i + 0], i1105[i + 1], 2, i1104, '')
  }
  i1100._overrideAnimationClips = i1104
  var i1107 = i1101[5]
  var i1106 = []
  for(var i = 0; i < i1107.length; i += 2) {
  request.r(i1107[i + 0], i1107[i + 1], 2, i1106, '')
  }
  i1100._animationClips = i1106
  var i1109 = i1101[6]
  var i1108 = []
  for(var i = 0; i < i1109.length; i += 1) {
    i1108.push( request.d('UnityEngine.AnimationClipPair', i1109[i + 0]) );
  }
  i1100._animationClipPairs = i1108
  return i1100
}

Deserializers["UnityEngine.AnimationClipPair"] = function (request, data, root) {
  var i1114 = root || request.c( 'UnityEngine.AnimationClipPair' )
  var i1115 = data
  request.r(i1115[0], i1115[1], 0, i1114, 'originalClip')
  request.r(i1115[2], i1115[3], 0, i1114, 'overrideClip')
  return i1114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1117 = data
  i1116.name = i1117[0]
  i1116.bytes64 = i1117[1]
  i1116.data = i1117[2]
  return i1116
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1118 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1119 = data
  request.r(i1119[0], i1119[1], 0, i1118, 'atlas')
  i1118.normalStyle = i1119[2]
  i1118.normalSpacingOffset = i1119[3]
  i1118.boldStyle = i1119[4]
  i1118.boldSpacing = i1119[5]
  i1118.italicStyle = i1119[6]
  i1118.tabSize = i1119[7]
  i1118.hashCode = i1119[8]
  request.r(i1119[9], i1119[10], 0, i1118, 'material')
  i1118.materialHashCode = i1119[11]
  i1118.m_Version = i1119[12]
  i1118.m_SourceFontFileGUID = i1119[13]
  request.r(i1119[14], i1119[15], 0, i1118, 'm_SourceFontFile_EditorRef')
  request.r(i1119[16], i1119[17], 0, i1118, 'm_SourceFontFile')
  i1118.m_AtlasPopulationMode = i1119[18]
  i1118.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1119[19], i1118.m_FaceInfo)
  var i1121 = i1119[20]
  var i1120 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.add(request.d('UnityEngine.TextCore.Glyph', i1121[i + 0]));
  }
  i1118.m_GlyphTable = i1120
  var i1123 = i1119[21]
  var i1122 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1123.length; i += 1) {
    i1122.add(request.d('TMPro.TMP_Character', i1123[i + 0]));
  }
  i1118.m_CharacterTable = i1122
  var i1125 = i1119[22]
  var i1124 = []
  for(var i = 0; i < i1125.length; i += 2) {
  request.r(i1125[i + 0], i1125[i + 1], 2, i1124, '')
  }
  i1118.m_AtlasTextures = i1124
  i1118.m_AtlasTextureIndex = i1119[23]
  i1118.m_IsMultiAtlasTexturesEnabled = !!i1119[24]
  i1118.m_ClearDynamicDataOnBuild = !!i1119[25]
  var i1127 = i1119[26]
  var i1126 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1127.length; i += 1) {
    i1126.add(request.d('UnityEngine.TextCore.GlyphRect', i1127[i + 0]));
  }
  i1118.m_UsedGlyphRects = i1126
  var i1129 = i1119[27]
  var i1128 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.add(request.d('UnityEngine.TextCore.GlyphRect', i1129[i + 0]));
  }
  i1118.m_FreeGlyphRects = i1128
  i1118.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1119[28], i1118.m_fontInfo)
  i1118.m_AtlasWidth = i1119[29]
  i1118.m_AtlasHeight = i1119[30]
  i1118.m_AtlasPadding = i1119[31]
  i1118.m_AtlasRenderMode = i1119[32]
  var i1131 = i1119[33]
  var i1130 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1131.length; i += 1) {
    i1130.add(request.d('TMPro.TMP_Glyph', i1131[i + 0]));
  }
  i1118.m_glyphInfoList = i1130
  i1118.m_KerningTable = request.d('TMPro.KerningTable', i1119[34], i1118.m_KerningTable)
  i1118.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1119[35], i1118.m_FontFeatureTable)
  var i1133 = i1119[36]
  var i1132 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1133.length; i += 2) {
  request.r(i1133[i + 0], i1133[i + 1], 1, i1132, '')
  }
  i1118.fallbackFontAssets = i1132
  var i1135 = i1119[37]
  var i1134 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1135.length; i += 2) {
  request.r(i1135[i + 0], i1135[i + 1], 1, i1134, '')
  }
  i1118.m_FallbackFontAssetTable = i1134
  i1118.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1119[38], i1118.m_CreationSettings)
  var i1137 = i1119[39]
  var i1136 = []
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.push( request.d('TMPro.TMP_FontWeightPair', i1137[i + 0]) );
  }
  i1118.m_FontWeightTable = i1136
  var i1139 = i1119[40]
  var i1138 = []
  for(var i = 0; i < i1139.length; i += 1) {
    i1138.push( request.d('TMPro.TMP_FontWeightPair', i1139[i + 0]) );
  }
  i1118.fontWeights = i1138
  return i1118
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1140 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1141 = data
  i1140.m_FaceIndex = i1141[0]
  i1140.m_FamilyName = i1141[1]
  i1140.m_StyleName = i1141[2]
  i1140.m_PointSize = i1141[3]
  i1140.m_Scale = i1141[4]
  i1140.m_UnitsPerEM = i1141[5]
  i1140.m_LineHeight = i1141[6]
  i1140.m_AscentLine = i1141[7]
  i1140.m_CapLine = i1141[8]
  i1140.m_MeanLine = i1141[9]
  i1140.m_Baseline = i1141[10]
  i1140.m_DescentLine = i1141[11]
  i1140.m_SuperscriptOffset = i1141[12]
  i1140.m_SuperscriptSize = i1141[13]
  i1140.m_SubscriptOffset = i1141[14]
  i1140.m_SubscriptSize = i1141[15]
  i1140.m_UnderlineOffset = i1141[16]
  i1140.m_UnderlineThickness = i1141[17]
  i1140.m_StrikethroughOffset = i1141[18]
  i1140.m_StrikethroughThickness = i1141[19]
  i1140.m_TabWidth = i1141[20]
  return i1140
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1144 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1145 = data
  i1144.m_Index = i1145[0]
  i1144.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1145[1], i1144.m_Metrics)
  i1144.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1145[2], i1144.m_GlyphRect)
  i1144.m_Scale = i1145[3]
  i1144.m_AtlasIndex = i1145[4]
  i1144.m_ClassDefinitionType = i1145[5]
  return i1144
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1146 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1147 = data
  i1146.m_Width = i1147[0]
  i1146.m_Height = i1147[1]
  i1146.m_HorizontalBearingX = i1147[2]
  i1146.m_HorizontalBearingY = i1147[3]
  i1146.m_HorizontalAdvance = i1147[4]
  return i1146
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1148 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1149 = data
  i1148.m_X = i1149[0]
  i1148.m_Y = i1149[1]
  i1148.m_Width = i1149[2]
  i1148.m_Height = i1149[3]
  return i1148
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1152 = root || request.c( 'TMPro.TMP_Character' )
  var i1153 = data
  i1152.m_ElementType = i1153[0]
  i1152.m_Unicode = i1153[1]
  i1152.m_GlyphIndex = i1153[2]
  i1152.m_Scale = i1153[3]
  return i1152
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1158 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1159 = data
  i1158.Name = i1159[0]
  i1158.PointSize = i1159[1]
  i1158.Scale = i1159[2]
  i1158.CharacterCount = i1159[3]
  i1158.LineHeight = i1159[4]
  i1158.Baseline = i1159[5]
  i1158.Ascender = i1159[6]
  i1158.CapHeight = i1159[7]
  i1158.Descender = i1159[8]
  i1158.CenterLine = i1159[9]
  i1158.SuperscriptOffset = i1159[10]
  i1158.SubscriptOffset = i1159[11]
  i1158.SubSize = i1159[12]
  i1158.Underline = i1159[13]
  i1158.UnderlineThickness = i1159[14]
  i1158.strikethrough = i1159[15]
  i1158.strikethroughThickness = i1159[16]
  i1158.TabWidth = i1159[17]
  i1158.Padding = i1159[18]
  i1158.AtlasWidth = i1159[19]
  i1158.AtlasHeight = i1159[20]
  return i1158
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1162 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1163 = data
  i1162.id = i1163[0]
  i1162.x = i1163[1]
  i1162.y = i1163[2]
  i1162.width = i1163[3]
  i1162.height = i1163[4]
  i1162.xOffset = i1163[5]
  i1162.yOffset = i1163[6]
  i1162.xAdvance = i1163[7]
  i1162.scale = i1163[8]
  return i1162
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1164 = root || request.c( 'TMPro.KerningTable' )
  var i1165 = data
  var i1167 = i1165[0]
  var i1166 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1167.length; i += 1) {
    i1166.add(request.d('TMPro.KerningPair', i1167[i + 0]));
  }
  i1164.kerningPairs = i1166
  return i1164
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1170 = root || request.c( 'TMPro.KerningPair' )
  var i1171 = data
  i1170.xOffset = i1171[0]
  i1170.m_FirstGlyph = i1171[1]
  i1170.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1171[2], i1170.m_FirstGlyphAdjustments)
  i1170.m_SecondGlyph = i1171[3]
  i1170.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1171[4], i1170.m_SecondGlyphAdjustments)
  i1170.m_IgnoreSpacingAdjustments = !!i1171[5]
  return i1170
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1172 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1173 = data
  var i1175 = i1173[0]
  var i1174 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1175.length; i += 1) {
    i1174.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1175[i + 0]));
  }
  i1172.m_GlyphPairAdjustmentRecords = i1174
  return i1172
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1178 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1179 = data
  i1178.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1179[0], i1178.m_FirstAdjustmentRecord)
  i1178.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1179[1], i1178.m_SecondAdjustmentRecord)
  i1178.m_FeatureLookupFlags = i1179[2]
  return i1178
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1182 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1183 = data
  i1182.sourceFontFileName = i1183[0]
  i1182.sourceFontFileGUID = i1183[1]
  i1182.pointSizeSamplingMode = i1183[2]
  i1182.pointSize = i1183[3]
  i1182.padding = i1183[4]
  i1182.packingMode = i1183[5]
  i1182.atlasWidth = i1183[6]
  i1182.atlasHeight = i1183[7]
  i1182.characterSetSelectionMode = i1183[8]
  i1182.characterSequence = i1183[9]
  i1182.referencedFontAssetGUID = i1183[10]
  i1182.referencedTextAssetGUID = i1183[11]
  i1182.fontStyle = i1183[12]
  i1182.fontStyleModifier = i1183[13]
  i1182.renderMode = i1183[14]
  i1182.includeFontFeatures = !!i1183[15]
  return i1182
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1186 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1187 = data
  request.r(i1187[0], i1187[1], 0, i1186, 'regularTypeface')
  request.r(i1187[2], i1187[3], 0, i1186, 'italicTypeface')
  return i1186
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1188 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1189 = data
  i1188.useSafeMode = !!i1189[0]
  i1188.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1189[1], i1188.safeModeOptions)
  i1188.timeScale = i1189[2]
  i1188.unscaledTimeScale = i1189[3]
  i1188.useSmoothDeltaTime = !!i1189[4]
  i1188.maxSmoothUnscaledTime = i1189[5]
  i1188.rewindCallbackMode = i1189[6]
  i1188.showUnityEditorReport = !!i1189[7]
  i1188.logBehaviour = i1189[8]
  i1188.drawGizmos = !!i1189[9]
  i1188.defaultRecyclable = !!i1189[10]
  i1188.defaultAutoPlay = i1189[11]
  i1188.defaultUpdateType = i1189[12]
  i1188.defaultTimeScaleIndependent = !!i1189[13]
  i1188.defaultEaseType = i1189[14]
  i1188.defaultEaseOvershootOrAmplitude = i1189[15]
  i1188.defaultEasePeriod = i1189[16]
  i1188.defaultAutoKill = !!i1189[17]
  i1188.defaultLoopType = i1189[18]
  i1188.debugMode = !!i1189[19]
  i1188.debugStoreTargetId = !!i1189[20]
  i1188.showPreviewPanel = !!i1189[21]
  i1188.storeSettingsLocation = i1189[22]
  i1188.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1189[23], i1188.modules)
  i1188.createASMDEF = !!i1189[24]
  i1188.showPlayingTweens = !!i1189[25]
  i1188.showPausedTweens = !!i1189[26]
  return i1188
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1190 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1191 = data
  i1190.logBehaviour = i1191[0]
  i1190.nestedTweenFailureBehaviour = i1191[1]
  return i1190
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1192 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1193 = data
  i1192.showPanel = !!i1193[0]
  i1192.audioEnabled = !!i1193[1]
  i1192.physicsEnabled = !!i1193[2]
  i1192.physics2DEnabled = !!i1193[3]
  i1192.spriteEnabled = !!i1193[4]
  i1192.uiEnabled = !!i1193[5]
  i1192.textMeshProEnabled = !!i1193[6]
  i1192.tk2DEnabled = !!i1193[7]
  i1192.deAudioEnabled = !!i1193[8]
  i1192.deUnityExtendedEnabled = !!i1193[9]
  i1192.epoOutlineEnabled = !!i1193[10]
  return i1192
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1194 = root || request.c( 'TMPro.TMP_Settings' )
  var i1195 = data
  i1194.m_enableWordWrapping = !!i1195[0]
  i1194.m_enableKerning = !!i1195[1]
  i1194.m_enableExtraPadding = !!i1195[2]
  i1194.m_enableTintAllSprites = !!i1195[3]
  i1194.m_enableParseEscapeCharacters = !!i1195[4]
  i1194.m_EnableRaycastTarget = !!i1195[5]
  i1194.m_GetFontFeaturesAtRuntime = !!i1195[6]
  i1194.m_missingGlyphCharacter = i1195[7]
  i1194.m_warningsDisabled = !!i1195[8]
  request.r(i1195[9], i1195[10], 0, i1194, 'm_defaultFontAsset')
  i1194.m_defaultFontAssetPath = i1195[11]
  i1194.m_defaultFontSize = i1195[12]
  i1194.m_defaultAutoSizeMinRatio = i1195[13]
  i1194.m_defaultAutoSizeMaxRatio = i1195[14]
  i1194.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1195[15], i1195[16] )
  i1194.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1195[17], i1195[18] )
  i1194.m_autoSizeTextContainer = !!i1195[19]
  i1194.m_IsTextObjectScaleStatic = !!i1195[20]
  var i1197 = i1195[21]
  var i1196 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1197.length; i += 2) {
  request.r(i1197[i + 0], i1197[i + 1], 1, i1196, '')
  }
  i1194.m_fallbackFontAssets = i1196
  i1194.m_matchMaterialPreset = !!i1195[22]
  request.r(i1195[23], i1195[24], 0, i1194, 'm_defaultSpriteAsset')
  i1194.m_defaultSpriteAssetPath = i1195[25]
  i1194.m_enableEmojiSupport = !!i1195[26]
  i1194.m_MissingCharacterSpriteUnicode = i1195[27]
  i1194.m_defaultColorGradientPresetsPath = i1195[28]
  request.r(i1195[29], i1195[30], 0, i1194, 'm_defaultStyleSheet')
  i1194.m_StyleSheetsResourcePath = i1195[31]
  request.r(i1195[32], i1195[33], 0, i1194, 'm_leadingCharacters')
  request.r(i1195[34], i1195[35], 0, i1194, 'm_followingCharacters')
  i1194.m_UseModernHangulLineBreakingRules = !!i1195[36]
  return i1194
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1198 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1199 = data
  i1198.m_GlyphIndex = i1199[0]
  i1198.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1199[1], i1198.m_GlyphValueRecord)
  return i1198
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1200 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1201 = data
  i1200.m_XPlacement = i1201[0]
  i1200.m_YPlacement = i1201[1]
  i1200.m_XAdvance = i1201[2]
  i1200.m_YAdvance = i1201[3]
  return i1200
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1202 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1203 = data
  request.r(i1203[0], i1203[1], 0, i1202, 'spriteSheet')
  var i1205 = i1203[2]
  var i1204 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1205.length; i += 1) {
    i1204.add(request.d('TMPro.TMP_Sprite', i1205[i + 0]));
  }
  i1202.spriteInfoList = i1204
  var i1207 = i1203[3]
  var i1206 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1207.length; i += 2) {
  request.r(i1207[i + 0], i1207[i + 1], 1, i1206, '')
  }
  i1202.fallbackSpriteAssets = i1206
  i1202.hashCode = i1203[4]
  request.r(i1203[5], i1203[6], 0, i1202, 'material')
  i1202.materialHashCode = i1203[7]
  i1202.m_Version = i1203[8]
  i1202.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1203[9], i1202.m_FaceInfo)
  var i1209 = i1203[10]
  var i1208 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1209.length; i += 1) {
    i1208.add(request.d('TMPro.TMP_SpriteCharacter', i1209[i + 0]));
  }
  i1202.m_SpriteCharacterTable = i1208
  var i1211 = i1203[11]
  var i1210 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1211.length; i += 1) {
    i1210.add(request.d('TMPro.TMP_SpriteGlyph', i1211[i + 0]));
  }
  i1202.m_SpriteGlyphTable = i1210
  return i1202
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1214 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1215 = data
  i1214.name = i1215[0]
  i1214.hashCode = i1215[1]
  i1214.unicode = i1215[2]
  i1214.pivot = new pc.Vec2( i1215[3], i1215[4] )
  request.r(i1215[5], i1215[6], 0, i1214, 'sprite')
  i1214.id = i1215[7]
  i1214.x = i1215[8]
  i1214.y = i1215[9]
  i1214.width = i1215[10]
  i1214.height = i1215[11]
  i1214.xOffset = i1215[12]
  i1214.yOffset = i1215[13]
  i1214.xAdvance = i1215[14]
  i1214.scale = i1215[15]
  return i1214
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1220 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1221 = data
  i1220.m_Name = i1221[0]
  i1220.m_HashCode = i1221[1]
  i1220.m_ElementType = i1221[2]
  i1220.m_Unicode = i1221[3]
  i1220.m_GlyphIndex = i1221[4]
  i1220.m_Scale = i1221[5]
  return i1220
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1224 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1225 = data
  request.r(i1225[0], i1225[1], 0, i1224, 'sprite')
  i1224.m_Index = i1225[2]
  i1224.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1225[3], i1224.m_Metrics)
  i1224.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1225[4], i1224.m_GlyphRect)
  i1224.m_Scale = i1225[5]
  i1224.m_AtlasIndex = i1225[6]
  i1224.m_ClassDefinitionType = i1225[7]
  return i1224
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1226 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1227 = data
  var i1229 = i1227[0]
  var i1228 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1229.length; i += 1) {
    i1228.add(request.d('TMPro.TMP_Style', i1229[i + 0]));
  }
  i1226.m_StyleList = i1228
  return i1226
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1232 = root || request.c( 'TMPro.TMP_Style' )
  var i1233 = data
  i1232.m_Name = i1233[0]
  i1232.m_HashCode = i1233[1]
  i1232.m_OpeningDefinition = i1233[2]
  i1232.m_ClosingDefinition = i1233[3]
  i1232.m_OpeningTagArray = i1233[4]
  i1232.m_ClosingTagArray = i1233[5]
  i1232.m_OpeningTagUnicodeArray = i1233[6]
  i1232.m_ClosingTagUnicodeArray = i1233[7]
  return i1232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1235 = data
  var i1237 = i1235[0]
  var i1236 = []
  for(var i = 0; i < i1237.length; i += 1) {
    i1236.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1237[i + 0]) );
  }
  i1234.files = i1236
  i1234.componentToPrefabIds = i1235[1]
  return i1234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1241 = data
  i1240.path = i1241[0]
  request.r(i1241[1], i1241[2], 0, i1240, 'unityObject')
  return i1240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1243 = data
  var i1245 = i1243[0]
  var i1244 = []
  for(var i = 0; i < i1245.length; i += 1) {
    i1244.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1245[i + 0]) );
  }
  i1242.scriptsExecutionOrder = i1244
  var i1247 = i1243[1]
  var i1246 = []
  for(var i = 0; i < i1247.length; i += 1) {
    i1246.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1247[i + 0]) );
  }
  i1242.sortingLayers = i1246
  var i1249 = i1243[2]
  var i1248 = []
  for(var i = 0; i < i1249.length; i += 1) {
    i1248.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1249[i + 0]) );
  }
  i1242.cullingLayers = i1248
  i1242.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1243[3], i1242.timeSettings)
  i1242.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1243[4], i1242.physicsSettings)
  i1242.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1243[5], i1242.physics2DSettings)
  i1242.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1243[6], i1242.qualitySettings)
  i1242.enableRealtimeShadows = !!i1243[7]
  i1242.enableAutoInstancing = !!i1243[8]
  i1242.enableStaticBatching = !!i1243[9]
  i1242.enableDynamicBatching = !!i1243[10]
  i1242.lightmapEncodingQuality = i1243[11]
  i1242.desiredColorSpace = i1243[12]
  var i1251 = i1243[13]
  var i1250 = []
  for(var i = 0; i < i1251.length; i += 1) {
    i1250.push( i1251[i + 0] );
  }
  i1242.allTags = i1250
  return i1242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1255 = data
  i1254.name = i1255[0]
  i1254.value = i1255[1]
  return i1254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1259 = data
  i1258.id = i1259[0]
  i1258.name = i1259[1]
  i1258.value = i1259[2]
  return i1258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1263 = data
  i1262.id = i1263[0]
  i1262.name = i1263[1]
  return i1262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1265 = data
  i1264.fixedDeltaTime = i1265[0]
  i1264.maximumDeltaTime = i1265[1]
  i1264.timeScale = i1265[2]
  i1264.maximumParticleTimestep = i1265[3]
  return i1264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1267 = data
  i1266.gravity = new pc.Vec3( i1267[0], i1267[1], i1267[2] )
  i1266.defaultSolverIterations = i1267[3]
  i1266.bounceThreshold = i1267[4]
  i1266.autoSyncTransforms = !!i1267[5]
  i1266.autoSimulation = !!i1267[6]
  var i1269 = i1267[7]
  var i1268 = []
  for(var i = 0; i < i1269.length; i += 1) {
    i1268.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1269[i + 0]) );
  }
  i1266.collisionMatrix = i1268
  return i1266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1273 = data
  i1272.enabled = !!i1273[0]
  i1272.layerId = i1273[1]
  i1272.otherLayerId = i1273[2]
  return i1272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1275 = data
  request.r(i1275[0], i1275[1], 0, i1274, 'material')
  i1274.gravity = new pc.Vec2( i1275[2], i1275[3] )
  i1274.positionIterations = i1275[4]
  i1274.velocityIterations = i1275[5]
  i1274.velocityThreshold = i1275[6]
  i1274.maxLinearCorrection = i1275[7]
  i1274.maxAngularCorrection = i1275[8]
  i1274.maxTranslationSpeed = i1275[9]
  i1274.maxRotationSpeed = i1275[10]
  i1274.baumgarteScale = i1275[11]
  i1274.baumgarteTOIScale = i1275[12]
  i1274.timeToSleep = i1275[13]
  i1274.linearSleepTolerance = i1275[14]
  i1274.angularSleepTolerance = i1275[15]
  i1274.defaultContactOffset = i1275[16]
  i1274.autoSimulation = !!i1275[17]
  i1274.queriesHitTriggers = !!i1275[18]
  i1274.queriesStartInColliders = !!i1275[19]
  i1274.callbacksOnDisable = !!i1275[20]
  i1274.reuseCollisionCallbacks = !!i1275[21]
  i1274.autoSyncTransforms = !!i1275[22]
  var i1277 = i1275[23]
  var i1276 = []
  for(var i = 0; i < i1277.length; i += 1) {
    i1276.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1277[i + 0]) );
  }
  i1274.collisionMatrix = i1276
  return i1274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1281 = data
  i1280.enabled = !!i1281[0]
  i1280.layerId = i1281[1]
  i1280.otherLayerId = i1281[2]
  return i1280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1283 = data
  var i1285 = i1283[0]
  var i1284 = []
  for(var i = 0; i < i1285.length; i += 1) {
    i1284.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1285[i + 0]) );
  }
  i1282.qualityLevels = i1284
  var i1287 = i1283[1]
  var i1286 = []
  for(var i = 0; i < i1287.length; i += 1) {
    i1286.push( i1287[i + 0] );
  }
  i1282.names = i1286
  i1282.shadows = i1283[2]
  i1282.anisotropicFiltering = i1283[3]
  i1282.antiAliasing = i1283[4]
  i1282.lodBias = i1283[5]
  i1282.shadowCascades = i1283[6]
  i1282.shadowDistance = i1283[7]
  i1282.shadowmaskMode = i1283[8]
  i1282.shadowProjection = i1283[9]
  i1282.shadowResolution = i1283[10]
  i1282.softParticles = !!i1283[11]
  i1282.softVegetation = !!i1283[12]
  i1282.activeColorSpace = i1283[13]
  i1282.desiredColorSpace = i1283[14]
  i1282.masterTextureLimit = i1283[15]
  i1282.maxQueuedFrames = i1283[16]
  i1282.particleRaycastBudget = i1283[17]
  i1282.pixelLightCount = i1283[18]
  i1282.realtimeReflectionProbes = !!i1283[19]
  i1282.shadowCascade2Split = i1283[20]
  i1282.shadowCascade4Split = new pc.Vec3( i1283[21], i1283[22], i1283[23] )
  i1282.streamingMipmapsActive = !!i1283[24]
  i1282.vSyncCount = i1283[25]
  i1282.asyncUploadBufferSize = i1283[26]
  i1282.asyncUploadTimeSlice = i1283[27]
  i1282.billboardsFaceCameraPosition = !!i1283[28]
  i1282.shadowNearPlaneOffset = i1283[29]
  i1282.streamingMipmapsMemoryBudget = i1283[30]
  i1282.maximumLODLevel = i1283[31]
  i1282.streamingMipmapsAddAllCameras = !!i1283[32]
  i1282.streamingMipmapsMaxLevelReduction = i1283[33]
  i1282.streamingMipmapsRenderersPerFrame = i1283[34]
  i1282.resolutionScalingFixedDPIFactor = i1283[35]
  i1282.streamingMipmapsMaxFileIORequests = i1283[36]
  i1282.currentQualityLevel = i1283[37]
  return i1282
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1290 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1291 = data
  i1290.xPlacement = i1291[0]
  i1290.yPlacement = i1291[1]
  i1290.xAdvance = i1291[2]
  i1290.yAdvance = i1291[3]
  return i1290
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController":{"name":0,"_runtimeAnimatorController":1,"_originalAnimationClips":3,"_overrideAnimationClips":4,"_animationClips":5,"_animationClipPairs":6},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"63":[64],"65":[64],"66":[64],"67":[64],"68":[64],"69":[64],"70":[71],"72":[44],"73":[74],"75":[74],"76":[74],"77":[74],"78":[74],"79":[74],"80":[74],"81":[82],"83":[82],"84":[82],"85":[82],"86":[82],"87":[82],"88":[82],"89":[82],"90":[82],"91":[82],"92":[82],"93":[82],"94":[82],"95":[44],"96":[97],"98":[99],"100":[99],"15":[0],"101":[102],"103":[104],"105":[102],"106":[0],"107":[0],"17":[15],"8":[3,0],"5":[0],"16":[15],"108":[0],"109":[0],"39":[0],"110":[0],"111":[0],"112":[0],"47":[0],"7":[0],"113":[0],"6":[3,0],"114":[0],"115":[0],"116":[0],"29":[0],"10":[3,0],"117":[0],"118":[51],"119":[51],"52":[51],"120":[51],"121":[44],"122":[44],"123":[51],"124":[15],"125":[126],"127":[44],"128":[0],"129":[97,0],"37":[0,3],"130":[0],"131":[3,0],"132":[97],"133":[3,0],"134":[0],"135":[102]}

Deserializers.types = ["UnityEngine.RectTransform","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.RawImage","UnityEngine.UI.Mask","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.UI.Button","UnityEngine.CanvasGroup","UnityEngine.Texture2D","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.Object","UnityEngine.Shader","UnityEngine.MonoBehaviour","Scripts.Popup","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.UI.Outline","UnityEngine.UI.Slider","Scripts.SpriteSwapper","Scripts.MusicManager","Scripts.AnimatedButton","Scripts.SoundManager","UnityEngine.AnimatorOverrideController","Scripts.SceneTransition","LevelTaskBox","TMPro.TextMeshProUGUI","UnityEngine.GameObject","UnityEngine.UI.HorizontalLayoutGroup","TMPro.TMP_FontAsset","PlayableSettings","EndCardController","EndCardSetScale","UnityEngine.Camera","UnityEngine.AudioListener","Scripts.PopupOpener","UnityEngine.UI.VerticalLayoutGroup","Match3.Board","Match3.Tile","Match3.Core.LevelManager","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Scripts.BackgroundMusic","Settings.SettingsProvider","Match3.TileTypeDatas","InteractiveEndCardBuilder.Scripts.ExampleEndCardCallScript","UnityEngine.AnimationClip","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "Match3";

Deserializers.lunaInitializationTime = "10/04/2025 19:22:36";

Deserializers.lunaDaysRunning = "0.8";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "New";

Deserializers.lunaAppID = "33413";

Deserializers.projectId = "ad3586bc31db38c4aacef3ce2c200e17";

Deserializers.packagesInfo = "com.unity.inputsystem: 1.14.0\ncom.unity.nuget.newtonsoft-json: 3.2.1\ncom.unity.textmeshpro: 3.0.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1601";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4921";

Deserializers.runtimeAnalysisExcludedModules = "";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "True";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.Match3";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "74a32460-0e50-4a3e-a77e-d0dbfbebdaac";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["TargetFrameRateSetter","Initialize"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

