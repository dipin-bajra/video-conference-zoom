<?php
/**
 * The template for displaying meeting countdown timer
 *
 * This template can be overridden by copying it to yourtheme/video-conferencing-zoom/fragments/countdown-timer.php.
 *
 * @author Deepen.
 * @created_on 11/19/19
 * @modified 3.3.0
 */

global $zoom;

if ( ! vczapi_pro_version_active() && ( $zoom['api']->type === 8 || $zoom['api']->type === 3 ) || empty( $zoom ) ) {
	?>
    <div class="dpn-zvc-sidebar-box">
        <p><?php _e( 'PRO version is required for this meeting to be displayed.', 'video-conferencing-with-zoom-api' ); ?></p>
    </div>
	<?php
}

if ( ! empty( $zoom['api']->start_time ) ) {
	?>
    <div class="dpn-zvc-sidebar-box">
        <div class="dpn-zvc-timer" id="dpn-zvc-timer" data-date="<?php echo $zoom['api']->start_time; ?>" data-state="<?php echo ! empty( $zoom['api']->state ) ? $zoom['api']->state : false; ?>" data-tz="<?php echo $zoom['api']->timezone; ?>">
            <div class="dpn-zvc-timer-cell">
                <div class="dpn-zvc-timer-cell-number">
                    <div id="dpn-zvc-timer-days"></div>
                </div>
                <div class="dpn-zvc-timer-cell-string"><?php _e( 'days', 'video-conferencing-with-zoom-api' ); ?></div>
            </div>
            <div class="dpn-zvc-timer-cell">
                <div class="dpn-zvc-timer-cell-number">
                    <div id="dpn-zvc-timer-hours"></div>
                </div>
                <div class="dpn-zvc-timer-cell-string"><?php _e( 'hours', 'video-conferencing-with-zoom-api' ); ?></div>
            </div>
            <div class="dpn-zvc-timer-cell">
                <div class="dpn-zvc-timer-cell-number">
                    <div id="dpn-zvc-timer-minutes"></div>
                </div>
                <div class="dpn-zvc-timer-cell-string"><?php _e( 'minutes', 'video-conferencing-with-zoom-api' ); ?></div>
            </div>
            <div class="dpn-zvc-timer-cell">
                <div class="dpn-zvc-timer-cell-number">
                    <div id="dpn-zvc-timer-seconds"></div>
                </div>
                <div class="dpn-zvc-timer-cell-string"><?php _e( 'seconds', 'video-conferencing-with-zoom-api' ); ?></div>
            </div>
        </div>
    </div>
	<?php
}