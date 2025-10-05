using System;
using System.Collections.Generic;
using System.Linq;
using UnityEditor;
using UnityEngine;
using Utils;

namespace Settings
{
    public class SettingsProvider : MonoSingleton<SettingsProvider>
    {
        [ContextMenu("Sort alphabetically")]
        public void SortAlphabetically()
        {
#if UNITY_EDITOR
            _settingsList = _settingsList.OrderBy(element => element.name).ToList();

            EditorUtility.SetDirty(this);
            AssetDatabase.SaveAssets();
#endif
        }

        private static string _containerName = "SettingsProvider";
        private static Dictionary<Type, MonoBehaviour> _settings;
        
        [SerializeField] private List<MonoBehaviour> _settingsList;
        public List<MonoBehaviour> SettingsList => _settingsList;

        protected override void Awake()
        {
            base.Awake();
            _settings = SettingsList.ToDictionary(x => x.GetType(), x => x);
        }

        [ContextMenu("Check list for identical types")]
        public void CheckTypes()
        {
            var types = new List<Type>();
            
            foreach (var s in _settingsList)
            {
                if (types.Contains(s.GetType()))
                {
                    Debug.LogError($"Found identical type: {types.Count()} - {s.GetType()}");
                }
                types.Add(s.GetType());
            }
            
        }

        public static T Get<T>() where T : MonoBehaviour
        {
            if (_settings.ContainsKey(typeof(T)))
            {
                return (T)_settings[typeof(T)];
            }

            Debug.LogWarning($"Not found settings of type \"{typeof(T).FullName}\"");
            return null;
        }
    }
}