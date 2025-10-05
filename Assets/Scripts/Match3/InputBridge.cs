using UnityEngine;
using UnityEngine.EventSystems;

namespace Match3
{
    public sealed class InputBridge : MonoBehaviour
    {
        public static InputBridge Instance { get; private set; }

        private void Awake()
        {
            Instance = this;
        }

        public void OnPointerDown(string data)
        {
            var parts = data.Split(',');
            float x = float.Parse(parts[0]);
            float y = float.Parse(parts[1]);
            PointerEventData e = new PointerEventData(EventSystem.current) { position = new Vector2(x, y) };
            ExecuteEvents.ExecuteHierarchy<IBeginDragHandler>(gameObject, e, ExecuteEvents.beginDragHandler);
        }

        public void OnPointerMove(string data)
        {
            var parts = data.Split(',');
            float x = float.Parse(parts[0]);
            float y = float.Parse(parts[1]);
            PointerEventData e = new PointerEventData(EventSystem.current) { position = new Vector2(x, y) };
            ExecuteEvents.ExecuteHierarchy<IDragHandler>(gameObject, e, ExecuteEvents.dragHandler);
        }

        public void OnPointerUp(string data)
        {
            var parts = data.Split(',');
            float x = float.Parse(parts[0]);
            float y = float.Parse(parts[1]);
            PointerEventData e = new PointerEventData(EventSystem.current) { position = new Vector2(x, y) };
            ExecuteEvents.ExecuteHierarchy<IEndDragHandler>(gameObject, e, ExecuteEvents.endDragHandler);
        }
    }
}