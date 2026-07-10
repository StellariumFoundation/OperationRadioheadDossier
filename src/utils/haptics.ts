/**
 * Centralized Haptic Feedback utility for the Operation Radiohead dossiers.
 * Uses the HTML5 Gamepad / Vibration API (`navigator.vibrate`) to provide tactile physical feedback.
 */

export const HAPTIC_PATTERNS = {
  // A clean, barely noticeable tactile tick for standard UI button presses or list navigations.
  light: 15,
  
  // A slightly stronger tactile feedback for primary actions or tab toggles.
  medium: 30,

  // A double tap for success / completed status.
  success: [45, 50, 45],

  // A rapid three-pulse warning or error alarm pattern to denote system blocks or alerts.
  error: [120, 60, 120, 60, 150],

  // Specialized Pattern: "Confirming a donation in the SupportSection"
  // A cascading rising pulse representing positive transmission / secure terminal deposit.
  donationConfirm: [25, 30, 25, 45, 50, 60],

  // Specialized Pattern: "Marking a victim remembrance"
  // A deep, solemn heartbeat double-pulse, representing organic memory and humanity.
  victimRemembrance: [100, 150, 100]
};

/**
 * Triggers a haptic vibration pattern if supported by the user's hardware.
 * @param pattern The predefined key from HAPTIC_PATTERNS or a custom number/array.
 */
export function triggerHaptic(pattern: keyof typeof HAPTIC_PATTERNS | number | number[]) {
  if (typeof window !== 'undefined' && typeof navigator !== 'undefined' && navigator.vibrate) {
    try {
      if (typeof pattern === 'string' && pattern in HAPTIC_PATTERNS) {
        const resolvedPattern = HAPTIC_PATTERNS[pattern as keyof typeof HAPTIC_PATTERNS];
        navigator.vibrate(resolvedPattern);
      } else {
        navigator.vibrate(pattern as any);
      }
    } catch (e) {
      console.warn('Haptic vibration failed or blocked by iframe context:', e);
    }
  }
}
