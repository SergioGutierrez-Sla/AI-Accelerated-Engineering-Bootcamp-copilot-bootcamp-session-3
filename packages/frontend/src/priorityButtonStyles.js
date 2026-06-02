import './priorityButtonStyles.css';

/**
 * Returns the CSS class names for a priority button.
 * @param {boolean} isSelected - Whether this button represents the active priority.
 * @param {boolean} [small] - Use the smaller variant (for task list rows).
 */
export function getPriorityButtonClassName(isSelected, small = false) {
  const state = isSelected ? 'priority-btn--selected' : 'priority-btn--unselected';
  return small ? `priority-btn priority-btn--sm ${state}` : `priority-btn ${state}`;
}
