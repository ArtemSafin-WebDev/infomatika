$(function() {

	var backgroundVideo = $('.background-video');

	if ($('*').is(backgroundVideo)) {
		var bv = new Bideo();
		bv.init({
			// Video element
			videoEl: document.querySelector('.background-video'),

			// Container element
			container: document.querySelector('.background-video__wrapper'),

			// Resize
			resize: true,

			// autoplay: false,

			isMobile: window.matchMedia('(max-width: 768px)').matches,

			playButton: document.querySelector('.play'),
			pauseButton: document.querySelector('.pause'),

			// Array of objects containing the src and type
			// of different video formats to add
			src: [
				{
					src: backgroundVideo.attr('data-mp4'),
					type: 'video/mp4'
				},
				{
					src: backgroundVideo.attr('data-webm'),
					type: 'video/webm;codecs="vp8, vorbis"'
				}
			],

			// What to do once video loads (initial frame)
			onLoad: function () {
				document.querySelector('.video-cover').style.display = 'none';
			}
		});
	}
});