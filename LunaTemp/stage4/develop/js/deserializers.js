var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i644 = root || request.c( 'UnityEngine.JointSpring' )
  var i645 = data
  i644.spring = i645[0]
  i644.damper = i645[1]
  i644.targetPosition = i645[2]
  return i644
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i646 = root || request.c( 'UnityEngine.JointMotor' )
  var i647 = data
  i646.m_TargetVelocity = i647[0]
  i646.m_Force = i647[1]
  i646.m_FreeSpin = i647[2]
  return i646
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i648 = root || request.c( 'UnityEngine.JointLimits' )
  var i649 = data
  i648.m_Min = i649[0]
  i648.m_Max = i649[1]
  i648.m_Bounciness = i649[2]
  i648.m_BounceMinVelocity = i649[3]
  i648.m_ContactDistance = i649[4]
  i648.minBounce = i649[5]
  i648.maxBounce = i649[6]
  return i648
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i650 = root || request.c( 'UnityEngine.JointDrive' )
  var i651 = data
  i650.m_PositionSpring = i651[0]
  i650.m_PositionDamper = i651[1]
  i650.m_MaximumForce = i651[2]
  i650.m_UseAcceleration = i651[3]
  return i650
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i652 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i653 = data
  i652.m_Spring = i653[0]
  i652.m_Damper = i653[1]
  return i652
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i654 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i655 = data
  i654.m_Limit = i655[0]
  i654.m_Bounciness = i655[1]
  i654.m_ContactDistance = i655[2]
  return i654
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i656 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i657 = data
  i656.m_ExtremumSlip = i657[0]
  i656.m_ExtremumValue = i657[1]
  i656.m_AsymptoteSlip = i657[2]
  i656.m_AsymptoteValue = i657[3]
  i656.m_Stiffness = i657[4]
  return i656
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i658 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i659 = data
  i658.m_LowerAngle = i659[0]
  i658.m_UpperAngle = i659[1]
  return i658
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i660 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i661 = data
  i660.m_MotorSpeed = i661[0]
  i660.m_MaximumMotorTorque = i661[1]
  return i660
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i662 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i663 = data
  i662.m_DampingRatio = i663[0]
  i662.m_Frequency = i663[1]
  i662.m_Angle = i663[2]
  return i662
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i664 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i665 = data
  i664.m_LowerTranslation = i665[0]
  i664.m_UpperTranslation = i665[1]
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i667 = data
  i666.pivot = new pc.Vec2( i667[0], i667[1] )
  i666.anchorMin = new pc.Vec2( i667[2], i667[3] )
  i666.anchorMax = new pc.Vec2( i667[4], i667[5] )
  i666.sizeDelta = new pc.Vec2( i667[6], i667[7] )
  i666.anchoredPosition3D = new pc.Vec3( i667[8], i667[9], i667[10] )
  i666.rotation = new pc.Quat(i667[11], i667[12], i667[13], i667[14])
  i666.scale = new pc.Vec3( i667[15], i667[16], i667[17] )
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i669 = data
  request.r(i669[0], i669[1], 0, i668, 'animatorController')
  request.r(i669[2], i669[3], 0, i668, 'avatar')
  i668.updateMode = i669[4]
  i668.hasTransformHierarchy = !!i669[5]
  i668.applyRootMotion = !!i669[6]
  var i671 = i669[7]
  var i670 = []
  for(var i = 0; i < i671.length; i += 2) {
  request.r(i671[i + 0], i671[i + 1], 2, i670, '')
  }
  i668.humanBones = i670
  i668.enabled = !!i669[8]
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i675 = data
  i674.cullTransparentMesh = !!i675[0]
  return i674
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i676 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i677 = data
  i676.m_AspectMode = i677[0]
  i676.m_AspectRatio = i677[1]
  return i676
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i678 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i679 = data
  request.r(i679[0], i679[1], 0, i678, 'm_Texture')
  i678.m_UVRect = UnityEngine.Rect.MinMaxRect(i679[2], i679[3], i679[4], i679[5])
  i678.m_Maskable = !!i679[6]
  request.r(i679[7], i679[8], 0, i678, 'm_Material')
  i678.m_Color = new pc.Color(i679[9], i679[10], i679[11], i679[12])
  i678.m_RaycastTarget = !!i679[13]
  i678.m_RaycastPadding = new pc.Vec4( i679[14], i679[15], i679[16], i679[17] )
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i681 = data
  i680.name = i681[0]
  i680.tagId = i681[1]
  i680.enabled = !!i681[2]
  i680.isStatic = !!i681[3]
  i680.layer = i681[4]
  return i680
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i682 = root || request.c( 'UnityEngine.UI.Mask' )
  var i683 = data
  i682.m_ShowMaskGraphic = !!i683[0]
  return i682
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i684 = root || request.c( 'UnityEngine.UI.Image' )
  var i685 = data
  request.r(i685[0], i685[1], 0, i684, 'm_Sprite')
  i684.m_Type = i685[2]
  i684.m_PreserveAspect = !!i685[3]
  i684.m_FillCenter = !!i685[4]
  i684.m_FillMethod = i685[5]
  i684.m_FillAmount = i685[6]
  i684.m_FillClockwise = !!i685[7]
  i684.m_FillOrigin = i685[8]
  i684.m_UseSpriteMesh = !!i685[9]
  i684.m_PixelsPerUnitMultiplier = i685[10]
  i684.m_Maskable = !!i685[11]
  request.r(i685[12], i685[13], 0, i684, 'm_Material')
  i684.m_Color = new pc.Color(i685[14], i685[15], i685[16], i685[17])
  i684.m_RaycastTarget = !!i685[18]
  i684.m_RaycastPadding = new pc.Vec4( i685[19], i685[20], i685[21], i685[22] )
  return i684
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i686 = root || request.c( 'UnityEngine.UI.Text' )
  var i687 = data
  i686.m_FontData = request.d('UnityEngine.UI.FontData', i687[0], i686.m_FontData)
  i686.m_Text = i687[1]
  i686.m_Maskable = !!i687[2]
  request.r(i687[3], i687[4], 0, i686, 'm_Material')
  i686.m_Color = new pc.Color(i687[5], i687[6], i687[7], i687[8])
  i686.m_RaycastTarget = !!i687[9]
  i686.m_RaycastPadding = new pc.Vec4( i687[10], i687[11], i687[12], i687[13] )
  return i686
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i688 = root || request.c( 'UnityEngine.UI.FontData' )
  var i689 = data
  request.r(i689[0], i689[1], 0, i688, 'm_Font')
  i688.m_FontSize = i689[2]
  i688.m_FontStyle = i689[3]
  i688.m_BestFit = !!i689[4]
  i688.m_MinSize = i689[5]
  i688.m_MaxSize = i689[6]
  i688.m_Alignment = i689[7]
  i688.m_AlignByGeometry = !!i689[8]
  i688.m_RichText = !!i689[9]
  i688.m_HorizontalOverflow = i689[10]
  i688.m_VerticalOverflow = i689[11]
  i688.m_LineSpacing = i689[12]
  return i688
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i690 = root || request.c( 'UnityEngine.UI.Button' )
  var i691 = data
  i690.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i691[0], i690.m_OnClick)
  i690.m_Navigation = request.d('UnityEngine.UI.Navigation', i691[1], i690.m_Navigation)
  i690.m_Transition = i691[2]
  i690.m_Colors = request.d('UnityEngine.UI.ColorBlock', i691[3], i690.m_Colors)
  i690.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i691[4], i690.m_SpriteState)
  i690.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i691[5], i690.m_AnimationTriggers)
  i690.m_Interactable = !!i691[6]
  request.r(i691[7], i691[8], 0, i690, 'm_TargetGraphic')
  return i690
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i692 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i693 = data
  i692.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i693[0], i692.m_PersistentCalls)
  return i692
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i694 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i695 = data
  var i697 = i695[0]
  var i696 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i697.length; i += 1) {
    i696.add(request.d('UnityEngine.Events.PersistentCall', i697[i + 0]));
  }
  i694.m_Calls = i696
  return i694
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i700 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i701 = data
  request.r(i701[0], i701[1], 0, i700, 'm_Target')
  i700.m_TargetAssemblyTypeName = i701[2]
  i700.m_MethodName = i701[3]
  i700.m_Mode = i701[4]
  i700.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i701[5], i700.m_Arguments)
  i700.m_CallState = i701[6]
  return i700
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i702 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i703 = data
  request.r(i703[0], i703[1], 0, i702, 'm_ObjectArgument')
  i702.m_ObjectArgumentAssemblyTypeName = i703[2]
  i702.m_IntArgument = i703[3]
  i702.m_FloatArgument = i703[4]
  i702.m_StringArgument = i703[5]
  i702.m_BoolArgument = !!i703[6]
  return i702
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i704 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i705 = data
  i704.m_Mode = i705[0]
  i704.m_WrapAround = !!i705[1]
  request.r(i705[2], i705[3], 0, i704, 'm_SelectOnUp')
  request.r(i705[4], i705[5], 0, i704, 'm_SelectOnDown')
  request.r(i705[6], i705[7], 0, i704, 'm_SelectOnLeft')
  request.r(i705[8], i705[9], 0, i704, 'm_SelectOnRight')
  return i704
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i706 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i707 = data
  i706.m_NormalColor = new pc.Color(i707[0], i707[1], i707[2], i707[3])
  i706.m_HighlightedColor = new pc.Color(i707[4], i707[5], i707[6], i707[7])
  i706.m_PressedColor = new pc.Color(i707[8], i707[9], i707[10], i707[11])
  i706.m_SelectedColor = new pc.Color(i707[12], i707[13], i707[14], i707[15])
  i706.m_DisabledColor = new pc.Color(i707[16], i707[17], i707[18], i707[19])
  i706.m_ColorMultiplier = i707[20]
  i706.m_FadeDuration = i707[21]
  return i706
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i708 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i709 = data
  request.r(i709[0], i709[1], 0, i708, 'm_HighlightedSprite')
  request.r(i709[2], i709[3], 0, i708, 'm_PressedSprite')
  request.r(i709[4], i709[5], 0, i708, 'm_SelectedSprite')
  request.r(i709[6], i709[7], 0, i708, 'm_DisabledSprite')
  return i708
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i710 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i711 = data
  i710.m_NormalTrigger = i711[0]
  i710.m_HighlightedTrigger = i711[1]
  i710.m_PressedTrigger = i711[2]
  i710.m_SelectedTrigger = i711[3]
  i710.m_DisabledTrigger = i711[4]
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i713 = data
  i712.m_Alpha = i713[0]
  i712.m_Interactable = !!i713[1]
  i712.m_BlocksRaycasts = !!i713[2]
  i712.m_IgnoreParentGroups = !!i713[3]
  i712.enabled = !!i713[4]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i715 = data
  i714.name = i715[0]
  i714.width = i715[1]
  i714.height = i715[2]
  i714.mipmapCount = i715[3]
  i714.anisoLevel = i715[4]
  i714.filterMode = i715[5]
  i714.hdr = !!i715[6]
  i714.format = i715[7]
  i714.wrapMode = i715[8]
  i714.alphaIsTransparency = !!i715[9]
  i714.alphaSource = i715[10]
  i714.graphicsFormat = i715[11]
  i714.sRGBTexture = !!i715[12]
  i714.desiredColorSpace = i715[13]
  i714.wrapU = i715[14]
  i714.wrapV = i715[15]
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i717 = data
  i716.planeDistance = i717[0]
  i716.referencePixelsPerUnit = i717[1]
  i716.isFallbackOverlay = !!i717[2]
  i716.renderMode = i717[3]
  i716.renderOrder = i717[4]
  i716.sortingLayerName = i717[5]
  i716.sortingOrder = i717[6]
  i716.scaleFactor = i717[7]
  request.r(i717[8], i717[9], 0, i716, 'worldCamera')
  i716.overrideSorting = !!i717[10]
  i716.pixelPerfect = !!i717[11]
  i716.targetDisplay = i717[12]
  i716.overridePixelPerfect = !!i717[13]
  i716.enabled = !!i717[14]
  return i716
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i718 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i719 = data
  i718.m_UiScaleMode = i719[0]
  i718.m_ReferencePixelsPerUnit = i719[1]
  i718.m_ScaleFactor = i719[2]
  i718.m_ReferenceResolution = new pc.Vec2( i719[3], i719[4] )
  i718.m_ScreenMatchMode = i719[5]
  i718.m_MatchWidthOrHeight = i719[6]
  i718.m_PhysicalUnit = i719[7]
  i718.m_FallbackScreenDPI = i719[8]
  i718.m_DefaultSpriteDPI = i719[9]
  i718.m_DynamicPixelsPerUnit = i719[10]
  i718.m_PresetInfoIsWorld = !!i719[11]
  return i718
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i720 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i721 = data
  i720.m_IgnoreReversedGraphics = !!i721[0]
  i720.m_BlockingObjects = i721[1]
  i720.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i721[2] )
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i722 = root || new pc.UnityMaterial()
  var i723 = data
  i722.name = i723[0]
  request.r(i723[1], i723[2], 0, i722, 'shader')
  i722.renderQueue = i723[3]
  i722.enableInstancing = !!i723[4]
  var i725 = i723[5]
  var i724 = []
  for(var i = 0; i < i725.length; i += 1) {
    i724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i725[i + 0]) );
  }
  i722.floatParameters = i724
  var i727 = i723[6]
  var i726 = []
  for(var i = 0; i < i727.length; i += 1) {
    i726.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i727[i + 0]) );
  }
  i722.colorParameters = i726
  var i729 = i723[7]
  var i728 = []
  for(var i = 0; i < i729.length; i += 1) {
    i728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i729[i + 0]) );
  }
  i722.vectorParameters = i728
  var i731 = i723[8]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i731[i + 0]) );
  }
  i722.textureParameters = i730
  var i733 = i723[9]
  var i732 = []
  for(var i = 0; i < i733.length; i += 1) {
    i732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i733[i + 0]) );
  }
  i722.materialFlags = i732
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i737 = data
  i736.name = i737[0]
  i736.value = i737[1]
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i741 = data
  i740.name = i741[0]
  i740.value = new pc.Color(i741[1], i741[2], i741[3], i741[4])
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i745 = data
  i744.name = i745[0]
  i744.value = new pc.Vec4( i745[1], i745[2], i745[3], i745[4] )
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i749 = data
  i748.name = i749[0]
  request.r(i749[1], i749[2], 0, i748, 'value')
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i753 = data
  i752.name = i753[0]
  i752.enabled = !!i753[1]
  return i752
}

Deserializers["Scripts.Popup"] = function (request, data, root) {
  var i754 = root || request.c( 'Scripts.Popup' )
  var i755 = data
  i754.backgroundColor = new pc.Color(i755[0], i755[1], i755[2], i755[3])
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i757 = data
  i756.position = new pc.Vec3( i757[0], i757[1], i757[2] )
  i756.scale = new pc.Vec3( i757[3], i757[4], i757[5] )
  i756.rotation = new pc.Quat(i757[6], i757[7], i757[8], i757[9])
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i759 = data
  i758.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i759[0], i758.main)
  i758.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i759[1], i758.colorBySpeed)
  i758.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i759[2], i758.colorOverLifetime)
  i758.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i759[3], i758.emission)
  i758.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i759[4], i758.rotationBySpeed)
  i758.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i759[5], i758.rotationOverLifetime)
  i758.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i759[6], i758.shape)
  i758.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i759[7], i758.sizeBySpeed)
  i758.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i759[8], i758.sizeOverLifetime)
  i758.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i759[9], i758.textureSheetAnimation)
  i758.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i759[10], i758.velocityOverLifetime)
  i758.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i759[11], i758.noise)
  i758.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i759[12], i758.inheritVelocity)
  i758.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i759[13], i758.forceOverLifetime)
  i758.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i759[14], i758.limitVelocityOverLifetime)
  i758.useAutoRandomSeed = !!i759[15]
  i758.randomSeed = i759[16]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i760 = root || new pc.ParticleSystemMain()
  var i761 = data
  i760.duration = i761[0]
  i760.loop = !!i761[1]
  i760.prewarm = !!i761[2]
  i760.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[3], i760.startDelay)
  i760.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[4], i760.startLifetime)
  i760.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[5], i760.startSpeed)
  i760.startSize3D = !!i761[6]
  i760.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[7], i760.startSizeX)
  i760.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[8], i760.startSizeY)
  i760.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[9], i760.startSizeZ)
  i760.startRotation3D = !!i761[10]
  i760.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[11], i760.startRotationX)
  i760.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[12], i760.startRotationY)
  i760.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[13], i760.startRotationZ)
  i760.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i761[14], i760.startColor)
  i760.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[15], i760.gravityModifier)
  i760.simulationSpace = i761[16]
  request.r(i761[17], i761[18], 0, i760, 'customSimulationSpace')
  i760.simulationSpeed = i761[19]
  i760.useUnscaledTime = !!i761[20]
  i760.scalingMode = i761[21]
  i760.playOnAwake = !!i761[22]
  i760.maxParticles = i761[23]
  i760.emitterVelocityMode = i761[24]
  i760.stopAction = i761[25]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i762 = root || new pc.MinMaxCurve()
  var i763 = data
  i762.mode = i763[0]
  i762.curveMin = new pc.AnimationCurve( { keys_flow: i763[1] } )
  i762.curveMax = new pc.AnimationCurve( { keys_flow: i763[2] } )
  i762.curveMultiplier = i763[3]
  i762.constantMin = i763[4]
  i762.constantMax = i763[5]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i764 = root || new pc.MinMaxGradient()
  var i765 = data
  i764.mode = i765[0]
  i764.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i765[1], i764.gradientMin)
  i764.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i765[2], i764.gradientMax)
  i764.colorMin = new pc.Color(i765[3], i765[4], i765[5], i765[6])
  i764.colorMax = new pc.Color(i765[7], i765[8], i765[9], i765[10])
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i767 = data
  i766.mode = i767[0]
  var i769 = i767[1]
  var i768 = []
  for(var i = 0; i < i769.length; i += 1) {
    i768.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i769[i + 0]) );
  }
  i766.colorKeys = i768
  var i771 = i767[2]
  var i770 = []
  for(var i = 0; i < i771.length; i += 1) {
    i770.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i771[i + 0]) );
  }
  i766.alphaKeys = i770
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i772 = root || new pc.ParticleSystemColorBySpeed()
  var i773 = data
  i772.enabled = !!i773[0]
  i772.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i773[1], i772.color)
  i772.range = new pc.Vec2( i773[2], i773[3] )
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i777 = data
  i776.color = new pc.Color(i777[0], i777[1], i777[2], i777[3])
  i776.time = i777[4]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i781 = data
  i780.alpha = i781[0]
  i780.time = i781[1]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i782 = root || new pc.ParticleSystemColorOverLifetime()
  var i783 = data
  i782.enabled = !!i783[0]
  i782.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i783[1], i782.color)
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i784 = root || new pc.ParticleSystemEmitter()
  var i785 = data
  i784.enabled = !!i785[0]
  i784.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[1], i784.rateOverTime)
  i784.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[2], i784.rateOverDistance)
  var i787 = i785[3]
  var i786 = []
  for(var i = 0; i < i787.length; i += 1) {
    i786.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i787[i + 0]) );
  }
  i784.bursts = i786
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i790 = root || new pc.ParticleSystemBurst()
  var i791 = data
  i790.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[0], i790.count)
  i790.cycleCount = i791[1]
  i790.minCount = i791[2]
  i790.maxCount = i791[3]
  i790.repeatInterval = i791[4]
  i790.time = i791[5]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i792 = root || new pc.ParticleSystemRotationBySpeed()
  var i793 = data
  i792.enabled = !!i793[0]
  i792.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[1], i792.x)
  i792.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[2], i792.y)
  i792.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[3], i792.z)
  i792.separateAxes = !!i793[4]
  i792.range = new pc.Vec2( i793[5], i793[6] )
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i794 = root || new pc.ParticleSystemRotationOverLifetime()
  var i795 = data
  i794.enabled = !!i795[0]
  i794.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[1], i794.x)
  i794.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[2], i794.y)
  i794.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[3], i794.z)
  i794.separateAxes = !!i795[4]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i796 = root || new pc.ParticleSystemShape()
  var i797 = data
  i796.enabled = !!i797[0]
  i796.shapeType = i797[1]
  i796.randomDirectionAmount = i797[2]
  i796.sphericalDirectionAmount = i797[3]
  i796.randomPositionAmount = i797[4]
  i796.alignToDirection = !!i797[5]
  i796.radius = i797[6]
  i796.radiusMode = i797[7]
  i796.radiusSpread = i797[8]
  i796.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[9], i796.radiusSpeed)
  i796.radiusThickness = i797[10]
  i796.angle = i797[11]
  i796.length = i797[12]
  i796.boxThickness = new pc.Vec3( i797[13], i797[14], i797[15] )
  i796.meshShapeType = i797[16]
  request.r(i797[17], i797[18], 0, i796, 'mesh')
  request.r(i797[19], i797[20], 0, i796, 'meshRenderer')
  request.r(i797[21], i797[22], 0, i796, 'skinnedMeshRenderer')
  i796.useMeshMaterialIndex = !!i797[23]
  i796.meshMaterialIndex = i797[24]
  i796.useMeshColors = !!i797[25]
  i796.normalOffset = i797[26]
  i796.arc = i797[27]
  i796.arcMode = i797[28]
  i796.arcSpread = i797[29]
  i796.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[30], i796.arcSpeed)
  i796.donutRadius = i797[31]
  i796.position = new pc.Vec3( i797[32], i797[33], i797[34] )
  i796.rotation = new pc.Vec3( i797[35], i797[36], i797[37] )
  i796.scale = new pc.Vec3( i797[38], i797[39], i797[40] )
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i798 = root || new pc.ParticleSystemSizeBySpeed()
  var i799 = data
  i798.enabled = !!i799[0]
  i798.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[1], i798.x)
  i798.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[2], i798.y)
  i798.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[3], i798.z)
  i798.separateAxes = !!i799[4]
  i798.range = new pc.Vec2( i799[5], i799[6] )
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i800 = root || new pc.ParticleSystemSizeOverLifetime()
  var i801 = data
  i800.enabled = !!i801[0]
  i800.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[1], i800.x)
  i800.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[2], i800.y)
  i800.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[3], i800.z)
  i800.separateAxes = !!i801[4]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i802 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i803 = data
  i802.enabled = !!i803[0]
  i802.mode = i803[1]
  i802.animation = i803[2]
  i802.numTilesX = i803[3]
  i802.numTilesY = i803[4]
  i802.useRandomRow = !!i803[5]
  i802.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[6], i802.frameOverTime)
  i802.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[7], i802.startFrame)
  i802.cycleCount = i803[8]
  i802.rowIndex = i803[9]
  i802.flipU = i803[10]
  i802.flipV = i803[11]
  i802.spriteCount = i803[12]
  var i805 = i803[13]
  var i804 = []
  for(var i = 0; i < i805.length; i += 2) {
  request.r(i805[i + 0], i805[i + 1], 2, i804, '')
  }
  i802.sprites = i804
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i808 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i809 = data
  i808.enabled = !!i809[0]
  i808.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[1], i808.x)
  i808.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[2], i808.y)
  i808.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[3], i808.z)
  i808.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[4], i808.radial)
  i808.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[5], i808.speedModifier)
  i808.space = i809[6]
  i808.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[7], i808.orbitalX)
  i808.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[8], i808.orbitalY)
  i808.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[9], i808.orbitalZ)
  i808.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[10], i808.orbitalOffsetX)
  i808.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[11], i808.orbitalOffsetY)
  i808.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[12], i808.orbitalOffsetZ)
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i810 = root || new pc.ParticleSystemNoise()
  var i811 = data
  i810.enabled = !!i811[0]
  i810.separateAxes = !!i811[1]
  i810.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[2], i810.strengthX)
  i810.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[3], i810.strengthY)
  i810.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[4], i810.strengthZ)
  i810.frequency = i811[5]
  i810.damping = !!i811[6]
  i810.octaveCount = i811[7]
  i810.octaveMultiplier = i811[8]
  i810.octaveScale = i811[9]
  i810.quality = i811[10]
  i810.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[11], i810.scrollSpeed)
  i810.scrollSpeedMultiplier = i811[12]
  i810.remapEnabled = !!i811[13]
  i810.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[14], i810.remapX)
  i810.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[15], i810.remapY)
  i810.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[16], i810.remapZ)
  i810.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[17], i810.positionAmount)
  i810.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[18], i810.rotationAmount)
  i810.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[19], i810.sizeAmount)
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i812 = root || new pc.ParticleSystemInheritVelocity()
  var i813 = data
  i812.enabled = !!i813[0]
  i812.mode = i813[1]
  i812.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[2], i812.curve)
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i814 = root || new pc.ParticleSystemForceOverLifetime()
  var i815 = data
  i814.enabled = !!i815[0]
  i814.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[1], i814.x)
  i814.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[2], i814.y)
  i814.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[3], i814.z)
  i814.space = i815[4]
  i814.randomized = !!i815[5]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i816 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i817 = data
  i816.enabled = !!i817[0]
  i816.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[1], i816.limit)
  i816.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[2], i816.limitX)
  i816.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[3], i816.limitY)
  i816.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[4], i816.limitZ)
  i816.dampen = i817[5]
  i816.separateAxes = !!i817[6]
  i816.space = i817[7]
  i816.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[8], i816.drag)
  i816.multiplyDragByParticleSize = !!i817[9]
  i816.multiplyDragByParticleVelocity = !!i817[10]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i819 = data
  request.r(i819[0], i819[1], 0, i818, 'mesh')
  i818.meshCount = i819[2]
  i818.activeVertexStreamsCount = i819[3]
  i818.alignment = i819[4]
  i818.renderMode = i819[5]
  i818.sortMode = i819[6]
  i818.lengthScale = i819[7]
  i818.velocityScale = i819[8]
  i818.cameraVelocityScale = i819[9]
  i818.normalDirection = i819[10]
  i818.sortingFudge = i819[11]
  i818.minParticleSize = i819[12]
  i818.maxParticleSize = i819[13]
  i818.pivot = new pc.Vec3( i819[14], i819[15], i819[16] )
  request.r(i819[17], i819[18], 0, i818, 'trailMaterial')
  i818.applyActiveColorSpace = !!i819[19]
  i818.enabled = !!i819[20]
  request.r(i819[21], i819[22], 0, i818, 'sharedMaterial')
  var i821 = i819[23]
  var i820 = []
  for(var i = 0; i < i821.length; i += 2) {
  request.r(i821[i + 0], i821[i + 1], 2, i820, '')
  }
  i818.sharedMaterials = i820
  i818.receiveShadows = !!i819[24]
  i818.shadowCastingMode = i819[25]
  i818.sortingLayerID = i819[26]
  i818.sortingOrder = i819[27]
  i818.lightmapIndex = i819[28]
  i818.lightmapSceneIndex = i819[29]
  i818.lightmapScaleOffset = new pc.Vec4( i819[30], i819[31], i819[32], i819[33] )
  i818.lightProbeUsage = i819[34]
  i818.reflectionProbeUsage = i819[35]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i825 = data
  request.r(i825[0], i825[1], 0, i824, 'clip')
  request.r(i825[2], i825[3], 0, i824, 'outputAudioMixerGroup')
  i824.playOnAwake = !!i825[4]
  i824.loop = !!i825[5]
  i824.time = i825[6]
  i824.volume = i825[7]
  i824.pitch = i825[8]
  i824.enabled = !!i825[9]
  return i824
}

Deserializers["UnityEngine.UI.Outline"] = function (request, data, root) {
  var i826 = root || request.c( 'UnityEngine.UI.Outline' )
  var i827 = data
  i826.m_EffectColor = new pc.Color(i827[0], i827[1], i827[2], i827[3])
  i826.m_EffectDistance = new pc.Vec2( i827[4], i827[5] )
  i826.m_UseGraphicAlpha = !!i827[6]
  return i826
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i828 = root || request.c( 'UnityEngine.UI.Slider' )
  var i829 = data
  request.r(i829[0], i829[1], 0, i828, 'm_FillRect')
  request.r(i829[2], i829[3], 0, i828, 'm_HandleRect')
  i828.m_Direction = i829[4]
  i828.m_MinValue = i829[5]
  i828.m_MaxValue = i829[6]
  i828.m_WholeNumbers = !!i829[7]
  i828.m_Value = i829[8]
  i828.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i829[9], i828.m_OnValueChanged)
  i828.m_Navigation = request.d('UnityEngine.UI.Navigation', i829[10], i828.m_Navigation)
  i828.m_Transition = i829[11]
  i828.m_Colors = request.d('UnityEngine.UI.ColorBlock', i829[12], i828.m_Colors)
  i828.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i829[13], i828.m_SpriteState)
  i828.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i829[14], i828.m_AnimationTriggers)
  i828.m_Interactable = !!i829[15]
  request.r(i829[16], i829[17], 0, i828, 'm_TargetGraphic')
  return i828
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i830 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i831 = data
  i830.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i831[0], i830.m_PersistentCalls)
  return i830
}

Deserializers["Scripts.MusicManager"] = function (request, data, root) {
  var i832 = root || request.c( 'Scripts.MusicManager' )
  var i833 = data
  return i832
}

Deserializers["Scripts.SpriteSwapper"] = function (request, data, root) {
  var i834 = root || request.c( 'Scripts.SpriteSwapper' )
  var i835 = data
  request.r(i835[0], i835[1], 0, i834, 'enabledSprite')
  request.r(i835[2], i835[3], 0, i834, 'disabledSprite')
  return i834
}

Deserializers["Scripts.AnimatedButton"] = function (request, data, root) {
  var i836 = root || request.c( 'Scripts.AnimatedButton' )
  var i837 = data
  i836.interactable = !!i837[0]
  i836.m_OnClick = request.d('Scripts.ButtonClickedEvent', i837[1], i836.m_OnClick)
  return i836
}

Deserializers["Scripts.ButtonClickedEvent"] = function (request, data, root) {
  var i838 = root || request.c( 'Scripts.ButtonClickedEvent' )
  var i839 = data
  i838.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i839[0], i838.m_PersistentCalls)
  return i838
}

Deserializers["Scripts.SoundManager"] = function (request, data, root) {
  var i840 = root || request.c( 'Scripts.SoundManager' )
  var i841 = data
  return i840
}

Deserializers["Scripts.SceneTransition"] = function (request, data, root) {
  var i842 = root || request.c( 'Scripts.SceneTransition' )
  var i843 = data
  i842.scene = i843[0]
  i842.duration = i843[1]
  i842.color = new pc.Color(i843[2], i843[3], i843[4], i843[5])
  return i842
}

Deserializers["LevelTaskBox"] = function (request, data, root) {
  var i844 = root || request.c( 'LevelTaskBox' )
  var i845 = data
  request.r(i845[0], i845[1], 0, i844, '_tileImage')
  request.r(i845[2], i845[3], 0, i844, '_missionCountText')
  request.r(i845[4], i845[5], 0, i844, '_currentTileCountText')
  request.r(i845[6], i845[7], 0, i844, '_checkedIcon')
  return i844
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i846 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i847 = data
  i846.m_Spacing = i847[0]
  i846.m_ChildForceExpandWidth = !!i847[1]
  i846.m_ChildForceExpandHeight = !!i847[2]
  i846.m_ChildControlWidth = !!i847[3]
  i846.m_ChildControlHeight = !!i847[4]
  i846.m_ChildScaleWidth = !!i847[5]
  i846.m_ChildScaleHeight = !!i847[6]
  i846.m_ReverseArrangement = !!i847[7]
  i846.m_Padding = UnityEngine.RectOffset.FromPaddings(i847[8], i847[9], i847[10], i847[11])
  i846.m_ChildAlignment = i847[12]
  return i846
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i848 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i849 = data
  i848.m_hasFontAssetChanged = !!i849[0]
  request.r(i849[1], i849[2], 0, i848, 'm_baseMaterial')
  i848.m_maskOffset = new pc.Vec4( i849[3], i849[4], i849[5], i849[6] )
  i848.m_text = i849[7]
  i848.m_isRightToLeft = !!i849[8]
  request.r(i849[9], i849[10], 0, i848, 'm_fontAsset')
  request.r(i849[11], i849[12], 0, i848, 'm_sharedMaterial')
  var i851 = i849[13]
  var i850 = []
  for(var i = 0; i < i851.length; i += 2) {
  request.r(i851[i + 0], i851[i + 1], 2, i850, '')
  }
  i848.m_fontSharedMaterials = i850
  request.r(i849[14], i849[15], 0, i848, 'm_fontMaterial')
  var i853 = i849[16]
  var i852 = []
  for(var i = 0; i < i853.length; i += 2) {
  request.r(i853[i + 0], i853[i + 1], 2, i852, '')
  }
  i848.m_fontMaterials = i852
  i848.m_fontColor32 = UnityEngine.Color32.ConstructColor(i849[17], i849[18], i849[19], i849[20])
  i848.m_fontColor = new pc.Color(i849[21], i849[22], i849[23], i849[24])
  i848.m_enableVertexGradient = !!i849[25]
  i848.m_colorMode = i849[26]
  i848.m_fontColorGradient = request.d('TMPro.VertexGradient', i849[27], i848.m_fontColorGradient)
  request.r(i849[28], i849[29], 0, i848, 'm_fontColorGradientPreset')
  request.r(i849[30], i849[31], 0, i848, 'm_spriteAsset')
  i848.m_tintAllSprites = !!i849[32]
  request.r(i849[33], i849[34], 0, i848, 'm_StyleSheet')
  i848.m_TextStyleHashCode = i849[35]
  i848.m_overrideHtmlColors = !!i849[36]
  i848.m_faceColor = UnityEngine.Color32.ConstructColor(i849[37], i849[38], i849[39], i849[40])
  i848.m_fontSize = i849[41]
  i848.m_fontSizeBase = i849[42]
  i848.m_fontWeight = i849[43]
  i848.m_enableAutoSizing = !!i849[44]
  i848.m_fontSizeMin = i849[45]
  i848.m_fontSizeMax = i849[46]
  i848.m_fontStyle = i849[47]
  i848.m_HorizontalAlignment = i849[48]
  i848.m_VerticalAlignment = i849[49]
  i848.m_textAlignment = i849[50]
  i848.m_characterSpacing = i849[51]
  i848.m_wordSpacing = i849[52]
  i848.m_lineSpacing = i849[53]
  i848.m_lineSpacingMax = i849[54]
  i848.m_paragraphSpacing = i849[55]
  i848.m_charWidthMaxAdj = i849[56]
  i848.m_enableWordWrapping = !!i849[57]
  i848.m_wordWrappingRatios = i849[58]
  i848.m_overflowMode = i849[59]
  request.r(i849[60], i849[61], 0, i848, 'm_linkedTextComponent')
  request.r(i849[62], i849[63], 0, i848, 'parentLinkedComponent')
  i848.m_enableKerning = !!i849[64]
  i848.m_enableExtraPadding = !!i849[65]
  i848.checkPaddingRequired = !!i849[66]
  i848.m_isRichText = !!i849[67]
  i848.m_parseCtrlCharacters = !!i849[68]
  i848.m_isOrthographic = !!i849[69]
  i848.m_isCullingEnabled = !!i849[70]
  i848.m_horizontalMapping = i849[71]
  i848.m_verticalMapping = i849[72]
  i848.m_uvLineOffset = i849[73]
  i848.m_geometrySortingOrder = i849[74]
  i848.m_IsTextObjectScaleStatic = !!i849[75]
  i848.m_VertexBufferAutoSizeReduction = !!i849[76]
  i848.m_useMaxVisibleDescender = !!i849[77]
  i848.m_pageToDisplay = i849[78]
  i848.m_margin = new pc.Vec4( i849[79], i849[80], i849[81], i849[82] )
  i848.m_isUsingLegacyAnimationComponent = !!i849[83]
  i848.m_isVolumetricText = !!i849[84]
  i848.m_Maskable = !!i849[85]
  request.r(i849[86], i849[87], 0, i848, 'm_Material')
  i848.m_Color = new pc.Color(i849[88], i849[89], i849[90], i849[91])
  i848.m_RaycastTarget = !!i849[92]
  i848.m_RaycastPadding = new pc.Vec4( i849[93], i849[94], i849[95], i849[96] )
  return i848
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i854 = root || request.c( 'TMPro.VertexGradient' )
  var i855 = data
  i854.topLeft = new pc.Color(i855[0], i855[1], i855[2], i855[3])
  i854.topRight = new pc.Color(i855[4], i855[5], i855[6], i855[7])
  i854.bottomLeft = new pc.Color(i855[8], i855[9], i855[10], i855[11])
  i854.bottomRight = new pc.Color(i855[12], i855[13], i855[14], i855[15])
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i857 = data
  i856.name = i857[0]
  i856.index = i857[1]
  i856.startup = !!i857[2]
  return i856
}

Deserializers["PlayableSettings"] = function (request, data, root) {
  var i858 = root || request.c( 'PlayableSettings' )
  var i859 = data
  i858.m_SkipMainMenu = !!i859[0]
  i858.m_UseCTAScreen = !!i859[1]
  i858.m_EndcardActivationSendsToStore = !!i859[2]
  i858.m_ShowEndcardAfterXTaps = !!i859[3]
  i858.m_TapsBeforeShowingEndcard = i859[4]
  return i858
}

Deserializers["EndCardController"] = function (request, data, root) {
  var i860 = root || request.c( 'EndCardController' )
  var i861 = data
  i860.alwaysShowEndcardTESTING = !!i861[0]
  i860.EndCardOpenedEvent = request.d('UnityEngine.Events.UnityEvent', i861[1], i860.EndCardOpenedEvent)
  i860._backgroundColor = new pc.Color(i861[2], i861[3], i861[4], i861[5])
  request.r(i861[6], i861[7], 0, i860, '_backgroundTexture')
  request.r(i861[8], i861[9], 0, i860, '_iconTexture')
  i860._iconColor = new pc.Color(i861[10], i861[11], i861[12], i861[13])
  request.r(i861[14], i861[15], 0, i860, '_buttonTexture')
  i860._buttonColor = new pc.Color(i861[16], i861[17], i861[18], i861[19])
  i860._endCardDescriptionText = i861[20]
  i860._CTAButtonText = i861[21]
  i860._useBestFitOnCTA = !!i861[22]
  i860._CTAFontColor = new pc.Color(i861[23], i861[24], i861[25], i861[26])
  i860._descriptionFontColor = new pc.Color(i861[27], i861[28], i861[29], i861[30])
  request.r(i861[31], i861[32], 0, i860, '_CTAFont')
  request.r(i861[33], i861[34], 0, i860, '_descriptionFont')
  i860._CTAFontSize = i861[35]
  i860._descriptionFontSize = i861[36]
  i860._centerDescriptionX = !!i861[37]
  i860._centerDescriptionY = !!i861[38]
  i860._centerButtonX = !!i861[39]
  i860._centerButtonY = !!i861[40]
  i860._descriptionPositionX = i861[41]
  i860._descriptionPositionY = i861[42]
  i860._buttonPositionX = i861[43]
  i860._buttonPositionY = i861[44]
  i860._CTAFontSizeLandscape = i861[45]
  i860._descriptionFontSizeLandscape = i861[46]
  i860._centerDescriptionXLandscape = !!i861[47]
  i860._centerDescriptionYLandscape = !!i861[48]
  i860._centerButtonXLandscape = !!i861[49]
  i860._centerButtonYLandscape = !!i861[50]
  i860._descriptionPositionXLandscape = i861[51]
  i860._descriptionPositionYLandscape = i861[52]
  i860._buttonPositionXLandscape = i861[53]
  i860._buttonPositionYLandscape = i861[54]
  i860._centerIconX = !!i861[55]
  i860._centerIconY = !!i861[56]
  i860._iconPositionX = i861[57]
  i860._iconPositionY = i861[58]
  i860._iconSize = i861[59]
  i860._roundEdgesOnIcon = !!i861[60]
  i860._centerIconXLandscape = !!i861[61]
  i860._centerIconYLandscape = !!i861[62]
  i860._iconPositionXLandscape = i861[63]
  i860._iconPositionYLandscape = i861[64]
  i860._iconSizeLandscape = i861[65]
  i860._roundEdgesOnIconLandscape = !!i861[66]
  i860._endCardClickableOptions = i861[67]
  i860._buttonAnimationType = i861[68]
  i860._endCardPortraitAnimationType = i861[69]
  i860._endCardLandscapeAnimationType = i861[70]
  request.r(i861[71], i861[72], 0, i860, '_backgroundImage')
  request.r(i861[73], i861[74], 0, i860, '_CTAButton')
  request.r(i861[75], i861[76], 0, i860, '_ScreenCTAButton')
  request.r(i861[77], i861[78], 0, i860, '_CTAButtonTextText')
  request.r(i861[79], i861[80], 0, i860, '_EndCardDescriptionTextText')
  request.r(i861[81], i861[82], 0, i860, '_maskIcon')
  request.r(i861[83], i861[84], 0, i860, '_iconRect')
  request.r(i861[85], i861[86], 0, i860, '_iconRectMask')
  request.r(i861[87], i861[88], 0, i860, '_descriptionRect')
  request.r(i861[89], i861[90], 0, i860, '_buttonRect')
  request.r(i861[91], i861[92], 0, i860, '_CTAButtonAnimator')
  request.r(i861[93], i861[94], 0, i860, '_endCardAnimator')
  request.r(i861[95], i861[96], 0, i860, '_iconImage')
  request.r(i861[97], i861[98], 0, i860, '_CTAButtonImage')
  return i860
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i862 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i863 = data
  i862.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i863[0], i862.m_PersistentCalls)
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i865 = data
  i864.aspect = i865[0]
  i864.orthographic = !!i865[1]
  i864.orthographicSize = i865[2]
  i864.backgroundColor = new pc.Color(i865[3], i865[4], i865[5], i865[6])
  i864.nearClipPlane = i865[7]
  i864.farClipPlane = i865[8]
  i864.fieldOfView = i865[9]
  i864.depth = i865[10]
  i864.clearFlags = i865[11]
  i864.cullingMask = i865[12]
  i864.rect = i865[13]
  request.r(i865[14], i865[15], 0, i864, 'targetTexture')
  i864.usePhysicalProperties = !!i865[16]
  i864.focalLength = i865[17]
  i864.sensorSize = new pc.Vec2( i865[18], i865[19] )
  i864.lensShift = new pc.Vec2( i865[20], i865[21] )
  i864.gateFit = i865[22]
  i864.commandBufferCount = i865[23]
  i864.cameraType = i865[24]
  i864.enabled = !!i865[25]
  return i864
}

Deserializers["Scripts.PopupOpener"] = function (request, data, root) {
  var i866 = root || request.c( 'Scripts.PopupOpener' )
  var i867 = data
  request.r(i867[0], i867[1], 0, i866, 'popupPrefab')
  return i866
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i868 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i869 = data
  i868.m_Spacing = i869[0]
  i868.m_ChildForceExpandWidth = !!i869[1]
  i868.m_ChildForceExpandHeight = !!i869[2]
  i868.m_ChildControlWidth = !!i869[3]
  i868.m_ChildControlHeight = !!i869[4]
  i868.m_ChildScaleWidth = !!i869[5]
  i868.m_ChildScaleHeight = !!i869[6]
  i868.m_ReverseArrangement = !!i869[7]
  i868.m_Padding = UnityEngine.RectOffset.FromPaddings(i869[8], i869[9], i869[10], i869[11])
  i868.m_ChildAlignment = i869[12]
  return i868
}

Deserializers["Match3.Board"] = function (request, data, root) {
  var i870 = root || request.c( 'Match3.Board' )
  var i871 = data
  var i873 = i871[0]
  var i872 = new (System.Collections.Generic.List$1(Bridge.ns('Match3.Row')))
  for(var i = 0; i < i873.length; i += 1) {
    i872.add(request.d('Match3.Row', i873[i + 0]));
  }
  i870._rows = i872
  request.r(i871[1], i871[2], 0, i870, '_levelManager')
  i870._tweenDuration = i871[3]
  request.r(i871[4], i871[5], 0, i870, '_swappingOverlay')
  i870._ensureNoStartingMatches = !!i871[6]
  return i870
}

Deserializers["Match3.Row"] = function (request, data, root) {
  var i876 = root || request.c( 'Match3.Row' )
  var i877 = data
  var i879 = i877[0]
  var i878 = new (System.Collections.Generic.List$1(Bridge.ns('Match3.Tile')))
  for(var i = 0; i < i879.length; i += 2) {
  request.r(i879[i + 0], i879[i + 1], 1, i878, '')
  }
  i876.Tiles = i878
  return i876
}

Deserializers["Match3.Tile"] = function (request, data, root) {
  var i882 = root || request.c( 'Match3.Tile' )
  var i883 = data
  i882.X = i883[0]
  i882.Y = i883[1]
  request.r(i883[2], i883[3], 0, i882, 'Icon')
  return i882
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i884 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i885 = data
  request.r(i885[0], i885[1], 0, i884, 'm_FirstSelected')
  i884.m_sendNavigationEvents = !!i885[2]
  i884.m_DragThreshold = i885[3]
  return i884
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i886 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i887 = data
  i886.m_HorizontalAxis = i887[0]
  i886.m_VerticalAxis = i887[1]
  i886.m_SubmitButton = i887[2]
  i886.m_CancelButton = i887[3]
  i886.m_InputActionsPerSecond = i887[4]
  i886.m_RepeatDelay = i887[5]
  i886.m_ForceModuleActive = !!i887[6]
  i886.m_SendPointerHoverToParent = !!i887[7]
  return i886
}

Deserializers["Match3.Core.LevelManager"] = function (request, data, root) {
  var i888 = root || request.c( 'Match3.Core.LevelManager' )
  var i889 = data
  request.r(i889[0], i889[1], 0, i888, '_movesCountText')
  request.r(i889[2], i889[3], 0, i888, '_tasksParent')
  request.r(i889[4], i889[5], 0, i888, '_levelComplete')
  request.r(i889[6], i889[7], 0, i888, '_disableBoard')
  i888._currentLevel = request.d('Match3.Settings.Level', i889[8], i888._currentLevel)
  request.r(i889[9], i889[10], 0, i888, '_boxPrefab')
  request.r(i889[11], i889[12], 0, i888, '_progressSlider')
  var i891 = i889[13]
  var i890 = []
  for(var i = 0; i < i891.length; i += 2) {
  request.r(i891[i + 0], i891[i + 1], 2, i890, '')
  }
  i888._stars = i890
  request.r(i889[14], i889[15], 0, i888, '_activeStarSprite')
  request.r(i889[16], i889[17], 0, i888, '_inactiveStarSprite')
  i888._progressTweenDuration = i889[18]
  return i888
}

Deserializers["Match3.Settings.Level"] = function (request, data, root) {
  var i892 = root || request.c( 'Match3.Settings.Level' )
  var i893 = data
  var i895 = i893[0]
  var i894 = new (System.Collections.Generic.List$1(Bridge.ns('Match3.Settings.Mission')))
  for(var i = 0; i < i895.length; i += 1) {
    i894.add(request.d('Match3.Settings.Mission', i895[i + 0]));
  }
  i892.Missions = i894
  i892.TotalMoves = i893[1]
  i892.StarsCount = i893[2]
  i892.Score = i893[3]
  i892.LevelButtonType = i893[4]
  return i892
}

Deserializers["Match3.Settings.Mission"] = function (request, data, root) {
  var i898 = root || request.c( 'Match3.Settings.Mission' )
  var i899 = data
  i898.TileType = i899[0]
  i898.TargetCount = i899[1]
  return i898
}

Deserializers["Scripts.BackgroundMusic"] = function (request, data, root) {
  var i902 = root || request.c( 'Scripts.BackgroundMusic' )
  var i903 = data
  return i902
}

Deserializers["Settings.SettingsProvider"] = function (request, data, root) {
  var i904 = root || request.c( 'Settings.SettingsProvider' )
  var i905 = data
  var i907 = i905[0]
  var i906 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.MonoBehaviour')))
  for(var i = 0; i < i907.length; i += 2) {
  request.r(i907[i + 0], i907[i + 1], 1, i906, '')
  }
  i904._settingsList = i906
  return i904
}

Deserializers["Match3.TileTypeDatas"] = function (request, data, root) {
  var i910 = root || request.c( 'Match3.TileTypeDatas' )
  var i911 = data
  var i913 = i911[0]
  var i912 = new (System.Collections.Generic.List$1(Bridge.ns('Match3.TileTypeData')))
  for(var i = 0; i < i913.length; i += 1) {
    i912.add(request.d('Match3.TileTypeData', i913[i + 0]));
  }
  i910.TileDatas = i912
  return i910
}

Deserializers["Match3.TileTypeData"] = function (request, data, root) {
  var i916 = root || request.c( 'Match3.TileTypeData' )
  var i917 = data
  i916.TileType = i917[0]
  i916.TileAbility = i917[1]
  request.r(i917[2], i917[3], 0, i916, 'Sprite')
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i919 = data
  i918.ambientIntensity = i919[0]
  i918.reflectionIntensity = i919[1]
  i918.ambientMode = i919[2]
  i918.ambientLight = new pc.Color(i919[3], i919[4], i919[5], i919[6])
  i918.ambientSkyColor = new pc.Color(i919[7], i919[8], i919[9], i919[10])
  i918.ambientGroundColor = new pc.Color(i919[11], i919[12], i919[13], i919[14])
  i918.ambientEquatorColor = new pc.Color(i919[15], i919[16], i919[17], i919[18])
  i918.fogColor = new pc.Color(i919[19], i919[20], i919[21], i919[22])
  i918.fogEndDistance = i919[23]
  i918.fogStartDistance = i919[24]
  i918.fogDensity = i919[25]
  i918.fog = !!i919[26]
  request.r(i919[27], i919[28], 0, i918, 'skybox')
  i918.fogMode = i919[29]
  var i921 = i919[30]
  var i920 = []
  for(var i = 0; i < i921.length; i += 1) {
    i920.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i921[i + 0]) );
  }
  i918.lightmaps = i920
  i918.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i919[31], i918.lightProbes)
  i918.lightmapsMode = i919[32]
  i918.mixedBakeMode = i919[33]
  i918.environmentLightingMode = i919[34]
  i918.ambientProbe = new pc.SphericalHarmonicsL2(i919[35])
  i918.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i919[36])
  i918.useReferenceAmbientProbe = !!i919[37]
  request.r(i919[38], i919[39], 0, i918, 'customReflection')
  request.r(i919[40], i919[41], 0, i918, 'defaultReflection')
  i918.defaultReflectionMode = i919[42]
  i918.defaultReflectionResolution = i919[43]
  i918.sunLightObjectId = i919[44]
  i918.pixelLightCount = i919[45]
  i918.defaultReflectionHDR = !!i919[46]
  i918.hasLightDataAsset = !!i919[47]
  i918.hasManualGenerate = !!i919[48]
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i925 = data
  request.r(i925[0], i925[1], 0, i924, 'lightmapColor')
  request.r(i925[2], i925[3], 0, i924, 'lightmapDirection')
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i926 = root || new UnityEngine.LightProbes()
  var i927 = data
  return i926
}

Deserializers["InteractiveEndCardBuilder.Scripts.ExampleEndCardCallScript"] = function (request, data, root) {
  var i934 = root || request.c( 'InteractiveEndCardBuilder.Scripts.ExampleEndCardCallScript' )
  var i935 = data
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i937 = data
  var i939 = i937[0]
  var i938 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i939.length; i += 1) {
    i938.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i939[i + 0]));
  }
  i936.ShaderCompilationErrors = i938
  i936.name = i937[1]
  i936.guid = i937[2]
  var i941 = i937[3]
  var i940 = []
  for(var i = 0; i < i941.length; i += 1) {
    i940.push( i941[i + 0] );
  }
  i936.shaderDefinedKeywords = i940
  var i943 = i937[4]
  var i942 = []
  for(var i = 0; i < i943.length; i += 1) {
    i942.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i943[i + 0]) );
  }
  i936.passes = i942
  var i945 = i937[5]
  var i944 = []
  for(var i = 0; i < i945.length; i += 1) {
    i944.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i945[i + 0]) );
  }
  i936.usePasses = i944
  var i947 = i937[6]
  var i946 = []
  for(var i = 0; i < i947.length; i += 1) {
    i946.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i947[i + 0]) );
  }
  i936.defaultParameterValues = i946
  request.r(i937[7], i937[8], 0, i936, 'unityFallbackShader')
  i936.readDepth = !!i937[9]
  i936.isCreatedByShaderGraph = !!i937[10]
  i936.disableBatching = !!i937[11]
  i936.compiled = !!i937[12]
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i951 = data
  i950.shaderName = i951[0]
  i950.errorMessage = i951[1]
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i956 = root || new pc.UnityShaderPass()
  var i957 = data
  i956.id = i957[0]
  i956.subShaderIndex = i957[1]
  i956.name = i957[2]
  i956.passType = i957[3]
  i956.grabPassTextureName = i957[4]
  i956.usePass = !!i957[5]
  i956.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i957[6], i956.zTest)
  i956.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i957[7], i956.zWrite)
  i956.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i957[8], i956.culling)
  i956.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i957[9], i956.blending)
  i956.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i957[10], i956.alphaBlending)
  i956.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i957[11], i956.colorWriteMask)
  i956.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i957[12], i956.offsetUnits)
  i956.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i957[13], i956.offsetFactor)
  i956.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i957[14], i956.stencilRef)
  i956.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i957[15], i956.stencilReadMask)
  i956.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i957[16], i956.stencilWriteMask)
  i956.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i957[17], i956.stencilOp)
  i956.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i957[18], i956.stencilOpFront)
  i956.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i957[19], i956.stencilOpBack)
  var i959 = i957[20]
  var i958 = []
  for(var i = 0; i < i959.length; i += 1) {
    i958.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i959[i + 0]) );
  }
  i956.tags = i958
  var i961 = i957[21]
  var i960 = []
  for(var i = 0; i < i961.length; i += 1) {
    i960.push( i961[i + 0] );
  }
  i956.passDefinedKeywords = i960
  var i963 = i957[22]
  var i962 = []
  for(var i = 0; i < i963.length; i += 1) {
    i962.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i963[i + 0]) );
  }
  i956.passDefinedKeywordGroups = i962
  var i965 = i957[23]
  var i964 = []
  for(var i = 0; i < i965.length; i += 1) {
    i964.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i965[i + 0]) );
  }
  i956.variants = i964
  var i967 = i957[24]
  var i966 = []
  for(var i = 0; i < i967.length; i += 1) {
    i966.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i967[i + 0]) );
  }
  i956.excludedVariants = i966
  i956.hasDepthReader = !!i957[25]
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i969 = data
  i968.val = i969[0]
  i968.name = i969[1]
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i971 = data
  i970.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i971[0], i970.src)
  i970.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i971[1], i970.dst)
  i970.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i971[2], i970.op)
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i973 = data
  i972.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i973[0], i972.pass)
  i972.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i973[1], i972.fail)
  i972.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i973[2], i972.zFail)
  i972.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i973[3], i972.comp)
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i977 = data
  i976.name = i977[0]
  i976.value = i977[1]
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i981 = data
  var i983 = i981[0]
  var i982 = []
  for(var i = 0; i < i983.length; i += 1) {
    i982.push( i983[i + 0] );
  }
  i980.keywords = i982
  i980.hasDiscard = !!i981[1]
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i987 = data
  i986.passId = i987[0]
  i986.subShaderIndex = i987[1]
  var i989 = i987[2]
  var i988 = []
  for(var i = 0; i < i989.length; i += 1) {
    i988.push( i989[i + 0] );
  }
  i986.keywords = i988
  i986.vertexProgram = i987[3]
  i986.fragmentProgram = i987[4]
  i986.exportedForWebGl2 = !!i987[5]
  i986.readDepth = !!i987[6]
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i993 = data
  request.r(i993[0], i993[1], 0, i992, 'shader')
  i992.pass = i993[2]
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i997 = data
  i996.name = i997[0]
  i996.type = i997[1]
  i996.value = new pc.Vec4( i997[2], i997[3], i997[4], i997[5] )
  i996.textureValue = i997[6]
  i996.shaderPropertyFlag = i997[7]
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i999 = data
  i998.name = i999[0]
  request.r(i999[1], i999[2], 0, i998, 'texture')
  i998.aabb = i999[3]
  i998.vertices = i999[4]
  i998.triangles = i999[5]
  i998.textureRect = UnityEngine.Rect.MinMaxRect(i999[6], i999[7], i999[8], i999[9])
  i998.packedRect = UnityEngine.Rect.MinMaxRect(i999[10], i999[11], i999[12], i999[13])
  i998.border = new pc.Vec4( i999[14], i999[15], i999[16], i999[17] )
  i998.transparency = i999[18]
  i998.bounds = i999[19]
  i998.pixelsPerUnit = i999[20]
  i998.textureWidth = i999[21]
  i998.textureHeight = i999[22]
  i998.nativeSize = new pc.Vec2( i999[23], i999[24] )
  i998.pivot = new pc.Vec2( i999[25], i999[26] )
  i998.textureRectOffset = new pc.Vec2( i999[27], i999[28] )
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1001 = data
  i1000.name = i1001[0]
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1003 = data
  i1002.name = i1003[0]
  i1002.wrapMode = i1003[1]
  i1002.isLooping = !!i1003[2]
  i1002.length = i1003[3]
  var i1005 = i1003[4]
  var i1004 = []
  for(var i = 0; i < i1005.length; i += 1) {
    i1004.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1005[i + 0]) );
  }
  i1002.curves = i1004
  var i1007 = i1003[5]
  var i1006 = []
  for(var i = 0; i < i1007.length; i += 1) {
    i1006.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1007[i + 0]) );
  }
  i1002.events = i1006
  i1002.halfPrecision = !!i1003[6]
  i1002._frameRate = i1003[7]
  i1002.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1003[8], i1002.localBounds)
  i1002.hasMuscleCurves = !!i1003[9]
  var i1009 = i1003[10]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.push( i1009[i + 0] );
  }
  i1002.clipMuscleConstant = i1008
  i1002.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1003[11], i1002.clipBindingConstant)
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1013 = data
  i1012.path = i1013[0]
  i1012.hash = i1013[1]
  i1012.componentType = i1013[2]
  i1012.property = i1013[3]
  i1012.keys = i1013[4]
  var i1015 = i1013[5]
  var i1014 = []
  for(var i = 0; i < i1015.length; i += 1) {
    i1014.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1015[i + 0]) );
  }
  i1012.objectReferenceKeys = i1014
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1019 = data
  i1018.functionName = i1019[0]
  i1018.floatParameter = i1019[1]
  i1018.intParameter = i1019[2]
  i1018.stringParameter = i1019[3]
  request.r(i1019[4], i1019[5], 0, i1018, 'objectReferenceParameter')
  i1018.time = i1019[6]
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1021 = data
  i1020.center = new pc.Vec3( i1021[0], i1021[1], i1021[2] )
  i1020.extends = new pc.Vec3( i1021[3], i1021[4], i1021[5] )
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1025 = data
  var i1027 = i1025[0]
  var i1026 = []
  for(var i = 0; i < i1027.length; i += 1) {
    i1026.push( i1027[i + 0] );
  }
  i1024.genericBindings = i1026
  var i1029 = i1025[1]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.push( i1029[i + 0] );
  }
  i1024.pptrCurveMapping = i1028
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1033 = data
  i1032.time = i1033[0]
  request.r(i1033[1], i1033[2], 0, i1032, 'value')
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1035 = data
  i1034.name = i1035[0]
  i1034.ascent = i1035[1]
  i1034.originalLineHeight = i1035[2]
  i1034.fontSize = i1035[3]
  var i1037 = i1035[4]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1037[i + 0]) );
  }
  i1034.characterInfo = i1036
  request.r(i1035[5], i1035[6], 0, i1034, 'texture')
  i1034.originalFontSize = i1035[7]
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1041 = data
  i1040.index = i1041[0]
  i1040.advance = i1041[1]
  i1040.bearing = i1041[2]
  i1040.glyphWidth = i1041[3]
  i1040.glyphHeight = i1041[4]
  i1040.minX = i1041[5]
  i1040.maxX = i1041[6]
  i1040.minY = i1041[7]
  i1040.maxY = i1041[8]
  i1040.uvBottomLeftX = i1041[9]
  i1040.uvBottomLeftY = i1041[10]
  i1040.uvBottomRightX = i1041[11]
  i1040.uvBottomRightY = i1041[12]
  i1040.uvTopLeftX = i1041[13]
  i1040.uvTopLeftY = i1041[14]
  i1040.uvTopRightX = i1041[15]
  i1040.uvTopRightY = i1041[16]
  return i1040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1043 = data
  i1042.name = i1043[0]
  var i1045 = i1043[1]
  var i1044 = []
  for(var i = 0; i < i1045.length; i += 1) {
    i1044.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1045[i + 0]) );
  }
  i1042.layers = i1044
  var i1047 = i1043[2]
  var i1046 = []
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1047[i + 0]) );
  }
  i1042.parameters = i1046
  i1042.animationClips = i1043[3]
  i1042.avatarUnsupported = i1043[4]
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1051 = data
  i1050.name = i1051[0]
  i1050.defaultWeight = i1051[1]
  i1050.blendingMode = i1051[2]
  i1050.avatarMask = i1051[3]
  i1050.syncedLayerIndex = i1051[4]
  i1050.syncedLayerAffectsTiming = !!i1051[5]
  i1050.syncedLayers = i1051[6]
  i1050.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1051[7], i1050.stateMachine)
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1053 = data
  i1052.id = i1053[0]
  i1052.name = i1053[1]
  i1052.path = i1053[2]
  var i1055 = i1053[3]
  var i1054 = []
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1055[i + 0]) );
  }
  i1052.states = i1054
  var i1057 = i1053[4]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1057[i + 0]) );
  }
  i1052.machines = i1056
  var i1059 = i1053[5]
  var i1058 = []
  for(var i = 0; i < i1059.length; i += 1) {
    i1058.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1059[i + 0]) );
  }
  i1052.entryStateTransitions = i1058
  var i1061 = i1053[6]
  var i1060 = []
  for(var i = 0; i < i1061.length; i += 1) {
    i1060.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1061[i + 0]) );
  }
  i1052.exitStateTransitions = i1060
  var i1063 = i1053[7]
  var i1062 = []
  for(var i = 0; i < i1063.length; i += 1) {
    i1062.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1063[i + 0]) );
  }
  i1052.anyStateTransitions = i1062
  i1052.defaultStateId = i1053[8]
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1067 = data
  i1066.id = i1067[0]
  i1066.name = i1067[1]
  i1066.cycleOffset = i1067[2]
  i1066.cycleOffsetParameter = i1067[3]
  i1066.cycleOffsetParameterActive = !!i1067[4]
  i1066.mirror = !!i1067[5]
  i1066.mirrorParameter = i1067[6]
  i1066.mirrorParameterActive = !!i1067[7]
  i1066.motionId = i1067[8]
  i1066.nameHash = i1067[9]
  i1066.fullPathHash = i1067[10]
  i1066.speed = i1067[11]
  i1066.speedParameter = i1067[12]
  i1066.speedParameterActive = !!i1067[13]
  i1066.tag = i1067[14]
  i1066.tagHash = i1067[15]
  i1066.writeDefaultValues = !!i1067[16]
  var i1069 = i1067[17]
  var i1068 = []
  for(var i = 0; i < i1069.length; i += 2) {
  request.r(i1069[i + 0], i1069[i + 1], 2, i1068, '')
  }
  i1066.behaviours = i1068
  var i1071 = i1067[18]
  var i1070 = []
  for(var i = 0; i < i1071.length; i += 1) {
    i1070.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1071[i + 0]) );
  }
  i1066.transitions = i1070
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1077 = data
  i1076.fullPath = i1077[0]
  i1076.canTransitionToSelf = !!i1077[1]
  i1076.duration = i1077[2]
  i1076.exitTime = i1077[3]
  i1076.hasExitTime = !!i1077[4]
  i1076.hasFixedDuration = !!i1077[5]
  i1076.interruptionSource = i1077[6]
  i1076.offset = i1077[7]
  i1076.orderedInterruption = !!i1077[8]
  i1076.destinationStateId = i1077[9]
  i1076.isExit = !!i1077[10]
  i1076.mute = !!i1077[11]
  i1076.solo = !!i1077[12]
  var i1079 = i1077[13]
  var i1078 = []
  for(var i = 0; i < i1079.length; i += 1) {
    i1078.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1079[i + 0]) );
  }
  i1076.conditions = i1078
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1083 = data
  i1082.mode = i1083[0]
  i1082.parameter = i1083[1]
  i1082.threshold = i1083[2]
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1089 = data
  i1088.destinationStateId = i1089[0]
  i1088.isExit = !!i1089[1]
  i1088.mute = !!i1089[2]
  i1088.solo = !!i1089[3]
  var i1091 = i1089[4]
  var i1090 = []
  for(var i = 0; i < i1091.length; i += 1) {
    i1090.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1091[i + 0]) );
  }
  i1088.conditions = i1090
  return i1088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1095 = data
  i1094.defaultBool = !!i1095[0]
  i1094.defaultFloat = i1095[1]
  i1094.defaultInt = i1095[2]
  i1094.name = i1095[3]
  i1094.nameHash = i1095[4]
  i1094.type = i1095[5]
  return i1094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController"] = function (request, data, root) {
  var i1096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController' )
  var i1097 = data
  i1096.name = i1097[0]
  request.r(i1097[1], i1097[2], 0, i1096, '_runtimeAnimatorController')
  var i1099 = i1097[3]
  var i1098 = []
  for(var i = 0; i < i1099.length; i += 2) {
  request.r(i1099[i + 0], i1099[i + 1], 2, i1098, '')
  }
  i1096._originalAnimationClips = i1098
  var i1101 = i1097[4]
  var i1100 = []
  for(var i = 0; i < i1101.length; i += 2) {
  request.r(i1101[i + 0], i1101[i + 1], 2, i1100, '')
  }
  i1096._overrideAnimationClips = i1100
  var i1103 = i1097[5]
  var i1102 = []
  for(var i = 0; i < i1103.length; i += 2) {
  request.r(i1103[i + 0], i1103[i + 1], 2, i1102, '')
  }
  i1096._animationClips = i1102
  var i1105 = i1097[6]
  var i1104 = []
  for(var i = 0; i < i1105.length; i += 1) {
    i1104.push( request.d('UnityEngine.AnimationClipPair', i1105[i + 0]) );
  }
  i1096._animationClipPairs = i1104
  return i1096
}

Deserializers["UnityEngine.AnimationClipPair"] = function (request, data, root) {
  var i1110 = root || request.c( 'UnityEngine.AnimationClipPair' )
  var i1111 = data
  request.r(i1111[0], i1111[1], 0, i1110, 'originalClip')
  request.r(i1111[2], i1111[3], 0, i1110, 'overrideClip')
  return i1110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1113 = data
  i1112.name = i1113[0]
  i1112.bytes64 = i1113[1]
  i1112.data = i1113[2]
  return i1112
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1114 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1115 = data
  request.r(i1115[0], i1115[1], 0, i1114, 'atlas')
  i1114.normalStyle = i1115[2]
  i1114.normalSpacingOffset = i1115[3]
  i1114.boldStyle = i1115[4]
  i1114.boldSpacing = i1115[5]
  i1114.italicStyle = i1115[6]
  i1114.tabSize = i1115[7]
  i1114.hashCode = i1115[8]
  request.r(i1115[9], i1115[10], 0, i1114, 'material')
  i1114.materialHashCode = i1115[11]
  i1114.m_Version = i1115[12]
  i1114.m_SourceFontFileGUID = i1115[13]
  request.r(i1115[14], i1115[15], 0, i1114, 'm_SourceFontFile_EditorRef')
  request.r(i1115[16], i1115[17], 0, i1114, 'm_SourceFontFile')
  i1114.m_AtlasPopulationMode = i1115[18]
  i1114.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1115[19], i1114.m_FaceInfo)
  var i1117 = i1115[20]
  var i1116 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1117.length; i += 1) {
    i1116.add(request.d('UnityEngine.TextCore.Glyph', i1117[i + 0]));
  }
  i1114.m_GlyphTable = i1116
  var i1119 = i1115[21]
  var i1118 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1119.length; i += 1) {
    i1118.add(request.d('TMPro.TMP_Character', i1119[i + 0]));
  }
  i1114.m_CharacterTable = i1118
  var i1121 = i1115[22]
  var i1120 = []
  for(var i = 0; i < i1121.length; i += 2) {
  request.r(i1121[i + 0], i1121[i + 1], 2, i1120, '')
  }
  i1114.m_AtlasTextures = i1120
  i1114.m_AtlasTextureIndex = i1115[23]
  i1114.m_IsMultiAtlasTexturesEnabled = !!i1115[24]
  i1114.m_ClearDynamicDataOnBuild = !!i1115[25]
  var i1123 = i1115[26]
  var i1122 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1123.length; i += 1) {
    i1122.add(request.d('UnityEngine.TextCore.GlyphRect', i1123[i + 0]));
  }
  i1114.m_UsedGlyphRects = i1122
  var i1125 = i1115[27]
  var i1124 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1125.length; i += 1) {
    i1124.add(request.d('UnityEngine.TextCore.GlyphRect', i1125[i + 0]));
  }
  i1114.m_FreeGlyphRects = i1124
  i1114.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1115[28], i1114.m_fontInfo)
  i1114.m_AtlasWidth = i1115[29]
  i1114.m_AtlasHeight = i1115[30]
  i1114.m_AtlasPadding = i1115[31]
  i1114.m_AtlasRenderMode = i1115[32]
  var i1127 = i1115[33]
  var i1126 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1127.length; i += 1) {
    i1126.add(request.d('TMPro.TMP_Glyph', i1127[i + 0]));
  }
  i1114.m_glyphInfoList = i1126
  i1114.m_KerningTable = request.d('TMPro.KerningTable', i1115[34], i1114.m_KerningTable)
  i1114.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1115[35], i1114.m_FontFeatureTable)
  var i1129 = i1115[36]
  var i1128 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1129.length; i += 2) {
  request.r(i1129[i + 0], i1129[i + 1], 1, i1128, '')
  }
  i1114.fallbackFontAssets = i1128
  var i1131 = i1115[37]
  var i1130 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1131.length; i += 2) {
  request.r(i1131[i + 0], i1131[i + 1], 1, i1130, '')
  }
  i1114.m_FallbackFontAssetTable = i1130
  i1114.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1115[38], i1114.m_CreationSettings)
  var i1133 = i1115[39]
  var i1132 = []
  for(var i = 0; i < i1133.length; i += 1) {
    i1132.push( request.d('TMPro.TMP_FontWeightPair', i1133[i + 0]) );
  }
  i1114.m_FontWeightTable = i1132
  var i1135 = i1115[40]
  var i1134 = []
  for(var i = 0; i < i1135.length; i += 1) {
    i1134.push( request.d('TMPro.TMP_FontWeightPair', i1135[i + 0]) );
  }
  i1114.fontWeights = i1134
  return i1114
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1136 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1137 = data
  i1136.m_FaceIndex = i1137[0]
  i1136.m_FamilyName = i1137[1]
  i1136.m_StyleName = i1137[2]
  i1136.m_PointSize = i1137[3]
  i1136.m_Scale = i1137[4]
  i1136.m_UnitsPerEM = i1137[5]
  i1136.m_LineHeight = i1137[6]
  i1136.m_AscentLine = i1137[7]
  i1136.m_CapLine = i1137[8]
  i1136.m_MeanLine = i1137[9]
  i1136.m_Baseline = i1137[10]
  i1136.m_DescentLine = i1137[11]
  i1136.m_SuperscriptOffset = i1137[12]
  i1136.m_SuperscriptSize = i1137[13]
  i1136.m_SubscriptOffset = i1137[14]
  i1136.m_SubscriptSize = i1137[15]
  i1136.m_UnderlineOffset = i1137[16]
  i1136.m_UnderlineThickness = i1137[17]
  i1136.m_StrikethroughOffset = i1137[18]
  i1136.m_StrikethroughThickness = i1137[19]
  i1136.m_TabWidth = i1137[20]
  return i1136
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1140 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1141 = data
  i1140.m_Index = i1141[0]
  i1140.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1141[1], i1140.m_Metrics)
  i1140.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1141[2], i1140.m_GlyphRect)
  i1140.m_Scale = i1141[3]
  i1140.m_AtlasIndex = i1141[4]
  i1140.m_ClassDefinitionType = i1141[5]
  return i1140
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1142 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1143 = data
  i1142.m_Width = i1143[0]
  i1142.m_Height = i1143[1]
  i1142.m_HorizontalBearingX = i1143[2]
  i1142.m_HorizontalBearingY = i1143[3]
  i1142.m_HorizontalAdvance = i1143[4]
  return i1142
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1144 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1145 = data
  i1144.m_X = i1145[0]
  i1144.m_Y = i1145[1]
  i1144.m_Width = i1145[2]
  i1144.m_Height = i1145[3]
  return i1144
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1148 = root || request.c( 'TMPro.TMP_Character' )
  var i1149 = data
  i1148.m_ElementType = i1149[0]
  i1148.m_Unicode = i1149[1]
  i1148.m_GlyphIndex = i1149[2]
  i1148.m_Scale = i1149[3]
  return i1148
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1154 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1155 = data
  i1154.Name = i1155[0]
  i1154.PointSize = i1155[1]
  i1154.Scale = i1155[2]
  i1154.CharacterCount = i1155[3]
  i1154.LineHeight = i1155[4]
  i1154.Baseline = i1155[5]
  i1154.Ascender = i1155[6]
  i1154.CapHeight = i1155[7]
  i1154.Descender = i1155[8]
  i1154.CenterLine = i1155[9]
  i1154.SuperscriptOffset = i1155[10]
  i1154.SubscriptOffset = i1155[11]
  i1154.SubSize = i1155[12]
  i1154.Underline = i1155[13]
  i1154.UnderlineThickness = i1155[14]
  i1154.strikethrough = i1155[15]
  i1154.strikethroughThickness = i1155[16]
  i1154.TabWidth = i1155[17]
  i1154.Padding = i1155[18]
  i1154.AtlasWidth = i1155[19]
  i1154.AtlasHeight = i1155[20]
  return i1154
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1158 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1159 = data
  i1158.id = i1159[0]
  i1158.x = i1159[1]
  i1158.y = i1159[2]
  i1158.width = i1159[3]
  i1158.height = i1159[4]
  i1158.xOffset = i1159[5]
  i1158.yOffset = i1159[6]
  i1158.xAdvance = i1159[7]
  i1158.scale = i1159[8]
  return i1158
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1160 = root || request.c( 'TMPro.KerningTable' )
  var i1161 = data
  var i1163 = i1161[0]
  var i1162 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1163.length; i += 1) {
    i1162.add(request.d('TMPro.KerningPair', i1163[i + 0]));
  }
  i1160.kerningPairs = i1162
  return i1160
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1166 = root || request.c( 'TMPro.KerningPair' )
  var i1167 = data
  i1166.xOffset = i1167[0]
  i1166.m_FirstGlyph = i1167[1]
  i1166.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1167[2], i1166.m_FirstGlyphAdjustments)
  i1166.m_SecondGlyph = i1167[3]
  i1166.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1167[4], i1166.m_SecondGlyphAdjustments)
  i1166.m_IgnoreSpacingAdjustments = !!i1167[5]
  return i1166
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1168 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1169 = data
  var i1171 = i1169[0]
  var i1170 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1171.length; i += 1) {
    i1170.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1171[i + 0]));
  }
  i1168.m_GlyphPairAdjustmentRecords = i1170
  return i1168
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1174 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1175 = data
  i1174.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1175[0], i1174.m_FirstAdjustmentRecord)
  i1174.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1175[1], i1174.m_SecondAdjustmentRecord)
  i1174.m_FeatureLookupFlags = i1175[2]
  return i1174
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1178 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1179 = data
  i1178.sourceFontFileName = i1179[0]
  i1178.sourceFontFileGUID = i1179[1]
  i1178.pointSizeSamplingMode = i1179[2]
  i1178.pointSize = i1179[3]
  i1178.padding = i1179[4]
  i1178.packingMode = i1179[5]
  i1178.atlasWidth = i1179[6]
  i1178.atlasHeight = i1179[7]
  i1178.characterSetSelectionMode = i1179[8]
  i1178.characterSequence = i1179[9]
  i1178.referencedFontAssetGUID = i1179[10]
  i1178.referencedTextAssetGUID = i1179[11]
  i1178.fontStyle = i1179[12]
  i1178.fontStyleModifier = i1179[13]
  i1178.renderMode = i1179[14]
  i1178.includeFontFeatures = !!i1179[15]
  return i1178
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1182 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1183 = data
  request.r(i1183[0], i1183[1], 0, i1182, 'regularTypeface')
  request.r(i1183[2], i1183[3], 0, i1182, 'italicTypeface')
  return i1182
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1184 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1185 = data
  i1184.useSafeMode = !!i1185[0]
  i1184.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1185[1], i1184.safeModeOptions)
  i1184.timeScale = i1185[2]
  i1184.unscaledTimeScale = i1185[3]
  i1184.useSmoothDeltaTime = !!i1185[4]
  i1184.maxSmoothUnscaledTime = i1185[5]
  i1184.rewindCallbackMode = i1185[6]
  i1184.showUnityEditorReport = !!i1185[7]
  i1184.logBehaviour = i1185[8]
  i1184.drawGizmos = !!i1185[9]
  i1184.defaultRecyclable = !!i1185[10]
  i1184.defaultAutoPlay = i1185[11]
  i1184.defaultUpdateType = i1185[12]
  i1184.defaultTimeScaleIndependent = !!i1185[13]
  i1184.defaultEaseType = i1185[14]
  i1184.defaultEaseOvershootOrAmplitude = i1185[15]
  i1184.defaultEasePeriod = i1185[16]
  i1184.defaultAutoKill = !!i1185[17]
  i1184.defaultLoopType = i1185[18]
  i1184.debugMode = !!i1185[19]
  i1184.debugStoreTargetId = !!i1185[20]
  i1184.showPreviewPanel = !!i1185[21]
  i1184.storeSettingsLocation = i1185[22]
  i1184.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1185[23], i1184.modules)
  i1184.createASMDEF = !!i1185[24]
  i1184.showPlayingTweens = !!i1185[25]
  i1184.showPausedTweens = !!i1185[26]
  return i1184
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1186 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1187 = data
  i1186.logBehaviour = i1187[0]
  i1186.nestedTweenFailureBehaviour = i1187[1]
  return i1186
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1188 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1189 = data
  i1188.showPanel = !!i1189[0]
  i1188.audioEnabled = !!i1189[1]
  i1188.physicsEnabled = !!i1189[2]
  i1188.physics2DEnabled = !!i1189[3]
  i1188.spriteEnabled = !!i1189[4]
  i1188.uiEnabled = !!i1189[5]
  i1188.textMeshProEnabled = !!i1189[6]
  i1188.tk2DEnabled = !!i1189[7]
  i1188.deAudioEnabled = !!i1189[8]
  i1188.deUnityExtendedEnabled = !!i1189[9]
  i1188.epoOutlineEnabled = !!i1189[10]
  return i1188
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1190 = root || request.c( 'TMPro.TMP_Settings' )
  var i1191 = data
  i1190.m_enableWordWrapping = !!i1191[0]
  i1190.m_enableKerning = !!i1191[1]
  i1190.m_enableExtraPadding = !!i1191[2]
  i1190.m_enableTintAllSprites = !!i1191[3]
  i1190.m_enableParseEscapeCharacters = !!i1191[4]
  i1190.m_EnableRaycastTarget = !!i1191[5]
  i1190.m_GetFontFeaturesAtRuntime = !!i1191[6]
  i1190.m_missingGlyphCharacter = i1191[7]
  i1190.m_warningsDisabled = !!i1191[8]
  request.r(i1191[9], i1191[10], 0, i1190, 'm_defaultFontAsset')
  i1190.m_defaultFontAssetPath = i1191[11]
  i1190.m_defaultFontSize = i1191[12]
  i1190.m_defaultAutoSizeMinRatio = i1191[13]
  i1190.m_defaultAutoSizeMaxRatio = i1191[14]
  i1190.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1191[15], i1191[16] )
  i1190.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1191[17], i1191[18] )
  i1190.m_autoSizeTextContainer = !!i1191[19]
  i1190.m_IsTextObjectScaleStatic = !!i1191[20]
  var i1193 = i1191[21]
  var i1192 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1193.length; i += 2) {
  request.r(i1193[i + 0], i1193[i + 1], 1, i1192, '')
  }
  i1190.m_fallbackFontAssets = i1192
  i1190.m_matchMaterialPreset = !!i1191[22]
  request.r(i1191[23], i1191[24], 0, i1190, 'm_defaultSpriteAsset')
  i1190.m_defaultSpriteAssetPath = i1191[25]
  i1190.m_enableEmojiSupport = !!i1191[26]
  i1190.m_MissingCharacterSpriteUnicode = i1191[27]
  i1190.m_defaultColorGradientPresetsPath = i1191[28]
  request.r(i1191[29], i1191[30], 0, i1190, 'm_defaultStyleSheet')
  i1190.m_StyleSheetsResourcePath = i1191[31]
  request.r(i1191[32], i1191[33], 0, i1190, 'm_leadingCharacters')
  request.r(i1191[34], i1191[35], 0, i1190, 'm_followingCharacters')
  i1190.m_UseModernHangulLineBreakingRules = !!i1191[36]
  return i1190
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1194 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1195 = data
  i1194.m_GlyphIndex = i1195[0]
  i1194.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1195[1], i1194.m_GlyphValueRecord)
  return i1194
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1196 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1197 = data
  i1196.m_XPlacement = i1197[0]
  i1196.m_YPlacement = i1197[1]
  i1196.m_XAdvance = i1197[2]
  i1196.m_YAdvance = i1197[3]
  return i1196
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1198 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1199 = data
  request.r(i1199[0], i1199[1], 0, i1198, 'spriteSheet')
  var i1201 = i1199[2]
  var i1200 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1201.length; i += 1) {
    i1200.add(request.d('TMPro.TMP_Sprite', i1201[i + 0]));
  }
  i1198.spriteInfoList = i1200
  var i1203 = i1199[3]
  var i1202 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1203.length; i += 2) {
  request.r(i1203[i + 0], i1203[i + 1], 1, i1202, '')
  }
  i1198.fallbackSpriteAssets = i1202
  i1198.hashCode = i1199[4]
  request.r(i1199[5], i1199[6], 0, i1198, 'material')
  i1198.materialHashCode = i1199[7]
  i1198.m_Version = i1199[8]
  i1198.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1199[9], i1198.m_FaceInfo)
  var i1205 = i1199[10]
  var i1204 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1205.length; i += 1) {
    i1204.add(request.d('TMPro.TMP_SpriteCharacter', i1205[i + 0]));
  }
  i1198.m_SpriteCharacterTable = i1204
  var i1207 = i1199[11]
  var i1206 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1207.length; i += 1) {
    i1206.add(request.d('TMPro.TMP_SpriteGlyph', i1207[i + 0]));
  }
  i1198.m_SpriteGlyphTable = i1206
  return i1198
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1210 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1211 = data
  i1210.name = i1211[0]
  i1210.hashCode = i1211[1]
  i1210.unicode = i1211[2]
  i1210.pivot = new pc.Vec2( i1211[3], i1211[4] )
  request.r(i1211[5], i1211[6], 0, i1210, 'sprite')
  i1210.id = i1211[7]
  i1210.x = i1211[8]
  i1210.y = i1211[9]
  i1210.width = i1211[10]
  i1210.height = i1211[11]
  i1210.xOffset = i1211[12]
  i1210.yOffset = i1211[13]
  i1210.xAdvance = i1211[14]
  i1210.scale = i1211[15]
  return i1210
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1216 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1217 = data
  i1216.m_Name = i1217[0]
  i1216.m_HashCode = i1217[1]
  i1216.m_ElementType = i1217[2]
  i1216.m_Unicode = i1217[3]
  i1216.m_GlyphIndex = i1217[4]
  i1216.m_Scale = i1217[5]
  return i1216
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1220 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1221 = data
  request.r(i1221[0], i1221[1], 0, i1220, 'sprite')
  i1220.m_Index = i1221[2]
  i1220.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1221[3], i1220.m_Metrics)
  i1220.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1221[4], i1220.m_GlyphRect)
  i1220.m_Scale = i1221[5]
  i1220.m_AtlasIndex = i1221[6]
  i1220.m_ClassDefinitionType = i1221[7]
  return i1220
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1222 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1223 = data
  var i1225 = i1223[0]
  var i1224 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1225.length; i += 1) {
    i1224.add(request.d('TMPro.TMP_Style', i1225[i + 0]));
  }
  i1222.m_StyleList = i1224
  return i1222
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1228 = root || request.c( 'TMPro.TMP_Style' )
  var i1229 = data
  i1228.m_Name = i1229[0]
  i1228.m_HashCode = i1229[1]
  i1228.m_OpeningDefinition = i1229[2]
  i1228.m_ClosingDefinition = i1229[3]
  i1228.m_OpeningTagArray = i1229[4]
  i1228.m_ClosingTagArray = i1229[5]
  i1228.m_OpeningTagUnicodeArray = i1229[6]
  i1228.m_ClosingTagUnicodeArray = i1229[7]
  return i1228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1231 = data
  var i1233 = i1231[0]
  var i1232 = []
  for(var i = 0; i < i1233.length; i += 1) {
    i1232.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1233[i + 0]) );
  }
  i1230.files = i1232
  i1230.componentToPrefabIds = i1231[1]
  return i1230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1237 = data
  i1236.path = i1237[0]
  request.r(i1237[1], i1237[2], 0, i1236, 'unityObject')
  return i1236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1239 = data
  var i1241 = i1239[0]
  var i1240 = []
  for(var i = 0; i < i1241.length; i += 1) {
    i1240.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1241[i + 0]) );
  }
  i1238.scriptsExecutionOrder = i1240
  var i1243 = i1239[1]
  var i1242 = []
  for(var i = 0; i < i1243.length; i += 1) {
    i1242.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1243[i + 0]) );
  }
  i1238.sortingLayers = i1242
  var i1245 = i1239[2]
  var i1244 = []
  for(var i = 0; i < i1245.length; i += 1) {
    i1244.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1245[i + 0]) );
  }
  i1238.cullingLayers = i1244
  i1238.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1239[3], i1238.timeSettings)
  i1238.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1239[4], i1238.physicsSettings)
  i1238.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1239[5], i1238.physics2DSettings)
  i1238.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1239[6], i1238.qualitySettings)
  i1238.enableRealtimeShadows = !!i1239[7]
  i1238.enableAutoInstancing = !!i1239[8]
  i1238.enableStaticBatching = !!i1239[9]
  i1238.enableDynamicBatching = !!i1239[10]
  i1238.lightmapEncodingQuality = i1239[11]
  i1238.desiredColorSpace = i1239[12]
  var i1247 = i1239[13]
  var i1246 = []
  for(var i = 0; i < i1247.length; i += 1) {
    i1246.push( i1247[i + 0] );
  }
  i1238.allTags = i1246
  return i1238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1251 = data
  i1250.name = i1251[0]
  i1250.value = i1251[1]
  return i1250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1255 = data
  i1254.id = i1255[0]
  i1254.name = i1255[1]
  i1254.value = i1255[2]
  return i1254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1259 = data
  i1258.id = i1259[0]
  i1258.name = i1259[1]
  return i1258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1261 = data
  i1260.fixedDeltaTime = i1261[0]
  i1260.maximumDeltaTime = i1261[1]
  i1260.timeScale = i1261[2]
  i1260.maximumParticleTimestep = i1261[3]
  return i1260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1263 = data
  i1262.gravity = new pc.Vec3( i1263[0], i1263[1], i1263[2] )
  i1262.defaultSolverIterations = i1263[3]
  i1262.bounceThreshold = i1263[4]
  i1262.autoSyncTransforms = !!i1263[5]
  i1262.autoSimulation = !!i1263[6]
  var i1265 = i1263[7]
  var i1264 = []
  for(var i = 0; i < i1265.length; i += 1) {
    i1264.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1265[i + 0]) );
  }
  i1262.collisionMatrix = i1264
  return i1262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1269 = data
  i1268.enabled = !!i1269[0]
  i1268.layerId = i1269[1]
  i1268.otherLayerId = i1269[2]
  return i1268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1271 = data
  request.r(i1271[0], i1271[1], 0, i1270, 'material')
  i1270.gravity = new pc.Vec2( i1271[2], i1271[3] )
  i1270.positionIterations = i1271[4]
  i1270.velocityIterations = i1271[5]
  i1270.velocityThreshold = i1271[6]
  i1270.maxLinearCorrection = i1271[7]
  i1270.maxAngularCorrection = i1271[8]
  i1270.maxTranslationSpeed = i1271[9]
  i1270.maxRotationSpeed = i1271[10]
  i1270.baumgarteScale = i1271[11]
  i1270.baumgarteTOIScale = i1271[12]
  i1270.timeToSleep = i1271[13]
  i1270.linearSleepTolerance = i1271[14]
  i1270.angularSleepTolerance = i1271[15]
  i1270.defaultContactOffset = i1271[16]
  i1270.autoSimulation = !!i1271[17]
  i1270.queriesHitTriggers = !!i1271[18]
  i1270.queriesStartInColliders = !!i1271[19]
  i1270.callbacksOnDisable = !!i1271[20]
  i1270.reuseCollisionCallbacks = !!i1271[21]
  i1270.autoSyncTransforms = !!i1271[22]
  var i1273 = i1271[23]
  var i1272 = []
  for(var i = 0; i < i1273.length; i += 1) {
    i1272.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1273[i + 0]) );
  }
  i1270.collisionMatrix = i1272
  return i1270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1277 = data
  i1276.enabled = !!i1277[0]
  i1276.layerId = i1277[1]
  i1276.otherLayerId = i1277[2]
  return i1276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1279 = data
  var i1281 = i1279[0]
  var i1280 = []
  for(var i = 0; i < i1281.length; i += 1) {
    i1280.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1281[i + 0]) );
  }
  i1278.qualityLevels = i1280
  var i1283 = i1279[1]
  var i1282 = []
  for(var i = 0; i < i1283.length; i += 1) {
    i1282.push( i1283[i + 0] );
  }
  i1278.names = i1282
  i1278.shadows = i1279[2]
  i1278.anisotropicFiltering = i1279[3]
  i1278.antiAliasing = i1279[4]
  i1278.lodBias = i1279[5]
  i1278.shadowCascades = i1279[6]
  i1278.shadowDistance = i1279[7]
  i1278.shadowmaskMode = i1279[8]
  i1278.shadowProjection = i1279[9]
  i1278.shadowResolution = i1279[10]
  i1278.softParticles = !!i1279[11]
  i1278.softVegetation = !!i1279[12]
  i1278.activeColorSpace = i1279[13]
  i1278.desiredColorSpace = i1279[14]
  i1278.masterTextureLimit = i1279[15]
  i1278.maxQueuedFrames = i1279[16]
  i1278.particleRaycastBudget = i1279[17]
  i1278.pixelLightCount = i1279[18]
  i1278.realtimeReflectionProbes = !!i1279[19]
  i1278.shadowCascade2Split = i1279[20]
  i1278.shadowCascade4Split = new pc.Vec3( i1279[21], i1279[22], i1279[23] )
  i1278.streamingMipmapsActive = !!i1279[24]
  i1278.vSyncCount = i1279[25]
  i1278.asyncUploadBufferSize = i1279[26]
  i1278.asyncUploadTimeSlice = i1279[27]
  i1278.billboardsFaceCameraPosition = !!i1279[28]
  i1278.shadowNearPlaneOffset = i1279[29]
  i1278.streamingMipmapsMemoryBudget = i1279[30]
  i1278.maximumLODLevel = i1279[31]
  i1278.streamingMipmapsAddAllCameras = !!i1279[32]
  i1278.streamingMipmapsMaxLevelReduction = i1279[33]
  i1278.streamingMipmapsRenderersPerFrame = i1279[34]
  i1278.resolutionScalingFixedDPIFactor = i1279[35]
  i1278.streamingMipmapsMaxFileIORequests = i1279[36]
  i1278.currentQualityLevel = i1279[37]
  return i1278
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1286 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1287 = data
  i1286.xPlacement = i1287[0]
  i1286.yPlacement = i1287[1]
  i1286.xAdvance = i1287[2]
  i1286.yAdvance = i1287[3]
  return i1286
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController":{"name":0,"_runtimeAnimatorController":1,"_originalAnimationClips":3,"_overrideAnimationClips":4,"_animationClips":5,"_animationClipPairs":6},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"62":[63],"64":[63],"65":[63],"66":[63],"67":[63],"68":[63],"69":[70],"71":[43],"72":[73],"74":[73],"75":[73],"76":[73],"77":[73],"78":[73],"79":[73],"80":[81],"82":[81],"83":[81],"84":[81],"85":[81],"86":[81],"87":[81],"88":[81],"89":[81],"90":[81],"91":[81],"92":[81],"93":[81],"94":[43],"95":[96],"97":[98],"99":[98],"15":[0],"100":[101],"102":[103],"104":[101],"105":[0],"106":[0],"17":[15],"8":[3,0],"5":[0],"16":[15],"107":[0],"108":[0],"39":[0],"109":[0],"110":[0],"111":[0],"46":[0],"7":[0],"112":[0],"6":[3,0],"113":[0],"114":[0],"115":[0],"29":[0],"10":[3,0],"116":[0],"117":[50],"118":[50],"51":[50],"119":[50],"120":[43],"121":[43],"122":[50],"123":[15],"124":[125],"126":[43],"127":[0],"128":[96,0],"37":[0,3],"129":[0],"130":[3,0],"131":[96],"132":[3,0],"133":[0],"134":[101]}

Deserializers.types = ["UnityEngine.RectTransform","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.RawImage","UnityEngine.UI.Mask","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.UI.Button","UnityEngine.CanvasGroup","UnityEngine.Texture2D","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.Object","UnityEngine.Shader","UnityEngine.MonoBehaviour","Scripts.Popup","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.UI.Outline","UnityEngine.UI.Slider","Scripts.SpriteSwapper","Scripts.MusicManager","Scripts.AnimatedButton","Scripts.SoundManager","UnityEngine.AnimatorOverrideController","Scripts.SceneTransition","LevelTaskBox","TMPro.TextMeshProUGUI","UnityEngine.GameObject","UnityEngine.UI.HorizontalLayoutGroup","TMPro.TMP_FontAsset","PlayableSettings","EndCardController","UnityEngine.Camera","UnityEngine.AudioListener","Scripts.PopupOpener","UnityEngine.UI.VerticalLayoutGroup","Match3.Board","Match3.Tile","Match3.Core.LevelManager","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Scripts.BackgroundMusic","Settings.SettingsProvider","Match3.TileTypeDatas","InteractiveEndCardBuilder.Scripts.ExampleEndCardCallScript","UnityEngine.AnimationClip","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "Match3";

Deserializers.lunaInitializationTime = "";

Deserializers.lunaDaysRunning = "0.8";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "New";

Deserializers.lunaAppID = "0";

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

Deserializers.buildID = "1c8402e2-b91b-4c71-8af6-7867a517f762";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["TargetFrameRateSetter","Initialize"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

