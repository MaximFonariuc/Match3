using UnityEngine;
using UnityEngine.UI;
using DG.Tweening;

namespace Match3.Core
{
    public partial class LevelManager
    {
        [SerializeField] private Slider _progressSlider;
        [SerializeField] private Image[] _stars;
        [SerializeField] private Sprite _activeStarSprite;
        [SerializeField] private Sprite _inactiveStarSprite;
        [SerializeField] private float _progressTweenDuration = 0.3f;

        private int _completedMissions;
        private int _totalMissions;
        private readonly float[] _starThresholds = { 0.33f, 0.75f, 1f };

        private void InitProgressBar()
        {
            _completedMissions = 0;
            _totalMissions = _currentLevel.Missions.Count;

            if (_progressSlider != null)
            {
                _progressSlider.minValue = 0f;
                _progressSlider.maxValue = 1f;
                _progressSlider.onValueChanged.RemoveAllListeners();
                _progressSlider.onValueChanged.AddListener(UpdateStars);
            }

            UpdateProgressVisual();
        }

        public void AddProgress(int value)
        {
            _completedMissions += value;
            if (_completedMissions > _totalMissions)
                _completedMissions = _totalMissions;

            UpdateProgressVisual();
        }

        private void UpdateProgressVisual()
        {
            if (_progressSlider == null)
                return;

            float progress;
            if (_completedMissions <= 0)
            {
                progress = 0f;
            }
            else if (_completedMissions - 1 < _starThresholds.Length)
            {
                progress = _starThresholds[_completedMissions - 1];
            }
            else
            {
                progress = 1f;
            }

            _progressSlider.DOValue(progress, _progressTweenDuration);
            UpdateStars(progress);
        }

        private void UpdateStars(float progress)
        {
            for (int i = 0; i < _stars.Length && i < _starThresholds.Length; i++)
            {
                bool active = progress >= _starThresholds[i];
                _stars[i].sprite = active ? _activeStarSprite : _inactiveStarSprite;
            }
        }
    }
}