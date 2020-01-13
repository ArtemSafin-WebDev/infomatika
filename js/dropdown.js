$(function () {

	$('.dropdown-menu > li').on('click', function () {
		const thisEl = $(this);
		const thisParents = thisEl.parent().parent('.dropdown');
		const thisText = thisEl.html();
		const oldText = thisParents.find('.dropdown__label .dropdown__value').html();
		const thisValue = thisEl.attr('data-value');
		const oldValue = thisParents.find('.dropdown__label .dropdown__value').attr('data-value');
		thisEl.html(oldText).attr('data-value', oldValue);
		thisParents.find('.dropdown__label .dropdown__value').html(thisText).attr('data-value', thisValue);
		thisParents.find('[type="hidden"]').val(thisValue);
	});

});
