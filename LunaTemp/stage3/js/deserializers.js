var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1938 = root || request.c( 'UnityEngine.JointSpring' )
  var i1939 = data
  i1938.spring = i1939[0]
  i1938.damper = i1939[1]
  i1938.targetPosition = i1939[2]
  return i1938
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1940 = root || request.c( 'UnityEngine.JointMotor' )
  var i1941 = data
  i1940.m_TargetVelocity = i1941[0]
  i1940.m_Force = i1941[1]
  i1940.m_FreeSpin = i1941[2]
  return i1940
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1942 = root || request.c( 'UnityEngine.JointLimits' )
  var i1943 = data
  i1942.m_Min = i1943[0]
  i1942.m_Max = i1943[1]
  i1942.m_Bounciness = i1943[2]
  i1942.m_BounceMinVelocity = i1943[3]
  i1942.m_ContactDistance = i1943[4]
  i1942.minBounce = i1943[5]
  i1942.maxBounce = i1943[6]
  return i1942
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1944 = root || request.c( 'UnityEngine.JointDrive' )
  var i1945 = data
  i1944.m_PositionSpring = i1945[0]
  i1944.m_PositionDamper = i1945[1]
  i1944.m_MaximumForce = i1945[2]
  i1944.m_UseAcceleration = i1945[3]
  return i1944
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1946 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1947 = data
  i1946.m_Spring = i1947[0]
  i1946.m_Damper = i1947[1]
  return i1946
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1948 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1949 = data
  i1948.m_Limit = i1949[0]
  i1948.m_Bounciness = i1949[1]
  i1948.m_ContactDistance = i1949[2]
  return i1948
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1950 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1951 = data
  i1950.m_ExtremumSlip = i1951[0]
  i1950.m_ExtremumValue = i1951[1]
  i1950.m_AsymptoteSlip = i1951[2]
  i1950.m_AsymptoteValue = i1951[3]
  i1950.m_Stiffness = i1951[4]
  return i1950
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1952 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1953 = data
  i1952.m_LowerAngle = i1953[0]
  i1952.m_UpperAngle = i1953[1]
  return i1952
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1954 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1955 = data
  i1954.m_MotorSpeed = i1955[0]
  i1954.m_MaximumMotorTorque = i1955[1]
  return i1954
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1956 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1957 = data
  i1956.m_DampingRatio = i1957[0]
  i1956.m_Frequency = i1957[1]
  i1956.m_Angle = i1957[2]
  return i1956
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1958 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1959 = data
  i1958.m_LowerTranslation = i1959[0]
  i1958.m_UpperTranslation = i1959[1]
  return i1958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1961 = data
  i1960.pivot = new pc.Vec2( i1961[0], i1961[1] )
  i1960.anchorMin = new pc.Vec2( i1961[2], i1961[3] )
  i1960.anchorMax = new pc.Vec2( i1961[4], i1961[5] )
  i1960.sizeDelta = new pc.Vec2( i1961[6], i1961[7] )
  i1960.anchoredPosition3D = new pc.Vec3( i1961[8], i1961[9], i1961[10] )
  i1960.rotation = new pc.Quat(i1961[11], i1961[12], i1961[13], i1961[14])
  i1960.scale = new pc.Vec3( i1961[15], i1961[16], i1961[17] )
  return i1960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1963 = data
  request.r(i1963[0], i1963[1], 0, i1962, 'animatorController')
  request.r(i1963[2], i1963[3], 0, i1962, 'avatar')
  i1962.updateMode = i1963[4]
  i1962.hasTransformHierarchy = !!i1963[5]
  i1962.applyRootMotion = !!i1963[6]
  var i1965 = i1963[7]
  var i1964 = []
  for(var i = 0; i < i1965.length; i += 2) {
  request.r(i1965[i + 0], i1965[i + 1], 2, i1964, '')
  }
  i1962.humanBones = i1964
  i1962.enabled = !!i1963[8]
  return i1962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1969 = data
  i1968.cullTransparentMesh = !!i1969[0]
  return i1968
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i1970 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i1971 = data
  i1970.m_AspectMode = i1971[0]
  i1970.m_AspectRatio = i1971[1]
  return i1970
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1972 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1973 = data
  request.r(i1973[0], i1973[1], 0, i1972, 'm_Texture')
  i1972.m_UVRect = UnityEngine.Rect.MinMaxRect(i1973[2], i1973[3], i1973[4], i1973[5])
  i1972.m_Maskable = !!i1973[6]
  request.r(i1973[7], i1973[8], 0, i1972, 'm_Material')
  i1972.m_Color = new pc.Color(i1973[9], i1973[10], i1973[11], i1973[12])
  i1972.m_RaycastTarget = !!i1973[13]
  i1972.m_RaycastPadding = new pc.Vec4( i1973[14], i1973[15], i1973[16], i1973[17] )
  return i1972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1975 = data
  i1974.name = i1975[0]
  i1974.tagId = i1975[1]
  i1974.enabled = !!i1975[2]
  i1974.isStatic = !!i1975[3]
  i1974.layer = i1975[4]
  return i1974
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1976 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1977 = data
  i1976.m_ShowMaskGraphic = !!i1977[0]
  return i1976
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1978 = root || request.c( 'UnityEngine.UI.Image' )
  var i1979 = data
  request.r(i1979[0], i1979[1], 0, i1978, 'm_Sprite')
  i1978.m_Type = i1979[2]
  i1978.m_PreserveAspect = !!i1979[3]
  i1978.m_FillCenter = !!i1979[4]
  i1978.m_FillMethod = i1979[5]
  i1978.m_FillAmount = i1979[6]
  i1978.m_FillClockwise = !!i1979[7]
  i1978.m_FillOrigin = i1979[8]
  i1978.m_UseSpriteMesh = !!i1979[9]
  i1978.m_PixelsPerUnitMultiplier = i1979[10]
  i1978.m_Maskable = !!i1979[11]
  request.r(i1979[12], i1979[13], 0, i1978, 'm_Material')
  i1978.m_Color = new pc.Color(i1979[14], i1979[15], i1979[16], i1979[17])
  i1978.m_RaycastTarget = !!i1979[18]
  i1978.m_RaycastPadding = new pc.Vec4( i1979[19], i1979[20], i1979[21], i1979[22] )
  return i1978
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1980 = root || request.c( 'UnityEngine.UI.Text' )
  var i1981 = data
  i1980.m_FontData = request.d('UnityEngine.UI.FontData', i1981[0], i1980.m_FontData)
  i1980.m_Text = i1981[1]
  i1980.m_Maskable = !!i1981[2]
  request.r(i1981[3], i1981[4], 0, i1980, 'm_Material')
  i1980.m_Color = new pc.Color(i1981[5], i1981[6], i1981[7], i1981[8])
  i1980.m_RaycastTarget = !!i1981[9]
  i1980.m_RaycastPadding = new pc.Vec4( i1981[10], i1981[11], i1981[12], i1981[13] )
  return i1980
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1982 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1983 = data
  request.r(i1983[0], i1983[1], 0, i1982, 'm_Font')
  i1982.m_FontSize = i1983[2]
  i1982.m_FontStyle = i1983[3]
  i1982.m_BestFit = !!i1983[4]
  i1982.m_MinSize = i1983[5]
  i1982.m_MaxSize = i1983[6]
  i1982.m_Alignment = i1983[7]
  i1982.m_AlignByGeometry = !!i1983[8]
  i1982.m_RichText = !!i1983[9]
  i1982.m_HorizontalOverflow = i1983[10]
  i1982.m_VerticalOverflow = i1983[11]
  i1982.m_LineSpacing = i1983[12]
  return i1982
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1984 = root || request.c( 'UnityEngine.UI.Button' )
  var i1985 = data
  i1984.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1985[0], i1984.m_OnClick)
  i1984.m_Navigation = request.d('UnityEngine.UI.Navigation', i1985[1], i1984.m_Navigation)
  i1984.m_Transition = i1985[2]
  i1984.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1985[3], i1984.m_Colors)
  i1984.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1985[4], i1984.m_SpriteState)
  i1984.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1985[5], i1984.m_AnimationTriggers)
  i1984.m_Interactable = !!i1985[6]
  request.r(i1985[7], i1985[8], 0, i1984, 'm_TargetGraphic')
  return i1984
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1986 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1987 = data
  i1986.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1987[0], i1986.m_PersistentCalls)
  return i1986
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1988 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1989 = data
  var i1991 = i1989[0]
  var i1990 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1991.length; i += 1) {
    i1990.add(request.d('UnityEngine.Events.PersistentCall', i1991[i + 0]));
  }
  i1988.m_Calls = i1990
  return i1988
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1994 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1995 = data
  request.r(i1995[0], i1995[1], 0, i1994, 'm_Target')
  i1994.m_TargetAssemblyTypeName = i1995[2]
  i1994.m_MethodName = i1995[3]
  i1994.m_Mode = i1995[4]
  i1994.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1995[5], i1994.m_Arguments)
  i1994.m_CallState = i1995[6]
  return i1994
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1996 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1997 = data
  request.r(i1997[0], i1997[1], 0, i1996, 'm_ObjectArgument')
  i1996.m_ObjectArgumentAssemblyTypeName = i1997[2]
  i1996.m_IntArgument = i1997[3]
  i1996.m_FloatArgument = i1997[4]
  i1996.m_StringArgument = i1997[5]
  i1996.m_BoolArgument = !!i1997[6]
  return i1996
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1998 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1999 = data
  i1998.m_Mode = i1999[0]
  i1998.m_WrapAround = !!i1999[1]
  request.r(i1999[2], i1999[3], 0, i1998, 'm_SelectOnUp')
  request.r(i1999[4], i1999[5], 0, i1998, 'm_SelectOnDown')
  request.r(i1999[6], i1999[7], 0, i1998, 'm_SelectOnLeft')
  request.r(i1999[8], i1999[9], 0, i1998, 'm_SelectOnRight')
  return i1998
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2000 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2001 = data
  i2000.m_NormalColor = new pc.Color(i2001[0], i2001[1], i2001[2], i2001[3])
  i2000.m_HighlightedColor = new pc.Color(i2001[4], i2001[5], i2001[6], i2001[7])
  i2000.m_PressedColor = new pc.Color(i2001[8], i2001[9], i2001[10], i2001[11])
  i2000.m_SelectedColor = new pc.Color(i2001[12], i2001[13], i2001[14], i2001[15])
  i2000.m_DisabledColor = new pc.Color(i2001[16], i2001[17], i2001[18], i2001[19])
  i2000.m_ColorMultiplier = i2001[20]
  i2000.m_FadeDuration = i2001[21]
  return i2000
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2002 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2003 = data
  request.r(i2003[0], i2003[1], 0, i2002, 'm_HighlightedSprite')
  request.r(i2003[2], i2003[3], 0, i2002, 'm_PressedSprite')
  request.r(i2003[4], i2003[5], 0, i2002, 'm_SelectedSprite')
  request.r(i2003[6], i2003[7], 0, i2002, 'm_DisabledSprite')
  return i2002
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2004 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2005 = data
  i2004.m_NormalTrigger = i2005[0]
  i2004.m_HighlightedTrigger = i2005[1]
  i2004.m_PressedTrigger = i2005[2]
  i2004.m_SelectedTrigger = i2005[3]
  i2004.m_DisabledTrigger = i2005[4]
  return i2004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i2006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i2007 = data
  i2006.m_Alpha = i2007[0]
  i2006.m_Interactable = !!i2007[1]
  i2006.m_BlocksRaycasts = !!i2007[2]
  i2006.m_IgnoreParentGroups = !!i2007[3]
  i2006.enabled = !!i2007[4]
  return i2006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2009 = data
  i2008.name = i2009[0]
  i2008.width = i2009[1]
  i2008.height = i2009[2]
  i2008.mipmapCount = i2009[3]
  i2008.anisoLevel = i2009[4]
  i2008.filterMode = i2009[5]
  i2008.hdr = !!i2009[6]
  i2008.format = i2009[7]
  i2008.wrapMode = i2009[8]
  i2008.alphaIsTransparency = !!i2009[9]
  i2008.alphaSource = i2009[10]
  i2008.graphicsFormat = i2009[11]
  i2008.sRGBTexture = !!i2009[12]
  i2008.desiredColorSpace = i2009[13]
  i2008.wrapU = i2009[14]
  i2008.wrapV = i2009[15]
  return i2008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2011 = data
  i2010.planeDistance = i2011[0]
  i2010.referencePixelsPerUnit = i2011[1]
  i2010.isFallbackOverlay = !!i2011[2]
  i2010.renderMode = i2011[3]
  i2010.renderOrder = i2011[4]
  i2010.sortingLayerName = i2011[5]
  i2010.sortingOrder = i2011[6]
  i2010.scaleFactor = i2011[7]
  request.r(i2011[8], i2011[9], 0, i2010, 'worldCamera')
  i2010.overrideSorting = !!i2011[10]
  i2010.pixelPerfect = !!i2011[11]
  i2010.targetDisplay = i2011[12]
  i2010.overridePixelPerfect = !!i2011[13]
  i2010.enabled = !!i2011[14]
  return i2010
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2012 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2013 = data
  i2012.m_UiScaleMode = i2013[0]
  i2012.m_ReferencePixelsPerUnit = i2013[1]
  i2012.m_ScaleFactor = i2013[2]
  i2012.m_ReferenceResolution = new pc.Vec2( i2013[3], i2013[4] )
  i2012.m_ScreenMatchMode = i2013[5]
  i2012.m_MatchWidthOrHeight = i2013[6]
  i2012.m_PhysicalUnit = i2013[7]
  i2012.m_FallbackScreenDPI = i2013[8]
  i2012.m_DefaultSpriteDPI = i2013[9]
  i2012.m_DynamicPixelsPerUnit = i2013[10]
  i2012.m_PresetInfoIsWorld = !!i2013[11]
  return i2012
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2014 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2015 = data
  i2014.m_IgnoreReversedGraphics = !!i2015[0]
  i2014.m_BlockingObjects = i2015[1]
  i2014.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2015[2] )
  return i2014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2016 = root || new pc.UnityMaterial()
  var i2017 = data
  i2016.name = i2017[0]
  request.r(i2017[1], i2017[2], 0, i2016, 'shader')
  i2016.renderQueue = i2017[3]
  i2016.enableInstancing = !!i2017[4]
  var i2019 = i2017[5]
  var i2018 = []
  for(var i = 0; i < i2019.length; i += 1) {
    i2018.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2019[i + 0]) );
  }
  i2016.floatParameters = i2018
  var i2021 = i2017[6]
  var i2020 = []
  for(var i = 0; i < i2021.length; i += 1) {
    i2020.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2021[i + 0]) );
  }
  i2016.colorParameters = i2020
  var i2023 = i2017[7]
  var i2022 = []
  for(var i = 0; i < i2023.length; i += 1) {
    i2022.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2023[i + 0]) );
  }
  i2016.vectorParameters = i2022
  var i2025 = i2017[8]
  var i2024 = []
  for(var i = 0; i < i2025.length; i += 1) {
    i2024.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2025[i + 0]) );
  }
  i2016.textureParameters = i2024
  var i2027 = i2017[9]
  var i2026 = []
  for(var i = 0; i < i2027.length; i += 1) {
    i2026.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2027[i + 0]) );
  }
  i2016.materialFlags = i2026
  return i2016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2031 = data
  i2030.name = i2031[0]
  i2030.value = i2031[1]
  return i2030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2035 = data
  i2034.name = i2035[0]
  i2034.value = new pc.Color(i2035[1], i2035[2], i2035[3], i2035[4])
  return i2034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2039 = data
  i2038.name = i2039[0]
  i2038.value = new pc.Vec4( i2039[1], i2039[2], i2039[3], i2039[4] )
  return i2038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2043 = data
  i2042.name = i2043[0]
  request.r(i2043[1], i2043[2], 0, i2042, 'value')
  return i2042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2047 = data
  i2046.name = i2047[0]
  i2046.enabled = !!i2047[1]
  return i2046
}

Deserializers["Scripts.Popup"] = function (request, data, root) {
  var i2048 = root || request.c( 'Scripts.Popup' )
  var i2049 = data
  i2048.backgroundColor = new pc.Color(i2049[0], i2049[1], i2049[2], i2049[3])
  return i2048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2051 = data
  i2050.position = new pc.Vec3( i2051[0], i2051[1], i2051[2] )
  i2050.scale = new pc.Vec3( i2051[3], i2051[4], i2051[5] )
  i2050.rotation = new pc.Quat(i2051[6], i2051[7], i2051[8], i2051[9])
  return i2050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2053 = data
  i2052.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2053[0], i2052.main)
  i2052.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2053[1], i2052.colorBySpeed)
  i2052.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2053[2], i2052.colorOverLifetime)
  i2052.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2053[3], i2052.emission)
  i2052.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2053[4], i2052.rotationBySpeed)
  i2052.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2053[5], i2052.rotationOverLifetime)
  i2052.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2053[6], i2052.shape)
  i2052.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2053[7], i2052.sizeBySpeed)
  i2052.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2053[8], i2052.sizeOverLifetime)
  i2052.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2053[9], i2052.textureSheetAnimation)
  i2052.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2053[10], i2052.velocityOverLifetime)
  i2052.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2053[11], i2052.noise)
  i2052.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2053[12], i2052.inheritVelocity)
  i2052.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2053[13], i2052.forceOverLifetime)
  i2052.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2053[14], i2052.limitVelocityOverLifetime)
  i2052.useAutoRandomSeed = !!i2053[15]
  i2052.randomSeed = i2053[16]
  return i2052
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2054 = root || new pc.ParticleSystemMain()
  var i2055 = data
  i2054.duration = i2055[0]
  i2054.loop = !!i2055[1]
  i2054.prewarm = !!i2055[2]
  i2054.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2055[3], i2054.startDelay)
  i2054.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2055[4], i2054.startLifetime)
  i2054.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2055[5], i2054.startSpeed)
  i2054.startSize3D = !!i2055[6]
  i2054.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2055[7], i2054.startSizeX)
  i2054.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2055[8], i2054.startSizeY)
  i2054.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2055[9], i2054.startSizeZ)
  i2054.startRotation3D = !!i2055[10]
  i2054.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2055[11], i2054.startRotationX)
  i2054.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2055[12], i2054.startRotationY)
  i2054.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2055[13], i2054.startRotationZ)
  i2054.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2055[14], i2054.startColor)
  i2054.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2055[15], i2054.gravityModifier)
  i2054.simulationSpace = i2055[16]
  request.r(i2055[17], i2055[18], 0, i2054, 'customSimulationSpace')
  i2054.simulationSpeed = i2055[19]
  i2054.useUnscaledTime = !!i2055[20]
  i2054.scalingMode = i2055[21]
  i2054.playOnAwake = !!i2055[22]
  i2054.maxParticles = i2055[23]
  i2054.emitterVelocityMode = i2055[24]
  i2054.stopAction = i2055[25]
  return i2054
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2056 = root || new pc.MinMaxCurve()
  var i2057 = data
  i2056.mode = i2057[0]
  i2056.curveMin = new pc.AnimationCurve( { keys_flow: i2057[1] } )
  i2056.curveMax = new pc.AnimationCurve( { keys_flow: i2057[2] } )
  i2056.curveMultiplier = i2057[3]
  i2056.constantMin = i2057[4]
  i2056.constantMax = i2057[5]
  return i2056
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2058 = root || new pc.MinMaxGradient()
  var i2059 = data
  i2058.mode = i2059[0]
  i2058.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2059[1], i2058.gradientMin)
  i2058.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2059[2], i2058.gradientMax)
  i2058.colorMin = new pc.Color(i2059[3], i2059[4], i2059[5], i2059[6])
  i2058.colorMax = new pc.Color(i2059[7], i2059[8], i2059[9], i2059[10])
  return i2058
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2061 = data
  i2060.mode = i2061[0]
  var i2063 = i2061[1]
  var i2062 = []
  for(var i = 0; i < i2063.length; i += 1) {
    i2062.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2063[i + 0]) );
  }
  i2060.colorKeys = i2062
  var i2065 = i2061[2]
  var i2064 = []
  for(var i = 0; i < i2065.length; i += 1) {
    i2064.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2065[i + 0]) );
  }
  i2060.alphaKeys = i2064
  return i2060
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2066 = root || new pc.ParticleSystemColorBySpeed()
  var i2067 = data
  i2066.enabled = !!i2067[0]
  i2066.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2067[1], i2066.color)
  i2066.range = new pc.Vec2( i2067[2], i2067[3] )
  return i2066
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2071 = data
  i2070.color = new pc.Color(i2071[0], i2071[1], i2071[2], i2071[3])
  i2070.time = i2071[4]
  return i2070
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2075 = data
  i2074.alpha = i2075[0]
  i2074.time = i2075[1]
  return i2074
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2076 = root || new pc.ParticleSystemColorOverLifetime()
  var i2077 = data
  i2076.enabled = !!i2077[0]
  i2076.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2077[1], i2076.color)
  return i2076
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2078 = root || new pc.ParticleSystemEmitter()
  var i2079 = data
  i2078.enabled = !!i2079[0]
  i2078.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2079[1], i2078.rateOverTime)
  i2078.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2079[2], i2078.rateOverDistance)
  var i2081 = i2079[3]
  var i2080 = []
  for(var i = 0; i < i2081.length; i += 1) {
    i2080.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2081[i + 0]) );
  }
  i2078.bursts = i2080
  return i2078
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2084 = root || new pc.ParticleSystemBurst()
  var i2085 = data
  i2084.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2085[0], i2084.count)
  i2084.cycleCount = i2085[1]
  i2084.minCount = i2085[2]
  i2084.maxCount = i2085[3]
  i2084.repeatInterval = i2085[4]
  i2084.time = i2085[5]
  return i2084
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2086 = root || new pc.ParticleSystemRotationBySpeed()
  var i2087 = data
  i2086.enabled = !!i2087[0]
  i2086.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2087[1], i2086.x)
  i2086.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2087[2], i2086.y)
  i2086.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2087[3], i2086.z)
  i2086.separateAxes = !!i2087[4]
  i2086.range = new pc.Vec2( i2087[5], i2087[6] )
  return i2086
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2088 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2089 = data
  i2088.enabled = !!i2089[0]
  i2088.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2089[1], i2088.x)
  i2088.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2089[2], i2088.y)
  i2088.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2089[3], i2088.z)
  i2088.separateAxes = !!i2089[4]
  return i2088
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2090 = root || new pc.ParticleSystemShape()
  var i2091 = data
  i2090.enabled = !!i2091[0]
  i2090.shapeType = i2091[1]
  i2090.randomDirectionAmount = i2091[2]
  i2090.sphericalDirectionAmount = i2091[3]
  i2090.randomPositionAmount = i2091[4]
  i2090.alignToDirection = !!i2091[5]
  i2090.radius = i2091[6]
  i2090.radiusMode = i2091[7]
  i2090.radiusSpread = i2091[8]
  i2090.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2091[9], i2090.radiusSpeed)
  i2090.radiusThickness = i2091[10]
  i2090.angle = i2091[11]
  i2090.length = i2091[12]
  i2090.boxThickness = new pc.Vec3( i2091[13], i2091[14], i2091[15] )
  i2090.meshShapeType = i2091[16]
  request.r(i2091[17], i2091[18], 0, i2090, 'mesh')
  request.r(i2091[19], i2091[20], 0, i2090, 'meshRenderer')
  request.r(i2091[21], i2091[22], 0, i2090, 'skinnedMeshRenderer')
  i2090.useMeshMaterialIndex = !!i2091[23]
  i2090.meshMaterialIndex = i2091[24]
  i2090.useMeshColors = !!i2091[25]
  i2090.normalOffset = i2091[26]
  i2090.arc = i2091[27]
  i2090.arcMode = i2091[28]
  i2090.arcSpread = i2091[29]
  i2090.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2091[30], i2090.arcSpeed)
  i2090.donutRadius = i2091[31]
  i2090.position = new pc.Vec3( i2091[32], i2091[33], i2091[34] )
  i2090.rotation = new pc.Vec3( i2091[35], i2091[36], i2091[37] )
  i2090.scale = new pc.Vec3( i2091[38], i2091[39], i2091[40] )
  return i2090
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2092 = root || new pc.ParticleSystemSizeBySpeed()
  var i2093 = data
  i2092.enabled = !!i2093[0]
  i2092.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2093[1], i2092.x)
  i2092.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2093[2], i2092.y)
  i2092.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2093[3], i2092.z)
  i2092.separateAxes = !!i2093[4]
  i2092.range = new pc.Vec2( i2093[5], i2093[6] )
  return i2092
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2094 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2095 = data
  i2094.enabled = !!i2095[0]
  i2094.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2095[1], i2094.x)
  i2094.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2095[2], i2094.y)
  i2094.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2095[3], i2094.z)
  i2094.separateAxes = !!i2095[4]
  return i2094
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2096 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2097 = data
  i2096.enabled = !!i2097[0]
  i2096.mode = i2097[1]
  i2096.animation = i2097[2]
  i2096.numTilesX = i2097[3]
  i2096.numTilesY = i2097[4]
  i2096.useRandomRow = !!i2097[5]
  i2096.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2097[6], i2096.frameOverTime)
  i2096.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2097[7], i2096.startFrame)
  i2096.cycleCount = i2097[8]
  i2096.rowIndex = i2097[9]
  i2096.flipU = i2097[10]
  i2096.flipV = i2097[11]
  i2096.spriteCount = i2097[12]
  var i2099 = i2097[13]
  var i2098 = []
  for(var i = 0; i < i2099.length; i += 2) {
  request.r(i2099[i + 0], i2099[i + 1], 2, i2098, '')
  }
  i2096.sprites = i2098
  return i2096
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2102 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2103 = data
  i2102.enabled = !!i2103[0]
  i2102.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2103[1], i2102.x)
  i2102.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2103[2], i2102.y)
  i2102.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2103[3], i2102.z)
  i2102.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2103[4], i2102.radial)
  i2102.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2103[5], i2102.speedModifier)
  i2102.space = i2103[6]
  i2102.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2103[7], i2102.orbitalX)
  i2102.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2103[8], i2102.orbitalY)
  i2102.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2103[9], i2102.orbitalZ)
  i2102.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2103[10], i2102.orbitalOffsetX)
  i2102.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2103[11], i2102.orbitalOffsetY)
  i2102.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2103[12], i2102.orbitalOffsetZ)
  return i2102
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2104 = root || new pc.ParticleSystemNoise()
  var i2105 = data
  i2104.enabled = !!i2105[0]
  i2104.separateAxes = !!i2105[1]
  i2104.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2105[2], i2104.strengthX)
  i2104.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2105[3], i2104.strengthY)
  i2104.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2105[4], i2104.strengthZ)
  i2104.frequency = i2105[5]
  i2104.damping = !!i2105[6]
  i2104.octaveCount = i2105[7]
  i2104.octaveMultiplier = i2105[8]
  i2104.octaveScale = i2105[9]
  i2104.quality = i2105[10]
  i2104.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2105[11], i2104.scrollSpeed)
  i2104.scrollSpeedMultiplier = i2105[12]
  i2104.remapEnabled = !!i2105[13]
  i2104.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2105[14], i2104.remapX)
  i2104.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2105[15], i2104.remapY)
  i2104.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2105[16], i2104.remapZ)
  i2104.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2105[17], i2104.positionAmount)
  i2104.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2105[18], i2104.rotationAmount)
  i2104.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2105[19], i2104.sizeAmount)
  return i2104
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2106 = root || new pc.ParticleSystemInheritVelocity()
  var i2107 = data
  i2106.enabled = !!i2107[0]
  i2106.mode = i2107[1]
  i2106.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2107[2], i2106.curve)
  return i2106
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2108 = root || new pc.ParticleSystemForceOverLifetime()
  var i2109 = data
  i2108.enabled = !!i2109[0]
  i2108.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2109[1], i2108.x)
  i2108.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2109[2], i2108.y)
  i2108.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2109[3], i2108.z)
  i2108.space = i2109[4]
  i2108.randomized = !!i2109[5]
  return i2108
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2110 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2111 = data
  i2110.enabled = !!i2111[0]
  i2110.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2111[1], i2110.limit)
  i2110.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2111[2], i2110.limitX)
  i2110.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2111[3], i2110.limitY)
  i2110.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2111[4], i2110.limitZ)
  i2110.dampen = i2111[5]
  i2110.separateAxes = !!i2111[6]
  i2110.space = i2111[7]
  i2110.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2111[8], i2110.drag)
  i2110.multiplyDragByParticleSize = !!i2111[9]
  i2110.multiplyDragByParticleVelocity = !!i2111[10]
  return i2110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2113 = data
  request.r(i2113[0], i2113[1], 0, i2112, 'mesh')
  i2112.meshCount = i2113[2]
  i2112.activeVertexStreamsCount = i2113[3]
  i2112.alignment = i2113[4]
  i2112.renderMode = i2113[5]
  i2112.sortMode = i2113[6]
  i2112.lengthScale = i2113[7]
  i2112.velocityScale = i2113[8]
  i2112.cameraVelocityScale = i2113[9]
  i2112.normalDirection = i2113[10]
  i2112.sortingFudge = i2113[11]
  i2112.minParticleSize = i2113[12]
  i2112.maxParticleSize = i2113[13]
  i2112.pivot = new pc.Vec3( i2113[14], i2113[15], i2113[16] )
  request.r(i2113[17], i2113[18], 0, i2112, 'trailMaterial')
  i2112.applyActiveColorSpace = !!i2113[19]
  i2112.enabled = !!i2113[20]
  request.r(i2113[21], i2113[22], 0, i2112, 'sharedMaterial')
  var i2115 = i2113[23]
  var i2114 = []
  for(var i = 0; i < i2115.length; i += 2) {
  request.r(i2115[i + 0], i2115[i + 1], 2, i2114, '')
  }
  i2112.sharedMaterials = i2114
  i2112.receiveShadows = !!i2113[24]
  i2112.shadowCastingMode = i2113[25]
  i2112.sortingLayerID = i2113[26]
  i2112.sortingOrder = i2113[27]
  i2112.lightmapIndex = i2113[28]
  i2112.lightmapSceneIndex = i2113[29]
  i2112.lightmapScaleOffset = new pc.Vec4( i2113[30], i2113[31], i2113[32], i2113[33] )
  i2112.lightProbeUsage = i2113[34]
  i2112.reflectionProbeUsage = i2113[35]
  return i2112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2119 = data
  request.r(i2119[0], i2119[1], 0, i2118, 'clip')
  request.r(i2119[2], i2119[3], 0, i2118, 'outputAudioMixerGroup')
  i2118.playOnAwake = !!i2119[4]
  i2118.loop = !!i2119[5]
  i2118.time = i2119[6]
  i2118.volume = i2119[7]
  i2118.pitch = i2119[8]
  i2118.enabled = !!i2119[9]
  return i2118
}

Deserializers["UnityEngine.UI.Outline"] = function (request, data, root) {
  var i2120 = root || request.c( 'UnityEngine.UI.Outline' )
  var i2121 = data
  i2120.m_EffectColor = new pc.Color(i2121[0], i2121[1], i2121[2], i2121[3])
  i2120.m_EffectDistance = new pc.Vec2( i2121[4], i2121[5] )
  i2120.m_UseGraphicAlpha = !!i2121[6]
  return i2120
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i2122 = root || request.c( 'UnityEngine.UI.Slider' )
  var i2123 = data
  request.r(i2123[0], i2123[1], 0, i2122, 'm_FillRect')
  request.r(i2123[2], i2123[3], 0, i2122, 'm_HandleRect')
  i2122.m_Direction = i2123[4]
  i2122.m_MinValue = i2123[5]
  i2122.m_MaxValue = i2123[6]
  i2122.m_WholeNumbers = !!i2123[7]
  i2122.m_Value = i2123[8]
  i2122.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i2123[9], i2122.m_OnValueChanged)
  i2122.m_Navigation = request.d('UnityEngine.UI.Navigation', i2123[10], i2122.m_Navigation)
  i2122.m_Transition = i2123[11]
  i2122.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2123[12], i2122.m_Colors)
  i2122.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2123[13], i2122.m_SpriteState)
  i2122.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2123[14], i2122.m_AnimationTriggers)
  i2122.m_Interactable = !!i2123[15]
  request.r(i2123[16], i2123[17], 0, i2122, 'm_TargetGraphic')
  return i2122
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i2124 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i2125 = data
  i2124.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2125[0], i2124.m_PersistentCalls)
  return i2124
}

Deserializers["Scripts.MusicManager"] = function (request, data, root) {
  var i2126 = root || request.c( 'Scripts.MusicManager' )
  var i2127 = data
  return i2126
}

Deserializers["Scripts.SpriteSwapper"] = function (request, data, root) {
  var i2128 = root || request.c( 'Scripts.SpriteSwapper' )
  var i2129 = data
  request.r(i2129[0], i2129[1], 0, i2128, 'enabledSprite')
  request.r(i2129[2], i2129[3], 0, i2128, 'disabledSprite')
  return i2128
}

Deserializers["Scripts.AnimatedButton"] = function (request, data, root) {
  var i2130 = root || request.c( 'Scripts.AnimatedButton' )
  var i2131 = data
  i2130.interactable = !!i2131[0]
  i2130.m_OnClick = request.d('Scripts.ButtonClickedEvent', i2131[1], i2130.m_OnClick)
  return i2130
}

Deserializers["Scripts.ButtonClickedEvent"] = function (request, data, root) {
  var i2132 = root || request.c( 'Scripts.ButtonClickedEvent' )
  var i2133 = data
  i2132.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2133[0], i2132.m_PersistentCalls)
  return i2132
}

Deserializers["Scripts.SoundManager"] = function (request, data, root) {
  var i2134 = root || request.c( 'Scripts.SoundManager' )
  var i2135 = data
  return i2134
}

Deserializers["Scripts.SceneTransition"] = function (request, data, root) {
  var i2136 = root || request.c( 'Scripts.SceneTransition' )
  var i2137 = data
  i2136.scene = i2137[0]
  i2136.duration = i2137[1]
  i2136.color = new pc.Color(i2137[2], i2137[3], i2137[4], i2137[5])
  return i2136
}

Deserializers["LevelTaskBox"] = function (request, data, root) {
  var i2138 = root || request.c( 'LevelTaskBox' )
  var i2139 = data
  request.r(i2139[0], i2139[1], 0, i2138, '_tileImage')
  request.r(i2139[2], i2139[3], 0, i2138, '_missionCountText')
  request.r(i2139[4], i2139[5], 0, i2138, '_currentTileCountText')
  request.r(i2139[6], i2139[7], 0, i2138, '_checkedIcon')
  return i2138
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i2140 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i2141 = data
  i2140.m_Spacing = i2141[0]
  i2140.m_ChildForceExpandWidth = !!i2141[1]
  i2140.m_ChildForceExpandHeight = !!i2141[2]
  i2140.m_ChildControlWidth = !!i2141[3]
  i2140.m_ChildControlHeight = !!i2141[4]
  i2140.m_ChildScaleWidth = !!i2141[5]
  i2140.m_ChildScaleHeight = !!i2141[6]
  i2140.m_ReverseArrangement = !!i2141[7]
  i2140.m_Padding = UnityEngine.RectOffset.FromPaddings(i2141[8], i2141[9], i2141[10], i2141[11])
  i2140.m_ChildAlignment = i2141[12]
  return i2140
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2142 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2143 = data
  i2142.m_hasFontAssetChanged = !!i2143[0]
  request.r(i2143[1], i2143[2], 0, i2142, 'm_baseMaterial')
  i2142.m_maskOffset = new pc.Vec4( i2143[3], i2143[4], i2143[5], i2143[6] )
  i2142.m_text = i2143[7]
  i2142.m_isRightToLeft = !!i2143[8]
  request.r(i2143[9], i2143[10], 0, i2142, 'm_fontAsset')
  request.r(i2143[11], i2143[12], 0, i2142, 'm_sharedMaterial')
  var i2145 = i2143[13]
  var i2144 = []
  for(var i = 0; i < i2145.length; i += 2) {
  request.r(i2145[i + 0], i2145[i + 1], 2, i2144, '')
  }
  i2142.m_fontSharedMaterials = i2144
  request.r(i2143[14], i2143[15], 0, i2142, 'm_fontMaterial')
  var i2147 = i2143[16]
  var i2146 = []
  for(var i = 0; i < i2147.length; i += 2) {
  request.r(i2147[i + 0], i2147[i + 1], 2, i2146, '')
  }
  i2142.m_fontMaterials = i2146
  i2142.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2143[17], i2143[18], i2143[19], i2143[20])
  i2142.m_fontColor = new pc.Color(i2143[21], i2143[22], i2143[23], i2143[24])
  i2142.m_enableVertexGradient = !!i2143[25]
  i2142.m_colorMode = i2143[26]
  i2142.m_fontColorGradient = request.d('TMPro.VertexGradient', i2143[27], i2142.m_fontColorGradient)
  request.r(i2143[28], i2143[29], 0, i2142, 'm_fontColorGradientPreset')
  request.r(i2143[30], i2143[31], 0, i2142, 'm_spriteAsset')
  i2142.m_tintAllSprites = !!i2143[32]
  request.r(i2143[33], i2143[34], 0, i2142, 'm_StyleSheet')
  i2142.m_TextStyleHashCode = i2143[35]
  i2142.m_overrideHtmlColors = !!i2143[36]
  i2142.m_faceColor = UnityEngine.Color32.ConstructColor(i2143[37], i2143[38], i2143[39], i2143[40])
  i2142.m_fontSize = i2143[41]
  i2142.m_fontSizeBase = i2143[42]
  i2142.m_fontWeight = i2143[43]
  i2142.m_enableAutoSizing = !!i2143[44]
  i2142.m_fontSizeMin = i2143[45]
  i2142.m_fontSizeMax = i2143[46]
  i2142.m_fontStyle = i2143[47]
  i2142.m_HorizontalAlignment = i2143[48]
  i2142.m_VerticalAlignment = i2143[49]
  i2142.m_textAlignment = i2143[50]
  i2142.m_characterSpacing = i2143[51]
  i2142.m_wordSpacing = i2143[52]
  i2142.m_lineSpacing = i2143[53]
  i2142.m_lineSpacingMax = i2143[54]
  i2142.m_paragraphSpacing = i2143[55]
  i2142.m_charWidthMaxAdj = i2143[56]
  i2142.m_enableWordWrapping = !!i2143[57]
  i2142.m_wordWrappingRatios = i2143[58]
  i2142.m_overflowMode = i2143[59]
  request.r(i2143[60], i2143[61], 0, i2142, 'm_linkedTextComponent')
  request.r(i2143[62], i2143[63], 0, i2142, 'parentLinkedComponent')
  i2142.m_enableKerning = !!i2143[64]
  i2142.m_enableExtraPadding = !!i2143[65]
  i2142.checkPaddingRequired = !!i2143[66]
  i2142.m_isRichText = !!i2143[67]
  i2142.m_parseCtrlCharacters = !!i2143[68]
  i2142.m_isOrthographic = !!i2143[69]
  i2142.m_isCullingEnabled = !!i2143[70]
  i2142.m_horizontalMapping = i2143[71]
  i2142.m_verticalMapping = i2143[72]
  i2142.m_uvLineOffset = i2143[73]
  i2142.m_geometrySortingOrder = i2143[74]
  i2142.m_IsTextObjectScaleStatic = !!i2143[75]
  i2142.m_VertexBufferAutoSizeReduction = !!i2143[76]
  i2142.m_useMaxVisibleDescender = !!i2143[77]
  i2142.m_pageToDisplay = i2143[78]
  i2142.m_margin = new pc.Vec4( i2143[79], i2143[80], i2143[81], i2143[82] )
  i2142.m_isUsingLegacyAnimationComponent = !!i2143[83]
  i2142.m_isVolumetricText = !!i2143[84]
  i2142.m_Maskable = !!i2143[85]
  request.r(i2143[86], i2143[87], 0, i2142, 'm_Material')
  i2142.m_Color = new pc.Color(i2143[88], i2143[89], i2143[90], i2143[91])
  i2142.m_RaycastTarget = !!i2143[92]
  i2142.m_RaycastPadding = new pc.Vec4( i2143[93], i2143[94], i2143[95], i2143[96] )
  return i2142
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2148 = root || request.c( 'TMPro.VertexGradient' )
  var i2149 = data
  i2148.topLeft = new pc.Color(i2149[0], i2149[1], i2149[2], i2149[3])
  i2148.topRight = new pc.Color(i2149[4], i2149[5], i2149[6], i2149[7])
  i2148.bottomLeft = new pc.Color(i2149[8], i2149[9], i2149[10], i2149[11])
  i2148.bottomRight = new pc.Color(i2149[12], i2149[13], i2149[14], i2149[15])
  return i2148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2151 = data
  i2150.name = i2151[0]
  i2150.index = i2151[1]
  i2150.startup = !!i2151[2]
  return i2150
}

Deserializers["PlayableSettings"] = function (request, data, root) {
  var i2152 = root || request.c( 'PlayableSettings' )
  var i2153 = data
  i2152.m_SkipMainMenu = !!i2153[0]
  i2152.m_UseCTAScreen = !!i2153[1]
  i2152.m_EndcardActivationSendsToStore = !!i2153[2]
  i2152.m_ShowEndcardAfterXTaps = !!i2153[3]
  i2152.m_TapsBeforeShowingEndcard = i2153[4]
  return i2152
}

Deserializers["EndCardController"] = function (request, data, root) {
  var i2154 = root || request.c( 'EndCardController' )
  var i2155 = data
  i2154.alwaysShowEndcardTESTING = !!i2155[0]
  i2154.EndCardOpenedEvent = request.d('UnityEngine.Events.UnityEvent', i2155[1], i2154.EndCardOpenedEvent)
  i2154._backgroundColor = new pc.Color(i2155[2], i2155[3], i2155[4], i2155[5])
  request.r(i2155[6], i2155[7], 0, i2154, '_backgroundTexture')
  request.r(i2155[8], i2155[9], 0, i2154, '_iconTexture')
  i2154._iconColor = new pc.Color(i2155[10], i2155[11], i2155[12], i2155[13])
  request.r(i2155[14], i2155[15], 0, i2154, '_buttonTexture')
  i2154._buttonColor = new pc.Color(i2155[16], i2155[17], i2155[18], i2155[19])
  i2154._endCardDescriptionText = i2155[20]
  i2154._CTAButtonText = i2155[21]
  i2154._useBestFitOnCTA = !!i2155[22]
  i2154._CTAFontColor = new pc.Color(i2155[23], i2155[24], i2155[25], i2155[26])
  i2154._descriptionFontColor = new pc.Color(i2155[27], i2155[28], i2155[29], i2155[30])
  request.r(i2155[31], i2155[32], 0, i2154, '_CTAFont')
  request.r(i2155[33], i2155[34], 0, i2154, '_descriptionFont')
  i2154._CTAFontSize = i2155[35]
  i2154._descriptionFontSize = i2155[36]
  i2154._centerDescriptionX = !!i2155[37]
  i2154._centerDescriptionY = !!i2155[38]
  i2154._centerButtonX = !!i2155[39]
  i2154._centerButtonY = !!i2155[40]
  i2154._descriptionPositionX = i2155[41]
  i2154._descriptionPositionY = i2155[42]
  i2154._buttonPositionX = i2155[43]
  i2154._buttonPositionY = i2155[44]
  i2154._CTAFontSizeLandscape = i2155[45]
  i2154._descriptionFontSizeLandscape = i2155[46]
  i2154._centerDescriptionXLandscape = !!i2155[47]
  i2154._centerDescriptionYLandscape = !!i2155[48]
  i2154._centerButtonXLandscape = !!i2155[49]
  i2154._centerButtonYLandscape = !!i2155[50]
  i2154._descriptionPositionXLandscape = i2155[51]
  i2154._descriptionPositionYLandscape = i2155[52]
  i2154._buttonPositionXLandscape = i2155[53]
  i2154._buttonPositionYLandscape = i2155[54]
  i2154._centerIconX = !!i2155[55]
  i2154._centerIconY = !!i2155[56]
  i2154._iconPositionX = i2155[57]
  i2154._iconPositionY = i2155[58]
  i2154._iconSize = i2155[59]
  i2154._roundEdgesOnIcon = !!i2155[60]
  i2154._centerIconXLandscape = !!i2155[61]
  i2154._centerIconYLandscape = !!i2155[62]
  i2154._iconPositionXLandscape = i2155[63]
  i2154._iconPositionYLandscape = i2155[64]
  i2154._iconSizeLandscape = i2155[65]
  i2154._roundEdgesOnIconLandscape = !!i2155[66]
  i2154._endCardClickableOptions = i2155[67]
  i2154._buttonAnimationType = i2155[68]
  i2154._endCardPortraitAnimationType = i2155[69]
  i2154._endCardLandscapeAnimationType = i2155[70]
  request.r(i2155[71], i2155[72], 0, i2154, '_backgroundImage')
  request.r(i2155[73], i2155[74], 0, i2154, '_CTAButton')
  request.r(i2155[75], i2155[76], 0, i2154, '_ScreenCTAButton')
  request.r(i2155[77], i2155[78], 0, i2154, '_CTAButtonTextText')
  request.r(i2155[79], i2155[80], 0, i2154, '_EndCardDescriptionTextText')
  request.r(i2155[81], i2155[82], 0, i2154, '_maskIcon')
  request.r(i2155[83], i2155[84], 0, i2154, '_iconRect')
  request.r(i2155[85], i2155[86], 0, i2154, '_iconRectMask')
  request.r(i2155[87], i2155[88], 0, i2154, '_descriptionRect')
  request.r(i2155[89], i2155[90], 0, i2154, '_buttonRect')
  request.r(i2155[91], i2155[92], 0, i2154, '_CTAButtonAnimator')
  request.r(i2155[93], i2155[94], 0, i2154, '_endCardAnimator')
  request.r(i2155[95], i2155[96], 0, i2154, '_iconImage')
  request.r(i2155[97], i2155[98], 0, i2154, '_CTAButtonImage')
  return i2154
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2156 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2157 = data
  i2156.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2157[0], i2156.m_PersistentCalls)
  return i2156
}

Deserializers["EndCardSetScale"] = function (request, data, root) {
  var i2158 = root || request.c( 'EndCardSetScale' )
  var i2159 = data
  return i2158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2161 = data
  i2160.aspect = i2161[0]
  i2160.orthographic = !!i2161[1]
  i2160.orthographicSize = i2161[2]
  i2160.backgroundColor = new pc.Color(i2161[3], i2161[4], i2161[5], i2161[6])
  i2160.nearClipPlane = i2161[7]
  i2160.farClipPlane = i2161[8]
  i2160.fieldOfView = i2161[9]
  i2160.depth = i2161[10]
  i2160.clearFlags = i2161[11]
  i2160.cullingMask = i2161[12]
  i2160.rect = i2161[13]
  request.r(i2161[14], i2161[15], 0, i2160, 'targetTexture')
  i2160.usePhysicalProperties = !!i2161[16]
  i2160.focalLength = i2161[17]
  i2160.sensorSize = new pc.Vec2( i2161[18], i2161[19] )
  i2160.lensShift = new pc.Vec2( i2161[20], i2161[21] )
  i2160.gateFit = i2161[22]
  i2160.commandBufferCount = i2161[23]
  i2160.cameraType = i2161[24]
  i2160.enabled = !!i2161[25]
  return i2160
}

Deserializers["Scripts.PopupOpener"] = function (request, data, root) {
  var i2162 = root || request.c( 'Scripts.PopupOpener' )
  var i2163 = data
  request.r(i2163[0], i2163[1], 0, i2162, 'popupPrefab')
  return i2162
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i2164 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i2165 = data
  i2164.m_Spacing = i2165[0]
  i2164.m_ChildForceExpandWidth = !!i2165[1]
  i2164.m_ChildForceExpandHeight = !!i2165[2]
  i2164.m_ChildControlWidth = !!i2165[3]
  i2164.m_ChildControlHeight = !!i2165[4]
  i2164.m_ChildScaleWidth = !!i2165[5]
  i2164.m_ChildScaleHeight = !!i2165[6]
  i2164.m_ReverseArrangement = !!i2165[7]
  i2164.m_Padding = UnityEngine.RectOffset.FromPaddings(i2165[8], i2165[9], i2165[10], i2165[11])
  i2164.m_ChildAlignment = i2165[12]
  return i2164
}

Deserializers["Match3.Board"] = function (request, data, root) {
  var i2166 = root || request.c( 'Match3.Board' )
  var i2167 = data
  var i2169 = i2167[0]
  var i2168 = new (System.Collections.Generic.List$1(Bridge.ns('Match3.Row')))
  for(var i = 0; i < i2169.length; i += 1) {
    i2168.add(request.d('Match3.Row', i2169[i + 0]));
  }
  i2166._rows = i2168
  request.r(i2167[1], i2167[2], 0, i2166, '_levelManager')
  i2166._tweenDuration = i2167[3]
  request.r(i2167[4], i2167[5], 0, i2166, '_swappingOverlay')
  i2166._ensureNoStartingMatches = !!i2167[6]
  return i2166
}

Deserializers["Match3.Row"] = function (request, data, root) {
  var i2172 = root || request.c( 'Match3.Row' )
  var i2173 = data
  var i2175 = i2173[0]
  var i2174 = new (System.Collections.Generic.List$1(Bridge.ns('Match3.Tile')))
  for(var i = 0; i < i2175.length; i += 2) {
  request.r(i2175[i + 0], i2175[i + 1], 1, i2174, '')
  }
  i2172.Tiles = i2174
  return i2172
}

Deserializers["Match3.Tile"] = function (request, data, root) {
  var i2178 = root || request.c( 'Match3.Tile' )
  var i2179 = data
  i2178.X = i2179[0]
  i2178.Y = i2179[1]
  request.r(i2179[2], i2179[3], 0, i2178, 'Icon')
  return i2178
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2180 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2181 = data
  request.r(i2181[0], i2181[1], 0, i2180, 'm_FirstSelected')
  i2180.m_sendNavigationEvents = !!i2181[2]
  i2180.m_DragThreshold = i2181[3]
  return i2180
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2182 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2183 = data
  i2182.m_HorizontalAxis = i2183[0]
  i2182.m_VerticalAxis = i2183[1]
  i2182.m_SubmitButton = i2183[2]
  i2182.m_CancelButton = i2183[3]
  i2182.m_InputActionsPerSecond = i2183[4]
  i2182.m_RepeatDelay = i2183[5]
  i2182.m_ForceModuleActive = !!i2183[6]
  i2182.m_SendPointerHoverToParent = !!i2183[7]
  return i2182
}

Deserializers["Match3.Core.LevelManager"] = function (request, data, root) {
  var i2184 = root || request.c( 'Match3.Core.LevelManager' )
  var i2185 = data
  request.r(i2185[0], i2185[1], 0, i2184, '_movesCountText')
  request.r(i2185[2], i2185[3], 0, i2184, '_tasksParent')
  request.r(i2185[4], i2185[5], 0, i2184, '_levelComplete')
  request.r(i2185[6], i2185[7], 0, i2184, '_disableBoard')
  i2184._currentLevel = request.d('Match3.Settings.Level', i2185[8], i2184._currentLevel)
  request.r(i2185[9], i2185[10], 0, i2184, '_boxPrefab')
  request.r(i2185[11], i2185[12], 0, i2184, '_progressSlider')
  var i2187 = i2185[13]
  var i2186 = []
  for(var i = 0; i < i2187.length; i += 2) {
  request.r(i2187[i + 0], i2187[i + 1], 2, i2186, '')
  }
  i2184._stars = i2186
  request.r(i2185[14], i2185[15], 0, i2184, '_activeStarSprite')
  request.r(i2185[16], i2185[17], 0, i2184, '_inactiveStarSprite')
  i2184._progressTweenDuration = i2185[18]
  return i2184
}

Deserializers["Match3.Settings.Level"] = function (request, data, root) {
  var i2188 = root || request.c( 'Match3.Settings.Level' )
  var i2189 = data
  var i2191 = i2189[0]
  var i2190 = new (System.Collections.Generic.List$1(Bridge.ns('Match3.Settings.Mission')))
  for(var i = 0; i < i2191.length; i += 1) {
    i2190.add(request.d('Match3.Settings.Mission', i2191[i + 0]));
  }
  i2188.Missions = i2190
  i2188.TotalMoves = i2189[1]
  i2188.StarsCount = i2189[2]
  i2188.Score = i2189[3]
  i2188.LevelButtonType = i2189[4]
  return i2188
}

Deserializers["Match3.Settings.Mission"] = function (request, data, root) {
  var i2194 = root || request.c( 'Match3.Settings.Mission' )
  var i2195 = data
  i2194.TileType = i2195[0]
  i2194.TargetCount = i2195[1]
  return i2194
}

Deserializers["Scripts.BackgroundMusic"] = function (request, data, root) {
  var i2198 = root || request.c( 'Scripts.BackgroundMusic' )
  var i2199 = data
  return i2198
}

Deserializers["Settings.SettingsProvider"] = function (request, data, root) {
  var i2200 = root || request.c( 'Settings.SettingsProvider' )
  var i2201 = data
  var i2203 = i2201[0]
  var i2202 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.MonoBehaviour')))
  for(var i = 0; i < i2203.length; i += 2) {
  request.r(i2203[i + 0], i2203[i + 1], 1, i2202, '')
  }
  i2200._settingsList = i2202
  return i2200
}

Deserializers["Match3.TileTypeDatas"] = function (request, data, root) {
  var i2206 = root || request.c( 'Match3.TileTypeDatas' )
  var i2207 = data
  var i2209 = i2207[0]
  var i2208 = new (System.Collections.Generic.List$1(Bridge.ns('Match3.TileTypeData')))
  for(var i = 0; i < i2209.length; i += 1) {
    i2208.add(request.d('Match3.TileTypeData', i2209[i + 0]));
  }
  i2206.TileDatas = i2208
  return i2206
}

Deserializers["Match3.TileTypeData"] = function (request, data, root) {
  var i2212 = root || request.c( 'Match3.TileTypeData' )
  var i2213 = data
  i2212.TileType = i2213[0]
  i2212.TileAbility = i2213[1]
  request.r(i2213[2], i2213[3], 0, i2212, 'Sprite')
  return i2212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2215 = data
  i2214.ambientIntensity = i2215[0]
  i2214.reflectionIntensity = i2215[1]
  i2214.ambientMode = i2215[2]
  i2214.ambientLight = new pc.Color(i2215[3], i2215[4], i2215[5], i2215[6])
  i2214.ambientSkyColor = new pc.Color(i2215[7], i2215[8], i2215[9], i2215[10])
  i2214.ambientGroundColor = new pc.Color(i2215[11], i2215[12], i2215[13], i2215[14])
  i2214.ambientEquatorColor = new pc.Color(i2215[15], i2215[16], i2215[17], i2215[18])
  i2214.fogColor = new pc.Color(i2215[19], i2215[20], i2215[21], i2215[22])
  i2214.fogEndDistance = i2215[23]
  i2214.fogStartDistance = i2215[24]
  i2214.fogDensity = i2215[25]
  i2214.fog = !!i2215[26]
  request.r(i2215[27], i2215[28], 0, i2214, 'skybox')
  i2214.fogMode = i2215[29]
  var i2217 = i2215[30]
  var i2216 = []
  for(var i = 0; i < i2217.length; i += 1) {
    i2216.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2217[i + 0]) );
  }
  i2214.lightmaps = i2216
  i2214.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2215[31], i2214.lightProbes)
  i2214.lightmapsMode = i2215[32]
  i2214.mixedBakeMode = i2215[33]
  i2214.environmentLightingMode = i2215[34]
  i2214.ambientProbe = new pc.SphericalHarmonicsL2(i2215[35])
  i2214.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2215[36])
  i2214.useReferenceAmbientProbe = !!i2215[37]
  request.r(i2215[38], i2215[39], 0, i2214, 'customReflection')
  request.r(i2215[40], i2215[41], 0, i2214, 'defaultReflection')
  i2214.defaultReflectionMode = i2215[42]
  i2214.defaultReflectionResolution = i2215[43]
  i2214.sunLightObjectId = i2215[44]
  i2214.pixelLightCount = i2215[45]
  i2214.defaultReflectionHDR = !!i2215[46]
  i2214.hasLightDataAsset = !!i2215[47]
  i2214.hasManualGenerate = !!i2215[48]
  return i2214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2221 = data
  request.r(i2221[0], i2221[1], 0, i2220, 'lightmapColor')
  request.r(i2221[2], i2221[3], 0, i2220, 'lightmapDirection')
  return i2220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2222 = root || new UnityEngine.LightProbes()
  var i2223 = data
  return i2222
}

Deserializers["InteractiveEndCardBuilder.Scripts.ExampleEndCardCallScript"] = function (request, data, root) {
  var i2230 = root || request.c( 'InteractiveEndCardBuilder.Scripts.ExampleEndCardCallScript' )
  var i2231 = data
  return i2230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2233 = data
  var i2235 = i2233[0]
  var i2234 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2235.length; i += 1) {
    i2234.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2235[i + 0]));
  }
  i2232.ShaderCompilationErrors = i2234
  i2232.name = i2233[1]
  i2232.guid = i2233[2]
  var i2237 = i2233[3]
  var i2236 = []
  for(var i = 0; i < i2237.length; i += 1) {
    i2236.push( i2237[i + 0] );
  }
  i2232.shaderDefinedKeywords = i2236
  var i2239 = i2233[4]
  var i2238 = []
  for(var i = 0; i < i2239.length; i += 1) {
    i2238.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2239[i + 0]) );
  }
  i2232.passes = i2238
  var i2241 = i2233[5]
  var i2240 = []
  for(var i = 0; i < i2241.length; i += 1) {
    i2240.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2241[i + 0]) );
  }
  i2232.usePasses = i2240
  var i2243 = i2233[6]
  var i2242 = []
  for(var i = 0; i < i2243.length; i += 1) {
    i2242.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2243[i + 0]) );
  }
  i2232.defaultParameterValues = i2242
  request.r(i2233[7], i2233[8], 0, i2232, 'unityFallbackShader')
  i2232.readDepth = !!i2233[9]
  i2232.isCreatedByShaderGraph = !!i2233[10]
  i2232.disableBatching = !!i2233[11]
  i2232.compiled = !!i2233[12]
  return i2232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2247 = data
  i2246.shaderName = i2247[0]
  i2246.errorMessage = i2247[1]
  return i2246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2252 = root || new pc.UnityShaderPass()
  var i2253 = data
  i2252.id = i2253[0]
  i2252.subShaderIndex = i2253[1]
  i2252.name = i2253[2]
  i2252.passType = i2253[3]
  i2252.grabPassTextureName = i2253[4]
  i2252.usePass = !!i2253[5]
  i2252.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2253[6], i2252.zTest)
  i2252.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2253[7], i2252.zWrite)
  i2252.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2253[8], i2252.culling)
  i2252.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2253[9], i2252.blending)
  i2252.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2253[10], i2252.alphaBlending)
  i2252.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2253[11], i2252.colorWriteMask)
  i2252.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2253[12], i2252.offsetUnits)
  i2252.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2253[13], i2252.offsetFactor)
  i2252.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2253[14], i2252.stencilRef)
  i2252.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2253[15], i2252.stencilReadMask)
  i2252.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2253[16], i2252.stencilWriteMask)
  i2252.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2253[17], i2252.stencilOp)
  i2252.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2253[18], i2252.stencilOpFront)
  i2252.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2253[19], i2252.stencilOpBack)
  var i2255 = i2253[20]
  var i2254 = []
  for(var i = 0; i < i2255.length; i += 1) {
    i2254.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2255[i + 0]) );
  }
  i2252.tags = i2254
  var i2257 = i2253[21]
  var i2256 = []
  for(var i = 0; i < i2257.length; i += 1) {
    i2256.push( i2257[i + 0] );
  }
  i2252.passDefinedKeywords = i2256
  var i2259 = i2253[22]
  var i2258 = []
  for(var i = 0; i < i2259.length; i += 1) {
    i2258.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2259[i + 0]) );
  }
  i2252.passDefinedKeywordGroups = i2258
  var i2261 = i2253[23]
  var i2260 = []
  for(var i = 0; i < i2261.length; i += 1) {
    i2260.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2261[i + 0]) );
  }
  i2252.variants = i2260
  var i2263 = i2253[24]
  var i2262 = []
  for(var i = 0; i < i2263.length; i += 1) {
    i2262.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2263[i + 0]) );
  }
  i2252.excludedVariants = i2262
  i2252.hasDepthReader = !!i2253[25]
  return i2252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2265 = data
  i2264.val = i2265[0]
  i2264.name = i2265[1]
  return i2264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2267 = data
  i2266.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2267[0], i2266.src)
  i2266.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2267[1], i2266.dst)
  i2266.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2267[2], i2266.op)
  return i2266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2269 = data
  i2268.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2269[0], i2268.pass)
  i2268.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2269[1], i2268.fail)
  i2268.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2269[2], i2268.zFail)
  i2268.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2269[3], i2268.comp)
  return i2268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2273 = data
  i2272.name = i2273[0]
  i2272.value = i2273[1]
  return i2272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2277 = data
  var i2279 = i2277[0]
  var i2278 = []
  for(var i = 0; i < i2279.length; i += 1) {
    i2278.push( i2279[i + 0] );
  }
  i2276.keywords = i2278
  i2276.hasDiscard = !!i2277[1]
  return i2276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2283 = data
  i2282.passId = i2283[0]
  i2282.subShaderIndex = i2283[1]
  var i2285 = i2283[2]
  var i2284 = []
  for(var i = 0; i < i2285.length; i += 1) {
    i2284.push( i2285[i + 0] );
  }
  i2282.keywords = i2284
  i2282.vertexProgram = i2283[3]
  i2282.fragmentProgram = i2283[4]
  i2282.exportedForWebGl2 = !!i2283[5]
  i2282.readDepth = !!i2283[6]
  return i2282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2289 = data
  request.r(i2289[0], i2289[1], 0, i2288, 'shader')
  i2288.pass = i2289[2]
  return i2288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2293 = data
  i2292.name = i2293[0]
  i2292.type = i2293[1]
  i2292.value = new pc.Vec4( i2293[2], i2293[3], i2293[4], i2293[5] )
  i2292.textureValue = i2293[6]
  i2292.shaderPropertyFlag = i2293[7]
  return i2292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2295 = data
  i2294.name = i2295[0]
  request.r(i2295[1], i2295[2], 0, i2294, 'texture')
  i2294.aabb = i2295[3]
  i2294.vertices = i2295[4]
  i2294.triangles = i2295[5]
  i2294.textureRect = UnityEngine.Rect.MinMaxRect(i2295[6], i2295[7], i2295[8], i2295[9])
  i2294.packedRect = UnityEngine.Rect.MinMaxRect(i2295[10], i2295[11], i2295[12], i2295[13])
  i2294.border = new pc.Vec4( i2295[14], i2295[15], i2295[16], i2295[17] )
  i2294.transparency = i2295[18]
  i2294.bounds = i2295[19]
  i2294.pixelsPerUnit = i2295[20]
  i2294.textureWidth = i2295[21]
  i2294.textureHeight = i2295[22]
  i2294.nativeSize = new pc.Vec2( i2295[23], i2295[24] )
  i2294.pivot = new pc.Vec2( i2295[25], i2295[26] )
  i2294.textureRectOffset = new pc.Vec2( i2295[27], i2295[28] )
  return i2294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2297 = data
  i2296.name = i2297[0]
  return i2296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2299 = data
  i2298.name = i2299[0]
  i2298.wrapMode = i2299[1]
  i2298.isLooping = !!i2299[2]
  i2298.length = i2299[3]
  var i2301 = i2299[4]
  var i2300 = []
  for(var i = 0; i < i2301.length; i += 1) {
    i2300.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2301[i + 0]) );
  }
  i2298.curves = i2300
  var i2303 = i2299[5]
  var i2302 = []
  for(var i = 0; i < i2303.length; i += 1) {
    i2302.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2303[i + 0]) );
  }
  i2298.events = i2302
  i2298.halfPrecision = !!i2299[6]
  i2298._frameRate = i2299[7]
  i2298.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2299[8], i2298.localBounds)
  i2298.hasMuscleCurves = !!i2299[9]
  var i2305 = i2299[10]
  var i2304 = []
  for(var i = 0; i < i2305.length; i += 1) {
    i2304.push( i2305[i + 0] );
  }
  i2298.clipMuscleConstant = i2304
  i2298.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2299[11], i2298.clipBindingConstant)
  return i2298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2309 = data
  i2308.path = i2309[0]
  i2308.hash = i2309[1]
  i2308.componentType = i2309[2]
  i2308.property = i2309[3]
  i2308.keys = i2309[4]
  var i2311 = i2309[5]
  var i2310 = []
  for(var i = 0; i < i2311.length; i += 1) {
    i2310.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2311[i + 0]) );
  }
  i2308.objectReferenceKeys = i2310
  return i2308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2315 = data
  i2314.functionName = i2315[0]
  i2314.floatParameter = i2315[1]
  i2314.intParameter = i2315[2]
  i2314.stringParameter = i2315[3]
  request.r(i2315[4], i2315[5], 0, i2314, 'objectReferenceParameter')
  i2314.time = i2315[6]
  return i2314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2317 = data
  i2316.center = new pc.Vec3( i2317[0], i2317[1], i2317[2] )
  i2316.extends = new pc.Vec3( i2317[3], i2317[4], i2317[5] )
  return i2316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2321 = data
  var i2323 = i2321[0]
  var i2322 = []
  for(var i = 0; i < i2323.length; i += 1) {
    i2322.push( i2323[i + 0] );
  }
  i2320.genericBindings = i2322
  var i2325 = i2321[1]
  var i2324 = []
  for(var i = 0; i < i2325.length; i += 1) {
    i2324.push( i2325[i + 0] );
  }
  i2320.pptrCurveMapping = i2324
  return i2320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2329 = data
  i2328.time = i2329[0]
  request.r(i2329[1], i2329[2], 0, i2328, 'value')
  return i2328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2331 = data
  i2330.name = i2331[0]
  i2330.ascent = i2331[1]
  i2330.originalLineHeight = i2331[2]
  i2330.fontSize = i2331[3]
  var i2333 = i2331[4]
  var i2332 = []
  for(var i = 0; i < i2333.length; i += 1) {
    i2332.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2333[i + 0]) );
  }
  i2330.characterInfo = i2332
  request.r(i2331[5], i2331[6], 0, i2330, 'texture')
  i2330.originalFontSize = i2331[7]
  return i2330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2337 = data
  i2336.index = i2337[0]
  i2336.advance = i2337[1]
  i2336.bearing = i2337[2]
  i2336.glyphWidth = i2337[3]
  i2336.glyphHeight = i2337[4]
  i2336.minX = i2337[5]
  i2336.maxX = i2337[6]
  i2336.minY = i2337[7]
  i2336.maxY = i2337[8]
  i2336.uvBottomLeftX = i2337[9]
  i2336.uvBottomLeftY = i2337[10]
  i2336.uvBottomRightX = i2337[11]
  i2336.uvBottomRightY = i2337[12]
  i2336.uvTopLeftX = i2337[13]
  i2336.uvTopLeftY = i2337[14]
  i2336.uvTopRightX = i2337[15]
  i2336.uvTopRightY = i2337[16]
  return i2336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2339 = data
  i2338.name = i2339[0]
  var i2341 = i2339[1]
  var i2340 = []
  for(var i = 0; i < i2341.length; i += 1) {
    i2340.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2341[i + 0]) );
  }
  i2338.layers = i2340
  var i2343 = i2339[2]
  var i2342 = []
  for(var i = 0; i < i2343.length; i += 1) {
    i2342.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2343[i + 0]) );
  }
  i2338.parameters = i2342
  i2338.animationClips = i2339[3]
  i2338.avatarUnsupported = i2339[4]
  return i2338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2347 = data
  i2346.name = i2347[0]
  i2346.defaultWeight = i2347[1]
  i2346.blendingMode = i2347[2]
  i2346.avatarMask = i2347[3]
  i2346.syncedLayerIndex = i2347[4]
  i2346.syncedLayerAffectsTiming = !!i2347[5]
  i2346.syncedLayers = i2347[6]
  i2346.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2347[7], i2346.stateMachine)
  return i2346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2349 = data
  i2348.id = i2349[0]
  i2348.name = i2349[1]
  i2348.path = i2349[2]
  var i2351 = i2349[3]
  var i2350 = []
  for(var i = 0; i < i2351.length; i += 1) {
    i2350.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2351[i + 0]) );
  }
  i2348.states = i2350
  var i2353 = i2349[4]
  var i2352 = []
  for(var i = 0; i < i2353.length; i += 1) {
    i2352.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2353[i + 0]) );
  }
  i2348.machines = i2352
  var i2355 = i2349[5]
  var i2354 = []
  for(var i = 0; i < i2355.length; i += 1) {
    i2354.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2355[i + 0]) );
  }
  i2348.entryStateTransitions = i2354
  var i2357 = i2349[6]
  var i2356 = []
  for(var i = 0; i < i2357.length; i += 1) {
    i2356.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2357[i + 0]) );
  }
  i2348.exitStateTransitions = i2356
  var i2359 = i2349[7]
  var i2358 = []
  for(var i = 0; i < i2359.length; i += 1) {
    i2358.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2359[i + 0]) );
  }
  i2348.anyStateTransitions = i2358
  i2348.defaultStateId = i2349[8]
  return i2348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2363 = data
  i2362.id = i2363[0]
  i2362.name = i2363[1]
  i2362.cycleOffset = i2363[2]
  i2362.cycleOffsetParameter = i2363[3]
  i2362.cycleOffsetParameterActive = !!i2363[4]
  i2362.mirror = !!i2363[5]
  i2362.mirrorParameter = i2363[6]
  i2362.mirrorParameterActive = !!i2363[7]
  i2362.motionId = i2363[8]
  i2362.nameHash = i2363[9]
  i2362.fullPathHash = i2363[10]
  i2362.speed = i2363[11]
  i2362.speedParameter = i2363[12]
  i2362.speedParameterActive = !!i2363[13]
  i2362.tag = i2363[14]
  i2362.tagHash = i2363[15]
  i2362.writeDefaultValues = !!i2363[16]
  var i2365 = i2363[17]
  var i2364 = []
  for(var i = 0; i < i2365.length; i += 2) {
  request.r(i2365[i + 0], i2365[i + 1], 2, i2364, '')
  }
  i2362.behaviours = i2364
  var i2367 = i2363[18]
  var i2366 = []
  for(var i = 0; i < i2367.length; i += 1) {
    i2366.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2367[i + 0]) );
  }
  i2362.transitions = i2366
  return i2362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2373 = data
  i2372.fullPath = i2373[0]
  i2372.canTransitionToSelf = !!i2373[1]
  i2372.duration = i2373[2]
  i2372.exitTime = i2373[3]
  i2372.hasExitTime = !!i2373[4]
  i2372.hasFixedDuration = !!i2373[5]
  i2372.interruptionSource = i2373[6]
  i2372.offset = i2373[7]
  i2372.orderedInterruption = !!i2373[8]
  i2372.destinationStateId = i2373[9]
  i2372.isExit = !!i2373[10]
  i2372.mute = !!i2373[11]
  i2372.solo = !!i2373[12]
  var i2375 = i2373[13]
  var i2374 = []
  for(var i = 0; i < i2375.length; i += 1) {
    i2374.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2375[i + 0]) );
  }
  i2372.conditions = i2374
  return i2372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2379 = data
  i2378.mode = i2379[0]
  i2378.parameter = i2379[1]
  i2378.threshold = i2379[2]
  return i2378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2385 = data
  i2384.destinationStateId = i2385[0]
  i2384.isExit = !!i2385[1]
  i2384.mute = !!i2385[2]
  i2384.solo = !!i2385[3]
  var i2387 = i2385[4]
  var i2386 = []
  for(var i = 0; i < i2387.length; i += 1) {
    i2386.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2387[i + 0]) );
  }
  i2384.conditions = i2386
  return i2384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2391 = data
  i2390.defaultBool = !!i2391[0]
  i2390.defaultFloat = i2391[1]
  i2390.defaultInt = i2391[2]
  i2390.name = i2391[3]
  i2390.nameHash = i2391[4]
  i2390.type = i2391[5]
  return i2390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController"] = function (request, data, root) {
  var i2392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController' )
  var i2393 = data
  i2392.name = i2393[0]
  request.r(i2393[1], i2393[2], 0, i2392, '_runtimeAnimatorController')
  var i2395 = i2393[3]
  var i2394 = []
  for(var i = 0; i < i2395.length; i += 2) {
  request.r(i2395[i + 0], i2395[i + 1], 2, i2394, '')
  }
  i2392._originalAnimationClips = i2394
  var i2397 = i2393[4]
  var i2396 = []
  for(var i = 0; i < i2397.length; i += 2) {
  request.r(i2397[i + 0], i2397[i + 1], 2, i2396, '')
  }
  i2392._overrideAnimationClips = i2396
  var i2399 = i2393[5]
  var i2398 = []
  for(var i = 0; i < i2399.length; i += 2) {
  request.r(i2399[i + 0], i2399[i + 1], 2, i2398, '')
  }
  i2392._animationClips = i2398
  var i2401 = i2393[6]
  var i2400 = []
  for(var i = 0; i < i2401.length; i += 1) {
    i2400.push( request.d('UnityEngine.AnimationClipPair', i2401[i + 0]) );
  }
  i2392._animationClipPairs = i2400
  return i2392
}

Deserializers["UnityEngine.AnimationClipPair"] = function (request, data, root) {
  var i2406 = root || request.c( 'UnityEngine.AnimationClipPair' )
  var i2407 = data
  request.r(i2407[0], i2407[1], 0, i2406, 'originalClip')
  request.r(i2407[2], i2407[3], 0, i2406, 'overrideClip')
  return i2406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2409 = data
  i2408.name = i2409[0]
  i2408.bytes64 = i2409[1]
  i2408.data = i2409[2]
  return i2408
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2410 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2411 = data
  request.r(i2411[0], i2411[1], 0, i2410, 'atlas')
  i2410.normalStyle = i2411[2]
  i2410.normalSpacingOffset = i2411[3]
  i2410.boldStyle = i2411[4]
  i2410.boldSpacing = i2411[5]
  i2410.italicStyle = i2411[6]
  i2410.tabSize = i2411[7]
  i2410.hashCode = i2411[8]
  request.r(i2411[9], i2411[10], 0, i2410, 'material')
  i2410.materialHashCode = i2411[11]
  i2410.m_Version = i2411[12]
  i2410.m_SourceFontFileGUID = i2411[13]
  request.r(i2411[14], i2411[15], 0, i2410, 'm_SourceFontFile_EditorRef')
  request.r(i2411[16], i2411[17], 0, i2410, 'm_SourceFontFile')
  i2410.m_AtlasPopulationMode = i2411[18]
  i2410.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2411[19], i2410.m_FaceInfo)
  var i2413 = i2411[20]
  var i2412 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2413.length; i += 1) {
    i2412.add(request.d('UnityEngine.TextCore.Glyph', i2413[i + 0]));
  }
  i2410.m_GlyphTable = i2412
  var i2415 = i2411[21]
  var i2414 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2415.length; i += 1) {
    i2414.add(request.d('TMPro.TMP_Character', i2415[i + 0]));
  }
  i2410.m_CharacterTable = i2414
  var i2417 = i2411[22]
  var i2416 = []
  for(var i = 0; i < i2417.length; i += 2) {
  request.r(i2417[i + 0], i2417[i + 1], 2, i2416, '')
  }
  i2410.m_AtlasTextures = i2416
  i2410.m_AtlasTextureIndex = i2411[23]
  i2410.m_IsMultiAtlasTexturesEnabled = !!i2411[24]
  i2410.m_ClearDynamicDataOnBuild = !!i2411[25]
  var i2419 = i2411[26]
  var i2418 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2419.length; i += 1) {
    i2418.add(request.d('UnityEngine.TextCore.GlyphRect', i2419[i + 0]));
  }
  i2410.m_UsedGlyphRects = i2418
  var i2421 = i2411[27]
  var i2420 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2421.length; i += 1) {
    i2420.add(request.d('UnityEngine.TextCore.GlyphRect', i2421[i + 0]));
  }
  i2410.m_FreeGlyphRects = i2420
  i2410.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2411[28], i2410.m_fontInfo)
  i2410.m_AtlasWidth = i2411[29]
  i2410.m_AtlasHeight = i2411[30]
  i2410.m_AtlasPadding = i2411[31]
  i2410.m_AtlasRenderMode = i2411[32]
  var i2423 = i2411[33]
  var i2422 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2423.length; i += 1) {
    i2422.add(request.d('TMPro.TMP_Glyph', i2423[i + 0]));
  }
  i2410.m_glyphInfoList = i2422
  i2410.m_KerningTable = request.d('TMPro.KerningTable', i2411[34], i2410.m_KerningTable)
  i2410.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2411[35], i2410.m_FontFeatureTable)
  var i2425 = i2411[36]
  var i2424 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2425.length; i += 2) {
  request.r(i2425[i + 0], i2425[i + 1], 1, i2424, '')
  }
  i2410.fallbackFontAssets = i2424
  var i2427 = i2411[37]
  var i2426 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2427.length; i += 2) {
  request.r(i2427[i + 0], i2427[i + 1], 1, i2426, '')
  }
  i2410.m_FallbackFontAssetTable = i2426
  i2410.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2411[38], i2410.m_CreationSettings)
  var i2429 = i2411[39]
  var i2428 = []
  for(var i = 0; i < i2429.length; i += 1) {
    i2428.push( request.d('TMPro.TMP_FontWeightPair', i2429[i + 0]) );
  }
  i2410.m_FontWeightTable = i2428
  var i2431 = i2411[40]
  var i2430 = []
  for(var i = 0; i < i2431.length; i += 1) {
    i2430.push( request.d('TMPro.TMP_FontWeightPair', i2431[i + 0]) );
  }
  i2410.fontWeights = i2430
  return i2410
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2432 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2433 = data
  i2432.m_FaceIndex = i2433[0]
  i2432.m_FamilyName = i2433[1]
  i2432.m_StyleName = i2433[2]
  i2432.m_PointSize = i2433[3]
  i2432.m_Scale = i2433[4]
  i2432.m_UnitsPerEM = i2433[5]
  i2432.m_LineHeight = i2433[6]
  i2432.m_AscentLine = i2433[7]
  i2432.m_CapLine = i2433[8]
  i2432.m_MeanLine = i2433[9]
  i2432.m_Baseline = i2433[10]
  i2432.m_DescentLine = i2433[11]
  i2432.m_SuperscriptOffset = i2433[12]
  i2432.m_SuperscriptSize = i2433[13]
  i2432.m_SubscriptOffset = i2433[14]
  i2432.m_SubscriptSize = i2433[15]
  i2432.m_UnderlineOffset = i2433[16]
  i2432.m_UnderlineThickness = i2433[17]
  i2432.m_StrikethroughOffset = i2433[18]
  i2432.m_StrikethroughThickness = i2433[19]
  i2432.m_TabWidth = i2433[20]
  return i2432
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2436 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2437 = data
  i2436.m_Index = i2437[0]
  i2436.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2437[1], i2436.m_Metrics)
  i2436.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2437[2], i2436.m_GlyphRect)
  i2436.m_Scale = i2437[3]
  i2436.m_AtlasIndex = i2437[4]
  i2436.m_ClassDefinitionType = i2437[5]
  return i2436
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2438 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2439 = data
  i2438.m_Width = i2439[0]
  i2438.m_Height = i2439[1]
  i2438.m_HorizontalBearingX = i2439[2]
  i2438.m_HorizontalBearingY = i2439[3]
  i2438.m_HorizontalAdvance = i2439[4]
  return i2438
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2440 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2441 = data
  i2440.m_X = i2441[0]
  i2440.m_Y = i2441[1]
  i2440.m_Width = i2441[2]
  i2440.m_Height = i2441[3]
  return i2440
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2444 = root || request.c( 'TMPro.TMP_Character' )
  var i2445 = data
  i2444.m_ElementType = i2445[0]
  i2444.m_Unicode = i2445[1]
  i2444.m_GlyphIndex = i2445[2]
  i2444.m_Scale = i2445[3]
  return i2444
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2450 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2451 = data
  i2450.Name = i2451[0]
  i2450.PointSize = i2451[1]
  i2450.Scale = i2451[2]
  i2450.CharacterCount = i2451[3]
  i2450.LineHeight = i2451[4]
  i2450.Baseline = i2451[5]
  i2450.Ascender = i2451[6]
  i2450.CapHeight = i2451[7]
  i2450.Descender = i2451[8]
  i2450.CenterLine = i2451[9]
  i2450.SuperscriptOffset = i2451[10]
  i2450.SubscriptOffset = i2451[11]
  i2450.SubSize = i2451[12]
  i2450.Underline = i2451[13]
  i2450.UnderlineThickness = i2451[14]
  i2450.strikethrough = i2451[15]
  i2450.strikethroughThickness = i2451[16]
  i2450.TabWidth = i2451[17]
  i2450.Padding = i2451[18]
  i2450.AtlasWidth = i2451[19]
  i2450.AtlasHeight = i2451[20]
  return i2450
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2454 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2455 = data
  i2454.id = i2455[0]
  i2454.x = i2455[1]
  i2454.y = i2455[2]
  i2454.width = i2455[3]
  i2454.height = i2455[4]
  i2454.xOffset = i2455[5]
  i2454.yOffset = i2455[6]
  i2454.xAdvance = i2455[7]
  i2454.scale = i2455[8]
  return i2454
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2456 = root || request.c( 'TMPro.KerningTable' )
  var i2457 = data
  var i2459 = i2457[0]
  var i2458 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2459.length; i += 1) {
    i2458.add(request.d('TMPro.KerningPair', i2459[i + 0]));
  }
  i2456.kerningPairs = i2458
  return i2456
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2462 = root || request.c( 'TMPro.KerningPair' )
  var i2463 = data
  i2462.xOffset = i2463[0]
  i2462.m_FirstGlyph = i2463[1]
  i2462.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2463[2], i2462.m_FirstGlyphAdjustments)
  i2462.m_SecondGlyph = i2463[3]
  i2462.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2463[4], i2462.m_SecondGlyphAdjustments)
  i2462.m_IgnoreSpacingAdjustments = !!i2463[5]
  return i2462
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2464 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2465 = data
  var i2467 = i2465[0]
  var i2466 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2467.length; i += 1) {
    i2466.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2467[i + 0]));
  }
  i2464.m_GlyphPairAdjustmentRecords = i2466
  return i2464
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2470 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2471 = data
  i2470.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2471[0], i2470.m_FirstAdjustmentRecord)
  i2470.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2471[1], i2470.m_SecondAdjustmentRecord)
  i2470.m_FeatureLookupFlags = i2471[2]
  return i2470
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2474 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2475 = data
  i2474.sourceFontFileName = i2475[0]
  i2474.sourceFontFileGUID = i2475[1]
  i2474.pointSizeSamplingMode = i2475[2]
  i2474.pointSize = i2475[3]
  i2474.padding = i2475[4]
  i2474.packingMode = i2475[5]
  i2474.atlasWidth = i2475[6]
  i2474.atlasHeight = i2475[7]
  i2474.characterSetSelectionMode = i2475[8]
  i2474.characterSequence = i2475[9]
  i2474.referencedFontAssetGUID = i2475[10]
  i2474.referencedTextAssetGUID = i2475[11]
  i2474.fontStyle = i2475[12]
  i2474.fontStyleModifier = i2475[13]
  i2474.renderMode = i2475[14]
  i2474.includeFontFeatures = !!i2475[15]
  return i2474
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2478 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2479 = data
  request.r(i2479[0], i2479[1], 0, i2478, 'regularTypeface')
  request.r(i2479[2], i2479[3], 0, i2478, 'italicTypeface')
  return i2478
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2480 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2481 = data
  i2480.useSafeMode = !!i2481[0]
  i2480.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2481[1], i2480.safeModeOptions)
  i2480.timeScale = i2481[2]
  i2480.unscaledTimeScale = i2481[3]
  i2480.useSmoothDeltaTime = !!i2481[4]
  i2480.maxSmoothUnscaledTime = i2481[5]
  i2480.rewindCallbackMode = i2481[6]
  i2480.showUnityEditorReport = !!i2481[7]
  i2480.logBehaviour = i2481[8]
  i2480.drawGizmos = !!i2481[9]
  i2480.defaultRecyclable = !!i2481[10]
  i2480.defaultAutoPlay = i2481[11]
  i2480.defaultUpdateType = i2481[12]
  i2480.defaultTimeScaleIndependent = !!i2481[13]
  i2480.defaultEaseType = i2481[14]
  i2480.defaultEaseOvershootOrAmplitude = i2481[15]
  i2480.defaultEasePeriod = i2481[16]
  i2480.defaultAutoKill = !!i2481[17]
  i2480.defaultLoopType = i2481[18]
  i2480.debugMode = !!i2481[19]
  i2480.debugStoreTargetId = !!i2481[20]
  i2480.showPreviewPanel = !!i2481[21]
  i2480.storeSettingsLocation = i2481[22]
  i2480.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2481[23], i2480.modules)
  i2480.createASMDEF = !!i2481[24]
  i2480.showPlayingTweens = !!i2481[25]
  i2480.showPausedTweens = !!i2481[26]
  return i2480
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2482 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2483 = data
  i2482.logBehaviour = i2483[0]
  i2482.nestedTweenFailureBehaviour = i2483[1]
  return i2482
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2484 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2485 = data
  i2484.showPanel = !!i2485[0]
  i2484.audioEnabled = !!i2485[1]
  i2484.physicsEnabled = !!i2485[2]
  i2484.physics2DEnabled = !!i2485[3]
  i2484.spriteEnabled = !!i2485[4]
  i2484.uiEnabled = !!i2485[5]
  i2484.textMeshProEnabled = !!i2485[6]
  i2484.tk2DEnabled = !!i2485[7]
  i2484.deAudioEnabled = !!i2485[8]
  i2484.deUnityExtendedEnabled = !!i2485[9]
  i2484.epoOutlineEnabled = !!i2485[10]
  return i2484
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2486 = root || request.c( 'TMPro.TMP_Settings' )
  var i2487 = data
  i2486.m_enableWordWrapping = !!i2487[0]
  i2486.m_enableKerning = !!i2487[1]
  i2486.m_enableExtraPadding = !!i2487[2]
  i2486.m_enableTintAllSprites = !!i2487[3]
  i2486.m_enableParseEscapeCharacters = !!i2487[4]
  i2486.m_EnableRaycastTarget = !!i2487[5]
  i2486.m_GetFontFeaturesAtRuntime = !!i2487[6]
  i2486.m_missingGlyphCharacter = i2487[7]
  i2486.m_warningsDisabled = !!i2487[8]
  request.r(i2487[9], i2487[10], 0, i2486, 'm_defaultFontAsset')
  i2486.m_defaultFontAssetPath = i2487[11]
  i2486.m_defaultFontSize = i2487[12]
  i2486.m_defaultAutoSizeMinRatio = i2487[13]
  i2486.m_defaultAutoSizeMaxRatio = i2487[14]
  i2486.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2487[15], i2487[16] )
  i2486.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2487[17], i2487[18] )
  i2486.m_autoSizeTextContainer = !!i2487[19]
  i2486.m_IsTextObjectScaleStatic = !!i2487[20]
  var i2489 = i2487[21]
  var i2488 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2489.length; i += 2) {
  request.r(i2489[i + 0], i2489[i + 1], 1, i2488, '')
  }
  i2486.m_fallbackFontAssets = i2488
  i2486.m_matchMaterialPreset = !!i2487[22]
  request.r(i2487[23], i2487[24], 0, i2486, 'm_defaultSpriteAsset')
  i2486.m_defaultSpriteAssetPath = i2487[25]
  i2486.m_enableEmojiSupport = !!i2487[26]
  i2486.m_MissingCharacterSpriteUnicode = i2487[27]
  i2486.m_defaultColorGradientPresetsPath = i2487[28]
  request.r(i2487[29], i2487[30], 0, i2486, 'm_defaultStyleSheet')
  i2486.m_StyleSheetsResourcePath = i2487[31]
  request.r(i2487[32], i2487[33], 0, i2486, 'm_leadingCharacters')
  request.r(i2487[34], i2487[35], 0, i2486, 'm_followingCharacters')
  i2486.m_UseModernHangulLineBreakingRules = !!i2487[36]
  return i2486
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2490 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2491 = data
  i2490.m_GlyphIndex = i2491[0]
  i2490.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2491[1], i2490.m_GlyphValueRecord)
  return i2490
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2492 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2493 = data
  i2492.m_XPlacement = i2493[0]
  i2492.m_YPlacement = i2493[1]
  i2492.m_XAdvance = i2493[2]
  i2492.m_YAdvance = i2493[3]
  return i2492
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2494 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2495 = data
  request.r(i2495[0], i2495[1], 0, i2494, 'spriteSheet')
  var i2497 = i2495[2]
  var i2496 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2497.length; i += 1) {
    i2496.add(request.d('TMPro.TMP_Sprite', i2497[i + 0]));
  }
  i2494.spriteInfoList = i2496
  var i2499 = i2495[3]
  var i2498 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2499.length; i += 2) {
  request.r(i2499[i + 0], i2499[i + 1], 1, i2498, '')
  }
  i2494.fallbackSpriteAssets = i2498
  i2494.hashCode = i2495[4]
  request.r(i2495[5], i2495[6], 0, i2494, 'material')
  i2494.materialHashCode = i2495[7]
  i2494.m_Version = i2495[8]
  i2494.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2495[9], i2494.m_FaceInfo)
  var i2501 = i2495[10]
  var i2500 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2501.length; i += 1) {
    i2500.add(request.d('TMPro.TMP_SpriteCharacter', i2501[i + 0]));
  }
  i2494.m_SpriteCharacterTable = i2500
  var i2503 = i2495[11]
  var i2502 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2503.length; i += 1) {
    i2502.add(request.d('TMPro.TMP_SpriteGlyph', i2503[i + 0]));
  }
  i2494.m_SpriteGlyphTable = i2502
  return i2494
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2506 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2507 = data
  i2506.name = i2507[0]
  i2506.hashCode = i2507[1]
  i2506.unicode = i2507[2]
  i2506.pivot = new pc.Vec2( i2507[3], i2507[4] )
  request.r(i2507[5], i2507[6], 0, i2506, 'sprite')
  i2506.id = i2507[7]
  i2506.x = i2507[8]
  i2506.y = i2507[9]
  i2506.width = i2507[10]
  i2506.height = i2507[11]
  i2506.xOffset = i2507[12]
  i2506.yOffset = i2507[13]
  i2506.xAdvance = i2507[14]
  i2506.scale = i2507[15]
  return i2506
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2512 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2513 = data
  i2512.m_Name = i2513[0]
  i2512.m_HashCode = i2513[1]
  i2512.m_ElementType = i2513[2]
  i2512.m_Unicode = i2513[3]
  i2512.m_GlyphIndex = i2513[4]
  i2512.m_Scale = i2513[5]
  return i2512
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2516 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2517 = data
  request.r(i2517[0], i2517[1], 0, i2516, 'sprite')
  i2516.m_Index = i2517[2]
  i2516.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2517[3], i2516.m_Metrics)
  i2516.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2517[4], i2516.m_GlyphRect)
  i2516.m_Scale = i2517[5]
  i2516.m_AtlasIndex = i2517[6]
  i2516.m_ClassDefinitionType = i2517[7]
  return i2516
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2518 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2519 = data
  var i2521 = i2519[0]
  var i2520 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2521.length; i += 1) {
    i2520.add(request.d('TMPro.TMP_Style', i2521[i + 0]));
  }
  i2518.m_StyleList = i2520
  return i2518
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2524 = root || request.c( 'TMPro.TMP_Style' )
  var i2525 = data
  i2524.m_Name = i2525[0]
  i2524.m_HashCode = i2525[1]
  i2524.m_OpeningDefinition = i2525[2]
  i2524.m_ClosingDefinition = i2525[3]
  i2524.m_OpeningTagArray = i2525[4]
  i2524.m_ClosingTagArray = i2525[5]
  i2524.m_OpeningTagUnicodeArray = i2525[6]
  i2524.m_ClosingTagUnicodeArray = i2525[7]
  return i2524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2527 = data
  var i2529 = i2527[0]
  var i2528 = []
  for(var i = 0; i < i2529.length; i += 1) {
    i2528.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2529[i + 0]) );
  }
  i2526.files = i2528
  i2526.componentToPrefabIds = i2527[1]
  return i2526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2533 = data
  i2532.path = i2533[0]
  request.r(i2533[1], i2533[2], 0, i2532, 'unityObject')
  return i2532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2535 = data
  var i2537 = i2535[0]
  var i2536 = []
  for(var i = 0; i < i2537.length; i += 1) {
    i2536.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2537[i + 0]) );
  }
  i2534.scriptsExecutionOrder = i2536
  var i2539 = i2535[1]
  var i2538 = []
  for(var i = 0; i < i2539.length; i += 1) {
    i2538.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2539[i + 0]) );
  }
  i2534.sortingLayers = i2538
  var i2541 = i2535[2]
  var i2540 = []
  for(var i = 0; i < i2541.length; i += 1) {
    i2540.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2541[i + 0]) );
  }
  i2534.cullingLayers = i2540
  i2534.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2535[3], i2534.timeSettings)
  i2534.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2535[4], i2534.physicsSettings)
  i2534.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2535[5], i2534.physics2DSettings)
  i2534.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2535[6], i2534.qualitySettings)
  i2534.enableRealtimeShadows = !!i2535[7]
  i2534.enableAutoInstancing = !!i2535[8]
  i2534.enableStaticBatching = !!i2535[9]
  i2534.enableDynamicBatching = !!i2535[10]
  i2534.lightmapEncodingQuality = i2535[11]
  i2534.desiredColorSpace = i2535[12]
  var i2543 = i2535[13]
  var i2542 = []
  for(var i = 0; i < i2543.length; i += 1) {
    i2542.push( i2543[i + 0] );
  }
  i2534.allTags = i2542
  return i2534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2547 = data
  i2546.name = i2547[0]
  i2546.value = i2547[1]
  return i2546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2551 = data
  i2550.id = i2551[0]
  i2550.name = i2551[1]
  i2550.value = i2551[2]
  return i2550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2555 = data
  i2554.id = i2555[0]
  i2554.name = i2555[1]
  return i2554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2557 = data
  i2556.fixedDeltaTime = i2557[0]
  i2556.maximumDeltaTime = i2557[1]
  i2556.timeScale = i2557[2]
  i2556.maximumParticleTimestep = i2557[3]
  return i2556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2559 = data
  i2558.gravity = new pc.Vec3( i2559[0], i2559[1], i2559[2] )
  i2558.defaultSolverIterations = i2559[3]
  i2558.bounceThreshold = i2559[4]
  i2558.autoSyncTransforms = !!i2559[5]
  i2558.autoSimulation = !!i2559[6]
  var i2561 = i2559[7]
  var i2560 = []
  for(var i = 0; i < i2561.length; i += 1) {
    i2560.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2561[i + 0]) );
  }
  i2558.collisionMatrix = i2560
  return i2558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2565 = data
  i2564.enabled = !!i2565[0]
  i2564.layerId = i2565[1]
  i2564.otherLayerId = i2565[2]
  return i2564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2567 = data
  request.r(i2567[0], i2567[1], 0, i2566, 'material')
  i2566.gravity = new pc.Vec2( i2567[2], i2567[3] )
  i2566.positionIterations = i2567[4]
  i2566.velocityIterations = i2567[5]
  i2566.velocityThreshold = i2567[6]
  i2566.maxLinearCorrection = i2567[7]
  i2566.maxAngularCorrection = i2567[8]
  i2566.maxTranslationSpeed = i2567[9]
  i2566.maxRotationSpeed = i2567[10]
  i2566.baumgarteScale = i2567[11]
  i2566.baumgarteTOIScale = i2567[12]
  i2566.timeToSleep = i2567[13]
  i2566.linearSleepTolerance = i2567[14]
  i2566.angularSleepTolerance = i2567[15]
  i2566.defaultContactOffset = i2567[16]
  i2566.autoSimulation = !!i2567[17]
  i2566.queriesHitTriggers = !!i2567[18]
  i2566.queriesStartInColliders = !!i2567[19]
  i2566.callbacksOnDisable = !!i2567[20]
  i2566.reuseCollisionCallbacks = !!i2567[21]
  i2566.autoSyncTransforms = !!i2567[22]
  var i2569 = i2567[23]
  var i2568 = []
  for(var i = 0; i < i2569.length; i += 1) {
    i2568.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2569[i + 0]) );
  }
  i2566.collisionMatrix = i2568
  return i2566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2573 = data
  i2572.enabled = !!i2573[0]
  i2572.layerId = i2573[1]
  i2572.otherLayerId = i2573[2]
  return i2572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2575 = data
  var i2577 = i2575[0]
  var i2576 = []
  for(var i = 0; i < i2577.length; i += 1) {
    i2576.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2577[i + 0]) );
  }
  i2574.qualityLevels = i2576
  var i2579 = i2575[1]
  var i2578 = []
  for(var i = 0; i < i2579.length; i += 1) {
    i2578.push( i2579[i + 0] );
  }
  i2574.names = i2578
  i2574.shadows = i2575[2]
  i2574.anisotropicFiltering = i2575[3]
  i2574.antiAliasing = i2575[4]
  i2574.lodBias = i2575[5]
  i2574.shadowCascades = i2575[6]
  i2574.shadowDistance = i2575[7]
  i2574.shadowmaskMode = i2575[8]
  i2574.shadowProjection = i2575[9]
  i2574.shadowResolution = i2575[10]
  i2574.softParticles = !!i2575[11]
  i2574.softVegetation = !!i2575[12]
  i2574.activeColorSpace = i2575[13]
  i2574.desiredColorSpace = i2575[14]
  i2574.masterTextureLimit = i2575[15]
  i2574.maxQueuedFrames = i2575[16]
  i2574.particleRaycastBudget = i2575[17]
  i2574.pixelLightCount = i2575[18]
  i2574.realtimeReflectionProbes = !!i2575[19]
  i2574.shadowCascade2Split = i2575[20]
  i2574.shadowCascade4Split = new pc.Vec3( i2575[21], i2575[22], i2575[23] )
  i2574.streamingMipmapsActive = !!i2575[24]
  i2574.vSyncCount = i2575[25]
  i2574.asyncUploadBufferSize = i2575[26]
  i2574.asyncUploadTimeSlice = i2575[27]
  i2574.billboardsFaceCameraPosition = !!i2575[28]
  i2574.shadowNearPlaneOffset = i2575[29]
  i2574.streamingMipmapsMemoryBudget = i2575[30]
  i2574.maximumLODLevel = i2575[31]
  i2574.streamingMipmapsAddAllCameras = !!i2575[32]
  i2574.streamingMipmapsMaxLevelReduction = i2575[33]
  i2574.streamingMipmapsRenderersPerFrame = i2575[34]
  i2574.resolutionScalingFixedDPIFactor = i2575[35]
  i2574.streamingMipmapsMaxFileIORequests = i2575[36]
  i2574.currentQualityLevel = i2575[37]
  return i2574
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2582 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2583 = data
  i2582.xPlacement = i2583[0]
  i2582.yPlacement = i2583[1]
  i2582.xAdvance = i2583[2]
  i2582.yAdvance = i2583[3]
  return i2582
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

Deserializers.buildID = "2a727beb-489b-49d6-8630-08ef7db6deeb";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["TargetFrameRateSetter","Initialize"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

