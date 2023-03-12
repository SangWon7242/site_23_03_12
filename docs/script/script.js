
// 슬라이더 박스1
function SliderBox1__init() {
	let SliderBox__i = 0;

	setInterval(function() {
		$('.slider-box-1').attr('data-index', ++SliderBox__i % 3);
	}, 3000);
}

SliderBox1__init();

// 탭 박스
function TabBox__init(no) {
	$('.tab-box-1__item').removeClass('active');
	$(`.tab-box-1__item-${no}`).addClass('active');
}

function Notice1Popup__init() {
	$('.notice-list > ul > li:first-child > a').click(function() {		
		NoticePopup__show();
	});
	
	$('.notice-1-popup .btn-close, .notice-1-popup .btn-close-2').click(function() {
		NoticePopup__hide();
	})	
}

Notice1Popup__init();

// 공지사항 팝업1
function NoticePopup__show() {
	$('.notice-1-popup').show();	
}

function NoticePopup__hide() {
	$('.notice-1-popup').hide();
}
